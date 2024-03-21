"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { UseFormReturn, useForm } from "react-hook-form";
import { z } from "zod";
import { Textarea } from "@ui/components/ui/textarea";
import { Button } from "@ui/components/ui/button";
import { Calendar } from "@ui/components/ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@ui/components/ui/form";
import { Input } from "@ui/components/ui/input";
import Link from "next/link";
import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@ui/components/ui/popover";
import { cn } from "@ui/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import Image from "next/image";

function FormStartupInfo({
  form,
}: {
  form: UseFormReturn<{
    startupName?: string;
    startupIndustry?: string;
    startupDescription?: string;
    startupPotential?: string;
    startupMotivation?: string;
    fellowshipMotivation?: string;
  }>;
}) {
  return (
    <>
      <div className="flex flex-row space-x-4">
        <FormField
          control={form.control}
          name="startupName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Startup name</FormLabel>
              <FormControl>
                <Input placeholder="Hooli" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="startupIndustry"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Industry</FormLabel>
              <FormControl>
                <Input placeholder="Xanthakis" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <FormField
        control={form.control}
        name="startupDescription"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Description</FormLabel>
            <FormControl>
              <Textarea {...field} />
            </FormControl>
            <FormDescription>
              Describe what your startup does, what problem does it solve? 4
              sentences max.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="startupPotential"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Potential</FormLabel>
            <FormControl>
              <Textarea {...field} />
            </FormControl>
            <FormDescription>
              Why do you think does your startup has potential in the future? 4
              sentences max.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="startupMotivation"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Motivation as Founder</FormLabel>
            <FormControl>
              <Textarea {...field} />
            </FormControl>
            <FormDescription>
              What motivates you as a founder? 4 sentences max.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="fellowshipMotivation"
        render={({ field }) => (
          <FormItem>
            <FormLabel>START Fellowship 24</FormLabel>
            <FormControl>
              <Textarea {...field} />
            </FormControl>
            <FormDescription>
              Why do you choose to apply to START Fellowship? 3 sentences max.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}

function FormEmail({ form }: { form: UseFormReturn<{ email?: string }> }) {
  return (
    <>
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Apply for START Fellowship
        </h1>
        <p className="text-muted-foreground text-sm">
          Enter your email below to get started.
        </p>
      </div>
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input
                id="email"
                placeholder="name@example.com"
                type="email"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <p className="text-muted-foreground px-8 text-center text-sm">
        By clicking continue, you agree to our{" "}
        <Link
          href="/terms"
          className="hover:text-primary underline underline-offset-4"
        >
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link
          href="/privacy"
          className="hover:text-primary underline underline-offset-4"
        >
          Privacy Policy
        </Link>
        .
      </p>
    </>
  );
}

function FormPersonalInfo({
  form,
}: {
  form: UseFormReturn<{
    firstname?: string;
    lastname?: string;
    phone?: string;
    dateofbirth?: Date;
  }>;
}) {
  return (
    <>
      <FormField
        control={form.control}
        name="firstname"
        render={({ field }) => (
          <FormItem>
            <FormLabel>First name</FormLabel>
            <FormControl>
              <Input placeholder="Vasilis" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="lastname"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Last name</FormLabel>
            <FormControl>
              <Input placeholder="Xanthakis" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="phone"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Phone</FormLabel>
            <FormControl>
              <Input placeholder="+49 15232031056" {...field} />
            </FormControl>
            <FormDescription>Your mobile phone number</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="dateofbirth"
        render={({ field }) => (
          <FormItem className="flex flex-col gap-2">
            <FormLabel>Date of birth</FormLabel>
            <Popover>
              <PopoverTrigger asChild>
                <FormControl>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-[240px] pl-3 text-left font-normal",
                      !field.value && "text-muted-foreground",
                    )}
                  >
                    {field.value ? (
                      format(field.value, "PPP")
                    ) : (
                      <span>Pick a date</span>
                    )}
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={field.value}
                  onSelect={field.onChange}
                  disabled={(date) =>
                    date > new Date() || date < new Date("1900-01-01")
                  }
                  {...field}
                  initialFocus
                />
              </PopoverContent>
            </Popover>

            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}

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

  function onEmailSubmit(values: z.infer<typeof emailFormSchema>) {
    console.log(values);
    setCurrentStep(1);
  }

  function onPersonalInfoSubmit(
    values: z.infer<typeof personalInfoFormSchema>,
  ) {
    console.log(values);
    setCurrentStep(2);
  }

  function onStartupInfoSubmit(values: z.infer<typeof startupInfoFormSchema>) {
    console.log(values);
    setCurrentStep(3);
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
