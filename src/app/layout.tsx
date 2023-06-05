import "@/app/globals.css";
import { Bebas_Neue } from "next/font/google";
import Footer from "@/app/components/Footer";
import Cart from "@/app/components/CartProvider";
import NavBar from "@/app/components/navbar";

const bebasNeue = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Velluci - Clothing Brand",
  description: "E-commerce website for Velluci - a clothing brand",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={bebasNeue.className}>
        <Cart>
          <NavBar />
          {children}
          <Footer />
        </Cart>
      </body>
    </html>
  );
}
