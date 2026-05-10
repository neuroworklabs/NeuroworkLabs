import Image from "next/image";

/** Full-viewport decorative backdrop (switch asset in `src` to compare variants). */
export function HeroBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 min-h-dvh w-full overflow-hidden"
      aria-hidden
    >
      <Image
        src="/background-1.png"
        alt=""
        fill
        priority
        quality={90}
        className="object-cover object-center opacity-10"
        sizes="100vw"
      />
    </div>
  );
}
