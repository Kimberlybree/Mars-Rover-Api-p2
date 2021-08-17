import './App.css';
import Main from './Components/Main';
import RoverInfo from './Components/RoverInfo';
import SearchBar from './Components/SearchBar';


const photos = [
  {
    rover_id: 424926, 
    name: 'Mast Camera',
    url: 'http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631200305217E01_DXXX.jpg'

  },
  // {
  //   rover_id: 424927,
  //   name: 'Curiosity',
  //   url: 'http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631190503679E04_DXXX.jpg","earth_date":"2015-05-30","rover',
  //   landing_date: "2012-08-06",
  //   launch_date: "2011-11-25",
  //   status: 'Active',
  // },
  {
    rover_id: 424928,
    name: 'Mast Camera',
    url: 'http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631190305216E04_DXXX.jpg',

  },
  {
    rover_id: 5,
    name: 'Curiosity',
    status: 'Active'

  },
  {
    rover_id: 5,
    name: 'Mast Camera',
    url: 'http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631190305216E04_DXXX.jpg'
  },
  {
  rover_id: 102693,
  name: 'Curiosity, FHAZ, Front Hazard Avoidance Camera',
  url: 'http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG',
  landingDate: '2012-08-06', 
  launchDate: '2011-11-26'
  },
  {
    rover_id: 102694,
    name: 'Curiosity, FHAZ, Front Hazard Avoidance Camera',
    url: 'http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FRB_486265257EDR_F0481570FHAZ00323M_.JPG',
    landingDate: '2012-08-06', 
    launchDate: '2011-11-26'
  }

];


function App() {
  return (
   <div>
    <div className="App">
    <nav>
  
   <img src="https://cdn.mos.cms.futurecdn.net/baYs9AuHxx9QXeYBiMvSLU.jpg" alt="" />
 

   <header>NASA Mars Rover Photos</header>
 </nav>

   
    

     
    </div>
    <SearchBar />
   
   <RoverInfo photos={photos} /> 

    <Main />
    
    </div>
  );
}

export default App;
