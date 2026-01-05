import { cn } from "@/lib/utils";

export function Button({ className, ...props }: any) {
  return (
    <button
      className={cn(
        "rounded-xl bg-neutral-900 px-4 py-2 text-sm font-medium text-white inline-flex items-center",
        className
      )}
      {...props}
    />
  );
}