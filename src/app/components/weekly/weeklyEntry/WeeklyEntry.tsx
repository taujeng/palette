import React from 'react'
import './weeklyEntry.css'
import { useEntryContext } from '@/app/context/EntryContext';
import { getShortFormatDate, getWeekDay } from '@/app/utils/dateUtil';

const WeeklyEntry = ( {date} ) => {
  // date example: "2023-11-26"
  const { state, dispatch } = useEntryContext();
  // console.log(date, state[date], state)
  const validDay = state?.[date]

  let usableEntries = [];
  if (validDay) {
    console.log(`valid date: ${JSON.stringify(validDay.entries)}`)
    const heartEntries = validDay && validDay.entries.filter(entry => entry.reaction === "heart")
    const likeEntries = heartEntries.length < 5 ? 
      validDay.entries.filter(entry => entry.reaction === "like")
      : [];
    usableEntries = heartEntries.concat(likeEntries).slice(0,5)
    console.log(`${heartEntries.length} heart: ${JSON.stringify(heartEntries)}, ${likeEntries.length} like: ${JSON.stringify(likeEntries)}, ${usableEntries.length} usable: ${JSON.stringify(usableEntries)}`)
  }

  return (
    <div className="weeklyEntry-container">
      <header>
        <h1>{getShortFormatDate(new Date(date))}</h1>
        <h3>{getWeekDay(new Date(date))}</h3>
      </header>
      {validDay ? 
      <main>
        {usableEntries.length > 0 ? 
          <ul>
            {usableEntries.map((entry, i) => {
              return <li key={i}>
                {entry.reaction === "heart" && "❤️"} {entry.name}
              </li>
            })}
          </ul>
          :
          <div className="">Blank</div>
        }   
      </main>
      :
      <div className="weeklyEntry-container-empty">
        blank
      </div>
    }

    </div>
  )
}

export default WeeklyEntry