"use client"

import type React from "react"
import { Playfair_Display } from "next/font/google"
import { ClientWrapper } from "./client-wrapper"

const _playfair = Playfair_Display({ subsets: ["latin"] })

export function RootLayoutClient({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className="font-sans antialiased">
        <style jsx global>{`
          .font-serif {
            font-family: ${_playfair.style.fontFamily};
          }
        `}</style>
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  )
}
