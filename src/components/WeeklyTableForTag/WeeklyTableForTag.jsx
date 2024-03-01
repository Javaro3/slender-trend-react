import React from 'react';
import { format, startOfWeek } from 'date-fns';
import Table from '../Table/Table';

const WeeklyTableForTag = ({ data, columns, total }) => {
    const transformedArray = Object.entries(data).map(([date, counts]) => {
        const transformedData = Object.entries(counts).map(([name, count]) => ({
          date,
          name,
          count
        }));
      
        return transformedData;
      }).flat();
      
      const groupedByWeek = transformedArray.reduce((acc, item) => {
        const weekStart = format(startOfWeek(new Date(item.date), { weekStartsOn: 1 }), 'yyyy-MM-dd');
        
        if (!acc[weekStart]) {
          acc[weekStart] = [];
        }
      
        acc[weekStart].push(item);
        return acc;
      }, {});
      
  return (
    <div>
      <h1>Total {total}</h1>
      {Object.keys(groupedByWeek).map((weekStart, index) => (
        <div key={index}>
          <h3>Week starting on {weekStart}</h3>
          <Table data={groupedByWeek[weekStart]} columns={columns}/>
        </div>
      ))}
    </div>
  );
};

export default WeeklyTableForTag;