import { initRouter } from "./router";
import { initText } from "./components/text/index";
import { initButton } from "./components/button/index";
import { initPapper } from "./components/move/papper";
import { initRock } from "./components/move/rock";
import { initScissors } from "./components/move/scissors";

function initApp(param) {
  initRock();
  initPapper();
  initScissors();
  initText();
  initButton();
  initRouter(param);
}

(function () {
  const root = document.querySelector(".root");
  initApp(root);
})();
