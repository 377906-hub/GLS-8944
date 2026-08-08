import { z } from "zod";
import { and, asc, eq, inArray, desc } from "drizzle-orm";
import { ORPCError } from "@orpc/server";
import { base } from "../__core/app";
import { db } from "../database";
import * as schema from "../database/schema";

const categorySchema = z.enum(["screw-ons", "disposables"]);
const strainTypeSchema = z.enum(["indica", "sativa", "hybrid"]);

export const catalog = {
  /** Products for a category page, with optional strain-type filter + sort. */
  products: base
    .input(
      z.object({
        category: categorySchema.optional(),
        strainTypes: z.array(strainTypeSchema).optional(),
        sort: z.enum(["featured", "price-asc", "price-desc", "thc-desc"]).default("featured"),
      }),
    )
    .handler(async ({ input }) => {
      const filters = [];
      if (input.category) filters.push(eq(schema.products.category, input.category));
      if (input.strainTypes?.length) {
        filters.push(inArray(schema.products.strainType, input.strainTypes));
      }

      const orderBy =
        input.sort === "price-asc"
          ? asc(schema.products.priceCents)
          : input.sort === "price-desc"
            ? desc(schema.products.priceCents)
            : input.sort === "thc-desc"
              ? desc(schema.products.thc)
              : asc(schema.products.sortOrder);

      return db
        .select()
        .from(schema.products)
        .where(filters.length ? and(...filters) : undefined)
        .orderBy(orderBy);
    }),

  /** Homepage rail — featured products across both categories. */
  featured: base.handler(() =>
    db
      .select()
      .from(schema.products)
      .where(eq(schema.products.featured, true))
      .orderBy(asc(schema.products.category), asc(schema.products.sortOrder)),
  ),

  /** Product detail + its strain + related products from the same category. */
  product: base
    .input(z.object({ slug: z.string() }))
    .handler(async ({ input }) => {
      const [product] = await db
        .select()
        .from(schema.products)
        .where(eq(schema.products.slug, input.slug));
      if (!product) throw new ORPCError("NOT_FOUND", { message: "Product not found" });

      const [strain] = await db
        .select()
        .from(schema.strains)
        .where(eq(schema.strains.slug, product.strainSlug));

      const related = (
        await db
          .select()
          .from(schema.products)
          .where(eq(schema.products.category, product.category))
          .orderBy(asc(schema.products.sortOrder))
      )
        .filter((p) => p.slug !== product.slug)
        .slice(0, 3);

      return { product, strain: strain ?? null, related };
    }),

  /** Resolve a cart's slugs to authoritative server-side prices. */
  priceCart: base
    .input(z.object({ slugs: z.array(z.string()).max(50) }))
    .handler(async ({ input }) => {
      if (!input.slugs.length) return [];
      return db
        .select({
          slug: schema.products.slug,
          name: schema.products.name,
          priceCents: schema.products.priceCents,
          image: schema.products.image,
          size: schema.products.size,
          inStock: schema.products.inStock,
        })
        .from(schema.products)
        .where(inArray(schema.products.slug, input.slugs));
    }),

  strains: base
    .input(z.object({ types: z.array(strainTypeSchema).optional() }).optional())
    .handler(({ input }) =>
      db
        .select()
        .from(schema.strains)
        .where(
          input?.types?.length ? inArray(schema.strains.type, input.types) : undefined,
        )
        .orderBy(desc(schema.strains.featured), asc(schema.strains.name)),
    ),

  strain: base.input(z.object({ slug: z.string() })).handler(async ({ input }) => {
    const [strain] = await db
      .select()
      .from(schema.strains)
      .where(eq(schema.strains.slug, input.slug));
    if (!strain) throw new ORPCError("NOT_FOUND", { message: "Strain not found" });

    const products = await db
      .select()
      .from(schema.products)
      .where(eq(schema.products.strainSlug, input.slug))
      .orderBy(asc(schema.products.sortOrder));

    return { strain, products };
  }),
};
