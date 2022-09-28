import { Component } from "react";

class SearchBox extends Component {
  render() {
    return (
      <div className="searchBox">
        <input
          className={this.props.className}
          type="search"
          placeholder={this.props.placeholder}
          onChange={this.props.onChangeHandler}
        />
      </div>
    );
  }
}

export default SearchBox;
