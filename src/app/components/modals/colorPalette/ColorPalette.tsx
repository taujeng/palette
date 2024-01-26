'use client'

import React, {useState, useEffect} from 'react'
import { useEntryContext } from '../../../context/EntryContext'
import { getDate } from '@/app/utils/dateUtil';
import "./colorPalette.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette, faPaintBrush } from '@fortawesome/free-solid-svg-icons';

interface ColorPaletteProps {
  status: boolean;
  setStatus: () => void;
}

const ColorPalette = ( {status, setStatus} : ColorPaletteProps ) => {
  const {state, dispatch} = useEntryContext();

  const [editMode, setEditMode] = useState(false);
  const [paletteState, setPaletteState] = useState(state[getDate()]?.palette)

  // Rendering based off the context state, but we also want a local state to keep track of 
  // changes. If the user saves, then the changes will be dispatched to the context state


  //  Default Entries 
  // #b5df95 = green = eg. gym = Health and Fitness
  // #bb95d4 = purple = eg. feed pet dragon = daily chores
  // #92b3dc = blue = eg.classes = School
  // #edacee = pink = eg. date night = Event
  // #f4f26d = yellow
  // #e48b8b = red
  // #fea455 = orange


  const handleChange = (color:string, newValue:string) => {
    const prevCopy = {...paletteState}
    const newCopy = {...prevCopy, [color]: {...prevCopy[color], title: newValue}}
    setPaletteState(newCopy)
  }

  const handlePaintBrush = () => {
    if (editMode) {
      // If leaving edit mode, then save changes to Context State
      dispatch({type: "UPDATE_COLORPALETTE", payload: paletteState})
    }
    setEditMode(!editMode)
  }


  return (
    <div className="colorPalette-container">
      <div className="colorPalette-icon-container">
        <FontAwesomeIcon title="color palette" icon={faPalette} className="colorPalette-icon" onClick={() => setStatus()} />
        {status && <FontAwesomeIcon title={editMode ? "save" : "edit"} icon={faPaintBrush} className="colorPalette-icon brush"
         onClick={() => handlePaintBrush()} />}
      </div>
      {status &&
      <ul>
        {paletteState && Object.keys(paletteState).map((key:string, i:number) => {
          return <li key={i}>
            <div style={{height:"30px", width: "30px", backgroundColor: key}}></div>
            {!editMode ? (<div className="color-title">{paletteState[key]["title"]}</div>)
            :
            (<input type="text" value={paletteState ? paletteState[key]["title"] : ""} onChange={(e)=> handleChange(key, e.target.value)} maxLength={25}></input>)}
          </li>
        })}
      </ul>
      }

    </div>
  )
}

export default ColorPalette