import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Screen4 = () => {
  const [ids, setIds] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [option, setOption] = useState('');

  const url = 'https://test.soniclinker.com/test_data/classes/';
  const idurl = 'https://test.soniclinker.com/test_data/';

  const fetchIds = async (afterUrl) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${url}${afterUrl}`);
      setIds(response.data); 
    } catch (err) {
      setError('Error fetching IDs');
    }
  };

  const fetchDataForIds = async (ids) => {
    setLoading(true);
    setError(null);
    try {
      const fetchedData = await Promise.all(
        ids.map(async (id) => {
          const response = await axios.get(`${idurl}${id}.json`);
          return response.data;
        })
      );
      setData(fetchedData);
    } catch (err) {
      setError('Error fetching data for IDs');
    } 
  };

  useEffect(() => {
    if (option) {
      fetchIds(option);
    }
  }, [option]);

  useEffect(() => {
      fetchDataForIds(ids);
  }, [ids]);

  const handleOptionChange = (e) => {
    setOption(e.target.value);
    setData([]); 
  };

  return (
    <div className="m-5 p-5">
      <h1>Page-4</h1>
      <div className="flex flex-col p-4">
        <select name="options" id="options" onChange={handleOptionChange} value={option}>
          <option value="">Select</option>
          <option value="1.json">1.json</option>
          <option value="2.json">2.json</option>
          <option value="3.json">3.json</option>
          <option value="4.json">4.json</option>
          <option value="5.json">5.json</option>
        </select>
      </div>
      <div>
        {data && (
          <table className="table-auto border-collapse border border-gray-300 w-full text-left text-sm">
  <thead className="bg-gray-200 text-gray-700">
    <tr>
      {Object.keys(data[0] || {}).map((key) => (
        <th key={key} className="border border-gray-300 px-4 py-2">
          {key}
        </th>
      ))}
    </tr>
  </thead>
  <tbody>
    {data.map((item, index) => (
      <tr
        key={index}
        className="hover:bg-gray-100"
      >
        {Object.values(item).map((value, idx) => (
          <td key={idx} className="border border-gray-300 px-4 py-2">
            {value}
          </td>
        ))}
      </tr>
    ))}
  </tbody>
</table>

        )}
      </div>
    </div>
  );
};

export default Screen4;
