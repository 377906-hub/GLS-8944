import { Link } from "wouter";
import { ArrowRight, ArrowUpRight, Leaf, Quote, Star, Zap } from "lucide-react";
import { Pill } from "../components/ui/pill";
import { Marquee } from "../components/marquee";
import { Reveal, RevealItem } from "../components/reveal";
import { SectionHeader } from "../components/section-header";
import { ProductCard, ProductCardSkeleton } from "../components/product-card";
import { useFeaturedProducts, useStrains } from "../queries/catalog";
import { useTestimonials } from "../queries/content";
import { STRAIN_TYPE_LABEL, splitList } from "@/lib/format";

const MARQUEE_ITEMS = [
  "Live resin",
  "Small batch",
  "Lab tested",
  "No additives",
  "Strain specific",
  "Pressed in California",
];

function Hero() {
  return (
    <section className="relative overflow-hidden pt-[68px] md:pt-[76px]">
      <div className="haze -top-32 left-1/2 h-[560px] w-[900px] -translate-x-1/2" />

      <div className="shell relative pt-14 md:pt-20">
        <Reveal viewport={false} className="flex flex-col items-center text-center">
          <RevealItem>
            <span className="label-xs inline-flex items-center gap-2 rounded-full border border-line bg-panel px-4 py-2.5 text-bone/80">
              <span className="block size-1.5 rounded-full bg-acid" />
              Now delivering across California
            </span>
          </RevealItem>

          <RevealItem className="mt-8">
            <h1 className="display-xl text-bone">
              Welcome to
              <br />
              <span className="text-acid">The Society</span>
            </h1>
          </RevealItem>

          <RevealItem className="mt-7">
            <p className="text-ash mx-auto max-w-[54ch] text-base leading-relaxed md:text-lg">
              Where cannabis, art, and culture collide. Live-resin screw-ons and 2g
              rechargeable disposables, pressed in small batches for people who actually
              read the terpene panel.
            </p>
          </RevealItem>

          <RevealItem className="mt-9">
            <div className="flex flex-col gap-3 sm:flex-row">
              <Pill variant="acid" size="lg" asChild>
                <Link to="/shop/disposables">
                  Shop Disposables <ArrowRight className="size-4" />
                </Link>
              </Pill>
              <Pill variant="ghost" size="lg" asChild>
                <Link to="/society">Read our story</Link>
              </Pill>
            </div>
          </RevealItem>
        </Reveal>

        {/* Hero image panel */}
        <Reveal viewport={false} className="mt-14 md:mt-20">
          <RevealItem>
            <div className="panel relative aspect-[16/10] w-full md:aspect-[16/8]">
              <img
                src="/images/hero.png"
                alt="Green Leaf Society cartridges and disposables on wet black stone"
                className="size-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-void via-void/20 to-transparent" />

              {/* Stat strip */}
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-8">
                <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
                  {[
                    { value: "88%", label: "Peak THC" },
                    { value: "2g", label: "Rechargeable" },
                    { value: "Same day", label: "Delivery" },
                    { value: "0", label: "Additives" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl border border-line bg-void/60 px-4 py-3.5 backdrop-blur-md"
                    >
                      <p className="font-display text-2xl font-bold leading-none text-acid md:text-3xl">
                        {stat.value}
                      </p>
                      <p className="label-xs mt-2 text-bone/60">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </RevealItem>
        </Reveal>
      </div>
    </section>
  );
}

function ThreeWaySplit() {
  const routes = [
    {
      href: "/shop/screw-ons",
      eyebrow: "01 — Carts",
      title: "Screw-Ons",
      blurb:
        "510-thread glass tanks, ceramic cores, live resin only. Six strains in rotation.",
      image: "/images/cart-amber.png",
      cta: "Shop carts",
    },
    {
      href: "/shop/disposables",
      eyebrow: "02 — All-in-one",
      title: "Disposables",
      blurb:
        "2g rechargeable bodies with adjustable airflow and USB-C. No hardware needed.",
      image: "/images/disp-amber.png",
      cta: "Shop disposables",
    },
    {
      href: "/society",
      eyebrow: "03 — Brand",
      title: "The Society",
      blurb:
        "The gallery nights, the collabs, the people. What we're actually building here.",
      image: "/images/society.png",
      cta: "Enter the Society",
    },
  ];

  return (
    <section className="shell py-20 md:py-28">
      <SectionHeader
        eyebrow="Three ways in"
        title={
          <>
            Pick your
            <br />
            lane
          </>
        }
        blurb="Two product lines and one brand. Most people come for the disposables and stay for everything else."
      />

      <Reveal className="mt-14 grid gap-4 md:mt-16 md:grid-cols-3 md:gap-5">
        {routes.map((route) => (
          <RevealItem key={route.href}>
            <Link
              to={route.href}
              className="panel panel-sheen group flex h-full flex-col p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-acid/35 md:p-8"
            >
              <span className="label-xs text-acid">{route.eyebrow}</span>

              <div className="relative mt-6 aspect-[4/3] w-full overflow-hidden rounded-[16px] bg-panel-2">
                <img
                  src={route.image}
                  alt={route.title}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <h3 className="display-md mt-7 text-bone">{route.title}</h3>
              <p className="text-ash mt-3 text-sm leading-relaxed">{route.blurb}</p>

              <span className="mt-7 inline-flex items-center gap-2 pt-1 text-[0.8125rem] font-bold text-acid">
                {route.cta}
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </Link>
          </RevealItem>
        ))}
      </Reveal>
    </section>
  );
}

function FeaturedDrops() {
  const featured = useFeaturedProducts();

  return (
    <section className="shell py-20 md:py-28">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <SectionHeader
          align="left"
          eyebrow="In rotation"
          title={
            <>
              This month's
              <br />
              drops
            </>
          }
          blurb="What's moving right now across both lines. Small batches — when a run is gone, it's gone until the next press."
        />
        <Pill variant="ghost" className="shrink-0" asChild>
          <Link to="/shop/screw-ons">
            View all <ArrowRight className="size-4" />
          </Link>
        </Pill>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:mt-14 md:gap-5">
        {featured.isLoading
          ? Array.from({ length: 4 }).map((_, i) => <ProductCardSkeleton key={i} />)
          : featured.isError
            ? (
              <p className="text-ash col-span-full py-10 text-center text-sm">
                Couldn't load the current drops. Refresh to try again.
              </p>
            )
            : featured.data
                ?.slice(0, 8)
                .map((product) => (
                  <ProductCard key={product.slug} product={product} />
                ))}
      </div>
    </section>
  );
}

function StrainTeaser() {
  const strains = useStrains();
  const featured = strains.data?.filter((s) => s.featured).slice(0, 3);

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="haze left-0 top-1/3 h-[420px] w-[520px]" />

      <div className="shell relative">
        <div className="grid gap-5 lg:grid-cols-12">
          {/* Big image panel */}
          <div className="panel relative min-h-[340px] lg:col-span-7">
            <img
              src="/images/strain-macro.png"
              alt="Macro photograph of a trichome-covered cannabis flower"
              loading="lazy"
              className="absolute inset-0 size-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-void via-void/85 to-void/45" />
            <div className="relative flex h-full flex-col justify-end p-6 md:p-10">
              <span className="label-xs text-acid">The strain library</span>
              <h2 className="display-lg mt-5 max-w-[16ch] text-bone">
                Read the panel, not the hype
              </h2>
              <p className="text-bone/70 mt-4 max-w-[48ch] text-sm leading-relaxed">
                Every strain we press gets a full write-up: lineage, dominant terpenes,
                effects, THC range, and what it actually tastes like. No vague
                "uplifting" nonsense.
              </p>
              <Pill variant="bone" className="mt-7 self-start" asChild>
                <Link to="/strains">
                  Browse all strains <ArrowRight className="size-4" />
                </Link>
              </Pill>
            </div>
          </div>

          {/* Strain cards */}
          <div className="flex flex-col gap-4 lg:col-span-5 lg:gap-5">
            {strains.isLoading
              ? Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="panel h-32 animate-pulse bg-panel" />
                ))
              : featured?.map((strain) => (
                  <Link
                    key={strain.slug}
                    to={`/strains/${strain.slug}`}
                    className="panel panel-sheen group flex flex-1 flex-col justify-center p-6 transition-all duration-300 hover:border-acid/35 md:p-7"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="display-sm text-bone">{strain.name}</h3>
                        <p className="text-ash mt-1.5 text-xs">{strain.lineage}</p>
                      </div>
                      <span className="label-xs shrink-0 rounded-full bg-amber/12 px-2.5 py-1.5 text-amber">
                        {STRAIN_TYPE_LABEL[strain.type]}
                      </span>
                    </div>

                    <div className="mt-5 flex flex-wrap items-center gap-2">
                      {splitList(strain.terpenes)
                        .slice(0, 3)
                        .map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-line px-2.5 py-1 text-[0.6875rem] text-bone/70"
                          >
                            {t}
                          </span>
                        ))}
                      <span className="ml-auto font-display text-sm font-semibold text-acid">
                        {strain.thcLow}–{strain.thcHigh}%
                      </span>
                    </div>
                  </Link>
                ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CultureBlock() {
  return (
    <section className="shell py-20 md:py-28">
      <div className="grid gap-5 lg:grid-cols-12">
        <div className="panel panel-sheen flex flex-col justify-center p-7 md:p-12 lg:col-span-5">
          <span className="label-xs text-acid">Why we exist</span>
          <h2 className="display-lg mt-5 text-bone">
            A brand,
            <br />
            not a shelf
          </h2>
          <p className="text-ash mt-5 text-sm leading-relaxed md:text-base">
            Green Leaf Society started as a Friday night in a Boyle Heights print shop —
            six people, a borrowed press, and a rosin bag. We still fund the gallery
            nights. We still put artists on the packaging. The oil just got a lot better.
          </p>

          <ul className="mt-8 space-y-4">
            {[
              {
                Icon: Leaf,
                title: "Single-source flower",
                copy: "One farm, one harvest, per batch. Never blended to hit a number.",
              },
              {
                Icon: Zap,
                title: "Hardware we actually test",
                copy: "Every body we ship survived a 200-pull clog test. Most don't.",
              },
              {
                Icon: Star,
                title: "Artists on every box",
                copy: "A rotating artist gets the panel, the credit, and a cut.",
              },
            ].map((item) => (
              <li key={item.title} className="flex gap-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-full border border-line bg-panel-2 text-acid">
                  <item.Icon className="size-4" />
                </span>
                <div>
                  <p className="text-sm font-bold text-bone">{item.title}</p>
                  <p className="text-ash mt-1 text-[0.8125rem] leading-relaxed">
                    {item.copy}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-5 lg:col-span-7">
          <div className="panel relative min-h-[260px]">
            <img
              src="/images/society.png"
              alt="Friends at a gallery night"
              loading="lazy"
              className="absolute inset-0 size-full object-cover"
            />
            <div className="absolute inset-0 bg-void/25" />
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="panel relative min-h-[220px]">
              <img
                src="/images/lifestyle.png"
                alt="Person in a hoodie holding a disposable vape"
                loading="lazy"
                className="absolute inset-0 size-full object-cover"
              />
            </div>
            <div className="panel panel-sheen flex flex-col justify-between p-7">
              <span className="label-xs text-acid">Est. 2019</span>
              <div>
                <p className="font-display text-5xl font-bold leading-none text-bone">
                  41
                </p>
                <p className="text-ash mt-3 text-[0.8125rem] leading-relaxed">
                  gallery nights funded, artists paid, and counting.
                </p>
              </div>
              <Pill variant="ghost" size="sm" className="self-start" asChild>
                <Link to="/society">Our story</Link>
              </Pill>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = useTestimonials();

  return (
    <section className="shell py-20 md:py-28">
      <SectionHeader
        eyebrow="Customer stories"
        title={
          <>
            What the
            <br />
            Society says
          </>
        }
        blurb="Real reviews from people who buy it with their own money. Illustrative placeholder content for this build."
      />

      <div className="mt-14 grid gap-4 md:mt-16 md:grid-cols-2 lg:grid-cols-3 md:gap-5">
        {testimonials.isLoading
          ? Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="panel h-56 animate-pulse" />
            ))
          : testimonials.data?.map((t) => (
              <figure
                key={t.id}
                className="panel panel-sheen flex flex-col p-6 md:p-7"
              >
                <div className="flex items-center justify-between">
                  <Quote className="size-5 text-acid" />
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="size-3.5 fill-amber text-amber" />
                    ))}
                  </div>
                </div>

                <blockquote className="mt-5 flex-1 text-[0.9375rem] leading-relaxed text-bone/90">
                  "{t.quote}"
                </blockquote>

                <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-panel-2 font-display text-sm font-bold text-acid">
                    {t.name.charAt(0)}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold text-bone">{t.name}</p>
                    <p className="text-ash truncate text-xs">
                      {t.role} · {t.city}
                    </p>
                  </div>
                </figcaption>
              </figure>
            ))}
      </div>
    </section>
  );
}

function DeliveryStrip() {
  const perks = [
    { title: "Order by 6pm", copy: "Same evening handoff, seven days a week." },
    { title: "Free over $60", copy: "No delivery fee on orders above sixty dollars." },
    { title: "Live tracking", copy: "Your driver texts a window before they roll out." },
    { title: "Cash or debit", copy: "Pay at the door. Nothing is charged online." },
  ];

  return (
    <section className="shell pb-20 md:pb-28">
      <div className="panel relative overflow-hidden">
        <img
          src="/images/store.png"
          alt="Green Leaf Society delivery"
          loading="lazy"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-void via-void/85 to-void/40" />

        <div className="relative grid gap-10 p-7 md:p-12 lg:grid-cols-2 lg:p-16">
          <div>
            <span className="label-xs text-acid">Delivery only</span>
            <h2 className="display-lg mt-5 max-w-[14ch] text-bone">
              We come to you
            </h2>
            <p className="text-bone/70 mt-5 max-w-[46ch] text-sm leading-relaxed">
              No storefront, no queue. Same-day delivery across most of LA, Long Beach,
              Santa Ana, and San Diego — dropped at your door the evening you order.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Pill variant="acid" asChild>
                <Link to="/shop/disposables">
                  Start an order <ArrowRight className="size-4" />
                </Link>
              </Pill>
              <Pill variant="ghost" asChild>
                <Link to="/contact">Check your area</Link>
              </Pill>
            </div>
          </div>

          <ul className="space-y-2.5">
            {perks.map((perk) => (
              <li
                key={perk.title}
                className="rounded-2xl border border-line bg-void/50 px-5 py-4 backdrop-blur-sm"
              >
                <p className="text-sm font-bold text-bone">{perk.title}</p>
                <p className="text-ash mt-0.5 text-xs">{perk.copy}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <>
      <Hero />
      <Marquee items={MARQUEE_ITEMS} accent className="mt-16 md:mt-24" />
      <ThreeWaySplit />
      <FeaturedDrops />
      <Marquee
        items={["Where cannabis, art & culture collide", "Est. Boyle Heights 2019"]}
        duration={44}
        reverse
      />
      <StrainTeaser />
      <CultureBlock />
      <Testimonials />
      <DeliveryStrip />
    </>
  );
}

export default Index;
