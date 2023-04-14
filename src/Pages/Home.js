import { Alert } from "bootstrap";
import React, { useState } from "react";
import Announcement from "../components/alert";
import Continue from "../components/Continue";
import Favorite from "../components/Favorite";
import Highlight from "../components/Highlight";
import NavigationBar from "../components/NavigationBar";
import Upcoming from "../components/Upcoming"
import "../style/landingpage.css";
import TopRatedMovies from '../components/TopRatedMovies'

const Home = () => {
  const [showMovie, setShowMovie] = useState([{}]);

  return (
    <div className='fullcover'>
    <div>
      <div className='myBg'>
        <NavigationBar />
        <Announcement />
        <Highlight showMovie={showMovie} setShowMovie={setShowMovie}/>
        {/* <Intro /> */}
      </div>
      <div className='trending'>
        <Favorite setShowMovie={setShowMovie}/>
        <TopRatedMovies showMovie={showMovie} setShowMovie={setShowMovie}/>
      
      </div>
        <div className='continue'>
        <Continue />
        </div>
      <div className='soon'>
      <Upcoming />
      </div>

    </div>
  </div>
  );
};

export default Home;
