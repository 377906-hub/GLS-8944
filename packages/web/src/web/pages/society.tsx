import { Link } from "wouter";
import { ArrowRight, FlaskConical, Leaf, Palette, Users } from "lucide-react";
import { PageHero } from "../components/page-hero";
import { Pill } from "../components/ui/pill";
import { Marquee } from "../components/marquee";
import { Reveal, RevealItem } from "../components/reveal";
import { SectionHeader } from "../components/section-header";

const TIMELINE = [
  {
    year: "2019",
    title: "A borrowed press",
    copy: "Six friends, a Boyle Heights print shop, and a rosin bag on a Friday night. The first run was 40 carts, all given away.",
  },
  {
    year: "2021",
    title: "First farm partner",
    copy: "We stopped buying bulk oil and started buying whole harvests from a single family farm in the Salinas Valley.",
  },
  {
    year: "2023",
    title: "Hardware, finally solved",
    copy: "Nineteen bodies tested, one survived our 200-pull clog test. That's the chassis under every disposable we ship.",
  },
  {
    year: "2026",
    title: "Six doors, one Society",
    copy: "A rotating artist on every box, and forty-one funded gallery nights and counting.",
  },
];

const VALUES = [
  {
    Icon: Leaf,
    title: "Single-source, always",
    copy: "One farm, one harvest, per batch. We never blend lots to hit a potency number on a label.",
  },
  {
    Icon: FlaskConical,
    title: "Test it, then print it",
    copy: "No number goes on a box before the COA comes back. If the batch fails, the batch dies.",
  },
  {
    Icon: Palette,
    title: "Artists get paid",
    copy: "Every packaging run features one artist who gets the panel, the credit, and a percentage.",
  },
  {
    Icon: Users,
    title: "The room is the point",
    copy: "Gallery nights, print swaps, and studio sessions. The product funds the culture, not the other way round.",
  },
];

