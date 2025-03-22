import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRewards } from './rewardsSlice';

const RewardsList = () => {
  const dispatch = useDispatch();
  const { rewards, loading, error } = useSelector((state) => state.rewards);

  useEffect(() => {
    dispatch(getRewards());
  }, [dispatch]);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div>
      <h2>Available Rewards</h2>
      <ul>
        {rewards.map((reward) => (
          <li key={reward.id}>
            {reward.name} <span>Points: {reward.points}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RewardsList;