import React from 'react'
import Input from '../Input'
import Button from '../Button'

export default function SubscribeForm({className=""}) {
  return (
    <div className={`${className}`}>
      <h5 className='text-4xl font-semibold'>Subscribe to our monthly newsletter</h5>
      <form action="#" method='post' className='bg-white rounded-full px-6 py-4 flex flex-row items-center justify-center flex-grow md:max-w-[50%]'>
        <Input placeholder='Your email address...' id={"subscriberEmail"} inputName={"subscriberEmail"} inputType={"email"} className='text-lg border-none outline-none text-slate-800 flex-grow' />
        <Button text={"SUBSCRIBE"} />
      </form>
    </div>
  )
}
