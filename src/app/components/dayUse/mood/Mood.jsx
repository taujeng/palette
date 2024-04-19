'use client'

import React,{ useState } from 'react'
import { faFaceSadTear, faFaceAngry, faFaceMeh, faFaceGrinHearts, faFaceSmileBeam} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './mood.css'


const Mood = () => {
  const [currentMood, setCurrentMood] = useState("");

  const handleMoodChange = (emotion) => {
    setCurrentMood(emotion);
  }

  return (
    <div className="mood-container">
      {!currentMood && <h1>How are you feeling?</h1>}
      <div className="mood-choices">
        <FontAwesomeIcon className={`mood-icon angry ${currentMood === "angry" ? "selected" : null}`} icon={faFaceAngry} onClick={()=> handleMoodChange("angry")}/>
        <FontAwesomeIcon className={`mood-icon sad ${currentMood === "sad" ? "selected" : null}`} icon={faFaceSadTear} onClick={()=> handleMoodChange("sad")}/>
        <FontAwesomeIcon className={`mood-icon meh ${currentMood === "meh" ? "selected" : null}`} icon={faFaceMeh} onClick={()=> handleMoodChange("meh")}/>
        <FontAwesomeIcon className={`mood-icon happy ${currentMood === "happy" ? "selected" : null}`} icon={faFaceSmileBeam} onClick={()=> handleMoodChange("happy")}/>
        <FontAwesomeIcon className={`mood-icon love ${currentMood === "love" ? "selected" : null}`} icon={faFaceGrinHearts} onClick={()=> handleMoodChange("love")}/>
      </div>
    </div>
  )
}

export default Mood