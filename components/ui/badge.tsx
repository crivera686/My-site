
import { cn } from "@/components/ui/lib";
export function Badge({ className, children }: any){
  return <span className={cn("inline-flex items-center rounded-full px-2 py-1 text-xs font-medium", className)}>{children}</span>
}
