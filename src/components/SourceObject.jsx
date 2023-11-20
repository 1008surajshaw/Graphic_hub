import React, { useState, useEffect } from 'react';
import { getSource, gettObjectBySource } from '../services/operations';
import { useSearchParams } from 'react-router-dom';

const SourceObject = () => {
  const [data, setData] = useState([]);
  const [record, setRecord] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [fetchedData, setFetchedData] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const datas = await getSource();
      setData(datas?.data);
      setRecord(datas?.data);
    };
    fetchData();
  }, []);

  const Filter = (event) => {
    setRecord(data.filter((f) => f.includes(event.target.value)));
  };

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = () => {
    setSearchParams({ name: selectedOption });
    fetchDatas();
  };

  const fetchDatas = async () => {
    setLoading(true);
    try {
      const resp = await gettObjectBySource(selectedOption);
      console.log(resp, 'response');
      setFetchedData(resp);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='container mx-auto flex flex-col '>
        <h1 className='text-3xl font-bold text-richblack-800'>Search by Source</h1>

      <div>
        <input
          type='text'
          onChange={Filter}
          placeholder='Search here...'
          className='w-full md:w-64 px-4 py-2 rounded-md border focus:outline-none focus:border-blue-500 mr-4 '
        />
        <select
          className='w-full md:w-64 mt-4 px-4 py-2 rounded-md border focus:outline-none focus:border-blue-500 mr-4'
          onChange={handleDropdownChange}
          value={selectedOption}
        >
          <option value='' disabled>
            Select an option
          </option>
          {record.map((options, idx) => (
            <option key={idx} value={options} className='w-[200px]'>
              {options}
            </option>
          ))}
        </select>
        <button
          onClick={handleSubmit}
          disabled={loading}
          className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 mr-4'
        >
          {loading ? 'Loading...' : 'Submit'}
        </button>
        {selectedOption && (
          <p className='mb-4 text-richblack-5'>Selected Option is: {selectedOption}</p>
        )}
      </div>

      <div>
        {fetchedData &&
          fetchedData.map((item, index) => (
            <div key={index} className='max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden'>
        
        <div className='p-6'>
          <h2 className='text-xl font-bold mb-2'>{item.title}</h2>
          <p className='text-sm text-gray-500 mb-4'>{item.insight}</p>
          <div className='flex items-center mb-4'>
            <span className='text-sm text-gray-700 mr-2'>Published on:</span>
            <span className='text-sm text-blue-500'>{item.published}</span>
          </div>
          <div className='flex items-center mb-4'>
            <span className='text-sm text-gray-700 mr-2'>Country:</span>
            <span className='text-sm text-blue-500'>{item.country}</span>
          </div>
          <div className='flex items-center mb-4'>
            <span className='text-sm text-gray-700 mr-2'>Region:</span>
            <span className='text-sm text-blue-500'>{item.region}</span>
          </div>
          <div className='flex items-center mb-4'>
            <span className='text-sm text-gray-700 mr-2'>Source:</span>
            <span className='text-sm text-blue-500'>{item.source}</span>
          </div>
          <div className='flex items-center mb-4'>
            <span className='text-sm text-gray-700 mr-2'>Relevance:</span>
            <span className='text-sm text-green-500'>{item.relevance}</span>
          </div>
          <div className='flex items-center'>
            <span className='text-sm text-gray-700 mr-2'>Intensity:</span>
            <span className='text-sm text-green-500'>{item.intensity}</span>
          </div>
          <div className='mt-4'>
            <a
              href={item.url}
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-500 hover:underline'
            >
              Read More
            </a>
          </div>
        </div>
      </div>
          ))}
      </div>
    </div>
  );
};

export default SourceObject;
