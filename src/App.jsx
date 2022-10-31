import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
   const [bookCount, setBookCount] = useState(0)

   return (
      <div className='App'>
         <h1>This is my Book List</h1>

         <form>
            <label htmlFor='bookName'></label>
            <input type='text' id='bookName' placeholder='Type in the book you want to store'/>
         </form>

         <div className='card'>
            <button onClick={() => setBookCount(bookCount => bookCount + 1)}>
               count is {bookCount}
            </button>
         </div>
      </div>
   )
}

export default App
