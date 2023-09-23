import "./globals.css";
import type { Metadata } from "next";

import { Footer } from "@/components/Footer/footer";
import { Navigation } from "../components/Navigation/navigation";
import {CounterContextProvider} from '@/lib/context'

export const metadata: Metadata = {
  title: "Jesus Tabernacle, RCCG",
  description: "Come and be blessed...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="text-base/[22px] text-tb-grey2 box-border">
        <Navigation />
        <CounterContextProvider>
          {children}
        </CounterContextProvider>
        <Footer />
      </body>
    </html>
  );
}