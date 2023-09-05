'use client'
import { useContext, useState } from "react"
import DailyEntry from "./components/daily/dailyEntry/DailyEntry"
import './day.css'
import { useEntryContext } from "./context/EntryContext"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faSplotch, faStop, faCheck, faXmark, faThumbTack } from "@fortawesome/free-solid-svg-icons";


export default function Day() {
  // state, dispatch
  const {state, dispatch} = useEntryContext();
  const [showNewEntry, setShowNewEntry] = useState(false);
  const [entryText, setEntryText] = useState('');
  const [entryColor, setEntryColor] = useState('');

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

    setShowNewEntry(false);
    setEntryText("");
    setEntryColor("");
  }

  return (
    <main className="day-container">
      <h1>Day</h1>
      <div className="entry-container">
        {state.entries.map((item, i) => <DailyEntry key={i} entry={item}/>)}
      </div>
      <button onClick={()=> setShowNewEntry(!showNewEntry)}><FontAwesomeIcon className="addEntry-icon" icon={faCirclePlus}/></button>
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
