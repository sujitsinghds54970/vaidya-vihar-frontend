import { useState } from 'react';
import axios from '../api/axios';
import './Appointments.css';

function Appointments() {
  const [patientId, setPatientId] = useState('');
  const [calendarDayId, setCalendarDayId] = useState('');
  const [timeSlot, setTimeSlot] = useState('');

  const bookAppointment = () => {
    axios.post('/appointments/', {
      patient_id: parseInt(patientId),
      calendar_day_id: parseInt(calendarDayId),
      time_slot: timeSlot
    });
  };

  return (
    <div>
      <h2>Book Appointment</h2>
      <input value={patientId} onChange={e => setPatientId(e.target.value)} placeholder="Patient ID" />
      <input value={calendarDayId} onChange={e => setCalendarDayId(e.target.value)} placeholder="Calendar Day ID" />
      <input value={timeSlot} onChange={e => setTimeSlot(e.target.value)} placeholder="Time Slot (HH:MM:SS)" />
      <button onClick={bookAppointment}>Book</button>
    </div>
  );
}

export default Appointments;