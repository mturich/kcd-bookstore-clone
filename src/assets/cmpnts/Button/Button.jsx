import React from 'react'
import clsx from 'clsx'
import './Button.css'

export default function Button(props) {
   const { className, type, children, ...rest } = props
   const classes = clsx('ui-button', className)

   return (
      <>
         <label htmlFor={children}></label>
         <button className={classes} type={type ?? 'button'} {...rest} name={children}>
            {children}
         </button>
      </>
   )
}
