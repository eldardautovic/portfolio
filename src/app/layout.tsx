import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import {NavBar} from "@/components/NavBar";
import {ReactNode} from "react";
import Footer from "@/components/Footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Eldar Dautović",
    description: "A portfolio to showcase my skills -- Eldar Dautović",
    other: {"google-site-verification": "pzI7z7RzlfzmlOlyznpH9U7nPpodL6DbWnl58V6DsCc"}
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <div className="relative flex min-h-screen w-full bg-white dark:bg-slate-950">
            <div
                className="absolute inset-0 [background-size:10px_10px] [background-image:linear-gradient(to_right,rgba(147,197,253,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(147,197,253,0.2)_1px,transparent_1px)] dark:[background-image:linear-gradient(to_right,rgba(6,95,70,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(6,95,70,0.2)_1px,transparent_1px)]"
            />

            <div
                className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_60%,black)] dark:bg-black"
            />

            <main className="relative z-20 w-full max-w-5xl mx-auto px-7 py-10">
                <NavBar/>
                {children}
                <Footer/>
            </main>
        </div>
        </body>
        </html>
    );
}
