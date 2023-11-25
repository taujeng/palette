import React from 'react'
import './weeklyEntry.css'
import { useEntryContext } from '@/app/context/EntryContext';
import { getShortFormatDate, getWeekDay } from '@/app/utils/dateUtil';

const WeeklyEntry = ( {day} ) => {
  const { state, dispatch } = useEntryContext();
  // console.log(state[day])
  const validDay = state ? state[day] : "undefined"
  if (validDay === "undefined") {
    return <div className="weeklyEntry-container-empty">
      blank
  </div>
  }

  const usableEntries = []
  const loveEntries = validDay && validDay.entries.filter(entry => entry.reaction === "love")
  // console.log(loveEntries)

  return (
    <div className="weeklyEntry-container">
      <header>
        <h1>{getShortFormatDate(new Date(day))}</h1>
        <h3>{getWeekDay(new Date(day))}</h3>
      </header>
      <main>
        content
      </main>
    </div>
  )
}

export default WeeklyEntry