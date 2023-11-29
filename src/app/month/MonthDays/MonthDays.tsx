import { useEntryContext } from '@/app/context/EntryContext'
import React from 'react'
import { getFormatDate } from '@/app/utils/dateUtil';
import './monthDays.css'

const MonthDays = ( {day, month} ) => {
  const {state, dispatch} = useEntryContext();
  const cYear = new Date().getFullYear();
  const dateObject = new Date(cYear, month, day);
  const date = getFormatDate(dateObject)

  const validDay = state?.[date]

  let usableEntries = [];
  if (validDay) {
    const heartEntries = validDay && validDay.entries.filter(entry => entry.reaction === "heart")
    const likeEntries = heartEntries.length < 3 ? 
      validDay.entries.filter(entry => entry.reaction === "like")
      : [];
    // usableEntries = heartEntries.concat(likeEntries).slice(0,3)
    usableEntries = [...heartEntries, ...likeEntries].slice(0,3)
    // console.log(`${heartEntries.length} heart: ${JSON.stringify(heartEntries)}, ${likeEntries.length} like: ${JSON.stringify(likeEntries)}, ${usableEntries.length} usable: ${JSON.stringify(usableEntries)}`)
  }

  return (
    <div className="monthDays-container">
      <h3>{day}</h3>
      {day &&
      <ul>
        {usableEntries.length > 0 ? usableEntries.map((entry, i) => {
          return <li key={i}>{entry.name}</li>
        })
        : <></>
        }
      </ul>}
    </div>
  )
}

export default MonthDays