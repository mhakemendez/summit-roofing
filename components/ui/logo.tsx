import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/icons";

type LogoProps = {
  variant?: "dark" | "light";
  className?: string;
};

export function Logo({ variant = "dark", className }: LogoProps) {
  return (
    <a
      href="#top"
      aria-label="Summit Roofing Co. — back to top"
      className={cn("group inline-flex items-center gap-3", className)}
    >
      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-orange text-navy transition-transform duration-300 group-hover:-translate-y-0.5">
        <Icon name="roof" className="size-5" />
      </span>
      <span className="flex flex-col">
        <span
          className={cn(
            "font-heading text-lg font-extrabold leading-none tracking-[-0.035em]",
            variant === "dark" ? "text-navy" : "text-white",
          )}
        >
          SUMMIT
        </span>
        <span
          className={cn(
            "mt-1 text-[0.55rem] font-semibold uppercase tracking-[0.28em]",
            variant === "dark" ? "text-body/75" : "text-white/55",
          )}
        >
          Roofing Co.
        </span>
      </span>
    </a>
  );
}
