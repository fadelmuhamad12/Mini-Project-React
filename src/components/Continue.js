import { Card, Container, Row, Col, Image } from "react-bootstrap";
import lastofus from "../assets/images/lastofus.jpg";
// import interstellar from "../assets/images/interstellar.jpg";
import batman from "../assets/images/batman.jpg";




import React from "react";

const Continue = () => {
  return (
    <Container>
      <Row>
      <h1 className="favoritemovies mt-4 d-flex">Continue To Watch</h1>
        <div>
          <div className="wrapper">
            <Col xs={6} s={4} sm={4} md={4} lg={4} xl={4} className="justify-content-center text-align-center d-flex mt-3 moviesWrapperContinue ">
              <Card className="text-center cards bg-transparent ">
                <div className="card continue bg-transparent">
                  <Image src={lastofus}  className="imgContinue"/>
                  <div className="judul mt-2">
                    <Card.Title> The Last Of us</Card.Title>
                  </div>
                  {/* <Card.Text>{result.overview}</Card.Text> */}
                </div>
              </Card>
            </Col>


            <Col xs={6} s={4} sm={4} md={4} lg={4} xl={4} className="justify-content-center text-align-center d-flex mt-3 moviesWrapperContinue ">
              <Card className="text-center cards bg-transparent ">
                <div className="card continue bg-transparent">
                  <Image src={batman}  className="imgContinue"/>
                  <div className="judul mt-2">
                    <Card.Title> Batman: The Dark Knight</Card.Title>
                  </div>
                  {/* <Card.Text>{result.overview}</Card.Text> */}
                </div>
              </Card>
            </Col>

            {/* <Col xs={6} s={4} sm={4} md={4} lg={4} xl={4} className="justify-content-center text-align-center d-flex mt-3 moviesWrapperContinue ">
              <Card className="text-center cards bg-transparent ">
                <div className="card continue bg-transparent">
                  <Image src={interstellar}  className="imgContinue"/>
                  <div className="judul mt-2">
                    <Card.Title> Interstellar</Card.Title>
                  </div>
            
                </div>
              </Card>
            </Col> */}

          </div>
        </div>
      </Row>
    </Container>
  );
};

export default Continue;
