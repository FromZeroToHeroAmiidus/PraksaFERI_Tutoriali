import React from 'react'
// hocem side-efekt
import { useState, useEffect } from 'react';
import JobListing from './JobListing';
import Spinner from './Spinner';

const JobListings = ({isHome = false}) => {

  //const jobListings = isHome ? jobs.slice(0,3) : jobs; // ce hocem v tem primeru zgolj tri jobe
  const [jobs, setJobs] = useState([]); // vzame ime state-a in funkcijo state-a
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetching tle
    const fetchJobs = async () => {
      const apiUrl = isHome ? '/api/jobs?_limit=3' : 
      '/api/jobs'
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data);
      }catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    }
    fetchJobs();
  },[]);

  return (
    <section className="bg-blue-50 px-4 py-10">
    <div className="container-xl lg:container m-auto">
      <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
        {isHome ? "Recent Jobs" : "Browse Jobs"}
      </h2>

        {
          loading ? (<Spinner loading={loading}/>) : // ce loada ...
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {jobs.map((job) => ( // ce je zloadalo ...  
            <JobListing key={job.id} job={job} />
        ))}
         </ div>
        }



    </div>
  </section>
  )
}

export default JobListings