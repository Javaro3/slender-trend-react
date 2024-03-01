import React from 'react';
import { format, startOfWeek } from 'date-fns';
import Table from '../Table/Table';

const groupDataByWeeks = (data) => {
  const groupedData = Object.keys(data).reduce((acc, date) => {
    const weekStart = startOfWeek(new Date(date), { weekStartsOn: 1 });
    const weekKey = format(weekStart, 'yyyy-MM-dd');

    if (!acc[weekKey]) {
      acc[weekKey] = [];
    }

    let newData = data[date]
    newData.date = date
    acc[weekKey].push(newData);
    return acc;
  }, {});

  return groupedData;
};

const WeeklyTable = ({ data, columns, total }) => {
  const weeklyData = groupDataByWeeks(data);

  return (
    <div>
      <h1>Total {total}</h1>
      {Object.keys(weeklyData).map((weekStart, index) => (
        <div key={index}>
          <h3>Week starting on {weekStart}</h3>
          <Table data={weeklyData[weekStart]} columns={columns}/>
        </div>
      ))}
    </div>
  );
};

export default WeeklyTable;