import axios from 'axios';

export const fetchActivities = async () => {
  return await axios.get('http://localhost:3001/activities'); // Assuming json-server is running
};