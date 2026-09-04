'use client';

import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CTASection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-foreground text-background px-6 py-16 sm:px-16 sm:py-20 text-center">
          {/* Decorative accents */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

          <div className="relative">
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance max-w-2xl mx-auto">
              Have an unused parking space?
            </h2>
            <p className="mt-4 text-lg text-background/70 max-w-xl mx-auto text-balance">
              Join thousands of hosts earning extra income from their driveways,
              garages, and lots. Listing is free — you only pay when you earn.
            </p>
            <div className="mt-8 flex justify-center">
              <Button
                size="lg"
                className="group bg-primary text-primary-foreground hover:bg-primary/90"
                asChild
              >
                <a href="#list-space">
                  List Your Space
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
