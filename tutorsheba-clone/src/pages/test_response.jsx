

import  { setJobListings, setLoading,defaultJobListings,setTotalJobs } from 'react';

const fetchJobListings = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:5000/api/auth/get_tutor_request');
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log("API Response:", data); // Debugging
  
      if (data && data.jobs) {
        setJobListings(data.jobs);
        setTotalJobs(data.total || 4748);
      } else {
        setJobListings(defaultJobListings);
      }
    } catch (error) {
      console.error('Error fetching job listings:', error);
      setJobListings(defaultJobListings);
    } finally {
      setLoading(false);
    }
  };
  
  export default fetchJobListings;