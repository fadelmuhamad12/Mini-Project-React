import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ShowCards() {


  return (
    
    <>
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
    </>
  );
}


export default ShowCards;