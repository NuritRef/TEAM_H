import "./style.css";
import FooterStart from "../../../components/common/FooterStart";
import Frame from "../../../assets/img/logo/Frame.png";
import { useContext, useState, useEffect } from "react";
import { pageNameContext } from "../../../components/layout/Layout.js";
import UmooveApi from "../../../components/api/UmooveApi";
import { useNavigate } from "react-router-dom";

function StartFocus() {
  const [mirror, setMirror] = useState("");
  const [focusIsOk, setFocusIsOk] = useState(false);
  const { RoundNumber, setRoundNumber } = useContext(pageNameContext);
  const nevigate = useNavigate();
  const title = `START ROUND ${RoundNumber}/4`;
  const explanation1 =
    "Starting from arms length, press play and then slowly bring device towards your nose. When it starts to feel uncomfortable or you see more than one dot click stop";
  const explanation2 =
    "Now while looking at the dot pull the device slowly away back to arms length. When at arms length, click start to do another round";

  useEffect(() => {
    UmooveApi.API_loadUmooveLibrary()
      .then((stream) => {
        setMirror(stream);
        // console.log(mirror);
      })
      .catch((err) => {
        console.log(err);
        // console.log(mirror);
      });
  }, []);

  function startFunction() {
    let count = 0;
    UmooveApi.API_startUmoove();
    const interval = setInterval(() => {
      console.log(count);
      if (UmooveApi.API_getUmooveTracking()) {
        clearInterval(interval);
        setRoundNumber(RoundNumber + 1);
        nevigate("/train-focus/exercise");
      } else if (count < 200) {
        count++;
      } else {
        alert("Look at the camera");
        count = 0;
      }
    }, 10);
  }

  localStorage.setItem("posX", 200); // ה200 הוא פייק. לקבל משתנה מאורית

  return (
    <div>
      <div
        className="localLook"
        style={{ left: localStorage.getItem("posX") + "px" }}
      >
        <div className="purpleDotDot"></div>
        <div className="arrowToDot"></div>
        <div className="anderDotText">
          <p>Focus on the {"\n"}dot above</p>
        </div>
        <video width="320" height="240">
          <source src={mirror} type="video/mp4"></source>
        </video>
      </div>

      {/* <FooterStart
        startFunction={startFunction}
        title={title}
        explanation={explanation}
        route = {route}
        img = {Frame}
        // img = "https://d3m9l0v76dty0.cloudfront.net/system/photos/8904572/original/79dae6ad3800cd1d9209e6ff1a4d6de3.jpg"
      /> */}
    </div>
  );
}

export default StartFocus;
