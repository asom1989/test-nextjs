import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/footer/Footer";
import { ThemeProvider } from "@/context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "400", "700", "900"],
});

export const metadata = {
  title: "Hexashop-Home",
  description:
    "Explore a wide range of beauty products, latest smartphones, and exquisite perfumes at StoreX. Enjoy great deals and fast shipping on all orders!",
  keywords:
    "beauty products, smartphones, perfumes, online store, cosmetics, mobile phones, fragrances, best deals, fast shipping",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
