// src/components/Appointments.jsx

import React, { useEffect, useState } from 'react';
import axiosInstance from '../api/axiosInstance';

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axiosInstance.get('/appointments')
      .then(response => {
        setAppointments(response.data);
      })
      .catch(error => {
        console.error('Error fetching appointments:', error);
        setError('Failed to load appointments');
      });
  }, []);

  return (
    <div>
      <h2>Appointments</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {appointments.map((appt) => (
          <li key={appt.id}>
            {appt.patient_name} — {appt.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Appointments;