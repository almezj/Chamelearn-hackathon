// component that will be just a single button that will toggle the dropdown

import React from 'react';
import '../App.css';

export default class StatsDropdown extends React.Component {
	  constructor(props) {
	super(props);
	this.state = {
	  dropdownOpen: false,
	};
  }

  toggleDropdown = () => {
	this.setState({ dropdownOpen: !this.state.dropdownOpen });
  };

  render() {
	return (
	  <div className="dropdown">
		<button
		  className="dropdown-button"
		  onClick={this.toggleDropdown}
		>
		  Stats
		</button>
		{this.state.dropdownOpen && (
		  <div className="dropdown-content">
			<p>Stats</p>
		  </div>
		)}
	  </div>
	);
  }
}