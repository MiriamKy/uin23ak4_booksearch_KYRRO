import Bookcard from "./Bookcard";

export default function Search_results() {

    return (
        // Her må jeg mappe for å skrive ut et "Bookcard" for hver bok som stemmer med søkeresultatet
        <>
        <article><Bookcard /></article> {/* "book={book} key={index}" skal inn i bookcard når vi trenger dem som props */}
        </>
    )
}