'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  CalendarDays,
  Car,
  CheckCircle2,
  Clock3,
  MapPin,
  Navigation,
  Search,
  Star,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

type ParkingSpot = {
  name: string;
  area: string;
  distance: string;
  price: number;
  availability: string;
  rating: number;
  accent: string;
};

const parkingSpots: ParkingSpot[] = [
  {
    name: 'Indiranagar Metro Parking',
    area: '100 Feet Road, Bengaluru',
    distance: '0.3 km away',
    price: 60,
    availability: '8 spots left',
    rating: 4.8,
    accent: 'from-teal-500 to-cyan-600',
  },
  {
    name: '12th Main Secure Lot',
    area: 'HAL 2nd Stage, Bengaluru',
    distance: '0.7 km away',
    price: 45,
    availability: '14 spots left',
    rating: 4.6,
    accent: 'from-amber-500 to-orange-600',
  },
  {
    name: 'The Courtyard Parking',
    area: 'CMH Road, Bengaluru',
    distance: '1.1 km away',
    price: 35,
    availability: '5 spots left',
    rating: 4.5,
    accent: 'from-sky-500 to-blue-600',
  },
  {
    name: 'Loyola Academy Visitor Parking',
    area: 'Loyola Academy, Alwal, Hyderabad',
    distance: '0.4 km away',
    price: 40,
    availability: '11 spots left',
    rating: 4.7,
    accent: 'from-rose-500 to-red-600',
  },
];

function createGeneratedParkingSpots(destination: string): ParkingSpot[] {
  const names = ['Metro Parking', 'Central Lot', 'Secure Parking Hub', 'Community Parking'];

  return names.map((suffix, index) => ({
    name: `${destination} ${suffix}`,
    area: `${destination} nearby`,
    distance: `${(0.3 + index * 0.4).toFixed(1)} km away`,
    price: 30 + Math.floor(Math.random() * 61),
    availability: `${4 + Math.floor(Math.random() * 21)} spots left`,
    rating: Number((4.3 + Math.random() * 0.6).toFixed(1)),
    accent: ['from-violet-500 to-indigo-600', 'from-lime-500 to-green-600', 'from-fuchsia-500 to-pink-600', 'from-slate-500 to-slate-700'][index],
  }));
}

