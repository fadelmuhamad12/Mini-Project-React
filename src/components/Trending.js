import { Card, Container, Row, Col, Image } from "react-bootstrap";
import obxImage from "../assets/favorite/obx.jpg";

const Trending = () => {
  return (
    <div>
        <h1>Favorite</h1>
      <Container >
        <Row>
          <Col s ={4} sm = {4} md={4} lg = {2} xl= {2}  className="MoviesWrapper justify-content-center text-align-center d-flex mt-5 ">
            <Card className="text-dark text-center movieImages">
              <div className="listcard">
                <Image src={obxImage} alt="Obx" className="movieImages" />
                <div className="judul mt-2">
                  <Card.Title> Outer Banks</Card.Title>
                </div>
              </div>
            </Card>
          </Col>

          <Col s ={4} sm = {4} md={4} lg = {2} xl= {2} className="MoviesWrapper justify-content-center text-align-center d-flex mt-5 ">
            <Card className="text-dark text-center movieImages">
              <div className="listcard">
                <Image src={obxImage} alt="Obx" className="movieImages" />
                <div className="judul mt-2">
                  <Card.Title> Outer Banks</Card.Title>
                </div>
              </div>
            </Card>
          </Col>

          <Col s ={4} sm = {4} md={4} lg = {2} xl= {2} className="MoviesWrapper justify-content-center text-align-center d-flex mt-5 ">
            <Card className="text-dark text-center movieImages">
              <div className="listcard">
                <Image src={obxImage} alt="Obx" className="movieImages" />
                <div className="judul mt-2">
                  <Card.Title> Outer Banks</Card.Title>
                </div>
              </div>
            </Card>
          </Col>


          <Col s ={4} sm = {4} md={4} lg = {2} xl= {2} className="MoviesWrapper justify-content-center text-align-center d-flex mt-5 ">
            <Card className="text-dark text-center movieImages">
              <div className="listcard">
                <Image src={obxImage} alt="Obx" className="movieImages" />
                <div className="judul mt-2">
                  <Card.Title> Outer Banks</Card.Title>
                </div>
              </div>
            </Card>
          </Col>


          <Col s ={4} sm = {4} md={4} lg = {2} xl= {2} className="MoviesWrapper justify-content-center text-align-center d-flex mt-5 ">
            <Card className="text-dark text-center movieImages">
              <div className="listcard">
                <Image src={obxImage} alt="Obx" className="movieImages" />
                <div className="judul mt-2">
                  <Card.Title> Outer Banks</Card.Title>
                </div>
              </div>
            </Card>
          </Col>


          <Col s ={4} sm = {4} md={4} lg = {2} xl= {2} className="MoviesWrapper justify-content-center text-align-center d-flex mt-5 ">
            <Card className="text-dark text-center movieImages">
              <div className="listcard">
                <Image src={obxImage} alt="Obx" className="movieImages" />
                <div className="judul mt-2">
                  <Card.Title> Outer Banks</Card.Title>
                </div>
              </div>
            </Card>
          </Col>



        </Row>
      </Container>
    </div>
  );
};

export default Trending;
