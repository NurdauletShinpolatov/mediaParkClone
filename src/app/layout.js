import { Inter } from "next/font/google";
import "./globals.css";
import MainHeader from "@/components/MainHeader";
import Footer from "@/components/Footer";
import SecondaryHeader from "@/components/SecondaryHeader";
import UpperBanner from "@/components/UpperBanner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: " Media Park Clone",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UpperBanner />
        <SecondaryHeader />
        <MainHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
