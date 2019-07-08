import React from 'react';

const Filter = (props) => {
  const { onSort, sortDirect } = props;
  return (
    <section className="filter">
      <input placeholder="Search :" onClick={() => alert("Sorry, i'm working on searching element yet")}/>
      <button
        className="sort-button"
        onClick={()=> onSort()}
      >
        Sort by Alphabetical: <span>{!sortDirect ? "A-Z" : 'Z-A'}</span>
      </button>
    </section>
  );
};

export default Filter;
