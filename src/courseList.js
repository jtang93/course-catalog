import React, { useEffect } from "react";
import allCourses from "./courses";

function CourseList(props) {
  const filterCourses = selectedTag => {
    if (selectedTag === null) {
      return allCourses;
    }
    return allCourses.filter(course => course.tags.includes(selectedTag));
  };

  const renderCards = () => {
    let filteredCourses = filterCourses(props.clickedTag);
    let courseCards = filteredCourses.map(course => (
      <div className="courseCard">
        <div className="courseCardTitle">{course.title}</div>
        <img className="courseImg" src={course.image} alt={course.slug} />
      </div>
    ));

    return <div className="courseList">{courseCards}</div>;
  };

  return renderCards();
}

export default CourseList;
