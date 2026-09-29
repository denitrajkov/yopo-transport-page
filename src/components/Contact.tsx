"use client";

import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="bg-slate-900 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-amber-500">
            Get In Touch
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Request a Shipping Quote
          </h2>
          <p className="mt-4 text-slate-400">
            Fill out the form and our team will get back to you with a quote
            shortly.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-500">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Call Us</p>
                  <p className="text-sm text-slate-400">(555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-500">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Email Us</p>
                  <p className="text-sm text-slate-400">info@yopotransport.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-500">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    Nationwide Coverage
                  </p>
                  <p className="text-sm text-slate-400">
                    Proudly serving all 50 states
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            {submitted ? (
              <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-8 text-center">
                <p className="text-lg font-semibold text-white">
                  Thank you! 🚚
                </p>
                <p className="mt-2 text-sm text-slate-300">
                  Your request has been received. Our team will reach out
                  shortly.
                </p>
              </div>
            ) : (
              <form
                className="grid gap-6 sm:grid-cols-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <div>
                  <label className="text-sm font-medium text-slate-300">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    className="mt-2 w-full rounded-md border border-white/10 bg-slate-950 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-amber-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-300">
                    Company
                  </label>
                  <input
                    type="text"
                    placeholder="Your Company"
                    className="mt-2 w-full rounded-md border border-white/10 bg-slate-950 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-amber-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-300">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-md border border-white/10 bg-slate-950 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-amber-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-300">
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="(555) 123-4567"
                    className="mt-2 w-full rounded-md border border-white/10 bg-slate-950 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-amber-500 focus:outline-none"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm font-medium text-slate-300">
                    Shipment Details
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Origin, destination, freight type, and weight..."
                    className="mt-2 w-full rounded-md border border-white/10 bg-slate-950 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-amber-500 focus:outline-none"
                  />
                </div>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="w-full rounded-md bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-400 sm:w-auto"
                  >
                    Submit Request
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
