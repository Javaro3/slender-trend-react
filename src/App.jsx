import React from 'react';
import './App.css';
import List from './components/List/List';

const App = () => {
  const reports = [
    {
      "value": 'Duration Report', 
      "path": "/duration-report"
    },
    {
      "value": 'Rating Report', 
      "path": "/ratings-report"
    },
    {
      "value": 'Response Time Report', 
      "path": "/response-time-report"
    },
    {
      "value": 'Tag Report', 
      "path": "/tag-report"
    }, 
    {
      "value": 'Total Chats Report', 
      "path": "/total-chats-report"
    }
  ];

  return (
    <div>
      <h2>Reports</h2>
      <List items={reports} />
    </div>
  );
}

export default App;
