import React from 'react'
import './button.css'

const Button = ({ title, onClick, className, type }) => {
  return (
    <div className='btn_shared'>
      <button
        type={type}
        onClick={onClick}
        className={`${className}`}
      >{title}</button>
    </div>
  )
}

export default Button