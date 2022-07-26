import { initRouter } from "./router";
import "./components/button";
import "./components/paper";
import "./components/tijera";
import "./components/piedra";

(function () {
  const root = document.querySelector(".root");
  initRouter(root as Element);
})();
