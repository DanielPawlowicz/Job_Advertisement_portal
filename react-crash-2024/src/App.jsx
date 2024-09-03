import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import React from 'react'
import HomePage from './pagegs/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pagegs/JobsPage';
import NotFoundPage from './pagegs/NotFoundPage';
import JobPage, {jobLoader} from './pagegs/JobPage';
import AddJobPage from './pagegs/AddJobPage';

const App = () => {

  // Add new Job
  const addJob = async (newJob) => {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob),
    });
    return;
  };

  // Delete job
  const deleteJob = async (id) =>{
    console.log('delete', id);
  };
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />}/>
        <Route path='/jobs' element={<JobsPage />}/>
        <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob}/>}/>
        <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob}/>} loader={jobLoader}/>
        <Route path='*' element={<NotFoundPage />}/>
      </Route>
    )
  );

  return <RouterProvider router={router}/>

  // return (
  //   <>
  //   <Navbar />
  //   <Hero 
  //   // title="Test Title" subtitle="This is the subtitle"
  //   />
  //   <HomeCards />

  //   <JobListings />

  //   <ViewAllJobs />
  //   </>
  // )
}

export default App