import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Analytics } from "@vercel/analytics/next";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title:
    "Tarun Sai Srinivas - Full Stack Developer | React, Next.js",

  description:
    "Full Stack Developer skilled in React, Next.js, and React Native. Explore projects, open-source work, and modern web solutions by Tarun Sai Srinivas.",

  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "React Native Developer",
    "Frontend Developer",
    "JavaScript Developer",
    "Tarun Sai Srinivas",
    "Web Developer India",
    "Portfolio Website",
  ],

  authors: [{ name: "Tarun Sai Srinivas" }],
  creator: "Tarun Sai Srinivas",
  publisher: "Tarun Sai Srinivas",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/assets/icon.png",
    shortcut: "/assets/icon.png",
    apple: "/assets/icon.png",
  },

  openGraph: {
    title:
      "Tarun Sai Srinivas - Full Stack Developer | React, Next.js",
    description:
      "Portfolio of Tarun Sai Srinivas showcasing React, Next.js, and modern web development projects.",
    url: "https://tarunsaisrinivas.dev",
    siteName: "Tarun Sai Srinivas Portfolio",
    images: [
      {
        url: "/assets/web-dark.png",
        width: 1200,
        height: 630,
        alt: "Tarun Sai Srinivas Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Tarun Sai Srinivas - Full Stack Developer | React, Next.js",
    description:
      "Explore modern web projects built with React and Next.js by Tarun Sai Srinivas.",
    images: ["/assets/web-dark.png"],
  },

  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Tarun Sai Srinivas",
      url: "https://tarunsaisrinivas.dev",
      image: "https://tarunsaisrinivas.dev/assets/web-dark.png",
      jobTitle: "Full Stack Developer",
      sameAs: [
        "https://github.com/tarunsaisrinivas",
        "https://linkedin.com/in/tarun-sai-srinivas",
        "https://twitter.com/https://x.com/tarunsaisriniv1",
      ],
    }),
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
