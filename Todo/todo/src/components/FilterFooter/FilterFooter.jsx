import "./FilterFooter.css";
const FilterFooter = (props) => {
  const { tasks } = props;
  return (
    <div className="FilterFooter">
      <div className="FilterFooter--countItems">{tasks.length }</div>
      <div className="FilterFooter--filters">
        <ul>
          <li>
            <button>All</button>
          </li>
          <li>
            <button>Active</button>
          </li>
          <li>
            <button className="active">Completed</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FilterFooter;
