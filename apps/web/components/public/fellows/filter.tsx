"use client";

import { filter } from "@/app/constants";
import { Checkbox } from "@ui/components/ui/checkbox";
import { Label } from "@ui/components/ui/label";
import { useRouter, useSearchParams } from "next/navigation";

function CheckboxWithState({ name, label }: { name: string; label: string }) {
  const searchparams = useSearchParams();
  const router = useRouter();

  return (
    <div className="flex flex-row items-center gap-2">
      <Checkbox
        value={searchparams.get(name)}
        onCheckedChange={(e) => {
          const params = new URLSearchParams(searchparams);
          if (e.valueOf()) {
            params.set(name, "true");
          } else {
            params.delete(name);
          }
          router.push(`/public/fellows?${params.toString()}`);
        }}
      />
      <Label>{label}</Label>
    </div>
  );
}

export default function Filter() {
  return (
    <>
      {Object.entries(filter.special).map(([key, value]) => (
        <div className="flex flex-row items-center gap-2" key={key}>
          <CheckboxWithState name={key} label={value} />
        </div>
      ))}
      <div className="w-full border-t border-gray-300" />
      {Object.entries(filter.batch).map(([key, value]) => (
        <div className="flex flex-row items-center gap-2" key={key}>
          <CheckboxWithState name={key} label={value} />
        </div>
      ))}

      <div className="w-full border-t border-gray-300" />
      <h3 className="font-bold">Industry</h3>

      {Object.entries(filter.industry).map(([key, value]) => (
        <div className="flex flex-row items-center gap-2" key={key}>
          <CheckboxWithState name={key} label={value} />
        </div>
      ))}

      <div className="w-full border-t border-gray-300" />

      <h3 className="font-bold">Business Model</h3>
      {Object.entries(filter.businessModel).map(([key, value]) => (
        <div className="flex flex-row items-center gap-2" key={key}>
          <CheckboxWithState name={key} label={value} />
        </div>
      ))}
    </>
  );
}
