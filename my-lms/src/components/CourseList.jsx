// components/CourseList.js

import React, { useState } from 'react';
import './CourseList.css';

const CourseList = () => {
  const [courses] = useState([
    { id: 1, title: 'Introduction to React', description: 'Learn the basics of React.' },
    { id: 2, title: 'Advanced CSS Techniques', description: 'Master CSS with advanced techniques.' },
    { id: 3, title: 'JavaScript Fundamentals', description: 'Learn the fundamentals of JavaScript.' },
  ]);

  return (
    <div className="course-list-container">
      <h1>Course List</h1>
      {courses.map((course) => (
        <div key={course.id} className="course-card">
          <h3>{course.title}</h3>
          <p>{course.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CourseList;
