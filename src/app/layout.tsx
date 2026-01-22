import type { Metadata } from "next";
import { Geist, Lora } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "The White Line | Harm Reduction Archive",
    template: "%s | The White Line",
  },
  description:
    "An objective, judgment-free archive of pharmacological facts, safety tools, and historical context for cocaine users. Compassion through understanding.",
  keywords: [
    "harm reduction",
    "cocaine safety",
    "pharmacology",
    "drug interaction checker",
    "addiction support",
    "cocaine anonymous",
    "fentanyl testing",
    "levamisole",
  ],
  authors: [{ name: "The White Line Archive" }],
  openGraph: {
    title: "The White Line.",
    description: "Information without judgment. Safety through science.",
    url: "https://thewhiteline.org", // (We will update this after deployment)
    siteName: "The White Line",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The White Line.",
    description: "Information without judgment. Safety through science.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-white font-serif text-neutral-900 antialiased",
          geistSans.variable,
          lora.variable,
        )}
      >
        <div className="relative flex min-h-screen flex-col">
          <Navbar /> {/* <--- Restored here */}
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
