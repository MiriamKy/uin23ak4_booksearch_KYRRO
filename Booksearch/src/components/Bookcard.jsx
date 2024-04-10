export default function Bookcard({keyProp, title, isbn, author, published, rating }) {
    
    return ( //HTML-utskrift for hvert artikkelkort, med nøkkelinformasjon som er blitt sendt med props fra bookcards-komponentet
        <article key={keyProp} id="bookcard">
            <div className="imageContainer">
                {isbn ? <img src={`https://covers.openlibrary.org/b/isbn/${isbn?.[0]}-M.jpg`}/> : <h3>No image to show</h3>} {/* Henter bilder fra APIet med metode beskrevet i dokumentasjonen for OpenLibrary, og skriver en beskjed til leser hvis bilde ikke finnes. Ikke fått feilsøkt nok hvorfor dette ikke fungerer optimalt*/}
            </div>
            <h2>{title}</h2>
            <h4>Written by:</h4>
            <ul>{author?.map((author, index) => <li key={index}>{author}</li>)}</ul> {/* .mapper igjen fordi bøkene kan ha flere forfattere, og skriver et listepunkt for hver forfatter */}
            <h4>First published:</h4>
            <h3>{published}</h3>
            <h4>Rating:</h4>
            {rating ? <h3>{rating}</h3> : <h3>Nobody rated yet</h3>} {/* Ikke alle bøkene har rating, så sjekker dette og definerer en tekststreng for utskrift når det ikke finnes rating */}
            {isbn ? <a href={`https://www.amazon.com/s?k=${isbn[0]}`}><button>Buy on Amazon</button></a> : <a href={`https://www.amazon.com/b?node=283155`}><button>Find on Amazon</button></a>} {/* Sjekker om isbn finnes, og skriver ut knapp med link til produktet på amazon - om den finnes. Hvis ikke skrives ut en knapp med link til amazon sin bokside */}
        </article>
    )
}