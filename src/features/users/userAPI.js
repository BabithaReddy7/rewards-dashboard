import axios from 'axios';

export const fetchUsers = async () => {
  return await axios.get('http://localhost:3001/users'); // Assuming json-server is running
};