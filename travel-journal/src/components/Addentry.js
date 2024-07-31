
import React, { useState } from 'react';
import './Addentry.css'; // Import the CSS file

function Addentry({ addEntry }) {
    const [formData, setFormData] = useState({
        title: "",
        location: "",
        googleMapsUrl: "",
        startDate: "",
        endDate: "",
        description: "",
        imageUrl: "",
        class: "image-class"
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addEntry(formData);
        setFormData({
            title: "",
            location: "",
            googleMapsUrl: "",
            startDate: "",
            endDate: "",
            description: "",
            imageUrl: "",
            class: "image-class"
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <ul>
                <li>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="Title"
                        required
                    />
                </li>
                <li>
                    <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="Location"
                        required
                    />
                </li>
                <li>
                    <input
                        type="url"
                        name="googleMapsUrl"
                        value={formData.googleMapsUrl}
                        onChange={handleChange}
                        placeholder="Google Maps URL"
                        required
                    />
                </li>
                <li>
                    <input
                        type="text"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                        placeholder="Start Date"
                        required
                    />
                </li>
                <li>
                    <input
                        type="text"
                        name="endDate"
                        value={formData.endDate}
                        onChange={handleChange}
                        placeholder="End Date"
                        required
                    />
                </li>
                <li>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Description"
                        required
                    />
                </li>
                <li>
                    <input
                        type="text"
                        name="imageUrl"
                        value={formData.imageUrl}
                        onChange={handleChange}
                        placeholder="Image URL"
                        required
                    />
                </li>
                <li>
                    <button type="submit" style={{color:'white', fontWeight:'bold', backgroundColor:'#F55A5A', border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    justifyItems: 'flex-end'}}>Submit</button>
                </li>
            </ul>
        </form>
    );
}

export default Addentry;
