//Component that will render a new page that will display the current activity name
// It will also contain a div that will wait for the user to click on it
// When the user clicks on it, the div will change color
// after a random amount of time from 3 to 10 seconds, the div will change to blue color and the user will be able to click on it again
//After the user clicks on the div, the time it took for the div to change color will be recorded and displayed on the screen

import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

export default class ReactionActivity extends React.Component {
	  constructor(props) {
	super(props);
	this.state = {
	  time: 0,
	  color: "green",
	  isClicked: false,
	};
  }

  //function that will be used to change the color of the div
  changeColor = () => {
	let randomTime = Math.floor(Math.random() * 8 + 3);
	this.setState({ time: randomTime });
	setTimeout(() => {
	  this.setState({ color: "blue" });
	}, randomTime * 1000);
  };

  //function that will be used to change the color of the div back to green
  //and start the timer again
  resetColor = () => {
	this.setState({ color: "green", isClicked: false });
  };

  //function that will be used to record the time it took for the user to click on the div
  //and display it on the screen
  recordTime = () => {
	this.setState({ isClicked: true });
	let time = this.state.time;
	alert(`Your time is: ${time} seconds`);
  };

  render() {
	return (
	  <div className="reaction-activity-wrapper flex justify-center align-top my-10 mx-10">
		<div className="grid grid-cols-2 gap-10">
		  <div
			className="reaction-activity"
			style={{ backgroundColor: this.state.color }}
			onClick={
			  this.state.color === "green"
				? this.changeColor
				: this.state.isClicked
				? this.resetColor
				: this.recordTime
			}
		  ></div>
		</div>
	  </div>
	);
  }
}