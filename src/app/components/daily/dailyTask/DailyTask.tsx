'use client'

import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown, faHeart } from "@fortawesome/free-solid-svg-icons";
import "./dailyTask.css"

const DailyTask = () => {
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);
  const [heart, setHeart] = useState(false);
  const [likeHover, setLikeHover] = useState(false);
  const [dislikeHover, setDislikeHover] = useState(false);
  const [heartHover, setHeartHover] = useState(false);
  return (
    <div className="dailyTask-container">
      school
      <div className="reaction-container">
        <button className={`like-btn ${like && "active"} `} onMouseEnter={()=> setLikeHover(true)} onMouseLeave={()=> setLikeHover(false)}>
          <FontAwesomeIcon icon={faThumbsUp} className={`${likeHover && "fa-bounce"}`}
            style={{color: "lightgreen", fontSize: 20}}  /></button>
        <button className={`like-btn ${dislike && "active"}`} onMouseEnter={()=> setDislikeHover(true)} onMouseLeave={()=> setDislikeHover(false)}>
          <FontAwesomeIcon icon={faThumbsDown} className={`${dislikeHover && "fa-bounce"}`}
          style={{color: "lightgreen", fontSize: 20}} />
        </button>
        <button className={`like-btn ${heart && "active"}`} onMouseEnter={()=> setHeartHover(true)} onMouseLeave={()=> setHeartHover(false)}>
          <FontAwesomeIcon icon={faHeart} className={`${heartHover && "fa-bounce"}`}
          style={{color: "lightgreen", fontSize: 20}} />
        </button>
      </div>
    </div>
  )
}

export default DailyTask