'use client';
import React, { useState } from 'react';
import axios from 'axios';
import Card from '../components/Card';

const Violations = () => {
  const [searchInput, setSearchInput] = useState('');
  const [results, setResults] = useState([]);
  const API_URL = `https://data.cityofnewyork.us/resource/nc67-uf89.json?$limit=${
    searchInput ? '' : '20'
  }`;

  const handleSubmitQuery = (e) => {
    e.preventDefault();

    axios
      .get(API_URL, {
        params: {
          plate: searchInput ? searchInput : null,
        },
      })
      .then((res) => {
        setResults(res.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };
  return (
    <div
      style={{ minHeight: '100vh' }}
      className='bg-gradient-to-r from-darkTan to-lightTan p-20'>
      <h1 className='text-center mb-10 text-xl'>Trafficlations</h1>
      <div className='flex justify-center'>
        <input
          className='text-darkTan bg-lightTan p-5 w-1/2 rounded'
          placeholder='Enter a license plate number or leave empty to return 20 random results'
          autoFocus
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value.toUpperCase())}
        />
        <button
          className='bg-green p-5 rounded-tr rounded-br'
          onClick={handleSubmitQuery}
          onKeyDownCapture={handleSubmitQuery}>
          Submit
        </button>
      </div>

      {results.length > 0 && (
        <h6 className='text-center mt-5 text-sm'>
          Displaying {results.length} results
        </h6>
      )}

      <div className='grid grid-cols-3 gap-3 place-items-center'>
        {results?.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Violations;
