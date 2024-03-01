import React from 'react';
import { Link } from 'react-router-dom'; 
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Main</Link>
        </li>
        <li>
          <Link to="/duration-report">Duration Report</Link>
        </li>
        <li>
          <Link to="/ratings-report">Rating Report</Link>
        </li>
        <li>
          <Link to="/response-time-report">Response Time Report</Link>
        </li>
        <li>
          <Link to="/tags-report">Tag Report</Link>
        </li>
        <li>
          <Link to="/total-chats-report">Total Chat Report</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;