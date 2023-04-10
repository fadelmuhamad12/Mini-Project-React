import './App.css';
import NavigationBar from './components/NavigationBar';
import "./style/landingpage.css"
import Favorite from './components/Favorite';
import Upcoming from './components/Upcoming';
import Highlight from './components/Highlight';
import Continue from './components/Continue';
import { useState } from "react";
import Announcement from './components/alert';



// import FormLogin from './components/Login';




function App() {
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
}

export default App;
