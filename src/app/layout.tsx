import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google"; // Future/Tech font
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/layout/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });

export const metadata: Metadata = {
    title: "Red Boat Media",
    description: "High-end digital agency offering web hosting, email services, and digital concierge.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={cn(inter.variable, orbitron.variable, "font-sans antialiased bg-background text-foreground min-h-screen")}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
