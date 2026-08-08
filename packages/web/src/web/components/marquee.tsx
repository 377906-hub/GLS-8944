import { cn } from "@/lib/utils";

interface MarqueeProps {
  items: string[];
  className?: string;
  /** seconds for one full loop */
  duration?: number;
  reverse?: boolean;
  accent?: boolean;
  bordered?: boolean;
}

export function Marquee({
  items,
  className,
  duration = 34,
  reverse = false,
  accent = false,
  bordered = true,
}: MarqueeProps) {
  const doubled = [...items, ...items];

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden py-4 md:py-5",
        bordered && "border-y border-line",
        className,
      )}
      aria-hidden="true"
    >
      <div
        className="gls-marquee-track"
        data-reverse={reverse ? "true" : "false"}
        style={{ ["--marquee-duration" as string]: `${duration}s` }}
      >
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className={cn(
              "flex shrink-0 items-center gap-6 md:gap-10 px-5 md:px-8 font-display text-[0.8125rem] md:text-base font-semibold uppercase tracking-[0.16em]",
              accent ? "text-acid" : "text-bone/70",
            )}
          >
            {item}
            <span
              className={cn(
                "block size-1.5 rounded-full",
                accent ? "bg-acid/60" : "bg-bone/25",
              )}
            />
          </span>
        ))}
      </div>
    </div>
  );
}
