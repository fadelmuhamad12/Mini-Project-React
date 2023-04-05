import './App.css';
import NavigationBar from './components/NavigationBar';
import "./style/landingpage.css"
import Intro from './components/Carousel';
import Favorite from './components/Favorite';
import Upcoming from './components/Upcoming';




function App() {
  return (
    <div className='fullcover'>
      <div>
        {/* Intro Start */}
        <div className='myBg'>
          <NavigationBar />
          <Intro />
        </div>
        {/* Intro End */}
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
