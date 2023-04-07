import { Container, Col, Row, Button, Carousel, Image} from "react-bootstrap";
import lastofus from "../assets/images/lastofus.jpg";
import themartian from "../assets/images/themartian.jpg"
import interstellar from "../assets/images/interstellar.jpg"
import { useEffect, useState } from "react";
import axios from "axios";




const Intro = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={lastofus}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>The Last Of US</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={themartian}
          alt="Second slide"
        />

        <Carousel.Caption>
        <h3>The Martian</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={interstellar}
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3>InterStellar</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


    // <div className="intro mt-5">
    //   <Container className="text-white d-flex justify-content-center align-item-center text-center">
    //     <Row>
    //       <Col>
    //         <div className="title mb-2">Welcome  to</div>
    //         <div className="title ">F2k.Stream</div>
    //         <div className="introButton mt-4 text-center">
    //             <Button variant="dark">Lihat Semua List</Button>
    //         </div>
    //       </Col>
    //     </Row>
    //   </Container>
    // </div>
  );
};

export default Intro;
