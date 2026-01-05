import { cn } from "@/lib/utils";

export function Badge({ className, ...props }: any) {
  return (
    <span
      className={cn(
        "rounded-full bg-neutral-100 px-2.5 py-1 text-xs",
        className
      )}
      {...props}
    />
  );
}