import type { Metadata } from "next";
import "@/styles/globals.css";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { absoluteUrl } from "@/lib/utils";
import { site } from "@/constants/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Boutique Family Lawyers in Perth`,
    template: `%s | ${site.name}`
  },
  description: site.description,
  alternates: {
    canonical: absoluteUrl("/")
  },
  openGraph: {
    type: "website",
    url: site.url,
    title: `${site.name} | Boutique Family Lawyers in Perth`,
    description: site.description,
    siteName: site.name
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU">
      <body className="min-h-screen font-sans antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
