import React from "react";
import courses from "./courses.js";

function Tags(props) {
  const uniqueTags = () => {
    let tagsObj = {};
    courses.forEach(course => {
      for (const tag of course.tags) {
        tagsObj[tag] ? tagsObj[tag]++ : (tagsObj[tag] = 1);
      }
    });
    let sortedTagsObj = {};
    for (const key of Object.keys(tagsObj).sort()) {
      sortedTagsObj[key] = tagsObj[key];
    }
    return sortedTagsObj;
  };

  const renderTags = () => {
    let tagsList = [];
    let tagsObj = uniqueTags();
    for (const tag in tagsObj) {
      tagsList.push(
        <button
          className="tagButton"
          id={tag}
          data-active="false"
          onClick={props.clickHandler}
        >
          {tag} | {tagsObj[tag]}
        </button>
      );
    }
    return tagsList;
  };

  return <div className="tagsList">{renderTags()}</div>;
}

export default Tags;
