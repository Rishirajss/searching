import type { Metadata } from "next";
import "./globals.css";
// import { ThemeProvider } from "@/components/custom/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/custom/footer";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  // variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    template: "iBharat.org | Indian Search Engine",
    default: "iBharat.org | Indian Search Engine",
    absolute: "iBharat.org | Indian Search Engine",
  },
  description:
    "iBharat.org is a search engine for Indian websites. It is a platform for Indian websites to get discovered by Indian users.",
  category: "search engine",
  metadataBase: new URL("https://ibharat.org/"),
  openGraph: {
    type: "website",
    title: "iBharat.org | Indian Search Engine",
    emails: "+91-9676451618",
    description:
      "iBharat.org is a search engine for Indian websites. It is a platform for Indian websites to get discovered by Indian users.",
    countryName: "India",
    siteName: "iBharat.org",
    url: "https://ibharat.org/",
    phoneNumbers: "+91-9676451618",
    locale: "en_IN",
    images: "https://ibharat.org/opengraph.jpg",
  },
  authors: [{ name: "iBharat.org" }],
  keywords: [
    "iBharat",
    "iBharat.org",
    "Indian Search Engine",
    "Search Engine",
    "Indian Websites",
    "Indian Users",
    "India",
  ],
  applicationName: "iBharat.org",
  creator: "iBharat.org",
  publisher: "iBharat.org",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  appleWebApp: {
    title: "iBharat.org",
    startupImage: "https://ibharat.org/",
  },
  generator: "iBharat.org",
  twitter: {
    title: "iBharat.org | Indian Search Engine",
    creator: "iBharat.org",
    creatorId: "ibharat.org",
    site: "iBharat.org",
    images: "https://ibharat.org/opengraph.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.className}`} suppressHydrationWarning>
      <body>
        {/*   defaultTheme="light" */}
        {/*   disableTransitionOnChange */}
        {/* > */}
        {children}
        <Toaster />
        {/* </ThemeProvider> */}
        <Footer />
      </body>
    </html>
  );
}
