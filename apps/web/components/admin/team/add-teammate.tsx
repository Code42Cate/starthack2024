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
import { useState } from "react";
import { addTeammate } from "./actions";

export function AddTeammateDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add Teammate</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Teammate</DialogTitle>
          <DialogDescription>
            Add a new teammate to your database.
          </DialogDescription>
        </DialogHeader>
        <form action={addTeammate}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                First name
              </Label>
              <Input
                id="firstname"
                type="text"
                name="firstname"
                defaultValue="Pedro"
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
                defaultValue="Duarte"
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
                defaultValue="random@example.com"
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
                defaultValue="Chief Mate Officer"
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save Teammate</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
