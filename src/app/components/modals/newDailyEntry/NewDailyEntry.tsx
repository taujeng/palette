import React, {useState}  from 'react'
import './newDailyEntry.css'
import IconSelection from '../iconSelection/IconSelection';
import { useEntryContext } from '@/app/context/EntryContext';
import { faCirclePlus, faSplotch, faStop, faCheck, faXmark, faThumbTack, faPaintBrush } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import { IconLookup } from '@fortawesome/fontawesome-svg-core'

interface NewDailyEntryProps {
  showNewEntry: boolean;
  toClose: () => void;
}

const NewDailyEntry = ( {showNewEntry, toClose } : NewDailyEntryProps ) => {
  const {state, dispatch} = useEntryContext()


  const [showIconModal, setShowIconModal] = useState<boolean>(false);
  const [entryText, setEntryText] = useState<string>('');
  const [entryIcon, setEntryIcon] = useState<IconLookup | false>(false);
  const [entryColor, setEntryColor] = useState<string>('');

  if (!showNewEntry) return null;

  const handleNewEntry = (e: React.SyntheticEvent) => {
    e.preventDefault();

    // Add to EntryContext
    dispatch({type: "ADD_ENTRY", name: entryText, icon: entryIcon, color: entryColor})

    toClose();
    setEntryText("");
    setEntryIcon(false);
    setEntryColor("");
  }

  const handleCloseIconModal = () => {
    setShowIconModal(false);
  }
  const handleSelectIcon = (icon: IconLookup) => {
    setEntryIcon(icon);
  }

  return (
      <div className="modal-dailyEntry" onClick={() => toClose()}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <h3>New Entry</h3>
          <form action="submit" onSubmit={handleNewEntry}>
            <label htmlFor="newEntry" style={{display: "none"}}> New Entry </label>
            <input id="newEntry" type="text" value={entryText} onChange={(e) => setEntryText(e.target.value)} maxLength={25} autoFocus required/>

            <div className="modal-icon-choices">
              <div className="modal-icon-holder" onClick={()=> setShowIconModal(true)}>
                {entryIcon &&
                  <FontAwesomeIcon icon={entryIcon} className="modal-icon-selection"/>
                }
              </div>
              <IconSelection isOpen={showIconModal} toClose={handleCloseIconModal} selectIcon={handleSelectIcon}/>
            </div>
            <div className="modal-color-selector">
              <h6>Select a color category:</h6>
              <div className="modal-color-choices">
                <div className="modal-color-wrapper">
                  {entryColor === "red" && <span className="scribble"></span>}
                  <FontAwesomeIcon icon={faStop} className="color-icon color-red" 
                  onClick={() => setEntryColor("red")}/>
                </div>
                <div className="modal-color-wrapper">
                  {entryColor === "#03c04a" && <span className="scribble"></span>}
                  <FontAwesomeIcon icon={faStop} className="color-icon color-green"
                  onClick={() => setEntryColor("#03c04a")}/>
                </div>
                <div className="modal-color-wrapper">
                  {entryColor === "blue" && <span className="scribble"></span>}
                  <FontAwesomeIcon icon={faStop} className="color-icon color-blue"
                onClick={() => setEntryColor("blue")}/>
                </div>
              </div>
            </div>
            <div className="modal-end">
              <button onClick={() => toClose()}>
                <FontAwesomeIcon icon={faXmark} className="submit-icon"/>
              </button>
              <button type="submit">
                <FontAwesomeIcon icon={faCheck} className="submit-icon"/>
              </button>
          </div>
          </form>
        </div>
      </div>
  )
}

export default NewDailyEntry