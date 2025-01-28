import { Geist, Geist_Mono } from "next/font/google";
import { SoundEffects } from "@/components/ui";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} h-screen`}>
        <div id="root" className="h-full w-full overflow-auto text-center">
          {children}
        </div>
        <SoundEffects />
      </body>
    </html>
  );
}
