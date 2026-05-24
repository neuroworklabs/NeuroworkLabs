import {
  generateHomeOgImage,
  ogImageAlt,
  ogImageSize,
} from "@/components/HomeOgImage";

export const alt = ogImageAlt;
export const size = ogImageSize;
export const contentType = "image/png";

export default function Image() {
  return generateHomeOgImage();
}
