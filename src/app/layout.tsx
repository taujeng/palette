
import './globals.css'
import type { Metadata } from 'next'
import Nav from './components/Nav/Nav'
import Footer from './components/footer/Footer'
import EntryProvider from './context/EntryProvider'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import React from 'react'
import { GoogleAnalytics } from "@next/third-parties/google";


config.autoAddCss = false;


export const metadata: Metadata = {
  title: 'Palette - Quick One Minute Journal App',
  description: `Discover Palette - the One Minute Journal App designed for daily 
  reflections, mood tracking, and personal growth. Ideal for busy lifestyles,
   it's your quick, easy-to-use tool for mindfulness, gratitude, and self-improvement.`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <EntryProvider >
          <Nav />
          <div className="children-container">
            {children}
          </div>
          <Footer />
        </EntryProvider>
      </body>
      <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS || ""} />

    </html>
  )
}
