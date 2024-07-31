import React, { useState } from 'react';

function AddJob({ addJob }) {
    const [formData, setFormData] = useState({
        title: "",
        companyname: "",
        location: "",
        salary: "",
        type: "",
        description: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addJob(formData);
        setFormData({
            title: "",
            companyname: "",
            location: "",
            salary: "",
            type: "",
            description: ""
        });
    };

    return (
        <form onSubmit={handleSubmit} className="add-job-form">
            <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Job Title"
                required
            />
            <input
                type="text"
                name="companyname"
                value={formData.companyname}
                onChange={handleChange}
                placeholder="Company"
                required
            />
            <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Location"
                required
            />
            <input
                type="text"
                name="salary"
                value={formData.salary}
                onChange={handleChange}
                placeholder="Salary"
                required
            />
            <input
                type="text"
                name="type"
                value={formData.type}
                onChange={handleChange}
                placeholder="Type"
                required
            />
            <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Description"
                required
            />
            <button type="submit" style={{color:'black', backgroundColor:'white'}}>Add Job</button>
        </form>
    );
}

export default AddJob;
