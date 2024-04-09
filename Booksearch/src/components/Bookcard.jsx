export default function Bookcard({key, title, isbn, author, published, rating }) { //{book, index} skal inn i function når vi skal bruke de til å mappe ut i html-en
    
    return (
        // Her hadde jeg egentlig article-tager rundt strukturen min, men flyttet den ut i app fordi Andre sa at jeg måtte det, (kommentarfor å huske)
        <>
        <article key={key} id="bookcard">
                <div className="imageContainer">
                {isbn ? <img src={`https://covers.openlibrary.org/b/isbn/${isbn?.[0]}-M.jpg`}/>  : <h3>No image to show</h3>}
                </div>
                <h2>{title}</h2>
                <h3>Author(s):</h3>
                <ul>{author?.map((author, index) => <li key={index}>{author}</li>)}</ul>
                <h3>Published: {published}</h3>
                {rating ? <h3>Rating: {rating}</h3> : null}
                {isbn ? <a href={`https://www.amazon.com/s?k=${isbn[0]}`}><button>Buy on Amazon</button></a> : <a href={`https://www.amazon.com/b?node=283155`} target="_blank"><button>Find on Amazon</button></a>}
        </article>
        </>
    )
}