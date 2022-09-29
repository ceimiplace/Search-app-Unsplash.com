import React from "react";
class SearchBar extends React.Component {
  state = { term: "cars" };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.submited(this.state.term);
  };
  render() {
    return (
      <div className="searchBar">
        <form
          onSubmit={this.onSubmit}
          className=" border-black-700  shadow p-3"
        >
          <label className="font-bold block mb-4">Image search</label>
          <input
            type="text"
            className="block w-full border-slate-300 border-2 rounded"
            value={this.state.term}
            onChange={(e) => this.setState({ term: e.target.value })}
          />
        </form>
      </div>
    );
  }
}
export default SearchBar;
