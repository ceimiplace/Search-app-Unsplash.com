import { useState } from "react";

export default function SearchBar({ submited }) {
  const [term, setTerm] = useState("cats");
  const onSubmitHandler = (e) => {
    e.preventDefault();
    submited(term);
  };

  return (
    <div className="searchBar ">
      <form
        onSubmit={onSubmitHandler}
        className=" border-black-700  shadow p-3 flex justify-center flex-col"
      >
        <label className="font-bold block mb-4">Image search</label>
        <input
          type="text"
          className="block w-full border-slate-300 border-2 rounded w-4/5 max-w-lg"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </form>
    </div>
  );
}
