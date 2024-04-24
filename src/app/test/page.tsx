'use client'
import { notFound } from 'next/navigation'
import React, {useEffect} from 'react'
import './test.css'
import JournalLayout from '../components/journalLayout/JournalLayout'

const Test = () => {
  useEffect(()=> {
    if (process.env.NODE_ENV !== "development") {
      notFound();
    }
  }, [])
  return (
    <div className="test-container">
      <JournalLayout>
        <h1>welcome to the test page</h1>

      </JournalLayout>
    </div>
  )
}

export default Test
