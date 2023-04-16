import { Card, Container, Row, Col, Image } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick/lib/slider";

const Continue = ({setShowMovie}) => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "40px",
    slidesToShow: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
    


  const REACT_APP_IMG_URL = "https://image.tmdb.org/t/p/original";
  const [show, setShow] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://api.themoviedb.org/3/tv/top_rated?api_key=1a0d8643de94a0bdad2ec29735e6c342&language=en-US&page=1",
    }).then(function (response) {
      console.log(response);
      setShow(response.data.results);
    });
  }, []);

  return (

<div>
<h1 className="continuemovies mt-4 d-flex">Continue To Watch</h1>
        <Slider {...settings}>
        {show.map((result, index) => {
              return (
                <Col
                  
                  className="justify-content-center text-align-center d-flex mt-3 moviesWrapperContinue "
                key={index}
                >
                  <Card className="text-center cards bg-transparent" onClick={()=> setShowMovie(result)}>
                    <div className="card continue bg-transparent">
                      <Image src={`${process.env.REACT_APP_IMG_URL}/${result.backdrop_path}`} className="imgContinue" />
                      <div className="judul mt-2">
                        <Card.Title>{result.name}</Card.Title>
                      </div>
                    </div>
                  </Card>
                </Col>
              );
            })}
        </Slider>
      </div>
    );

    <Container>
      <Row>
        <h1 className="favoritemovies mt-4 d-flex">Continue To Watch</h1>
        <div>
          <div className="wrapper">
            {show.slice(0,3).map((result, index) => {
              return (
                <Col
                  xs={4}
                  s={4}
                  sm={4}
                  md={4}
                  lg={4}
                  xl={4}
                  className="justify-content-center text-align-center d-flex mt-3 moviesWrapperContinue "
                key={index}
                >
                  <Card className="text-center cards bg-transparent ">
                    <div className="card continue bg-transparent">
                      <Image src={`${process.env.REACT_APP_IMG_URL}/${result.backdrop_path}`} className="imgContinue" />
                      <div className="judul mt-2">
                        <Card.Title>{result.name}</Card.Title>
                      </div>
                    </div>
                  </Card>
                </Col>
              );
            })}
          </div>
        </div>
      </Row>
    </Container>
 
};

export default Continue;
