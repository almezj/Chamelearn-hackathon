// component that will be just a single button that will toggle the dropdown

import React from "react";
import "../App.css";

export default class StatsDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
      topReaction: 0,
      topNumMemory: 0,
    };
  }

  componentDidMount() {
    //take top reaction and top num memory from local storage
    //set them to state

    this.setState({
      topReaction: localStorage.getItem("topReaction") || 0,
      topNumMemory: localStorage.getItem("topNumMemory") || 0,
    });
  }

  toggleDropdown = () => {
    this.setState({ dropdownOpen: !this.state.dropdownOpen });
  };

  render() {
    return (
      <div className="dropdown">
        <button className="dropdown-button" onClick={this.toggleDropdown}>
          Stats
        </button>
        {this.state.dropdownOpen && (
          <div className="dropdown-content">
            <p>Reaction: {this.state.topReaction}ms</p>
            <p>Number memory: {this.state.topNumMemory}</p>
          </div>
        )}
      </div>
    );
  }
}
