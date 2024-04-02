export default function() { //{book, index} skal inn i function når vi skal bruke de til å mappe ut i html-en
    return (
        // Her hadde jeg egentlig article-tager rundt strukturen min, men flyttet den ut i app fordi Andre sa at jeg måtte det, (kommentarfor å huske)
        <>
        <h2>Hei</h2>
        <ul>
            <li>Første år boken er publisert</li>
            <li>Forfatter</li>
            <li>Gjennomsnittlig rating</li>
        </ul>
        <button>Knapp som leder til Amazon-søk</button>
        </>
    )
}