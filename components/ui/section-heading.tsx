import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  titleId?: string;
  className?: string;
  titleClassName?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  titleId,
  className,
  titleClassName,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-orange-deep">
          <span
            aria-hidden="true"
            className="size-1.5 rounded-full bg-orange"
          />
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={titleId}
        className={cn(
          "font-heading text-[clamp(2rem,4.2vw,3.75rem)] font-bold leading-[1.03] tracking-[-0.045em] text-navy",
          align === "center" && "max-w-3xl",
          titleClassName,
        )}
      >
        {title}
      </h2>
      {description ? (
        <div
          className={cn(
            "max-w-2xl text-base leading-7 text-body sm:text-lg sm:leading-8",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </div>
      ) : null}
    </div>
  );
}
