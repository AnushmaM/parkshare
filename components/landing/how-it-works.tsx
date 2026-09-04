'use client';

import { Search, CalendarCheck, Car, type LucideIcon } from 'lucide-react';

interface Step {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: '01',
    icon: Search,
    title: 'Search',
    description:
      'Enter your destination and browse available parking spaces nearby. Filter by price, distance, and amenities.',
  },
  {
    number: '02',
    icon: CalendarCheck,
    title: 'Reserve',
    description:
      'Pick your spot and reserve it in seconds. Get instant confirmation with a guaranteed space waiting for you.',
  },
  {
    number: '03',
    icon: Car,
    title: 'Park',
    description:
      'Arrive and park hassle-free. Show your reservation and drive straight into your reserved space.',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-primary uppercase tracking-wide">
            How It Works
          </p>
          <h2 className="mt-3 font-headline text-3xl sm:text-4xl font-bold tracking-tight text-balance">
            Three simple steps to your parking spot
          </h2>
          <p className="mt-4 text-muted-foreground text-lg text-balance">
            From search to parked in under a minute. No more circling the block.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="relative group"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="relative rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:shadow-lg hover:border-primary/30 hover:-translate-y-1">
                <div className="flex items-center justify-between mb-6">
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <step.icon className="h-7 w-7" />
                  </span>
                  <span className="font-headline text-5xl font-bold text-muted/60 select-none">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-headline text-xl font-semibold mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
