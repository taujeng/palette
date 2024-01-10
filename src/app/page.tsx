'use client'

import React from 'react'
import Link from 'next/link'
import './landing.css'

const Landing = () => {
  return (
    <main className="landing-container">
      <section className="landing-intro">
        <div className="landing-text">
          <h1>A <span>one minute</span> journal</h1>
          <img className="landing-mobile-img" src="/images/landing/young.jpg" alt="diary" />
          <p>Record your daily life in under a minute, with minimal writing.</p>
          <Link id="landing-tryButton" href="/day">try <span className="logo-in-text">palette</span></Link>
        </div>
        <img src="/images/landing/young.jpg" alt="diary" />
      </section>

      {/* <section>
        <p>Ever find yourself too lazy to write in your journal? Or maybe you're just inconsistent.</p>
        <h3>Key features:</h3>
        <ol>
          <li>
          Express Yourself Quickly: palette is designed for those on the go. In just a few taps, you can express how your day went, what you felt, or any memorable moments, all in under a minute.
          </li>
          <li>
          No Typing Required: Say goodbye to the hassle of typing lengthy journal entries. palette uses intuitive symbols and colors to help you convey your emotions, and it's as easy as selecting a shade from your personal palette.
          </li>
          <li>
          Embrace Simplicity: We believe that simplicity is the ultimate sophistication. palette's clean and user-friendly interface ensures that you can start journaling without any learning curve.
          </li>
          <li>
          Unleash Your Inner Artist: Colors have a powerful impact on our emotions. With palette, you can assign a unique color to each day. As you progress, watch your life's timeline blend into a beautiful mosaic of colors.
          </li>
          <li>
          Create Your Own Colorful Journey: Over time, your daily entries will merge into a stunning spectrum, reflecting the diverse emotions and experiences that make up your life.
          </li>
        </ol>
      </section>
      <h2>
      Welcome to palette, your gateway to effortless, beautiful, and colorful journaling. Start creating your personal rainbow of memories today.
      </h2> */}
    </main>
  )
}

export default Landing