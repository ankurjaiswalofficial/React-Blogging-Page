import React from 'react'

export default function Button({text, id="", buttonType="button", design=true, className="", style={}}) {
  const _text = String(text).toUpperCase();
  return (
    <button type={buttonType} id={id} className={`p-4 px-10 ${design ? "bg-indigo-800 text-white" : ""} hover:shadow-lg transition-shadow duration-200 rounded-full ${className}`} style={style}>
      {design ? _text : <span className='border-b-4 border-red-800'>
        {_text}
        </span>}
    </button>
  )
}
