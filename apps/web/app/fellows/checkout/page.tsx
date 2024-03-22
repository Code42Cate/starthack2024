"use client";
import { summarizeActionItems } from "@/components/fellows/checkout/actions";
import { Button } from "@ui/components/ui/button";
import { Input } from "@ui/components/ui/input";
import { Label } from "@ui/components/ui/label";
import { Textarea } from "@ui/components/ui/textarea";
import { Loader2 } from "lucide-react";
import { useEffect, useRef, useTransition } from "react";

export default function CheckoutPager() {
  let [isPending, startTransition] = useTransition();

  useEffect(() => {
    if (isPending) return;

    // THIS CODE WILL RUN AFTER THE SERVER ACTION
  }, [isPending]);

  const onSubmit = async (formData: FormData) => {
    // RUN SOME VALIDATION HERE

    startTransition(() => {
      summarizeActionItems(formData);
    });
  };

  return (
    <div className="flex flex-col rounded-lg border-neutral-500 bg-white p-4 shadow-md">
      <div className="flex flex-col gap-4">
        <h1 className="text-xl font-bold">Weekly Checkout</h1>
        <div className="flex max-w-xl flex-col gap-4">
          <form className="space-y-2" action={onSubmit}>
            <Input type="hidden" name="founderId" value="20" />

            <Label>
              What did you accomplish this week? What are you struggling with?
            </Label>
            <Textarea
              name="text"
              id="text"
              rows={20}
              defaultValue={
                "Hey everyone, it's Sarah here, founder of TechSavvy Solutions, coming to you with our weekly update. So, uh, let's dive right in. It's been, uh, quite a rollercoaster of a week for us. First off, the good news: we finally closed that deal with InnovateX, you know, the one we've been chasing for like forever? Yeah, so super stoked about that. It's gonna be a game-changer for us, I can feel it. But, uh, on the flip side, we hit a few bumps along the way. Our lead developer, uh, John, yeah, John had a bit of a meltdown. Apparently, he spilled coffee on his laptop and, uh, lost like a week's worth of code. Not ideal, I know. But, hey, we're a resilient bunch, right? We'll bounce back from this. Oh, and let's not forget the fun we had with the internet outage yesterday. I mean, who knew a squirrel chewing through a cable could cause so much chaos? [Laughs] It's like something straight out of a comedy sketch. Anyway, despite all the hiccups, we're still pushing forward. We've got some exciting new features in the pipeline that I can't wait to share with you all. I won't spoil the surprise just yet, but let's just say it involves a lot of AI magic and some seriously cool tech. Oh, and speaking of tech, did you know that the average person spends like 3.5 hours a day on their phone? Crazy, right? I mean, I can't blame them, there's just so much cool stuff out there to explore. But I digress. [Clears throat] Back to business. Overall, I'd say it's been a mixed bag of a week. We've had our highs and lows, but isn't that just the nature of startup life? You roll with the punches and keep on hustling. Alright, that's all from me for now. Thanks for tuning in, and until next time, stay awesome, stay curious, and keep chasing those dreams. Peace out!"
              }
            />
            <div className="flex w-full flex-row items-center justify-between">
              <Label className="w-80">
                Record your voice instead and we summarize everything for you:
              </Label>
              <input type="file" accept="audio/mp3" />

              <Button type="submit" disabled={isPending}>
                {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
