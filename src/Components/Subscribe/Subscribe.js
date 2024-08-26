import React from 'react'
import SubscribeForm from './SubscribeForm';

export default function Subscribe() {
  const image = "https://images.unsplash.com/photo-1636347121519-816e8d7e3e10?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className='relative bg-gray-200 w-full h-[13rem] overflow-hidden'>
      <figure className='w-full h-full'>
        <img src={image} alt="Background" className='w-full h-full object-cover' />
      </figure>
      <SubscribeForm className={"absolute w-full h-full top-0 left-0 bg-gray-200 bg-opacity-20 flex flex-row flex-wrap items-center justify-center gap-5 px-28"} />
    </div>
  )
}
