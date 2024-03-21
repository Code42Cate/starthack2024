"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@ui/components/ui/button";
import { Form } from "@ui/components/ui/form";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FormPersonalInfo } from "./personalinfo-form";
import { FormStartupInfo } from "./startupinfo-form";
import { FormEmail } from "./email-form";

const emailFormSchema = z.object({
  email: z.string().email({
    message: "Invalid email address.",
  }),
});

const personalInfoFormSchema = z.object({
  firstname: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastname: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 characters.",
  }),
  dateofbirth: z.date({
    required_error: "Date of birth is required.",
  }),
});

const startupInfoFormSchema = z.object({
  startupName: z.string().min(2, {
    message: "Startup name must be at least 2 characters.",
  }),
  startupIndustry: z.string().min(2, {
    message: "Startup name must be at least 2 characters.",
  }),
  startupDescription: z.string().min(10, {
    message: "Startup name must be at least 10 characters.",
  }),
  startupPotential: z.string().min(10, {
    message: "Startup name must be at least 10 characters.",
  }),
  startupMotivation: z.string().min(10, {
    message: "Startup name must be at least 10 characters.",
  }),
  fellowshipMotivation: z.string().min(10, {
    message: "Startup name must be at least 10 characters.",
  }),
});

export function ApplyForm() {
  const emailForm = useForm<z.infer<typeof emailFormSchema>>({
    resolver: zodResolver(emailFormSchema),
    defaultValues: {
      email: "ubvja@student.kit.edu",
    },
  });

  const personalInfoForm = useForm<z.infer<typeof personalInfoFormSchema>>({
    resolver: zodResolver(personalInfoFormSchema),
    defaultValues: {
      dateofbirth: new Date("2000-06-14"),
      firstname: "Jonas",
      lastname: "Scholz",
      phone: "+49 15232031056",
    },
  });

  const startupInfoForm = useForm<z.infer<typeof startupInfoFormSchema>>({
    resolver: zodResolver(startupInfoFormSchema),
    defaultValues: {
      startupName: "Hooli",
      startupPotential: "I think mobile phones are the future",
      fellowshipMotivation: "Talked to some cool people",
      startupDescription: "Mobile phones with buttons!",
      startupIndustry: "Healthcare",
      startupMotivation: "I like mobile phones",
    },
  });

  const [applicationData, setApplicationData] = React.useState<{
    emailForm: z.infer<typeof emailFormSchema>;
    startupInfoForm: z.infer<typeof startupInfoFormSchema>;
    personalInfoForm: z.infer<typeof personalInfoFormSchema>;
  }>({ emailForm: null, startupInfoForm: null, personalInfoForm: null });

  function onEmailSubmit(emailForm: z.infer<typeof emailFormSchema>) {
    setApplicationData((curr) => ({ ...curr, emailForm }));
    setCurrentStep(1);
  }

  function onPersonalInfoSubmit(
    personalInfoForm: z.infer<typeof personalInfoFormSchema>,
  ) {
    setApplicationData((curr) => ({ ...curr, personalInfoForm }));
    setCurrentStep(2);
  }

  function onStartupInfoSubmit(
    startupInfoForm: z.infer<typeof startupInfoFormSchema>,
  ) {
    setApplicationData((curr) => ({ ...curr, startupInfoForm }));
    setCurrentStep(3);
    console.log(applicationData);
  }

  const [currentStep, setCurrentStep] = React.useState(0);

  if (currentStep === 0) {
    return (
      <Form {...emailForm}>
        <form
          onSubmit={emailForm.handleSubmit(onEmailSubmit)}
          className="w-[350px] space-y-4"
        >
          <FormEmail form={emailForm} />
          <Button className="w-full" variant="default" type="submit">
            Continue
          </Button>
        </form>
      </Form>
    );
  }

  if (currentStep === 1) {
    return (
      <Form {...personalInfoForm}>
        <form
          onSubmit={personalInfoForm.handleSubmit(onPersonalInfoSubmit)}
          className="space-y-4"
        >
          <FormPersonalInfo form={personalInfoForm} />
          <Button variant="default" type="submit">
            Continue
          </Button>
        </form>
      </Form>
    );
  }

  if (currentStep === 2) {
    return (
      <Form {...startupInfoForm}>
        <form
          onSubmit={startupInfoForm.handleSubmit(onStartupInfoSubmit)}
          className="space-y-4"
        >
          <FormStartupInfo form={startupInfoForm} />
          <Button type="submit" className="float-right">
            Submit
          </Button>
        </form>
      </Form>
    );
  }

  return (
    <div className="flex flex-col space-y-4 text-center">
      <h1 className="text-2xl font-semibold tracking-tight">
        Thank you for applying!
      </h1>
      <p className="text-neutral-700">
        We will get back to you as soon as possible. In the meantime,{" "}
        <Link
          className="text-[#FF6100] underline underline-offset-4"
          href="/public/fellows"
        >
          check out our alumni!
        </Link>
      </p>
      <Image
        priority
        alt="Success"
        className="rounded-lg shadow-sm"
        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTFvZXBhYm51MHhyOGRtNHA5N3QyczNscGFzOGxnanJrdXNmcDVpNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/oWjyixDbWuAk8/giphy.gif"
        width={500}
        height={200}
      />
    </div>
  );
}
