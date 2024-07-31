import React from 'react';
import './styles.css';

function CourseList({ courses, onEdit, onDelete }) {
    return (
        <div className="course-list">
            <h2>All Courses</h2>
            {courses.map((course, index) => (
                <div key={index} className="card">
                    <div className="card-content">
                        <h2 className="card-title">{course.title}</h2>
                        <div>
                            <span className="card-subdetail">{course.instructor}</span>
                        </div>
                        <div>          
                            <span className="card-detail">{course.description}</span>
                        </div>
                        <div>
                            <span className="card-detail">{course.duration}</span>
                        </div>
                        <p className="grey">
                            <button  className="card-edit"onClick={() => onEdit(course)}>Edit</button>
                            <button  className="card-delete"onClick={() => onDelete(course.id)}>Delete</button>
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CourseList;
