
import * as React from "react";
import { cn } from "@/components/ui/lib";
export function Input({ className, ...props }: any){
  return <input className={cn("w-full rounded-xl bg-zinc-950 border border-zinc-800 px-3 py-2", className)} {...props} />;
}