function Society() {
  return (
    <>
      <PageHero
        eyebrow="The Society"
        title="A brand, not a shelf"
        blurb="Green Leaf Society exists because the shelf was full of anonymous oil in anonymous plastic. We wanted something that told you where it came from — and put the people who made it on the front."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Pill variant="acid" size="lg" asChild>
            <Link to="/shop/disposables">
              Shop the current run <ArrowRight className="size-4" />
            </Link>
          </Pill>
          <Pill variant="ghost" size="lg" asChild>
            <Link to="/contact?kind=press">Press &amp; partnerships</Link>
          </Pill>
        </div>
      </PageHero>

      {/* Image bento */}
      <section className="shell pb-16 md:pb-24">
        <Reveal className="grid gap-4 md:grid-cols-12 md:gap-5">
          <RevealItem className="md:col-span-7">
            <div className="panel relative aspect-[16/10] w-full">
              <img
                src="/images/society.png"
                alt="A Green Leaf Society gallery night"
                loading="lazy"
                className="size-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-void/85 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-9">
                <span className="label-xs text-acid">Gallery night 41</span>
                <p className="display-sm mt-3 max-w-[24ch] text-bone">
                  Every third Thursday, somewhere in East LA
                </p>
              </div>
            </div>
          </RevealItem>

          <RevealItem className="md:col-span-5">
            <div className="flex h-full flex-col gap-4 md:gap-5">
              <div className="panel panel-sheen flex flex-1 flex-col justify-center p-7 md:p-9">
                <p className="font-display text-6xl font-bold leading-none text-acid">41</p>
                <p className="text-ash mt-4 text-sm leading-relaxed">
                  gallery nights funded since 2019 — artists paid, walls filled, nobody
                  asked to work for exposure.
                </p>
              </div>
              <div className="panel relative aspect-[4/3] w-full">
                <img
                  src="/images/flatlay.png"
                  alt="Packaging flatlay with artist panels"
                  loading="lazy"
                  className="size-full object-cover"
                />
              </div>
            </div>
          </RevealItem>
        </Reveal>
      </section>

      <Marquee
        items={["Where cannabis, art & culture collide", "Est. Boyle Heights 2019"]}
        duration={46}
        accent
      />

      {/* Timeline */}
      <section className="shell py-20 md:py-28">
        <SectionHeader
          align="left"
          eyebrow="How we got here"
          title={
            <>
              Seven years,
              <br />
              no shortcuts
            </>
          }
          blurb="We grew slowly on purpose. Every jump was a farm relationship or a hardware fix, never a marketing budget."
        />

        <Reveal className="mt-14 grid gap-4 md:mt-16 md:grid-cols-2 lg:grid-cols-4 md:gap-5">
          {TIMELINE.map((entry) => (
            <RevealItem key={entry.year}>
              <div className="panel panel-sheen flex h-full flex-col p-7 md:p-8">
                <span className="font-display text-3xl font-bold leading-none text-acid">
                  {entry.year}
                </span>
                <h3 className="display-sm mt-6 text-bone">{entry.title}</h3>
                <p className="text-ash mt-3 text-[0.875rem] leading-relaxed">
                  {entry.copy}
                </p>
              </div>
            </RevealItem>
          ))}
        </Reveal>
      </section>

      {/* Values */}
      <section className="shell pb-20 md:pb-28">
        <div className="grid gap-5 lg:grid-cols-12">
          <div className="panel relative min-h-[340px] lg:col-span-5">
            <img
              src="/images/lifestyle.png"
              alt="A member of the Society holding a disposable"
              loading="lazy"
              className="absolute inset-0 size-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-void/80 to-transparent" />
            <div className="relative flex h-full flex-col justify-end p-7 md:p-9">
              <span className="label-xs text-acid">What we stand on</span>
              <h2 className="display-md mt-4 max-w-[14ch] text-bone">Four rules we don't bend</h2>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7 md:gap-5">
            {VALUES.map((value) => (
              <div key={value.title} className="panel panel-sheen p-7 md:p-8">
                <span className="grid size-11 place-items-center rounded-full border border-line bg-panel-2 text-acid">
                  <value.Icon className="size-4" />
                </span>
                <h3 className="display-sm mt-6 text-bone">{value.title}</h3>
                <p className="text-ash mt-3 text-[0.875rem] leading-relaxed">
                  {value.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lab testing — linked from the footer as /society#testing */}
      <section id="testing" className="shell scroll-mt-28 pb-20 md:pb-28">
        <div className="panel panel-sheen p-7 md:p-12 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="label-xs text-acid">Lab results</span>
              <h2 className="display-lg mt-5 max-w-[16ch] text-bone">
                Every batch, on paper
              </h2>
              <p className="text-ash mt-6 max-w-[52ch] text-[0.9375rem] leading-relaxed">
                Each press is sent to a licensed third-party lab before it's packed. We
                test for cannabinoid potency, full terpene profile, pesticides, residual
                solvents, heavy metals, and microbials. The batch number printed on your
                box pulls up that exact report.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Pill variant="acid" asChild>
                  <Link to="/contact">
                    Request a COA <ArrowRight className="size-4" />
                  </Link>
                </Pill>
                <Pill variant="ghost" asChild>
                  <Link to="/strains">See strain panels</Link>
                </Pill>
              </div>

              <p className="text-ash/70 mt-8 text-[0.6875rem] leading-relaxed">
                Lab figures shown across this site are illustrative placeholder content
                for this build and do not represent real test results.
              </p>
            </div>

            <dl className="grid grid-cols-2 gap-4 self-start">
              {[
                { label: "Potency", value: "100%", note: "of batches tested" },
                { label: "Pesticides", value: "0", note: "detected, 2026 runs" },
                { label: "Additives", value: "None", note: "no MCT, PG, or VG" },
                { label: "Turnaround", value: "9 days", note: "press to shelf" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-line bg-panel-2 p-5 md:p-6"
                >
                  <dt className="label-xs text-ash">{stat.label}</dt>
                  <dd className="mt-3 font-display text-3xl font-bold leading-none text-acid">
                    {stat.value}
                  </dd>
                  <p className="text-ash mt-2.5 text-[0.6875rem]">{stat.note}</p>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}

export default Society;
