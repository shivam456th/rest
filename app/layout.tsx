import type { Metadata } from "next";
import { Manrope } from "next/font/google"; // Geist hata kar Manrope lagaya
import "./globals.css";

// Manrope font configure kar rahe hain
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope", // Ye variable CSS theme se match karega
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Fjordsmaken Restaurant",
  description: "Authentic Norwegian Cuisine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // Yahan hum manrope variable use kar rahe hain
        className={`${manrope.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}