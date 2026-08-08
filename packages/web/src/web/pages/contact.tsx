import { useState } from "react";
import { useSearchParams } from "wouter";
import { Check, Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "../components/page-hero";
import { Pill } from "../components/ui/pill";
import { cn } from "@/lib/utils";
import { useSubmitInquiry } from "../queries/content";

type Kind = "general" | "wholesale" | "press";

const KINDS: { value: Kind; label: string; blurb: string }[] = [
  {
    value: "general",
    label: "General",
    blurb: "Order questions, hardware swaps, COA requests, or anything else.",
  },
  {
    value: "wholesale",
    label: "Wholesale",
    blurb: "Licensed retailers and distributors — tell us your licence type and volume.",
  },
  {
    value: "press",
    label: "Press",
    blurb: "Interviews, gallery night coverage, artist collabs, and brand assets.",
  },
];

function isKind(value: string): value is Kind {
  return value === "general" || value === "wholesale" || value === "press";
}

function Contact() {
  const [search] = useSearchParams();
  const initialKind = search.get("kind") ?? "";

  const [kind, setKind] = useState<Kind>(isKind(initialKind) ? initialKind : "general");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);

  const submit = useSubmitInquiry();
  const active = KINDS.find((k) => k.value === kind) ?? KINDS[0];

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (name.trim().length < 2) return setError("Add your name.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setError("Add a valid email.");
    if (message.trim().length < 10)
      return setError("Give us at least a sentence so we can actually help.");

    submit.mutate(
      {
        kind,
        name: name.trim(),
        email: email.trim(),
        company: company.trim() || undefined,
        message: message.trim(),
      },
      { onError: (err) => setError(err.message || "Something broke. Try again.") },
    );
  }

  const inputClass =
    "w-full rounded-2xl border border-line bg-panel-2 px-5 py-3.5 text-sm text-bone placeholder:text-ash/70 outline-none transition-colors focus:border-acid/50 focus-visible:ring-2 focus-visible:ring-acid/30";

  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Talk to the Society"
        blurb="A real person reads every message — usually within one business day. For anything time-sensitive, call the number below."
      />

      <section className="shell pb-20 md:pb-28">
        <div className="grid gap-5 lg:grid-cols-12">
          {/* Form */}
          <div className="panel panel-sheen p-7 md:p-10 lg:col-span-7">
            {submit.isSuccess ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                <span className="grid size-16 place-items-center rounded-full bg-acid text-void">
                  <Check className="size-7" strokeWidth={2.5} />
                </span>
                <h2 className="display-md mt-8 text-bone">Message received</h2>
                <p className="text-ash mt-5 max-w-[40ch] text-sm leading-relaxed">
                  We've got it, {name.split(" ")[0] || "friend"}. Expect a reply at{" "}
                  <span className="text-bone">{email}</span> within one business day.
                </p>
                <Pill
                  variant="ghost"
                  className="mt-9"
                  onClick={() => {
                    submit.reset();
                    setName("");
                    setEmail("");
                    setCompany("");
                    setMessage("");
                  }}
                >
                  Send another
                </Pill>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate>
                <span className="label-xs text-acid">What's this about?</span>

                <div className="mt-5 flex flex-wrap gap-2">
                  {KINDS.map((k) => (
                    <button
                      key={k.value}
                      type="button"
                      onClick={() => setKind(k.value)}
                      aria-pressed={kind === k.value}
                      className={cn(
                        "rounded-full border px-5 py-2.5 text-[0.75rem] font-bold uppercase tracking-[0.12em] transition-all",
                        kind === k.value
                          ? "border-acid bg-acid text-void"
                          : "border-line text-bone/70 hover:border-bone/25 hover:text-bone",
                      )}
                    >
                      {k.label}
                    </button>
                  ))}
                </div>

                <p className="text-ash mt-4 text-[0.8125rem] leading-relaxed">
                  {active.blurb}
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="label-xs text-ash">Name</span>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      aria-label="Your name"
                      placeholder="Jordan Reyes"
                      autoComplete="name"
                      className={cn(inputClass, "mt-3")}
                    />
                  </label>

                  <label className="block">
                    <span className="label-xs text-ash">Email</span>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      aria-label="Your email"
                      placeholder="you@email.com"
                      type="email"
                      autoComplete="email"
                      className={cn(inputClass, "mt-3")}
                    />
                  </label>
                </div>

                <label className="mt-4 block">
                  <span className="label-xs text-ash">
                    Company {kind === "general" ? "(optional)" : ""}
                  </span>
                  <input
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder={
                      kind === "wholesale"
                        ? "Retailer name + licence number"
                        : kind === "press"
                          ? "Publication or outlet"
                          : "Optional"
                    }
                    aria-label="Company"
                    autoComplete="organization"
                    className={cn(inputClass, "mt-3")}
                  />
                </label>

                <label className="mt-4 block">
                  <span className="label-xs text-ash">Message</span>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    aria-label="Message"
                    rows={6}
                    placeholder="Tell us what you need."
                    className={cn(inputClass, "mt-3 resize-y")}
                  />
                </label>

                {error ? (
                  <p className="mt-5 rounded-2xl border border-destructive/40 bg-destructive/10 px-5 py-3.5 text-sm text-bone">
                    {error}
                  </p>
                ) : null}

                <Pill
                  type="submit"
                  variant="acid"
                  size="lg"
                  className="mt-7 w-full sm:w-auto"
                  disabled={submit.isPending}
                >
                  {submit.isPending ? "Sending…" : "Send message"}
                </Pill>

                <p className="text-ash/70 mt-5 text-[0.6875rem] leading-relaxed">
                  We don't sell or share your details. Submissions are stored only to
                  answer your question.
                </p>
              </form>
            )}
          </div>

          {/* Side info */}
          <div className="flex flex-col gap-4 lg:col-span-5 md:gap-5">
            <div className="panel panel-sheen p-7 md:p-8">
              <span className="label-xs text-acid">Direct lines</span>
              <ul className="mt-6 space-y-5">
                {[
                  {
                    Icon: Mail,
                    label: "General",
                    value: "hello@greenleafsociety.example",
                  },
                  {
                    Icon: Mail,
                    label: "Wholesale",
                    value: "trade@greenleafsociety.example",
                  },
                  { Icon: Phone, label: "Flagship", value: "(213) 555-0142" },
                ].map((row) => (
                  <li key={row.value} className="flex items-start gap-3.5">
                    <span className="grid size-10 shrink-0 place-items-center rounded-full border border-line bg-panel-2 text-acid">
                      <row.Icon className="size-4" />
                    </span>
                    <div className="min-w-0">
                      <p className="label-xs text-ash">{row.label}</p>
                      <p className="mt-2 truncate text-sm font-medium text-bone">
                        {row.value}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="panel relative min-h-[240px] flex-1">
              <img
                src="/images/store.png"
                alt="Green Leaf Society flagship"
                loading="lazy"
                className="absolute inset-0 size-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-void via-void/50 to-transparent" />
              <div className="relative flex h-full flex-col justify-end p-7 md:p-8">
                <span className="grid size-10 place-items-center rounded-full border border-line bg-void/60 text-acid backdrop-blur">
                  <MapPin className="size-4" />
                </span>
                <p className="display-sm mt-5 text-bone">Flagship — Boyle Heights</p>
                <p className="text-bone/70 mt-2.5 text-[0.8125rem] leading-relaxed">
                  1832 E 1st St, Los Angeles, CA 90033 · Open daily 9am–10pm
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
