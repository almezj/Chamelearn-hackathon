import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

export default class MemoryActivity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: "",
      input: "",
      digits: 1,
      score: 0,
      time: 10,
      interval: null,
      gameOver: false,
      gameStarted: false,
    };
  }

  componentDidMount() {
    console.log("MemoryActivity mounted");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.state.number);
    if (this.state.gameOver && !prevState.gameOver) {
      clearInterval(this.state.interval);
    }
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  generateNumber = () => {
    // generate a number with this.state.digits digits
    let number = "";
    for (let i = 0; i < this.state.digits; i++) {
      number += Math.floor(Math.random() * 10);
    }
    this.setState({ number: number, digits: this.state.digits + 1 });
  };

  handleInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  handleStartClick = () => {
    this.setState({
      interval: setInterval(this.decrementTime, 1000),
      gameStarted: true,
    });
    this.generateNumber();
  };

  decrementTime = () => {
    if (this.state.time > 0) {
      this.setState((prevState) => ({ time: prevState.time - 1 }));
    }
  };

  handleCheckClick = () => {
    if (this.state.input === this.state.number) {
      this.setState(
        (prevState) => ({ score: prevState.score + 1 }),
        () => {
          this.generateNumber();
          this.setState({ input: "", time: 10 });
        }
      );
    } else {
      this.setState({ gameOver: true });
      if (this.state.score > localStorage.getItem("topNumMemory")) {
        localStorage.setItem("topNumMemory", this.state.score);
      }
    }
  };

  render() {
    const { score, time, number, input, gameOver, gameStarted } = this.state;

    return (
      <div className="app-wrapper">
        <Link className="mx-5 font-semibold text-left" to="/">
          Back
        </Link>
        <div className="text-center">
          <h1 className="font-bold text-2xl">Memory Number Game</h1>
          <p>Try and remember as many numbers as possible</p>
          <p>
            After 10 seconds the number will disappear and you will have to
            input the number
          </p>
          <p>
            If you get it right you will get a point and the number will be N+1
            digits
          </p>
          <p>
            If you get it wrong the game will end and you will be able to see
            your score
          </p>
        </div>
        <div className="memory-game text-center my-10">
          <div className="memory-game-top">
            <div className="memory-game-top-left">
              <p>Score: {score}</p>
            </div>
            <div className="memory-game-top-right">
              <p>Visible for: {time}</p>
            </div>
          </div>
          {gameOver ? (
            <div>
              <h2>Game over!</h2>
              <p>Your final score is: {score}</p>
            </div>
          ) : (
            <>
              <div className="memory-game-number">
                <p
                  className={
                    time == 0
                      ? "text-4xl font-bold hidden"
                      : "text-4xl font-bold"
                  }
                >
                  {number}
                </p>
              </div>
              <div className="memory-game-input">
                <input
                  type="text"
                  value={input}
                  onChange={this.handleInputChange}
                  className={
                    time === 0 ? "btn btn-primary" : "btn btn-primary hidden"
                  }
                />
              </div>
              <div className="memory-game-buttons">
                <button
                  className={
                    gameStarted ? "btn btn-primary hidden" : "btn btn-primary"
                  }
                  onClick={this.handleStartClick}
                >
                  Start
                </button>
                <button
                  className={
                    time === 0 ? "btn btn-primary" : "btn btn-primary hidden"
                  }
                  onClick={this.handleCheckClick}
                >
                  Check
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
}
