import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from './features/users/UserList';
import ActivityFeed from './features/activities/ActivityFeed';
import ActivityLog from './features/activities/ActivityLog';
import RewardsList from './features/rewards/RewardsList';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <h1>Rewards Management Dashboard</h1>
        <nav>
          <ul>
            <li><a href="/">Users</a></li>
            <li><a href="/activities">Activities</a></li>
            <li><a href="/rewards">Rewards</a></li>
            <li><a href="/log-activity">Log Activity</a></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/activities" element={<ActivityFeed />} />
          <Route path="/log-activity" element={<ActivityLog />} />
          <Route path="/rewards" element={<RewardsList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;