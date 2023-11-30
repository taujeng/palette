'use client'
import { useContext, useState, useEffect } from "react"
import DailyEntry from "../components/daily/dailyEntry/DailyEntry"
import './day.css'
import Link from "next/link"
import {getDate }from "../utils/dateUtil"
import { useEntryContext } from "../context/EntryContext"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TimeMenu from "../components/timeMenu/TimeMenu"
import { faCirclePlus, faSplotch, faStop, faCheck, faXmark, faThumbTack, faPaintBrush } from "@fortawesome/free-solid-svg-icons";

export default function Day() {

  const {state, dispatch} = useEntryContext();
  const [showNewEntry, setShowNewEntry] = useState<boolean>(false);
  const [entryText, setEntryText] = useState<string>('');
  const [entryColor, setEntryColor] = useState<string>('');

  const handleNewEntry = (e) => {
    e.preventDefault();

    // Add to EntryContext
    dispatch({type: "ADD_ENTRY", name: entryText, color: entryColor})

    setShowNewEntry(false);
    setEntryText("");
    setEntryColor("");
  }

  const handleDay = (e) => {
    console.log("handled")
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

  return (
    <main className="day-container">
      <TimeMenu time="day"/>
      {state[getDate()].entries.length > 0 ? 
        <div className="entry-container">
          {state[getDate()].entries.map((item, i) => 
          <DailyEntry key={i} entry={item} handleSelection={handleSelection} handleReaction={handleReaction} handleRemoval={handleRemoval}/>)}
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
      {showNewEntry && (<div className="modal-dailyEntry" onClick={() => setShowNewEntry(false)}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <h3>Let's add something new!</h3>
          <form action="submit" onSubmit={handleNewEntry}>
            <label htmlFor=""> New Item Name:
              <br />
              <input type="text" value={entryText} onChange={(e) => setEntryText(e.target.value)} maxLength={20} autoFocus required/>
            </label>
            <div className="modal-color-selector">
              Select a color category:
              <div className="modal-color-choices">
                <div className="modal-color-wrapper">
                  {entryColor === "red" && <span className="scribble"></span>}
                  <FontAwesomeIcon icon={faStop} className="color-icon color-red" 
                  onClick={() => setEntryColor("red")}/>
                </div>
                <div className="modal-color-wrapper">
                  {entryColor === "#03c04a" && <span className="scribble"></span>}
                  <FontAwesomeIcon icon={faStop} className="color-icon color-green"
                  onClick={() => setEntryColor("#03c04a")}/>
                </div>
                <div className="modal-color-wrapper">
                  {entryColor === "blue" && <span className="scribble"></span>}
                  <FontAwesomeIcon icon={faStop} className="color-icon color-blue"
                onClick={() => setEntryColor("blue")}/>
                </div>
              </div>
            </div>
            <div className="modal-end">
              <button onClick={() => setShowNewEntry(false)}>
                <FontAwesomeIcon icon={faXmark} className="submit-icon"/>
              </button>
              <button type="submit">
                <FontAwesomeIcon icon={faCheck} className="submit-icon"/>
              </button>
          </div>
          </form>

        </div>
      </div>)}
    </main>
  )
}
