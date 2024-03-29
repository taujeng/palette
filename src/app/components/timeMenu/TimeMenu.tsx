'use client'

import React, {useState, ChangeEvent} from 'react'
import Link from 'next/link'
import "./timeMenu.css"
import { useRouter } from 'next/navigation'

interface TimeMenuProps {
  time: string;
}

const TimeMenu = ( {time} : TimeMenuProps ) => {
  const timeOptions = ["day", "week", "month"]
  const router = useRouter();
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    // Can not use Link within select element, so we're using router
    const time = e.target.value;
    router.push(`/${time}`);
  }

  // Previous method that was discarded because it caused a full reload (so re-initialization of data in Context for example)
  //within select: onChange={(e) => window.location.href=e.target.value}
  return (
    <select name="timeMenu" id="timeMenu" value={time} onChange={handleChange}>
      {timeOptions.map((x,i) => {
        return <option key={i} value={x}>{x}</option>
      })}
    </select>
  )
}

export default TimeMenu