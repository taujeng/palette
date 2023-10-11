'use client'

import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp as farThumbsUp, faThumbsDown as farThumbsDown, faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'
import "./dailyEntry.css"


const DailyEntry = ( {entry, handleSelection, handleReaction} ) => {
  const [selected, setSelected] = useState(entry.selected);
  const [like, setLike] = useState(entry.reaction === "like");
  const [dislike, setDislike] = useState(entry.reaction === "dislike");
  const [heart, setHeart] = useState(entry.reaction === "heart");
  const [likeHover, setLikeHover] = useState(false);
  const [dislikeHover, setDislikeHover] = useState(false);
  const [heartHover, setHeartHover] = useState(false);

  function handleEntrySelection() {
    setSelected(!selected)
    handleSelection({...entry, selected: !selected})
  }

  function handleEntryReaction(entryReaction:string) {
    let newReaction = entry.reaction === entryReaction ? "none" : entryReaction;

    setSelected(true);
    handleReaction({...entry, reaction: newReaction })
  }

  return (
    <div className={`dailyEntry-container ${selected && "selected"}`} onClick={() => handleEntrySelection()}
      style={{border: selected && `3px solid ${entry.category}`}}
    >
      {entry.name}
      <div className="reaction-container">
        <button
          onClick={(e) => {e.stopPropagation(); handleEntryReaction("like"); setLike(!like); setDislike(false); setHeart(false); }}
          onMouseEnter={()=> setLikeHover(true)} onMouseLeave={() => setLikeHover(false)}>
          <FontAwesomeIcon icon={like ? faThumbsUp : farThumbsUp} className={`reaction-icon ${like && "like"} fa-regular ${likeHover && "fa-bounce"}`}/></button>
        <button
          onClick={(e) => {e.stopPropagation(); handleEntryReaction("dislike"); setDislike(!dislike); setLike(false); setHeart(false);}}
          onMouseEnter={()=> setDislikeHover(true)} onMouseLeave={() => setDislikeHover(false)}>
          <FontAwesomeIcon icon={dislike ? faThumbsDown : farThumbsDown} className={`reaction-icon ${dislike && "dislike"} ${dislikeHover && "fa-bounce"}`} />
        </button>
        <button 
          onClick={(e) => {e.stopPropagation(); handleEntryReaction("heart"); setHeart(!heart); setLike(false); setDislike(false);}}
          onMouseEnter={()=> setHeartHover(true)} onMouseLeave={() => setHeartHover(false)}>
          <FontAwesomeIcon icon={heart ? faHeart : farHeart} className={`reaction-icon fa-regular ${heart && "heart"} ${heartHover && "fa-bounce"}`} />
        </button>
      </div>
    </div>
  )
}

export default DailyEntry