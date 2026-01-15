import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Maicol Martinez | Full-Stack Developer & Trading Expert",
  description: "Full-Stack Developer especializado en AI, automation y soluciones para traders y comunidades de trading. +10 años en mercados financieros. Python, TypeScript, Next.js, LangChain.",
  keywords: ["Full-Stack Developer", "Trading", "AI", "Automation", "Python", "TypeScript", "Uruguay"],
  authors: [{ name: "Maicol Martinez" }],
  openGraph: {
    title: "Maicol Martinez | Full-Stack Developer & Trading Expert",
    description: "Desarrollo soluciones tecnológicas para traders y comunidades de trading",
    type: "website",
    locale: "es_ES",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
