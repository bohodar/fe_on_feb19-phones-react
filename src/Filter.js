import React from 'react';

const Filter = () => {
  return (
    <section>
      <p>
        Search:
        <input />
      </p>

      <p>
        <button
          className="sort-button"
          onClick={()=>alert('Function in work-process')}
        >
          Sort by Alphabetical
        </button>
      </p>
    </section>
  );
};

export default Filter;
