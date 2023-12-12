import React from 'react'
import CardSlider from '../../Utils/CardSlider'
import SingleReadBook from './SingleReadBook'
import { readedBookResponsive } from '../../Data/cardSlider'

const SecondBookBox = () => {
  return (
   <div className="w-full h-auto p-3 shadow-4xl rounded-lg">
   
   <h1 className=" pl-1 text-xl font-semibold text-gray-900 italic border-b border-gray-500">
     Readed Book
   </h1>

 <div className="w-full h-auto text-center">
   <CardSlider coustomResponsive={readedBookResponsive} infinite={false}>
     <SingleReadBook />
     <SingleReadBook />
     <SingleReadBook />
     <SingleReadBook />
     <SingleReadBook />
     <SingleReadBook />
     <SingleReadBook />
   </CardSlider>
 </div>
</div>
  )
}

export default SecondBookBox