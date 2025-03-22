import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'; // Add this line to import axios
import { fetchActivities } from './activityAPI';

export const getActivities = createAsyncThunk('activities/getActivities', async () => {
  const response = await fetchActivities();
  return response.data;
});

// New action to log an activity
export const logActivity = createAsyncThunk('activities/logActivity', async (activity) => {
  const response = await axios.post('http://localhost:3001/activities', activity);
  return response.data;
});

const activitiesSlice = createSlice({
  name: 'activities',
  initialState: {
    activities: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getActivities.pending, (state) => {
        state.loading = true;
      })
      .addCase(getActivities.fulfilled, (state, action) => {
        state.loading = false;
        state.activities = action.payload;
      })
      .addCase(getActivities.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(logActivity.fulfilled, (state, action) => {
        state.activities.push(action.payload);
      });
  },
});

export default activitiesSlice.reducer;