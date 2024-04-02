import Bookcard from "./Bookcard";

export default function() { // Her må det legges inn en parameter/prop som får inn verdien fra app

    return (
        // Her må jeg mappe for å skrive ut et "Bookcard" for hver bok som stemmer med søkeresultatet
        <>
        <article><Bookcard /></article> {/* "book={book} key={index}" skal inn i bookcard når vi trenger dem som props */}
        </>
    )
}