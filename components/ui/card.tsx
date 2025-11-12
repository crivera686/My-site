
import * as React from "react";
import { cn } from "@/components/ui/lib";
export function Card({ className, ...props }: any){ return <div className={cn("rounded-2xl border p-0", className)} {...props}/> }
export function CardHeader({ className, ...props }: any){ return <div className={cn("p-6 pb-3", className)} {...props}/> }
export function CardTitle({ className, ...props }: any){ return <h3 className={cn("text-xl font-semibold", className)} {...props}/> }
export function CardDescription({ className, ...props }: any){ return <p className={cn("text-sm text-zinc-400", className)} {...props}/> }
export function CardContent({ className, ...props }: any){ return <div className={cn("p-6 pt-3", className)} {...props}/> }
