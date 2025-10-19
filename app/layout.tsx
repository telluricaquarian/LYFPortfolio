// app/layout.tsx
import type { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "Llewellyn Y. Fisher",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      {/* Tailwind v4 prefers direct class usage */}
      <body className="bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
