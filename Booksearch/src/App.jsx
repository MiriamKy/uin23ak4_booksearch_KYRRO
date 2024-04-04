import './App.css'
import Layout from './components/Layout'
import { useEffect, useState } from "react";

function App() {

  const [input, setInput] = useState("Guyion"); //setInput er KANSKJE den funskjonen vi bruker senere for å definere ny state ved hjelp av input-feltet
  const [books, setBooks] = useState([]); //Books kommer i bruk i .map

  const getBooks = ()=>{
      fetch(`https://openlibrary.org/search.json?q=${input}`)
      .then(response => response.json())
      .then(data => setBooks(data.docs))
      .catch(error => console.error(error))
      }

  useEffect(()=>{
    getBooks()
  },[])

  const countLetters = (e)=>{
    if (e.target.value.length < 3) {
      console.log("Waiting for letters")
    }
    else {
      setInput()
    }
  }

  const handleChange = (e)=>{
    setInput(e.target.value)
}

  const results = books.filter((book) => book.title == input)

  console.log(input)
  console.log(results)

  // const key = books.isbn.filter((index) = index < 1) // Prøvd å lage en variabel som skal holde på en unik key for hvert element som blir skrevet ut, derfor har jeg prøvd å bruke .filter for å filtrere bort alle andre listepunkter enn de med index 0

  return (
    <>
      <Layout>  
      <h1>Booksearch</h1>
        <form>
            <label htmlFor="bookSearch">Search by title</label>
            <input value={input} onChange={handleChange} type="text" placeholder="James Bond"/>
            <button type="submit">Search</button> 
        </form>
        {/* Her kan jeg legge en slik loading ? som skriver ut en string når siden loader etter søkeresultater */}
        {books.map(book => {
          return (
            <article key={book.key}>
            <h2>{book.title}</h2>
            <h3>{book.first_publish_year}</h3>
            <p></p>
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
