'use client'

import React, {useState} from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './support.css'


const Support = () => {
  const [value, setValue] = useState('');

  let quillStyle= {
    "backgroundColor": "red",
    padding: 0,
  }

  let modules = {
    toolbar: false
  }
  console.log(value)
  return (
    <div>
      <button onClick={()=> setValue("boomboomboom")}>boom</button>
      Support Page
      <ReactQuill style={quillStyle} className="quill-container" placeholder="write here" theme="snow" value={value} modules={modules} onChange={setValue} />

    </div>
  )
}

export default Support;