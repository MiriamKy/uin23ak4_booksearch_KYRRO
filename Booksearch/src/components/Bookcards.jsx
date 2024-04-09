import Bookcard from "./Bookcard"

export default function Bookcards({books}) { //Books .mappes hvis/så fort den finnes, og skriver ut et bookcard for hver book
    return (
        <section id="bookcards">
            {books?.map((book, index) => (
              <Bookcard //Her defineres props som får nøkkelverdier fra bøkene i books-arrayen (som er basert på søket), og gis dermed tilgang til i bookcard-komponentet
              key={index}
              title={book.title}
              isbn={book.isbn}
              author={book.author_name}
              published={book.first_publish_year}
              rating={book.ratings_average}
              />
            ))}
        </section>
    )
}