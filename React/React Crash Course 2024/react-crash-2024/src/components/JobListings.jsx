import React from 'react'
// hocem side-efekt
import { useState, useEffect } from 'react';
import JobListing from './JobListing';

const JobListings = ({isHome = false}) => {

  //const jobListings = isHome ? jobs.slice(0,3) : jobs; // ce hocem v tem primeru zgolj tri jobe
  const [jobs, setJobs] = useState([]); // vzame ime state-a in funkcijo state-a
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetching tle
    const fetchJobs = async () => {
      try {
        const res = await fetch('http://localhost:8000/jobs');
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {
          loading ? (<h2>Loading...</h2>) : // ce loada ...
          <>
          {jobs.map((job) => ( // ce je zloadalo ...  
            <JobListing key={job.id} job={job} />
        ))}
         </>
        }


      </div>
    </div>
  </section>
  )
}

export default JobListings