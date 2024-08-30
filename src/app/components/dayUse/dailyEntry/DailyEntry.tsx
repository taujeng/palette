'use client'

import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown, faHeart, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp as farThumbsUp, faThumbsDown as farThumbsDown, faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'
import "./dailyEntry.css"
import { useEntryContext } from '@/app/context/EntryContext';
import { getDate } from '@/app/utils/dateUtil';
import { MyEntryObject } from '@/app/utils/interfaceLibrary';

interface DailyEntryProps {
  index: number;
  data: MyEntryObject;
  handleSelection: (input: MyEntryObject) => void;
  handleReaction: (input: MyEntryObject) => void;
  handleRemoval: (input: string) => void;
}

const DailyEntry = ( { index, data, handleSelection, handleReaction, handleRemoval}: DailyEntryProps ) => {
  const {state, dispatch} = useEntryContext();

  // keep track if reaction icon is being hovered over
  const [likeHover, setLikeHover] = useState(false);
  const [dislikeHover, setDislikeHover] = useState(false);
  const [heartHover, setHeartHover] = useState(false);
  // Base entry's info off state (except selected)
  // basing it off useState is a bad idea: state and useState will not be in sync
  // const entryInfo = state && state[getDate()].entries.find((x: MyEntryObject) => x.id === id);
  // const selected = entryInfo ? entryInfo.selected : false;
  // const reaction = entryInfo ? entryInfo.reaction : "none";
  // const category = entryInfo ? entryInfo.category : "none";

  // const entryInfo = data;
  // const selected = data.selected;
  // const reaction = data.reaction;
  // const category = data.category;

  const { name, selected, reaction, category, icon, id} = data


  function handleEntrySelection() {
    handleSelection({...data, selected: !selected})
  }

  function handleEntryReaction(entryReaction:string) {
    let newReaction = reaction === entryReaction ? "none" : entryReaction;
    handleReaction({...data, reaction: newReaction })
  }

  function removeEntry() {
    handleRemoval(id);
  }

  const handleDragStart = (event: any, index: number) => {
    event.dataTransfer.setData('text/plain', index);
  };

  const handleDragOver = (event: any, index: number) => {
    event.preventDefault();
  };

  const handleDrop = (event: any, dropIndex: number) => {
    const dragIndex = event.dataTransfer.getData('text/plain');
    const entries = state[getDate()].entries
    const draggedEntry = entries[dragIndex];
    const newEntries = [...entries];

    newEntries.splice(dragIndex, 1);
    newEntries.splice(dropIndex, 0, draggedEntry);

    dispatch({type: "UPDATE_ENTRYORDER", payload: newEntries})
  };

  return (
    <div className={`dailyEntry-container ${selected && "selected"}`} onClick={() => { handleEntrySelection();}}
      style={{border: selected ? `3px solid ${category}` : undefined}}
      draggable
      onDragStart={(event: any) => handleDragStart(event, index)}
      onDragOver={(event: any) => handleDragOver(event, index)}
      onDrop={(event: any) => handleDrop(event, index)}
    >
      <div className="top-container">
        <div className="dailyEntry-icon-container">{icon && <FontAwesomeIcon icon={icon} className="dailyEntry-icon" style={{color: selected ? category : "black"}}/>}</div>
        <div className="dailyEntry-name">{name} </div>
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