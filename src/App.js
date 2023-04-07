import './App.css';
import NavigationBar from './components/NavigationBar';
import "./style/landingpage.css"
import Intro from './components/SlideHighlight';
import Favorite from './components/Favorite';
import Upcoming from './components/Upcoming';
import Highlight from './components/Highlight';
import { Carousel } from 'bootstrap';





function App() {

  return (
  
    <div className='fullcover'>
      <div>
        <div className='myBg'>
          <NavigationBar />
          <Highlight/>
          {/* <Intro /> */}
        </div>
        <div className='trending'>
          <Favorite />
        </div>

        <div className='soon'>
          <Upcoming />
        </div>

      </div>
    </div>
   
  );
}

export default App;
