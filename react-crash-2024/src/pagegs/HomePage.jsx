import Hero from '../components/Hero'
import React from 'react'
import HomeCards from '../components/HomeCards'
import JobListings from '../components/JobListings'
import ViewAllJobs from '../ViewAllJobs'

const HomePage = () => {
  return (
    <>
        <Hero />
        <HomeCards />
        <JobListings />
        <ViewAllJobs />
    </>
  )
}

export default HomePage