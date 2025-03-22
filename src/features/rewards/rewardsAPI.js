import axios from 'axios';

export const fetchRewards = async () => {
  return await axios.get('http://localhost:3001/rewards'); // Assuming json-server is running
};