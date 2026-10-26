"use client";

import { useEffect, useRef, useState } from "react";
import { EstimateTrigger } from "@/components/estimate-dialog";
import { buttonStyles } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";
import { Logo } from "@/components/ui/logo";
import { navLinks, site } from "@/lib/site";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    }

    function handlePointerDown(event: PointerEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    }

    window.addEventListener("keydown", handleEscape);
    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-navy/[0.06] bg-cream/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 w-full max-w-[1400px] items-center justify-between gap-4 px-5 sm:px-8 lg:px-12">
        <Logo />

        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 rounded-full border border-navy/10 bg-white/70 p-1.5 shadow-[0_8px_30px_-20px_rgba(20,43,70,0.4)] lg:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-navy/70 transition-colors hover:bg-cream hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <a
            href={site.phoneHref}
            className="hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-navy transition-colors hover:text-orange-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange xl:inline-flex"
          >
            <Icon name="phone" className="size-4" />
            {site.phone}
          </a>

          <div className="hidden md:block">
            <EstimateTrigger className={buttonStyles()}>
              Get an Estimate
              <Icon name="arrow-right" className="size-4" />
            </EstimateTrigger>
          </div>

          <div ref={menuRef} className="relative lg:hidden">
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="grid size-11 place-items-center rounded-full border border-navy/10 bg-white/70 text-navy transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
            >
              <Icon
                name={menuOpen ? "close" : "menu"}
                className="size-5"
              />
            </button>

            <div
              id="mobile-menu"
              hidden={!menuOpen}
              className="absolute right-0 top-[calc(100%+0.75rem)] w-[min(calc(100vw-2.5rem),22rem)] rounded-3xl border border-navy/10 bg-cream p-4 shadow-[0_30px_80px_-30px_rgba(20,43,70,0.45)]"
            >
              <nav aria-label="Mobile" className="flex flex-col">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-between rounded-2xl px-4 py-3 text-base font-semibold text-navy transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
                  >
                    {link.label}
                    <Icon
                      name="arrow-up-right"
                      className="size-4 text-body/60"
                    />
                  </a>
                ))}
              </nav>

              <div className="mt-3 border-t border-navy/10 pt-4">
                <a
                  href={site.phoneHref}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2 px-2 pb-3 text-sm font-semibold text-navy"
                >
                  <Icon name="phone" className="size-4 text-orange-deep" />
                  {site.phone}
                </a>
                <EstimateTrigger
                  onClick={() => setMenuOpen(false)}
                  className={buttonStyles({ className: "w-full" })}
                >
                  Get a Free Estimate
                  <Icon name="arrow-right" className="size-4" />
                </EstimateTrigger>
                <p className="mt-3 flex items-center gap-1.5 px-2 text-xs text-body/75">
                  <Icon name="pin" className="size-3.5 text-orange-deep" />
                  Dallas, Plano, Irving & Frisco
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
