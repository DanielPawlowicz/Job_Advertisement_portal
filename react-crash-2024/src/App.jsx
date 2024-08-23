import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import React from 'react'
import HomePage from './pagegs/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pagegs/JobsPage';
import NotFoundPage from './pagegs/NotFoundPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />}/>
      <Route path='/jobs' element={<JobsPage />}/>
      <Route path='*' element={<NotFoundPage />}/>
    </Route>
  )
);

const App = () => {

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