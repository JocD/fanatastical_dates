import { Check } from "lucide-react";
import { cx } from "@/lib/cardUtils";

interface StepPillProps {
  n: number;
  label: string;
  active?: boolean;
  done?: boolean;
}

export function StepPill({ n, label, active, done }: StepPillProps) {
  return (
    <div
      className={cx(
        "flex items-center gap-2 rounded-full border px-3 py-1 text-sm",
        active && "border-neutral-900 bg-neutral-900 text-white",
        done && !active && "border-neutral-300 bg-neutral-50 text-neutral-700"
      )}
    >
      <span
        className={cx(
          "grid h-5 w-5 place-items-center rounded-full text-xs",
          active ? "bg-white/20" : "bg-neutral-200"
        )}
      >
        {done ? <Check className="h-3.5 w-3.5" /> : n}
      </span>
      <span className="whitespace-nowrap">{label}</span>
    </div>
  );
}
