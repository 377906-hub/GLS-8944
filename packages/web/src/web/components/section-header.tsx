import { cn } from "@/lib/utils";

export function SectionHeader({
  eyebrow,
  title,
  blurb,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  blurb?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow ? (
        <span className="label-xs inline-flex items-center gap-2 text-acid">
          <span className="block size-1.5 rounded-full bg-acid" />
          {eyebrow}
        </span>
      ) : null}
      <h2 className="display-lg text-bone max-w-[19ch] text-balance">{title}</h2>
      {blurb ? (
        <p
          className={cn(
            "text-ash text-[0.95rem] leading-relaxed md:text-base",
            align === "center" ? "max-w-[58ch]" : "max-w-[52ch]",
          )}
        >
          {blurb}
        </p>
      ) : null}
    </div>
  );
}
