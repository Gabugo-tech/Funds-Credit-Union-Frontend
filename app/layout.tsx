import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "next-themes";
import { AuthProvider } from "@/context/AuthContext";
import "./globals.css";

const BASE_URL = "https://funds-credit-union-bank.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Funds Credit Union — Smart Banking & Investing",
    template: "%s | Funds Credit Union",
  },
  description:
    "Funds Credit Union is a World Bank Approved digital banking and investment platform. Open a free account in minutes. Send money globally, invest in stocks, and grow your wealth.",
  keywords: [
    "digital bank", "fintech Nigeria", "online banking", "investment platform",
    "send money internationally", "multi-currency account", "NGN USD GBP EUR",
    "stock investing Nigeria", "Funds Credit Union", "world bank approved bank",
  ],
  authors: [{ name: "Funds Credit Union", url: BASE_URL }],
  creator: "Funds Credit Union Limited",
  publisher: "Funds Credit Union Limited",
  category: "finance",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "Funds Credit Union — Smart Banking & Investing",
    description:
      "World Bank Approved digital bank. Open a free account, send money globally, and invest in stocks — all in one platform.",
    url: BASE_URL,
    siteName: "Funds Credit Union",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Funds Credit Union — Smart Banking & Investing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Funds Credit Union — Smart Banking & Investing",
    description:
      "World Bank Approved digital bank. Open a free account, send money globally, and invest in stocks.",
    images: [`${BASE_URL}/og-image.png`],
    creator: "@FundsCreditUnion",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon", type: "image/png", sizes: "32x32" },
    ],
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: "6G-6uhO3YiwdFvVl9TL3X8sHO63FQx-a1sqBk-fePsQ",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0277c6" },
    { media: "(prefers-color-scheme: dark)",  color: "#060d1a" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: "Funds Credit Union",
    url: BASE_URL,
    logo: `${BASE_URL}/icon`,
    description:
      "World Bank Approved digital banking and investment platform for banking, payments, and portfolio management.",
    areaServed: "Worldwide",
    currenciesAccepted: "NGN, USD, GBP, EUR, CAD, AUD, JPY, CHF, INR, CNY, BRL, MXN, ZAR, SGD, AED, THB, TWD",
    serviceType: "Digital Banking",
    sameAs: [
      "https://twitter.com/FundsCreditUnion",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <AuthProvider>
            {children}
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
