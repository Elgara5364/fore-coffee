import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { dir } from "i18next";
import { languages } from "../i18n/settings";
import Navbar from "./components/navbar";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Fore Coffee",
  description: "Best Coffee in the world",
};

export default function RootLayout({ children, params: { lng } }) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body className={jakarta.className}>
        <Navbar lng={lng} />
        {children}
      </body>
    </html>
  );
}
