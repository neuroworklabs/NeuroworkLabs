export const neuroworkLabsUrl = "https://github.com/neuroworklabs";

export const homeHeadline = {
  prefix: "Software for ",
  highlight: "Physical",
  suffix: " Innovation",
} as const;

export const homeDescriptionParts = {
  leadLabel: "Neurowork Labs",
  afterLead:
    " is a hybrid open-source AI engineering infrastructure company building software that powers the design, development, and manufacturing of next-generation physical technologies.",
} as const;

export const homeDescription = [
  homeDescriptionParts.leadLabel,
  homeDescriptionParts.afterLead,
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
    "is a hybrid open-source AI engineering infrastructure company building software that powers the design, development, and manufacturing of next-generation physical technologies.",
  ),
];

/** Display width for the logo in the OG image (height derived from intrinsic ratio). */
export const homeLogoOgWidth = 720;
