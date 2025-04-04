import type { Metadata } from "next";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata = {
  title: "Mogora UI",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased font-inter`}>
        <NextTopLoader color="#2B7FFF" height={2} showSpinner={false} />
        {children}
      </body>
    </html>
  );
}
