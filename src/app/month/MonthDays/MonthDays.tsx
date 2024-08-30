import { useEntryContext } from '@/app/context/EntryContext'
import React from 'react'
import { getFormatDate } from '@/app/utils/dateUtil';
import './monthDays.css'
import { MyEntryObject } from '@/app/utils/interfaceLibrary';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface MonthDaysProps {
  day: number;
  month: number;
}

const MonthDays = ( {day, month} : MonthDaysProps ) => {
  const {state, dispatch} = useEntryContext();
  const cYear = new Date().getFullYear();
  const dateObject = new Date(cYear, month, day);
  const date = getFormatDate(dateObject)

  const validDay = state?.[date]

  let usableEntries = [];
  if (validDay) {
    const heartEntries = validDay.entries.filter((entry:MyEntryObject) => entry.reaction === "heart")
    const likeEntries = validDay.entries.filter((entry:MyEntryObject) => entry.reaction === "like")
    const selectedEntries = validDay.entries.filter((entry:MyEntryObject) => { return entry.selected === true && entry.reaction === "none"});

    // usableEntries = heartEntries.concat(likeEntries).slice(0,3)
    usableEntries = [...heartEntries, ...likeEntries, ...selectedEntries].slice(0,3)
    // console.log(`${heartEntries.length} heart: ${JSON.stringify(heartEntries)}, ${likeEntries.length} like: ${JSON.stringify(likeEntries)}, ${usableEntries.length} usable: ${JSON.stringify(usableEntries)}`)
  }
  
  return (
    <div className="monthDays-container">
      <h3>{day}</h3>
      {day &&
      <ul>
        {usableEntries.length > 0 && usableEntries.map((entry, i) => {
          return <li key={i}><FontAwesomeIcon icon={entry.icon} style={{color: entry.category}} className="month-icon"/>  <div className="month-text">{entry.name}</div></li>
        })
        }
      </ul>}
    </div>
  )
}

export default MonthDays