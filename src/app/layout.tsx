import "./globals.css";
import { Figtree } from "next/font/google";
import localFont from "next/font/local";

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
    <html dir="rtl" className={`${figtree.variable} ${iranyekan.variable}`}>
      <body className="flex flex-col min-h-screen fond-bold uppercase">
        <header className="bg-gray-200 flex items-center justify-center h-20">
          دوره ری اکت و نکست
        </header>
        <div className="flex-1 flex items-center justify-center">
          {children}
        </div>
        <footer className="bg-gray-200 flex items-center justify-center h-20">
          Footer
        </footer>
      </body>
    </html>
  );
}
