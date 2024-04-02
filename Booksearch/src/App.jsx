import './App.css'
import Layout from './components/Layout'
import Search_results from './components/Search_results'
import { Routes, Route } from "react-router-dom"
import { useEffect, useState } from "react";

function App() {

  const [searchInput, setSearchInput] = useState("James+Bond"); //setSearchInput er KANSKJE den funskjonen vi bruker senere for å definere ny state ved hjelp av input-feltet
  const [books, setBooks] = useState([]); //Books kommer i bruk i .map

  const getBooks = async()=>{
      fetch(`https://openlibrary.org/search.json?q=${searchInput}`)
      .then(response => response.json())
      .then(data => setBooks(data.docs))
      .catch(error => console.error(error))
      }

  useEffect(()=>{
    getBooks()
  },[])

  return (
    <>
      <Layout>
        {/* Her kan jeg legge en slik loading ? som skriver ut en string når siden loader etter søkeresultater */}
        <Routes>
          <Route path="/" element={<Search_results /> }/> {/* books={books} skal inn for å prope videre til search-results mår jeg begynner å mappe */}
        </Routes>
      </Layout>
    </>
  )
}

export default App
