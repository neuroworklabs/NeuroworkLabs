export const neuroworkLabsUrl = "https://github.com/neuroworklabs";
export const neuronsUrl = "https://github.com/neuroworklabs/Neurons";

export const homeHeadline = {
  prefix: "Build Something ",
  highlight: "Humanity",
  suffix: " Needs",
} as const;

export const homeDescriptionParts = {
  leadLabel: "Neurowork Labs",
  afterLead:
    " is an open-source organization focused on AI-powered software development. Our first project is ",
  projectLabel: "Neurons",
  afterProject:
    ", a single-vendor AI agent marketplace from where teams in the world can integrate AI agents into their websites and web applications.",
} as const;

export const homeDescription = [
  homeDescriptionParts.leadLabel,
  homeDescriptionParts.afterLead,
  homeDescriptionParts.projectLabel,
  homeDescriptionParts.afterProject,
].join("");

/**
 * Token-based copy for the OG image. Satori only supports flex layout, so the
 * description is rendered as a single flex-wrap container with one token per
 * word (highlighted phrases stay as one token; trailing punctuation sticks to
 * the highlight via {@link OgHighlightToken.trailing}).
 */
export type OgTextToken = { kind: "text"; text: string };
export type OgHighlightToken = {
  kind: "highlight";
  text: string;
  trailing?: string;
};
export type OgDescriptionToken = OgTextToken | OgHighlightToken;

const splitTextTokens = (input: string): OgTextToken[] =>
  input
    .split(/\s+/)
    .filter((word) => word.length > 0)
    .map((text) => ({ kind: "text", text }));

export const homeDescriptionOgTokens: ReadonlyArray<OgDescriptionToken> = [
  { kind: "highlight", text: homeDescriptionParts.leadLabel },
  ...splitTextTokens(
    "is an open-source organization focused on AI-powered software development. Our first project is",
  ),
  {
    kind: "highlight",
    text: homeDescriptionParts.projectLabel,
    trailing: ",",
  },
  ...splitTextTokens(
    "a single-vendor AI agent marketplace from where teams in the world can integrate AI agents into their websites and web applications.",
  ),
];

/** Display width for the logo in the OG image (height derived from intrinsic ratio). */
export const homeLogoOgWidth = 720;
