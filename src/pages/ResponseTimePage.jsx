import React, { useEffect, useState } from 'react';
import WeeklyTable from '../components/WeeklyTable/WeeklyTable';
import ResponseTimeService from '../API/ResponseTimeService';

const ResponseTimePage = () => {
  const columns = ['date', 'count', "responseTime"];
  const [data, setData] = useState(null);
  const [isLoadig, setIsLoadig] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await ResponseTimeService.getAll(); 
        setData(data);
        setIsLoadig(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  
  return( 
    <div>
      <h2>Response Time Report</h2>
      {isLoadig 
      ? <h1>Loading...</h1>
      : <WeeklyTable data={data.records} columns={columns} total={data.total}/>}
    </div>);
};

export default ResponseTimePage;