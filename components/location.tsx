import { MapPin, MessageCircle, Navigation } from 'lucide-react'
import { site } from '@/lib/site'

export function Location() {
  return (
    <section id="visit" className="scroll-mt-20 bg-secondary text-secondary-foreground">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 py-16 text-center md:px-6 md:py-24">
        <p className="text-sm font-bold uppercase tracking-widest text-primary">Come visit us</p>
        <h2 className="font-display text-4xl leading-tight text-balance md:text-6xl">
          {"We're right downtown"}
        </h2>
        <div className="flex w-full max-w-3xl flex-col gap-6 md:flex-row">
        <address className="flex flex-1 flex-col items-center gap-4 rounded-[2rem] border-4 border-primary bg-card p-8 not-italic shadow-[0_8px_0_0_var(--primary)]">
          <span className="flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <MapPin className="size-7" aria-hidden="true" />
          </span>
          <span className="font-display text-3xl text-primary">{site.street}</span>
          <span className="text-lg font-semibold text-muted-foreground">{site.area}</span>
          <a
            href={site.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            <Navigation className="size-4" aria-hidden="true" />
            Open in Maps
          </a>
        </address>
        <div
          id="order"
          className="flex flex-1 scroll-mt-20 flex-col items-center gap-4 rounded-[2rem] border-4 border-primary bg-card p-8 shadow-[0_8px_0_0_var(--primary)]"
        >
          <span className="flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <MessageCircle className="size-7" aria-hidden="true" />
          </span>
          <span className="font-display text-3xl text-primary">Order online</span>
          <a
            href={`tel:${site.phone}`}
            className="text-lg font-semibold text-muted-foreground underline-offset-4 hover:underline"
          >
            WhatsApp: {site.phone}
          </a>
          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            Order on WhatsApp
          </a>
        </div>
        </div>
      </div>
    </section>
  )
}
