import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import {
  homeDescriptionOgTokens,
  homeHeadline,
  homeLogoOgWidth,
} from "@/lib/home";

const headlinePrefix = homeHeadline.prefix.trim();
const headlineHighlight = homeHeadline.highlight;
const headlineSuffix = homeHeadline.suffix.trim();

export const ogImageSize = {
  width: 1200,
  height: 630,
} as const;

export const ogImageAlt = "Neurowork Labs — Build Something Humanity Needs";

const brandGreen = "#76B900";
const brandGreenUnderline = "rgba(118, 185, 0, 0.4)";
const foreground = "#000000";
const pageBackground = "#e8ebe6";

/** Intrinsic dimensions of `public/white-theme-logo.png`. */
const logoIntrinsicWidth = 8022;
const logoIntrinsicHeight = 2437;
const logoOgHeight = Math.round(
  homeLogoOgWidth * (logoIntrinsicHeight / logoIntrinsicWidth),
);

const descriptionHighlightStyle = {
  color: brandGreen,
  fontWeight: 600,
  textDecoration: "underline",
  textDecorationColor: brandGreenUnderline,
} as const;

const ogDescriptionWidth = 720;
const ogDescriptionFontSize = 20;
const ogHeadlineWordGap = 14;
const ogWordSpacing = 6;
const ogLineHeight = 1.55;

async function loadOutfitFonts() {
  const [regular, semibold] = await Promise.all([
    fetch(
      "https://fonts.gstatic.com/s/outfit/v15/QGYyz_MVcBeNP4NjuGObqx1XmO1I4TC1C4E.ttf",
    ).then((res) => res.arrayBuffer()),
    fetch(
      "https://fonts.gstatic.com/s/outfit/v15/QGYyz_MVcBeNP4NjuGObqx1XmO1I4e6yC4E.ttf",
    ).then((res) => res.arrayBuffer()),
  ]);

  return [
    { name: "Outfit", data: regular, weight: 400 as const, style: "normal" as const },
    { name: "Outfit", data: semibold, weight: 600 as const, style: "normal" as const },
  ];
}

async function loadPublicImage(filename: string) {
  const buffer = await readFile(join(process.cwd(), "public", filename));
  return `data:image/png;base64,${buffer.toString("base64")}`;
}

export async function generateHomeOgImage() {
  const [fonts, logoSrc, backgroundSrc] = await Promise.all([
    loadOutfitFonts(),
    loadPublicImage("white-theme-logo.png"),
    loadPublicImage("background-1.png"),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: pageBackground,
          fontFamily: "Outfit",
        }}
      >
        <img
          src={backgroundSrc}
          alt=""
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            opacity: 0.1,
          }}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            padding: "48px 64px",
          }}
        >
          <img
            src={logoSrc}
            alt="Neurowork Labs"
            width={homeLogoOgWidth}
            height={logoOgHeight}
            style={{
              width: homeLogoOgWidth,
              height: logoOgHeight,
            }}
          />
          <div
            style={{
              marginTop: 40,
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "nowrap",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 44,
                fontWeight: 600,
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                color: foreground,
              }}
            >
              <div style={{ display: "flex" }}>{headlinePrefix}</div>
              <div
                style={{
                  display: "flex",
                  color: brandGreen,
                  marginLeft: ogHeadlineWordGap,
                  marginRight: ogHeadlineWordGap,
                }}
              >
                {headlineHighlight}
              </div>
              <div style={{ display: "flex" }}>{headlineSuffix}</div>
            </div>
          </div>
          <div
            style={{
              marginTop: 28,
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "baseline",
                width: ogDescriptionWidth,
                fontSize: ogDescriptionFontSize,
                fontWeight: 400,
                lineHeight: ogLineHeight,
                color: foreground,
              }}
            >
              {homeDescriptionOgTokens.map((token, index) => {
                const marginLeft = index === 0 ? 0 : ogWordSpacing;
                if (token.kind === "highlight") {
                  return (
                    <div
                      key={`${index}-${token.text}`}
                      style={{ display: "flex", marginLeft }}
                    >
                      <div
                        style={{
                          display: "flex",
                          ...descriptionHighlightStyle,
                        }}
                      >
                        {token.text}
                      </div>
                      {token.trailing ? (
                        <div style={{ display: "flex" }}>{token.trailing}</div>
                      ) : null}
                    </div>
                  );
                }
                return (
                  <div
                    key={`${index}-${token.text}`}
                    style={{ display: "flex", marginLeft }}
                  >
                    {token.text}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...ogImageSize,
      fonts,
    },
  );
}
