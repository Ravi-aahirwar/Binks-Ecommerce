import React from 'react'
import "./Loader.css"
export default function Loader() {
  return (
    <div className='outerLoader' >
      <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}
