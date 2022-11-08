//import React from 'react'
import { useEffect, useState } from 'react'
import './App.css'
import InputField from './assets/cmpnts/InputField/InputField'
import Button from './assets/cmpnts/Button/Button'

function LoginPage() {
   const LOGIN_BTN = 'Login'
   const REGISTER_BTN = 'Register'
   const [registerField, setRegisterField] = useState(false)

   useEffect(() => {
      console.log(registerField)
   })

   const handleOnClick = event => {
      let buttonText = event.target.textContent
      if (buttonText === LOGIN_BTN) setRegisterField(false)
      else if (buttonText === REGISTER_BTN) setRegisterField(true)
      else
         console.error(
            `Wrong state: ${event.target.textContent} as ${typeof event.target
               .textContent}`
         )
   }
   const handleSubmit = event => {
      event.preventDefault()
      console.dir(event.target.elements)
   }

   return (
      <>
         <h1 style={{ color: 'white' }}>Book store</h1>
         <div style={{ margin: '1rem', display: 'flex' }}>
            <form onSubmit={handleSubmit}>
               {registerField ? (
                  <>
                     <InputField type={'text'} labelname={'First Name'} />
                     <InputField type={'text'} labelname={'Last Name'} />
                  </>
               ) : null}
               <InputField type={'email'} labelname={'Email'} />
               <InputField type={'password'} labelname={'Password'} />
               <Button onClick={handleOnClick}>{LOGIN_BTN}</Button>
            </form>
         </div>
         <div>
            <Button onClick={handleOnClick}>{REGISTER_BTN}</Button>
         </div>
      </>
   )
}

export default LoginPage
