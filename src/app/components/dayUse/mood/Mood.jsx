'use client'

import React,{ useState } from 'react'
import { faFaceSadTear, faFaceAngry, faFaceMeh, faFaceGrinHearts, faFaceSmileBeam} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './mood.css'
import { useEntryContext } from '@/app/context/EntryContext';
import { getDate } from '@/app/utils/dateUtil';


const Mood = () => {
  const {state, dispatch} = useEntryContext();
  const [currentMood, setCurrentMood] = useState(state?.[getDate()]?.mood || null);

  const handleMoodChange = (emotion) => {
    setCurrentMood(emotion);
    dispatch({type: "UPDATE_MOOD", payload: emotion})
  }

  return (
    <div className="mood-container">
      {!currentMood && <h1>How are you feeling?</h1>}
      <div className="mood-choices">
        <FontAwesomeIcon title="angry" className={`mood-icon angry ${currentMood === "angry" ? "selected" : null}`} icon={faFaceAngry} onClick={()=> handleMoodChange("angry")}/>
        <FontAwesomeIcon title="sad" className={`mood-icon sad ${currentMood === "sad" ? "selected" : null}`} icon={faFaceSadTear} onClick={()=> handleMoodChange("sad")}/>
        <FontAwesomeIcon title="meh" className={`mood-icon meh ${currentMood === "meh" ? "selected" : null}`} icon={faFaceMeh} onClick={()=> handleMoodChange("meh")}/>
        <FontAwesomeIcon title="happy" className={`mood-icon happy ${currentMood === "happy" ? "selected" : null}`} icon={faFaceSmileBeam} onClick={()=> handleMoodChange("happy")}/>
        <FontAwesomeIcon title="love" className={`mood-icon love ${currentMood === "love" ? "selected" : null}`} icon={faFaceGrinHearts} onClick={()=> handleMoodChange("love")}/>
      </div>
    </div>
  )
}

export default Mood