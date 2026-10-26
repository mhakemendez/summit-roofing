import Image from "next/image";
import { EstimateTrigger } from "@/components/estimate-dialog";
import { buttonStyles } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section aria-labelledby="hero-title">
      <div className="mx-auto w-full max-w-[1400px] px-5 pt-4 sm:px-8 sm:pt-6 lg:px-12">
        <div className="relative isolate min-h-[640px] overflow-hidden rounded-[1.75rem] bg-navy sm:min-h-[680px] sm:rounded-[2.5rem] lg:min-h-[740px]">
          <Image
            src="/images/hero-modern-home.jpg"
            alt="Modern home with a dark roof at dusk, illustrative architectural photography"
            fill
            loading="eager"
            fetchPriority="high"
            sizes="(min-width: 1400px) 1320px, 100vw"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-navy/45 via-navy/10 to-navy/95" />
          <div className="absolute inset-0 bg-navy/10" />

          <p
            aria-hidden="true"
            className="hero-watermark pointer-events-none absolute inset-x-0 top-[8%] select-none whitespace-nowrap text-center font-heading text-[clamp(4.5rem,17vw,12.5rem)] font-extrabold leading-none tracking-[-0.07em]"
          >
            SUMMIT
          </p>

          <div className="absolute inset-x-0 top-0 flex items-start justify-between p-5 sm:p-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-navy/25 px-3.5 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white/85 backdrop-blur-md">
              <span
                aria-hidden="true"
                className="size-1.5 rounded-full bg-orange"
              />
              Residential + Commercial
            </span>
            <span className="hidden items-center gap-2 rounded-full border border-white/25 bg-navy/25 px-3.5 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white/85 backdrop-blur-md sm:inline-flex">
              <Icon name="pin" className="size-3.5 text-orange" />
              Dallas, Texas
            </span>
          </div>

          <div className="absolute inset-x-0 bottom-0 z-10">
            <div className="mx-auto flex max-w-4xl flex-col items-center px-5 pb-10 text-center sm:px-8 sm:pb-14 lg:pb-16">
              <p className="inline-flex items-center gap-2 text-[0.6rem] font-semibold uppercase tracking-[0.17em] text-orange sm:text-[0.68rem] sm:tracking-[0.24em]">
                <span
                  aria-hidden="true"
                  className="h-px w-4 bg-orange sm:w-6"
                />
                Roofing built around your property
              </p>

              <h1
                id="hero-title"
                className="mt-4 font-heading text-[clamp(2.6rem,6vw,5.25rem)] font-extrabold uppercase leading-[0.94] tracking-[-0.055em] text-white"
              >
                <span className="block">Protect Your Home.</span>
                <span className="block text-white/95">
                  Invest in Your Roof.
                </span>
              </h1>

              <p className="mt-5 max-w-xl text-sm leading-6 text-white/70 sm:text-base sm:leading-7">
                Roof repairs, replacements, and storm damage solutions designed
                to protect your property.
              </p>

              <div className="mt-7 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
                <EstimateTrigger
                  className={buttonStyles({
                    size: "lg",
                    className: "w-full sm:w-auto",
                  })}
                >
                  Get a Free Estimate
                  <Icon name="arrow-right" className="size-4" />
                </EstimateTrigger>
                <a
                  href="#services"
                  className={buttonStyles({
                    variant: "glass",
                    size: "lg",
                    className: "w-full sm:w-auto",
                  })}
                >
                  Explore Our Services
                  <Icon name="arrow-up-right" className="size-4" />
                </a>
              </div>

              <p className="mt-5 flex items-center justify-center gap-2 text-[0.7rem] font-medium text-white/55">
                <Icon name="pin" className="size-3.5 text-orange" />
                Serving {site.serviceAreas.slice(0, 3).join(", ")} &{" "}
                {site.serviceAreas[3]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
