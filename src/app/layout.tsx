
import './globals.css'
import type { Metadata } from 'next'
import Nav from './components/Nav/Nav'
import Footer from './components/footer/Footer'
import EntryProvider from './context/EntryProvider'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import React from 'react'

config.autoAddCss = false;


export const metadata: Metadata = {
  title: 'palette',
  description: 'one minute journal app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <EntryProvider >
          {children}
        </EntryProvider>
        <Footer />
      </body>
    </html>
  )
}
