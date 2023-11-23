import React from 'react'
import { Link } from 'react-router-dom'

const SingleReadBook = () => {
  return (
    <div className='max-w-[220px] h-auto inline-block m-2'>
      <div className='w-full h-auto p-2 shadow-4xl rounded-md'>
      <div>
          <img src={'https://avatars3.githubusercontent.com/u/2763884?s=128'} alt="Book" className="w-[150px] h-[200px] m-auto" />
        </div>
        <div>
          <h1 className=" text-base font-semibold mb-2">
            Book hello world - 2024 - (404943)
          </h1>
          <Link
            className={`px-4 py-2 text-center text-md shadow  hover:bg-[#29b6e0] bg-[#00B1E9] text-white transition duration-300 rounded-md flex items-center align-middle justify-center`}
            href={"/"}
          >
            <span className="w-full h-auto text-center">Read Again</span>
          </Link>
        </div>


      </div>
    </div>
  )
}

export default SingleReadBook