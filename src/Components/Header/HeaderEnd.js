import React from 'react'
import Button from '../Button'

export default function HeaderEnd() {
  return (
    <div className='h-full w-60 flex flex-row items-center justify-end gap-2'>
      <Button text={"LogIn"} design={false} id='loginButton' className='py-2' />
      <Button text={"SignUp"} id='signupButton' className='py-2' />
    </div>
  )
}
