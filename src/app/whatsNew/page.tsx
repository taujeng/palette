import React from 'react'
import WhatsNewNote from './whatsNewNote/WhatsNewNote';
import './whatsNew.css'

const WhatsNew = () => {
  const patch = require('../../../docs/patch/patch');
  return (
    <div className="whatsNew-container">
      <h1>
        {`What's New?`}
      </h1>
      {patch.map((item: object, i:number) => <WhatsNewNote key={i} note={item}/>)}
    </div>
  )
}

export default WhatsNew;