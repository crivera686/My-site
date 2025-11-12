
import * as React from "react";
import { cn } from "@/components/ui/lib";
export function Textarea({ className, ...props }: any){
  return <textarea className={cn("w-full rounded-xl bg-zinc-950 border border-zinc-800 px-3 py-2", className)} {...props} />;
}
