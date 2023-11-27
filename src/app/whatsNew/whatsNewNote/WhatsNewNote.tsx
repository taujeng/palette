import React from 'react'
import './whatsNewNote.css'

const WhatsNewNote = ({note}) => {
  return (
    <div className="whatsNewNote-container">
      <h3>{note.date}: {note.title}</h3>
      <ul>
        {note.content.map((item, i) => (<li key={i}>{item}</li>))}
      </ul>
    </div>
  )
}

export default WhatsNewNote