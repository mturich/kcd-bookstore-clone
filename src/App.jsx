import { useState, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './App.css'

function App() {
   const [bookStore, setBookStore] = useState(['tefdasst'])
   const input = useRef('')

   const handleSubmit = event => {
      event.preventDefault()
      console.log('clicked')
      // let inputBook = event.target.elements[0].value
      // let inputBook = event.target.elements[0].value
      console.dir(event.target)
      console.dir(event.target.elements.bookName.value)
      setBookStore(prevState => [
         ...prevState,
         event.target.elements.bookName.value,
      ])
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

         {bookStore.length !== 0 ? (
            <ul>
               {bookStore.map(book => (
                  <li key={uuidv4()}>{book}</li>
               ))}
            </ul>
         ) : (
            <div>There is currently no book in store!</div>
         )}
      </div>
   )
}

export default App
