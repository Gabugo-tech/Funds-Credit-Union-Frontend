import type { Metadata } from "next";
import Link from "next/link";
import {
  Shield, Globe, TrendingUp, CreditCard, Smartphone,
  ArrowRight, CheckCircle2, Star, Lock, BarChart3, Users,
  Building2, ChevronRight, Award, Zap, RefreshCw,
} from "lucide-react";
import FcuLogo from "@/components/ui/FcuLogo";

export const metadata: Metadata = {
  title: "Funds Credit Union — The World's Premier Digital Bank",
  description:
    "Funds Credit Union is a World Bank Approved digital banking and investment platform. Open an account in minutes. Bank smarter, invest better.",
};

// ─── Data ────────────────────────────────────────────────────────────────────

const stats = [
  { value: "₦2.4T+",   label: "Assets Under Management" },
  { value: "180,000+", label: "Active Customers"         },
  { value: "60+",      label: "Countries Supported"      },
  { value: "99.99%",   label: "Platform Uptime"          },
];

const features = [
  {
    icon: CreditCard,
    title: "Multi-Currency Banking",
    desc: "Hold, send, and receive in NGN, USD, GBP, EUR and 13 other currencies with real-time exchange rates.",
    color: "bg-sky-500/10 text-sky-400",
  },
  {
    icon: TrendingUp,
    title: "Investment Portfolio",
    desc: "Invest in Nigerian stocks, US equities, ETFs, bonds and cryptocurrency through a single account.",
    color: "bg-gold-400/10 text-gold-400",
  },
  {
    icon: Globe,
    title: "Global Transfers",
    desc: "Send money to 60+ countries instantly. Zero hidden fees, transparent FX rates guaranteed.",
    color: "bg-primary-500/10 text-primary-400",
  },
  {
    icon: Shield,
    title: "Bank-Grade Security",
    desc: "256-bit AES encryption, biometric authentication, and 24/7 AI-powered fraud monitoring.",
    color: "bg-gold-500/10 text-gold-500",
  },
  {
    icon: BarChart3,
    title: "Smart Analytics",
    desc: "Understand your spending, track your net worth, and get personalised financial insights.",
    color: "bg-sky-400/10 text-sky-300",
  },
  {
    icon: Smartphone,
    title: "Instant Notifications",
    desc: "Real-time alerts for every transaction, login, and account activity on all your devices.",
    color: "bg-primary-400/10 text-primary-300",
  },
];

const howItWorks = [
  { step: "01", title: "Create Account",   desc: "Sign up in under 3 minutes with just your email, phone number, and BVN." },
  { step: "02", title: "Verify Identity",  desc: "Complete our fast KYC process with a valid ID and a selfie. Approval in 24 hours." },
  { step: "03", title: "Fund Your Account",desc: "Deposit via bank transfer, USSD, card, or direct salary payment." },
  { step: "04", title: "Bank & Invest",    desc: "Send money globally, invest in markets, and grow your wealth — all in one app." },
];

const testimonials = [
  {
    name: "Amaka Obi",
    role: "Business Owner, Lagos",
    text: "Funds Credit Union transformed how I manage my business finances. Payments to suppliers abroad are instant and the rates are unbeatable.",
    rating: 5,
  },
  {
    name: "Chidi Eze",
    role: "Software Engineer, Abuja",
    text: "The investment portfolio feature is incredible. I started investing in US stocks and ETFs right from my phone. Seamless experience.",
    rating: 5,
  },
  {
    name: "Fatima Bello",
    role: "Doctor, Kano",
    text: "I receive salary in USD and Funds Credit Union lets me hold it, convert at my own time, and invest the rest. This is the future of banking.",
    rating: 5,
  },
];

