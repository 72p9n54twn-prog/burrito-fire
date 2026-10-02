import { Flame } from 'lucide-react'
import { site } from '@/lib/site'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b-4 border-secondary bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <a href="#top" className="flex items-center gap-2" aria-label={`${site.name} home`}>
          <span className="flex size-9 items-center justify-center rounded-full bg-secondary text-primary">
            <Flame className="size-5" aria-hidden="true" />
          </span>
          <span className="font-display text-2xl tracking-wide">{site.name}</span>
        </a>
        <nav aria-label="Main">
          <ul className="flex items-center gap-1 text-sm font-semibold md:gap-2">
            <li>
              <a href="#about" className="rounded-full px-3 py-2 transition-colors hover:bg-primary-foreground/15">
                About
              </a>
            </li>
            <li>
              <a
                href="#visit"
                className="rounded-full bg-secondary px-4 py-2 text-secondary-foreground transition-transform hover:scale-105"
              >
                Visit us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
