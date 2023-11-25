'use client'

import React, {useState} from 'react'
import Link from 'next/link'
import "./timeMenu.css"
import { useRouter } from 'next/navigation'

const TimeMenu = ( {time} ) => {
  const timeOptions = ["day", "week", "month"]
  const router = useRouter();

  const handleChange = (e) => {
    // Can not use Link within select element, so we're using router
    const time = e.target.value;
    router.push(`/${time}`);
  }

  // Previous method that was discarded because it caused a full reload (so re-initialization of data in Context for example)
  //within select: onChange={(e) => window.location.href=e.target.value}
  return (
    <select name="timeMenu" id="timeMenu" onChange={handleChange}>
      <option value={time}>{time}</option>
      {timeOptions.map((x,i) => {
        if (x !== time) return <option key={i} value={x}>{x}</option>
      })}
    </select>
  )
}

export default TimeMenu