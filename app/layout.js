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
  title: "Tarun Sai Srinivas | Frontend Developer & Open Source Contributor",
  description:
    "Welcome to the portfolio of Tarun Sai Srinivas — a passionate frontend developer proficient in React.js, Next.js, and React Native. Explore projects, contributions, and professional journey.",
  keywords: [
    "Tarun Sai Srinivas",
    "Frontend Developer",
    "React Developer",
    "Next.js Portfolio",
    "JavaScript Developer",
    "Open Source Contributor",
    "Web Developer India",
    "React Native",
    "Tailwind CSS",
    "Modern UI Developer",
  ],
  authors: [{ name: "Tarun Sai Srinivas", url: "https://tarunsaisrinivas.site" }],
  creator: "Tarun Sai Srinivas",
  publisher: "Tarun Sai Srinivas",
  robots: "index, follow",
  icons: {
    icon: "/assets/icon.png",
    shortcut: "/assets/icon.png",
    apple: "/assets/icon.png",
  },
  openGraph: {
    title: "Tarun Sai Srinivas | Frontend Developer Portfolio",
    description:
      "Explore the work and achievements of Tarun Sai Srinivas — a skilled frontend engineer with a strong foundation in React.js, Next.js, and web performance.",
    url: "https://yourdomain.com",
    siteName: "Tarun Sai Srinivas Portfolio",
    images: [
      {
        url: "/assets/web-dark.png", // Ensure you have this image
        width: 1200,
        height: 630,
        alt: "Tarun Sai Srinivas Portfolio Screenshot",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tarun Sai Srinivas | Frontend Developer & UI Specialist",
    description:
      "A showcase of frontend expertise with React.js, Next.js, and modern web development best practices.",
    creator: "Tarun Sai Srinivas", // Replace with actual handle if any
    images: ["/assets/web-dark.png"], // Ensure you have this image
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/icon.png" />
      </head>
      <body
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
