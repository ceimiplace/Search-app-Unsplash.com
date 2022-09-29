import React, { useState } from "react";
function SearchBar({ submited }) {
  const [searchtem, setSearchterm] = useState("");

  return (
    <div className="searchBar">
      <form
        onSubmit={submited(searchtem)}
        className=" border-black-700  shadow p-3"
      >
        <label className="font-bold block mb-4">Image search</label>
        <input
          type="text"
          className="block w-full border-slate-300 border-2 rounded"
          value={this.state.term}
          onChange={(e) => setSearchterm(e.target.value)}
        />
      </form>
    </div>
  );
}
export default SearchBar;
