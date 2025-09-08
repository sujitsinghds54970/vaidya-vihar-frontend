import { useEffect, useState } from 'react';
import axios from '../api/axios';
import Header from '../components/Header';
import './Dashboard.css';

function Dashboard() {
  const [summary, setSummary] = useState({});

  useEffect(() => {
    axios.get('/admin/summary')
      .then(res => setSummary(res.data))
      .catch(err => console.error('Error fetching dashboard data:', err));
  }, []);

  return (
    <>
      <Header />
      <div className="dashboard-container">
        <div className="dashboard-card">
          <h3>Total Patients</h3>
          <p>{summary.total_patients || 0}</p>
        </div>
        <div className="dashboard-card">
          <h3>Total Revenue</h3>
          <p>₹{summary.total_revenue || 0}</p>
        </div>
        <div className="dashboard-card">
          <h3>Total Tests</h3>
          <p>{summary.total_tests || 0}</p>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
