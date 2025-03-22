import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logActivity } from './activitiesSlice';

const ActivityLog = () => {
  const dispatch = useDispatch();
  const [description, setDescription] = useState('');
  const [points, setPoints] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newActivity = {
      description,
      points: parseInt(points),
    };
    dispatch(logActivity(newActivity));
    setDescription('');
    setPoints('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Log New Activity</h2>
      <input
        type="text"
        placeholder="Activity Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Points"
        value={points}
        onChange={(e) => setPoints(e.target.value)}
        required
      />
      <button type="submit">Log Activity</button>
    </form>
  );
};

export default ActivityLog;