"use client"

import type React from "react"

import { Analytics } from "@vercel/analytics/next"

export function ClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Analytics />
    </>
  )
}
