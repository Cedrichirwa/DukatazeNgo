import "./globals.css";
import { Raleway } from "next/font/google";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Providers from "./components/Providers";

const raleway = Raleway({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Dukataze",
  description: "We Empower Growth",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Providers>
          {children}

          <Navbar />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
