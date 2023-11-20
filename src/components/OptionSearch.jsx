import React from 'react';
import { searhopt } from '../data/alldata';

const OptionSearch = ({ setSearchingby, searchingby }) => {
  const data = searhopt;

  const handleDropDown = (event) => {
    const selectedOption = data.find((option) => option.name === event.target.value);
    setSearchingby(selectedOption);
  };

  return (
    <div className="w-full max-w-md flex ">
    <h3>Filter By:</h3>
      <select
        className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
        onChange={handleDropDown}
        value={searchingby ? searchingby.name : ""}
      >
        {data.map((option) => (
          <option key={option.id} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default OptionSearch;
