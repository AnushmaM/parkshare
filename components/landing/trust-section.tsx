'use client';

import {
  ShieldCheck,
  Eye,
  Lock,
  MessageSquareQuote,
  type LucideIcon,
} from 'lucide-react';

interface TrustItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

const trustItems: TrustItem[] = [
  {
    icon: ShieldCheck,
    title: 'Verified listings',
    description:
      'Every space is checked and verified by our team so you know exactly what you are booking.',
  },
  {
    icon: Eye,
    title: 'Transparent pricing',
    description:
      'No hidden fees. The price you see is the price you pay, every single time.',
  },
  {
    icon: Lock,
    title: 'Secure bookings',
    description:
      'Your reservation and payment are protected end-to-end with bank-grade security.',
  },
  {
    icon: MessageSquareQuote,
    title: 'Reviews from real bookings',
    description:
      'Read genuine feedback from drivers who have parked there before you commit.',
  },
];

export function TrustSection() {
  return (
    <section className="py-20 sm:py-28 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-primary uppercase tracking-wide">
            Why ParkShare
          </p>
          <h2 className="mt-3 font-headline text-3xl sm:text-4xl font-bold tracking-tight text-balance">
            Park with peace of mind
          </h2>
          <p className="mt-4 text-muted-foreground text-lg text-balance">
            We have built trust into every step, so you can focus on getting
            where you need to go.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:border-primary/30 hover:-translate-y-1"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                <item.icon className="h-6 w-6" />
              </span>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 rounded-2xl border border-border bg-card p-8">
          {[
            { value: '12K+', label: 'Parking spots' },
            { value: '50K+', label: 'Active drivers' },
            { value: '4.9/5', label: 'Average rating' },
            { value: '98%', label: 'Satisfaction rate' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-headline text-3xl sm:text-4xl font-bold text-primary">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
