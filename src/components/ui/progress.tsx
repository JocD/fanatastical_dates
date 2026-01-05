export function Progress({ value = 0 }: { value?: number }) {
  return (
    <div className="h-2 w-full rounded-full bg-neutral-200">
      <div
        className="h-full bg-neutral-900"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}