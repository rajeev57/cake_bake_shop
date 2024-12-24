import type { Metadata } from "next";
import "./globals.css";
import Footer from './components/Footer';
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "Cake'N'Bake Shop",
  description: "A delicious cake shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>{String(metadata.title)}</title>
        <meta name="description" content={String(metadata.description)} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <Header/>
        <main style={{ paddingTop: '15%', }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
