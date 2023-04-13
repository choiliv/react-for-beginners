import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({id, coverImg, title, description_full, rating ,genres}) {
                  //부모 component(index.js>app())으로부터 받아온 properties
    return (
    <div>
    <img src={coverImg} alt={title} />
    <h2>
        <Link to={`${process.env.PUBLIC_URL}/movie/${id}`}>{title}</Link>
    </h2>
    <p>{rating}</p>  
    <p>{ description_full.length > 235 ? `${description_full.slice(0, 235)}...`
      : description_full}</p>
    <ul>
     {genres.map((g)=> (
      <li key={g}>{g}</li>
     ))}
    </ul>
    </div>
    );

    Movie.propTypes = {
        id:PropTypes.number.isRequired,
        coverImg: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        description_full: PropTypes.string.isRequired,
        genres: PropTypes.arrayOf(PropTypes.string).isRequired
    };
}



export default Movie;
