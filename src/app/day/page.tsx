'use client'
import { useContext, useState, useEffect } from "react"
import DailyEntry from "../components/dayUse/dailyEntry/DailyEntry"
import './day.css'
import {getDate }from "../utils/dateUtil"
import { useEntryContext } from "../context/EntryContext"
import { faCirclePlus, faSplotch, faStop, faCheck, faXmark, faThumbTack, faPaintBrush } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NewDailyEntry from "../components/modals/newDailyEntry/NewDailyEntry"
import { MyEntryObject } from "../utils/interfaceLibrary"
import Mood from "../components/dayUse/mood/Mood"
import JournalLayout from "../components/journalLayout/JournalLayout"
import { useEntryManagement } from "../hooks/useEntryManagement"
import { ShepherdJourneyProvider } from "react-shepherd"
import DayTour from "../components/tour/DayTour"

export default function Day() {
  const {state, dispatch} = useEntryContext();
  const [showNewEntry, setShowNewEntry] = useState<boolean>(false);

  const { handleSelection, handleReaction, handleRemoval } = useEntryManagement();

  const handleCloseNewEntry = () => {
    setShowNewEntry(false);
  }


  return (
    <main className="day-container">
      <JournalLayout>
        <ShepherdJourneyProvider>
          {state[getDate()] && <div id="mood-tour"><Mood /></div>}
          
          {/* Tour for first time Users */}
          <DayTour />

          {/* Button to trigger Modal for New Entry */}
          <div className="day-btns">
            <button onClick={()=> setShowNewEntry(!showNewEntry)}><FontAwesomeIcon className="day-icon" icon={faCirclePlus}/></button>
          </div>
          {/* Modal for New Entry */}
          {showNewEntry && <NewDailyEntry showNewEntry={showNewEntry} toClose={handleCloseNewEntry}/>}

          {state[getDate()] && state[getDate()].entries.length > 0 ? 
            <div className="entry-container">
              {state[getDate()].entries.map((item:MyEntryObject, i:number) => 
              <DailyEntry 
                key={i} 
                index={i}
                data={item}
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
        </ShepherdJourneyProvider>
      </JournalLayout>
    </main>
  )
}
