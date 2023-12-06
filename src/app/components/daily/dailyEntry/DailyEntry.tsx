'use client'

import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown, faHeart, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp as farThumbsUp, faThumbsDown as farThumbsDown, faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'
import "./dailyEntry.css"
import { useEntryContext } from '@/app/context/EntryContext';
import { getDate } from '@/app/utils/dateUtil';


const DailyEntry = ( {id, handleSelection, handleReaction, handleRemoval} ) => {
  const {state, dispatch} = useEntryContext();

  // keep track if reaction icon is being hovered over
  const [likeHover, setLikeHover] = useState(false);
  const [dislikeHover, setDislikeHover] = useState(false);
  const [heartHover, setHeartHover] = useState(false);
  // Base entry's info off state
  const entryInfo = state && state[getDate()].entries.find((x) => x.id === id);
  const selected = entryInfo ? entryInfo.selected : false;
  const reaction = entryInfo ? entryInfo.reaction : "none";
  const category = entryInfo ? entryInfo.category : "none";


  function handleEntrySelection() {
    handleSelection({...entryInfo, selected: !selected})
  }

  function handleEntryReaction(entryReaction:string) {
    let newReaction = reaction === entryReaction ? "none" : entryReaction;
    handleReaction({...entryInfo, reaction: newReaction })
  }

  function removeEntry() {
    handleRemoval(id);
  }

  return (
    <div className={`dailyEntry-container ${selected && "selected"}`} onClick={() => handleEntrySelection()}
      style={{border: selected && `3px solid ${category}`}}
    >
      <div className="top-container">
        <div className="dailyEntry-icon">{entryInfo.icon && <FontAwesomeIcon icon={entryInfo.icon}/>}</div>
        {entryInfo.name}
      </div>

      <div className="bottom-container">
        <button
          onClick={(e)=> {e.stopPropagation(); removeEntry()}}
        >
          <FontAwesomeIcon icon={faCircleXmark} className="reaction-icon remove"/>
        </button>

        <div className="reaction-container">
          <button
            onClick={(e) => {e.stopPropagation(); handleEntryReaction("like"); }}
            onMouseEnter={()=> setLikeHover(true)} onMouseLeave={() => setLikeHover(false)}>
            <FontAwesomeIcon icon={reaction === "like" ? faThumbsUp : farThumbsUp} className={`reaction-icon ${reaction === "like" && "like"} fa-regular ${likeHover && "fa-bounce"}`}/></button>
          <button
            onClick={(e) => {e.stopPropagation(); handleEntryReaction("dislike"); }}
            onMouseEnter={()=> setDislikeHover(true)} onMouseLeave={() => setDislikeHover(false)}>
            <FontAwesomeIcon icon={reaction === "dislike" ? faThumbsDown : farThumbsDown} className={`reaction-icon ${reaction === "dislike" && "dislike"} ${dislikeHover && "fa-bounce"}`} />
          </button>
          <button 
            onClick={(e) => {e.stopPropagation(); handleEntryReaction("heart"); }}
            onMouseEnter={()=> setHeartHover(true)} onMouseLeave={() => setHeartHover(false)}>
            <FontAwesomeIcon icon={reaction === "heart" ? faHeart : farHeart} className={`reaction-icon fa-regular ${reaction === "heart" && "heart"} ${heartHover && "fa-bounce"}`} />
          </button>
        </div>

      </div>
    </div>
  )
}

export default DailyEntry