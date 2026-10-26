import Image from "next/image";
import { EstimateTrigger } from "@/components/estimate-dialog";
import { Icon } from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/section-heading";
import { sampleReviews } from "@/lib/site";

export function Reviews() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="scroll-mt-24 py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <SectionHeading
          align="center"
          eyebrow="Sample reviews"
          titleId="reviews-title"
          title="Built for Homeowners and Property Managers"
          description={
            <>
              Verified customer feedback will appear in this space. The cards
              below are clearly labeled placeholders — no real reviews, ratings,
              or customer claims are shown.
            </>
          }
        />

        <div className="mt-10 grid gap-4 lg:mt-14 lg:grid-cols-3">
          {sampleReviews.map((review) => (
            <figure
              key={review.source}
              className="flex flex-col rounded-[1.75rem] border border-navy/10 bg-white p-6 sm:p-7"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-orange/12 px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-orange-deep">
                  <span
                    aria-hidden="true"
                    className="size-1.5 rounded-full bg-orange"
                  />
                  Sample review
                </span>
                <Icon
                  name="quote"
                  className="size-7 shrink-0 text-orange/45"
                />
              </div>
              <blockquote className="mt-7 flex-1 text-base leading-7 text-navy/80">
                {review.quote}
              </blockquote>
              <figcaption className="mt-7 border-t border-navy/10 pt-4">
                <span className="block text-sm font-semibold text-navy">
                  {review.source}
                </span>
                <span className="mt-1 block text-xs text-body/60">
                  {review.location} · Placeholder attribution
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-[1.35fr_0.65fr]">
          <div className="relative min-h-[320px] overflow-hidden rounded-[1.75rem] bg-navy">
            <Image
              src="/images/project-residential.jpg"
              alt="Modern home exterior with a dark roof, illustrative project photography"
              fill
              sizes="(min-width: 1024px) 65vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/25 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-white/80 backdrop-blur-sm">
                Project photo placeholder
              </span>
              <p className="mt-3 max-w-md font-heading text-2xl font-bold leading-tight tracking-[-0.035em] text-white sm:text-3xl">
                Add a verified project photo and customer story here.
              </p>
              <p className="mt-2 max-w-md text-xs leading-5 text-white/55">
                Replace this image and caption with approved work before launch.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-[1.75rem] bg-orange p-6 text-navy sm:p-7">
            <div>
              <span className="grid size-11 place-items-center rounded-full bg-navy text-orange">
                <Icon name="check" className="size-5" />
              </span>
              <h3 className="mt-6 font-heading text-2xl font-bold leading-tight tracking-[-0.035em]">
                Reviews need verification.
              </h3>
              <p className="mt-3 text-sm leading-6 text-navy/75">
                This demo intentionally avoids invented testimonials, star
                ratings, and performance statistics. Add approved reviews only
                after they can be verified.
              </p>
            </div>
            <EstimateTrigger
              className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-navy px-5 text-sm font-semibold text-white transition-colors hover:bg-[#1d3a5c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
            >
              Start a Conversation
              <Icon name="arrow-right" className="size-4" />
            </EstimateTrigger>
          </div>
        </div>
      </div>
    </section>
  );
}
