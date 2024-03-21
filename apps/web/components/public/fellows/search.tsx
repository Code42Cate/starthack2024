import { Button } from "@ui/components/ui/button";
import { Input } from "@ui/components/ui/input";

export default function Search() {
  return (
    <div className="flex flex-row items-center justify-between gap-4">
      <Input placeholder="Search fellows" className="w-full" />
      <Button>Search</Button>
    </div>
  );
}
