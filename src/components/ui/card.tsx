import { cn } from "@/lib/utils";

export function Card({ className, ...props }: any) {
  return (
    <div className={cn("rounded-2xl border bg-white", className)} {...props} />
  );
}

export function CardHeader({ className, ...props }: any) {
  return <div className={cn("p-4 pb-0", className)} {...props} />;
}

export function CardContent({ className, ...props }: any) {
  return <div className={cn("p-4", className)} {...props} />;
}