'use client'
import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import './journalLayout.css'
import ColorPalette from '../modals/colorPalette/ColorPalette'

const JournalLayout = ( {children, startingTab} : any ) => {
  const [currentTab, setCurrentTab] = useState(startingTab || "day-tab");
  const [showColorPalette, setShowColorPalette] = useState<boolean>(false);


  return (
    <div className="journal-container">

      <div className="journal-content">
        <ColorPalette status={showColorPalette} setStatus={() => setShowColorPalette(!showColorPalette)}/>
        <ul className="tab-container">
          <Link href="/day" onClick={()=> setCurrentTab("day-tab")} className="tab-1"><li><b>DAY</b></li></Link>
          <Link href="/week" onClick={()=> setCurrentTab("week-tab")} className="tab-2"><li>WEEK</li></Link>
          <Link href="/month" onClick={()=> setCurrentTab("month-tab")} className="tab-3"><li>MONTH</li></Link>
        </ul>
        <div className={`children-container ${currentTab}`}>
          {children}
        </div>
      </div>

    </div>
  )
}

export default JournalLayout