"use server";
import { prisma } from "database";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function transcribeAudioBlob(blob: Blob) {
  const audioFile = new File([blob], "voice.wav", { type: "audio/wav" });

  const transcription = await openai.audio.transcriptions.create({
    file: audioFile,
    model: "whisper-1",
  });

  console.log(transcription.text);
}

export async function findTitle(text: string) {
  const summary = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content:
          "Create a short and concise title for the following text. The title should be a maximum of 10 words and should summarize the text",
      },
      { role: "user", content: text },
    ],
  });

  return summary.choices[0].message.content;
}

export async function summarizeActionItems(formdata: FormData) {
  const text = formdata.get("text").toString();
  const founderId = Number(formdata.get("founderId").toString());

  const summary = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content:
          "You are an employee of a startup incubator/accelerator called START Fellowship. Startups that are part of this program are giving weekly check ins about their progress. You are supposed to find out if there are things where the accelerator can help. Services that START Fellowship provides is contact to alumnis, mentors, industry partners and investors. You must find actionable items for the START fellowship to do in order to address the mentioned issue. You must separate each issue with a paragraph, include a short description of the issue and how it might be solved. Be super concise. ONLY INCLUDE SUPER IMPORTANT THINGS. Do not use markdown or prefix the text with anything.",
      },
      { role: "user", content: formdata.get("text").toString() },
    ],
  });

  const summaryText = summary.choices[0].message.content;
  const actionItems = summaryText.split("\n").filter((item) => item !== "");
  const title = await findTitle(text);

  await prisma.checkout.create({
    data: {
      content: formdata.get("text").toString(),
      summary: summaryText,
      title,
      actionItems,
      founderId,
    },
  });

  return;
}
