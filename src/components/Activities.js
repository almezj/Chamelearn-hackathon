//component that will be used as a main component that will contain cards for each activity
//The activities will be static for now, but will be fetched from the database in the future

import React from "react";
import ActivityCard from "./ActivityCard";
import "../App.css";
import ReactionActivity from "./ReactionActivity";

export default class Activities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentActivity: "",
      activities: [
        {
          name: "Reaction Time",
          description: "This is the description for activity 1",
          image: "https://picsum.photos/200/300",
        },
        {
          name: "Memory Game",
          description: "This is the description for activity 2",
          image: "https://picsum.photos/200/300",
        },
        {
          name: "Memory Game 2",
          description: "This is the description for activity 3",
          image: "https://picsum.photos/200/300",
        },
        {
          name: "Other Game",
          description: "This is the description for activity 4",
          image: "https://picsum.photos/200/300",
        },
      ],
    };
  }

  componentDidMount() {
    console.log("Activities mounted");
  }


  handleActivityClick = (activity) => {
    this.setState({ currentActivity: activity.name });
  };

  render() {
    return (
      <div className="app-wrapper">
		<div className="activity-component">
			<a onClick={this.setState({currentActivity: ""})}>Go back</a>
			<h1>{this.state.currentActivity}</h1>
			<ReactionActivity />
		</div>
        <div className="activities-wrapper flex justify-center align-top my-10 mx-10">
          <div className="grid grid-cols-2 gap-10">
            {this.state.activities.map((activity) => (
              <ActivityCard
                key={activity.name}
                name={activity.name}
                description={activity.description}
                image={activity.image}
                handleClick={() => this.handleActivityClick(activity)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
