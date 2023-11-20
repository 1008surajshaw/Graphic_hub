import './App.css';
import CorrectStart from './components/CorrectStart';
import CountriesSearch from './components/CountriesSearch';
import DataTopic from './components/DataTopic';
import EndYearObject from './components/EndYearObject';
import PestObject from './components/PestObject';
import SecCustObject from './components/SecCustObject';
import SectorSearch from './components/SectorSearch';
import SourceObject from './components/SourceObject';
import StartYearObject from './components/StartYearObject';
import SwotObject from './components/SwotObject';
import RegionSearch from './components/RegionSearch';
import Home from "./pages/Home"
import {Route,Routes} from "react-router-dom";
import LoginPage from './pages/LoginPage';
import Navbar from './pages/Navbar';
function App() {
  return (
    <div className="w-screen min-h-screen bg-richblack-5 flex flex-col font-inter">
    <Navbar/>
    <Routes>
      <Route path='/' element={<LoginPage/>}/>
      <Route  element={<Home/>}>
        <Route path="/filterbystart_year" element={<CorrectStart/>}/>
        <Route path='/searchbycountry' element={<CountriesSearch/>}/>
        <Route path='/searchbytopic' element={<DataTopic/>}/>
        <Route path='/searchbyend_year' element={<EndYearObject/>}/>
        <Route path='/searchbypestle' element={<PestObject/>}/>
        <Route path='/searchbyregion' element={<RegionSearch/>}/>
        <Route path='/cumtomsearch' element={<SecCustObject/>}/>
        <Route path='/searchbysector' element={<SectorSearch/>}/>
        <Route path='/searchbysource' element={<SourceObject/>}/>
        <Route path='/searchbycustomstart_year' element={<StartYearObject/>}/>
        <Route path='/searchbyswot' element={<SwotObject/>}/>
      </Route>
    </Routes>
    </div>
  );
}


export default App;
