import axios from "axios";
import { useEffect } from "react";

const Highlight = ({showMovie, setShowMovie}) => {
  
  const REACT_APP_IMG_URL = "https://image.tmdb.org/t/p/original";
  useEffect(() => {
    axios({
      method: "get",
      url: "https://api.themoviedb.org/3/movie/popular?api_key=1a0d8643de94a0bdad2ec29735e6c342&language=en-US&page=1",
    }).then(function (response) {
      setShowMovie(response.data.results[0]);

    });
  }, []);

  return (
   
      <div className="main-content">
        <div className="Highlight-content" style={{backgroundImage: `url(${REACT_APP_IMG_URL}${showMovie.backdrop_path})`,}}>
            <div className="summaryHighlight">
          <h1 className="titleHighlight">{showMovie.title}</h1>
          <p className="overviewHighlight">{showMovie.overview}</p>
          <p className="overviewHighlight">Rating: {showMovie.popularity}</p>
          <p className="overviewHighlight">Id: {showMovie.id}</p>

          </div>
        </div>
      </div>
    
  );
};

export default Highlight;
