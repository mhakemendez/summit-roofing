import { EstimateTrigger } from "@/components/estimate-dialog";
import { buttonStyles } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";
import { Logo } from "@/components/ui/logo";
import { navLinks, services, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="overflow-hidden bg-navy text-white">
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col items-center border-b border-white/10 py-14 text-center sm:py-16">
          <Logo variant="light" />
          <p className="mt-5 max-w-md text-sm leading-6 text-white/60">
            Residential and commercial roofing for Dallas, Plano, Irving, and
            Frisco.
          </p>
          <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row">
            <EstimateTrigger className={buttonStyles({ size: "lg" })}>
              Get a Free Estimate
              <Icon name="arrow-right" className="size-4" />
            </EstimateTrigger>
            <a
              href={site.phoneHref}
              className={buttonStyles({
                variant: "glass",
                size: "lg",
              })}
            >
              <Icon name="phone" className="size-4" />
              {site.phone}
            </a>
          </div>
        </div>

        <div className="grid gap-10 border-b border-white/10 py-14 sm:grid-cols-2 lg:grid-cols-[1.25fr_0.75fr_1fr]">
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-orange">
              Ready when you are
            </p>
            <h2 className="mt-4 max-w-sm font-heading text-3xl font-bold leading-[1.05] tracking-[-0.04em] text-white sm:text-4xl">
              Let&apos;s talk about your roof.
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-6 text-white/60">
              Start with a conversation about the property, the visible issue,
              and the options that make sense for the next step.
            </p>
            <address className="mt-6 flex flex-col gap-3 text-sm not-italic text-white/70">
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 transition-colors hover:text-white"
              >
                <Icon name="phone" className="size-4 text-orange" />
                {site.phone}
              </a>
              <span className="inline-flex items-center gap-2">
                <Icon name="pin" className="size-4 text-orange" />
                {site.location}
              </span>
            </address>
          </div>

          <nav aria-label="Footer">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/60">
              Explore
            </p>
            <ul className="mt-5 flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
                  >
                    {link.label}
                    <Icon
                      name="arrow-up-right"
                      className="size-3.5 text-white/35"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/60">
              Services
            </p>
            <ul className="mt-5 flex flex-col gap-3">
              {services.map((service) => (
                <li key={service.title}>
                  <a
                    href="#services"
                    className="text-sm font-medium text-white/70 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#services"
                  className="text-sm font-medium text-white/70 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
                >
                  Commercial Roofing
                </a>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              {site.serviceAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-white/15 px-3 py-1.5 text-[0.68rem] font-medium text-white/55"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="flex justify-center overflow-hidden pb-5 pt-10"
        >
          <p className="select-none whitespace-nowrap font-heading text-[clamp(4.4rem,22vw,20rem)] font-extrabold leading-none tracking-[-0.085em] text-white">
            SUMMIT
          </p>
        </div>

        <div className="border-t border-white/10 py-7">
          <p className="mx-auto max-w-4xl text-center text-[0.68rem] leading-5 text-white/50">
            © 2026 Summit Roofing Co. This is a fictional business created for a
            landing-page demonstration. The phone number, project imagery, and
            sample reviews are placeholders. No real customer claims are made.
            Photography is illustrative stock imagery via Unsplash.
          </p>
          <p className="mt-2 text-center text-[0.68rem] text-white/60">
            Demo site — content should be replaced and verified before launch.
          </p>
        </div>
      </div>
    </footer>
  );
}
