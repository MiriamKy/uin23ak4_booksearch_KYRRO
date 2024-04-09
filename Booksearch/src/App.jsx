import { useEffect, useState } from "react";
import './scss/style.scss'
import Bookcard from "./components/Bookcard";

function App() {

  const [input, setInput] = useState("James+Bond"); //setInput er KANSKJE den funskjonen vi bruker senere for å sette ny state ved hjelp av input-feltet
  const [books, setBooks] = useState([]); //Books er en state som jeg senere .mapper, her har den ingen start-innhold, men den er satt til en tom array

  const getBooks = ()=>{
      fetch(`https://openlibrary.org/search.json?title=${input}`)
      .then(response => response.json())
      .then(data => setBooks(data.docs))
      .catch(error => console.error(error))
      }

  useEffect(()=>{
    if (input.length > 2) {
      getBooks()
    }},[input])

  console.log(input)
  console.log(books)

  return (
    <>
      <main>
        <header id="searchBar">
        <h1>Booksearch</h1>
        <form>
            <label htmlFor="bookSearch">Search by title</label>
            <input onChange={(e) => setInput(e.target.value)} type="text" placeholder="Start typing..."/>
            <button type="button" onClick={() => getBooks()}>Search</button> 
        </form>
        </header>
        <section id="bookcards">
              {books?.map((book, index) => (
              <Bookcard
              key={index}
              title={book.title}
              isbn={book.isbn}
              author={book.author_name}
              published={book.first_publish_year}
              rating={book.ratings_average}
              />
              ))}
          </section>
        </main>
    </>
  )
}

export default App