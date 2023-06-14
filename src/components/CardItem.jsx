import React from 'react'
import useGAEventTracker from '../hooks/useGAEventTracker';

const CardItem = ({item}) => {

  const GAEventsTracker = useGAEventTracker("Product items");
  return (
    <div className=' flex flex-row justify-between items-center bg-slate-500 p-4 w-[80%]' onClick={(e) =>GAEventsTracker("item clicked", `${item.name}`)}>
        <p className='text-xl'>{item.name}</p>
        <p className='text-md'>{item.price}</p>
    </div>
  )
}

export default CardItem