const faqs = [
  {
    q: "Is Funds Credit Union approved by the World Bank?",
    a: "Yes. Funds Credit Union operates under World Bank Approved digital banking standards and is fully regulated in accordance with international banking laws.",
  },
  {
    q: "Is my money safe?",
    a: "Deposits are fully insured and held in segregated accounts with Tier-1 global partner banks. All funds meet international financial safety standards.",
  },
  {
    q: "How do I open an account?",
    a: "Click 'Open Free Account', fill in your details, complete KYC verification, and your account will be ready within 24 hours.",
  },
  {
    q: "What currencies can I hold?",
    a: "Funds Credit Union supports 17 currencies including NGN, USD, GBP, EUR, CAD, AUD, JPY, CHF, INR, CNY, BRL, MXN, ZAR, SGD, AED, THB, and TWD.",
  },
  {
    q: "What are the fees?",
    a: "Funds Credit Union charges zero monthly maintenance fees. Local transfers are free. International transfers carry a transparent flat fee of ₦1,500 or $2.50 per transaction.",
  },
];

// ─── Components ──────────────────────────────────────────────────────────────

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/90 backdrop-blur-md border-b border-dark-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/home" className="flex items-center gap-2.5">
          <FcuLogo size={36} />
          <span className="text-xl font-bold text-white tracking-tight">Funds Credit Union</span>
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-sky-200/70">
          {[
            ["Features",    "#features"],
            ["How It Works","#how-it-works"],
            ["Security",    "#security"],
            ["FAQ",         "#faq"],
          ].map(([label, href]) => (
            <a key={label} href={href} className="hover:text-white transition-colors">
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/login" className="text-sm font-medium text-sky-300 hover:text-white transition-colors hidden sm:block">
            Sign In
          </Link>
          <Link href="/register" className="btn-gold text-sm px-4 py-2 rounded-xl">
            Open Account
          </Link>
        </div>
      </div>
    </header>
  );
}

function Badge({ text, icon: Icon }: { text: string; icon?: React.ElementType }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1 text-xs font-semibold text-sky-300">
      {Icon && <Icon className="h-3 w-3" />}
      {text}
    </span>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-dark-bg text-white">
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-mesh" />
        {/* Blue glow top-centre */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-sky-600/20 blur-[120px] pointer-events-none" />
        {/* Gold glow bottom-right */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full bg-gold-500/10 blur-[110px] pointer-events-none" />
        {/* Sky glow bottom-left */}
        <div className="absolute bottom-0 left-0 w-[400px] h-[300px] rounded-full bg-primary-700/15 blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <Badge text="World Bank Approved Digital Bank" icon={Award} />

          <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
            Banking That Works{" "}
            <span className="text-gradient">For You</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-sky-100/60 max-w-2xl mx-auto leading-relaxed">
            Open a free account in 3 minutes. Send money globally, invest in stocks
            and crypto, and grow your wealth — all from one powerful platform.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/register" className="btn-gold text-base px-8 py-3.5 rounded-xl gap-2 inline-flex items-center">
              Open Free Account <ArrowRight className="h-5 w-5" />
            </Link>
            <Link href="/login" className="inline-flex items-center justify-center gap-2 rounded-xl border border-sky-400/30 bg-sky-400/10 text-sky-200 font-medium text-base px-8 py-3.5 hover:bg-sky-400/20 transition-all duration-150">
              Sign In
            </Link>
          </div>

          {/* Trust badges */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-sky-300/60">
            {[
              { icon: Shield,       text: "World Bank Approved"  },
              { icon: Lock,         text: "FDIC Insured"          },
              { icon: CheckCircle2, text: "256-bit Encryption"    },
              { icon: Users,        text: "180,000+ Customers"    },
            ].map(({ icon: Icon, text }) => (
              <span key={text} className="flex items-center gap-1.5">
                <Icon className="h-4 w-4 text-gold-400" />
                {text}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ──────────────────────────────────────────────────── */}
      <div className="trust-strip py-3 px-6 text-center text-sm font-semibold text-white/90 tracking-wide">
        🏦 World Bank Approved · 🔒 FDIC Insured · ⚡ Instant Setup · 🌍 60+ Countries · 💰 Zero Monthly Fees
      </div>

      {/* ── STATS ────────────────────────────────────────────────────────── */}
      <section className="border-y border-dark-border bg-dark-surface/50">
        <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl sm:text-4xl font-extrabold text-gradient">{s.value}</p>
              <p className="mt-1 text-sm text-sky-300/60">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURES ─────────────────────────────────────────────────────── */}
      <section id="features" className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <Badge text="Everything You Need" />
          <h2 className="mt-4 text-4xl font-bold">One platform. Infinite possibilities.</h2>
          <p className="mt-3 text-sky-200/50 max-w-xl mx-auto">
            Funds Credit Union combines banking, investing, and payments into one seamless experience
            designed for Nigerians and the global diaspora.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="group rounded-2xl border border-dark-border bg-dark-card p-6 hover:border-sky-400/30 hover:shadow-glow-sm transition-all duration-200"
              >
                <div className={`h-12 w-12 rounded-xl flex items-center justify-center mb-4 ${f.color}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-sm text-sky-200/50 leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────────── */}
      <section id="how-it-works" className="py-24 bg-dark-surface/30 border-y border-dark-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <Badge text="Simple Process" icon={Zap} />
            <h2 className="mt-4 text-4xl font-bold">Get started in 4 steps</h2>
            <p className="mt-3 text-sky-200/50">No branch visits. No paperwork. 100% digital.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((item, i) => (
              <div key={item.step} className="relative">
                {i < howItWorks.length - 1 && (
                  <ChevronRight className="hidden lg:block absolute -right-4 top-6 h-6 w-6 text-gold-500/40" />
                )}
                <div className="text-5xl font-black text-gold-500/20 mb-4">{item.step}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-sky-200/50 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECURITY ─────────────────────────────────────────────────────── */}
      <section id="security" className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <Badge text="Enterprise Security" icon={Shield} />
            <h2 className="mt-4 text-4xl font-bold leading-tight">
              Your money is protected{" "}
              <span className="text-gradient">at every level</span>
            </h2>
            <p className="mt-4 text-sky-200/50 leading-relaxed">
              Funds Credit Union uses the same security infrastructure as global Tier-1 banks.
              Every transaction, login, and API call is encrypted and monitored in real time.
            </p>

            <div className="mt-8 space-y-4">
              {[
                { icon: Lock,      title: "256-bit AES Encryption",          desc: "All data encrypted in transit and at rest."            },
                { icon: Shield,    title: "World Bank Approval",              desc: "Your funds meet international banking standards."       },
                { icon: RefreshCw, title: "Real-time Fraud Detection",        desc: "AI monitors every transaction 24/7."                   },
                { icon: Smartphone,title: "Biometric Authentication",         desc: "Face ID and fingerprint supported."                    },
                { icon: Building2, title: "World Bank Regulatory Compliance", desc: "Fully regulated under international banking law."      },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-gold-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="h-5 w-5 text-gold-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">{title}</p>
                    <p className="text-xs text-sky-200/50 mt-0.5">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Security visual card */}
          <div className="relative">
            <div className="rounded-3xl border border-sky-500/20 bg-gradient-to-br from-primary-900/50 to-dark-card p-8 space-y-4 shadow-glow-blue">
              <div className="flex items-center gap-3 mb-6">
                <FcuLogo size={40} />
                <div>
                  <p className="font-bold text-white">Funds Credit Union Secure Vault</p>
                  <p className="text-xs text-sky-300/60">Protected Account</p>
                </div>
                <span className="ml-auto text-xs bg-success-light/20 text-green-400 px-2 py-0.5 rounded-full font-medium">● Live</span>
              </div>

              {[
                { label: "Encryption",     value: "AES-256"          },
                { label: "2FA Status",     value: "Active"           },
                { label: "Last Login",     value: "Verified"         },
                { label: "Fraud Check",    value: "Passed"           },
                { label: "FDIC Insurance", value: "Globally covered" },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between py-2.5 border-b border-white/5 last:border-0">
                  <span className="text-sm text-sky-200/60">{item.label}</span>
                  <span className="flex items-center gap-1.5 text-sm font-semibold text-green-400">
                    <CheckCircle2 className="h-4 w-4" />
                    {item.value}
                  </span>
                </div>
              ))}

              {/* Gold bottom accent bar */}
              <div className="mt-4 pt-4 border-t border-gold-500/20 flex items-center gap-2">
                <div className="h-2 flex-1 rounded-full bg-gradient-trust opacity-70" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section className="py-24 bg-dark-surface/30 border-y border-dark-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <Badge text="Customer Stories" icon={Star} />
            <h2 className="mt-4 text-4xl font-bold">Trusted by thousands across the World</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl border border-dark-border bg-dark-card p-6 hover:border-gold-500/20 transition-colors duration-200">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" />
                  ))}
                </div>
                <p className="text-sky-100/70 text-sm leading-relaxed mb-5">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-trust flex items-center justify-center text-white font-bold text-sm">
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-sky-300/60">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section id="faq" className="py-24 max-w-4xl mx-auto px-6">
        <div className="text-center mb-14">
          <Badge text="FAQ" />
          <h2 className="mt-4 text-4xl font-bold">Frequently asked questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <details key={faq.q} className="group rounded-2xl border border-dark-border bg-dark-card overflow-hidden">
              <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none font-semibold text-white hover:text-sky-300 transition-colors">
                {faq.q}
                <ChevronRight className="h-4 w-4 text-gold-400/60 group-open:rotate-90 transition-transform flex-shrink-0 ml-4" />
              </summary>
              <div className="px-6 pb-5 text-sm text-sky-200/50 leading-relaxed border-t border-dark-border pt-4">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────────────────── */}
      <section className="py-20 relative overflow-hidden">
        {/* Sky-to-navy-to-gold gradient background */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #082b49 0%, #035fa1 45%, #0a1628 70%, #b45309 100%)" }} />
        <div className="absolute inset-0 bg-mesh opacity-20" />
        {/* Gold glow */}
        <div className="absolute right-0 top-0 w-96 h-96 rounded-full bg-gold-400/10 blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Start banking smarter today
          </h2>
          <p className="text-sky-100/60 text-lg mb-10 max-w-xl mx-auto">
            Join 180,000+ Nigerians who trust Funds Credit Union for their daily banking,
            investments, and global payments.
          </p>
          <Link
            href="/register"
            className="inline-flex items-center gap-2 bg-gradient-gold text-white font-bold px-8 py-4 rounded-xl text-base hover:opacity-90 transition-all shadow-glow-gold"
          >
            Open Free Account <ArrowRight className="h-5 w-5" />
          </Link>
          <p className="mt-4 text-sky-200/40 text-sm">
            No minimum balance · No monthly fees · Instant setup
          </p>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <footer className="border-t border-dark-border bg-dark-bg">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
            <div className="md:col-span-1">
              <Link href="/home" className="flex items-center gap-2 mb-4">
                <FcuLogo size={32} />
                <span className="font-bold text-white">Funds Credit Union</span>
              </Link>
              <p className="text-xs text-sky-300/40 leading-relaxed">
                Funds Credit Union — World Bank Approved Digital Banking License No. WB/2024/001.
                Member, International Deposit Insurance Corporation (IDIC).
              </p>
            </div>

            {[
              { title: "Products", links: ["Banking", "Investments", "Payments", "Analytics"] },
              { title: "Company",  links: ["About Us", "Careers", "Blog", "Press"] },
              { title: "Legal",    links: ["Terms of Service", "Privacy Policy", "Cookie Policy", "Compliance"] },
            ].map((col) => (
              <div key={col.title}>
                <p className="text-sm font-semibold text-sky-200 mb-3">{col.title}</p>
                <ul className="space-y-2">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a href="#" className="text-xs text-sky-300/40 hover:text-sky-200 transition-colors">{l}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Gold accent line above copyright */}
          <div className="h-px w-full bg-gradient-trust opacity-30 mb-6" />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-sky-300/30">
            <p>© 2026 Funds Credit Union. All rights reserved.</p>
            <p>World Bank Approved Digital Banking Institution</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
