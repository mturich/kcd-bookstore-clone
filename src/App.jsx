import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
   const [bookCount, setBookCount] = useState(0)
   const [bookStore, setBookStore] = useState(['tefdasst'])
   const input = useRef('')

   const handleSubmit = event => {
      event.preventDefault()
      //console.log('clicked')
      const newBookStore = [...bookStore, input.current.value]
      setBookStore(prev => newBookStore)
   }

   return (
      <div className='App'>
         <h1>
            {`This is my Book List with 
              ${bookStore?.length > 0 ? bookStore.length : 0} books`}
         </h1>

         <form onSubmit={handleSubmit}>
            <label htmlFor='bookName'></label>
            <input
               ref={input}
               type='text'
               id='bookName'
               placeholder='Type in the book you want to store'
            />
            <button type='submit'>Add to list</button>
         </form>

         <ul>
            {bookStore.length !== 0 ? (
               <ul>
                  {bookStore.map(book => (
                     <li key={book}>{book}</li>
                  ))}
               </ul>
            ) : (
               <div>There is currently no book in store!</div>
            )}
         </ul>
      </div>
   )
}

export default App
