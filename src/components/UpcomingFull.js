import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col, Image } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import '../style/landingpage.css';




const UpcomingFull = () => {
  const REACT_APP_IMG_URL = "https://image.tmdb.org/t/p/original";
  const [upcoming, setUpcoming] = useState([]);

  const [modal, showModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleShowModal = (movie) => {
    setSelectedMovie(movie);
    showModal(true);
  };

  const handleShowClose = () => {
    showModal(false);
  };

  useEffect(() => {
    axios({
      method: "get",
      url: "https://api.themoviedb.org/3/movie/upcoming?api_key=1a0d8643de94a0bdad2ec29735e6c342&language=en-US&page=1",
    }).then(function (response) {
      setUpcoming(response.data.results);
    });
  }, []);

 
 
  return (
    <div className="PopularMovies">
    <Container>
      <Row>
        <h1 className="favoritemovies mt-4">Upcoming</h1>
        {upcoming.slice(0, 18).map((result, index) => {
          return (
            <Col
              xs={6}
              s={4}
              sm={4}
              md={4}
              lg={3}
              xl={2}
              className="MoviesWrapper justify-content-center text-align-center d-flex mt-3 " key={index}
            >
              <Card
                className="text-center cards bg-transparent "
                onClick={() => handleShowModal(result)}
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
      
      <Modal show={modal} onHide={handleShowClose} keyboard={false}>
        <Modal.Header closeButton></Modal.Header>
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
                  <p className="titleModals text-white">{selectedMovie.title}</p>
                </Col>
                <Col>
                <div className="textModals">
                  <p>Id: {selectedMovie.id}</p>
                  <p>
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

export default UpcomingFull;
