import Image from 'next/image'
import { site } from '@/lib/site'

export function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-background">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:px-6 md:py-24">
        <Image
          src="/images/burrito-grill.png"
          alt="Burritos toasting on a hot grill"
          width={1024}
          height={1024}
          className="order-last aspect-[4/3] w-full rounded-[2rem] object-cover md:order-first"
        />
        <div className="flex flex-col gap-5">
          <p className="text-sm font-bold uppercase tracking-widest text-primary">What we do</p>
          <h2 className="font-display text-4xl leading-tight text-balance md:text-6xl">
            {'The best burritos in town.'}
          </h2>
          <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
            {`At ${site.name}, we cook burritos. That's our thing, and we do it with all our heart. Stop by and taste it for yourself.`}
          </p>
        </div>
      </div>
    </section>
  )
}
