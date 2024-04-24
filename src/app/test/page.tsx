'use client'

import React, {useEffect} from 'react'

const Test = () => {
  useEffect(()=> {
    console.log(process.env.NODE_ENV)
  }, [])
  return (
    <div>
      <h1>welcome to the test page</h1>
    </div>
  )
}

export default Test
