import { Truck } from "lucide-react";

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.89h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6.94 5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM3.35 8.75h3.18V21H3.35V8.75Zm6.3 0h3.05v1.68h.04c.42-.8 1.46-1.65 3-1.65 3.21 0 3.8 2.11 3.8 4.86V21h-3.18v-5.69c0-1.36-.02-3.1-1.89-3.1-1.9 0-2.19 1.48-2.19 3v5.79H9.65V8.75Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#top" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-amber-500">
                <Truck className="h-5 w-5 text-slate-950" />
              </span>
              <span className="text-lg font-bold tracking-tight text-white">
                YOPO <span className="text-amber-500">TRANSPORT</span>
              </span>
            </a>
            <p className="mt-4 text-sm text-slate-400">
              Reliable freight and logistics solutions, moving America forward
              one shipment at a time.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                aria-label="Facebook"
                className="text-slate-400 hover:text-amber-500"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-slate-400 hover:text-amber-500"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-slate-400 hover:text-amber-500"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Services</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li>Full Truckload</li>
              <li>Less Than Truckload</li>
              <li>Expedited Shipping</li>
              <li>Refrigerated Transport</li>
              <li>Warehousing</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Company</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li>
                <a href="#why-us" className="hover:text-amber-500">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-amber-500">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-500">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li>+1 708 550 4407</li>
              <li>info@yopotransport.com</li>
              <li>Serving all 50 states</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Yopo Transport. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
