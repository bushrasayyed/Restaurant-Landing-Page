import Header from "@/components/header";
import Hero from "@/components/hero";
import { MenuSection } from "@/components/menu-section";
import About from "@/components/about";
import Gallery from "@/components/gallery";
import Footer from "@/components/footer";
import {
  mocktails,
  coolers,
  desserts,
  chocoShakes,
  drinks,
} from "@/lib/menu-data";

export default function Page() {
  return (
    <main className="font-sans">
      <Header />
      <Hero />

      {/* Menu Intro */}
      <section id="menu" className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <h2 className="text-pretty text-center font-sans text-3xl font-semibold text-slate-900">
            Our Menu
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-center text-slate-600">
            Crafted beverages and desserts, made fresh. Hover for a peek—scroll
            to explore.
          </p>
        </div>
      </section>

      <MenuSection id="drinks" title="Refreshing Drinks" items={drinks} />
      <MenuSection
        id="mocktails"
        title="Our Signature Mocktails"
        items={mocktails}
      />
      <MenuSection id="coolers" title="Coolers" items={coolers} />
      <MenuSection id="desserts" title="Desserts" items={desserts} highlight />
      <MenuSection
        id="choco-shakes"
        title="Crazy Choco Shakes"
        items={chocoShakes}
        highlight
      />

      <About />
      <Gallery />

      {/* Contact / CTA */}
      <section id="contact" className="bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-12 md:grid-cols-2 md:py-16">
          <div>
            <h2 className="text-pretty font-sans text-3xl font-semibold text-slate-900">
              Visit Us
            </h2>
            <p className="mt-3 text-slate-600">
              Open daily: 11:00 AM — 11:00 PM
            </p>
            <div className="mt-4 space-y-1 text-slate-700">
              <p>SipNSavor Cafe</p>
              <p>123 Indulgence Street, Foodie District</p>
              <p>+91 1400 4321</p>
            </div>
            <div className="mt-6 flex gap-3">
              <a
                href="https://maps.google.com/?q=123+Indulgence+Street"
                target="_blank"
                rel="noreferrer"
                className="rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
              >
                Get Directions
              </a>
              <a
                href="tel:+91 1400 4321"
                className="rounded-md border border-emerald-600 px-4 py-2 text-sm font-medium text-emerald-700 hover:bg-emerald-50"
              >
                Book a Table
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-slate-200">
            <iframe
              title="Map to SipNSavor Cafe"
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=123%20Indulgence%20Street&output=embed"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
