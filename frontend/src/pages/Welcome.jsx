import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const [event, setEvent] = useState(false);

  const navigate = useNavigate();
  function returnHome() {
    navigate("/home");
  }

  function animate() {
    if (event) {
      return;
    }
    setEvent(true);
    setTimeout(returnHome, 3500);
  }

  function handleKeyPress(e) {
    if (e.key === "ArrowDown") {
      animate();
    }
  }

  return (
    <button
      className={`scene ${event ? "animate" : ""}`}
      onClick={animate}
      onKeyDown={handleKeyPress}
      onTouchStart={animate}
      type="button"
      tabIndex={0}
    >
      <span className="scene-1">
        <span className="instructions">Cliquez pour lancer le voyage !</span>
      </span>
      <span className="scene-2" />
    </button>
  );
}

export default Welcome;
