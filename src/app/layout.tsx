import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#4f46e5",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://aakashaautomations.com"),
  title: {
    default: "Aakasha Automations | AI Automation Solutions for Startups",
    template: "%s | Aakasha Automations",
  },
  description:
    "Enterprise-grade AI automation solutions for startups and entrepreneurs. AI Voice Agents, Chatbots, Workflow Automation, Web & Mobile Development. Based in Ayodhya, India.",
  keywords: [
    "AI automation",
    "voice agents",
    "chatbots",
    "workflow automation",
    "agentic AI",
    "machine learning",
    "website development",
    "mobile app development",
    "DevOps services",
    "startup automation",
    "Ayodhya",
    "India",
  ],
  authors: [{ name: "Aakasha Automations" }],
  creator: "Aakasha Automations",
  publisher: "Aakasha Automations",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://aakashaautomations.com",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://aakashaautomations.com",
    siteName: "Aakasha Automations",
    title: "Aakasha Automations | AI Automation for Startups",
    description:
      "Transform your business with cutting-edge AI automation solutions. Voice agents, chatbots, workflow automation, and custom AI/ML services.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aakasha Automations - AI Solutions for Startups",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aakasha Automations | AI Automation for Startups",
    description:
      "Enterprise-grade AI automation solutions for modern startups. Scale faster with intelligent systems.",
    images: ["/twitter-image.jpg"],
    creator: "@aakashaauto",
    site: "@aakashaauto",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#4f46e5",
      },
    ],
  },
  manifest: "/site.webmanifest",
  category: "Technology",
  verification: {
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // other: {
    //   "msvalidate.01": "your-bing-verification-code",
    // },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Preconnect to Google Fonts and other CDNs */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        
        {/* Structured Data / JSON-LD for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Aakasha Automations",
              url: "https://aakashaautomations.com",
              logo: "https://aakashaautomations.com/logo.png",
              image: "https://aakashaautomations.com/og-image.jpg",
              description:
                "Enterprise-grade AI automation solutions for startups and entrepreneurs.",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Opposite Udaya Public School, Behind Panchmukhi Hanuman Mandir, Beniganj",
                addressLocality: "Ayodhya",
                addressRegion: "Uttar Pradesh",
                postalCode: "224001",
                addressCountry: "IN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+919670697720",
                contactType: "customer service",
                email: "aakashaautomations@gmail.com",
                availableLanguage: ["English", "Hindi"],
              },
              sameAs: [
                "https://www.linkedin.com/company/aakasha-automations",
                "https://twitter.com/aakashaauto",
                "https://github.com/aakasha-automations",
              ],
            }),
          }}
        />
        
        {/* Local Business Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Aakasha Automations",
              image: "https://aakashaautomations.com/logo.png",
              "@id": "https://aakashaautomations.com",
              url: "https://aakashaautomations.com",
              telephone: "+919670697720",
              email: "aakashaautomations@gmail.com",
              priceRange: "₹₹",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Opposite Udaya Public School, Behind Panchmukhi Hanuman Mandir, Beniganj",
                addressLocality: "Ayodhya",
                addressRegion: "Uttar Pradesh",
                postalCode: "224001",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 26.8015,
                longitude: 82.2015,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  opens: "09:00",
                  closes: "19:00",
                },
              ],
              sameAs: [
                "https://www.linkedin.com/company/aakasha-automations",
                "https://twitter.com/aakashaauto",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar/>
        <main>

        {children}
        </main>
        <Footer/>
        </body>
    </html>
  );
}