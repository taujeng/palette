import React from 'react'
import './whatsNewNote.css'

interface WhatsNewNoteProps {
  note: {[key: string] : any};
}

const WhatsNewNote = ({note} : WhatsNewNoteProps) => {
  return (
    <div className="whatsNewNote-container">
      <h3>{note.date}: {note.title}</h3>
      <ul>
        {note.content.map((item: string, i: number) => (<li key={i}>{item}</li>))}
      </ul>
    </div>
  )
}

export default WhatsNewNote