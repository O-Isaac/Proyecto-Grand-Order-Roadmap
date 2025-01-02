import type { Metadata } from "next";
import type { RootLayout } from "@/types/layouts";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Navigation from "@/components/navigation";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const RootLayout: React.FC<RootLayout> = ({ children }) => (
  <html suppressHydrationWarning lang="en">
    <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased dark:bg-neutral-900 dark:text-neutral-200`}
    >
      <div className="bg-hero absolute -z-10 inset-0 size-full bg-neutral-200 dark:bg-neutral-900 bg-[linear-gradient(to_right,#80808012_2px,transparent_2px),linear-gradient(to_bottom,#80808012_2px,transparent_2px)] bg-[size:40px_40px]"></div>
      <ThemeProvider
        scriptProps={{ "data-cfasync": "false" }}
        attribute="class"
      >
        <Navigation items={[]} />
        <main>{children}</main>
      </ThemeProvider>
    </body>
  </html>
);

export default RootLayout;
