import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "@/store/StoreProvider";
import { Toaster } from "@/components/ui/toaster";
import LayoutClient from "./layoutClient";
import Script from "next/script";
import { siteConfig } from "@/config/siteConfig";
import { ThemeProvider } from "./theme.provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: [
    "Custom Folder Icons",
    "Windows Desktop Icons",
    "MacOS Icon Personalization",
    "Desktop Icon Customization",
    "Personalized Desktop Experience",
  ],
  authors: [
    {
      name: "jashandeep",
      url: "https://twitter.com/jashandeep31",
    },
  ],
  creator: "Jashandeep Singh",
  // TODO: pending to add for twitter and favicon icon
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LayoutClient>
            <StoreProvider>
              <Toaster />
              {children}
            </StoreProvider>
          </LayoutClient>
        </ThemeProvider>
      </body>
    </html>
  );
}
