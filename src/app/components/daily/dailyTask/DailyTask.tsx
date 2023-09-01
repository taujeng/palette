'use client'

import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp as farThumbsUp, faThumbsDown as farThumbsDown, faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'
import "./dailyTask.css"


const DailyTask = ( {task} ) => {
  const [selected, setSelected] = useState(task.selected);
  const [like, setLike] = useState(task.reaction === "like");
  const [dislike, setDislike] = useState(task.reaction === "dislike");
  const [heart, setHeart] = useState(task.reaction === "heart");
  const [likeHover, setLikeHover] = useState(false);
  const [dislikeHover, setDislikeHover] = useState(false);
  const [heartHover, setHeartHover] = useState(false);
  return (
    <div className={`dailyTask-container ${selected && "selected"}`} onClick={() => setSelected(!selected)}
      style={{border: selected && `3px solid ${task.category}`}}
    >
      {task.name}
      <div className="reaction-container">
        <button
          onClick={(e) => {e.stopPropagation(); setLike(!like); setDislike(false); setHeart(false); setSelected(true);}}
          onMouseEnter={()=> setLikeHover(true)} onMouseLeave={() => setLikeHover(false)}>
          <FontAwesomeIcon icon={like ? faThumbsUp : farThumbsUp} className={`reaction-icon ${like && "like"} fa-regular ${likeHover && "fa-bounce"}`}/></button>
        <button
          onClick={(e) => {e.stopPropagation(); setDislike(!dislike); setLike(false); setHeart(false); setSelected(true);}}
          onMouseEnter={()=> setDislikeHover(true)} onMouseLeave={() => setDislikeHover(false)}>
          <FontAwesomeIcon icon={dislike ? faThumbsDown : farThumbsDown} className={`reaction-icon ${dislike && "dislike"} ${dislikeHover && "fa-bounce"}`} />
        </button>
        <button 
          onClick={(e) => {e.stopPropagation(); setHeart(!heart); setLike(false); setDislike(false); setSelected(true);}}
          onMouseEnter={()=> setHeartHover(true)} onMouseLeave={() => setHeartHover(false)}>
          <FontAwesomeIcon icon={heart ? faHeart : farHeart} className={`reaction-icon fa-regular ${heart && "heart"} ${heartHover && "fa-bounce"}`} />
        </button>
      </div>
    </div>
  )
}

export default DailyTask