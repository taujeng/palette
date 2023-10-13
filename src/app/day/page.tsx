'use client'
import { useContext, useState, useEffect } from "react"
import DailyEntry from "../components/daily/dailyEntry/DailyEntry"
import './day.css'
import Link from "next/link"
import {getDate, getWeekDay }from "../utils/dateUtil"
import { useEntryContext } from "../context/EntryContext"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TimeMenu from "../components/timeMenu/TimeMenu"
import { faCirclePlus, faSplotch, faStop, faCheck, faXmark, faThumbTack, faPaintBrush } from "@fortawesome/free-solid-svg-icons";

let grabLocal = false;

export default function Day() {
  // state, dispatch
  const {state, dispatch} = useEntryContext();
  const [entryList, setEntryList] = useState<string[]>([]);
  const [date, setDate] = useState(getDate());
  const [showNewEntry, setShowNewEntry] = useState<boolean>(false);
  const [entryText, setEntryText] = useState<string>('');
  const [entryColor, setEntryColor] = useState<string>('');

  useEffect(()=> {
    // Only run once when app loads
    let todayDate = getDate();
    setDate(todayDate)


    if (!grabLocal) {
      grabLocal = true;

      // Grab Local Data's Entries List
      let localEntryList = localStorage.getItem("myPaletteEntries")
      localEntryList = localEntryList ? JSON.parse(localEntryList) : [
        "School", "Cooking", "Gym", "TV Show", "Self Care", "Event"
      ];
      setEntryList(localEntryList);
      localStorage.setItem("myPaletteEntries", JSON.stringify(localEntryList));
  


      const getLocalData = localStorage.getItem('myPalette');
      // if local data doesn't exist, use this as a starter pack
      let startingData = getLocalData
        ? JSON.parse(getLocalData)
        : {[date] : {entries: [
          {name: "School", category: "#03c04a", selected: true, reaction: "dislike"},
          {name: "Cooking", category: "#03c04a", selected: true, reaction: "heart"},
          {name: "Gym", category: "#03c04a", selected: true, reaction: "like"},
          {name: "TV Show", category: "blue", selected: false, reaction: "none"},
          {name: "Self Care", category: "blue", selected: false, reaction: "none"},
          {name: "Event", category: "red", selected: false, reaction: "none"},
        ]}, weekday: [getWeekDay()],
        };

      // if startingData doesn't include today's date, add it
      if (startingData[todayDate] == undefined) {
        startingData = {
          [date] : {entries: [
            {name: "fasdfadsf", category: "#03c04a", selected: true, reaction: "dislike"},
            {name: "Health", category: "#03c04a", selected: true, reaction: "heart"},
            {name: "Fitness", category: "#03c04a", selected: true, reaction: "like"},
            {name: "Games", category: "blue", selected: false, reaction: "none"},
            {name: "Family", category: "blue", selected: false, reaction: "none"},
            {name: "kalbmasdf", category: "red", selected: false, reaction: "none"},
          ]}, weekday: [getWeekDay()]
          , ...startingData
        }
      }  

      // use as initial state for EntryContext
      dispatch({
        type: 'INIT_LOCAL_STORAGE',
        payload: startingData,
      });
      // Save/Initialize to Local Storage
      localStorage.setItem("myPalette", JSON.stringify(startingData));

    }
  },)

  const handleNewEntry = (e) => {
    e.preventDefault();

    const newEntry = {
      name: entryText,
      category: entryColor,
      selected: false,
      reaction: "heart",
    }
    // Add to EntryContext
    dispatch({type: "ADD_ENTRY", payload: newEntry})
    // Add Entry to Entry List
    let updatedList = [...entryList, entryText]
    setEntryList(updatedList);
    localStorage.setItem("myPaletteEntries", JSON.stringify(updatedList))



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

  return (
    <main className="day-container">
      <TimeMenu time="day"/>
      <div className="entry-container">
        {state[date] && state[date].entries.map((item, i) => 
        <DailyEntry key={i} entry={item} handleSelection={handleSelection} handleReaction={handleReaction}/>)}
      </div>
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
