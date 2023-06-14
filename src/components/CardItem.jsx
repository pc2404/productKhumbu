import React from 'react'

const CardItem = ({item}) => {
  return (
    <div className=' flex flex-row justify-between items-center bg-slate-500 p-4 w-[80%]'>
        <p className='text-xl'>{item.name}</p>
        <p className='text-md'>{item.price}</p>
    </div>
  )
}

export default CardItem