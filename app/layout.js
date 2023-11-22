"use client"
import "./globals.css"


import { ThemeProvider } from "next-themes"
import Navbar from "@/components/Navbar"
export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" className = "dark">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="dark:bg-stone-900 bg-[#f8f8f8] font-sans text-[#4d4f62] dark:text-gray-100">
        <ThemeProvider enableSystem={true} attribute="class">
        <Navbar />
          {children}
         
        </ThemeProvider>
      </body>
    </html>
  )
}
