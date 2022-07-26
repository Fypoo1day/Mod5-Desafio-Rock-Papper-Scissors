// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"8uBhv":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "69f74e7f31319ffd";
module.bundle.HMR_BUNDLE_ID = "0b7c8afcb31310b1";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                } // Render the fancy html overlay
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>\n          ").concat(stack, "\n        </pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>' + hint + '</div>';
            }).join(''), "\n        </div>\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"4aleK":[function(require,module,exports) {
var _router = require("./router");
var _button = require("./components/button");
var _paper = require("./components/paper");
var _tijera = require("./components/tijera");
var _piedra = require("./components/piedra");
(function() {
    const root = document.querySelector(".root");
    _router.initRouter(root);
})();

},{"./router":"b2iia","./components/button":"3uBrB","./components/paper":"fDMTg","./components/tijera":"5n8c0","./components/piedra":"2SW73"}],"b2iia":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initRouter", ()=>initRouter
);
var _game = require("./pages/game");
var _results = require("./pages/results");
var _rules = require("./pages/rules");
var _index = require("./pages/welcome/index");
const routes = [
    {
        path: /\/welcome/,
        component: _index.initWelcome
    },
    {
        path: /\/rules/,
        component: _rules.initRules
    },
    {
        path: /\/game/,
        component: _game.initGame
    },
    {
        path: /\/results/,
        component: _results.initResults
    }, 
];
function initRouter(container) {
    function goTo(path) {
        history.pushState({
        }, "", path);
        handleRoute(path);
    }
    function handleRoute(route) {
        console.log("el handleRoute route recibió una nueva ruta ", route);
        for (const r of routes)if (r.path.test(route)) {
            const el = r.component({
                goTo: goTo
            });
            if (container.firstChild) container.firstChild.remove();
            container.appendChild(el);
        }
    }
    if (location.pathname == "/") goTo("/welcome");
    else handleRoute(location.pathname);
    window.onpopstate = function() {
        handleRoute(location.pathname);
    };
}

},{"./pages/welcome/index":"bFh5y","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc","./pages/rules":"dOTNr","./pages/game":"d7f6n","./pages/results":"8GXDd"}],"bFh5y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initWelcome", ()=>initWelcome
);
const imgTitle = require("url:../../../src/assets/Piedra-Papel-Tijera.svg");
function initWelcome(params) {
    const div = document.createElement("div");
    div.classList.add("page");
    const style = document.createElement("style");
    div.innerHTML = `\n        <img class="pt-img" src="${imgTitle}" alt="">\n            <button-comp class="btn-comp">Empezar</button-comp>\n                <div class="hands">\n                    <hand-rock></hand-rock>\n                    <hand-paper></hand-paper>\n                    <hand-scissor></hand-scissor>\n                </div>\n    `;
    style.innerHTML = `\n        .page{\n            width: 100%;\n		    height: 100vh;\n		    padding-top: 100px;\n		    display: flex;\n		    align-items: center;\n		    flex-direction: column;\n		    justify-content: space-between;\n        }\n\n        .pt-img{\n            width: 284px;\n        }\n\n        .hands{\n            width: 100%;\n            display: flex;\n            justify-content: space-evenly;\n        }\n    `;
    const button = div.querySelector(".btn-comp");
    button?.addEventListener("click", ()=>{
        params.goTo("/rock-papper-scissors/rules");
    });
    div.appendChild(style);
    return div;
}

},{"url:../../../src/assets/Piedra-Papel-Tijera.svg":"5aJYd","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"5aJYd":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('Z8Pbo') + "Piedra-Papel-Tijera.45788316.svg";

},{"./helpers/bundle-url":"8YnfL"}],"8YnfL":[function(require,module,exports) {
"use strict";
var bundleURL = {
};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"JacNc":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule') return;
        // Skip duplicate re-exports when they have the same value.
        if (key in dest && dest[key] === source[key]) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"dOTNr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initRules", ()=>initRules
);
var _state = require("../../state");
const rules = require("url:../../../src/assets/rules.svg");
_state.state.getStorage();
function initRules(params) {
    const div = document.createElement("div");
    div.classList.add("page");
    const style = document.createElement("style");
    div.innerHTML = `\n          <img class="img-rules" src="${rules}">\n          <button-comp class="btn-comp">¡jugar!</button-comp>\n          <div class="hands">\n              <hand-scissor></hand-scissor>\n              <hand-rock></hand-rock>\n              <hand-paper></hand-paper>\n          </div>\n      `;
    style.innerHTML = `\n      .page {\n          width: 100%;\n          height: 100vh;\n          padding-top: 100px;\n          display: flex;\n          align-items: center;\n          flex-direction: column;\n          justify-content: space-between;\n      }\n      .hands {\n          width: 100%;\n          display: flex;\n          justify-content: space-evenly;\n      }\n      .img-rules {\n          height: 240px;\n      }`;
    const button = div.querySelector(".btn-comp");
    button?.addEventListener("click", ()=>{
        params.goTo("/desafio-modulo-5/game");
    });
    div.appendChild(style);
    return div;
}

},{"../../state":"28XHA","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc","url:../../../src/assets/rules.svg":"adtXJ"}],"28XHA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state
);
//// DATOS INICIALES ////
const state = {
    data: {
        currentGame: {
            computerPlay: "",
            myPlay: ""
        },
        history: {
            myScore: 0,
            computerScore: 0
        }
    },
    getStorage () {
        const local = JSON.parse(localStorage.getItem("data"));
        if (localStorage.getItem("data")) this.data.history = local;
    },
    getState () {
        return this.data;
    },
    setState (newState) {
        this.data = newState;
    },
    setMove (move) {
        const currentState = this.getState();
        currentState.currentGame.myPlay = move;
        const computerMove = ()=>{
            const move = [
                "tijera",
                "piedra",
                "papel"
            ];
            return move[Math.floor(Math.random() * 3)];
        };
        currentState.currentGame.computerPlay = computerMove();
        this.setHistory();
    },
    setHistory () {
        const currentState = this.getState();
        const currentWhoWins = this.whoWins();
        const myScore = currentState.history.myScore;
        const computerScore = currentState.history.computerScore;
        if (currentWhoWins == "victoria") this.setState({
            ...currentState,
            history: {
                myScore: myScore + 1,
                computerScore: computerScore
            }
        });
        if (currentWhoWins == "derrota") this.setState({
            ...currentState,
            history: {
                myScore: myScore,
                computerScore: computerScore + 1
            }
        });
        this.savedData();
    },
    whoWins () {
        const currentState = this.getState();
        const jugada = currentState.currentGame;
        const empate = [
            jugada.myPlay == "tijera" && jugada.computerPlay == "tijera",
            jugada.myPlay == "piedra" && jugada.computerPlay == "piedra",
            jugada.myPlay == "papel" && jugada.computerPlay == "papel", 
        ];
        if (empate.includes(true)) return "empate";
        const juego = [
            jugada.myPlay == "tijera" && jugada.computerPlay == "papel",
            jugada.myPlay == "piedra" && jugada.computerPlay == "tijera",
            jugada.myPlay == "papel" && jugada.computerPlay == "piedra", 
        ];
        if (juego.includes(true)) return "victoria";
        else return "derrota";
    },
    savedData () {
        const currentState = this.getState().history;
        localStorage.setItem("data", JSON.stringify(currentState));
    },
    cleanData () {
        localStorage.setItem("data", JSON.stringify({
            myScore: 0,
            computerScore: 0
        }));
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"adtXJ":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('Z8Pbo') + "rules.5cf6e514.svg";

},{"./helpers/bundle-url":"8YnfL"}],"d7f6n":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initGame", ()=>initGame
);
var _state = require("../../state");
function initGame(params) {
    const div = document.createElement("div");
    div.classList.add("page");
    const style = document.createElement("style");
    /// CONTADOR ///
    let counter = 3;
    const countdown = setInterval(()=>{
        counter--;
        const counterEl = div.querySelector(".counter-el");
        counterEl.textContent = String(counter);
        if (counter < 0) {
            clearInterval(countdown);
            params.goTo("/desafio-modulo-5/rules");
        }
    }, 1000);
    /// ETIQUETAS HTML ////
    div.innerHTML = `\n    <div class="counter-el">${counter}</div>\n    <div class="hands-top">\n      <hand-scissor class="scissor-top hand-display-none"></hand-scissor>\n      <hand-rock class="stone-top hand-display-none"></hand-rock>\n      <hand-paper class="paper-top hand-display-none"></hand-paper>\n    </div>\n    <div class="hands">\n      <hand-scissor class="scissor"></hand-scissor>\n      <hand-rock class="stone"></hand-rock>\n      <hand-paper class="paper"></hand-paper>\n    </div>\n    `;
    /// ESTILOS ///
    style.innerHTML = `\n	  .page {\n      width: 100%;\n      height: 100vh;\n      display: flex;\n      align-items: center;\n      flex-direction: column;\n      justify-content: space-between;\n    }\n    .hands {\n      width: 100%;\n      display: flex;\n      justify-content: space-evenly;\n    }\n    .active-hands{\n      height: 157px;\n    }\n    .counter-el {\n      margin-top: 100px;\n      font-weight: bold;\n      font-size: 100px;\n      font-family: var(--font-button);\n    }\n    .actived {\n      display: inherit;\n      transform: translateY(-30px);\n      transition: all 0.5s;\n    }\n    .disabled {\n      opacity: 60%;\n      transform: translateY(30px);\n      transition: 0.5s;\n    }\n    .hands-top {\n      display: none;\n    }\n    .actived-hands-top {\n      width: 100%;\n      height: 157px;\n      display: flex;\n      justify-content: center;\n      transform: rotate(180deg);\n    }\n    .hand-display-none{\n      display: none;\n    }\n    .actived-hand-top {\n      display: flex;\n      transform: translateY(-30px);\n      transition: all 0.5s;\n    }`;
    const countdownEl = div.querySelector(".counter-el");
    const handsCont = div.querySelector(".hands").children;
    const handsDiv = div.querySelector(".hands");
    const handScissor = div.querySelector(".scissor");
    const handStone = div.querySelector(".stone");
    const handPaper = div.querySelector(".paper");
    const handsTop = div.querySelector(".hands-top");
    const handScissorTop = div.querySelector(".scissor-top");
    const handStoneTop = div.querySelector(".stone-top");
    const handPaperTop = div.querySelector(".paper-top");
    for (const hands of handsCont)hands.addEventListener("click", ()=>{
        const type = hands.getAttribute("class");
        clearInterval(countdown);
        if (type == "scissor") {
            _state.state.setMove("tijera");
            activeHands("tijera");
        } else if (type == "stone") {
            _state.state.setMove("piedra");
            activeHands("piedra");
        } else if (type == "paper") {
            _state.state.setMove("papel");
            activeHands("papel");
        }
    });
    function activeHands(param) {
        for (const hand of handsCont)hand.classList.add("disabled");
        if (param == "tijera") {
            handScissor.classList.remove("disabled");
            handScissor.classList.add("actived");
            setTimeout(()=>{
                handStone.classList.add("hand-display-none");
                handPaper.classList.add("hand-display-none");
            }, 1500);
        }
        if (param == "piedra") {
            handStone.classList.remove("disabled");
            handStone.classList.add("actived");
            setTimeout(()=>{
                handScissor.classList.add("hand-display-none");
                handPaper.classList.add("hand-display-none");
            }, 1500);
        }
        if (param == "papel") {
            handPaper.classList.remove("disabled");
            handPaper.classList.add("actived");
            setTimeout(()=>{
                handScissor.classList.add("hand-display-none");
                handStone.classList.add("hand-display-none");
            }, 1500);
        }
        setTimeout(()=>{
            const machineMove = _state.state.getState().currentGame.computerPlay;
            countdownEl.remove();
            handsDiv.classList.add("active-hands");
            handsTop.classList.add("actived-hands-top");
            if (machineMove == "tijera") handScissorTop.classList.add("actived-hand-top");
            if (machineMove == "piedra") handStoneTop.classList.add("actived-hand-top");
            if (machineMove == "papel") handPaperTop.classList.add("actived-hand-top");
            setTimeout(()=>{
                params.goTo("/rock-papper-scissors/results");
            }, 1500);
        }, 1500);
    }
    div.appendChild(style);
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc","../../state":"28XHA"}],"8GXDd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initResults", ()=>initResults
);
var _state = require("../../state");
const resultImages = {
    tie: require("url:../../assets/tie.png"),
    win: require("url:../../assets/win.png"),
    loose: require("url:../../assets/lose.png")
};
function initResults(params) {
    const div = document.createElement("div");
    div.className = "result-cont";
    div.classList.add("page");
    const resultado = _state.state.whoWins();
    const styleBackground = document.createElement("style");
    let imagen;
    if (resultado == "empate") {
        imagen = resultImages.tie;
        styleBackground.innerHTML = `\n		.result-cont {\n			background: var(--fondo-gris);  \n		}`;
    }
    if (resultado == "victoria") {
        imagen = resultImages.win;
        styleBackground.innerHTML = `\n		.result-cont {\n			background: var(--fondo-verde);  \n		}`;
    } else if (resultado == "derrota") {
        imagen = resultImages.loose;
        styleBackground.innerHTML = `\n		.result-cont {\n			background: var(--fondo-rojo);\n		}`;
    }
    const currentState = _state.state.getState();
    div.innerHTML = `\n	  <img class="img-win" src="${imagen}">\n	  <div class="tablero">\n      <h4>Score</h4>\n      <p class="vos">Jugador: ${currentState.history.myScore}</p>\n      <p class="maquina">Máquina: ${currentState.history.computerScore}</p>\n    </div>\n	  <button-comp class="button-back">Volver a jugar</button-comp>\n	  <button-comp class="button-clean">Reiniciar puntajes</button-comp>\n    `;
    const buttonBack = div.querySelector(".button-back");
    buttonBack.addEventListener("click", ()=>{
        params.goTo("/rock-papper-scissors/game");
    });
    const buttonClean = div.querySelector(".button-clean");
    buttonClean.addEventListener("click", ()=>{
        _state.state.cleanData();
        _state.state.getStorage();
        params.goTo("/rock-papper-scissors/rules");
    });
    const style = document.createElement("style");
    style.innerHTML = `\n  .page {\n    width: 100%;\n    height: 100vh;\n    padding: 35px 0 20px 0;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    justify-content: space-between;\n  }\n  .img-win {\n    width: 180px;\n  }\n  .tablero {\n    width: 259px;\n    border: 10px solid #000000;\n    background: #ffffff;\n    border-radius: 10px;\n    font-family: var(--font-button);\n    display: flex;\n    flex-direction: column;\n  }\n  .tablero > h4 {\n    font-size: 55px;\n    margin: 0 auto;\n  }\n  .tablero > p {\n    margin: 0 10px 5px 0;\n    font-size: 45px;\n    text-align: end;\n  }\n  `;
    div.appendChild(styleBackground);
    div.appendChild(style);
    return div;
}

},{"../../state":"28XHA","url:../../assets/tie.png":"bIFvy","url:../../assets/win.png":"75Dcj","url:../../assets/lose.png":"f7cxD","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"bIFvy":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('Z8Pbo') + "tie.3618d031.png";

},{"./helpers/bundle-url":"8YnfL"}],"75Dcj":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('Z8Pbo') + "win.130f6114.png";

},{"./helpers/bundle-url":"8YnfL"}],"f7cxD":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('Z8Pbo') + "lose.f4605cc2.png";

},{"./helpers/bundle-url":"8YnfL"}],"3uBrB":[function(require,module,exports) {
customElements.define("button-comp", class Button extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open"
        });
        this.render();
    }
    render() {
        const button = document.createElement("button");
        const style = document.createElement("style");
        button.className = "button-el";
        style.innerHTML = `\n                .button-el {\n                    color: #fff;\n                    width: 322px;\n                    height: 87px;\n                    font-size: 45px;\n                    text-align: center;\n                    border-radius: 10px;\n                    background: #006CFC;\n                    box-sizing: border-box;\n                    border: 10px solid #001997;\n                    font-family: var(--font-button);\n                }\n                `;
        button.textContent = this.textContent;
        this.shadow.appendChild(button);
        this.shadow.appendChild(style);
    }
});

},{}],"fDMTg":[function(require,module,exports) {
const papel = require("url:../../../src/assets/papper-hand.png");
customElements.define("hand-paper", class Papel extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open"
        });
        this.render();
    }
    render() {
        const style = document.createElement("style");
        this.shadow.innerHTML = `\n        <img class="hand-paper" src="${papel}">\n        `;
        style.innerHTML = `\n            .hand-paper {\n                height: 100%;\n                width: 100%\n            }\n            `;
        this.shadow.appendChild(style);
    }
});

},{"url:../../../src/assets/papper-hand.png":"30gss"}],"30gss":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('Z8Pbo') + "papper-hand.e7666990.png";

},{"./helpers/bundle-url":"8YnfL"}],"5n8c0":[function(require,module,exports) {
const tijera = require("url:../../../src/assets/scissors-hand.png");
customElements.define("hand-scissor", class Tijera extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open"
        });
        this.render();
    }
    render() {
        const style = document.createElement("style");
        this.shadow.innerHTML = `\n        <img class="hand-scissor" src="${tijera}">\n        `;
        style.innerHTML = `\n            .hand-paper {\n                height: 100%;\n                width: 100%\n            }\n            `;
        this.shadow.appendChild(style);
    }
});

},{"url:../../../src/assets/scissors-hand.png":"gJqXu"}],"gJqXu":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('Z8Pbo') + "scissors-hand.4afb7122.png";

},{"./helpers/bundle-url":"8YnfL"}],"2SW73":[function(require,module,exports) {
const piedra = require("url:../../../src/assets/rock-hand.png");
customElements.define("hand-rock", class Piedra extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open"
        });
        this.render();
    }
    render() {
        const style = document.createElement("style");
        this.shadow.innerHTML = `\n        <img class="hand-rock" src="${piedra}">\n        `;
        style.innerHTML = `\n            .hand-paper {\n                height: 100%;\n                width: 100%\n            }\n            `;
        this.shadow.appendChild(style);
    }
});

},{"url:../../../src/assets/rock-hand.png":"agbvr"}],"agbvr":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('Z8Pbo') + "rock-hand.bcf466fb.png";

},{"./helpers/bundle-url":"8YnfL"}]},["8uBhv","4aleK"], "4aleK", "parcelRequireb260")

//# sourceMappingURL=index.b31310b1.js.map
