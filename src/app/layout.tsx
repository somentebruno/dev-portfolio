import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google"; // Import fonts
import "./globals.css";
import { ThemeProvider } from "next-themes"; // Import ThemeProvider

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Developer Portfolio",
  description: "Portfolio of a Full Stack Developer specializing in modern web technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${firaCode.variable} antialiased bg-background-light dark:bg-background-dark text-text-main-light dark:text-text-main-dark transition-colors duration-300 min-h-screen`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
           {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
