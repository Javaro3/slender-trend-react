import React from 'react';
import './List.css';
import { Link } from 'react-router-dom';

const List = ({ items }) => {
  return (
    <ul className="beautiful-list">
      {items.map((item) => (
        <Link to={item.path} key={item.path} className="beautiful-list-item">
          {item.value}
        </Link>
      ))}
    </ul>
  );
};

export default List;