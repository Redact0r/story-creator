import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { navData } from "../data/dataTypes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Story Creator",
  description: "Create interactive fiction — easier than Choice Script!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-slate-800 text-slate-100 container mx-auto p-4`}
      >
        <header>
          <NavBar linkList={navData} />
        </header>
        {children}
      </body>
    </html>
  );
}

const NavBar = (props: any) => {
  const { linkList } = props;
  return (
    <nav className="navBar flex flex-row justify-around items-center mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4">
      {linkList
        ? linkList.map((link: any, idx: number) => {
            return (
              <Link key={idx} href={link.href}>
                {link.title}
              </Link>
            );
          })
        : "Error Loading Navbar"}
    </nav>
  );
};
