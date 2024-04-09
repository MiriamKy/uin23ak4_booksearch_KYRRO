import { useEffect, useState } from "react";

export default function Search_results({setBooks}) {

    const [input, setInput] = useState("James+Bond"); //State som skal få innhold fra input-feltet når funksjonen setInput kalles, med James Bond som forhånds-satt verdi

    const getBooks = ()=>{ //Fetch-funksjon ved navn getBooks...
        fetch(`https://openlibrary.org/search.json?title=${input}`)//...som henter data fra API-et ved hjelp av input-variabelen/staten
        .then(response => response.json()) //...konverterer dataene fra OpenLibrary til JSON-format
        .then(data => setBooks(data.docs)) //...dataene(arrayen docs fra API-et) settes inn i staten "books" når funksjonen setBooks kalles
        .catch(error => console.error(error)) //...catch-metoden kjører og skriver en error til konsollen bare hvis den fanger noe feil i prosessen over
        }

    useEffect(()=>{ //useEffect oppdaterer staten "books" (kaller getBooks, som igjen kalles setBooks) hvis antall bokstaver i input-feltet er større enn 2
        if (input.length > 2) {
        getBooks()
    }},[input]) //"Input"-staten mellom firkantparentesene bestemmer av funksjonen skal kjøre på nytt hver gang input-staten endres...
    //... altså hver gang det skrives en ny bokstav i feltet, men den vil ikke fetche eller oppdatere "books" før det er minst 2 bokstaver skrevet inn

    return ( //HTML-utskrift av header-elementet på siden, som inneholder tittel og input-felt
        <header id="searchBar">
          <h1>Booksearch</h1>
          <form>
            <label htmlFor="bookSearch">Search by title</label>
            <input onChange={(e) => setInput(e.target.value)} type="text" placeholder="Start typing..."/> {/* Ved endring (onChange) i input-feltet kalles setInput for å oppdatere input-staten med verdien i feltet */}
            <button type="button" onClick={() => getBooks()}>Search</button> {/* Ved klikk (onClick) på knappen kalles getBooks igjen, men dette er egentlig helt overflødig, siden søkeresultatene ved hjelp av useEffect allerede har begynt å renne inn når bruker er ferdig å skrive. Lar det stå slik fordi det er standard å ha knapp*/}
          </form>
        </header>
    )
}