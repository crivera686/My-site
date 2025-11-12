
import * as React from "react";
import { cn } from "@/components/ui/lib";
export function Button({ className, variant, size, asChild, ...props }: any) {
  const Comp = (asChild ? "a" : "button") as any;
  return <Comp className={cn(
    "inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium shadow-sm transition",
    variant === "secondary" ? "bg-zinc-800 text-zinc-100 hover:bg-zinc-700" : "bg-white text-black hover:bg-zinc-100",
    size === "lg" ? "px-5 py-3 text-base" : "",
    size === "icon" ? "px-2 py-2" : "",
    className
  )} {...props} />;
}
