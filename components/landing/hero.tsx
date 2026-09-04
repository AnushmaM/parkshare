'use client';

import { Search, MapPin, Calendar, Clock, ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-28">
      {/* Background accents */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[600px] bg-gradient-to-b from-accent/50 via-accent/20 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 text-sm font-medium text-muted-foreground opacity-0-init animate-fade-up">
              <span className="flex h-2 w-2 rounded-full bg-success" />
              Over 12,000 parking spots available nationwide
            </div>

            <h1 className="mt-6 font-headline text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance opacity-0-init animate-fade-up animation-delay-100">
              Find parking before you reach your{' '}
              <span className="text-primary">destination.</span>
            </h1>

            <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 text-balance opacity-0-init animate-fade-up animation-delay-200">
              Discover and reserve convenient parking spaces from people and
              businesses around you. Save time, skip the circling, and park with
              confidence.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start opacity-0-init animate-fade-up animation-delay-300">
              <Button size="lg" className="group" asChild>
                <a href="/find-parking">
                  Find Parking
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#list-space">List Your Space</a>
              </Button>
            </div>

            {/* Social proof */}
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-4 opacity-0-init animate-fade-up animation-delay-500">
              <div className="flex -space-x-2">
                {[
                  'bg-gradient-to-br from-teal-400 to-teal-600',
                  'bg-gradient-to-br from-blue-400 to-blue-600',
                  'bg-gradient-to-br from-amber-400 to-amber-600',
                  'bg-gradient-to-br from-rose-400 to-rose-600',
                ].map((bg, i) => (
                  <div
                    key={i}
                    className={`h-9 w-9 rounded-full border-2 border-background ${bg}`}
                  />
                ))}
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-warning text-warning"
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-0.5">
                  Trusted by 50,000+ drivers
                </p>
              </div>
            </div>
          </div>

          {/* Right: visual */}
          <div className="relative opacity-0-init animate-fade-up animation-delay-300">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-border">
              <img
                src="https://images.pexels.com/photos/5231181/pexels-photo-5231181.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Aerial view of an urban parking lot"
                className="w-full h-[400px] sm:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
            </div>

            {/* Floating search card */}
            <div className="absolute -bottom-6 -left-2 sm:-left-6 right-8 sm:right-auto sm:w-80 rounded-2xl border border-border bg-card shadow-xl p-4 animate-scale-in animation-delay-500">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                Quick Search
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2.5">
                  <MapPin className="h-4 w-4 text-primary shrink-0" />
                  <input
                    type="text"
                    placeholder="Where are you going?"
                    className="bg-transparent text-sm outline-none flex-1 placeholder:text-muted-foreground"
                  />
                </div>
                <div className="flex gap-2">
                  <div className="flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2.5 flex-1">
                    <Calendar className="h-4 w-4 text-primary shrink-0" />
                    <span className="text-sm text-muted-foreground">Today</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2.5 flex-1">
                    <Clock className="h-4 w-4 text-primary shrink-0" />
                    <span className="text-sm text-muted-foreground">2 hrs</span>
                  </div>
                </div>
              </div>
              <Button className="w-full mt-3" size="sm">
                <Search className="mr-2 h-4 w-4" />
                Search Parking
              </Button>
            </div>

            {/* Floating price tag */}
            <div className="absolute -top-4 -right-2 sm:-right-4 rounded-xl border border-border bg-card shadow-lg px-4 py-3 animate-scale-in animation-delay-700">
              <p className="text-xs text-muted-foreground">From</p>
              <p className="text-2xl font-bold text-foreground">
                $3<span className="text-sm font-normal text-muted-foreground">/hr</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
