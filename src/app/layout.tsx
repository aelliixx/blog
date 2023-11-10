import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'aelliixx Blog',
  description: 'Development blog by Donatas Mockus',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header/>
      {children}
      <Footer/>
      </body>
    </html>
  )
}
