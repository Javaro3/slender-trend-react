import React, { useEffect, useState } from 'react';
import WeeklyTable from '../components/WeeklyTable/WeeklyTable';
import RatingService from '../API/RatingService';

const RatingPage = () => {
  const columns = ['date', 'bad', "chats", "good"];
  const [data, setData] = useState(null);
  const [isLoadig, setIsLoadig] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await RatingService.getAll(); 
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
      <h2>Rating Report</h2>
      {isLoadig 
      ? <h1>Loading...</h1>
      : <WeeklyTable data={data.records} columns={columns} total={data.total}/>}
    </div>);
};

export default RatingPage;