import React, { useState, useEffect } from 'react';
import { coursedetail } from './data';
import { useParams } from 'react-router-dom';

const CourseDetail = () => {
  const [openedCourse, setOpenedCourse] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const foundCourse = coursedetail.find((item) => item.id === Number(id));
    setOpenedCourse(foundCourse);
  }, [id]);

  console.log(openedCourse);

  return (
    <div>
      {openedCourse ? (
        <div>
          <h1>{openedCourse.title}</h1>
          <p>{openedCourse.description}</p>
        </div>
      ) : (
        <p>Loading course details...</p>
      )}
    </div>
  );
};

export default CourseDetail;
