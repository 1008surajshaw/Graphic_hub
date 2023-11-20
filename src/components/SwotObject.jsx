import React, { useState, useEffect } from 'react'
import { getSWOT } from '../services/operations';
import PieChart from './charts/PieChart';
import SourceObject from './SourceObject';
import OptionSearch from './OptionSearch';
import BarChart from './charts/BarChart';
const SwotObject = () => {
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(false);
    const [filteredObjects, setFilteredObjects] = useState([]);
  const [selectedObject, setSelectedObject] = useState(null);
  const [searchingby ,setSearchingby] = useState(" ")
  const [flag,setFlag] = useState(false);

    useEffect(() =>{
        const fetchData = async () => {
            setLoading(true);
            try {
              const res = await getSWOT();
              if(res){
                setData(res);
                setFilteredObjects(res?.data)
              }
    
            } catch (error) {
              console.log("Could not fetch data", error);
            }
            setLoading(false);
            
          };
          fetchData();

    },[])
    console.log(data);
  return (
    <div className='flex flex-col'>
        <h1 className='text-3xl font-bold text-richblack-800'>Search by custom SWOT</h1>

       <div className='w-[20%] mt-3'>
       <OptionSearch searchingby={searchingby} setSearchingby={setSearchingby}/>
     </div>

    

     <div className='text-richblack-800 text-2xl'>
       <button onClick={() =>setFlag(!flag)}
       className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 m-6">
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

export default SwotObject