import "./FilterFooter.css";
const FilterFooter = () => {
  return (
    <div className="FilterFooter">
      <div className="FilterFooter--countItems">2 items</div>
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
