'use client'
import { useContext, useState, useEffect } from "react"
import DailyEntry from "../components/dayUse/dailyEntry/DailyEntry"
import './day.css'
import {getDate }from "../utils/dateUtil"
import { useEntryContext } from "../context/EntryContext"
import TimeMenu from "../components/timeMenu/TimeMenu"
import { faCirclePlus, faSplotch, faStop, faCheck, faXmark, faThumbTack, faPaintBrush } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NewDailyEntry from "../components/modals/newDailyEntry/NewDailyEntry"
import { MyEntryObject } from "../utils/interfaceLibrary"
import ColorPalette from "../components/modals/colorPalette/ColorPalette"
import Mood from "../components/dayUse/mood/Mood"

export default function Day() {

  const {state, dispatch} = useEntryContext();
  const [showNewEntry, setShowNewEntry] = useState<boolean>(false);
  const [showColorPalette, setShowColorPalette] = useState<boolean>(false);


  const handleCloseNewEntry = () => {
    setShowNewEntry(false);
  }

  const handleSelection = (entry: MyEntryObject) => {
    dispatch({type: "UPDATE_SELECTION", payload: entry})
  }

  const handleReaction = (entry: MyEntryObject) => {
    dispatch({type: "UPDATE_REACTION", payload: entry})
  }

  const handleRemoval = (id:string) => {
    dispatch({type: "REMOVE_ENTRY", id: id})
  }


  return (
    <main className="day-container">
      <TimeMenu time="day"/>
      {state[getDate()] && <Mood />}
      {state[getDate()] && <ColorPalette status={showColorPalette} setStatus={() => setShowColorPalette(!showColorPalette)} />}
      {state[getDate()] && state[getDate()].entries.length > 0 ? 
        <div className="entry-container">
          {state[getDate()].entries.map((item:MyEntryObject, i:number) => 
          <DailyEntry 
            key={i} 
            index={i}
            id={item.id} 
            handleSelection={handleSelection} 
            handleReaction={handleReaction} 
            handleRemoval={handleRemoval}
          />)}
        </div>
        :
        <div className="no-entry-container">
          <img src="/images/day/undraw_thoughts.svg" alt="" />
        </div>
      }

      <div className="day-btns">
        <button onClick={()=> setShowNewEntry(!showNewEntry)}><FontAwesomeIcon className="day-icon" icon={faCirclePlus}/></button>
      </div>

      {/* Modal to add a New Entry */}
      {showNewEntry && <NewDailyEntry showNewEntry={showNewEntry} toClose={handleCloseNewEntry}/>}
    </main>
  )
}
