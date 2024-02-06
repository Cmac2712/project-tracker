import { clsx } from 'clsx';
import type { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession()

  return (
    <html lang="en">
      <body className={clsx("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        {children}
        </body>
    </html>
  )
}
