import Image from "next/image";
import { HeroBackground } from "@/components/HeroBackground";
import {
  homeDescriptionParts,
  homeHeadline,
  neuroworkLabsUrl,
} from "@/lib/home";

export default function Home() {
  return (
    <div className="relative z-0 flex min-h-dvh w-full flex-col">
      <HeroBackground />

      <main className="relative z-10 flex w-full flex-1 flex-col items-center justify-center px-4 py-12 sm:px-6 sm:py-16 md:py-24 [padding-top:max(2.5rem,env(safe-area-inset-top))] [padding-bottom:max(2.5rem,env(safe-area-inset-bottom))] [padding-left:max(1rem,env(safe-area-inset-left))] [padding-right:max(1rem,env(safe-area-inset-right))]">
        <Image
          src="/white-theme-logo.png"
          alt="Neurowork Labs"
          width={1280}
          height={388}
          priority
          className="h-auto w-full max-w-[min(88vw,52rem)] select-none sm:max-w-[min(85vw,56rem)]"
          sizes="(max-width: 640px) 88vw, 896px"
        />

        <h1 className="mt-10 max-w-[min(100%,40rem)] text-balance text-center text-[clamp(1.5rem,4.5vw+0.2rem,2.75rem)] font-semibold leading-[1.18] tracking-tight text-[#000000] sm:mt-12 sm:leading-[1.15]">
          {homeHeadline.prefix}
          <span className="text-[#76B900]">{homeHeadline.highlight}</span>
          {homeHeadline.suffix}
        </h1>

        <p className="mt-6 max-w-[min(100%,36rem)] text-pretty text-center text-[clamp(0.9375rem,2.2vw+0.4rem,1.125rem)] font-normal leading-relaxed text-[#000000] sm:mt-8">
          <a
            href={neuroworkLabsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#76B900] underline decoration-[#76B900]/40 underline-offset-4 transition-colors hover:text-[#5ea000] hover:decoration-[#5ea000]/50"
          >
            {homeDescriptionParts.leadLabel}
          </a>
          {homeDescriptionParts.afterLead}
        </p>
      </main>
    </div>
  );
}
