import { useQuery } from "@tanstack/react-query";
import { orpc } from "../lib/api";

export type StrainType = "indica" | "sativa" | "hybrid";
export type Category = "screw-ons" | "disposables";
export type ProductSort = "featured" | "price-asc" | "price-desc" | "thc-desc";

export function useProducts(input: {
  category?: Category;
  strainTypes?: StrainType[];
  sort?: ProductSort;
}) {
  return useQuery(
    orpc.catalog.products.queryOptions({
      input: {
        category: input.category,
        strainTypes: input.strainTypes?.length ? input.strainTypes : undefined,
        sort: input.sort ?? "featured",
      },
      staleTime: 60_000,
    }),
  );
}

export function useFeaturedProducts() {
  return useQuery(orpc.catalog.featured.queryOptions({ staleTime: 60_000 }));
}

export function useProduct(slug: string) {
  return useQuery(
    orpc.catalog.product.queryOptions({ input: { slug }, staleTime: 60_000 }),
  );
}

export function useStrains(types?: StrainType[]) {
  return useQuery(
    orpc.catalog.strains.queryOptions({
      input: { types: types?.length ? types : undefined },
      staleTime: 60_000,
    }),
  );
}

export function useStrain(slug: string) {
  return useQuery(
    orpc.catalog.strain.queryOptions({ input: { slug }, staleTime: 60_000 }),
  );
}

export function useCartPricing(slugs: string[]) {
  return useQuery(
    orpc.catalog.priceCart.queryOptions({
      input: { slugs },
      enabled: slugs.length > 0,
      staleTime: 30_000,
    }),
  );
}

export type Product = NonNullable<
  ReturnType<typeof useFeaturedProducts>["data"]
>[number];
export type Strain = NonNullable<ReturnType<typeof useStrains>["data"]>[number];
