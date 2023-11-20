import React, { useEffect, useState } from 'react';
import {  start_data, years_data } from '../data/alldata';
import { useSearchParams } from 'react-router-dom';
import {  getObjectByStartYear } from '../services/operations';
import OptionSearch from './OptionSearch';
import PieChart from './charts/PieChart';
import GanttChart from "./charts/GanttChart"
import LineChart from './charts/LineChart';
import BarChart from './charts/BarChart';
const CorrectStart = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);
  const [loading, setLoading] = useState(false);
  const dropdownOptions = start_data;
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredObjects, setFilteredObjects] = useState([]);
  const [selectedObject, setSelectedObject] = useState(null);
  const [searchingby ,setSearchingby] = useState(" ")
  const [flag,setFlag] = useState(false);

  const handleSearchChange = (event) => {
    const formattedSearchTerm = event.target.value
    setSearchTerm(formattedSearchTerm);

    const selectedRegion = dropdownOptions.find(
      (region) => region.name === formattedSearchTerm
    );

    if (selectedRegion) {
      setSelectedOption(selectedRegion);
    } else {
      setSelectedOption(null);
    }
  };
 
  const handleDropdownChange = (event) => {
    const selectedRegion = dropdownOptions.find(
      (region) => region.name === event.target.value
    );
    setSelectedOption(selectedRegion);
  };

  const handleSubmit = () => {
    if (!selectedOption) {
      console.error('Region does not exist');
      return;
    }

    
    setSearchParams({ name: selectedOption?.name });
    fetchData();
  };

  const fetchData = async () => {
    setLoading(true);
    try {
     
      const data = await getObjectByStartYear(selectedOption?.name);

      console.log(data);
      setFilteredObjects(data); 
    } 
    catch (error) {
      console.error('Error fetching data:', error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const nameFromParams = searchParams.get('name');
    if (nameFromParams) {
      
      const selectedRegion = dropdownOptions.find(
        (region) => region.name === nameFromParams
      );
      if (selectedRegion) {
        setSelectedOption(selectedRegion);
        setSearchTerm(selectedRegion.name);
      }
    }
  }, [searchParams, dropdownOptions]);
  
  return (
    <div className='container mx-auto flex flex-col w-[90%]'>
      <h1 className='text-3xl font-bold text-richblack-800'>Search by starting year</h1>
      
    <div  className='flex'>

    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
        className='w-full md:w-64 px-4 py-2 rounded-md border focus:outline-none focus:border-blue-500 mr-4 '

      />

      <select
        onChange={handleDropdownChange}
        value={selectedOption ? selectedOption.name : ''}
        className='w-full md:w-64 mt-4 px-4 py-2 rounded-md border focus:outline-none focus:border-blue-500 mr-4'
      >
        <option value="" disabled>
          Select an option
        </option>
        {dropdownOptions.map((option) => (
          <option key={option.id} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>

      <button onClick={handleSubmit} disabled={loading} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 mr-4">
        {loading ? 'Loading...' : 'Submit'}
      </button>
      {selectedOption && <p className="mb-4 text-richblack-5">Selected Option: {selectedOption.name}</p>}
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
  );
};

export default CorrectStart;
