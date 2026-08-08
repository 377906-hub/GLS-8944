import { ArrowDownRight, ArrowRight, FlaskConical, Leaf, Palette, Users } from "lucide-react";
import { Link } from "wouter";
import { Pill } from "../components/ui/pill";
import { Reveal, RevealItem } from "../components/reveal";

const GALLERY = [
  {
    src: "/images/society.png",
    alt: "Green Leaf Society gallery night",
    label: "Community / 01",
    size: "md:col-span-7 md:row-span-2",
  },
  {
    src: "/images/flatlay.png",
    alt: "Green Leaf Society packaging and artwork",
    label: "Objects / 02",
    size: "md:col-span-5",
  },
  {
    src: "/images/lifestyle.png",
    alt: "Green Leaf Society lifestyle photography",
    label: "Life / 03",
    size: "md:col-span-5",
  },
];

const VALUES = [
  {
    Icon: Leaf,
    number: "01",
    title: "Origin matters",
    copy: "We care about where things come from, who made them, and the details that get lost when everything becomes anonymous.",
  },
  {
    Icon: FlaskConical,
    number: "02",
    title: "Details matter",
    copy: "From materials to presentation, every part of the experience is considered before it reaches the room.",
  },
  {
    Icon: Palette,
    number: "03",
    title: "Artists matter",
    copy: "Visual culture is part of the Society. We make space for artists, photographers, designers, and makers.",
  },
  {
    Icon: Users,
    number: "04",
    title: "People matter",
    copy: "The best experiences are shared. Community is the center of the brand, not an afterthought.",
  },
];

function Society() {
  return (
    <main className="bg-void text-bone">
      {/* Luxury hero */}
      <section className="relative flex min-h-[78vh] items-end overflow-hidden border-b border-line">
        <img
          src="/images/society.png"
          alt="Green Leaf Society community"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/55 to-void/10" />
        <div className="absolute inset-0 bg-black/20" />

        <div className="shell relative w-full pb-14 pt-32 md:pb-20 lg:pb-24">
          <div className="flex items-end justify-between gap-8">
            <div className="max-w-5xl">
              <p className="label-xs mb-6 text-acid">Green Leaf Society / The Society</p>
              <h1 className="font-display text-[clamp(3.5rem,10vw,9rem)] font-bold uppercase leading-[0.82] tracking-[-0.06em] text-bone">
                Elevated
                <br />
                <span className="text-acid">experience.</span>
              </h1>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-bone/75 md:text-lg">
                A visual journal of the people, places, objects, and creative energy
                surrounding Green Leaf Society.
              </p>
            </div>

            <a
              href="#gallery"
              aria-label="Scroll to gallery"
              className="mb-1 hidden size-14 shrink-0 items-center justify-center rounded-full border border-bone/30 text-bone transition hover:border-acid hover:text-acid md:flex"
            >
              <ArrowDownRight className="size-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="shell py-20 md:py-28 lg:py-36">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <p className="label-xs text-acid lg:col-span-3">The Society</p>
          <div className="lg:col-span-8 lg:col-start-5">
            <h2 className="font-display text-4xl font-semibold leading-tight tracking-[-0.035em] text-bone md:text-6xl">
              More than a product. A point of view.
            </h2>
            <p className="mt-7 max-w-2xl text-base leading-8 text-ash md:text-lg">
              Green Leaf Society is built around a simple idea: the details change the
              experience. The photography, the packaging, the spaces, the people —
              everything should feel intentional, tactile, and unmistakably ours.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="shell scroll-mt-20 pb-20 md:pb-32">
        <div className="mb-10 flex items-end justify-between gap-6 md:mb-14">
          <div>
            <p className="label-xs text-acid">01 / Gallery</p>
            <h2 className="font-display mt-4 text-4xl font-semibold tracking-[-0.035em] md:text-6xl">
              In the Society
            </h2>
          </div>
          <p className="hidden max-w-xs text-right text-sm leading-relaxed text-ash md:block">
            A collection of moments from the culture around the brand.
          </p>
        </div>

        <Reveal className="grid auto-rows-[240px] gap-4 md:auto-rows-[280px] md:grid-cols-12 md:gap-5">
          {GALLERY.map((image, index) => (
            <RevealItem key={image.src} className={image.size}>
              <figure className="group relative h-full overflow-hidden rounded-[2px] bg-panel-2">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading={index === 0 ? "eager" : "lazy"}
                  className="size-full object-cover transition duration-700 ease-out group-hover:scale-[1.035]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
                <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between p-5 md:p-7">
                  <span className="label-xs text-bone">{image.label}</span>
                  <span className="grid size-9 place-items-center rounded-full border border-bone/30 text-bone transition group-hover:border-acid group-hover:text-acid">
                    <ArrowRight className="size-4 -rotate-45" />
                  </span>
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </Reveal>
      </section>

      {/* Statement */}
      <section className="border-y border-line bg-panel-2">
        <div className="shell py-20 md:py-28 lg:py-36">
          <p className="label-xs text-acid">02 / Experience</p>
          <blockquote className="mt-8 max-w-6xl font-display text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-bone md:text-6xl lg:text-8xl">
            “Every visit should feel like you discovered something.”
          </blockquote>
          <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <p className="max-w-xl text-sm leading-7 text-ash md:text-base">
              We believe premium is not about excess. It is about restraint, consistency,
              craft, and creating enough space for the details to speak for themselves.
            </p>
            <Pill variant="ghost" size="lg" asChild>
              <Link to="/contact">
                Start a conversation <ArrowRight className="size-4" />
              </Link>
            </Pill>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="shell py-20 md:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="label-xs text-acid">03 / Principles</p>
            <h2 className="font-display mt-5 text-4xl font-semibold leading-tight tracking-[-0.035em] md:text-5xl">
              The details are the brand.
            </h2>
          </div>

          <Reveal className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:col-span-8">
            {VALUES.map(({ Icon, number, title, copy }) => (
              <RevealItem key={title}>
                <article className="h-full bg-void p-7 transition duration-300 hover:bg-panel-2 md:p-9">
                  <div className="flex items-center justify-between">
                    <span className="label-xs text-acid">{number}</span>
                    <Icon className="size-5 text-ash" />
                  </div>
                  <h3 className="mt-12 font-display text-2xl font-semibold text-bone md:text-3xl">
                    {title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-ash">{copy}</p>
                </article>
              </RevealItem>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Closing image */}
      <section className="shell pb-20 md:pb-32">
        <div className="relative min-h-[420px] overflow-hidden md:min-h-[620px]">
          <img
            src="/images/lifestyle.png"
            alt="Green Leaf Society lifestyle"
            loading="lazy"
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-void via-void/20 to-transparent" />
          <div className="relative flex min-h-[420px] flex-col justify-end p-7 md:min-h-[620px] md:p-12 lg:p-16">
            <p className="label-xs text-acid">04 / Continue exploring</p>
            <div className="mt-5 flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
              <h2 className="max-w-3xl font-display text-4xl font-semibold leading-none tracking-[-0.04em] text-bone md:text-6xl lg:text-7xl">
                Stay curious.
                <br />
                Stay connected.
              </h2>
              <Pill variant="acid" size="lg" asChild>
                <Link to="/contact">
                  Get in touch <ArrowRight className="size-4" />
                </Link>
              </Pill>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Society;
