import React from 'react'
import './weeklyEntry.css'
import { useEntryContext } from '@/app/context/EntryContext';
import { getShortFormatDate } from '@/app/utils/dateUtil';

const WeeklyEntry = ( {day} ) => {
  const { state,dispatch } = useEntryContext();
  console.log(state[day])
  const currentDay = state ? state[day] : "undefined"
  if (currentDay === "undefined") {
    return <div className="weeklyEntry-container-empty">
      blank
  </div>
  }
  return (
    <div className="weeklyEntry-container">
      <header>
        <h1>{getShortFormatDate(new Date(day))}</h1>
        <h3>{currentDay && currentDay.weekday}</h3>
      </header>
      <main>
        content
      </main>
    </div>
  )
}

export default WeeklyEntry