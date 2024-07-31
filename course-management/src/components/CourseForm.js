import React, { useState, useEffect } from 'react';

function CourseForm({ addCourse, editingCourse, updateCourse }) {
    const [courseData, setCourseData] = useState({
        title: "",
        description: "",
        duration: "",
        instructor: ""
    });

    useEffect(() => {
        if (editingCourse) {
            setCourseData(editingCourse);
        }
    }, [editingCourse]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCourseData({ ...courseData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingCourse) {
            updateCourse(courseData);
        } else {
            addCourse(courseData);
        }
        setCourseData({
            title: "",
            description: "",
            duration: "",
            instructor: ""
        });
    };

    return (
        <form onSubmit={handleSubmit} className="course-form">
            <h2>Add New Course</h2>
            <input
                type="text"
                name="title"
                value={courseData.title}
                onChange={handleChange}
                placeholder="Course Title"
                required
            />
            <textarea
                name="description"
                value={courseData.description}
                onChange={handleChange}
                placeholder="Description"
                required
            />
            <input
                type="text"
                name="duration"
                value={courseData.duration}
                onChange={handleChange}
                placeholder="Duration"
                required
            />
            <input
                type="text"
                name="instructor"
                value={courseData.instructor}
                onChange={handleChange}
                placeholder="Instructor"
                required
            />
            <button type="submit">{editingCourse ? "Update Course" : "Add Course"}</button>
        </form>
    );
}

export default CourseForm;
