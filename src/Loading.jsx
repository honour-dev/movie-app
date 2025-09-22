import React from 'react'

const Loading = () => {
  return (
    <div className='flex justify-center items-center h-[70vh]'>
      <div className='h-[3rem] w-[3rem] border-lime-700 border-t-transparent rounded-full animate-spin'></div>
    </div>
  )
}

export default Loading