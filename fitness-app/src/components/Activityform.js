import React, { useState } from 'react';

const ActivityForm = ({ addActivity }) => {
    const [formData, setFormData] = useState({
        challenge: '',
        description: '',
        startdate: '',
        enddate: '',
        goal: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addActivity(formData);
        setFormData({
            challenge: '',
            description: '',
            startdate: '',
            enddate: '',
            goal: '',
            
        });
    };

    return (
        <form onSubmit={handleSubmit} className="container mt-4">
            <div className="mb-3">
                <label className="form-label">Challenge</label>
                <input
                    type="text"
                    className="form-control"
                    name="challenge"
                    value={formData.challenge}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea
                    className="form-control"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Start Date</label>
                <input
                    type="date"
                    className="form-control"
                    name="startdate"
                    value={formData.startdate}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mb-3">
                <label className="form-label">End Date</label>
                <input
                    type="date"
                    className="form-control"
                    name="enddate"
                    value={formData.enddate}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Goal</label>
                <input
                    type="text"
                    className="form-control"
                    name="goal"
                    value={formData.goal}
                    onChange={handleChange}
                    required
                />
            </div>
            
            <button type="submit" className="btn btn-primary">Add Activity</button>
        </form>
    );
};

export default ActivityForm;
