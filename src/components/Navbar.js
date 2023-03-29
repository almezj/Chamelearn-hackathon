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

  render() {
    return (
      <div className="bg-custom-brown text-white flex justify-between align-middle items-center navbar-wrapper">
            <img src="chameleon.png" alt="logo" className="max-h-28 object-contain" />
            <h1 className="ml-2 text-3xl font-bold">CHAMELEARN</h1>
            <ul className="flex px-20">
              <li className="ml-6">
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
