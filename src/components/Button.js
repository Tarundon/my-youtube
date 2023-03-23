import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className='px-3 py-1 m-2 rounded-2xl  bg-gray-200 hover:bg-gray-400'>{name}</button>
    </div>
  )
}

export default Button