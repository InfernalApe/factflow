import "../styles/Display.css";
import { Typewriter } from "react-simple-typewriter";
import { useLocation } from "react-router-dom";
import Back from "../components/Back";

export default function Display() {
  const location = useLocation();
  const text = location.state?.text;
  return (
    <div className="whole">
      <Back />
      <h1 className="heading-opt"> What we found ...!! </h1>
      <div className="holder">
        <Typewriter
          words={[text]}
          cursor
          cursorStyle="|"
          typeSpeed={50}
          delaySpeed={10}
        />
      </div>
    </div>
  );
}
