import { useEffect, useState } from "react";
import { Card, Container, Row, Col, Image } from "react-bootstrap";
import axios from "axios";
import Modal from "react-bootstrap/Modal";


const Favorite = () => {
  const [popular, setPopular] = useState([]);
  const REACT_APP_IMG_URL = "https://image.tmdb.org/t/p/w500";
  const [modal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleShow = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

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
          {popular.slice(0, 18).map((result) => {
            return (
              <Col
                xs={6}
                s={4}
                sm={4}
                md={4}
                lg={3}
                xl={2}
                className="MoviesWrapper justify-content-center text-align-center d-flex mt-3 "
              >
                <Card
                  className="text-center cards bg-transparent"
                  onClick={() => handleShow(result)}
                >
                  <div className="listcard">
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

        <Modal show={modal} onHide={handleClose}>
          <Modal.Header closeButton> </Modal.Header>
          <Modal.Body>
            {selectedMovie && (
              <Row>
                <div
                  className="Highlight-content modal-background"
                  style={{
                    backgroundImage: `url(${REACT_APP_IMG_URL}${selectedMovie.backdrop_path})`,
                  }}
                >
                  <div className="wrapper-Cards">
                  <Col>
                    <Image
                      src={`${process.env.REACT_APP_IMG_URL}/${selectedMovie.poster_path}`}
                      alt="Obx"
                      className="moviecardImagesModals rounded"
                      closeButton
                    />
                   
                  </Col>
                  <Col>
                  <div className="textModals">
                  <p className="title text-white">{selectedMovie.title}</p>
                    <p className="text-white">Id: {selectedMovie.id}</p>
                    <p className="text-white">
                      Popularity: {selectedMovie.vote_average}
                    </p>
                    </div>
                  </Col>
                  </div>
                </div>
              </Row>
            )}
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
};

export default Favorite;
