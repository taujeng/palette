import React from 'react'
import './weeklyEntry.css'
import { useEntryContext } from '@/app/context/EntryContext';
import { getShortFormatDate, getWeekDay } from '@/app/utils/dateUtil';
import { MyEntryObject } from '@/app/utils/interfaceLibrary';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface WeeklyEntryProps {
  date: string;
}

const WeeklyEntry = ( {date} : WeeklyEntryProps ) => {
  // date example: "2023-11-26"
  const { state, dispatch } = useEntryContext();
  // console.log(date, state[date], state)
  const validDay = state?.[date]

  let usableEntries = [];
  if (validDay) {
    const heartEntries = validDay && validDay.entries.filter((entry:MyEntryObject) => entry.reaction === "heart")
    const likeEntries = heartEntries.length < 5 ? 
      validDay.entries.filter((entry:MyEntryObject) => entry.reaction === "like")
      : [];
    usableEntries = heartEntries.concat(likeEntries).slice(0,5)
    // console.log(`${heartEntries.length} heart: ${JSON.stringify(heartEntries)}, ${likeEntries.length} like: ${JSON.stringify(likeEntries)}, ${usableEntries.length} usable: ${JSON.stringify(usableEntries)}`)
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
            {usableEntries.map((entry:MyEntryObject, i:number) => {
              return <li key={i}>
                <FontAwesomeIcon icon={entry.icon} style={{color: entry.category}}/> {entry.name}
              </li>
            })}
          </ul>
          :
          <div className=""></div>
        }   
      </main>
      :
      <div className="weeklyEntry-container-empty">
        
      </div>
    }

    </div>
  )
}

export default WeeklyEntry