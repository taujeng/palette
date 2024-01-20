'use client'

import React from 'react'
import { useEntryContext } from '../../../context/EntryContext'
import { getDate } from '@/app/utils/dateUtil';
import "./colorPalette.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette } from '@fortawesome/free-solid-svg-icons';

interface ColorPaletteProps {
  status: boolean;
  setStatus: () => void;
}

const ColorPalette = ( {status, setStatus} : ColorPaletteProps ) => {
  const {state, dispatch} = useEntryContext();
//  Default Entries 
// #b5df95 = green = eg. gym = Health and Fitness
// #bb95d4 = purple = eg. feed pet dragon = daily chores
// #92b3dc = blue = eg.classes = School
// #edacee = pink = eg. date night = Event
// #f4f26d = yellow
// #e48b8b = red
// #fea455 = orange

  const paletteData = state[getDate()]?.palette;


  return (
    <div className="colorPalette-container">
      <FontAwesomeIcon icon={faPalette} className="colorPalette-icon" onClick={() => setStatus()} />
      {status &&
      <ul>
        {paletteData && Object.keys(paletteData).map((key:string, i:number) => {
          return <li key={i} className="color-container">
            <div style={{height:"30px", width: "30px", backgroundColor: key}}></div>
            <div className="color-title">{paletteData[key]["title"]}</div>
          </li>
        })}
      </ul>
      }

    </div>
  )
}

export default ColorPalette