import Image from "next/image";
import { EstimateTrigger } from "@/components/estimate-dialog";
import { buttonStyles } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/lib/site";

const commercialPoints = [
  "Roof repairs and replacement options",
  "Inspections for commercial roof systems",
  "A clear scope for property managers",
];

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="scroll-mt-24 py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <SectionHeading
          align="center"
          eyebrow="Our services"
          titleId="services-title"
          title="Let's Build a Roof That Lasts."
          description="Roofing solutions for homes and commercial properties across Dallas, Plano, Irving, and Frisco."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-14 xl:grid-cols-4">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group flex flex-col overflow-hidden rounded-[1.75rem] border border-navy/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-navy/20 hover:shadow-[0_22px_50px_-30px_rgba(20,43,70,0.4)]"
            >
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div className="flex items-start justify-between gap-3">
                  <span className="grid size-11 place-items-center rounded-xl bg-cream text-navy transition-colors duration-300 group-hover:bg-orange">
                    <Icon name={service.icon} className="size-5" />
                  </span>
                  <span className="font-heading text-xs font-bold text-body/35">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-5 font-heading text-2xl font-bold tracking-[-0.035em] text-navy">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-body/85">
                  {service.description}
                </p>
                <EstimateTrigger
                  service={service.title}
                  className="mt-5 inline-flex w-fit items-center gap-2 rounded-full text-sm font-semibold text-navy transition-colors hover:text-orange-deep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange"
                >
                  Request this service
                  <Icon name="arrow-right" className="size-4" />
                </EstimateTrigger>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden bg-navy/10">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-5 overflow-hidden rounded-[2rem] border border-navy/10 bg-white">
          <div className="grid lg:grid-cols-[1.03fr_0.97fr]">
            <div className="p-6 sm:p-10 lg:p-12">
              <span className="inline-flex items-center gap-2 rounded-full bg-orange/12 px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-orange-deep">
                <Icon name="commercial" className="size-3.5" />
                For property managers
              </span>
              <h3 className="mt-5 font-heading text-[clamp(2rem,3.5vw,3.25rem)] font-bold leading-[1.02] tracking-[-0.045em] text-navy">
                Commercial Roofing
              </h3>
              <p className="mt-4 max-w-lg text-sm leading-6 text-body/85 sm:text-base sm:leading-7">
                Roofing support for commercial property managers, from
                understanding the current roof condition to planning repair or
                replacement work.
              </p>
              <ul className="mt-6 flex flex-col gap-3">
                {commercialPoints.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 text-sm font-medium text-navy/80"
                  >
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-orange/20 text-orange-deep">
                      <Icon name="check" className="size-3" />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
              <EstimateTrigger
                service="Commercial Roofing"
                className={buttonStyles({ className: "mt-7" })}
              >
                Talk Commercial Roofing
                <Icon name="arrow-right" className="size-4" />
              </EstimateTrigger>
            </div>

            <div className="relative min-h-[280px] overflow-hidden lg:min-h-0">
              <Image
                src="/images/project-roof-deck.jpg"
                alt="Commercial roofing crew reviewing a large roof deck under construction, illustrative photography"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-white/10 lg:to-transparent" />
              <div className="absolute bottom-5 left-5 rounded-full border border-white/25 bg-navy/45 px-3.5 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-white/85 backdrop-blur-md">
                Commercial roof deck
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
