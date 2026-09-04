'use client';

import {
  Home,
  Calendar,
  DollarSign,
  ClipboardList,
  type LucideIcon,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ownerBenefits: Benefit[] = [
  {
    icon: Home,
    title: 'List unused parking space',
    description:
      'Turn your empty driveway, garage, or lot into income. Listing takes less than two minutes.',
  },
  {
    icon: Calendar,
    title: 'Set availability',
    description:
      'Choose when your space is available — by the hour, day, or week. You are always in control.',
  },
  {
    icon: DollarSign,
    title: 'Earn from unused space',
    description:
      'Set your own price and get paid securely. Top hosts earn hundreds per month effortlessly.',
  },
  {
    icon: ClipboardList,
    title: 'Manage bookings',
    description:
      'Accept or decline requests, message drivers, and track earnings — all from one dashboard.',
  },
];

export function ForOwners() {
  return (
    <section id="list-space" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Visual: earnings card */}
          <div className="relative order-2 lg:order-1">
            <div className="rounded-2xl border border-border bg-card shadow-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-sm text-muted-foreground">This month</p>
                  <p className="font-headline text-3xl font-bold">$847.50</p>
                </div>
                <span className="rounded-full bg-success/10 text-success text-sm font-medium px-3 py-1">
                  +18% vs last month
                </span>
              </div>

              {/* Simple bar chart */}
              <div className="flex items-end gap-2 h-32 mb-6">
                {[
                  { day: 'Mon', h: '40%' },
                  { day: 'Tue', h: '55%' },
                  { day: 'Wed', h: '70%' },
                  { day: 'Thu', h: '50%' },
                  { day: 'Fri', h: '90%' },
                  { day: 'Sat', h: '100%' },
                  { day: 'Sun', h: '65%' },
                ].map((bar) => (
                  <div key={bar.day} className="flex-1 flex flex-col items-center gap-2">
                    <div
                      className="w-full rounded-t-md bg-primary/80 hover:bg-primary transition-colors"
                      style={{ height: bar.h }}
                    />
                    <span className="text-xs text-muted-foreground">{bar.day}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                <div>
                  <p className="text-xs text-muted-foreground">Bookings</p>
                  <p className="font-semibold text-lg">34</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Avg rate</p>
                  <p className="font-semibold text-lg">$4.20/hr</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Rating</p>
                  <p className="font-semibold text-lg">4.9/5</p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-sm font-semibold text-primary uppercase tracking-wide">
              For Parking Owners
            </p>
            <h2 className="mt-3 font-headline text-3xl sm:text-4xl font-bold tracking-tight text-balance">
              Turn your empty space into income
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-balance">
              Whether it is a driveway, garage, or private lot — if it is sitting
              empty, it could be earning you money.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              {ownerBenefits.map((benefit) => (
                <div key={benefit.title} className="group">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <benefit.icon className="h-5 w-5" />
                    </span>
                    <h3 className="font-semibold">{benefit.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button size="lg" asChild>
                <a href="#list-space">Start earning today</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
