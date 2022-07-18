import "./FilterFooter.css";
import React, { useState } from "react";

const FilterFooter = (props) => {
  const { tasks, updateFilter } = props;
  //state filter
  const [filter, setFilter] = useState("all");

  const handleFilter = (filterName) => {
    setFilter(filterName);
    updateFilter(filterName);
  };
  return (
    <div className="FilterFooter">
      <div className="FilterFooter--countItems">{tasks.length}</div>
      <div className="FilterFooter--filters">
        <ul>
          <li>
            <button
              onClick={() => handleFilter("all")}
              className={filter === "all" ? "active" : ""}
            >
              All
            </button>
          </li>
          <li>
            <button
              onClick={() => handleFilter("active")}
              className={filter === "active" ? "active" : ""}
            >
              Active
            </button>
          </li>
          <li>
            <button
              onClick={() => handleFilter("completed")}
              className={filter === "completed" ? "active" : ""}
            >
              Completed
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FilterFooter;
