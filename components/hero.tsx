import Image from 'next/image'
import { MapPin, MessageCircle } from 'lucide-react'
import { site } from '@/lib/site'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 pt-12 md:grid-cols-2 md:px-6 md:pb-24 md:pt-16">
        <div className="flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-bold text-secondary-foreground">
            <MapPin className="size-4" aria-hidden="true" />
            {site.area}, {site.street}
          </span>
          <h1 className="font-display text-6xl leading-none text-balance md:text-8xl">
            {'Burrito '}
            <span className="text-secondary">Fire</span>
          </h1>
          <p className="max-w-md text-xl leading-relaxed text-primary-foreground/90 text-pretty md:text-2xl">
            {site.tagline}
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 text-base font-bold text-secondary-foreground shadow-[0_4px_0_0_oklch(0.25_0.06_30)] transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="size-5" aria-hidden="true" />
              Order on WhatsApp
            </a>
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-primary-foreground px-6 py-3 text-base font-bold transition-colors hover:bg-primary-foreground hover:text-primary"
            >
              Get directions
            </a>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] bg-secondary" aria-hidden="true" />
          <Image
            src="/images/burrito-hero.png"
            alt="A freshly grilled burrito cut in half, filled with rice, beans, meat and peppers"
            width={1024}
            height={1024}
            priority
            className="relative aspect-square w-full rounded-[2rem] border-4 border-primary-foreground object-cover"
          />
        </div>
      </div>
    </section>
  )
}
