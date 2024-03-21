import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from "@ui/components/ui/form";
import { Input } from "@ui/components/ui/input";
import { Textarea } from "@ui/components/ui/textarea";
import { UseFormReturn } from "react-hook-form";

export function FormStartupInfo({
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
