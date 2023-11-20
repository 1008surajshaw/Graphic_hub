import React , { useEffect, useState }from 'react'
import { gettAllCollection } from '../services/operations';
import OptionSearch from './OptionSearch';
import PieChart from './charts/PieChart';
import BarChart from './charts/BarChart';
const SecCustObject = () => {
  const [data,setData] = useState([]);
    const [loading,setLoading] = useState(false);
    const [searchingby ,setSearchingby] = useState(" ")
    const [flag,setFlag]  = useState(false)
    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        try {
          const res = await gettAllCollection();
          if(res){
           
            setData(res);
          }

        } catch (error) {
          console.log("Could not fetch data", error);
        }
        setLoading(false);
        
      };
  
      fetchData(); 
    }, []); 
  return (
    <div className='flex flex-col'>
         <h1 className='text-3xl font-bold text-richblack-800'>Search on whole data</h1>

       <div className='w-[20%] mt-3'>
       <OptionSearch searchingby={searchingby} setSearchingby={setSearchingby}/>
       </div>

    
     <div className='text-richblack-800 text-2xl'>
       <button onClick={() =>setFlag(!flag)}
       className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 m-4">
         <span>{flag ? "pie Chart" : "bar Chart"} </span>
       </button>
     </div>
     <div>
       {
        flag ?  <PieChart data={data}  searchingby={searchingby}/> :  <BarChart data={data}  searchingby={searchingby}/>
       }
     </div>
    </div>
  )
}

export default SecCustObject