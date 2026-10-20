import type { MDXContent } from "mdx/types";

export const PLANTILLAS: Record<string, () => Promise<{ default: MDXContent }>> = {
  "product-brief": () => import("@/templates/product-brief.md"),
  prd: () => import("@/templates/prd.md"),
  adr: () => import("@/templates/adr.md"),
  "diseno-tecnico": () => import("@/templates/diseno-tecnico.md"),
};

export const AVAILABLE_PLANTILLAS = Object.keys(PLANTILLAS);
