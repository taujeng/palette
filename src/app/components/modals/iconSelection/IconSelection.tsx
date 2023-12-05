import React from 'react'
import './iconSelection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { popularList, productiveList, activityList, petList, miscList} from '../../../../../docs/data/icons/iconList'



const IconSelection = ( { isOpen, toClose, selectIcon } ) => {
  if (!isOpen) return null;

  const handleSelectIcon = (icon) => {
    selectIcon(icon);
    console.log(icon)
    toClose();
  }

  return (
    <div className="iconSelection-container" onClick={()=> toClose()}> 
      <div className="iconSelection-content" onClick={(e)=> {e.stopPropagation()}}>
        <p>popular: </p>
        <div className="iconSelection-array">
          {popularList.map((icon, i) => <button onClick={()=>handleSelectIcon(icon)} key={i}><FontAwesomeIcon icon={icon} className="iconSelection-icon" /></button>)}
        </div>
        <p>productivity: </p>
        <div className="iconSelection-array">
          {productiveList.map((icon, i) => <button onClick={()=>handleSelectIcon(icon)}  key={i}><FontAwesomeIcon icon={icon} className="iconSelection-icon" /></button>)}
        </div>
        <p>activity:</p>
        <div className="iconSelection-array">
          {activityList.map((icon, i) => <button onClick={()=>handleSelectIcon(icon)}  key={i}><FontAwesomeIcon icon={icon} className="iconSelection-icon" /></button>)}
        </div>
        <p>pet:</p>
        <div className="iconSelection-array">
          {petList.map((icon, i) => <button onClick={()=>handleSelectIcon(icon)}  key={i}><FontAwesomeIcon icon={icon} className="iconSelection-icon"  /></button>)}
        </div>
        <p>misc:</p>
        <div className="iconSelection-array">
          {miscList.map((icon, i) => <button onClick={()=>handleSelectIcon(icon)}  key={i}><FontAwesomeIcon icon={icon} className="iconSelection-icon"/></button>)}
        </div>
        
      </div>
    </div>
  )
}

export default IconSelection