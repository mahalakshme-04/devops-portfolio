import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mahalakshme S. | DevOps Portfolio",
  description:
    "Modern portfolio for Mahalakshme S., a DevOps engineer focused on cloud infrastructure, automation, CI/CD, and reliable delivery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
