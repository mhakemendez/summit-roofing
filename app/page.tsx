import { EstimateDialogProvider } from "@/components/estimate-dialog";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { About } from "@/components/sections/about";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Reviews } from "@/components/sections/reviews";
import { Services } from "@/components/sections/services";
import { WhyUs } from "@/components/sections/why-us";

export default function Home() {
  return (
    <EstimateDialogProvider>
      <div id="top" className="min-h-screen bg-cream">
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-100 -translate-y-24 rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white shadow-lg transition-transform focus:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
        >
          Skip to content
        </a>

        <SiteHeader />

        <main id="main-content">
          <Hero />
          <About />
          <Projects />
          <Services />
          <WhyUs />
          <Reviews />
        </main>

        <SiteFooter />
      </div>
    </EstimateDialogProvider>
  );
}
