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
import { ShepherdJourneyProvider, useShepherd, } from "react-shepherd"

export default function Day() {
  const {state, dispatch} = useEntryContext();
  const [showNewEntry, setShowNewEntry] = useState<boolean>(false);

  const { handleSelection, handleReaction, handleRemoval } = useEntryManagement();

  const handleCloseNewEntry = () => {
    setShowNewEntry(false);
  }


  const tourOptions = {
    defaultStepOptions: {
      cancelIcon: {
        enabled: true
      }
    },
    useModalOverlay: true
  };


  function Button() {
    const Shepherd = useShepherd();
    const steps:any[] = [
      {
      id: "intro",
      text: "welcome to palette!",
      attachTo: {
        element: ".start",
        on: "bottom"
      },
      buttons: [
        {
          text: "next",
          action: () =>  tour.next()
        },
      ]
    },
    {
      id: "Mood",
      text: "This section is used to keep track of your mood.",
      attachTo: {
        element: "#mood-tour",
        on: "bottom"
      },
      buttons: [
        {
          text: "next",
          action: () => tour.next()
        },
        {
          text:"back",
          action: () => tour.back()
        }
      ]
    },
  
    ]
  
    const tour:any = new Shepherd.Tour({
      ...tourOptions,
      steps
    });

    return (
      <button className="button dark" onClick={()=> tour.start()}>
        Start Tour
      </button>
    );
  }



  return (
    <main className="day-container">
      <JournalLayout>
        <ShepherdJourneyProvider>
          {state[getDate()] && <div id="mood-tour"><Mood /></div>}
          
          <Button />
          <div className="start">Start Tour</div>
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
