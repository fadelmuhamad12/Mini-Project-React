import { useEffect, useState } from "react";
import { Card, Container, Row, Col, Image } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";


const Favorite = ({setShowMovie}) => {
  const [popular, setPopular] = useState([]);
  

  useEffect(() => {
    axios({
      method: "get",
      url: "https://api.themoviedb.org/3/movie/popular?api_key=1a0d8643de94a0bdad2ec29735e6c342&language=en-US&page=1",
    }).then(function (response) {
      setPopular(response.data.results);
    });
  });



  return (
    <div className="FavoriteMovies">
      <Container>
        <Row>
          <h1 className="favoritemovies mt-4">Popular</h1>
          <Link to="/movies" className="text-decoration-none seemore d-flex">See More</Link>

          {popular.slice(0,12).map((result) => {
            return (
              <Col xs={6} s={4}sm={4} md={4} lg={3} xl={2} className="MoviesWrapper justify-content-center text-align-center d-flex mt-3 " >
               
                <Card className="text-center cards bg-transparent" onClick={()=> setShowMovie(result)} >
                  <div className="listcard" >
                    <Image
                      src={`${process.env.REACT_APP_IMG_URL}/${result.poster_path}`}
                      alt="Obx"
                      className="moviecardImages rounded"
                    />
                    <div className="judul mt-2">
                      <Card.Title> {result.title}</Card.Title>
                    </div>
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

export default Favorite;
