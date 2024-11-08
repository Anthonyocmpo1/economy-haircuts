import React, { useState } from 'react';

function BookingForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        date: '',
        time: '',
        service: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send formData to your backend API
        alert('Booking submitted: ' + JSON.stringify(formData));
        // Reset the form after submission
        setFormData({
            name: '',
            email: '',
            date: '',
            time: '',
            service: ''
        });
    };

    return (
        <div>
            <h2>Book an Appointment</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Date:
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Time:
                        <input
                            type="time"
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Service:
                        <select
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select a service</option>
                            <option value="Haircut">Haircut</option>
                            <option value="Shave">Shave</option>
                            <option value="Coloring">Coloring</option>
                        </select>
                    </label>
                </div>
                <button type="submit">Submit Booking</button>
            </form>
        </div>
    );
}

export default BookingForm;
