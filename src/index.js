import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DurationPage from './pages/DurationPage';
import RatingPage from './pages/RatingPage';
import ResponseTimePage from './pages/ResponseTimePage';
import TagPage from './pages/TagPage';
import TotalChatPage from './pages/TotalChatPage';
import Navbar from './components/Navbar/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/duration-report" element={<DurationPage />} />
        <Route exact path="/ratings-report" element={<RatingPage />} />
        <Route exact path="/response-time-report" element={<ResponseTimePage />} />  
        <Route exact path="/tags-report" element={<TagPage />} />
        <Route path="/total-chats-report" element={<TotalChatPage />} />
      </Routes>
    </BrowserRouter>
);