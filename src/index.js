import _ from "lodash";
import "./index.css";
import Icon from "./bg.png";

function component() {
  let element = document.createElement("div");
  // lodash
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  // css
  element.classList.add("hello");
  // img
  let myIcon = new Image();
  myIcon.src = Icon;
  myIcon.width = "300";
  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());
