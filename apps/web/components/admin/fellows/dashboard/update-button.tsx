"use client";
import { Button } from "@ui/components/ui/button";
import { toast, Toaster } from "sonner";

export default function UpdateButton() {
  return (
    <>
      <Toaster />
      <Button
        className="ml-auto"
        onClick={() => {
          toast("Data has been requested from the founder");
        }}
      >
        Request Data
      </Button>
    </>
  );
}
