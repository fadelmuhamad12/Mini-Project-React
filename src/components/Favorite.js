import { useEffect, useState } from "react";
import { Card, Container, Row, Col, Image } from "react-bootstrap";
import axios from "axios";

const Favorite = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://api.themoviedb.org/3/movie/popular?api_key=1a0d8643de94a0bdad2ec29735e6c342&language=en-US&page=1",
    }).then(function (response) {
      setPopular(response.data.results);
    });
  });

  // useEffect(() => {
  //   axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=1a0d8643de94a0bdad2ec29735e6c342&language=en-US&page=1`, {
  //     params: {
  //       api_key: process.env.REACT_APP_TMDB_KEY
  //     }
  //   }).then((response) => {

  //     setPopular(response.data.results)
  //   })
  // }, [])

  return (
    <div>
      <Container>
        <Row>
          <h1 className="favoritemovies mt-4">Favorite</h1>
          {popular.map((result, index) => {
            return (
              <Col xs={6} s={4}sm={4} md={4} lg={3} xl={2} className="MoviesWrapper justify-content-center text-align-center d-flex mt-3 " key={index}>
                <Card className="text-center cards bg-transparent ">
                  <div className="listcard">
                    <Image
                      src={`${process.env.REACT_APP_IMG_URL}/${result.poster_path}`}
                      alt="Obx"
                      className="moviecardImages rounded"
                    />
                    <div className="judul mt-2">
                      <Card.Title> {result.title}</Card.Title>
                    </div>
                    <Card.Text className="overview">Id: {result.id}</Card.Text>
                    <Card.Text className="overview">
                      Popularity: <br />
                      {result.popularity}
                    </Card.Text>
                    {/* <Card.Text>{result.overview}</Card.Text> */}
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
