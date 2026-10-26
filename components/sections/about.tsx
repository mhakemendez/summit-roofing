import Image from "next/image";
import { Icon } from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/section-heading";
import { site } from "@/lib/site";

const facts = [
  {
    value: "5",
    label: "Core roofing services",
    detail: "Replacement through inspections",
  },
  {
    value: "4",
    label: "Service-area cities",
    detail: "Dallas, Plano, Irving, Frisco",
  },
  {
    value: "2",
    label: "Property types",
    detail: "Homes and commercial properties",
  },
  {
    value: "$0",
    label: "Estimate request",
    detail: "Free estimate CTA",
  },
];

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="scroll-mt-24 py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto w-full max-w-350 px-5 sm:px-8 lg:px-12">
        <div className="grid items-start gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="About Summit"
              titleId="about-title"
              title={
                <>
                  Roofing solutions with a clear scope and{" "}
                  <span className="text-orange-deep">careful follow-through.</span>
                </>
              }
              description={
                <>
                  Summit Roofing Co. helps homeowners and commercial property
                  managers across Dallas, Plano, Irving, and Frisco with roof
                  replacement, repair, storm damage, inspections, and commercial
                  roofing. Every conversation starts with the property and the
                  next step that makes sense.
                </>
              }
            />

            <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:gap-x-10">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="border-t border-navy/15 pt-4"
                >
                  <dt className="sr-only">{fact.label}</dt>
                  <dd className="font-heading text-4xl font-extrabold tracking-[-0.055em] text-navy sm:text-5xl">
                    {fact.value}
                  </dd>
                  <dd className="mt-2 text-sm font-semibold text-navy">
                    {fact.label}
                  </dd>
                  <dd className="mt-1 text-xs leading-5 text-body/75">
                    {fact.detail}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-5 max-w-md text-[0.68rem] leading-5 text-body/60">
              Figures summarize the services and service areas listed on this
              page. They are not performance claims.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-body/65">
                <Icon name="pin" className="size-3.5 text-orange-deep" />
                Service areas
              </span>
              {site.serviceAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-navy/10 bg-white/55 px-3 py-1.5 text-xs font-medium text-navy/75"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-[1fr_0.82fr] gap-4 sm:gap-5">
              <div className="relative aspect-3/4 overflow-hidden rounded-[1.75rem] bg-navy/10">
                <Image
                  src="/images/about-home.jpg"
                  alt="Contemporary home at dusk with a low-pitched roof, illustrative architectural photography"
                  fill
                  sizes="(min-width: 1024px) 30vw, 45vw"
                  className="object-cover"
                />
              </div>
              <div className="relative mt-12 aspect-3/4 overflow-hidden rounded-[1.75rem] bg-navy/10 sm:mt-16">
                <Image
                  src="/images/about-roofers.jpg"
                  alt="Roofing crew installing tiles on a sloped roof, illustrative photography"
                  fill
                  sizes="(min-width: 1024px) 24vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="absolute -bottom-5 left-4 flex max-w-68 items-center gap-3 rounded-2xl border border-navy/10 bg-cream p-3.5 shadow-[0_20px_50px_-25px_rgba(20,43,70,0.45)] sm:left-6">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-orange text-navy">
                <Icon name="roof" className="size-5" />
              </span>
              <div>
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-orange-deep">
                  Local focus
                </p>
                <p className="mt-0.5 text-sm font-semibold leading-5 text-navy">
                  Dallas homes and commercial properties
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
