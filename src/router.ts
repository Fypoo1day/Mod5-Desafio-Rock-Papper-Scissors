import { initGame } from "./pages/game";
import { initResults } from "./pages/results";
import { initRules } from "./pages/rules";
import { initWelcome } from "./pages/welcome/index";

const BASE_PATH = "/Mod5-Desafio-Rock-Papper-Scissors";

function isGithubPages() {
  return location.host.includes("github.io");
}

const routes = [
  {
    path: /\/welcome/,
    component: initWelcome,
  },
  {
    path: /\/rules/,
    component: initRules,
  },
  {
    path: /\/game/,
    component: initGame,
  },
  {
    path: /\/results/,
    component: initResults,
  },
];

export function initRouter(container: Element) {
  function goTo(path) {
    const completePath = isGithubPages() ? BASE_PATH + path : path;
    history.pushState({}, "", completePath);
    handleRoute(completePath);
  }

  function handleRoute(route) {
    console.log("el handleRoute route recibió una nueva ruta ", route);

    for (const r of routes) {
      if (r.path.test(route)) {
        const el = r.component({ goTo: goTo });

        if (container.firstChild) {
          container.firstChild.remove();
        }
        container.appendChild(el);
      }
    }
  }
  if (location.pathname == "/") {
    goTo("/welcome");
  } else {
    handleRoute(location.pathname);
  }
  window.onpopstate = function () {
    handleRoute(location.pathname);
  };

  if (location.pathname == "/Mod5-Desafio-Rock-Papper-Scissors/") {
    goTo("/welcome");
  } else {
    handleRoute(location.pathname);
  }
  window.onpopstate = function () {
    handleRoute(location.pathname);
  };
}
