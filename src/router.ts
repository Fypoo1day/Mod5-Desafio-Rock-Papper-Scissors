import { initWelcomePage } from "./pages/welcome/index";

const BASE_PATH = "/desafio5";

function isGithubPages() {
  return location.host.includes("github.io");
}

const routes = [
  {
    path: /\/inicio/,
    handler: initWelcomePage,
  },
];

export function initRouter(container) {
  function goTo(path) {
    const completePath = isGithubPages() ? BASE_PATH + path : path;
    history.pushState({}, "", completePath);
    handleRoute(completePath);
  }

  function handleRoute(route) {
    console.log("El handleRoute recibió una nueva ruta", route);
    const newRoute = isGithubPages() ? route.replace(BASE_PATH, "") : route;

    console.log(newRoute);

    for (const r of routes) {
      if (r.path.test(newRoute)) {
        const el = r.handler({ goTo: goTo });

        if (container.firstChild) {
          container.firstChild.remove();
        }
        console.log(el);
        container.appendChild(el);
      }
    }
  }

  if (location.host.includes("github.io")) {
    goTo("/inicio");
  } else if (location.pathname == "/") {
    goTo("/inicio");
  } else {
    handleRoute(location.pathname);
  }

  window.onpopstate = function () {
    handleRoute(location.pathname);
  };
}
