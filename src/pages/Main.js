import { useState } from "react";
import { useParams } from "react-router-dom";
import "../Main.css";

export default function Main(props) {
  const [isActive, setIsActive] = useState(false);
  setTimeout(() => setIsActive(true), 0);

  return (
    <div id="main">
      <div className={"welcome_box" + (isActive ? " onTransition" : "")}>
        <div className="welcome_innerbox">
          <div className="welcome_title">WELCOME TO MY PORTFOLIO</div>
          <div className="welcome_summary">
            9년차 UI개발자 박현원입니다.
            <br />
            반갑습니다. :)
          </div>
          {/* <div class="welcome_summary2">
            본 페이지는 React.js로 제작되었습니다.
          </div> */}
        </div>
      </div>
    </div>
  );
}
