import React from 'react'

export default function Link({text, id="", href="#", className="", style={}}) {
  return (
    <a href={href} id={id} className={`p-4 px-10 bg-indigo-800 text-white rounded-full ${className}`} style={style}>
      {text}
    </a>
  )
}
