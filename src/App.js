import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import JobList from './Components/JobList';
import JobDetail from './Components/JobDetail';
import JobForm from './Components/JobForm';
import { getData } from './services/api';

function App() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!showForm) {
          const response = await getData();
          setJobs(response);
        }
      } catch (error) {
        console.error('Error fetching job data:', error.message);
      }
    };

    fetchData();
  }, [showForm]);

  const handleSelectJob = (job) => {
    setSelectedJob(job);
    setShowForm(false);
  };

  const handleToggleForm = () => {
    setSelectedJob(null);
    setShowForm(prevState => !prevState);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <h1 className="mb-4">Job Board</h1>
          <button className="btn btn-primary mb-3" onClick={handleToggleForm}>
            {showForm ? 'Hide Job Form' : 'Show Job Form'}
          </button>
          {showForm && <JobForm setShowForm={setShowForm} />}
          {!showForm && <JobList setSelectedJob={setSelectedJob} jobs={jobs} />}
        </div>
        {selectedJob && (
          <div className="col-md-8">
            <JobDetail job={selectedJob} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;