import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const TopRatedMovies = ({ setShowMovie }) => {
  const REACT_APP_IMG_URL = "https://image.tmdb.org/t/p/w500";
  const [topRated, setTopRated] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://api.themoviedb.org/3/movie/top_rated?api_key=1a0d8643de94a0bdad2ec29735e6c342&language=en-US&page=1",
    }).then(function (response) {
      setTopRated(response.data.results);
    });
  });

  return (
    <div className="TopRatedMovies">
      <Container>
        <Row>
         
          <h1 className="favoritemovies mt-4 d-flex">Top Rated</h1>
          <Link to="/series" className="text-decoration-none seemore d-flex">See More</Link>
          {topRated.slice(0,6).map((result,index) => {
            return (
              <Col  
              xs={6}
              s={4}
              sm={4}
              md={4}
              lg={3}
              xl={2} className="MoviesWrapper justify-content-center text-align-center d-flex mt-3" key={index}>
                <Card className="text-center cards bg-transparent" onClick={()=>setShowMovie(result)}>
                  <div className="listcard">
                    <Image
                      src={`${REACT_APP_IMG_URL}/${result.poster_path}`}
                      className= "moviecardImages rounded"
                    ></Image>
                  </div>
                  <div className="judul mt-2">
                      <Card.Title>{result.title}</Card.Title>
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default TopRatedMovies;
