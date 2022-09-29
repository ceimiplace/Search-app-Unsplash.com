import React, { useState } from "react";
function SearchBar({ submited, currentValue }) {
  const [searchtem, setSearchterm] = useState(currentValue);

  return (
    <div className="searchBar">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submited(searchtem);
        }}
        className=" border-black-700  shadow p-3"
      >
        <label className="font-bold block mb-4">Image search</label>
        <input
          type="text"
          className="block w-full border-slate-300 border-2 rounded"
          value={searchtem}
          onChange={(e) => setSearchterm(e.target.value)}
        />
      </form>
    </div>
  );
}
export default SearchBar;
