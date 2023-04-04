import './App.css';
import NavigationBar from './components/NavigationBar';
import "./style/landingpage.css"
import Intro from './components/Intro';
import Trending from './components/Trending';




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
    <Trending />
    
    </div>

   </div>
  );
}

export default App;
