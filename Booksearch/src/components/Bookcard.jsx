export default function Bookcard({keyProp, title, isbn, author, published, rating }) {
    
    return ( //HTML-utskrift for hvert artikkelkort, med nøkkelinformasjon som er blitt sendt med props fra bookcards-komponentet
        <article key={keyProp} id="bookcard">
            <div className="imageContainer">
                {isbn ? <img src={`https://covers.openlibrary.org/b/isbn/${isbn?.[0]}-M.jpg`}/> : <h3>No image to show</h3>} {/* Henter bilder fra APIet med metode beskrevet i dokumentasjonen for OpenLibrary, og skriver en beskjed til leser hvis bilde ikke finnes. Ikke fått feilsøkt nok hvorfor dette ikke fungerer optimalt*/}
            </div>
            <h2>{title}</h2>
            <h3>Author(s):</h3>
            <ul>{author?.map((author, index) => <li key={index}>{author}</li>)}</ul> {/* .mapper igjen fordi bøkene kan ha flere forfattere, og skriver et listepunkt for hver forfatter */}
            <h3>Published: {published}</h3>
            {rating ? <h3>Rating: {rating}</h3> : null} {/* Ikke alle bøkene har rating, så sjekker dette og bestemmer at ingenting skal skrives dersom rating ikke finnes */}
            {isbn ? <a href={`https://www.amazon.com/s?k=${isbn[0]}`}><button>Buy on Amazon</button></a> : <a href={`https://www.amazon.com/b?node=283155`}><button>Find on Amazon</button></a>} {/* Sjekker om isbn finnes, og skriver ut knapp med link til produktet på amazon - om den finnes. Hvis ikke skrives ut en knapp med link til amazon sin bokside */}
        </article>
    )
}