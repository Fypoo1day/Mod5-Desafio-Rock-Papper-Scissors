import { initGame } from "./pages/game";
import { initResults } from "./pages/results";
import { initRules } from "./pages/rules";
import { initWelcome } from "./pages/welcome";

const BASE_PATH = "/Mod5-Desafio-Rock-Papper-Scissors";

function isGithubPages() {
  return location.host.includes("fypoo1day.github.io");
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
    // Comprueba si esta siendo usado desde github o local y lo guarda
    const completePath = isGithubPages() ? BASE_PATH + path : path;

    history.pushState({}, "", completePath);
    handleRoute(completePath);
  }

  //Devuelve el componente segun la URL
  function handleRoute(route) {
    // Convierte el path para que se ejecute con el REGEX ( segun sea, github o local)
    const newRoute = isGithubPages() ? route.replace(BASE_PATH, "") : route;

    for (const r of routes) {
      if (r.path.test(newRoute)) {
        const el = r.component({ goTo: goTo });

        if (container.firstChild) {
          container.firstChild.remove();
        }
        container.appendChild(el);
      }
    }
  }

  if (
    location.pathname == "/" ||
    location.pathname == "/Mod5-Desafio-Rock-Papper-Scissors/"
  ) {
    goTo("/welcome");
  } else {
    handleRoute(location.pathname);
  }

  window.onpopstate = function () {
    handleRoute(location.pathname);
  };
}
