import { motion, type Variants } from "motion/react";
import { cn } from "@/lib/utils";

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.04 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

/** Staggers its direct <RevealItem> children on mount. */
export function Reveal({
  children,
  className,
  once = true,
  viewport = true,
}: {
  children: React.ReactNode;
  className?: string;
  once?: boolean;
  /** animate when scrolled into view (default) vs immediately on mount */
  viewport?: boolean;
}) {
  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      {...(viewport
        ? { whileInView: "show", viewport: { once, margin: "-80px" } }
        : { animate: "show" })}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "li" | "span" | "p" | "h2";
}) {
  const Comp = motion[as];
  return (
    <Comp variants={itemVariants} className={cn(className)}>
      {children}
    </Comp>
  );
}
