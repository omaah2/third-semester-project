import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import FullCalendar from "@fullcalendar/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import dayGridPlugin from "@fullcalendar/daygrid";
import "./BookAppointment.css";

interface Props {
  // Define props if any
}

// Define Appointment interface
interface Appointment {
  id: number;
  date: Date;
  name: string;
  email: string;
  message: string;
}

const BookAppointment: React.FC<Props> = () => {
  // State to manage form inputs and selected date
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [showCalendar, setShowCalendar] = useState(false); // State to control calendar visibility
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  // Fetch appointments from backend when component mounts
  useEffect(() => {
    fetchAppointments();
  }, []);

  // Function to fetch appointments from backend
  const fetchAppointments = () => {
    // Mock appointments for demonstration
    const mockAppointments: Appointment[] = [
      {
        id: 1,
        date: new Date(),
        name: "John Doe",
        email: "john@example.com",
        message: "Appointment for checkup",
      },
      {
        id: 2,
        date: new Date(),
        name: "Jane Smith",
        email: "jane@example.com",
        message: "Appointment for consultation",
      },
    ];
    setAppointments(mockAppointments);
  };

  // Handler function to update form data
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handler function to handle date selection
  const handleDateSelect = (selectInfo: any) => {
    setSelectedDate(selectInfo.startStr);
    setShowCalendar(false); // Hide the calendar after date selection
  };

  // Handler function to toggle calendar visibility
  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  // Handler function to submit the form
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your logic to handle form submission (e.g., API call)
    const newAppointment: Appointment = {
      id: appointments.length + 1, // Generate a unique ID for the new appointment
      date: new Date(selectedDate),
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };
    setAppointments([...appointments, newAppointment]); // Add the new appointment to the existing list
    // Reset form fields after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    setSelectedDate("");
  };

  return (
    <div className="body">
      <Link to="/" className="home-button">
        Back to Home
        <FontAwesomeIcon icon={faHome} />
      </Link>
      <div className="booking">
        <div className="book-appointment-container">
          <h2>Book Appointment</h2>
          <button onClick={toggleCalendar}>Select Date</button>
          {showCalendar && (
            <FullCalendar
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              selectable={true}
              select={handleDateSelect}
            />
          )}
          {selectedDate && (
            <div className="selected-date">Selected Date: {selectedDate}</div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button className="btn" type="submit">
              Book Appointment
            </button>
          </form>
        </div>
        {appointments.length > 0 && (
          <div className="appointments-container">
            <h2>Booked Appointments</h2>
            <ul>
              {appointments.map((appointment) => (
                <li key={appointment.id}>
                  <p>Date: {String(appointment.date)}</p>
                  <p>Name: {appointment.name}</p>
                  <p>Email: {appointment.email}</p>
                  <p>Message: {appointment.message}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookAppointment;
