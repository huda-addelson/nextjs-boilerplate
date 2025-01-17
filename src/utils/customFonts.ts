import { Inter, Quicksand, Plus_Jakarta_Sans } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["200", "300", "400", "500", "600", "700", "900"],
});

export const quickSand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quickSand",
  weight: ["300", "400", "500", "600", "700"],
});

export const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakartaSans",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});