export default function FindParkingPage() {
  const [destination, setDestination] = useState('Indiranagar, Bengaluru');
  const [date, setDate] = useState('2026-09-04');
  const [startTime, setStartTime] = useState('10:00');
  const [duration, setDuration] = useState('2');
  const [searchedDestination, setSearchedDestination] = useState(destination);
  const [generatedParkingSpots, setGeneratedParkingSpots] = useState<ParkingSpot[]>([]);
  const normalizedDestination = destination.trim().toLowerCase();
  const matchingParkingSpots = normalizedDestination
    ? parkingSpots.filter((spot) =>
        `${spot.name} ${spot.area}`.toLowerCase().includes(normalizedDestination)
      )
    : parkingSpots;
  const visibleParkingSpots = matchingParkingSpots.length > 0 ? matchingParkingSpots : generatedParkingSpots;

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const searchedArea = destination.trim() || 'your destination';
    setSearchedDestination(searchedArea);

    const normalizedSearch = searchedArea.toLowerCase();
    const exactMatches = parkingSpots.filter((spot) =>
      `${spot.name} ${spot.area}`.toLowerCase().includes(normalizedSearch)
    );
    setGeneratedParkingSpots(exactMatches.length > 0 ? [] : createGeneratedParkingSpots(searchedArea));
  }

  return (
    <main className="min-h-screen bg-[#f7faf9] text-foreground">
      <header className="border-b border-border/70 bg-background/90 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Car className="h-5 w-5" />
            </span>
            <span className="font-headline tracking-tight">ParkShare</span>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mb-8 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Step 2 · Find a spot
          </p>
          <h1 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Parking that fits your plans.
          </h1>
          <p className="mt-3 text-muted-foreground">
            Tell us where and when you need to park. We&apos;ll show nearby spaces ready for you.
          </p>
        </div>

        <form
          onSubmit={handleSearch}
          className="mb-8 rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-5"
        >
          <div className="grid gap-4 md:grid-cols-[1.5fr_1fr_1fr_0.8fr_auto] md:items-end">
            <label className="block text-sm font-medium">
              <span className="mb-2 flex items-center gap-2 text-foreground">
                <MapPin className="h-4 w-4 text-primary" /> Destination
              </span>
              <input
                value={destination}
                onChange={(event) => setDestination(event.target.value)}
                placeholder="Area, landmark, or address"
                className="h-11 w-full rounded-md border border-input bg-background px-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/20"
              />
            </label>
            <label className="block text-sm font-medium">
              <span className="mb-2 flex items-center gap-2 text-foreground">
                <CalendarDays className="h-4 w-4 text-primary" /> Date
              </span>
              <input
                type="date"
                value={date}
                onChange={(event) => setDate(event.target.value)}
                className="h-11 w-full rounded-md border border-input bg-background px-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/20"
              />
            </label>
            <label className="block text-sm font-medium">
              <span className="mb-2 flex items-center gap-2 text-foreground">
                <Clock3 className="h-4 w-4 text-primary" /> Start time
              </span>
              <input
                type="time"
                value={startTime}
                onChange={(event) => setStartTime(event.target.value)}
                className="h-11 w-full rounded-md border border-input bg-background px-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/20"
              />
            </label>
            <label className="block text-sm font-medium">
              <span className="mb-2 block text-foreground">Duration</span>
              <select
                value={duration}
                onChange={(event) => setDuration(event.target.value)}
                className="h-11 w-full rounded-md border border-input bg-background px-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/20"
              >
                <option value="1">1 hour</option>
                <option value="2">2 hours</option>
                <option value="4">4 hours</option>
                <option value="8">All day</option>
              </select>
            </label>
            <Button type="submit" className="h-11 gap-2">
              <Search className="h-4 w-4" /> Search
            </Button>
          </div>
        </form>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.9fr)]">
          <section>
            <div className="mb-4 flex items-end justify-between gap-4">
              <div>
                <h2 className="font-headline text-xl font-semibold">Available near {searchedDestination}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{visibleParkingSpots.length} spaces found for your search</p>
              </div>
              <button className="hidden text-sm font-medium text-primary hover:underline sm:block">Sort: Recommended</button>
            </div>

            <div className="space-y-4">
              {visibleParkingSpots.map((spot) => (
                <article key={spot.name} className="overflow-hidden rounded-xl border border-border bg-card shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                  <div className="flex min-h-[154px] flex-col sm:flex-row">
                    <div className={`relative flex h-28 shrink-0 items-end bg-gradient-to-br ${spot.accent} p-4 sm:h-auto sm:w-40`}>
                      <div className="absolute right-3 top-3 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm"><Car className="h-5 w-5" /></div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-white/80">ParkShare verified</span>
                    </div>
                    <div className="flex flex-1 flex-col justify-between gap-4 p-4 sm:p-5">
                      <div className="flex justify-between gap-4">
                        <div>
                          <h3 className="font-headline font-semibold">{spot.name}</h3>
                          <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground"><MapPin className="h-3.5 w-3.5" />{spot.area}</p>
                          <p className="mt-1 text-xs text-muted-foreground">{spot.distance}</p>
                        </div>
                        <div className="shrink-0 text-right"><p className="font-headline text-lg font-bold">₹{spot.price}</p><p className="text-xs text-muted-foreground">per hour</p></div>
                      </div>
                      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border pt-3">
                        <div className="flex items-center gap-3 text-xs"><span className="flex items-center gap-1 font-medium text-amber-600"><Star className="h-3.5 w-3.5 fill-current" /> {spot.rating}</span><span className="flex items-center gap-1 text-success"><CheckCircle2 className="h-3.5 w-3.5" /> {spot.availability}</span></div>
                        <Button variant="outline" size="sm">View Details</Button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <aside className="lg:sticky lg:top-6 lg:self-start">
            <div className="relative min-h-[440px] overflow-hidden rounded-2xl border border-border bg-[#dce9e5] shadow-sm">
              <div className="absolute inset-0 opacity-70" style={{ backgroundImage: 'linear-gradient(28deg, transparent 47%, #ffffff 48%, #ffffff 51%, transparent 52%), linear-gradient(112deg, transparent 44%, #ffffff 45%, #ffffff 48%, transparent 49%), linear-gradient(6deg, transparent 64%, #c3d8d1 65%, #c3d8d1 67%, transparent 68%)', backgroundSize: '170px 150px, 210px 180px, 260px 210px' }} />
              <div className="absolute left-[24%] top-[30%] h-3/4 w-1/2 rotate-12 border-x-[18px] border-primary/20" />
              <div className="absolute right-[19%] top-[22%] h-3/4 w-1/2 -rotate-45 border-r-[14px] border-amber-400/30" />
              <div className="absolute left-[47%] top-[39%] flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-primary text-primary-foreground shadow-lg"><Navigation className="h-5 w-5 fill-current" /></div>
              <div className="absolute bottom-4 left-4 right-4 rounded-lg border border-white/70 bg-white/85 p-3 backdrop-blur-sm"><p className="text-sm font-semibold">Map view</p><p className="mt-0.5 text-xs text-muted-foreground">Showing parking around your destination</p></div>
              <span className="absolute left-[26%] top-[21%] rounded-full bg-white px-2 py-1 text-xs font-medium shadow-sm">₹60</span>
              <span className="absolute right-[21%] top-[48%] rounded-full bg-white px-2 py-1 text-xs font-medium shadow-sm">₹45</span>
              <span className="absolute left-[27%] bottom-[24%] rounded-full bg-white px-2 py-1 text-xs font-medium shadow-sm">₹35</span>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
