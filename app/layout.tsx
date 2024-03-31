import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/custom/theme-provider";
import Footer from "@/components/custom/footer";

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
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
