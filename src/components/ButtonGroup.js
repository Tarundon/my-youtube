import React from 'react'
import Button from './Button'

const ButtonGroup = () => {

  const buttonList = ["All","Music","Javascript","Mixes","Trailers","Drama","Thoughts","Sales","Cricket","Football"]
  return (
    <div className='flex flex-wrap'>
       {buttonList.map((item) =>
       <Button name={item}/>
       )}
    </div>
  )
}

export default ButtonGroup