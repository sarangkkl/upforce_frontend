import React from 'react'

const Chip = ({text}) => {
  return (
    <>
        <div class="flex justify-center items-center m-1 font-medium py-1 px-2 rounded-full text-gray-700 bg-gray-100 border border-gray-300 ">
            <div class="text-xs font-normal leading-none max-w-full flex-initial">{text}</div>
        </div>
    </>
  )
}

export default Chip