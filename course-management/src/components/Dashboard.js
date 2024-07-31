import React, { useState } from 'react';
import CourseForm from './CourseForm';
import CourseList from './CourseList';



const initialCourses = [
    { id: 1, title: "React Basics", description: "Introduction to React", duration: "3 hours", instructor: "John Doe" },
    { id: 2, title: "Advanced React", description: "Deep dive into React", duration: "5 hours", instructor: "Jane Smith" },
    { id: 3, title: "Phython Basics", description: "Introduction to Python", duration: "3 hours", instructor: "John Doe" },
    { id: 4, title: "Advanced Python", description: "Deep dive into Python", duration: "5 hours", instructor: "Jane Smith" },
    { id: 5, title: "Java Basics", description: "Introduction to Java", duration: "3 hours", instructor: "John Doe" },
    { id: 6, title: "Advanced Java", description: "Deep dive into Java", duration: "5 hours", instructor: "Jane Smith" },

];

function Dashboard() {
    const [courses, setCourses] = useState(initialCourses);
    const [editingCourse, setEditingCourse] = useState(null);

    const addCourse = (course) => {
        setCourses([...courses, { ...course, id: Date.now() }]);
    };

    const updateCourse = (updatedCourse) => {
        setCourses(courses.map(course => (course.id === updatedCourse.id ? updatedCourse : course)));
        setEditingCourse(null);
    };

    const deleteCourse = (courseId) => {
        setCourses(courses.filter(course => course.id !== courseId));
    };

    const handleEdit = (course) => {
        setEditingCourse(course);
    };

    return (
        <div className="dashboard">
            <h1 style={{backgroundColor:'#007bff', color:'white', padding:'15px'}}>Course Creation and Management</h1>
           <CourseList courses={courses} onEdit={handleEdit} onDelete={deleteCourse} />
            <CourseForm addCourse={addCourse} editingCourse={editingCourse} updateCourse={updateCourse} />
            
        </div>

            );
        };


export default Dashboard;

