import React from 'react'
import './Button.css'

function Button({text, btnClass , style , icon , action }) {
  return (
    <div className='button-container'>
        <button style={style ? style : null} className={btnClass} onClick={action}>{icon} {text}</button>
    </div>
  )
}

export default Button