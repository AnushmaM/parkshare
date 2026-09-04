'use client';

import {
  MapPin,
  Tag,
  CalendarCheck,
  Clock,
  type LucideIcon,
} from 'lucide-react';

interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

const driverBenefits: Benefit[] = [
  {
    icon: MapPin,
    title: 'Find nearby parking',
    description:
      'Locate available spaces close to your destination in real time, from driveways to garages.',
  },
  {
    icon: Tag,
    title: 'Compare prices',
    description:
      'See all options side by side and choose the spot that fits your budget — no surprises.',
  },
  {
    icon: CalendarCheck,
    title: 'Reserve in advance',
    description:
      'Book ahead so your space is guaranteed. No more arriving to a full lot.',
  },
  {
    icon: Clock,
    title: 'Save time',
    description:
      'Skip the circling. Drive straight to your reserved spot and get on with your day.',
  },
];

export function ForDrivers() {
  return (
    <section id="find-parking" className="py-20 sm:py-28 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-sm font-semibold text-primary uppercase tracking-wide">
              For Drivers
            </p>
            <h2 className="mt-3 font-headline text-3xl sm:text-4xl font-bold tracking-tight text-balance">
              Parking made effortless
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-balance">
              Stop wasting time and fuel driving around. Find the perfect spot
              before you even leave home.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              {driverBenefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <benefit.icon className="h-5 w-5" />
                    </span>
                    <h3 className="font-semibold">{benefit.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed pl-[52px]">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual: mock parking results */}
          <div className="relative">
            <div className="rounded-2xl border border-border bg-card shadow-xl p-6 space-y-3">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-sm">Available near Downtown</h3>
                <span className="text-xs text-muted-foreground">12 spots</span>
              </div>
              {[
                { name: 'Main St Garage', dist: '0.2 mi', price: '$4/hr', tag: 'Covered' },
                { name: '5th Ave Driveway', dist: '0.4 mi', price: '$3/hr', tag: 'Residential' },
                { name: 'Oak St Lot', dist: '0.5 mi', price: '$2.50/hr', tag: 'Open-air' },
              ].map((spot) => (
                <div
                  key={spot.name}
                  className="flex items-center justify-between rounded-xl border border-border bg-background p-4 transition-all hover:border-primary/30 hover:shadow-sm cursor-pointer"
                >
                  <div>
                    <p className="font-medium text-sm">{spot.name}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {spot.dist} away
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-primary">{spot.price}</p>
                    <span className="inline-block mt-1 rounded-full bg-accent px-2 py-0.5 text-xs text-accent-foreground">
                      {spot.tag}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
