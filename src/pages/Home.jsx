import React, { useEffect, useState } from 'react'
import { gettAllCollection } from '../services/operations';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Home = () => {

    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(false);
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
   // console.log(data,"data ha");
  return (
    <div className="relative flex min-h-[calc(100vh-3.5rem)]">
    <Sidebar />
    <div className="h-[calc(100vh-3.5rem)] flex-1 overflow-auto">
      <div className="mx-auto w-11/12 max-w-[1000px] py-10">
        <Outlet />
      </div>
    </div>
   </div>
  )
}

export default Home