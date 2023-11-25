import React from 'react'
import AccessBookHeader from '../Components/AccessBook/AccessBookHeader'
import AccessBookSearchBook from '../Components/AccessBook/AccessBookSearchBook'
import AccessBookBody from '../Components/AccessBook/AccessBookBody'

const AccessBook = () => {
  return (
    <div className="w-full h-auto">
    <AccessBookSearchBook />
    <AccessBookHeader />
    <AccessBookBody />
  </div>
  )
}

export default AccessBook