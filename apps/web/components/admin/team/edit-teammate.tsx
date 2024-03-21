"use client";
import { Button } from "@ui/components/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@ui/components/dialog";
import { Input } from "@ui/components/input";
import { Label } from "@ui/components/label";
import { updateTeammate } from "./actions";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Admin } from "database";

export function EditTeammateDialog({
  teammate,
  open,
  setOpen,
}: {
  teammate: Admin;
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  const router = useRouter();

  const { firstName, lastName, Id, email, position } = teammate;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Teammate</DialogTitle>
          <DialogDescription>
            Edit a teammate in your database.
          </DialogDescription>
        </DialogHeader>
        <form
          action={async (formData) => {
            await updateTeammate(formData);
            router.refresh();
            setOpen(false);
          }}
        >
          <Input hidden id="id" type="hidden" name="id" defaultValue={Id} />
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                First name
              </Label>
              <Input
                id="firstname"
                type="text"
                name="firstname"
                defaultValue={firstName}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Last name
              </Label>
              <Input
                id="lastname"
                type="text"
                name="lastname"
                defaultValue={lastName}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                name="email"
                defaultValue={email}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="position" className="text-right">
                Position
              </Label>
              <Input
                id="position"
                type="text"
                name="position"
                defaultValue={position}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Update Teammate</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
