import { useState, useEffect } from "react";

function ReactionActivity() {
  const [color, setColor] = useState("custom-brown");
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [text, setText] = useState("Click to start");

  useEffect(() => {
    if (color === "primary-green") {
      setText("Click now!");
      setStartTime(Date.now());
    } else if (color === "red-500") {
      setEndTime(null);
      setText("Wait for it...");
      const timeoutId = setTimeout(() => {
        setColor("primary-green");
      }, Math.floor(Math.random() * 8000) + 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [color]);

  const handleClick = () => {
    if (color === "primary-green") {
      setEndTime(Date.now());
      setText("Click again to restart");
      setColor("custom-brown");
    } else if (color === "custom-brown") {
      setColor("red-500");
    }
  };

  const handleReset = () => {
    setColor("custom-brown");
    setStartTime(null);
    setEndTime(null);
    setText("Click to start");
    console.log(color);
  };

  const reactionTime = endTime ? endTime - startTime : null;
  if(reactionTime < localStorage.getItem("topNumReaction")) {

	localStorage.setItem("topNumReaction", reactionTime);
	}

  return (
    <div className="activity-wrapper mt-1">
		<a className="mx-5 font-semibold" href="/">Back</a>
        <a className="mx-5 font-semibold" onClick={handleReset}>Reset</a>
      <div className="text-center font-bold text-2xl">Reaction Time</div>
      <div className="text-center">
        Click the box when it turns green!
      </div>
      <div className="flex justify-center align-middle ">
        
        <div
          className={`w-64 h-64 my-20 rounded-lg bg-${color} cursor-pointer shadow-2xl`}
          onClick={handleClick}
        >
          <div className="text-xl text-center mt-4">{text}</div>
          {reactionTime && (
            <div className="text-xl text-center mt-4">
              Your reaction time: {reactionTime} ms
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ReactionActivity;
