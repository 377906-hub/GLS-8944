import { useMutation, useQuery } from "@tanstack/react-query";
import { orpc } from "../lib/api";

export function useTestimonials() {
  return useQuery(orpc.content.testimonials.queryOptions({ staleTime: 300_000 }));
}

export function useSubmitInquiry() {
  return useMutation(orpc.content.submitInquiry.mutationOptions());
}

export type Testimonial = NonNullable<
  ReturnType<typeof useTestimonials>["data"]
>[number];
