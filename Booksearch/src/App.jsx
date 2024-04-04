import './App.css'
import Layout from './components/Layout'
import { useEffect, useState } from "react";

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
      <Layout>  
      <h1>Booksearch</h1>
        <form>
            <label htmlFor="bookSearch">Search by title</label>
            <input onChange={(e) => setInput(e.target.value)} type="text" placeholder="Start typing..."/>
            <button type="button" onClick={() => getBooks()}>Search</button> 
        </form>
        {books?.map((book) => {
          return (
            <article key={book.key}>
            <h2>{book.title}</h2>
            <h3>Author(s):</h3>
            <ul>{book.author_name?.map((author, index) => <li key={index}>{author}</li>)}</ul>
            <h3>Published: {book.first_publish_year}</h3>
            {book.ratings_average ? <h3>Rating: {book.ratings_average}</h3> : null}
            {book.isbn?.[0] ? <a href={`https://www.amazon.com/s?k=${book.isbn[0]}`} target="_blank"><button>Buy on Amazon</button></a> : <a href={`https://www.amazon.com/b?node=283155`} target="_blank"><button>Find on Amazon</button></a>}
            </article>
          )
        })}
      </Layout>
    </>
  )
}

export default App

// {book.cover_i ? (<img src={https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg} />) : (<p className="noimage">No image available</p>)} // Hvordan Line hentet bilder fra API
// {{item.isbn?.[0] ? <a href={https://www.amazon.com/s?k=${item.isbn[0]}} target="_blank">Buy me at Amazon</a> : null} // Hvordan Line mappet ut fra isbn-arrayen og laget en knapp med link til amazon
