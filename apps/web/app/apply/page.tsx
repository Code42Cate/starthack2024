import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@ui/components/ui/button";
import { cn } from "@ui/lib/utils";

import { ApplyForm } from "@/components/apply/apply-form";

export const metadata: Metadata = {
  title: "Apply for START Fellowship",
  description: "Application process for the START Fellowship program",
};

const partnerLogos = [
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
            {[
              ...partnerLogos,
              ...partnerLogos,
              ...partnerLogos,
              ...partnerLogos,
            ].map((logo, index) => (
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
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
            <ApplyForm />
          </div>
        </div>
      </div>
    </>
  );
}
