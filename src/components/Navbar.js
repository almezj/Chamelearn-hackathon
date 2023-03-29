// import the React library
import React from "react";
// import the Link component from react-router-dom
import { Link } from "react-router-dom";
import StatsDropdown from "./StatsDropdown";
import "../App.css";

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    };
  }

  componentDidMount() {
    if (localStorage.getItem("topNumMemory") === null) {
      localStorage.setItem("topNumMemory", 0);
    }
    if (localStorage.getItem("topReaction") === null) {
      localStorage.setItem("topReaction", 0);
    }
  }



  render() {
    return (
      <div className="bg-custom-brown text-white flex justify-between align-middle items-center navbar-wrapper">
        <img
          src="chameleon.png"
          alt="logo"
          className="max-h-28 object-contain"
        />
        <h1 className="ml-2 text-5xl font-bold text-custom-yellow">Chame-Learn</h1>
        <ul className="flex px-20">
          <li className="ml-6 text-custom-yellow ">
            {this.state.loggedIn ? (
              <p className="cursor-pointer">Login</p>
            ) : (
              <StatsDropdown />
            )}
          </li>
        </ul>
      </div>
    );
  }
}
