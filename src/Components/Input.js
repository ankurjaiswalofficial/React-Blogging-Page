import React from 'react'

export default function Input({ id, inputName, inputType="text", placeholder="", className="", style={}}) {
  return (
    <input type={inputType} name={inputName} placeholder={placeholder} className={`${className}`} style={style} />
  )
}
