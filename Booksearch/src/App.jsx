import { useState } from "react";
import './scss/style.scss'
import Bookcards from "./components/Bookcards";
import Search_results from "./components/Search_results";

function App() { 

  const [books, setBooks] = useState([]); //Deklarerer staten books, som foreløpig er en tom array(derfor firkantparenteser i parentesen etter useState)

  return (
    <>
      <main>
        <Search_results setBooks={setBooks} /> {/* Arrayen får innhold når setBooks-funksjonen blir kallet i search_results, derfor sendt som prop litt lenger ned */}
        <Bookcards books={books}/> {/* Books blir sendt som prop til bookcards fordi den der blir .mappet */}
      </main>
    </>
  )
}

export default App