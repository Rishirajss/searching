import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/custom/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/custom/footer";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "ibharat",
  description: "india's search engine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable}`} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
