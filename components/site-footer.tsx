import { Flame } from 'lucide-react'
import { site } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-8 text-center md:flex-row md:px-6 md:text-left">
        <p className="flex items-center gap-2 font-display text-xl">
          <Flame className="size-5 text-secondary" aria-hidden="true" />
          {site.name}
        </p>
        <p className="text-sm text-primary-foreground/85">
          {site.area}, {site.street}
          {' · '}
          <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline">
            WhatsApp {site.phone}
          </a>
        </p>
      </div>
    </footer>
  )
}
