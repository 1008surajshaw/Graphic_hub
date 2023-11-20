import { useEffect } from 'react'
import React ,{useState} from 'react'
import { clusteredCountries } from '../data/alldata'
import { useSearchParams } from 'react-router-dom';
import PieChart from './charts/PieChart';
import { gettObjectByRegion } from "../services/operations"
import OptionSearch from './OptionSearch';
import BarChart from './charts/BarChart';
const RegionSearch = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [loading, setLoading] = useState(false);
    const[searchParams,setSearchParams] = useSearchParams();
    const dropdownOptions = clusteredCountries;
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredObjects, setFilteredObjects] = useState([]);
    const [selectedObject, setSelectedObject] = useState(null);
    const [searchingby ,setSearchingby] = useState(" ")
    const [flag,setFlag] = useState(false);

    function capitalizeWords(input) {
        return input
          .toLowerCase()
          .split(' ')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
      }
      const handleSearchChange = (event) => {
        const formattedSearchTerm = capitalizeWords(event.target.value);
        setSearchTerm(formattedSearchTerm);
      
        const selectedRegion = dropdownOptions.find((sector) =>
          sector.name.includes(formattedSearchTerm)
        );
      
        if (selectedRegion && selectedRegion.name) {
          
          const exactMatch = selectedRegion.name.find(
            (name) => name === formattedSearchTerm
          );
      
          setSelectedOption(exactMatch || null);
        } else {
          setSelectedOption(null);
        }
      };
      
      const handleDropdownChange = (event) => {
        const selectedSec = event.target.value;
        setSelectedOption(selectedSec);
      };
      
      const handleSubmit = () => {
        console.log(selectedOption);
        
        setSearchParams({name:selectedOption});
        fetchData();
      };
      const fetchData = async () =>{
        setLoading(true);
        try {
            
            
            const data = await gettObjectByRegion(selectedOption);
      
            console.log(data?.data?.data,"ooooo"); 
            setFilteredObjects(data?.data?.data);
          } catch (error) {
            console.error('Error fetching data:', error.message);
          } finally {
            setLoading(false);
          }
      }
      
     
  return (
    <div className='container mx-auto flex flex-col w-[90%]'>
      <h1 className='text-3xl font-bold text-richblack-800'>Search by Region</h1>

    <div className='flex '>
     
     <div>
     <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
        className='w-full md:w-64 px-4 py-2 rounded-md border focus:outline-none focus:border-blue-500 mr-4 '
      />
     
        
     <select onChange={handleDropdownChange} value={selectedOption || ''} className='w-full md:w-64 mt-4 px-4 py-2 rounded-md border focus:outline-none focus:border-blue-500 mr-4'>
      {dropdownOptions.map((option) => (
        <optgroup key={option.id} label={option.continent}>
        {option.name.map((nameOption, index) => (
            <option key={index} value={nameOption}>
            {nameOption}
            </option>
        ))}
        </optgroup>
       ))}
     </select>
     <button onClick={handleSubmit} disabled={loading} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 mr-4">
        {loading ? 'Loading...' : 'Submit'}
      </button>
     {selectedOption && (
       <div>
           <p className="mb-4 text-richblack-5" >Selected Name: {selectedOption}</p>
      </div>
     )}
     </div>

     <div className='w-[20%] mt-3'>
       <OptionSearch searchingby={searchingby} setSearchingby={setSearchingby}/>
     </div>
  </div>
  <div className='text-richblack-800 text-2xl'>
       <button onClick={() =>setFlag(!flag)}
       className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 m-4">
         <span>{flag ? "pie Chart" : "bar Chart"} </span>
       </button>
     </div>
     <div>
       {
        flag ?  <PieChart data={filteredObjects}  searchingby={searchingby}/> :  <BarChart data={filteredObjects}  searchingby={searchingby}/>
       }
     </div>
    </div>
  )
}

export default RegionSearch