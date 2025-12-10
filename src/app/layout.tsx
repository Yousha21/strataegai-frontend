import type { Metadata } from "next";
import "./globals.css";

import { QueryProvider } from "@/components/providers/query-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "StrategAI — E-commerce Profit Optimization",
  description:
    "AI-powered tool to compare wholesale vs retail prices and optimize profit."
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen gradient-bg">
        {/* ✅ Wrap everything inside QueryProvider */}
        <QueryProvider>
          <Navbar />
          <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-6">
            {children}
          </main>
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}
