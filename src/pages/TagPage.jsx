import React, { useEffect, useState } from 'react';
import TagService from '../API/TagService';
import WeeklyTableForTag from '../components/WeeklyTableForTag/WeeklyTableForTag';

const TagPage = () => {
  const columns = ['date', 'name', "count"];
  const [data, setData] = useState(null);
  const [isLoadig, setIsLoadig] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await TagService.getAll(); 
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
      <h2>Tag Report</h2>
      {isLoadig 
      ? <h1>Loading...</h1>
      : <WeeklyTableForTag data={data.records} columns={columns} total={data.total}/>}
    </div>);
};

export default TagPage;