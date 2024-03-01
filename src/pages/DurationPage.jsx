import React, { useEffect, useState } from 'react';
import WeeklyTable from '../components/WeeklyTable/WeeklyTable';
import DurationService from '../API/DurationService';

const DurationPage = () => {
  const columns = ['date', 'agents_chatting_duration', "count", "duration"];
  const [data, setData] = useState(null);
  const [isLoadig, setIsLoadig] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await DurationService.getAll(); 
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
      <h2>Duration Report</h2>
      {isLoadig 
      ? <h1>Loading...</h1>
      : <WeeklyTable data={data.records} columns={columns} total={data.total}/>}
    </div>);
};

export default DurationPage;