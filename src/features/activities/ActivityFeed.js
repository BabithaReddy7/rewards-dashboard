import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getActivities } from './activitiesSlice';

const ActivityFeed = () => {
  const dispatch = useDispatch();
  const { activities, loading, error } = useSelector((state) => state.activities);

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <ul>
      {activities.map((activity) => (
        <li key={activity.id}>
          {activity.description} <span>Points: {activity.points}</span>
        </li>
      ))}
    </ul>
  );
};

export default ActivityFeed;