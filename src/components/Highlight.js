import axios from "axios";
import { Card, Container, Row, Col, Image } from "react-bootstrap";
import { useState, useEffect } from "react";

const Highlight = () => {
  const [selectedMovie, setSelectedMovie] = useState([{}]);
  const REACT_APP_IMG_URL = "https://image.tmdb.org/t/p/original";
  useEffect(() => {
    axios({
      method: "get",
      url: "https://api.themoviedb.org/3/movie/popular?api_key=1a0d8643de94a0bdad2ec29735e6c342&language=en-US&page=1",
    }).then(function (response) {
      setSelectedMovie(response.data.results[0]);

    });
  });

  return (
    <Container>
      <div className="main-content">
        <div className="Highlight-content" style={{backgroundImage: `url(${REACT_APP_IMG_URL}${selectedMovie.backdrop_path})`,}}>
            <div className="summaryHighlight">
          <h1 className="titleHighlight">{selectedMovie.title}</h1>
          <p className="overviewHighlight">{selectedMovie.overview}</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Highlight;
