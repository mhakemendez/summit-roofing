import Image from "next/image";
import { EstimateTrigger } from "@/components/estimate-dialog";
import { buttonStyles } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";
import { features, site } from "@/lib/site";

export function WhyUs() {
  return (
    <section aria-labelledby="why-title" className="py-4 sm:py-6 lg:py-10">
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="relative overflow-hidden rounded-[2rem] bg-navy px-6 py-10 text-white sm:px-10 sm:py-12 lg:px-14 lg:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-28 -top-40 size-[30rem] rounded-full border border-white/[0.06]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-32 size-[22rem] rounded-full border border-white/[0.06]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-48 left-1/3 size-[28rem] rounded-full bg-orange/[0.05] blur-3xl"
          />

          <div className="relative grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
            <div>
              <p className="inline-flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-orange">
                <span
                  aria-hidden="true"
                  className="size-1.5 rounded-full bg-orange"
                />
                The Summit approach
              </p>
              <h2
                id="why-title"
                className="mt-5 max-w-md font-heading text-[clamp(2.2rem,4.4vw,4rem)] font-bold leading-[0.98] tracking-[-0.05em] text-white"
              >
                Let&apos;s create a roof that really holds up.
              </h2>
              <p className="mt-5 max-w-md text-sm leading-6 text-white/65 sm:text-base sm:leading-7">
                A practical process built around the property, your questions,
                and a clear scope of work from the first conversation onward.
              </p>

              <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5">
                <Image
                  src="/images/project-storm.jpg"
                  alt="Roofing professional inspecting a damaged shingle roof, illustrative photography"
                  fill
                  sizes="(min-width: 1024px) 38vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/75 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 p-4">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-navy/40 px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-white/85 backdrop-blur-md">
                    <Icon name="pin" className="size-3 text-orange" />
                    Dallas + nearby
                  </span>
                  <a
                    href={site.phoneHref}
                    aria-label={`Call Summit Roofing Co. at ${site.phone}`}
                    className="grid size-11 shrink-0 place-items-center rounded-full bg-orange text-navy transition-colors hover:bg-[#e37d2c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    <Icon name="phone" className="size-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
                {features.map((feature) => (
                  <div
                    key={feature.title}
                    className="border-t border-white/15 pt-5"
                  >
                    <span className="grid size-10 place-items-center rounded-full border border-white/15 text-orange">
                      <Icon name={feature.icon} className="size-4.5" />
                    </span>
                    <h3 className="mt-4 font-heading text-lg font-bold tracking-[-0.025em] text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-white/55">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col gap-4 border-t border-white/15 pt-7 sm:flex-row sm:items-center sm:justify-between">
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
                  href={site.phoneHref}
                  className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-white/75 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
                >
                  <Icon name="phone" className="size-4 text-orange" />
                  {site.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
