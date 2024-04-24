import React from 'react'

const JournalLayout = ( {children} : any ) => {
  return (
    <div>
      <div className="tab-container">
        <ul>
          <li>day</li>
          <li>week</li>
          <li>month</li>
        </ul>
      </div>
      {children}
    </div>
  )
}

export default JournalLayout