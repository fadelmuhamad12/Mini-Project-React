import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col, Image } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import '../style/landingpage.css';




const ComingSoon = ({setShowMovie}) => {
  const REACT_APP_IMG_URL = "https://image.tmdb.org/t/p/original";
  const [upcoming, setUpcoming] = useState([]);

  const [modal, showModal] = useState(false);
  const [selectedMovie] = useState(null);


  const handleShowClose = () => {
    showModal(false);
  };
  // Jika pertama kali di reload maka akan mendapatkan data ini dan di munculin pake mapping
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
        {upcoming.slice(0, 12).map((result, index) => {
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
                onClick={() => setShowMovie(result)}
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
                <Col>
                  <Image
                    src={`${process.env.REACT_APP_IMG_URL}/${selectedMovie.poster_path}`}
                    alt="Obx"
                    className="moviecardImages rounded"
                    closeButton
                  />
                  <p className="title text-white">{selectedMovie.title}</p>
                </Col>
                <Col>
                  <p className="text-white">Id: {selectedMovie.id}</p>
                  <p className="text-white">
                    Popularity: {selectedMovie.vote_average}
                  </p>
                </Col>
              </div>
            </Row>
          )}
        </Modal.Body>
      </Modal>
    </Container>
    </div>
  );
};

export default ComingSoon;
