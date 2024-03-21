import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Button, buttonVariants } from "@ui/components/ui/button";
import { UserAuthForm } from "@/components/apply/user-auth-form";
import { cn } from "@ui/lib/utils";
import { Label } from "@ui/components/ui/label";
import { Input } from "@ui/components/ui/input";
import { Switch } from "@ui/components/ui/switch";
import { Datepicker } from "@ui/components/ui/datepicker";

export const metadata: Metadata = {
  title: "Apply for START Fellowship",
  description: "Application process for the START Fellowship program",
};

const partnerLogos = [
  "/logos",
  "/logos/Advestra.png",
  "/logos/ewor.webp",
  "/logos/Geberit.webp",
  "/logos/Forbes.webp",
  "/logos/Helvetia.webp",
  "/logos/microsoft.webp",
];

export default function ApplyPage({
  searchParams: { step },
}: {
  searchParams: { step: string };
}) {
  return (
    <>
      <div className="md:hidden">
        <Image
          src="/examples/authentication-light.png"
          width={1280}
          height={843}
          alt="Authentication"
          className="block dark:hidden"
        />
        <Image
          src="/examples/authentication-dark.png"
          width={1280}
          height={843}
          alt="Authentication"
          className="hidden dark:block"
        />
      </div>
      <div className="container relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Link
          href="/examples/authentication"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "absolute right-4 top-4 md:right-8 md:top-8",
          )}
        >
          Login
        </Link>
        <div className="bg-muted relative hidden h-full flex-col p-10 text-white lg:flex dark:border-r">
          <div className="absolute inset-0 bg-black" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <Image src="/logo-white.svg" alt="Logo" width={120} height={40} />
          </div>
          <video
            src="/animation.mp4"
            width={800}
            height={800}
            className="z-20 mx-auto mt-24"
            autoPlay
            muted
            loop
          />
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-xl">
                &ldquo;We create opportunities for young entrepreneurs from
                LMICs, to become the change makers or tomorrow. &rdquo;
              </p>
            </blockquote>
          </div>
          <div className="relative z-20 mt-auto flex flex-row items-center gap-2 overflow-hidden">
            {partnerLogos.map((logo, index) => (
              <Image
                key={index}
                src={logo}
                width={100}
                height={100}
                alt="Partner Logo"
                // move continuously to the right
                className="animate-marquee mx-auto object-cover"
              />
            ))}
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            {(step === "0" || step === undefined) && (
              <>
                <div className="flex flex-col space-y-2 text-center">
                  <h1 className="text-2xl font-semibold tracking-tight">
                    Apply for START Fellowship
                  </h1>
                  <p className="text-muted-foreground text-sm">
                    Enter your email below to get started.
                  </p>
                </div>
                <UserAuthForm />
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
            )}

            {step === "1" && (
              <>
                <div className="grid grid-cols-6 items-center gap-4">
                  <Label htmlFor="name" className="col-span-2 text-right">
                    First name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    defaultValue="Pedro"
                    className="col-span-4"
                  />
                </div>

                <div className="grid grid-cols-6 items-center gap-4">
                  <Label htmlFor="name" className="col-span-2 text-right">
                    Last name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    defaultValue="Duarte"
                    className="col-span-4"
                  />
                </div>

                <div className="grid grid-cols-6 items-center gap-4">
                  <Label htmlFor="name" className="col-span-2 text-right">
                    Phone number
                  </Label>
                  <Input
                    id="name"
                    type="tel"
                    defaultValue="+49 1523 2031056"
                    className="col-span-4"
                  />
                </div>

                <div className="grid grid-cols-6 items-center gap-4">
                  <Label htmlFor="name" className="col-span-2 text-right">
                    Date of birth
                  </Label>
                  <Datepicker className="col-span-4" />
                </div>

                <div className="grid grid-cols-6 items-center gap-4">
                  <Label htmlFor="name" className="col-span-2 text-right">
                    EU passport
                  </Label>
                  <Switch className="col-span-4" />
                </div>

                <div>
                  <Link
                    href="/apply?step=2"
                    className="ring-offset-background focus-visible:ring-ring bg-primary text-primary-foreground hover:bg-primary/90 float-right inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                  >
                    Continue
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
