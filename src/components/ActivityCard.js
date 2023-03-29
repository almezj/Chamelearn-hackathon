//component that will be used to display a single activity card

import React from "react";
import "../App.css";

export default class ActivityCard extends React.Component {

	constructor(props) {
		super(props);
	}



  render() {
    return (
      <a onClick={this.props.handleClick} className="cursor-pointer">
        <div
          className="bg-white rounded-lg overflow-hidden shadow-lg w-full hover:shadow-2xl grid">
          <img className="w-full" src={this.props.image} alt="activity" />
          <div className="p-4 text-center">
            <h2 className="text-xl font-medium mb-2">{this.props.name}</h2>
            <p className="text-gray-600">{this.props.description}</p>
          </div>
        </div>
      </a>
    );
  }
}
