import './App.css';
import NavigationBar from './components/NavigationBar';
import "./style/landingpage.css"
import Intro from './components/Carousel';
import Favorite from './components/Favorite';




function App() {
  return (
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

   </div>
  );
}

export default App;
