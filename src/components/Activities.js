//component that will be used as a main component that will contain cards for each activity
//The activities will be static for now, but will be fetched from the database in the future

import React from "react";
import ActivityCard from "./ActivityCard";
import "../App.css";
import ReactionActivity from "./ReactionActivity";
import { Link } from "react-router-dom";

export default class Activities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentActivity: "",
      activities: [
        {
          name: "Reaction Time",
          description: "How fast are your reactions?",
          image: "./activityicon.png",
		  available: true,
        },
        {
          name: "Memory Number Game",
          description: "Try and remember as many numbers as possible",
          image: "./activityicon.png",
		  available: true,
        },
        {
          name: "Memory Blocks Game",
          description: "Try to remember the order of the blocks",
          image: "./activityicon.png",
		  available: false,
        },
        {
          name: "TBA",
          description: "Game to be announced",
          image: "./activityicon.png",
		  available: false,
        },
        {
          name: "TBA",
          description: "Game to be announced",
          image: "./activityicon.png",
		  available: false,
        },
        {
          name: "TBA",
          description: "Game to be announced",
          image: "./activityicon.png",
		  available: false,
        },
        {
          name: "TBA",
          description: "Game to be announced",
          image: "./activityicon.png",
		  available: false,
        },
        {
          name: "TBA",
          description: "Game to be announced",
          image: "./activityicon.png",
		  available: false,
        },
      ],
    };
  }

  componentDidMount() {
    console.log("Activities mounted");
  }


  handleActivityClick = (activity) => {
    this.setState({ currentActivity: activity.name });
	if(activity.name == "Reaction Time"){
		window.location.href = "/ReactionActivity";
	} else if (activity.name == "Memory Number Game"){
		window.location.href = "/MemoryActivity";
	}
  };

  render() {
    return (
      <div className="app-wrapper">
        <div className="activities-wrapper flex justify-center align-top my-10 mx-10">
          <div className="grid grid-cols-2 gap-10">
            {this.state.activities.map((activity) => (
              <ActivityCard
                key={activity.name}
                name={activity.name}
                description={activity.description}
                image={activity.image}
				available={activity.available}
                handleClick={() => this.handleActivityClick(activity)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
