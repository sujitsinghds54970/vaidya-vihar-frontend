import { useEffect, useState } from 'react';
import axios from '../api/axios';
import './LabResults.css'; // We'll create this CSS file next

function LabResults() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios.get('/lab-results/')
      .then(res => setResults(res.data))
      .catch(err => console.error('Error fetching lab results:', err));
  }, []);

  return (
    <div className="lab-results-container">
      <h2>Lab Results</h2>
      <ul className="lab-results-list">
        {results.map(r => (
          <li key={r.id} className="lab-result-item">
            <strong>Patient ID:</strong> {r.patient_id} <br />
            <strong>Test:</strong> {r.test_name} <br />
            <strong>Result:</strong> {r.result_value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LabResults;