import React from 'react'

function Card({children}:JsxChildren) {
  return (
    <div className='card'>
        { children }
    </div>
  )
}

export default Card