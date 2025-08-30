import "./globals.css";
import { Figtree } from "next/font/google";
import localFont from "next/font/local";
import Footer from "./_components/footer/footer";

const figtree = Figtree({
  display: "swap",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-figtree",
});

const iranyekan = localFont({
  src: [
    {
      path: "../../public/fonts/iranyekan/iranyekanwebthinfanum.woff",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/iranyekan/iranyekanweblightfanum.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/iranyekan/iranyekanwebregularfanum.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/iranyekan/iranyekanwebmediumfanum.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/iranyekan/iranyekanwebboldfanum.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/iranyekan/iranyekanwebblackfanum.woff",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-iranyekan",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      dir="rtl"
      className={`dark ${figtree.variable} ${iranyekan.variable}`}
    >
      <body className="grid min-h-screen grid-rows-[80px_1fr_auto] dark:bg-base-100 dark:text-base-content">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
