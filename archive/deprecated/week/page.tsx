'use client'

import React, {useState} from 'react'
import TimeMenu from '../../components/timeMenu/TimeMenu'
import './week.css'
import { getDate, getFormatDate } from '../../../src/app/utils/dateUtil'
import WeeklyEntry from '../../components/weekly/deprecated/weeklyEntry/WeeklyEntry'
import ColorPalette from '../../../src/app/components/modals/colorPalette/ColorPalette'
import { useEntryContext } from '../../../src/app/context/EntryContext'
import JournalLayout from '../../../src/app/components/journalLayout/JournalLayout'

const Week = () => {
  const {state, dispatch} = useEntryContext();
  const [showColorPalette, setShowColorPalette] = useState<boolean>(false);


  // Grab the dates for the last 7 days, including today
  const weekArr = [];
  for (let i = 6; i >= 0; i--) {
    const newDate = new Date();
    newDate.setDate(newDate.getDate() - i);
    weekArr.push(getFormatDate(newDate));
  }

  return (
    <div className="week-container">
      <JournalLayout startingTab="week-tab">
        {state[getDate()] && <ColorPalette status={showColorPalette} setStatus={() => setShowColorPalette(!showColorPalette)} />}
        <main>
          {weekArr.map((item, i) => {
            return <WeeklyEntry key={i} date={item}/>
          })}
        </main>
      </JournalLayout>
      {/* <TimeMenu time="week"/> */}

    </div>
  )
}

export default Week