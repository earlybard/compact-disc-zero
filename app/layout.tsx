import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/components/provider/theme-provider";
import StoreProvider from "@/components/provider/store-provider";
import {Nav} from "@/components/nav/Nav";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

/**
 * Top-level component. Any global theming should go here.
 * Nested layout.tsx files can exist if you want shared components amongst a group of pages.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
          >
            <Nav>
              {children}
            </Nav>
          </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
