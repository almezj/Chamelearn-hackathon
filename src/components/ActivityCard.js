//component that will be used to display a single activity card

import React from "react";
import "../App.css";

export default class ActivityCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.available ? (
          <a onClick={this.props.handleClick} className="cursor-pointer">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg w-full flex my-5 hover:shadow-2xl">
              <img
                className="w-20 mx-10 object-contain"
                src={this.props.image}
                alt="activity"
              />
              <div className="p-4 text-center">
                <h2 className="text-xl font-medium mb-2">{this.props.name}</h2>
                <p className="text-gray-600">{this.props.description}</p>
              </div>
            </div>
          </a>
        ) : (
          <a className="cursor-not-allowed">
            <div className="bg-gray-300 rounded-lg overflow-hidden shadow-lg w-full flex my-5 hover:shadow-2xl">
              <img
                className="w-20 mx-10 object-contain"
                src={this.props.image}
                alt="activity"
              />
              <div className="p-4 text-center">
                <h2 className="text-xl font-medium mb-2">{this.props.name}</h2>
                <p className="text-gray-600">{this.props.description}</p>
				<h2 className="text-red-600 font-bold text-xl">Comming soon...</h2>
			  </div>
            </div>
          </a>
        )}
      </div>
    );
  }
}
