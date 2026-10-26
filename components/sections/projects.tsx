import Image from "next/image";
import { EstimateTrigger } from "@/components/estimate-dialog";
import { Icon } from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/lib/site";
import { cn } from "@/lib/utils";

const layout = [
  "sm:col-span-2 lg:col-span-6 lg:row-span-3 h-[420px] sm:h-[480px] lg:h-auto",
  "lg:col-span-3 lg:row-span-2 h-[320px] lg:h-auto",
  "lg:col-span-3 h-[320px] lg:h-auto",
  "lg:col-span-3 h-[320px] lg:h-auto",
  "lg:col-span-3 h-[320px] lg:h-auto",
  "sm:col-span-2 lg:col-span-3 h-[320px] lg:h-auto",
];

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="scroll-mt-24 py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Project inspiration"
            titleId="projects-title"
            title="Explore Our Roofing Projects"
            className="max-w-2xl"
          />
          <div className="flex max-w-md flex-col gap-4 lg:items-end lg:pb-1">
            <p className="text-sm leading-6 text-body/85 lg:text-right">
              A look at the residential and commercial roofing work Summit is
              set up to handle. All project imagery and captions are
              illustrative and do not represent specific completed jobs.
            </p>
            <div className="flex items-center gap-3">
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-body/60">
                Gallery preview
              </span>
              <EstimateTrigger
                service="Roof Replacement"
                aria-label="Request a free estimate for a roofing project"
                className="grid size-12 place-items-center rounded-full bg-orange text-navy transition-colors hover:bg-[#e37d2c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
              >
                <Icon name="arrow-up-right" className="size-5" />
              </EstimateTrigger>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:auto-rows-[220px] lg:grid-cols-12">
          {projects.map((project, index) => (
            <figure
              key={`${project.title}-${project.location}`}
              className={cn(
                "group relative isolate overflow-hidden rounded-[1.75rem] bg-navy",
                layout[index],
              )}
            >
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                sizes={project.sizes}
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/15 to-navy/5" />
              <figcaption className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-white/80 backdrop-blur-sm">
                    {project.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[0.65rem] font-medium text-white/60">
                    <Icon name="pin" className="size-3" />
                    {project.location}
                  </span>
                </div>
                <h3
                  className={cn(
                    "mt-2 font-heading font-bold leading-tight tracking-[-0.03em] text-white",
                    index === 0 ? "text-2xl sm:text-3xl" : "text-xl",
                  )}
                >
                  {project.title}
                </h3>
                <p className="mt-1 text-[0.6rem] uppercase tracking-[0.16em] text-white/45">
                  Illustrative project
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
