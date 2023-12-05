'use client'
import { useContext, useState, useEffect } from "react"
import DailyEntry from "../components/daily/dailyEntry/DailyEntry"
import './day.css'
import Link from "next/link"
import {getDate }from "../utils/dateUtil"
import { useEntryContext } from "../context/EntryContext"
import TimeMenu from "../components/timeMenu/TimeMenu"
import IconSelection from "../components/modals/iconSelection/IconSelection"
import { faCirclePlus, faSplotch, faStop, faCheck, faXmark, faThumbTack, faPaintBrush } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NewDailyEntry from "../components/modals/newDailyEntry/NewDailyEntry"

export default function Day() {

  const {state, dispatch} = useEntryContext();
  const [showNewEntry, setShowNewEntry] = useState<boolean>(false);


  const handleCloseNewEntry = () => {
    setShowNewEntry(false);
  }

  const handleSelection = (entry) => {
    dispatch({type: "UPDATE_SELECTION", payload: entry})
  }

  const handleReaction = (entry) => {
    dispatch({type: "UPDATE_REACTION", payload: entry})
  }

  const handleRemoval = (id:string) => {
    dispatch({type: "REMOVE_ENTRY", id: id})
  }

  const handleDay = (e) => {
    console.log("handled")
  }


  return (
    <main className="day-container">
      <TimeMenu time="day"/>
      {state[getDate()].entries.length > 0 ? 
        <div className="entry-container">
          {state[getDate()].entries.map((item, i) => 
          <DailyEntry key={i} id={item.id} handleSelection={handleSelection} handleReaction={handleReaction} handleRemoval={handleRemoval}/>)}
        </div>
        :
        <div className="no-entry-container">
          <img src="/images/day/undraw_thoughts.svg" alt="" />
        </div>
      }

      <div className="day-btns">
        <button onClick={()=> setShowNewEntry(!showNewEntry)}><FontAwesomeIcon className="day-icon" icon={faCirclePlus}/></button>
        <Link href="/daySummary"><button onClick={handleDay}><FontAwesomeIcon icon={faPaintBrush} className="day-icon"></FontAwesomeIcon></button></Link>
      </div>

      {/* Modal to add a New Entry */}
      {showNewEntry && <NewDailyEntry showNewEntry={showNewEntry} toClose={handleCloseNewEntry}/>}
    </main>
  )
}
