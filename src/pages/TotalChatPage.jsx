import React, { useEffect, useState } from 'react';
import WeeklyTable from '../components/WeeklyTable/WeeklyTable';
import TotalChatService from '../API/TotalChatService';

const TotalChatPage = () => {
  const columns = ['date', 'total'];
  const [data, setData] = useState(null);
  const [isLoadig, setIsLoadig] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await TotalChatService.getAll(); 
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
      <h2>Total Chat Report</h2>
      {isLoadig 
      ? <h1>Loading...</h1>
      : <WeeklyTable data={data.records} columns={columns} total={data.total}/>}
    </div>);
};

export default TotalChatPage;