import { initGame } from "./pages/game";
import { initResults } from "./pages/results";
import { initRules } from "./pages/rules";
import { initWelcome } from "./pages/welcome";

const BASE_PATH = "/Mod5-Desafio-Rock-Papper-Scissors";

function isGithubPages() {
  console.log(location.host.includes("github.io"));
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
    console.log(isGithubPages());

    const completePath = isGithubPages() ? BASE_PATH + path : path;
    console.log(completePath);

    history.pushState({}, "", completePath);
    handleRoute(completePath);
  }

  function handleRoute(route) {
    console.log("el handleRoute  ", route);

    const newRoute = isGithubPages() ? route.replace(BASE_PATH, "") : route;

    // console.log(newRoute);

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
  console.log(location.pathname);

  if (location.pathname == "/") {
    goTo("/welcome");
  } else {
    handleRoute(location.pathname);
  }

  window.onpopstate = function () {
    handleRoute(location.pathname);
  };

  if (location.pathname == "/Mod5-Desafio-Rock-Papper-Scissors") {
    goTo("/welcome");
  } else {
    handleRoute(location.pathname);
  }

  window.onpopstate = function () {
    handleRoute(location.pathname);
  };
}
