// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
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
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
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
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"eq8kL":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "b3c595598cfc62b9";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
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
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"6rimH":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _inputmask = require("inputmask");
var _inputmaskDefault = parcelHelpers.interopDefault(_inputmask);
var _validator = require("validator");
var _validatorDefault = parcelHelpers.interopDefault(_validator);
var _cardValidator = require("card-validator");
var _cardValidatorDefault = parcelHelpers.interopDefault(_cardValidator);
var _visaPng = require("./img/visa.png");
var _visaPngDefault = parcelHelpers.interopDefault(_visaPng);
var _mastercardPng = require("./img/mastercard.png");
var _mastercardPngDefault = parcelHelpers.interopDefault(_mastercardPng);
// Function to get the base URL of the current script
function getScriptBaseUrl() {
    const script = document.currentScript;
    if (!script) throw new Error('Could not find current script');
    return new URL(script.src).href;
}
// Path to the image folder (relative to the script)
const imgPath = `${getScriptBaseUrl()}img/`;
// Маски для ввода
(0, _inputmaskDefault.default)("9999 9999 9999 9999", {
    placeholder: " "
}).mask("#card-number");
(0, _inputmaskDefault.default)("99/99", {
    placeholder: "MM/YY"
}).mask("#expiry-date");
(0, _inputmaskDefault.default)("999", {
    placeholder: ""
}).mask("#cvc");
// Функция валидации формы
function validateForm() {
    const cardNumberInput = document.getElementById('card-number');
    const cardNumber = cardNumberInput.value.replace(/\s/g, '');
    const expiryDate = document.getElementById('expiry-date').value;
    const cvc = document.getElementById('cvc').value;
    const email = document.getElementById('email').value;
    const cardValidation = (0, _cardValidatorDefault.default).number(cardNumber);
    const isCardValid = cardValidation.isValid;
    const isExpiryValid = /^\d{2}\/\d{2}$/.test(expiryDate) && isExpiryDateValid(expiryDate);
    const isCvcValid = /^\d{3}$/.test(cvc);
    const isEmailValid = (0, _validatorDefault.default).isEmail(email);
    document.getElementById('card-error').textContent = isCardValid ? '' : "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440 \u043A\u0430\u0440\u0442\u044B";
    document.getElementById('expiry-error').textContent = isExpiryValid ? '' : "\u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0434\u0430\u0442\u0430";
    document.getElementById('cvc-error').textContent = isCvcValid ? '' : "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 CVC";
    document.getElementById('email-error').textContent = isEmailValid ? '' : "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 email";
    document.getElementById('pay-button').disabled = !(isCardValid && isExpiryValid && isCvcValid && isEmailValid);
    // Обновление изображения карты
    const cardImage = document.getElementById('card-image');
    cardImage.style.display = 'none'; // Скрываем изображение по умолчанию
    if (isCardValid && cardValidation.card) {
        const cardType = cardValidation.card.type;
        if (cardType === 'visa') {
            cardImage.src = (0, _visaPngDefault.default);
            cardImage.style.display = 'block';
        } else if (cardType === 'mastercard') {
            cardImage.src = (0, _mastercardPngDefault.default);
            cardImage.style.display = 'block';
        }
    // Добавьте else if для других типов карт, если необходимо (например, mir)
    }
}
//4640 0531 7070 6581 карта виза
// Проверка корректности даты окончания действия карты
function isExpiryDateValid(date) {
    const [month, year] = date.split('/').map(Number);
    const now = new Date();
    const currentMonth = now.getMonth() + 1;
    const currentYear = now.getFullYear() % 100;
    return year > currentYear || year === currentYear && month >= currentMonth;
}
const formInputs = document.querySelectorAll('#payment-form input');
formInputs.forEach((input)=>{
    input.addEventListener('blur', validateForm);
});
formInputs.forEach((input)=>{
    input.addEventListener('input', ()=>{
        document.getElementById('pay-button').disabled = true;
        validateForm(); // Вызываем validateForm при каждом вводе, чтобы сразу обновлять картинку
    });
});
document.getElementById('payment-form').addEventListener('submit', (event)=>{
    validateForm();
    if (document.getElementById('pay-button').disabled) event.preventDefault();
});

},{"inputmask":"gyYno","validator":"bliRI","card-validator":"1dvO8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./img/visa.png":"1bgz3","./img/mastercard.png":"lapH1"}],"gyYno":[function(require,module,exports,__globalThis) {
/*!
 * dist/inputmask
 * https://github.com/RobinHerbots/Inputmask
 * Copyright (c) 2010 - 2024 Robin Herbots
 * Licensed under the MIT license
 * Version: 5.0.9
 */ !function(e, t) {
    var n, i;
    module.exports = t();
}("undefined" != typeof self ? self : this, function() {
    return function() {
        "use strict";
        var e = {
            3976: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                t.default = {
                    _maxTestPos: 500,
                    placeholder: "_",
                    optionalmarker: [
                        "[",
                        "]"
                    ],
                    quantifiermarker: [
                        "{",
                        "}"
                    ],
                    groupmarker: [
                        "(",
                        ")"
                    ],
                    alternatormarker: "|",
                    escapeChar: "\\",
                    mask: null,
                    regex: null,
                    oncomplete: function() {},
                    onincomplete: function() {},
                    oncleared: function() {},
                    repeat: 0,
                    greedy: !1,
                    autoUnmask: !1,
                    removeMaskOnSubmit: !1,
                    clearMaskOnLostFocus: !0,
                    insertMode: !0,
                    insertModeVisual: !0,
                    clearIncomplete: !1,
                    alias: null,
                    onKeyDown: function() {},
                    onBeforeMask: null,
                    onBeforePaste: function(e, t) {
                        return "function" == typeof t.onBeforeMask ? t.onBeforeMask.call(this, e, t) : e;
                    },
                    onBeforeWrite: null,
                    onUnMask: null,
                    showMaskOnFocus: !0,
                    showMaskOnHover: !0,
                    onKeyValidation: function() {},
                    skipOptionalPartCharacter: " ",
                    numericInput: !1,
                    rightAlign: !1,
                    undoOnEscape: !0,
                    radixPoint: "",
                    _radixDance: !1,
                    groupSeparator: "",
                    keepStatic: null,
                    positionCaretOnTab: !0,
                    tabThrough: !1,
                    supportsInputType: [
                        "text",
                        "tel",
                        "url",
                        "password",
                        "search"
                    ],
                    isComplete: null,
                    preValidation: null,
                    postValidation: null,
                    staticDefinitionSymbol: void 0,
                    jitMasking: !1,
                    nullable: !0,
                    inputEventOnly: !1,
                    noValuePatching: !1,
                    positionCaretOnClick: "lvp",
                    casing: null,
                    inputmode: "text",
                    importDataAttributes: !0,
                    shiftPositions: !0,
                    usePrototypeDefinitions: !0,
                    validationEventTimeOut: 3e3,
                    substitutes: {}
                };
            },
            7392: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                t.default = {
                    9: {
                        validator: "[0-9\uff10-\uff19]",
                        definitionSymbol: "*"
                    },
                    a: {
                        validator: "[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
                        definitionSymbol: "*"
                    },
                    "*": {
                        validator: "[0-9\uff10-\uff19A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]"
                    }
                };
            },
            253: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function(e, t, n) {
                    if (void 0 === n) return e.__data ? e.__data[t] : null;
                    e.__data = e.__data || {}, e.__data[t] = n;
                };
            },
            3776: function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.Event = void 0, t.off = function(e, t) {
                    var n, i;
                    u(this[0]) && e && (n = this[0].eventRegistry, i = this[0], e.split(" ").forEach(function(e) {
                        var a = o(e.split("."), 2);
                        (function(e, i) {
                            var a, r, o = [];
                            if (e.length > 0) {
                                if (void 0 === t) for(a = 0, r = n[e][i].length; a < r; a++)o.push({
                                    ev: e,
                                    namespace: i && i.length > 0 ? i : "global",
                                    handler: n[e][i][a]
                                });
                                else o.push({
                                    ev: e,
                                    namespace: i && i.length > 0 ? i : "global",
                                    handler: t
                                });
                            } else if (i.length > 0) {
                                for(var l in n)for(var s in n[l])if (s === i) {
                                    if (void 0 === t) for(a = 0, r = n[l][s].length; a < r; a++)o.push({
                                        ev: l,
                                        namespace: s,
                                        handler: n[l][s][a]
                                    });
                                    else o.push({
                                        ev: l,
                                        namespace: s,
                                        handler: t
                                    });
                                }
                            }
                            return o;
                        })(a[0], a[1]).forEach(function(e) {
                            var t = e.ev, a = e.handler;
                            !function(e, t, a) {
                                if (e in n == 1) {
                                    if (i.removeEventListener ? i.removeEventListener(e, a, !1) : i.detachEvent && i.detachEvent("on".concat(e), a), "global" === t) for(var r in n[e])n[e][r].splice(n[e][r].indexOf(a), 1);
                                    else n[e][t].splice(n[e][t].indexOf(a), 1);
                                }
                            }(t, e.namespace, a);
                        });
                    }));
                    return this;
                }, t.on = function(e, t) {
                    if (u(this[0])) {
                        var n = this[0].eventRegistry, i = this[0];
                        e.split(" ").forEach(function(e) {
                            var a = o(e.split("."), 2), r = a[0], l = a[1];
                            !function(e, a) {
                                i.addEventListener ? i.addEventListener(e, t, !1) : i.attachEvent && i.attachEvent("on".concat(e), t), n[e] = n[e] || {}, n[e][a] = n[e][a] || [], n[e][a].push(t);
                            }(r, void 0 === l ? "global" : l);
                        });
                    }
                    return this;
                }, t.trigger = function(e) {
                    var t = arguments;
                    if (u(this[0])) for(var n = this[0].eventRegistry, i = this[0], o = "string" == typeof e ? e.split(" ") : [
                        e.type
                    ], l = 0; l < o.length; l++){
                        var s = o[l].split("."), f = s[0], p = s[1] || "global";
                        if (void 0 !== c && "global" === p) {
                            var d, h = {
                                bubbles: !0,
                                cancelable: !0,
                                composed: !0,
                                detail: arguments[1]
                            };
                            if (c.createEvent) {
                                try {
                                    if ("input" === f) h.inputType = "insertText", d = new InputEvent(f, h);
                                    else d = new CustomEvent(f, h);
                                } catch (e) {
                                    (d = c.createEvent("CustomEvent")).initCustomEvent(f, h.bubbles, h.cancelable, h.detail);
                                }
                                e.type && (0, a.default)(d, e), i.dispatchEvent(d);
                            } else (d = c.createEventObject()).eventType = f, d.detail = arguments[1], e.type && (0, a.default)(d, e), i.fireEvent("on" + d.eventType, d);
                        } else if (void 0 !== n[f]) {
                            arguments[0] = arguments[0].type ? arguments[0] : r.default.Event(arguments[0]), arguments[0].detail = arguments.slice(1);
                            var v = n[f];
                            ("global" === p ? Object.values(v).flat() : v[p]).forEach(function(e) {
                                return e.apply(i, t);
                            });
                        }
                    }
                    return this;
                };
                var i = s(n(9380)), a = s(n(600)), r = s(n(4963));
                function o(e, t) {
                    return function(e) {
                        if (Array.isArray(e)) return e;
                    }(e) || function(e, t) {
                        var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (null != n) {
                            var i, a, r, o, l = [], s = !0, c = !1;
                            try {
                                if (r = (n = n.call(e)).next, 0 === t) {
                                    if (Object(n) !== n) return;
                                    s = !1;
                                } else for(; !(s = (i = r.call(n)).done) && (l.push(i.value), l.length !== t); s = !0);
                            } catch (e) {
                                c = !0, a = e;
                            } finally{
                                try {
                                    if (!s && null != n.return && (o = n.return(), Object(o) !== o)) return;
                                } finally{
                                    if (c) throw a;
                                }
                            }
                            return l;
                        }
                    }(e, t) || function(e, t) {
                        if (!e) return;
                        if ("string" == typeof e) return l(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === n && e.constructor && (n = e.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(e);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(e, t);
                    }(e, t) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    }();
                }
                function l(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for(var n = 0, i = new Array(t); n < t; n++)i[n] = e[n];
                    return i;
                }
                function s(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }
                var c = i.default.document;
                function u(e) {
                    return e instanceof Element;
                }
                var f = t.Event = void 0;
                "function" == typeof i.default.CustomEvent ? t.Event = f = i.default.CustomEvent : i.default.Event && c && c.createEvent ? (t.Event = f = function(e, t) {
                    t = t || {
                        bubbles: !1,
                        cancelable: !1,
                        composed: !0,
                        detail: void 0
                    };
                    var n = c.createEvent("CustomEvent");
                    return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n;
                }, f.prototype = i.default.Event.prototype) : "undefined" != typeof Event && (t.Event = f = Event);
            },
            600: function(e, t) {
                function n(e) {
                    return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e;
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                    }, n(e);
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function e() {
                    var t, i, a, r, o, l, s = arguments[0] || {}, c = 1, u = arguments.length, f = !1;
                    "boolean" == typeof s && (f = s, s = arguments[c] || {}, c++);
                    "object" !== n(s) && "function" != typeof s && (s = {});
                    for(; c < u; c++)if (null != (t = arguments[c])) for(i in t)a = s[i], s !== (r = t[i]) && (f && r && ("[object Object]" === Object.prototype.toString.call(r) || (o = Array.isArray(r))) ? (o ? (o = !1, l = a && Array.isArray(a) ? a : []) : l = a && "[object Object]" === Object.prototype.toString.call(a) ? a : {}, s[i] = e(f, l, r)) : void 0 !== r && (s[i] = r));
                    return s;
                };
            },
            4963: function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var i = l(n(9380)), a = l(n(253)), r = n(3776), o = l(n(600));
                function l(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }
                var s = i.default.document;
                function c(e) {
                    return e instanceof c ? e : this instanceof c ? void (null != e && e !== i.default && (this[0] = e.nodeName ? e : void 0 !== e[0] && e[0].nodeName ? e[0] : s.querySelector(e), void 0 !== this[0] && null !== this[0] && (this[0].eventRegistry = this[0].eventRegistry || {}))) : new c(e);
                }
                c.prototype = {
                    on: r.on,
                    off: r.off,
                    trigger: r.trigger
                }, c.extend = o.default, c.data = a.default, c.Event = r.Event;
                t.default = c;
            },
            9845: function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.mobile = t.iphone = t.ie = void 0;
                var i, a = (i = n(9380)) && i.__esModule ? i : {
                    default: i
                };
                var r = a.default.navigator && a.default.navigator.userAgent || "";
                t.ie = r.indexOf("MSIE ") > 0 || r.indexOf("Trident/") > 0, t.mobile = a.default.navigator && a.default.navigator.userAgentData && a.default.navigator.userAgentData.mobile || a.default.navigator && a.default.navigator.maxTouchPoints || "ontouchstart" in a.default, t.iphone = /iphone/i.test(r);
            },
            7184: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function(e) {
                    return e.replace(n, "\\$1");
                };
                var n = new RegExp("(\\" + [
                    "/",
                    ".",
                    "*",
                    "+",
                    "?",
                    "|",
                    "(",
                    ")",
                    "[",
                    "]",
                    "{",
                    "}",
                    "\\",
                    "$",
                    "^"
                ].join("|\\") + ")", "gim");
            },
            6030: function(e, t, n) {
                function i(e) {
                    return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e;
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                    }, i(e);
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.EventHandlers = void 0;
                var a, r = n(9845), o = (a = n(9380)) && a.__esModule ? a : {
                    default: a
                }, l = n(7760), s = n(2839), c = n(8711), u = n(7215), f = n(4713);
                function p() {
                    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ p = function() {
                        return t;
                    };
                    var e, t = {}, n = Object.prototype, a = n.hasOwnProperty, r = Object.defineProperty || function(e, t, n) {
                        e[t] = n.value;
                    }, o = "function" == typeof Symbol ? Symbol : {}, l = o.iterator || "@@iterator", s = o.asyncIterator || "@@asyncIterator", c = o.toStringTag || "@@toStringTag";
                    function u(e, t, n) {
                        return Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }), e[t];
                    }
                    try {
                        u({}, "");
                    } catch (e) {
                        u = function(e, t, n) {
                            return e[t] = n;
                        };
                    }
                    function f(e, t, n, i) {
                        var a = t && t.prototype instanceof k ? t : k, o = Object.create(a.prototype), l = new D(i || []);
                        return r(o, "_invoke", {
                            value: E(e, n, l)
                        }), o;
                    }
                    function d(e, t, n) {
                        try {
                            return {
                                type: "normal",
                                arg: e.call(t, n)
                            };
                        } catch (e) {
                            return {
                                type: "throw",
                                arg: e
                            };
                        }
                    }
                    t.wrap = f;
                    var h = "suspendedStart", v = "suspendedYield", m = "executing", g = "completed", y = {};
                    function k() {}
                    function b() {}
                    function x() {}
                    var w = {};
                    u(w, l, function() {
                        return this;
                    });
                    var P = Object.getPrototypeOf, S = P && P(P(L([])));
                    S && S !== n && a.call(S, l) && (w = S);
                    var O = x.prototype = k.prototype = Object.create(w);
                    function _(e) {
                        [
                            "next",
                            "throw",
                            "return"
                        ].forEach(function(t) {
                            u(e, t, function(e) {
                                return this._invoke(t, e);
                            });
                        });
                    }
                    function M(e, t) {
                        function n(r, o, l, s) {
                            var c = d(e[r], e, o);
                            if ("throw" !== c.type) {
                                var u = c.arg, f = u.value;
                                return f && "object" == i(f) && a.call(f, "__await") ? t.resolve(f.__await).then(function(e) {
                                    n("next", e, l, s);
                                }, function(e) {
                                    n("throw", e, l, s);
                                }) : t.resolve(f).then(function(e) {
                                    u.value = e, l(u);
                                }, function(e) {
                                    return n("throw", e, l, s);
                                });
                            }
                            s(c.arg);
                        }
                        var o;
                        r(this, "_invoke", {
                            value: function(e, i) {
                                function a() {
                                    return new t(function(t, a) {
                                        n(e, i, t, a);
                                    });
                                }
                                return o = o ? o.then(a, a) : a();
                            }
                        });
                    }
                    function E(t, n, i) {
                        var a = h;
                        return function(r, o) {
                            if (a === m) throw new Error("Generator is already running");
                            if (a === g) {
                                if ("throw" === r) throw o;
                                return {
                                    value: e,
                                    done: !0
                                };
                            }
                            for(i.method = r, i.arg = o;;){
                                var l = i.delegate;
                                if (l) {
                                    var s = j(l, i);
                                    if (s) {
                                        if (s === y) continue;
                                        return s;
                                    }
                                }
                                if ("next" === i.method) i.sent = i._sent = i.arg;
                                else if ("throw" === i.method) {
                                    if (a === h) throw a = g, i.arg;
                                    i.dispatchException(i.arg);
                                } else "return" === i.method && i.abrupt("return", i.arg);
                                a = m;
                                var c = d(t, n, i);
                                if ("normal" === c.type) {
                                    if (a = i.done ? g : v, c.arg === y) continue;
                                    return {
                                        value: c.arg,
                                        done: i.done
                                    };
                                }
                                "throw" === c.type && (a = g, i.method = "throw", i.arg = c.arg);
                            }
                        };
                    }
                    function j(t, n) {
                        var i = n.method, a = t.iterator[i];
                        if (a === e) return n.delegate = null, "throw" === i && t.iterator.return && (n.method = "return", n.arg = e, j(t, n), "throw" === n.method) || "return" !== i && (n.method = "throw", n.arg = new TypeError("The iterator does not provide a '" + i + "' method")), y;
                        var r = d(a, t.iterator, n.arg);
                        if ("throw" === r.type) return n.method = "throw", n.arg = r.arg, n.delegate = null, y;
                        var o = r.arg;
                        return o ? o.done ? (n[t.resultName] = o.value, n.next = t.nextLoc, "return" !== n.method && (n.method = "next", n.arg = e), n.delegate = null, y) : o : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, y);
                    }
                    function T(e) {
                        var t = {
                            tryLoc: e[0]
                        };
                        1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t);
                    }
                    function A(e) {
                        var t = e.completion || {};
                        t.type = "normal", delete t.arg, e.completion = t;
                    }
                    function D(e) {
                        this.tryEntries = [
                            {
                                tryLoc: "root"
                            }
                        ], e.forEach(T, this), this.reset(!0);
                    }
                    function L(t) {
                        if (t || "" === t) {
                            var n = t[l];
                            if (n) return n.call(t);
                            if ("function" == typeof t.next) return t;
                            if (!isNaN(t.length)) {
                                var r = -1, o = function n() {
                                    for(; ++r < t.length;)if (a.call(t, r)) return n.value = t[r], n.done = !1, n;
                                    return n.value = e, n.done = !0, n;
                                };
                                return o.next = o;
                            }
                        }
                        throw new TypeError(i(t) + " is not iterable");
                    }
                    return b.prototype = x, r(O, "constructor", {
                        value: x,
                        configurable: !0
                    }), r(x, "constructor", {
                        value: b,
                        configurable: !0
                    }), b.displayName = u(x, c, "GeneratorFunction"), t.isGeneratorFunction = function(e) {
                        var t = "function" == typeof e && e.constructor;
                        return !!t && (t === b || "GeneratorFunction" === (t.displayName || t.name));
                    }, t.mark = function(e) {
                        return Object.setPrototypeOf ? Object.setPrototypeOf(e, x) : (e.__proto__ = x, u(e, c, "GeneratorFunction")), e.prototype = Object.create(O), e;
                    }, t.awrap = function(e) {
                        return {
                            __await: e
                        };
                    }, _(M.prototype), u(M.prototype, s, function() {
                        return this;
                    }), t.AsyncIterator = M, t.async = function(e, n, i, a, r) {
                        void 0 === r && (r = Promise);
                        var o = new M(f(e, n, i, a), r);
                        return t.isGeneratorFunction(n) ? o : o.next().then(function(e) {
                            return e.done ? e.value : o.next();
                        });
                    }, _(O), u(O, c, "Generator"), u(O, l, function() {
                        return this;
                    }), u(O, "toString", function() {
                        return "[object Generator]";
                    }), t.keys = function(e) {
                        var t = Object(e), n = [];
                        for(var i in t)n.push(i);
                        return n.reverse(), function e() {
                            for(; n.length;){
                                var i = n.pop();
                                if (i in t) return e.value = i, e.done = !1, e;
                            }
                            return e.done = !0, e;
                        };
                    }, t.values = L, D.prototype = {
                        constructor: D,
                        reset: function(t) {
                            if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(A), !t) for(var n in this)"t" === n.charAt(0) && a.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e);
                        },
                        stop: function() {
                            this.done = !0;
                            var e = this.tryEntries[0].completion;
                            if ("throw" === e.type) throw e.arg;
                            return this.rval;
                        },
                        dispatchException: function(t) {
                            if (this.done) throw t;
                            var n = this;
                            function i(i, a) {
                                return l.type = "throw", l.arg = t, n.next = i, a && (n.method = "next", n.arg = e), !!a;
                            }
                            for(var r = this.tryEntries.length - 1; r >= 0; --r){
                                var o = this.tryEntries[r], l = o.completion;
                                if ("root" === o.tryLoc) return i("end");
                                if (o.tryLoc <= this.prev) {
                                    var s = a.call(o, "catchLoc"), c = a.call(o, "finallyLoc");
                                    if (s && c) {
                                        if (this.prev < o.catchLoc) return i(o.catchLoc, !0);
                                        if (this.prev < o.finallyLoc) return i(o.finallyLoc);
                                    } else if (s) {
                                        if (this.prev < o.catchLoc) return i(o.catchLoc, !0);
                                    } else {
                                        if (!c) throw new Error("try statement without catch or finally");
                                        if (this.prev < o.finallyLoc) return i(o.finallyLoc);
                                    }
                                }
                            }
                        },
                        abrupt: function(e, t) {
                            for(var n = this.tryEntries.length - 1; n >= 0; --n){
                                var i = this.tryEntries[n];
                                if (i.tryLoc <= this.prev && a.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                                    var r = i;
                                    break;
                                }
                            }
                            r && ("break" === e || "continue" === e) && r.tryLoc <= t && t <= r.finallyLoc && (r = null);
                            var o = r ? r.completion : {};
                            return o.type = e, o.arg = t, r ? (this.method = "next", this.next = r.finallyLoc, y) : this.complete(o);
                        },
                        complete: function(e, t) {
                            if ("throw" === e.type) throw e.arg;
                            return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), y;
                        },
                        finish: function(e) {
                            for(var t = this.tryEntries.length - 1; t >= 0; --t){
                                var n = this.tryEntries[t];
                                if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), A(n), y;
                            }
                        },
                        catch: function(e) {
                            for(var t = this.tryEntries.length - 1; t >= 0; --t){
                                var n = this.tryEntries[t];
                                if (n.tryLoc === e) {
                                    var i = n.completion;
                                    if ("throw" === i.type) {
                                        var a = i.arg;
                                        A(n);
                                    }
                                    return a;
                                }
                            }
                            throw new Error("illegal catch attempt");
                        },
                        delegateYield: function(t, n, i) {
                            return this.delegate = {
                                iterator: L(t),
                                resultName: n,
                                nextLoc: i
                            }, "next" === this.method && (this.arg = e), y;
                        }
                    }, t;
                }
                function d(e, t) {
                    var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (!n) {
                        if (Array.isArray(e) || (n = function(e, t) {
                            if (!e) return;
                            if ("string" == typeof e) return h(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === n && e.constructor && (n = e.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(e);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return h(e, t);
                        }(e)) || t && e && "number" == typeof e.length) {
                            n && (e = n);
                            var i = 0, a = function() {};
                            return {
                                s: a,
                                n: function() {
                                    return i >= e.length ? {
                                        done: !0
                                    } : {
                                        done: !1,
                                        value: e[i++]
                                    };
                                },
                                e: function(e) {
                                    throw e;
                                },
                                f: a
                            };
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    }
                    var r, o = !0, l = !1;
                    return {
                        s: function() {
                            n = n.call(e);
                        },
                        n: function() {
                            var e = n.next();
                            return o = e.done, e;
                        },
                        e: function(e) {
                            l = !0, r = e;
                        },
                        f: function() {
                            try {
                                o || null == n.return || n.return();
                            } finally{
                                if (l) throw r;
                            }
                        }
                    };
                }
                function h(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for(var n = 0, i = new Array(t); n < t; n++)i[n] = e[n];
                    return i;
                }
                function v(e, t, n, i, a, r, o) {
                    try {
                        var l = e[r](o), s = l.value;
                    } catch (e) {
                        return void n(e);
                    }
                    l.done ? t(s) : Promise.resolve(s).then(i, a);
                }
                var m, g, y = t.EventHandlers = {
                    keyEvent: function(e, t, n, i, a) {
                        var o = this.inputmask, p = o.opts, d = o.dependencyLib, h = o.maskset, v = this, m = d(v), g = e.key, k = c.caret.call(o, v), b = p.onKeyDown.call(this, e, c.getBuffer.call(o), k, p);
                        if (void 0 !== b) return b;
                        if (g === s.keys.Backspace || g === s.keys.Delete || r.iphone && g === s.keys.BACKSPACE_SAFARI || e.ctrlKey && g === s.keys.x && !("oncut" in v)) e.preventDefault(), u.handleRemove.call(o, v, g, k), (0, l.writeBuffer)(v, c.getBuffer.call(o, !0), h.p, e, v.inputmask._valueGet() !== c.getBuffer.call(o).join(""));
                        else if (g === s.keys.End || g === s.keys.PageDown) {
                            e.preventDefault();
                            var x = c.seekNext.call(o, c.getLastValidPosition.call(o));
                            c.caret.call(o, v, e.shiftKey ? k.begin : x, x, !0);
                        } else g === s.keys.Home && !e.shiftKey || g === s.keys.PageUp ? (e.preventDefault(), c.caret.call(o, v, 0, e.shiftKey ? k.begin : 0, !0)) : p.undoOnEscape && g === s.keys.Escape && !0 !== e.altKey ? ((0, l.checkVal)(v, !0, !1, o.undoValue.split("")), m.trigger("click")) : g !== s.keys.Insert || e.shiftKey || e.ctrlKey || void 0 !== o.userOptions.insertMode ? !0 === p.tabThrough && g === s.keys.Tab ? !0 === e.shiftKey ? (k.end = c.seekPrevious.call(o, k.end, !0), !0 === f.getTest.call(o, k.end - 1).match.static && k.end--, k.begin = c.seekPrevious.call(o, k.end, !0), k.begin >= 0 && k.end > 0 && (e.preventDefault(), c.caret.call(o, v, k.begin, k.end))) : (k.begin = c.seekNext.call(o, k.begin, !0), k.end = c.seekNext.call(o, k.begin, !0), k.end < h.maskLength && k.end--, k.begin <= h.maskLength && (e.preventDefault(), c.caret.call(o, v, k.begin, k.end))) : e.shiftKey || (p.insertModeVisual && !1 === p.insertMode ? g === s.keys.ArrowRight ? setTimeout(function() {
                            var e = c.caret.call(o, v);
                            c.caret.call(o, v, e.begin);
                        }, 0) : g === s.keys.ArrowLeft && setTimeout(function() {
                            var e = c.translatePosition.call(o, v.inputmask.caretPos.begin);
                            c.translatePosition.call(o, v.inputmask.caretPos.end);
                            o.isRTL ? c.caret.call(o, v, e + (e === h.maskLength ? 0 : 1)) : c.caret.call(o, v, e - (0 === e ? 0 : 1));
                        }, 0) : void 0 === o.keyEventHook || o.keyEventHook(e)) : u.isSelection.call(o, k) ? p.insertMode = !p.insertMode : (p.insertMode = !p.insertMode, c.caret.call(o, v, k.begin, k.begin));
                        return o.isComposing = g == s.keys.Process || g == s.keys.Unidentified, o.ignorable = g.length > 1 && !("textarea" === v.tagName.toLowerCase() && g == s.keys.Enter), y.keypressEvent.call(this, e, t, n, i, a);
                    },
                    keypressEvent: function(e, t, n, i, a) {
                        var r = this.inputmask || this, o = r.opts, f = r.dependencyLib, p = r.maskset, d = r.el, h = f(d), v = e.key;
                        if (!0 === t || e.ctrlKey && e.altKey && !r.ignorable || !(e.ctrlKey || e.metaKey || r.ignorable)) {
                            if (v) {
                                var m, g = t ? {
                                    begin: a,
                                    end: a
                                } : c.caret.call(r, d);
                                t || (v = o.substitutes[v] || v), p.writeOutBuffer = !0;
                                var y = u.isValid.call(r, g, v, i, void 0, void 0, void 0, t);
                                if (!1 !== y && (c.resetMaskSet.call(r, !0), m = void 0 !== y.caret ? y.caret : c.seekNext.call(r, y.pos.begin ? y.pos.begin : y.pos), p.p = m), m = o.numericInput && void 0 === y.caret ? c.seekPrevious.call(r, m) : m, !1 !== n && (setTimeout(function() {
                                    o.onKeyValidation.call(d, v, y);
                                }, 0), p.writeOutBuffer && !1 !== y)) {
                                    var k = c.getBuffer.call(r);
                                    (0, l.writeBuffer)(d, k, m, e, !0 !== t);
                                }
                                if (e.preventDefault(), t) return !1 !== y && (y.forwardPosition = m), y;
                            }
                        } else v === s.keys.Enter && r.undoValue !== r._valueGet(!0) && (r.undoValue = r._valueGet(!0), setTimeout(function() {
                            h.trigger("change");
                        }, 0));
                    },
                    pasteEvent: (m = p().mark(function e(t) {
                        var n, i, a, r, s, u;
                        return p().wrap(function(e) {
                            for(;;)switch(e.prev = e.next){
                                case 0:
                                    n = function(e, n, i, a, o) {
                                        var s = c.caret.call(e, n, void 0, void 0, !0), u = i.substr(0, s.begin), f = i.substr(s.end, i.length);
                                        if (u == (e.isRTL ? c.getBufferTemplate.call(e).slice().reverse() : c.getBufferTemplate.call(e)).slice(0, s.begin).join("") && (u = ""), f == (e.isRTL ? c.getBufferTemplate.call(e).slice().reverse() : c.getBufferTemplate.call(e)).slice(s.end).join("") && (f = ""), a = u + a + f, e.isRTL && !0 !== r.numericInput) {
                                            a = a.split("");
                                            var p, h = d(c.getBufferTemplate.call(e));
                                            try {
                                                for(h.s(); !(p = h.n()).done;){
                                                    var v = p.value;
                                                    a[0] === v && a.shift();
                                                }
                                            } catch (e) {
                                                h.e(e);
                                            } finally{
                                                h.f();
                                            }
                                            a = a.reverse().join("");
                                        }
                                        var m = a;
                                        if ("function" == typeof o) {
                                            if (!1 === (m = o.call(e, m, r))) return !1;
                                            m || (m = i);
                                        }
                                        (0, l.checkVal)(n, !0, !1, m.toString().split(""), t);
                                    }, i = this, a = this.inputmask, r = a.opts, s = a._valueGet(!0), a.skipInputEvent = !0, t.clipboardData && t.clipboardData.getData ? u = t.clipboardData.getData("text/plain") : o.default.clipboardData && o.default.clipboardData.getData && (u = o.default.clipboardData.getData("Text")), n(a, i, s, u, r.onBeforePaste), t.preventDefault();
                                case 7:
                                case "end":
                                    return e.stop();
                            }
                        }, e, this);
                    }), g = function() {
                        var e = this, t = arguments;
                        return new Promise(function(n, i) {
                            var a = m.apply(e, t);
                            function r(e) {
                                v(a, n, i, r, o, "next", e);
                            }
                            function o(e) {
                                v(a, n, i, r, o, "throw", e);
                            }
                            r(void 0);
                        });
                    }, function(e) {
                        return g.apply(this, arguments);
                    }),
                    inputFallBackEvent: function(e) {
                        var t = this.inputmask, n = t.opts, i = t.dependencyLib;
                        var a, o = this, u = o.inputmask._valueGet(!0), p = (t.isRTL ? c.getBuffer.call(t).slice().reverse() : c.getBuffer.call(t)).join(""), d = c.caret.call(t, o, void 0, void 0, !0);
                        if (p !== u) {
                            if (a = function(e, i, a) {
                                for(var r, o, l, s = e.substr(0, a.begin).split(""), u = e.substr(a.begin).split(""), p = i.substr(0, a.begin).split(""), d = i.substr(a.begin).split(""), h = s.length >= p.length ? s.length : p.length, v = u.length >= d.length ? u.length : d.length, m = "", g = [], y = "~"; s.length < h;)s.push(y);
                                for(; p.length < h;)p.push(y);
                                for(; u.length < v;)u.unshift(y);
                                for(; d.length < v;)d.unshift(y);
                                var k = s.concat(u), b = p.concat(d);
                                for(o = 0, r = k.length; o < r; o++)switch(l = f.getPlaceholder.call(t, c.translatePosition.call(t, o)), m){
                                    case "insertText":
                                        b[o - 1] === k[o] && a.begin == k.length - 1 && g.push(k[o]), o = r;
                                        break;
                                    case "insertReplacementText":
                                    case "deleteContentBackward":
                                        k[o] === y ? a.end++ : o = r;
                                        break;
                                    default:
                                        k[o] !== b[o] && (k[o + 1] !== y && k[o + 1] !== l && void 0 !== k[o + 1] || (b[o] !== l || b[o + 1] !== y) && b[o] !== y ? b[o + 1] === y && b[o] === k[o + 1] ? (m = "insertText", g.push(k[o]), a.begin--, a.end--) : k[o] !== l && k[o] !== y && (k[o + 1] === y || b[o] !== k[o] && b[o + 1] === k[o + 1]) ? (m = "insertReplacementText", g.push(k[o]), a.begin--) : k[o] === y ? (m = "deleteContentBackward", (c.isMask.call(t, c.translatePosition.call(t, o), !0) || b[o] === n.radixPoint) && a.end++) : o = r : (m = "insertText", g.push(k[o]), a.begin--, a.end--));
                                }
                                return {
                                    action: m,
                                    data: g,
                                    caret: a
                                };
                            }(u, p, d), (o.inputmask.shadowRoot || o.ownerDocument).activeElement !== o && o.focus(), (0, l.writeBuffer)(o, c.getBuffer.call(t)), c.caret.call(t, o, d.begin, d.end, !0), !r.mobile && t.skipNextInsert && "insertText" === e.inputType && "insertText" === a.action && t.isComposing) return !1;
                            switch("insertCompositionText" === e.inputType && "insertText" === a.action && t.isComposing ? t.skipNextInsert = !0 : t.skipNextInsert = !1, a.action){
                                case "insertText":
                                case "insertReplacementText":
                                    a.data.forEach(function(e, n) {
                                        var a = new i.Event("keypress");
                                        a.key = e, t.ignorable = !1, y.keypressEvent.call(o, a);
                                    }), setTimeout(function() {
                                        t.$el.trigger("keyup");
                                    }, 0);
                                    break;
                                case "deleteContentBackward":
                                    var h = new i.Event("keydown");
                                    h.key = s.keys.Backspace, y.keyEvent.call(o, h);
                                    break;
                                default:
                                    (0, l.applyInputValue)(o, u), c.caret.call(t, o, d.begin, d.end, !0);
                            }
                            e.preventDefault();
                        }
                    },
                    setValueEvent: function(e) {
                        var t = this.inputmask, n = t.dependencyLib, i = this, a = e && e.detail ? e.detail[0] : arguments[1];
                        void 0 === a && (a = i.inputmask._valueGet(!0)), (0, l.applyInputValue)(i, a, new n.Event("input")), (e.detail && void 0 !== e.detail[1] || void 0 !== arguments[2]) && c.caret.call(t, i, e.detail ? e.detail[1] : arguments[2]);
                    },
                    focusEvent: function(e) {
                        var t = this.inputmask, n = t.opts, i = t && t._valueGet();
                        n.showMaskOnFocus && i !== c.getBuffer.call(t).join("") && (0, l.writeBuffer)(this, c.getBuffer.call(t), c.seekNext.call(t, c.getLastValidPosition.call(t))), !0 !== n.positionCaretOnTab || !1 !== t.mouseEnter || u.isComplete.call(t, c.getBuffer.call(t)) && -1 !== c.getLastValidPosition.call(t) || y.clickEvent.apply(this, [
                            e,
                            !0
                        ]), t.undoValue = t && t._valueGet(!0);
                    },
                    invalidEvent: function(e) {
                        this.inputmask.validationEvent = !0;
                    },
                    mouseleaveEvent: function() {
                        var e = this.inputmask, t = e.opts, n = this;
                        e.mouseEnter = !1, t.clearMaskOnLostFocus && (n.inputmask.shadowRoot || n.ownerDocument).activeElement !== n && (0, l.HandleNativePlaceholder)(n, e.originalPlaceholder);
                    },
                    clickEvent: function(e, t) {
                        var n = this.inputmask;
                        n.clicked++;
                        var i = this;
                        if ((i.inputmask.shadowRoot || i.ownerDocument).activeElement === i) {
                            var a = c.determineNewCaretPosition.call(n, c.caret.call(n, i), t);
                            void 0 !== a && c.caret.call(n, i, a);
                        }
                    },
                    cutEvent: function(e) {
                        var t = this.inputmask, n = t.maskset, i = this, a = c.caret.call(t, i), r = t.isRTL ? c.getBuffer.call(t).slice(a.end, a.begin) : c.getBuffer.call(t).slice(a.begin, a.end), f = t.isRTL ? r.reverse().join("") : r.join("");
                        o.default.navigator && o.default.navigator.clipboard ? o.default.navigator.clipboard.writeText(f) : o.default.clipboardData && o.default.clipboardData.getData && o.default.clipboardData.setData("Text", f), u.handleRemove.call(t, i, s.keys.Delete, a), (0, l.writeBuffer)(i, c.getBuffer.call(t), n.p, e, t.undoValue !== t._valueGet(!0));
                    },
                    blurEvent: function(e) {
                        var t = this.inputmask, n = t.opts, i = t.dependencyLib;
                        t.clicked = 0;
                        var a = i(this), r = this;
                        if (r.inputmask) {
                            (0, l.HandleNativePlaceholder)(r, t.originalPlaceholder);
                            var o = r.inputmask._valueGet(), s = c.getBuffer.call(t).slice();
                            "" !== o && (n.clearMaskOnLostFocus && (-1 === c.getLastValidPosition.call(t) && o === c.getBufferTemplate.call(t).join("") ? s = [] : l.clearOptionalTail.call(t, s)), !1 === u.isComplete.call(t, s) && (setTimeout(function() {
                                a.trigger("incomplete");
                            }, 0), n.clearIncomplete && (c.resetMaskSet.call(t, !1), s = n.clearMaskOnLostFocus ? [] : c.getBufferTemplate.call(t).slice())), (0, l.writeBuffer)(r, s, void 0, e)), o = t._valueGet(!0), t.undoValue !== o && ("" != o || t.undoValue != c.getBufferTemplate.call(t).join("") || t.undoValue == c.getBufferTemplate.call(t).join("") && t.maskset.validPositions.length > 0) && (t.undoValue = o, a.trigger("change"));
                        }
                    },
                    mouseenterEvent: function() {
                        var e = this.inputmask, t = e.opts.showMaskOnHover, n = this;
                        if (e.mouseEnter = !0, (n.inputmask.shadowRoot || n.ownerDocument).activeElement !== n) {
                            var i = (e.isRTL ? c.getBufferTemplate.call(e).slice().reverse() : c.getBufferTemplate.call(e)).join("");
                            t && (0, l.HandleNativePlaceholder)(n, i);
                        }
                    },
                    submitEvent: function() {
                        var e = this.inputmask, t = e.opts;
                        e.undoValue !== e._valueGet(!0) && e.$el.trigger("change"), -1 === c.getLastValidPosition.call(e) && e._valueGet && e._valueGet() === c.getBufferTemplate.call(e).join("") && e._valueSet(""), t.clearIncomplete && !1 === u.isComplete.call(e, c.getBuffer.call(e)) && e._valueSet(""), t.removeMaskOnSubmit && (e._valueSet(e.unmaskedvalue(), !0), setTimeout(function() {
                            (0, l.writeBuffer)(e.el, c.getBuffer.call(e));
                        }, 0));
                    },
                    resetEvent: function() {
                        var e = this.inputmask;
                        e.refreshValue = !0, setTimeout(function() {
                            (0, l.applyInputValue)(e.el, e._valueGet(!0));
                        }, 0);
                    }
                };
            },
            9716: function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.EventRuler = void 0;
                var i, a = n(7760), r = (i = n(2394)) && i.__esModule ? i : {
                    default: i
                }, o = n(2839), l = n(8711);
                t.EventRuler = {
                    on: function(e, t, n) {
                        var i = e.inputmask.dependencyLib, s = function(t) {
                            t.originalEvent && (t = t.originalEvent || t, arguments[0] = t);
                            var s, c = this, u = c.inputmask, f = u ? u.opts : void 0;
                            if (void 0 === u && "FORM" !== this.nodeName) {
                                var p = i.data(c, "_inputmask_opts");
                                i(c).off(), p && new r.default(p).mask(c);
                            } else {
                                if ([
                                    "submit",
                                    "reset",
                                    "setvalue"
                                ].includes(t.type) || "FORM" === this.nodeName || !(c.disabled || c.readOnly && !("keydown" === t.type && t.ctrlKey && t.key === o.keys.c || !1 === f.tabThrough && t.key === o.keys.Tab))) {
                                    switch(t.type){
                                        case "input":
                                            if (!0 === u.skipInputEvent) return u.skipInputEvent = !1, t.preventDefault();
                                            break;
                                        case "click":
                                        case "focus":
                                            return u.validationEvent ? (u.validationEvent = !1, e.blur(), (0, a.HandleNativePlaceholder)(e, (u.isRTL ? l.getBufferTemplate.call(u).slice().reverse() : l.getBufferTemplate.call(u)).join("")), setTimeout(function() {
                                                e.focus();
                                            }, f.validationEventTimeOut), !1) : (s = arguments, void setTimeout(function() {
                                                e.inputmask && n.apply(c, s);
                                            }, 0));
                                    }
                                    var d = n.apply(c, arguments);
                                    return !1 === d && (t.preventDefault(), t.stopPropagation()), d;
                                }
                                t.preventDefault();
                            }
                        };
                        [
                            "submit",
                            "reset"
                        ].includes(t) ? (s = s.bind(e), null !== e.form && i(e.form).on(t, s)) : i(e).on(t, s), e.inputmask.events[t] = e.inputmask.events[t] || [], e.inputmask.events[t].push(s);
                    },
                    off: function(e, t) {
                        if (e.inputmask && e.inputmask.events) {
                            var n = e.inputmask.dependencyLib, i = e.inputmask.events;
                            for(var a in t && ((i = [])[t] = e.inputmask.events[t]), i){
                                for(var r = i[a]; r.length > 0;){
                                    var o = r.pop();
                                    [
                                        "submit",
                                        "reset"
                                    ].includes(a) ? null !== e.form && n(e.form).off(a, o) : n(e).off(a, o);
                                }
                                delete e.inputmask.events[a];
                            }
                        }
                    }
                };
            },
            219: function(e, t, n) {
                var i = p(n(7184)), a = p(n(2394)), r = n(2839), o = n(8711), l = n(4713);
                function s(e, t) {
                    return function(e) {
                        if (Array.isArray(e)) return e;
                    }(e) || function(e, t) {
                        var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (null != n) {
                            var i, a, r, o, l = [], s = !0, c = !1;
                            try {
                                if (r = (n = n.call(e)).next, 0 === t) {
                                    if (Object(n) !== n) return;
                                    s = !1;
                                } else for(; !(s = (i = r.call(n)).done) && (l.push(i.value), l.length !== t); s = !0);
                            } catch (e) {
                                c = !0, a = e;
                            } finally{
                                try {
                                    if (!s && null != n.return && (o = n.return(), Object(o) !== o)) return;
                                } finally{
                                    if (c) throw a;
                                }
                            }
                            return l;
                        }
                    }(e, t) || function(e, t) {
                        if (!e) return;
                        if ("string" == typeof e) return c(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === n && e.constructor && (n = e.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(e);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(e, t);
                    }(e, t) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    }();
                }
                function c(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for(var n = 0, i = new Array(t); n < t; n++)i[n] = e[n];
                    return i;
                }
                function u(e) {
                    return u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e;
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                    }, u(e);
                }
                function f(e, t) {
                    for(var n = 0; n < t.length; n++){
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, (a = i.key, r = void 0, r = function(e, t) {
                            if ("object" !== u(e) || null === e) return e;
                            var n = e[Symbol.toPrimitive];
                            if (void 0 !== n) {
                                var i = n.call(e, t || "default");
                                if ("object" !== u(i)) return i;
                                throw new TypeError("@@toPrimitive must return a primitive value.");
                            }
                            return ("string" === t ? String : Number)(e);
                        }(a, "string"), "symbol" === u(r) ? r : String(r)), i);
                    }
                    var a, r;
                }
                function p(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }
                n(1313);
                var d = a.default.dependencyLib, h = function() {
                    function e(t, n, i, a) {
                        !function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                        }(this, e), this.mask = t, this.format = n, this.opts = i, this.inputmask = a, this._date = new Date(1, 0, 1), this.initDateObject(t, this.opts, this.inputmask);
                    }
                    var t, n, i;
                    return t = e, n = [
                        {
                            key: "date",
                            get: function() {
                                return void 0 === this._date && (this._date = new Date(1, 0, 1), this.initDateObject(void 0, this.opts, this.inputmask)), this._date;
                            }
                        },
                        {
                            key: "initDateObject",
                            value: function(e, t, n) {
                                var i;
                                for(P(t).lastIndex = 0; i = P(t).exec(this.format);){
                                    var a = /\d+$/.exec(i[0]), r = a ? i[0][0] + "x" : i[0], o = void 0;
                                    if (void 0 !== e) {
                                        if (a) {
                                            var s = P(t).lastIndex, c = j.call(n, i.index, t, n && n.maskset);
                                            P(t).lastIndex = s, o = e.slice(0, e.indexOf(c.nextMatch[0]));
                                        } else {
                                            for(var u = i[0][0], f = i.index; n && (t.placeholder[l.getTest.call(n, f).match.placeholder] || l.getTest.call(n, f).match.placeholder) === u;)f++;
                                            var p = f - i.index;
                                            o = e.slice(0, p || y[r] && y[r][4] || r.length);
                                        }
                                        e = e.slice(o.length);
                                    }
                                    Object.prototype.hasOwnProperty.call(y, r) && this.setValue(this, o, r, y[r][2], y[r][1]);
                                }
                            }
                        },
                        {
                            key: "setValue",
                            value: function(e, t, n, i, a) {
                                if (void 0 !== t) switch(i){
                                    case "ampm":
                                        e[i] = t, e["raw" + i] = t.replace(/\s/g, "_");
                                        break;
                                    case "month":
                                        if ("mmm" === n || "mmmm" === n) {
                                            e[i] = _("mmm" === n ? m.monthNames.slice(0, 12).findIndex(function(e) {
                                                return t.toLowerCase() === e.toLowerCase();
                                            }) + 1 : m.monthNames.slice(12, 24).findIndex(function(e) {
                                                return t.toLowerCase() === e.toLowerCase();
                                            }) + 1, 2), e[i] = "00" === e[i] ? "" : e[i].toString(), e["raw" + i] = e[i];
                                            break;
                                        }
                                    default:
                                        e[i] = t.replace(/[^0-9]/g, "0"), e["raw" + i] = t.replace(/\s/g, "_");
                                }
                                if (void 0 !== a) {
                                    var r = e[i];
                                    ("day" === i && 29 === parseInt(r) || "month" === i && 2 === parseInt(r)) && (29 !== parseInt(e.day) || 2 !== parseInt(e.month) || "" !== e.year && void 0 !== e.year || e._date.setFullYear(2012, 1, 29)), "day" === i && (g = !0, 0 === parseInt(r) && (r = 1)), "month" === i && (g = !0), "year" === i && (g = !0, r.length < y[n][4] && (r = _(r, y[n][4], !0))), ("" !== r && !isNaN(r) || "ampm" === i) && a.call(e._date, r);
                                }
                            }
                        },
                        {
                            key: "reset",
                            value: function() {
                                this._date = new Date(1, 0, 1);
                            }
                        },
                        {
                            key: "reInit",
                            value: function() {
                                this._date = void 0, this.date;
                            }
                        }
                    ], f(t.prototype, n), i && f(t, i), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e;
                }(), v = (new Date).getFullYear(), m = a.default.prototype.i18n, g = !1, y = {
                    d: [
                        "[1-9]|[12][0-9]|3[01]",
                        Date.prototype.setDate,
                        "day",
                        Date.prototype.getDate
                    ],
                    dd: [
                        "0[1-9]|[12][0-9]|3[01]",
                        Date.prototype.setDate,
                        "day",
                        function() {
                            return _(Date.prototype.getDate.call(this), 2);
                        }
                    ],
                    ddd: [
                        ""
                    ],
                    dddd: [
                        ""
                    ],
                    m: [
                        "[1-9]|1[012]",
                        function(e) {
                            var t = e ? parseInt(e) : 0;
                            return t > 0 && t--, Date.prototype.setMonth.call(this, t);
                        },
                        "month",
                        function() {
                            return Date.prototype.getMonth.call(this) + 1;
                        }
                    ],
                    mm: [
                        "0[1-9]|1[012]",
                        function(e) {
                            var t = e ? parseInt(e) : 0;
                            return t > 0 && t--, Date.prototype.setMonth.call(this, t);
                        },
                        "month",
                        function() {
                            return _(Date.prototype.getMonth.call(this) + 1, 2);
                        }
                    ],
                    mmm: [
                        m.monthNames.slice(0, 12).join("|"),
                        function(e) {
                            var t = m.monthNames.slice(0, 12).findIndex(function(t) {
                                return e.toLowerCase() === t.toLowerCase();
                            });
                            return -1 !== t && Date.prototype.setMonth.call(this, t);
                        },
                        "month",
                        function() {
                            return m.monthNames.slice(0, 12)[Date.prototype.getMonth.call(this)];
                        }
                    ],
                    mmmm: [
                        m.monthNames.slice(12, 24).join("|"),
                        function(e) {
                            var t = m.monthNames.slice(12, 24).findIndex(function(t) {
                                return e.toLowerCase() === t.toLowerCase();
                            });
                            return -1 !== t && Date.prototype.setMonth.call(this, t);
                        },
                        "month",
                        function() {
                            return m.monthNames.slice(12, 24)[Date.prototype.getMonth.call(this)];
                        }
                    ],
                    yy: [
                        "[0-9]{2}",
                        function(e) {
                            var t = (new Date).getFullYear().toString().slice(0, 2);
                            Date.prototype.setFullYear.call(this, "".concat(t).concat(e));
                        },
                        "year",
                        function() {
                            return _(Date.prototype.getFullYear.call(this), 2);
                        },
                        2
                    ],
                    yyyy: [
                        "[0-9]{4}",
                        Date.prototype.setFullYear,
                        "year",
                        function() {
                            return _(Date.prototype.getFullYear.call(this), 4);
                        },
                        4
                    ],
                    h: [
                        "[1-9]|1[0-2]",
                        Date.prototype.setHours,
                        "hours",
                        Date.prototype.getHours
                    ],
                    hh: [
                        "0[1-9]|1[0-2]",
                        Date.prototype.setHours,
                        "hours",
                        function() {
                            return _(Date.prototype.getHours.call(this), 2);
                        }
                    ],
                    hx: [
                        function(e) {
                            return "[0-9]{".concat(e, "}");
                        },
                        Date.prototype.setHours,
                        "hours",
                        function(e) {
                            return Date.prototype.getHours;
                        }
                    ],
                    H: [
                        "1?[0-9]|2[0-3]",
                        Date.prototype.setHours,
                        "hours",
                        Date.prototype.getHours
                    ],
                    HH: [
                        "0[0-9]|1[0-9]|2[0-3]",
                        Date.prototype.setHours,
                        "hours",
                        function() {
                            return _(Date.prototype.getHours.call(this), 2);
                        }
                    ],
                    Hx: [
                        function(e) {
                            return "[0-9]{".concat(e, "}");
                        },
                        Date.prototype.setHours,
                        "hours",
                        function(e) {
                            return function() {
                                return _(Date.prototype.getHours.call(this), e);
                            };
                        }
                    ],
                    M: [
                        "[1-5]?[0-9]",
                        Date.prototype.setMinutes,
                        "minutes",
                        Date.prototype.getMinutes
                    ],
                    MM: [
                        "0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]",
                        Date.prototype.setMinutes,
                        "minutes",
                        function() {
                            return _(Date.prototype.getMinutes.call(this), 2);
                        }
                    ],
                    s: [
                        "[1-5]?[0-9]",
                        Date.prototype.setSeconds,
                        "seconds",
                        Date.prototype.getSeconds
                    ],
                    ss: [
                        "0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]",
                        Date.prototype.setSeconds,
                        "seconds",
                        function() {
                            return _(Date.prototype.getSeconds.call(this), 2);
                        }
                    ],
                    l: [
                        "[0-9]{3}",
                        Date.prototype.setMilliseconds,
                        "milliseconds",
                        function() {
                            return _(Date.prototype.getMilliseconds.call(this), 3);
                        },
                        3
                    ],
                    L: [
                        "[0-9]{2}",
                        Date.prototype.setMilliseconds,
                        "milliseconds",
                        function() {
                            return _(Date.prototype.getMilliseconds.call(this), 2);
                        },
                        2
                    ],
                    t: [
                        "[ap]",
                        b,
                        "ampm",
                        x,
                        1
                    ],
                    tt: [
                        "[ap]m",
                        b,
                        "ampm",
                        x,
                        2
                    ],
                    T: [
                        "[AP]",
                        b,
                        "ampm",
                        x,
                        1
                    ],
                    TT: [
                        "[AP]M",
                        b,
                        "ampm",
                        x,
                        2
                    ],
                    Z: [
                        ".*",
                        void 0,
                        "Z",
                        function() {
                            var e = this.toString().match(/\((.+)\)/)[1];
                            e.includes(" ") && (e = (e = e.replace("-", " ").toUpperCase()).split(" ").map(function(e) {
                                return s(e, 1)[0];
                            }).join(""));
                            return e;
                        }
                    ],
                    o: [
                        ""
                    ],
                    S: [
                        ""
                    ]
                }, k = {
                    isoDate: "yyyy-mm-dd",
                    isoTime: "HH:MM:ss",
                    isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
                    isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
                };
                function b(e) {
                    var t = this.getHours();
                    e.toLowerCase().includes("p") ? this.setHours(t + 12) : e.toLowerCase().includes("a") && t >= 12 && this.setHours(t - 12);
                }
                function x() {
                    var e = this.getHours();
                    return (e = e || 12) >= 12 ? "PM" : "AM";
                }
                function w(e) {
                    var t = /\d+$/.exec(e[0]);
                    if (t && void 0 !== t[0]) {
                        var n = y[e[0][0] + "x"].slice("");
                        return n[0] = n[0](t[0]), n[3] = n[3](t[0]), n;
                    }
                    if (y[e[0]]) return y[e[0]];
                }
                function P(e) {
                    if (!e.tokenizer) {
                        var t = [], n = [];
                        for(var i in y)if (/\.*x$/.test(i)) {
                            var a = i[0] + "\\d+";
                            -1 === n.indexOf(a) && n.push(a);
                        } else -1 === t.indexOf(i[0]) && t.push(i[0]);
                        e.tokenizer = "(" + (n.length > 0 ? n.join("|") + "|" : "") + t.join("+|") + ")+?|.", e.tokenizer = new RegExp(e.tokenizer, "g");
                    }
                    return e.tokenizer;
                }
                function S(e, t, n) {
                    if (!g) return !0;
                    if (void 0 === e.rawday || !isFinite(e.rawday) && new Date(e.date.getFullYear(), isFinite(e.rawmonth) ? e.month : e.date.getMonth() + 1, 0).getDate() >= e.day || "29" == e.day && (!isFinite(e.rawyear) || void 0 === e.rawyear || "" === e.rawyear) || new Date(e.date.getFullYear(), isFinite(e.rawmonth) ? e.month : e.date.getMonth() + 1, 0).getDate() >= e.day) return t;
                    if ("29" == e.day) {
                        var i = j.call(this, t.pos, n, this.maskset);
                        if (i.targetMatch && "yyyy" === i.targetMatch[0] && t.pos - i.targetMatchIndex == 2) return t.remove = t.pos + 1, t;
                    } else if (2 == e.date.getMonth() && "30" == e.day && void 0 !== t.c) return e.day = "03", e.date.setDate(3), e.date.setMonth(1), t.insert = [
                        {
                            pos: t.pos,
                            c: "0"
                        },
                        {
                            pos: t.pos + 1,
                            c: t.c
                        }
                    ], t.caret = o.seekNext.call(this, t.pos + 1), t;
                    return !1;
                }
                function O(e, t, n, a) {
                    var r, o, l = "", s = 0, c = {};
                    for(P(n).lastIndex = 0; r = P(n).exec(e);){
                        if (void 0 === t) {
                            if (o = w(r)) l += "(" + o[0] + ")", n.placeholder && "" !== n.placeholder ? (c[s] = n.placeholder[r.index % n.placeholder.length], c[n.placeholder[r.index % n.placeholder.length]] = r[0].charAt(0)) : c[s] = r[0].charAt(0);
                            else switch(r[0]){
                                case "[":
                                    l += "(";
                                    break;
                                case "]":
                                    l += ")?";
                                    break;
                                default:
                                    l += (0, i.default)(r[0]), c[s] = r[0].charAt(0);
                            }
                        } else if (o = w(r)) {
                            if (!0 !== a && o[3]) l += o[3].call(t.date);
                            else o[2] ? l += t["raw" + o[2]] : l += r[0];
                        } else l += r[0];
                        s++;
                    }
                    return void 0 === t && (n.placeholder = c), l;
                }
                function _(e, t, n) {
                    for(e = String(e), t = t || 2; e.length < t;)e = n ? e + "0" : "0" + e;
                    return e;
                }
                function M(e, t, n) {
                    return "string" == typeof e ? new h(e, t, n, this) : e && "object" === u(e) && Object.prototype.hasOwnProperty.call(e, "date") ? e : void 0;
                }
                function E(e, t) {
                    return O(t.inputFormat, {
                        date: e
                    }, t);
                }
                function j(e, t, n) {
                    var i, a, r = this, o = n && n.tests[e] ? t.placeholder[n.tests[e][0].match.placeholder] || n.tests[e][0].match.placeholder : "", s = 0, c = 0;
                    for(P(t).lastIndex = 0; a = P(t).exec(t.inputFormat);){
                        var u = /\d+$/.exec(a[0]);
                        if (u) c = parseInt(u[0]);
                        else {
                            for(var f = a[0][0], p = s; r && (t.placeholder[l.getTest.call(r, p).match.placeholder] || l.getTest.call(r, p).match.placeholder) === f;)p++;
                            0 === (c = p - s) && (c = a[0].length);
                        }
                        if (s += c, -1 != a[0].indexOf(o) || s >= e + 1) {
                            i = a, a = P(t).exec(t.inputFormat);
                            break;
                        }
                    }
                    return {
                        targetMatchIndex: s - c,
                        nextMatch: a,
                        targetMatch: i
                    };
                }
                a.default.extendAliases({
                    datetime: {
                        mask: function(e) {
                            return e.numericInput = !1, y.S = m.ordinalSuffix.join("|"), e.inputFormat = k[e.inputFormat] || e.inputFormat, e.displayFormat = k[e.displayFormat] || e.displayFormat || e.inputFormat, e.outputFormat = k[e.outputFormat] || e.outputFormat || e.inputFormat, e.regex = O(e.inputFormat, void 0, e), e.min = M(e.min, e.inputFormat, e), e.max = M(e.max, e.inputFormat, e), null;
                        },
                        placeholder: "",
                        inputFormat: "isoDateTime",
                        displayFormat: null,
                        outputFormat: null,
                        min: null,
                        max: null,
                        skipOptionalPartCharacter: "",
                        preValidation: function(e, t, n, i, a, r, o, l) {
                            if (l) return !0;
                            if (isNaN(n) && e[t] !== n) {
                                var s = j.call(this, t, a, r);
                                if (s.nextMatch && s.nextMatch[0] === n && s.targetMatch[0].length > 1) {
                                    var c = w(s.targetMatch)[0];
                                    if (new RegExp(c).test("0" + e[t - 1])) return e[t] = e[t - 1], e[t - 1] = "0", {
                                        fuzzy: !0,
                                        buffer: e,
                                        refreshFromBuffer: {
                                            start: t - 1,
                                            end: t + 1
                                        },
                                        pos: t + 1
                                    };
                                }
                            }
                            return !0;
                        },
                        postValidation: function(e, t, n, i, a, r, o, s) {
                            var c, u, f = this;
                            if (o) return !0;
                            if (!1 === i && (((c = j.call(f, t + 1, a, r)).targetMatch && c.targetMatchIndex === t && c.targetMatch[0].length > 1 && void 0 !== y[c.targetMatch[0]] || (c = j.call(f, t + 2, a, r)).targetMatch && c.targetMatchIndex === t + 1 && c.targetMatch[0].length > 1 && void 0 !== y[c.targetMatch[0]]) && (u = w(c.targetMatch)[0]), void 0 !== u && (void 0 !== r.validPositions[t + 1] && new RegExp(u).test(n + "0") ? (e[t] = n, e[t + 1] = "0", i = {
                                pos: t + 2,
                                caret: t
                            }) : new RegExp(u).test("0" + n) && (e[t] = "0", e[t + 1] = n, i = {
                                pos: t + 2
                            })), !1 === i)) return i;
                            if (i.fuzzy && (e = i.buffer, t = i.pos), (c = j.call(f, t, a, r)).targetMatch && c.targetMatch[0] && void 0 !== y[c.targetMatch[0]]) {
                                var p = w(c.targetMatch);
                                u = p[0];
                                var d = e.slice(c.targetMatchIndex, c.targetMatchIndex + c.targetMatch[0].length);
                                if (!1 === new RegExp(u).test(d.join("")) && 2 === c.targetMatch[0].length && r.validPositions[c.targetMatchIndex] && r.validPositions[c.targetMatchIndex + 1] && (r.validPositions[c.targetMatchIndex + 1].input = "0"), "year" == p[2]) for(var h = l.getMaskTemplate.call(f, !1, 1, void 0, !0), m = t + 1; m < e.length; m++)e[m] = h[m], r.validPositions.splice(t + 1, 1);
                            }
                            var g = i, k = M.call(f, e.join(""), a.inputFormat, a);
                            return g && !isNaN(k.date.getTime()) && (a.prefillYear && (g = function(e, t, n) {
                                if (e.year !== e.rawyear) {
                                    var i = v.toString(), a = e.rawyear.replace(/[^0-9]/g, ""), r = i.slice(0, a.length), o = i.slice(a.length);
                                    if (2 === a.length && a === r) {
                                        var l = new Date(v, e.month - 1, e.day);
                                        e.day == l.getDate() && (!n.max || n.max.date.getTime() >= l.getTime()) && (e.date.setFullYear(v), e.year = i, t.insert = [
                                            {
                                                pos: t.pos + 1,
                                                c: o[0]
                                            },
                                            {
                                                pos: t.pos + 2,
                                                c: o[1]
                                            }
                                        ]);
                                    }
                                }
                                return t;
                            }(k, g, a)), g = function(e, t, n, i, a) {
                                if (!t) return t;
                                if (t && n.min && !isNaN(n.min.date.getTime())) {
                                    var r;
                                    for(e.reset(), P(n).lastIndex = 0; r = P(n).exec(n.inputFormat);){
                                        var o;
                                        if ((o = w(r)) && o[3]) {
                                            for(var l = o[1], s = e[o[2]], c = n.min[o[2]], u = n.max ? n.max[o[2]] : c + 1, f = [], p = !1, d = 0; d < c.length; d++)void 0 !== i.validPositions[d + r.index] || p ? (f[d] = s[d], p = p || s[d] > c[d]) : (d + r.index == 0 && s[d] < c[d] ? (f[d] = s[d], p = !0) : f[d] = c[d], "year" === o[2] && s.length - 1 == d && c != u && (f = (parseInt(f.join("")) + 1).toString().split("")), "ampm" === o[2] && c != u && n.min.date.getTime() > e.date.getTime() && (f[d] = u[d]));
                                            l.call(e._date, f.join(""));
                                        }
                                    }
                                    t = n.min.date.getTime() <= e.date.getTime(), e.reInit();
                                }
                                return t && n.max && (isNaN(n.max.date.getTime()) || (t = n.max.date.getTime() >= e.date.getTime())), t;
                            }(k, g = S.call(f, k, g, a), a, r)), void 0 !== t && g && i.pos !== t ? {
                                buffer: O(a.inputFormat, k, a).split(""),
                                refreshFromBuffer: {
                                    start: t,
                                    end: i.pos
                                },
                                pos: i.caret || i.pos
                            } : g;
                        },
                        onKeyDown: function(e, t, n, i) {
                            e.ctrlKey && e.key === r.keys.ArrowRight && (this.inputmask._valueSet(E(new Date, i)), d(this).trigger("setvalue"));
                        },
                        onUnMask: function(e, t, n) {
                            return t ? O(n.outputFormat, M.call(this, e, n.inputFormat, n), n, !0) : t;
                        },
                        casing: function(e, t, n, i) {
                            if (0 == t.nativeDef.indexOf("[ap]")) return e.toLowerCase();
                            if (0 == t.nativeDef.indexOf("[AP]")) return e.toUpperCase();
                            var a = l.getTest.call(this, [
                                n - 1
                            ]);
                            return 0 == a.match.def.indexOf("[AP]") || 0 === n || a && a.input === String.fromCharCode(r.keyCode.Space) || a && a.match.def === String.fromCharCode(r.keyCode.Space) ? e.toUpperCase() : e.toLowerCase();
                        },
                        onBeforeMask: function(e, t) {
                            return "[object Date]" === Object.prototype.toString.call(e) && (e = E(e, t)), e;
                        },
                        insertMode: !1,
                        insertModeVisual: !1,
                        shiftPositions: !1,
                        keepStatic: !1,
                        inputmode: "numeric",
                        prefillYear: !0
                    }
                });
            },
            1313: function(e, t, n) {
                var i, a = (i = n(2394)) && i.__esModule ? i : {
                    default: i
                };
                a.default.dependencyLib.extend(!0, a.default.prototype.i18n, {
                    dayNames: [
                        "Mon",
                        "Tue",
                        "Wed",
                        "Thu",
                        "Fri",
                        "Sat",
                        "Sun",
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                        "Saturday",
                        "Sunday"
                    ],
                    monthNames: [
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                        "Oct",
                        "Nov",
                        "Dec",
                        "January",
                        "February",
                        "March",
                        "April",
                        "May",
                        "June",
                        "July",
                        "August",
                        "September",
                        "October",
                        "November",
                        "December"
                    ],
                    ordinalSuffix: [
                        "st",
                        "nd",
                        "rd",
                        "th"
                    ]
                });
            },
            3851: function(e, t, n) {
                var i, a = (i = n(2394)) && i.__esModule ? i : {
                    default: i
                }, r = n(8711), o = n(4713);
                function l(e) {
                    return function(e) {
                        if (Array.isArray(e)) return s(e);
                    }(e) || function(e) {
                        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
                    }(e) || function(e, t) {
                        if (!e) return;
                        if ("string" == typeof e) return s(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === n && e.constructor && (n = e.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(e);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(e, t);
                    }(e) || function() {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    }();
                }
                function s(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for(var n = 0, i = new Array(t); n < t; n++)i[n] = e[n];
                    return i;
                }
                a.default.extendDefinitions({
                    A: {
                        validator: "[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
                        casing: "upper"
                    },
                    "&": {
                        validator: "[0-9A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
                        casing: "upper"
                    },
                    "#": {
                        validator: "[0-9A-Fa-f]",
                        casing: "upper"
                    }
                });
                var c = /25[0-5]|2[0-4][0-9]|[01][0-9][0-9]/;
                function u(e, t, n, i, a) {
                    if (n - 1 > -1 && "." !== t.buffer[n - 1] ? (e = t.buffer[n - 1] + e, e = n - 2 > -1 && "." !== t.buffer[n - 2] ? t.buffer[n - 2] + e : "0" + e) : e = "00" + e, a.greedy && parseInt(e) > 255 && c.test("00" + e.charAt(2))) {
                        var r = [].concat(l(t.buffer.slice(0, n)), [
                            ".",
                            e.charAt(2)
                        ]);
                        if (r.join("").match(/\./g).length < 4) return {
                            refreshFromBuffer: !0,
                            buffer: r,
                            caret: n + 2
                        };
                    }
                    return c.test(e);
                }
                a.default.extendAliases({
                    cssunit: {
                        regex: "[+-]?[0-9]+\\.?([0-9]+)?(px|em|rem|ex|%|in|cm|mm|pt|pc)"
                    },
                    url: {
                        regex: "(https?|ftp)://.*",
                        autoUnmask: !1,
                        keepStatic: !1,
                        tabThrough: !0
                    },
                    ip: {
                        mask: "i{1,3}.j{1,3}.k{1,3}.l{1,3}",
                        definitions: {
                            i: {
                                validator: u
                            },
                            j: {
                                validator: u
                            },
                            k: {
                                validator: u
                            },
                            l: {
                                validator: u
                            }
                        },
                        onUnMask: function(e, t, n) {
                            return e;
                        },
                        inputmode: "decimal",
                        substitutes: {
                            ",": "."
                        }
                    },
                    email: {
                        mask: function(e) {
                            var t = e.separator, n = e.quantifier, i = "*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]", a = i;
                            if (t) for(var r = 0; r < n; r++)a += "[".concat(t).concat(i, "]");
                            return a;
                        },
                        greedy: !1,
                        casing: "lower",
                        separator: null,
                        quantifier: 5,
                        skipOptionalPartCharacter: "",
                        onBeforePaste: function(e, t) {
                            return (e = e.toLowerCase()).replace("mailto:", "");
                        },
                        definitions: {
                            "*": {
                                validator: "[0-9\uff11-\uff19A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5!#$%&'*+/=?^_`{|}~-]"
                            },
                            "-": {
                                validator: "[0-9A-Za-z-]"
                            }
                        },
                        onUnMask: function(e, t, n) {
                            return e;
                        },
                        inputmode: "email"
                    },
                    mac: {
                        mask: "##:##:##:##:##:##"
                    },
                    vin: {
                        mask: "V{13}9{4}",
                        definitions: {
                            V: {
                                validator: "[A-HJ-NPR-Za-hj-npr-z\\d]",
                                casing: "upper"
                            }
                        },
                        clearIncomplete: !0,
                        autoUnmask: !0
                    },
                    ssn: {
                        mask: "999-99-9999",
                        postValidation: function(e, t, n, i, a, l, s) {
                            var c = o.getMaskTemplate.call(this, !0, r.getLastValidPosition.call(this), !0, !0);
                            return /^(?!219-09-9999|078-05-1120)(?!666|000|9.{2}).{3}-(?!00).{2}-(?!0{4}).{4}$/.test(c.join(""));
                        }
                    }
                });
            },
            207: function(e, t, n) {
                var i = l(n(7184)), a = l(n(2394)), r = n(2839), o = n(8711);
                function l(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }
                var s = a.default.dependencyLib;
                function c(e, t) {
                    for(var n = "", i = 0; i < e.length; i++)a.default.prototype.definitions[e.charAt(i)] || t.definitions[e.charAt(i)] || t.optionalmarker[0] === e.charAt(i) || t.optionalmarker[1] === e.charAt(i) || t.quantifiermarker[0] === e.charAt(i) || t.quantifiermarker[1] === e.charAt(i) || t.groupmarker[0] === e.charAt(i) || t.groupmarker[1] === e.charAt(i) || t.alternatormarker === e.charAt(i) ? n += "\\" + e.charAt(i) : n += e.charAt(i);
                    return n;
                }
                function u(e, t, n, i) {
                    if (e.length > 0 && t > 0 && (!n.digitsOptional || i)) {
                        var a = e.indexOf(n.radixPoint), r = !1;
                        n.negationSymbol.back === e[e.length - 1] && (r = !0, e.length--), -1 === a && (e.push(n.radixPoint), a = e.length - 1);
                        for(var o = 1; o <= t; o++)isFinite(e[a + o]) || (e[a + o] = "0");
                    }
                    return r && e.push(n.negationSymbol.back), e;
                }
                function f(e, t) {
                    var n = 0;
                    for(var i in "+" === e && (n = o.seekNext.call(this, t.validPositions.length - 1)), t.tests)if ((i = parseInt(i)) >= n) {
                        for(var a = 0, r = t.tests[i].length; a < r; a++)if ((void 0 === t.validPositions[i] || "-" === e) && t.tests[i][a].match.def === e) return i + (void 0 !== t.validPositions[i] && "-" !== e ? 1 : 0);
                    }
                    return n;
                }
                function p(e, t) {
                    for(var n = -1, i = 0, a = t.validPositions.length; i < a; i++){
                        var r = t.validPositions[i];
                        if (r && r.match.def === e) {
                            n = i;
                            break;
                        }
                    }
                    return n;
                }
                function d(e, t, n, i, a) {
                    var r = t.buffer ? t.buffer.indexOf(a.radixPoint) : -1, o = (-1 !== r || i && a.jitMasking) && new RegExp(a.definitions[9].validator).test(e);
                    return !i && a._radixDance && -1 !== r && o && null == t.validPositions[r] ? {
                        insert: {
                            pos: r === n ? r + 1 : r,
                            c: a.radixPoint
                        },
                        pos: n
                    } : o;
                }
                a.default.extendAliases({
                    numeric: {
                        mask: function(e) {
                            e.repeat = 0, e.groupSeparator === e.radixPoint && e.digits && "0" !== e.digits && ("." === e.radixPoint ? e.groupSeparator = "," : "," === e.radixPoint ? e.groupSeparator = "." : e.groupSeparator = ""), " " === e.groupSeparator && (e.skipOptionalPartCharacter = void 0), e.placeholder.length > 1 && (e.placeholder = e.placeholder.charAt(0)), "radixFocus" === e.positionCaretOnClick && "" === e.placeholder && (e.positionCaretOnClick = "lvp");
                            var t = "0", n = e.radixPoint;
                            !0 === e.numericInput && void 0 === e.__financeInput ? (t = "1", e.positionCaretOnClick = "radixFocus" === e.positionCaretOnClick ? "lvp" : e.positionCaretOnClick, e.digitsOptional = !1, isNaN(e.digits) && (e.digits = 2), e._radixDance = !1, n = "," === e.radixPoint ? "?" : "!", "" !== e.radixPoint && void 0 === e.definitions[n] && (e.definitions[n] = {}, e.definitions[n].validator = "[" + e.radixPoint + "]", e.definitions[n].placeholder = e.radixPoint, e.definitions[n].static = !0, e.definitions[n].generated = !0)) : (e.__financeInput = !1, e.numericInput = !0);
                            var a, r = "[+]";
                            if (r += c(e.prefix, e), "" !== e.groupSeparator ? (void 0 === e.definitions[e.groupSeparator] && (e.definitions[e.groupSeparator] = {}, e.definitions[e.groupSeparator].validator = "[" + e.groupSeparator + "]", e.definitions[e.groupSeparator].placeholder = e.groupSeparator, e.definitions[e.groupSeparator].static = !0, e.definitions[e.groupSeparator].generated = !0), r += e._mask(e)) : r += "9{+}", void 0 !== e.digits && 0 !== e.digits) {
                                var o = e.digits.toString().split(",");
                                isFinite(o[0]) && o[1] && isFinite(o[1]) ? r += n + t + "{" + e.digits + "}" : (isNaN(e.digits) || parseInt(e.digits) > 0) && (e.digitsOptional || e.jitMasking ? (a = r + n + t + "{0," + e.digits + "}", e.keepStatic = !0) : r += n + t + "{" + e.digits + "}");
                            } else e.inputmode = "numeric";
                            return r += c(e.suffix, e), r += "[-]", a && (r = [
                                a + c(e.suffix, e) + "[-]",
                                r
                            ]), e.greedy = !1, function(e) {
                                void 0 === e.parseMinMaxOptions && (null !== e.min && (e.min = e.min.toString().replace(new RegExp((0, i.default)(e.groupSeparator), "g"), ""), "," === e.radixPoint && (e.min = e.min.replace(e.radixPoint, ".")), e.min = isFinite(e.min) ? parseFloat(e.min) : NaN, isNaN(e.min) && (e.min = Number.MIN_VALUE)), null !== e.max && (e.max = e.max.toString().replace(new RegExp((0, i.default)(e.groupSeparator), "g"), ""), "," === e.radixPoint && (e.max = e.max.replace(e.radixPoint, ".")), e.max = isFinite(e.max) ? parseFloat(e.max) : NaN, isNaN(e.max) && (e.max = Number.MAX_VALUE)), e.parseMinMaxOptions = "done");
                            }(e), "" !== e.radixPoint && e.substituteRadixPoint && (e.substitutes["." == e.radixPoint ? "," : "."] = e.radixPoint), r;
                        },
                        _mask: function(e) {
                            return "(" + e.groupSeparator + "999){+|1}";
                        },
                        digits: "*",
                        digitsOptional: !0,
                        enforceDigitsOnBlur: !1,
                        radixPoint: ".",
                        positionCaretOnClick: "radixFocus",
                        _radixDance: !0,
                        groupSeparator: "",
                        allowMinus: !0,
                        negationSymbol: {
                            front: "-",
                            back: ""
                        },
                        prefix: "",
                        suffix: "",
                        min: null,
                        max: null,
                        SetMaxOnOverflow: !1,
                        step: 1,
                        inputType: "text",
                        unmaskAsNumber: !1,
                        roundingFN: Math.round,
                        inputmode: "decimal",
                        shortcuts: {
                            k: "1000",
                            m: "1000000"
                        },
                        placeholder: "0",
                        greedy: !1,
                        rightAlign: !0,
                        insertMode: !0,
                        autoUnmask: !1,
                        skipOptionalPartCharacter: "",
                        usePrototypeDefinitions: !1,
                        stripLeadingZeroes: !0,
                        substituteRadixPoint: !0,
                        definitions: {
                            0: {
                                validator: d
                            },
                            1: {
                                validator: d,
                                definitionSymbol: "9"
                            },
                            9: {
                                validator: "[0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]",
                                definitionSymbol: "*"
                            },
                            "+": {
                                validator: function(e, t, n, i, a) {
                                    return a.allowMinus && ("-" === e || e === a.negationSymbol.front);
                                }
                            },
                            "-": {
                                validator: function(e, t, n, i, a) {
                                    return a.allowMinus && e === a.negationSymbol.back;
                                }
                            }
                        },
                        preValidation: function(e, t, n, i, a, r, o, l) {
                            var s = this;
                            if (!1 !== a.__financeInput && n === a.radixPoint) return !1;
                            var c = e.indexOf(a.radixPoint), u = t;
                            if (t = function(e, t, n, i, a) {
                                return a._radixDance && a.numericInput && t !== a.negationSymbol.back && e <= n && (n > 0 || t == a.radixPoint) && (void 0 === i.validPositions[e - 1] || i.validPositions[e - 1].input !== a.negationSymbol.back) && (e -= 1), e;
                            }(t, n, c, r, a), "-" === n || n === a.negationSymbol.front) {
                                if (!0 !== a.allowMinus) return !1;
                                var d = !1, h = p("+", r), v = p("-", r);
                                return -1 !== h && (d = [
                                    h
                                ], -1 !== v && d.push(v)), !1 !== d ? {
                                    remove: d,
                                    caret: u - a.negationSymbol.back.length
                                } : {
                                    insert: [
                                        {
                                            pos: f.call(s, "+", r),
                                            c: a.negationSymbol.front,
                                            fromIsValid: !0
                                        },
                                        {
                                            pos: f.call(s, "-", r),
                                            c: a.negationSymbol.back,
                                            fromIsValid: void 0
                                        }
                                    ],
                                    caret: u + a.negationSymbol.back.length
                                };
                            }
                            if (n === a.groupSeparator) return {
                                caret: u
                            };
                            if (l) return !0;
                            if (-1 !== c && !0 === a._radixDance && !1 === i && n === a.radixPoint && void 0 !== a.digits && (isNaN(a.digits) || parseInt(a.digits) > 0) && c !== t) {
                                var m = f.call(s, a.radixPoint, r);
                                return r.validPositions[m] && (r.validPositions[m].generatedInput = r.validPositions[m].generated || !1), {
                                    caret: a._radixDance && t === c - 1 ? c + 1 : c
                                };
                            }
                            if (!1 === a.__financeInput) {
                                if (i) {
                                    if (a.digitsOptional) return {
                                        rewritePosition: o.end
                                    };
                                    if (!a.digitsOptional) {
                                        if (o.begin > c && o.end <= c) return n === a.radixPoint ? {
                                            insert: {
                                                pos: c + 1,
                                                c: "0",
                                                fromIsValid: !0
                                            },
                                            rewritePosition: c
                                        } : {
                                            rewritePosition: c + 1
                                        };
                                        if (o.begin < c) return {
                                            rewritePosition: o.begin - 1
                                        };
                                    }
                                } else if (!a.showMaskOnHover && !a.showMaskOnFocus && !a.digitsOptional && a.digits > 0 && "" === this.__valueGet.call(this.el)) return {
                                    rewritePosition: c
                                };
                            }
                            return {
                                rewritePosition: t
                            };
                        },
                        postValidation: function(e, t, n, i, a, r, o) {
                            if (!1 === i) return i;
                            if (o) return !0;
                            if (null !== a.min || null !== a.max) {
                                var l = a.onUnMask(e.slice().reverse().join(""), void 0, s.extend({}, a, {
                                    unmaskAsNumber: !0
                                }));
                                if (null !== a.min && l < a.min && (l.toString().length > a.min.toString().length || l < 0)) return !1;
                                if (null !== a.max && l > a.max) return !!a.SetMaxOnOverflow && {
                                    refreshFromBuffer: !0,
                                    buffer: u(a.max.toString().replace(".", a.radixPoint).split(""), a.digits, a).reverse()
                                };
                            }
                            return i;
                        },
                        onUnMask: function(e, t, n) {
                            if ("" === t && !0 === n.nullable) return t;
                            var a = e.replace(n.prefix, "");
                            return a = (a = a.replace(n.suffix, "")).replace(new RegExp((0, i.default)(n.groupSeparator), "g"), ""), "" !== n.placeholder.charAt(0) && (a = a.replace(new RegExp(n.placeholder.charAt(0), "g"), "0")), n.unmaskAsNumber ? ("" !== n.radixPoint && -1 !== a.indexOf(n.radixPoint) && (a = a.replace(i.default.call(this, n.radixPoint), ".")), a = (a = a.replace(new RegExp("^" + (0, i.default)(n.negationSymbol.front)), "-")).replace(new RegExp((0, i.default)(n.negationSymbol.back) + "$"), ""), Number(a)) : a;
                        },
                        isComplete: function(e, t) {
                            var n = (t.numericInput ? e.slice().reverse() : e).join("");
                            return n = (n = (n = (n = (n = n.replace(new RegExp("^" + (0, i.default)(t.negationSymbol.front)), "-")).replace(new RegExp((0, i.default)(t.negationSymbol.back) + "$"), "")).replace(t.prefix, "")).replace(t.suffix, "")).replace(new RegExp((0, i.default)(t.groupSeparator) + "([0-9]{3})", "g"), "$1"), "," === t.radixPoint && (n = n.replace((0, i.default)(t.radixPoint), ".")), isFinite(n);
                        },
                        onBeforeMask: function(e, t) {
                            var n;
                            e = null !== (n = e) && void 0 !== n ? n : "";
                            var a = t.radixPoint || ",";
                            isFinite(t.digits) && (t.digits = parseInt(t.digits)), "number" != typeof e && "number" !== t.inputType || "" === a || (e = e.toString().replace(".", a));
                            var r = "-" === e.charAt(0) || e.charAt(0) === t.negationSymbol.front, o = e.split(a), l = o[0].replace(/[^\-0-9]/g, ""), s = o.length > 1 ? o[1].replace(/[^0-9]/g, "") : "", c = o.length > 1;
                            e = l + ("" !== s ? a + s : s);
                            var f = 0;
                            if ("" !== a && (f = t.digitsOptional ? t.digits < s.length ? t.digits : s.length : t.digits, "" !== s || !t.digitsOptional)) {
                                var p = Math.pow(10, f || 1);
                                e = e.replace((0, i.default)(a), "."), isNaN(parseFloat(e)) || (e = (t.roundingFN(parseFloat(e) * p) / p).toFixed(f)), e = e.toString().replace(".", a);
                            }
                            if (0 === t.digits && -1 !== e.indexOf(a) && (e = e.substring(0, e.indexOf(a))), null !== t.min || null !== t.max) {
                                var d = e.toString().replace(a, ".");
                                null !== t.min && d < t.min ? e = t.min.toString().replace(".", a) : null !== t.max && d > t.max && (e = t.max.toString().replace(".", a));
                            }
                            return r && "-" !== e.charAt(0) && (e = "-" + e), u(e.toString().split(""), f, t, c).join("");
                        },
                        onBeforeWrite: function(e, t, n, a) {
                            function r(e, t) {
                                if (!1 !== a.__financeInput || t) {
                                    var n = e.indexOf(a.radixPoint);
                                    -1 !== n && e.splice(n, 1);
                                }
                                if ("" !== a.groupSeparator) for(; -1 !== (n = e.indexOf(a.groupSeparator));)e.splice(n, 1);
                                return e;
                            }
                            var o, l;
                            if (a.stripLeadingZeroes && (l = function(e, t) {
                                var n = new RegExp("(^" + ("" !== t.negationSymbol.front ? (0, i.default)(t.negationSymbol.front) + "?" : "") + (0, i.default)(t.prefix) + ")(.*)(" + (0, i.default)(t.suffix) + ("" != t.negationSymbol.back ? (0, i.default)(t.negationSymbol.back) + "?" : "") + "$)").exec(e.slice().reverse().join("")), a = n ? n[2] : "", r = !1;
                                return a && (a = a.split(t.radixPoint.charAt(0))[0], r = new RegExp("^[0" + t.groupSeparator + "]*").exec(a)), !(!r || !(r[0].length > 1 || r[0].length > 0 && r[0].length < a.length)) && r;
                            }(t, a))) for(var c = t.join("").lastIndexOf(l[0].split("").reverse().join("")) - (l[0] == l.input ? 0 : 1), f = l[0] == l.input ? 1 : 0, p = l[0].length - f; p > 0; p--)this.maskset.validPositions.splice(c + p, 1), delete t[c + p];
                            if (e) switch(e.type){
                                case "blur":
                                case "checkval":
                                    if (null !== a.min) {
                                        var d = a.onUnMask(t.slice().reverse().join(""), void 0, s.extend({}, a, {
                                            unmaskAsNumber: !0
                                        }));
                                        if (null !== a.min && d < a.min) return {
                                            refreshFromBuffer: !0,
                                            buffer: u(a.min.toString().replace(".", a.radixPoint).split(""), a.digits, a).reverse()
                                        };
                                    }
                                    if (t[t.length - 1] === a.negationSymbol.front) {
                                        var h = new RegExp("(^" + ("" != a.negationSymbol.front ? (0, i.default)(a.negationSymbol.front) + "?" : "") + (0, i.default)(a.prefix) + ")(.*)(" + (0, i.default)(a.suffix) + ("" != a.negationSymbol.back ? (0, i.default)(a.negationSymbol.back) + "?" : "") + "$)").exec(r(t.slice(), !0).reverse().join(""));
                                        0 == (h ? h[2] : "") && (o = {
                                            refreshFromBuffer: !0,
                                            buffer: [
                                                0
                                            ]
                                        });
                                    } else if ("" !== a.radixPoint) t.indexOf(a.radixPoint) === a.suffix.length && (o && o.buffer ? o.buffer.splice(0, 1 + a.suffix.length) : (t.splice(0, 1 + a.suffix.length), o = {
                                        refreshFromBuffer: !0,
                                        buffer: r(t)
                                    }));
                                    if (a.enforceDigitsOnBlur) {
                                        var v = (o = o || {}, o.buffer) || t.slice().reverse();
                                        o.refreshFromBuffer = !0, o.buffer = u(v, a.digits, a, !0).reverse();
                                    }
                            }
                            return o;
                        },
                        onKeyDown: function(e, t, n, i) {
                            var a, o = s(this);
                            if (3 != e.location) {
                                var l, c = e.key;
                                if ((l = i.shortcuts && i.shortcuts[c]) && l.length > 1) return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) * parseInt(l)), o.trigger("setvalue"), !1;
                            }
                            if (e.ctrlKey) switch(e.key){
                                case r.keys.ArrowUp:
                                    return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) + parseInt(i.step)), o.trigger("setvalue"), !1;
                                case r.keys.ArrowDown:
                                    return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) - parseInt(i.step)), o.trigger("setvalue"), !1;
                            }
                            if (!e.shiftKey && (e.key === r.keys.Delete || e.key === r.keys.Backspace || e.key === r.keys.BACKSPACE_SAFARI) && n.begin !== t.length) {
                                if (t[e.key === r.keys.Delete ? n.begin - 1 : n.end] === i.negationSymbol.front) return a = t.slice().reverse(), "" !== i.negationSymbol.front && a.shift(), "" !== i.negationSymbol.back && a.pop(), o.trigger("setvalue", [
                                    a.join(""),
                                    n.begin
                                ]), !1;
                                if (!0 === i._radixDance) {
                                    var f, p = t.indexOf(i.radixPoint);
                                    if (i.digitsOptional) {
                                        if (0 === p) return (a = t.slice().reverse()).pop(), o.trigger("setvalue", [
                                            a.join(""),
                                            n.begin >= a.length ? a.length : n.begin
                                        ]), !1;
                                    } else if (-1 !== p && (n.begin < p || n.end < p || e.key === r.keys.Delete && (n.begin === p || n.begin - 1 === p))) return n.begin === n.end && (e.key === r.keys.Backspace || e.key === r.keys.BACKSPACE_SAFARI ? n.begin++ : e.key === r.keys.Delete && n.begin - 1 === p && (f = s.extend({}, n), n.begin--, n.end--)), (a = t.slice().reverse()).splice(a.length - n.begin, n.begin - n.end + 1), a = u(a, i.digits, i).join(""), f && (n = f), o.trigger("setvalue", [
                                        a,
                                        n.begin >= a.length ? p + 1 : n.begin
                                    ]), !1;
                                }
                            }
                        }
                    },
                    currency: {
                        prefix: "",
                        groupSeparator: ",",
                        alias: "numeric",
                        digits: 2,
                        digitsOptional: !1
                    },
                    decimal: {
                        alias: "numeric"
                    },
                    integer: {
                        alias: "numeric",
                        inputmode: "numeric",
                        digits: 0
                    },
                    percentage: {
                        alias: "numeric",
                        min: 0,
                        max: 100,
                        suffix: " %",
                        digits: 0,
                        allowMinus: !1
                    },
                    indianns: {
                        alias: "numeric",
                        _mask: function(e) {
                            return "(" + e.groupSeparator + "99){*|1}(" + e.groupSeparator + "999){1|1}";
                        },
                        groupSeparator: ",",
                        radixPoint: ".",
                        placeholder: "0",
                        digits: 2,
                        digitsOptional: !1
                    }
                });
            },
            9380: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var n = !("undefined" == typeof window || !window.document || !window.document.createElement);
                t.default = n ? window : {};
            },
            7760: function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.HandleNativePlaceholder = function(e, t) {
                    var n = e ? e.inputmask : this;
                    if (i.ie) {
                        if (e.inputmask._valueGet() !== t && (e.placeholder !== t || "" === e.placeholder)) {
                            var a = o.getBuffer.call(n).slice(), r = e.inputmask._valueGet();
                            if (r !== t) {
                                var l = o.getLastValidPosition.call(n);
                                -1 === l && r === o.getBufferTemplate.call(n).join("") ? a = [] : -1 !== l && u.call(n, a), p(e, a);
                            }
                        }
                    } else e.placeholder !== t && (e.placeholder = t, "" === e.placeholder && e.removeAttribute("placeholder"));
                }, t.applyInputValue = c, t.checkVal = f, t.clearOptionalTail = u, t.unmaskedvalue = function(e) {
                    var t = e ? e.inputmask : this, n = t.opts, i = t.maskset;
                    if (e) {
                        if (void 0 === e.inputmask) return e.value;
                        e.inputmask && e.inputmask.refreshValue && c(e, e.inputmask._valueGet(!0));
                    }
                    for(var a = [], r = i.validPositions, l = 0, s = r.length; l < s; l++)r[l] && r[l].match && (1 != r[l].match.static || Array.isArray(i.metadata) && !0 !== r[l].generatedInput) && a.push(r[l].input);
                    var u = 0 === a.length ? "" : (t.isRTL ? a.reverse() : a).join("");
                    if ("function" == typeof n.onUnMask) {
                        var f = (t.isRTL ? o.getBuffer.call(t).slice().reverse() : o.getBuffer.call(t)).join("");
                        u = n.onUnMask.call(t, f, u, n);
                    }
                    return u;
                }, t.writeBuffer = p;
                var i = n(9845), a = n(6030), r = n(2839), o = n(8711), l = n(7215), s = n(4713);
                function c(e, t, n) {
                    var i = e ? e.inputmask : this, a = i.opts;
                    e.inputmask.refreshValue = !1, "function" == typeof a.onBeforeMask && (t = a.onBeforeMask.call(i, t, a) || t), f(e, !0, !1, t = (t || "").toString().split(""), n), i.undoValue = i._valueGet(!0), (a.clearMaskOnLostFocus || a.clearIncomplete) && e.inputmask._valueGet() === o.getBufferTemplate.call(i).join("") && -1 === o.getLastValidPosition.call(i) && e.inputmask._valueSet("");
                }
                function u(e) {
                    e.length = 0;
                    for(var t, n = s.getMaskTemplate.call(this, !0, 0, !0, void 0, !0); void 0 !== (t = n.shift());)e.push(t);
                    return e;
                }
                function f(e, t, n, i, r) {
                    var c, u = e ? e.inputmask : this, f = u.maskset, d = u.opts, h = u.dependencyLib, v = i.slice(), m = "", g = -1, y = d.skipOptionalPartCharacter;
                    d.skipOptionalPartCharacter = "", o.resetMaskSet.call(u, !1), u.clicked = 0, g = d.radixPoint ? o.determineNewCaretPosition.call(u, {
                        begin: 0,
                        end: 0
                    }, !1, !1 === d.__financeInput ? "radixFocus" : void 0).begin : 0, f.p = g, u.caretPos = {
                        begin: g
                    };
                    var k = [], b = u.caretPos;
                    if (v.forEach(function(e, t) {
                        if (void 0 !== e) {
                            var i = new h.Event("_checkval");
                            i.key = e, m += e;
                            var r = o.getLastValidPosition.call(u, void 0, !0);
                            !function(e, t) {
                                for(var n = s.getMaskTemplate.call(u, !0, 0).slice(e, o.seekNext.call(u, e, !1, !1)).join("").replace(/'/g, ""), i = n.indexOf(t); i > 0 && " " === n[i - 1];)i--;
                                var a = 0 === i && !o.isMask.call(u, e) && (s.getTest.call(u, e).match.nativeDef === t.charAt(0) || !0 === s.getTest.call(u, e).match.static && s.getTest.call(u, e).match.nativeDef === "'" + t.charAt(0) || " " === s.getTest.call(u, e).match.nativeDef && (s.getTest.call(u, e + 1).match.nativeDef === t.charAt(0) || !0 === s.getTest.call(u, e + 1).match.static && s.getTest.call(u, e + 1).match.nativeDef === "'" + t.charAt(0)));
                                if (!a && i > 0 && !o.isMask.call(u, e, !1, !0)) {
                                    var r = o.seekNext.call(u, e);
                                    u.caretPos.begin < r && (u.caretPos = {
                                        begin: r
                                    });
                                }
                                return a;
                            }(g, m) ? (c = a.EventHandlers.keypressEvent.call(u, i, !0, !1, n, u.caretPos.begin)) && (g = u.caretPos.begin + 1, m = "") : c = a.EventHandlers.keypressEvent.call(u, i, !0, !1, n, r + 1), c ? (void 0 !== c.pos && f.validPositions[c.pos] && !0 === f.validPositions[c.pos].match.static && void 0 === f.validPositions[c.pos].alternation && (k.push(c.pos), u.isRTL || (c.forwardPosition = c.pos + 1)), p.call(u, void 0, o.getBuffer.call(u), c.forwardPosition, i, !1), u.caretPos = {
                                begin: c.forwardPosition,
                                end: c.forwardPosition
                            }, b = u.caretPos) : void 0 === f.validPositions[t] && v[t] === s.getPlaceholder.call(u, t) && o.isMask.call(u, t, !0) ? u.caretPos.begin++ : u.caretPos = b;
                        }
                    }), k.length > 0) {
                        var x, w, P = o.seekNext.call(u, -1, void 0, !1);
                        if (!l.isComplete.call(u, o.getBuffer.call(u)) && k.length <= P || l.isComplete.call(u, o.getBuffer.call(u)) && k.length > 0 && k.length !== P && 0 === k[0]) {
                            for(var S = P; void 0 !== (x = k.shift());)if (x < S) {
                                var O = new h.Event("_checkval");
                                if ((w = f.validPositions[x]).generatedInput = !0, O.key = w.input, (c = a.EventHandlers.keypressEvent.call(u, O, !0, !1, n, S)) && void 0 !== c.pos && c.pos !== x && f.validPositions[c.pos] && !0 === f.validPositions[c.pos].match.static) k.push(c.pos);
                                else if (!c) break;
                                S++;
                            }
                        }
                    }
                    t && p.call(u, e, o.getBuffer.call(u), c ? c.forwardPosition : u.caretPos.begin, r || new h.Event("checkval"), r && ("input" === r.type && u.undoValue !== o.getBuffer.call(u).join("") || "paste" === r.type)), d.skipOptionalPartCharacter = y;
                }
                function p(e, t, n, i, a) {
                    var s = e ? e.inputmask : this, c = s.opts, u = s.dependencyLib;
                    if (i && "function" == typeof c.onBeforeWrite) {
                        var f = c.onBeforeWrite.call(s, i, t, n, c);
                        if (f) {
                            if (f.refreshFromBuffer) {
                                var p = f.refreshFromBuffer;
                                l.refreshFromBuffer.call(s, !0 === p ? p : p.start, p.end, f.buffer || t), t = o.getBuffer.call(s, !0);
                            }
                            void 0 !== n && (n = void 0 !== f.caret ? f.caret : n);
                        }
                    }
                    if (void 0 !== e && (e.inputmask._valueSet(t.join("")), void 0 === n || void 0 !== i && "blur" === i.type || o.caret.call(s, e, n, void 0, void 0, void 0 !== i && "keydown" === i.type && (i.key === r.keys.Delete || i.key === r.keys.Backspace)), void 0 === e.inputmask.writeBufferHook || e.inputmask.writeBufferHook(n), !0 === a)) {
                        var d = u(e), h = e.inputmask._valueGet();
                        e.inputmask.skipInputEvent = !0, d.trigger("input"), setTimeout(function() {
                            h === o.getBufferTemplate.call(s).join("") ? d.trigger("cleared") : !0 === l.isComplete.call(s, t) && d.trigger("complete");
                        }, 0);
                    }
                }
            },
            2394: function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var i = v(n(3976)), a = v(n(7392)), r = v(n(4963)), o = n(9716), l = v(n(9380)), s = n(7760), c = n(157), u = n(2391), f = n(8711), p = n(7215), d = n(4713);
                function h(e) {
                    return h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e;
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                    }, h(e);
                }
                function v(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }
                var m = l.default.document, g = "_inputmask_opts";
                function y(e, t, n) {
                    if (!(this instanceof y)) return new y(e, t, n);
                    this.dependencyLib = r.default, this.el = void 0, this.events = {}, this.maskset = void 0, !0 !== n && ("[object Object]" === Object.prototype.toString.call(e) ? t = e : (t = t || {}, e && (t.alias = e)), this.opts = r.default.extend(!0, {}, this.defaults, t), this.noMasksCache = t && void 0 !== t.definitions, this.userOptions = t || {}, k(this.opts.alias, t, this.opts)), this.refreshValue = !1, this.undoValue = void 0, this.$el = void 0, this.skipInputEvent = !1, this.validationEvent = !1, this.ignorable = !1, this.maxLength, this.mouseEnter = !1, this.clicked = 0, this.originalPlaceholder = void 0, this.isComposing = !1, this.hasAlternator = !1;
                }
                function k(e, t, n) {
                    var i = y.prototype.aliases[e];
                    return i ? (i.alias && k(i.alias, void 0, n), r.default.extend(!0, n, i), r.default.extend(!0, n, t), !0) : (null === n.mask && (n.mask = e), !1);
                }
                y.prototype = {
                    dataAttribute: "data-inputmask",
                    defaults: i.default,
                    definitions: a.default,
                    aliases: {},
                    masksCache: {},
                    i18n: {},
                    get isRTL () {
                        return this.opts.isRTL || this.opts.numericInput;
                    },
                    mask: function(e) {
                        var t = this;
                        return "string" == typeof e && (e = m.getElementById(e) || m.querySelectorAll(e)), (e = e.nodeName ? [
                            e
                        ] : Array.isArray(e) ? e : [].slice.call(e)).forEach(function(e, n) {
                            var i = r.default.extend(!0, {}, t.opts);
                            if (function(e, t, n, i) {
                                function a(t, a) {
                                    var r = "" === i ? t : i + "-" + t;
                                    null !== (a = void 0 !== a ? a : e.getAttribute(r)) && ("string" == typeof a && (0 === t.indexOf("on") ? a = l.default[a] : "false" === a ? a = !1 : "true" === a && (a = !0)), n[t] = a);
                                }
                                if (!0 === t.importDataAttributes) {
                                    var o, s, c, u, f = e.getAttribute(i);
                                    if (f && "" !== f && (f = f.replace(/'/g, '"'), s = JSON.parse("{" + f + "}")), s) {
                                        for(u in c = void 0, s)if ("alias" === u.toLowerCase()) {
                                            c = s[u];
                                            break;
                                        }
                                    }
                                    for(o in a("alias", c), n.alias && k(n.alias, n, t), t){
                                        if (s) {
                                            for(u in c = void 0, s)if (u.toLowerCase() === o.toLowerCase()) {
                                                c = s[u];
                                                break;
                                            }
                                        }
                                        a(o, c);
                                    }
                                }
                                r.default.extend(!0, t, n), ("rtl" === e.dir || t.rightAlign) && (e.style.textAlign = "right");
                                ("rtl" === e.dir || t.numericInput) && (e.dir = "ltr", e.removeAttribute("dir"), t.isRTL = !0);
                                return Object.keys(n).length;
                            }(e, i, r.default.extend(!0, {}, t.userOptions), t.dataAttribute)) {
                                var a = (0, u.generateMaskSet)(i, t.noMasksCache);
                                void 0 !== a && (void 0 !== e.inputmask && (e.inputmask.opts.autoUnmask = !0, e.inputmask.remove()), e.inputmask = new y(void 0, void 0, !0), e.inputmask.opts = i, e.inputmask.noMasksCache = t.noMasksCache, e.inputmask.userOptions = r.default.extend(!0, {}, t.userOptions), e.inputmask.el = e, e.inputmask.$el = (0, r.default)(e), e.inputmask.maskset = a, r.default.data(e, g, t.userOptions), c.mask.call(e.inputmask));
                            }
                        }), e && e[0] && e[0].inputmask || this;
                    },
                    option: function(e, t) {
                        return "string" == typeof e ? this.opts[e] : "object" === h(e) ? (r.default.extend(this.userOptions, e), this.el && !0 !== t && this.mask(this.el), this) : void 0;
                    },
                    unmaskedvalue: function(e) {
                        if (this.maskset = this.maskset || (0, u.generateMaskSet)(this.opts, this.noMasksCache), void 0 === this.el || void 0 !== e) {
                            var t = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, e, this.opts) || e).split("");
                            s.checkVal.call(this, void 0, !1, !1, t), "function" == typeof this.opts.onBeforeWrite && this.opts.onBeforeWrite.call(this, void 0, f.getBuffer.call(this), 0, this.opts);
                        }
                        return s.unmaskedvalue.call(this, this.el);
                    },
                    remove: function() {
                        if (this.el) {
                            r.default.data(this.el, g, null);
                            var e = this.opts.autoUnmask ? (0, s.unmaskedvalue)(this.el) : this._valueGet(this.opts.autoUnmask);
                            e !== f.getBufferTemplate.call(this).join("") ? this._valueSet(e, this.opts.autoUnmask) : this._valueSet(""), o.EventRuler.off(this.el), Object.getOwnPropertyDescriptor && Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this.el), "value") && this.__valueGet && Object.defineProperty(this.el, "value", {
                                get: this.__valueGet,
                                set: this.__valueSet,
                                configurable: !0
                            }) : m.__lookupGetter__ && this.el.__lookupGetter__("value") && this.__valueGet && (this.el.__defineGetter__("value", this.__valueGet), this.el.__defineSetter__("value", this.__valueSet)), this.el.inputmask = void 0;
                        }
                        return this.el;
                    },
                    getemptymask: function() {
                        return this.maskset = this.maskset || (0, u.generateMaskSet)(this.opts, this.noMasksCache), (this.isRTL ? f.getBufferTemplate.call(this).reverse() : f.getBufferTemplate.call(this)).join("");
                    },
                    hasMaskedValue: function() {
                        return !this.opts.autoUnmask;
                    },
                    isComplete: function() {
                        return this.maskset = this.maskset || (0, u.generateMaskSet)(this.opts, this.noMasksCache), p.isComplete.call(this, f.getBuffer.call(this));
                    },
                    getmetadata: function() {
                        if (this.maskset = this.maskset || (0, u.generateMaskSet)(this.opts, this.noMasksCache), Array.isArray(this.maskset.metadata)) {
                            var e = d.getMaskTemplate.call(this, !0, 0, !1).join("");
                            return this.maskset.metadata.forEach(function(t) {
                                return t.mask !== e || (e = t, !1);
                            }), e;
                        }
                        return this.maskset.metadata;
                    },
                    isValid: function(e) {
                        if (this.maskset = this.maskset || (0, u.generateMaskSet)(this.opts, this.noMasksCache), e) {
                            var t = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, e, this.opts) || e).split("");
                            s.checkVal.call(this, void 0, !0, !1, t);
                        } else e = this.isRTL ? f.getBuffer.call(this).slice().reverse().join("") : f.getBuffer.call(this).join("");
                        for(var n = f.getBuffer.call(this), i = f.determineLastRequiredPosition.call(this), a = n.length - 1; a > i && !f.isMask.call(this, a); a--);
                        return n.splice(i, a + 1 - i), p.isComplete.call(this, n) && e === (this.isRTL ? f.getBuffer.call(this).slice().reverse().join("") : f.getBuffer.call(this).join(""));
                    },
                    format: function(e, t) {
                        this.maskset = this.maskset || (0, u.generateMaskSet)(this.opts, this.noMasksCache);
                        var n = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, e, this.opts) || e).split("");
                        s.checkVal.call(this, void 0, !0, !1, n);
                        var i = this.isRTL ? f.getBuffer.call(this).slice().reverse().join("") : f.getBuffer.call(this).join("");
                        return t ? {
                            value: i,
                            metadata: this.getmetadata()
                        } : i;
                    },
                    setValue: function(e) {
                        this.el && (0, r.default)(this.el).trigger("setvalue", [
                            e
                        ]);
                    },
                    analyseMask: u.analyseMask
                }, y.extendDefaults = function(e) {
                    r.default.extend(!0, y.prototype.defaults, e);
                }, y.extendDefinitions = function(e) {
                    r.default.extend(!0, y.prototype.definitions, e);
                }, y.extendAliases = function(e) {
                    r.default.extend(!0, y.prototype.aliases, e);
                }, y.format = function(e, t, n) {
                    return y(t).format(e, n);
                }, y.unmask = function(e, t) {
                    return y(t).unmaskedvalue(e);
                }, y.isValid = function(e, t) {
                    return y(t).isValid(e);
                }, y.remove = function(e) {
                    "string" == typeof e && (e = m.getElementById(e) || m.querySelectorAll(e)), (e = e.nodeName ? [
                        e
                    ] : e).forEach(function(e) {
                        e.inputmask && e.inputmask.remove();
                    });
                }, y.setValue = function(e, t) {
                    "string" == typeof e && (e = m.getElementById(e) || m.querySelectorAll(e)), (e = e.nodeName ? [
                        e
                    ] : e).forEach(function(e) {
                        e.inputmask ? e.inputmask.setValue(t) : (0, r.default)(e).trigger("setvalue", [
                            t
                        ]);
                    });
                }, y.dependencyLib = r.default, l.default.Inputmask = y;
                t.default = y;
            },
            5296: function(e, t, n) {
                function i(e) {
                    return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e;
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                    }, i(e);
                }
                var a = d(n(9380)), r = d(n(2394));
                function o(e, t) {
                    for(var n = 0; n < t.length; n++){
                        var a = t[n];
                        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, (r = a.key, o = void 0, o = function(e, t) {
                            if ("object" !== i(e) || null === e) return e;
                            var n = e[Symbol.toPrimitive];
                            if (void 0 !== n) {
                                var a = n.call(e, t || "default");
                                if ("object" !== i(a)) return a;
                                throw new TypeError("@@toPrimitive must return a primitive value.");
                            }
                            return ("string" === t ? String : Number)(e);
                        }(r, "string"), "symbol" === i(o) ? o : String(o)), a);
                    }
                    var r, o;
                }
                function l(e) {
                    var t = u();
                    return function() {
                        var n, a = p(e);
                        if (t) {
                            var r = p(this).constructor;
                            n = Reflect.construct(a, arguments, r);
                        } else n = a.apply(this, arguments);
                        return function(e, t) {
                            if (t && ("object" === i(t) || "function" == typeof t)) return t;
                            if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                            return function(e) {
                                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return e;
                            }(e);
                        }(this, n);
                    };
                }
                function s(e) {
                    var t = "function" == typeof Map ? new Map : void 0;
                    return s = function(e) {
                        if (null === e || !function(e) {
                            try {
                                return -1 !== Function.toString.call(e).indexOf("[native code]");
                            } catch (t) {
                                return "function" == typeof e;
                            }
                        }(e)) return e;
                        if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
                        if (void 0 !== t) {
                            if (t.has(e)) return t.get(e);
                            t.set(e, n);
                        }
                        function n() {
                            return c(e, arguments, p(this).constructor);
                        }
                        return n.prototype = Object.create(e.prototype, {
                            constructor: {
                                value: n,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), f(n, e);
                    }, s(e);
                }
                function c(e, t, n) {
                    return c = u() ? Reflect.construct.bind() : function(e, t, n) {
                        var i = [
                            null
                        ];
                        i.push.apply(i, t);
                        var a = new (Function.bind.apply(e, i));
                        return n && f(a, n.prototype), a;
                    }, c.apply(null, arguments);
                }
                function u() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
                    } catch (e) {
                        return !1;
                    }
                }
                function f(e, t) {
                    return f = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                        return e.__proto__ = t, e;
                    }, f(e, t);
                }
                function p(e) {
                    return p = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                        return e.__proto__ || Object.getPrototypeOf(e);
                    }, p(e);
                }
                function d(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }
                var h = a.default.document;
                if (h && h.head && h.head.attachShadow && a.default.customElements && void 0 === a.default.customElements.get("input-mask")) {
                    var v = function(e) {
                        !function(e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                            e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), Object.defineProperty(e, "prototype", {
                                writable: !1
                            }), t && f(e, t);
                        }(s, e);
                        var t, n, i, a = l(s);
                        function s() {
                            var e;
                            !function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                            }(this, s);
                            var t = (e = a.call(this)).getAttributeNames(), n = e.attachShadow({
                                mode: "closed"
                            });
                            for(var i in e.input = h.createElement("input"), e.input.type = "text", n.appendChild(e.input), t)Object.prototype.hasOwnProperty.call(t, i) && e.input.setAttribute(t[i], e.getAttribute(t[i]));
                            var o = new r.default;
                            return o.dataAttribute = "", o.mask(e.input), e.input.inputmask.shadowRoot = n, e;
                        }
                        return t = s, n = [
                            {
                                key: "attributeChangedCallback",
                                value: function(e, t, n) {
                                    this.input.setAttribute(e, n);
                                }
                            },
                            {
                                key: "value",
                                get: function() {
                                    return this.input.value;
                                },
                                set: function(e) {
                                    this.input.value = e;
                                }
                            }
                        ], o(t.prototype, n), i && o(t, i), Object.defineProperty(t, "prototype", {
                            writable: !1
                        }), s;
                    }(s(HTMLElement));
                    a.default.customElements.define("input-mask", v);
                }
            },
            2839: function(e, t) {
                function n(e) {
                    return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e;
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                    }, n(e);
                }
                function i(e, t) {
                    return function(e) {
                        if (Array.isArray(e)) return e;
                    }(e) || function(e, t) {
                        var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (null != n) {
                            var i, a, r, o, l = [], s = !0, c = !1;
                            try {
                                if (r = (n = n.call(e)).next, 0 === t) {
                                    if (Object(n) !== n) return;
                                    s = !1;
                                } else for(; !(s = (i = r.call(n)).done) && (l.push(i.value), l.length !== t); s = !0);
                            } catch (e) {
                                c = !0, a = e;
                            } finally{
                                try {
                                    if (!s && null != n.return && (o = n.return(), Object(o) !== o)) return;
                                } finally{
                                    if (c) throw a;
                                }
                            }
                            return l;
                        }
                    }(e, t) || function(e, t) {
                        if (!e) return;
                        if ("string" == typeof e) return a(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === n && e.constructor && (n = e.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(e);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t);
                    }(e, t) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    }();
                }
                function a(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for(var n = 0, i = new Array(t); n < t; n++)i[n] = e[n];
                    return i;
                }
                function r(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        t && (i = i.filter(function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })), n.push.apply(n, i);
                    }
                    return n;
                }
                function o(e, t, i) {
                    return (t = function(e) {
                        var t = function(e, t) {
                            if ("object" !== n(e) || null === e) return e;
                            var i = e[Symbol.toPrimitive];
                            if (void 0 !== i) {
                                var a = i.call(e, t || "default");
                                if ("object" !== n(a)) return a;
                                throw new TypeError("@@toPrimitive must return a primitive value.");
                            }
                            return ("string" === t ? String : Number)(e);
                        }(e, "string");
                        return "symbol" === n(t) ? t : String(t);
                    }(t)) in e ? Object.defineProperty(e, t, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = i, e;
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.keys = t.keyCode = void 0, t.toKey = function(e, t) {
                    return s[e] || (t ? String.fromCharCode(e) : String.fromCharCode(e).toLowerCase());
                }, t.toKeyCode = function(e) {
                    return l[e];
                };
                var l = t.keyCode = function(e) {
                    for(var t = 1; t < arguments.length; t++){
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? r(Object(n), !0).forEach(function(t) {
                            o(e, t, n[t]);
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                        });
                    }
                    return e;
                }({
                    c: 67,
                    x: 88,
                    z: 90,
                    BACKSPACE_SAFARI: 127,
                    Enter: 13,
                    Meta_LEFT: 91,
                    Meta_RIGHT: 92,
                    Space: 32
                }, {
                    Alt: 18,
                    AltGraph: 18,
                    ArrowDown: 40,
                    ArrowLeft: 37,
                    ArrowRight: 39,
                    ArrowUp: 38,
                    Backspace: 8,
                    CapsLock: 20,
                    Control: 17,
                    ContextMenu: 93,
                    Dead: 221,
                    Delete: 46,
                    End: 35,
                    Escape: 27,
                    F1: 112,
                    F2: 113,
                    F3: 114,
                    F4: 115,
                    F5: 116,
                    F6: 117,
                    F7: 118,
                    F8: 119,
                    F9: 120,
                    F10: 121,
                    F11: 122,
                    F12: 123,
                    Home: 36,
                    Insert: 45,
                    NumLock: 144,
                    PageDown: 34,
                    PageUp: 33,
                    Pause: 19,
                    PrintScreen: 44,
                    Process: 229,
                    Shift: 16,
                    ScrollLock: 145,
                    Tab: 9,
                    Unidentified: 229
                }), s = Object.entries(l).reduce(function(e, t) {
                    var n = i(t, 2), a = n[0], r = n[1];
                    return e[r] = void 0 === e[r] ? a : e[r], e;
                }, {});
                t.keys = Object.entries(l).reduce(function(e, t) {
                    var n = i(t, 2), a = n[0];
                    n[1];
                    return e[a] = "Space" === a ? " " : a, e;
                }, {});
            },
            2391: function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.analyseMask = function(e, t, n) {
                    var i, a, s, c, u, f, p = /(?:[?*+]|\{[0-9+*]+(?:,[0-9+*]*)?(?:\|[0-9+*]*)?\})|[^.?*+^${[]()|\\]+|./g, d = /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g, h = !1, v = new o.default, m = [], g = [], y = !1;
                    function k(e, i, a) {
                        a = void 0 !== a ? a : e.matches.length;
                        var o = e.matches[a - 1];
                        if (t) {
                            if (0 === i.indexOf("[") || h && /\\d|\\s|\\w|\\p/i.test(i) || "." === i) {
                                var s = n.casing ? "i" : "";
                                /\\p\{.*}/i.test(i) && (s += "u"), e.matches.splice(a++, 0, {
                                    fn: new RegExp(i, s),
                                    static: !1,
                                    optionality: !1,
                                    newBlockMarker: void 0 === o ? "master" : o.def !== i,
                                    casing: null,
                                    def: i,
                                    placeholder: "object" === l(n.placeholder) ? n.placeholder[v.matches.length] : void 0,
                                    nativeDef: i
                                });
                            } else h && (i = i[i.length - 1]), i.split("").forEach(function(t, i) {
                                o = e.matches[a - 1], e.matches.splice(a++, 0, {
                                    fn: /[a-z]/i.test(n.staticDefinitionSymbol || t) ? new RegExp("[" + (n.staticDefinitionSymbol || t) + "]", n.casing ? "i" : "") : null,
                                    static: !0,
                                    optionality: !1,
                                    newBlockMarker: void 0 === o ? "master" : o.def !== t && !0 !== o.static,
                                    casing: null,
                                    def: n.staticDefinitionSymbol || t,
                                    placeholder: void 0 !== n.staticDefinitionSymbol ? t : "object" === l(n.placeholder) ? n.placeholder[v.matches.length] : void 0,
                                    nativeDef: (h ? "'" : "") + t
                                });
                            });
                            h = !1;
                        } else {
                            var c = n.definitions && n.definitions[i] || n.usePrototypeDefinitions && r.default.prototype.definitions[i];
                            c && !h ? e.matches.splice(a++, 0, {
                                fn: c.validator ? "string" == typeof c.validator ? new RegExp(c.validator, n.casing ? "i" : "") : new function() {
                                    this.test = c.validator;
                                } : /./,
                                static: c.static || !1,
                                optionality: c.optional || !1,
                                defOptionality: c.optional || !1,
                                newBlockMarker: void 0 === o || c.optional ? "master" : o.def !== (c.definitionSymbol || i),
                                casing: c.casing,
                                def: c.definitionSymbol || i,
                                placeholder: c.placeholder,
                                nativeDef: i,
                                generated: c.generated
                            }) : (e.matches.splice(a++, 0, {
                                fn: /[a-z]/i.test(n.staticDefinitionSymbol || i) ? new RegExp("[" + (n.staticDefinitionSymbol || i) + "]", n.casing ? "i" : "") : null,
                                static: !0,
                                optionality: !1,
                                newBlockMarker: void 0 === o ? "master" : o.def !== i && !0 !== o.static,
                                casing: null,
                                def: n.staticDefinitionSymbol || i,
                                placeholder: void 0 !== n.staticDefinitionSymbol ? i : void 0,
                                nativeDef: (h ? "'" : "") + i
                            }), h = !1);
                        }
                    }
                    function b() {
                        if (m.length > 0) {
                            if (k(c = m[m.length - 1], a), c.isAlternator) {
                                u = m.pop();
                                for(var e = 0; e < u.matches.length; e++)u.matches[e].isGroup && (u.matches[e].isGroup = !1);
                                m.length > 0 ? (c = m[m.length - 1]).matches.push(u) : v.matches.push(u);
                            }
                        } else k(v, a);
                    }
                    function x(e) {
                        var t = new o.default(!0);
                        return t.openGroup = !1, t.matches = e, t;
                    }
                    function w() {
                        if ((s = m.pop()).openGroup = !1, void 0 !== s) {
                            if (m.length > 0) {
                                if ((c = m[m.length - 1]).matches.push(s), c.isAlternator) {
                                    u = m.pop();
                                    for(var e = 0; e < u.matches.length; e++)u.matches[e].isGroup = !1, u.matches[e].alternatorGroup = !1;
                                    m.length > 0 ? (c = m[m.length - 1]).matches.push(u) : v.matches.push(u);
                                }
                            } else v.matches.push(s);
                        } else b();
                    }
                    function P(e) {
                        var t = e.pop();
                        return t.isQuantifier && (t = x([
                            e.pop(),
                            t
                        ])), t;
                    }
                    t && (n.optionalmarker[0] = void 0, n.optionalmarker[1] = void 0);
                    for(; i = t ? d.exec(e) : p.exec(e);){
                        if (a = i[0], t) {
                            switch(a.charAt(0)){
                                case "?":
                                    a = "{0,1}";
                                    break;
                                case "+":
                                case "*":
                                    a = "{" + a + "}";
                                    break;
                                case "|":
                                    if (0 === m.length) {
                                        var S = x(v.matches);
                                        S.openGroup = !0, m.push(S), v.matches = [], y = !0;
                                    }
                            }
                            switch(a){
                                case "\\d":
                                    a = "[0-9]";
                                    break;
                                case "\\p":
                                    a += d.exec(e)[0], a += d.exec(e)[0];
                            }
                        }
                        if (h) b();
                        else switch(a.charAt(0)){
                            case "$":
                            case "^":
                                t || b();
                                break;
                            case n.escapeChar:
                                h = !0, t && b();
                                break;
                            case n.optionalmarker[1]:
                            case n.groupmarker[1]:
                                w();
                                break;
                            case n.optionalmarker[0]:
                                m.push(new o.default(!1, !0));
                                break;
                            case n.groupmarker[0]:
                                m.push(new o.default(!0));
                                break;
                            case n.quantifiermarker[0]:
                                var O = new o.default(!1, !1, !0), _ = (a = a.replace(/[{}?]/g, "")).split("|"), M = _[0].split(","), E = isNaN(M[0]) ? M[0] : parseInt(M[0]), j = 1 === M.length ? E : isNaN(M[1]) ? M[1] : parseInt(M[1]), T = isNaN(_[1]) ? _[1] : parseInt(_[1]);
                                "*" !== E && "+" !== E || (E = "*" === j ? 0 : 1), O.quantifier = {
                                    min: E,
                                    max: j,
                                    jit: T
                                };
                                var A = m.length > 0 ? m[m.length - 1].matches : v.matches;
                                (i = A.pop()).isGroup || (i = x([
                                    i
                                ])), A.push(i), A.push(O);
                                break;
                            case n.alternatormarker:
                                if (m.length > 0) {
                                    var D = (c = m[m.length - 1]).matches[c.matches.length - 1];
                                    f = c.openGroup && (void 0 === D.matches || !1 === D.isGroup && !1 === D.isAlternator) ? m.pop() : P(c.matches);
                                } else f = P(v.matches);
                                if (f.isAlternator) m.push(f);
                                else if (f.alternatorGroup ? (u = m.pop(), f.alternatorGroup = !1) : u = new o.default(!1, !1, !1, !0), u.matches.push(f), m.push(u), f.openGroup) {
                                    f.openGroup = !1;
                                    var L = new o.default(!0);
                                    L.alternatorGroup = !0, m.push(L);
                                }
                                break;
                            default:
                                b();
                        }
                    }
                    y && w();
                    for(; m.length > 0;)s = m.pop(), v.matches.push(s);
                    v.matches.length > 0 && (!function e(i) {
                        i && i.matches && i.matches.forEach(function(a, r) {
                            var o = i.matches[r + 1];
                            (void 0 === o || void 0 === o.matches || !1 === o.isQuantifier) && a && a.isGroup && (a.isGroup = !1, t || (k(a, n.groupmarker[0], 0), !0 !== a.openGroup && k(a, n.groupmarker[1]))), e(a);
                        });
                    }(v), g.push(v));
                    (n.numericInput || n.isRTL) && function e(t) {
                        for(var i in t.matches = t.matches.reverse(), t.matches)if (Object.prototype.hasOwnProperty.call(t.matches, i)) {
                            var a = parseInt(i);
                            if (t.matches[i].isQuantifier && t.matches[a + 1] && t.matches[a + 1].isGroup) {
                                var r = t.matches[i];
                                t.matches.splice(i, 1), t.matches.splice(a + 1, 0, r);
                            }
                            void 0 !== t.matches[i].matches ? t.matches[i] = e(t.matches[i]) : t.matches[i] = ((o = t.matches[i]) === n.optionalmarker[0] ? o = n.optionalmarker[1] : o === n.optionalmarker[1] ? o = n.optionalmarker[0] : o === n.groupmarker[0] ? o = n.groupmarker[1] : o === n.groupmarker[1] && (o = n.groupmarker[0]), o);
                        }
                        var o;
                        return t;
                    }(g[0]);
                    return g;
                }, t.generateMaskSet = function(e, t) {
                    var n;
                    function o(e, t) {
                        var n = t.repeat, i = t.groupmarker, r = t.quantifiermarker, o = t.keepStatic;
                        if (n > 0 || "*" === n || "+" === n) {
                            var l = "*" === n ? 0 : "+" === n ? 1 : n;
                            if (l != n) e = i[0] + e + i[1] + r[0] + l + "," + n + r[1];
                            else for(var c = e, u = 1; u < l; u++)e += c;
                        }
                        if (!0 === o) {
                            var f = e.match(new RegExp("(.)\\[([^\\]]*)\\]", "g"));
                            f && f.forEach(function(t, n) {
                                var i = function(e, t) {
                                    return function(e) {
                                        if (Array.isArray(e)) return e;
                                    }(e) || function(e, t) {
                                        var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                        if (null != n) {
                                            var i, a, r, o, l = [], s = !0, c = !1;
                                            try {
                                                if (r = (n = n.call(e)).next, 0 === t) {
                                                    if (Object(n) !== n) return;
                                                    s = !1;
                                                } else for(; !(s = (i = r.call(n)).done) && (l.push(i.value), l.length !== t); s = !0);
                                            } catch (e) {
                                                c = !0, a = e;
                                            } finally{
                                                try {
                                                    if (!s && null != n.return && (o = n.return(), Object(o) !== o)) return;
                                                } finally{
                                                    if (c) throw a;
                                                }
                                            }
                                            return l;
                                        }
                                    }(e, t) || function(e, t) {
                                        if (!e) return;
                                        if ("string" == typeof e) return s(e, t);
                                        var n = Object.prototype.toString.call(e).slice(8, -1);
                                        "Object" === n && e.constructor && (n = e.constructor.name);
                                        if ("Map" === n || "Set" === n) return Array.from(e);
                                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(e, t);
                                    }(e, t) || function() {
                                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                    }();
                                }(t.split("["), 2), r = i[0], o = i[1];
                                o = o.replace("]", ""), e = e.replace(new RegExp("".concat((0, a.default)(r), "\\[").concat((0, a.default)(o), "\\]")), r.charAt(0) === o.charAt(0) ? "(".concat(r, "|").concat(r).concat(o, ")") : "".concat(r, "[").concat(o, "]"));
                            });
                        }
                        return e;
                    }
                    function c(e, n, a) {
                        var s, c, u = !1;
                        return null !== e && "" !== e || ((u = null !== a.regex) ? e = (e = a.regex).replace(/^(\^)(.*)(\$)$/, "$2") : (u = !0, e = ".*")), 1 === e.length && !1 === a.greedy && 0 !== a.repeat && (a.placeholder = ""), e = o(e, a), c = u ? "regex_" + a.regex : a.numericInput ? e.split("").reverse().join("") : e, null !== a.keepStatic && (c = "ks_" + a.keepStatic + c), "object" === l(a.placeholder) && (c = "ph_" + JSON.stringify(a.placeholder) + c), void 0 === r.default.prototype.masksCache[c] || !0 === t ? (s = {
                            mask: e,
                            maskToken: r.default.prototype.analyseMask(e, u, a),
                            validPositions: [],
                            _buffer: void 0,
                            buffer: void 0,
                            tests: {},
                            excludes: {},
                            metadata: n,
                            maskLength: void 0,
                            jitOffset: {}
                        }, !0 !== t && (r.default.prototype.masksCache[c] = s, s = i.default.extend(!0, {}, r.default.prototype.masksCache[c]))) : s = i.default.extend(!0, {}, r.default.prototype.masksCache[c]), s;
                    }
                    "function" == typeof e.mask && (e.mask = e.mask(e));
                    if (Array.isArray(e.mask)) {
                        if (e.mask.length > 1) {
                            null === e.keepStatic && (e.keepStatic = !0);
                            var u = e.groupmarker[0];
                            return (e.isRTL ? e.mask.reverse() : e.mask).forEach(function(t) {
                                u.length > 1 && (u += e.alternatormarker), void 0 !== t.mask && "function" != typeof t.mask ? u += t.mask : u += t;
                            }), c(u += e.groupmarker[1], e.mask, e);
                        }
                        e.mask = e.mask.pop();
                    }
                    n = e.mask && void 0 !== e.mask.mask && "function" != typeof e.mask.mask ? c(e.mask.mask, e.mask, e) : c(e.mask, e.mask, e);
                    null === e.keepStatic && (e.keepStatic = !1);
                    return n;
                };
                var i = c(n(4963)), a = c(n(7184)), r = c(n(2394)), o = c(n(9695));
                function l(e) {
                    return l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e;
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                    }, l(e);
                }
                function s(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for(var n = 0, i = new Array(t); n < t; n++)i[n] = e[n];
                    return i;
                }
                function c(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }
            },
            157: function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.mask = function() {
                    var e = this, t = this.opts, n = this.el, c = this.dependencyLib;
                    r.EventRuler.off(n);
                    var u = function(t, n) {
                        var i = t.getAttribute("type"), a = "input" === t.tagName.toLowerCase() && n.supportsInputType.includes(i) || t.isContentEditable || "textarea" === t.tagName.toLowerCase();
                        if (!a) {
                            if ("input" === t.tagName.toLowerCase()) {
                                var s = document.createElement("input");
                                s.setAttribute("type", i), a = "text" === s.type, s = null;
                            } else a = "partial";
                        }
                        return !1 !== a ? function(t) {
                            var i, a;
                            function s() {
                                return this.inputmask ? this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : -1 !== l.getLastValidPosition.call(e) || !0 !== n.nullable ? (this.inputmask.shadowRoot || this.ownerDocument).activeElement === this && n.clearMaskOnLostFocus ? (e.isRTL ? o.clearOptionalTail.call(e, l.getBuffer.call(e).slice()).reverse() : o.clearOptionalTail.call(e, l.getBuffer.call(e).slice())).join("") : i.call(this) : "" : i.call(this);
                            }
                            function u(e) {
                                a.call(this, e), this.inputmask && (0, o.applyInputValue)(this, e);
                            }
                            if (!t.inputmask.__valueGet) {
                                if (!0 !== n.noValuePatching) {
                                    if (Object.getOwnPropertyDescriptor) {
                                        var f = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t), "value") : void 0;
                                        f && f.get && f.set ? (i = f.get, a = f.set, Object.defineProperty(t, "value", {
                                            get: s,
                                            set: u,
                                            configurable: !0
                                        })) : "input" !== t.tagName.toLowerCase() && (i = function() {
                                            return this.textContent;
                                        }, a = function(e) {
                                            this.textContent = e;
                                        }, Object.defineProperty(t, "value", {
                                            get: s,
                                            set: u,
                                            configurable: !0
                                        }));
                                    } else document.__lookupGetter__ && t.__lookupGetter__("value") && (i = t.__lookupGetter__("value"), a = t.__lookupSetter__("value"), t.__defineGetter__("value", s), t.__defineSetter__("value", u));
                                    t.inputmask.__valueGet = i, t.inputmask.__valueSet = a;
                                }
                                t.inputmask._valueGet = function(t) {
                                    return e.isRTL && !0 !== t ? i.call(this.el).split("").reverse().join("") : i.call(this.el);
                                }, t.inputmask._valueSet = function(t, n) {
                                    a.call(this.el, null == t ? "" : !0 !== n && e.isRTL ? t.split("").reverse().join("") : t);
                                }, void 0 === i && (i = function() {
                                    return this.value;
                                }, a = function(e) {
                                    this.value = e;
                                }, function(t) {
                                    if (c.valHooks && (void 0 === c.valHooks[t] || !0 !== c.valHooks[t].inputmaskpatch)) {
                                        var i = c.valHooks[t] && c.valHooks[t].get ? c.valHooks[t].get : function(e) {
                                            return e.value;
                                        }, a = c.valHooks[t] && c.valHooks[t].set ? c.valHooks[t].set : function(e, t) {
                                            return e.value = t, e;
                                        };
                                        c.valHooks[t] = {
                                            get: function(t) {
                                                if (t.inputmask) {
                                                    if (t.inputmask.opts.autoUnmask) return t.inputmask.unmaskedvalue();
                                                    var a = i(t);
                                                    return -1 !== l.getLastValidPosition.call(e, void 0, void 0, t.inputmask.maskset.validPositions) || !0 !== n.nullable ? a : "";
                                                }
                                                return i(t);
                                            },
                                            set: function(e, t) {
                                                var n = a(e, t);
                                                return e.inputmask && (0, o.applyInputValue)(e, t), n;
                                            },
                                            inputmaskpatch: !0
                                        };
                                    }
                                }(t.type), function(e) {
                                    r.EventRuler.on(e, "mouseenter", function() {
                                        var e = this, t = e.inputmask._valueGet(!0);
                                        t != (e.inputmask.isRTL ? l.getBuffer.call(e.inputmask).slice().reverse() : l.getBuffer.call(e.inputmask)).join("") && (0, o.applyInputValue)(e, t);
                                    });
                                }(t));
                            }
                        }(t) : t.inputmask = void 0, a;
                    }(n, t);
                    if (!1 !== u) {
                        e.originalPlaceholder = n.placeholder, e.maxLength = void 0 !== n ? n.maxLength : void 0, -1 === e.maxLength && (e.maxLength = void 0), "inputMode" in n && null === n.getAttribute("inputmode") && (n.inputMode = t.inputmode, n.setAttribute("inputmode", t.inputmode)), !0 === u && (t.showMaskOnFocus = t.showMaskOnFocus && -1 === [
                            "cc-number",
                            "cc-exp"
                        ].indexOf(n.autocomplete), i.iphone && (t.insertModeVisual = !1, n.setAttribute("autocorrect", "off")), r.EventRuler.on(n, "submit", a.EventHandlers.submitEvent), r.EventRuler.on(n, "reset", a.EventHandlers.resetEvent), r.EventRuler.on(n, "blur", a.EventHandlers.blurEvent), r.EventRuler.on(n, "focus", a.EventHandlers.focusEvent), r.EventRuler.on(n, "invalid", a.EventHandlers.invalidEvent), r.EventRuler.on(n, "click", a.EventHandlers.clickEvent), r.EventRuler.on(n, "mouseleave", a.EventHandlers.mouseleaveEvent), r.EventRuler.on(n, "mouseenter", a.EventHandlers.mouseenterEvent), r.EventRuler.on(n, "paste", a.EventHandlers.pasteEvent), r.EventRuler.on(n, "cut", a.EventHandlers.cutEvent), r.EventRuler.on(n, "complete", t.oncomplete), r.EventRuler.on(n, "incomplete", t.onincomplete), r.EventRuler.on(n, "cleared", t.oncleared), !0 !== t.inputEventOnly && r.EventRuler.on(n, "keydown", a.EventHandlers.keyEvent), (i.mobile || t.inputEventOnly) && n.removeAttribute("maxLength"), r.EventRuler.on(n, "input", a.EventHandlers.inputFallBackEvent)), r.EventRuler.on(n, "setvalue", a.EventHandlers.setValueEvent), void 0 === e.applyMaskHook || e.applyMaskHook(), l.getBufferTemplate.call(e).join(""), e.undoValue = e._valueGet(!0);
                        var f = (n.inputmask.shadowRoot || n.ownerDocument).activeElement;
                        if ("" !== n.inputmask._valueGet(!0) || !1 === t.clearMaskOnLostFocus || f === n) {
                            (0, o.applyInputValue)(n, n.inputmask._valueGet(!0), t);
                            var p = l.getBuffer.call(e).slice();
                            !1 === s.isComplete.call(e, p) && t.clearIncomplete && l.resetMaskSet.call(e, !1), t.clearMaskOnLostFocus && f !== n && (-1 === l.getLastValidPosition.call(e) ? p = [] : o.clearOptionalTail.call(e, p)), (!1 === t.clearMaskOnLostFocus || t.showMaskOnFocus && f === n || "" !== n.inputmask._valueGet(!0)) && (0, o.writeBuffer)(n, p), f === n && l.caret.call(e, n, l.seekNext.call(e, l.getLastValidPosition.call(e)));
                        }
                    }
                };
                var i = n(9845), a = n(6030), r = n(9716), o = n(7760), l = n(8711), s = n(7215);
            },
            9695: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function(e, t, n, i) {
                    this.matches = [], this.openGroup = e || !1, this.alternatorGroup = !1, this.isGroup = e || !1, this.isOptional = t || !1, this.isQuantifier = n || !1, this.isAlternator = i || !1, this.quantifier = {
                        min: 1,
                        max: 1
                    };
                };
            },
            3194: function() {
                Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
                    value: function(e, t) {
                        if (null == this) throw new TypeError('"this" is null or not defined');
                        var n = Object(this), i = n.length >>> 0;
                        if (0 === i) return !1;
                        for(var a = 0 | t, r = Math.max(a >= 0 ? a : i - Math.abs(a), 0); r < i;){
                            if (n[r] === e) return !0;
                            r++;
                        }
                        return !1;
                    }
                });
            },
            9302: function() {
                var e = Function.bind.call(Function.call, Array.prototype.reduce), t = Function.bind.call(Function.call, Object.prototype.propertyIsEnumerable), n = Function.bind.call(Function.call, Array.prototype.concat), i = Object.keys;
                Object.entries || (Object.entries = function(a) {
                    return e(i(a), function(e, i) {
                        return n(e, "string" == typeof i && t(a, i) ? [
                            [
                                i,
                                a[i]
                            ]
                        ] : []);
                    }, []);
                });
            },
            7149: function() {
                function e(t) {
                    return e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e;
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                    }, e(t);
                }
                "function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" === e("test".__proto__) ? function(e) {
                    return e.__proto__;
                } : function(e) {
                    return e.constructor.prototype;
                });
            },
            4013: function() {
                String.prototype.includes || (String.prototype.includes = function(e, t) {
                    return "number" != typeof t && (t = 0), !(t + e.length > this.length) && -1 !== this.indexOf(e, t);
                });
            },
            8711: function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.caret = function(e, t, n, i, r) {
                    var o, l = this, s = this.opts;
                    if (void 0 === t) return "selectionStart" in e && "selectionEnd" in e ? (t = e.selectionStart, n = e.selectionEnd) : a.default.getSelection ? (o = a.default.getSelection().getRangeAt(0)).commonAncestorContainer.parentNode !== e && o.commonAncestorContainer !== e || (t = o.startOffset, n = o.endOffset) : document.selection && document.selection.createRange && (n = (t = 0 - (o = document.selection.createRange()).duplicate().moveStart("character", -e.inputmask._valueGet().length)) + o.text.length), {
                        begin: i ? t : f.call(l, t),
                        end: i ? n : f.call(l, n)
                    };
                    if (Array.isArray(t) && (n = l.isRTL ? t[0] : t[1], t = l.isRTL ? t[1] : t[0]), void 0 !== t.begin && (n = l.isRTL ? t.begin : t.end, t = l.isRTL ? t.end : t.begin), "number" == typeof t) {
                        t = i ? t : f.call(l, t), n = "number" == typeof (n = i ? n : f.call(l, n)) ? n : t;
                        var c = parseInt(((e.ownerDocument.defaultView || a.default).getComputedStyle ? (e.ownerDocument.defaultView || a.default).getComputedStyle(e, null) : e.currentStyle).fontSize) * n;
                        if (e.scrollLeft = c > e.scrollWidth ? c : 0, e.inputmask.caretPos = {
                            begin: t,
                            end: n
                        }, s.insertModeVisual && !1 === s.insertMode && t === n && (r || n++), e === (e.inputmask.shadowRoot || e.ownerDocument).activeElement) {
                            if ("setSelectionRange" in e) e.setSelectionRange(t, n);
                            else if (a.default.getSelection) {
                                if (o = document.createRange(), void 0 === e.firstChild || null === e.firstChild) {
                                    var u = document.createTextNode("");
                                    e.appendChild(u);
                                }
                                o.setStart(e.firstChild, t < e.inputmask._valueGet().length ? t : e.inputmask._valueGet().length), o.setEnd(e.firstChild, n < e.inputmask._valueGet().length ? n : e.inputmask._valueGet().length), o.collapse(!0);
                                var p = a.default.getSelection();
                                p.removeAllRanges(), p.addRange(o);
                            } else e.createTextRange && ((o = e.createTextRange()).collapse(!0), o.moveEnd("character", n), o.moveStart("character", t), o.select());
                            void 0 === e.inputmask.caretHook || e.inputmask.caretHook.call(l, {
                                begin: t,
                                end: n
                            });
                        }
                    }
                }, t.determineLastRequiredPosition = function(e) {
                    var t, n, i = this, a = i.maskset, l = i.dependencyLib, c = s.call(i), u = {}, f = a.validPositions[c], p = o.getMaskTemplate.call(i, !0, s.call(i), !0, !0), d = p.length, h = void 0 !== f ? f.locator.slice() : void 0;
                    for(t = c + 1; t < p.length; t++)h = (n = o.getTestTemplate.call(i, t, h, t - 1)).locator.slice(), u[t] = l.extend(!0, {}, n);
                    var v = f && void 0 !== f.alternation ? f.locator[f.alternation] : void 0;
                    for(t = d - 1; t > c && ((n = u[t]).match.optionality || n.match.optionalQuantifier && n.match.newBlockMarker || v && (v !== u[t].locator[f.alternation] && !0 !== n.match.static || !0 === n.match.static && n.locator[f.alternation] && r.checkAlternationMatch.call(i, n.locator[f.alternation].toString().split(","), v.toString().split(",")) && "" !== o.getTests.call(i, t)[0].def)) && p[t] === o.getPlaceholder.call(i, t, n.match); t--)d--;
                    return e ? {
                        l: d,
                        def: u[d] ? u[d].match : void 0
                    } : d;
                }, t.determineNewCaretPosition = function(e, t, n) {
                    var i, a, r, f = this, p = f.maskset, d = f.opts;
                    t && (f.isRTL ? e.end = e.begin : e.begin = e.end);
                    if (e.begin === e.end) {
                        switch(n = n || d.positionCaretOnClick){
                            case "none":
                                break;
                            case "select":
                                e = {
                                    begin: 0,
                                    end: l.call(f).length
                                };
                                break;
                            case "ignore":
                                e.end = e.begin = u.call(f, s.call(f));
                                break;
                            case "radixFocus":
                                if (f.clicked > 1 && 0 === p.validPositions.length) break;
                                if (function(e) {
                                    if ("" !== d.radixPoint && 0 !== d.digits) {
                                        var t = p.validPositions;
                                        if (void 0 === t[e] || void 0 === t[e].input) {
                                            if (e < u.call(f, -1)) return !0;
                                            var n = l.call(f).indexOf(d.radixPoint);
                                            if (-1 !== n) {
                                                for(var i = 0, a = t.length; i < a; i++)if (t[i] && n < i && t[i].input !== o.getPlaceholder.call(f, i)) return !1;
                                                return !0;
                                            }
                                        }
                                    }
                                    return !1;
                                }(e.begin)) {
                                    var h = l.call(f).join("").indexOf(d.radixPoint);
                                    e.end = e.begin = d.numericInput ? u.call(f, h) : h;
                                    break;
                                }
                            default:
                                if (i = e.begin, a = s.call(f, i, !0), i <= (r = u.call(f, -1 !== a || c.call(f, 0) ? a : -1))) e.end = e.begin = c.call(f, i, !1, !0) ? i : u.call(f, i);
                                else {
                                    var v = p.validPositions[a], m = o.getTestTemplate.call(f, r, v ? v.match.locator : void 0, v), g = o.getPlaceholder.call(f, r, m.match);
                                    if ("" !== g && l.call(f)[r] !== g && !0 !== m.match.optionalQuantifier && !0 !== m.match.newBlockMarker || !c.call(f, r, d.keepStatic, !0) && m.match.def === g) {
                                        var y = u.call(f, r);
                                        (i >= y || i === r) && (r = y);
                                    }
                                    e.end = e.begin = r;
                                }
                        }
                        return e;
                    }
                }, t.getBuffer = l, t.getBufferTemplate = function() {
                    var e = this.maskset;
                    void 0 === e._buffer && (e._buffer = o.getMaskTemplate.call(this, !1, 1), void 0 === e.buffer && (e.buffer = e._buffer.slice()));
                    return e._buffer;
                }, t.getLastValidPosition = s, t.isMask = c, t.resetMaskSet = function(e) {
                    var t = this.maskset;
                    t.buffer = void 0, !0 !== e && (t.validPositions = [], t.p = 0);
                    !1 === e && (t.tests = {}, t.jitOffset = {});
                }, t.seekNext = u, t.seekPrevious = function(e, t) {
                    var n = this, i = e - 1;
                    if (e <= 0) return 0;
                    for(; i > 0 && (!0 === t && (!0 !== o.getTest.call(n, i).match.newBlockMarker || !c.call(n, i, void 0, !0)) || !0 !== t && !c.call(n, i, void 0, !0));)i--;
                    return i;
                }, t.translatePosition = f;
                var i, a = (i = n(9380)) && i.__esModule ? i : {
                    default: i
                }, r = n(7215), o = n(4713);
                function l(e) {
                    var t = this, n = t.maskset;
                    return void 0 !== n.buffer && !0 !== e || (n.buffer = o.getMaskTemplate.call(t, !0, s.call(t), !0), void 0 === n._buffer && (n._buffer = n.buffer.slice())), n.buffer;
                }
                function s(e, t, n) {
                    var i = this.maskset, a = -1, r = -1, o = n || i.validPositions;
                    void 0 === e && (e = -1);
                    for(var l = 0, s = o.length; l < s; l++)o[l] && (t || !0 !== o[l].generatedInput) && (l <= e && (a = l), l >= e && (r = l));
                    return -1 === a || a === e ? r : -1 === r || e - a < r - e ? a : r;
                }
                function c(e, t, n) {
                    var i = this, a = this.maskset, r = o.getTestTemplate.call(i, e).match;
                    if ("" === r.def && (r = o.getTest.call(i, e).match), !0 !== r.static) return r.fn;
                    if (!0 === n && void 0 !== a.validPositions[e] && !0 !== a.validPositions[e].generatedInput) return !0;
                    if (!0 !== t && e > -1) {
                        if (n) {
                            var l = o.getTests.call(i, e);
                            return l.length > 1 + ("" === l[l.length - 1].match.def ? 1 : 0);
                        }
                        var s = o.determineTestTemplate.call(i, e, o.getTests.call(i, e)), c = o.getPlaceholder.call(i, e, s.match);
                        return s.match.def !== c;
                    }
                    return !1;
                }
                function u(e, t, n) {
                    var i = this;
                    void 0 === n && (n = !0);
                    for(var a = e + 1; "" !== o.getTest.call(i, a).match.def && (!0 === t && (!0 !== o.getTest.call(i, a).match.newBlockMarker || !c.call(i, a, void 0, !0)) || !0 !== t && !c.call(i, a, void 0, n));)a++;
                    return a;
                }
                function f(e) {
                    var t = this.opts, n = this.el;
                    return !this.isRTL || "number" != typeof e || t.greedy && "" === t.placeholder || !n || (e = this._valueGet().length - e) < 0 && (e = 0), e;
                }
            },
            4713: function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.determineTestTemplate = f, t.getDecisionTaker = s, t.getMaskTemplate = function(e, t, n, i, a) {
                    var r = this, o = this.opts, l = this.maskset, s = o.greedy;
                    a && o.greedy && (o.greedy = !1, r.maskset.tests = {});
                    t = t || 0;
                    var p, d, v, m, g = [], y = 0;
                    do {
                        if (!0 === e && l.validPositions[y]) d = (v = a && l.validPositions[y].match.optionality && void 0 === l.validPositions[y + 1] && (!0 === l.validPositions[y].generatedInput || l.validPositions[y].input == o.skipOptionalPartCharacter && y > 0) ? f.call(r, y, h.call(r, y, p, y - 1)) : l.validPositions[y]).match, p = v.locator.slice(), g.push(!0 === n ? v.input : !1 === n ? d.nativeDef : c.call(r, y, d));
                        else {
                            d = (v = u.call(r, y, p, y - 1)).match, p = v.locator.slice();
                            var k = !0 !== i && (!1 !== o.jitMasking ? o.jitMasking : d.jit);
                            (m = (m || l.validPositions[y - 1]) && d.static && d.def !== o.groupSeparator && null === d.fn) || !1 === k || void 0 === k || "number" == typeof k && isFinite(k) && k > y ? g.push(!1 === n ? d.nativeDef : c.call(r, g.length, d)) : m = !1;
                        }
                        y++;
                    }while (!0 !== d.static || "" !== d.def || t > y);
                    "" === g[g.length - 1] && g.pop();
                    !1 === n && void 0 !== l.maskLength || (l.maskLength = y - 1);
                    return o.greedy = s, g;
                }, t.getPlaceholder = c, t.getTest = p, t.getTestTemplate = u, t.getTests = h, t.isSubsetOf = d;
                var i, a = (i = n(2394)) && i.__esModule ? i : {
                    default: i
                }, r = n(8711);
                function o(e) {
                    return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e;
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                    }, o(e);
                }
                function l(e, t) {
                    var n = (null != e.alternation ? e.mloc[s(e)] : e.locator).join("");
                    if ("" !== n) for(n = n.split(":")[0]; n.length < t;)n += "0";
                    return n;
                }
                function s(e) {
                    var t = e.locator[e.alternation];
                    return "string" == typeof t && t.length > 0 && (t = t.split(",")[0]), void 0 !== t ? t.toString() : "";
                }
                function c(e, t, n) {
                    var i = this, a = this.opts, l = this.maskset;
                    if (void 0 !== (t = t || p.call(i, e).match).placeholder || !0 === n) {
                        if ("" !== t.placeholder && !0 === t.static && !0 !== t.generated) {
                            var s = r.getLastValidPosition.call(i, e), c = r.seekNext.call(i, s);
                            return (n ? e <= c : e < c) ? a.staticDefinitionSymbol && t.static ? t.nativeDef : t.def : "function" == typeof t.placeholder ? t.placeholder(a) : t.placeholder;
                        }
                        return "function" == typeof t.placeholder ? t.placeholder(a) : t.placeholder;
                    }
                    if (!0 === t.static) {
                        if (e > -1 && void 0 === l.validPositions[e]) {
                            var u, f = h.call(i, e), d = [];
                            if ("string" == typeof a.placeholder && f.length > 1 + ("" === f[f.length - 1].match.def ? 1 : 0)) {
                                for(var v = 0; v < f.length; v++)if ("" !== f[v].match.def && !0 !== f[v].match.optionality && !0 !== f[v].match.optionalQuantifier && (!0 === f[v].match.static || void 0 === u || !1 !== f[v].match.fn.test(u.match.def, l, e, !0, a)) && (d.push(f[v]), !0 === f[v].match.static && (u = f[v]), d.length > 1 && /[0-9a-bA-Z]/.test(d[0].match.def))) return a.placeholder.charAt(e % a.placeholder.length);
                            }
                        }
                        return t.def;
                    }
                    return "object" === o(a.placeholder) ? t.def : a.placeholder.charAt(e % a.placeholder.length);
                }
                function u(e, t, n) {
                    return this.maskset.validPositions[e] || f.call(this, e, h.call(this, e, t ? t.slice() : t, n));
                }
                function f(e, t) {
                    var n = this.opts, i = 0, a = function(e, t) {
                        var n = 0, i = !1;
                        t.forEach(function(e) {
                            e.match.optionality && (0 !== n && n !== e.match.optionality && (i = !0), (0 === n || n > e.match.optionality) && (n = e.match.optionality));
                        }), n && (0 == e || 1 == t.length ? n = 0 : i || (n = 0));
                        return n;
                    }(e, t);
                    e = e > 0 ? e - 1 : 0;
                    var r, o, s, c = l(p.call(this, e));
                    n.greedy && t.length > 1 && "" === t[t.length - 1].match.def && (i = 1);
                    for(var u = 0; u < t.length - i; u++){
                        var f = t[u];
                        r = l(f, c.length);
                        var d = Math.abs(r - c);
                        (!0 !== f.unMatchedAlternationStopped || t.filter(function(e) {
                            return !0 !== e.unMatchedAlternationStopped;
                        }).length <= 1) && (void 0 === o || "" !== r && d < o || s && !n.greedy && s.match.optionality && s.match.optionality - a > 0 && "master" === s.match.newBlockMarker && (!f.match.optionality || f.match.optionality - a < 1 || !f.match.newBlockMarker) || s && !n.greedy && s.match.optionalQuantifier && !f.match.optionalQuantifier) && (o = d, s = f);
                    }
                    return s;
                }
                function p(e, t) {
                    var n = this.maskset;
                    return n.validPositions[e] ? n.validPositions[e] : (t || h.call(this, e))[0];
                }
                function d(e, t, n) {
                    function i(e) {
                        for(var t, n = [], i = -1, a = 0, r = e.length; a < r; a++)if ("-" === e.charAt(a)) for(t = e.charCodeAt(a + 1); ++i < t;)n.push(String.fromCharCode(i));
                        else i = e.charCodeAt(a), n.push(e.charAt(a));
                        return n.join("");
                    }
                    return e.match.def === t.match.nativeDef || !(!(n.regex || e.match.fn instanceof RegExp && t.match.fn instanceof RegExp) || !0 === e.match.static || !0 === t.match.static) && ("." === t.match.fn.source || -1 !== i(t.match.fn.source.replace(/[[\]/]/g, "")).indexOf(i(e.match.fn.source.replace(/[[\]/]/g, ""))));
                }
                function h(e, t, n) {
                    var i, r, o = this, l = this.dependencyLib, s = this.maskset, c = this.opts, u = this.el, p = s.maskToken, h = t ? n : 0, v = t ? t.slice() : [
                        0
                    ], m = [], g = !1, y = t ? t.join("") : "", k = !1;
                    function b(t, n, r, l) {
                        function f(r, l, p) {
                            function v(e, t) {
                                var n = 0 === t.matches.indexOf(e);
                                return n || t.matches.every(function(i, a) {
                                    return !0 === i.isQuantifier ? n = v(e, t.matches[a - 1]) : Object.prototype.hasOwnProperty.call(i, "matches") && (n = v(e, i)), !n;
                                }), n;
                            }
                            function w(e, t, n) {
                                var i, a;
                                if ((s.tests[e] || s.validPositions[e]) && (s.validPositions[e] ? [
                                    s.validPositions[e]
                                ] : s.tests[e]).every(function(e, r) {
                                    if (e.mloc[t]) return i = e, !1;
                                    var o = void 0 !== n ? n : e.alternation, l = void 0 !== e.locator[o] ? e.locator[o].toString().indexOf(t) : -1;
                                    return (void 0 === a || l < a) && -1 !== l && (i = e, a = l), !0;
                                }), i) {
                                    var r = i.locator[i.alternation], o = i.mloc[t] || i.mloc[r] || i.locator;
                                    if (-1 !== o[o.length - 1].toString().indexOf(":")) o.pop();
                                    return o.slice((void 0 !== n ? n : i.alternation) + 1);
                                }
                                return void 0 !== n ? w(e, t) : void 0;
                            }
                            function P(t, n) {
                                return !0 === t.match.static && !0 !== n.match.static && n.match.fn.test(t.match.def, s, e, !1, c, !1);
                            }
                            function S(e, t) {
                                var n = e.alternation, i = void 0 === t || n <= t.alternation && -1 === e.locator[n].toString().indexOf(t.locator[n]);
                                if (!i && n > t.alternation) {
                                    for(var a = 0; a < n; a++)if (e.locator[a] !== t.locator[a]) {
                                        n = a, i = !0;
                                        break;
                                    }
                                }
                                return !!i && function(n) {
                                    e.mloc = e.mloc || {};
                                    var i = e.locator[n];
                                    if (void 0 !== i) {
                                        if ("string" == typeof i && (i = i.split(",")[0]), void 0 === e.mloc[i] && (e.mloc[i] = e.locator.slice(), e.mloc[i].push(":".concat(e.alternation))), void 0 !== t) {
                                            for(var a in t.mloc)"string" == typeof a && (a = parseInt(a.split(",")[0])), e.mloc[a + 0] = t.mloc[a];
                                            e.locator[n] = Object.keys(e.mloc).join(",");
                                        }
                                        return e.alternation > n && (e.alternation = n), !0;
                                    }
                                    return e.alternation = void 0, !1;
                                }(n);
                            }
                            function O(e, t) {
                                if (e.locator.length !== t.locator.length) return !1;
                                for(var n = e.alternation + 1; n < e.locator.length; n++)if (e.locator[n] !== t.locator[n]) return !1;
                                return !0;
                            }
                            if (h > e + c._maxTestPos) throw new Error("Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. ".concat(s.mask));
                            if (h === e && void 0 === r.matches) {
                                if (m.push({
                                    match: r,
                                    locator: l.reverse(),
                                    cd: y,
                                    mloc: {}
                                }), !r.optionality || void 0 !== p || !(c.definitions && c.definitions[r.nativeDef] && c.definitions[r.nativeDef].optional || a.default.prototype.definitions[r.nativeDef] && a.default.prototype.definitions[r.nativeDef].optional)) return !0;
                                g = !0, h = e;
                            } else if (void 0 !== r.matches) {
                                if (r.isGroup && p !== r) return function() {
                                    if (r = f(t.matches[t.matches.indexOf(r) + 1], l, p)) return !0;
                                }();
                                if (r.isOptional) return function() {
                                    var t = r, a = m.length;
                                    if (r = b(r, n, l, p), m.length > 0) {
                                        if (m.forEach(function(e, t) {
                                            t >= a && (e.match.optionality = e.match.optionality ? e.match.optionality + 1 : 1);
                                        }), i = m[m.length - 1].match, void 0 !== p || !v(i, t)) return r;
                                        g = !0, h = e;
                                    }
                                }();
                                if (r.isAlternator) return function() {
                                    function i(e) {
                                        for(var t, n = e.matches[0].matches ? e.matches[0].matches.length : 1, i = 0; i < e.matches.length && n === (t = e.matches[i].matches ? e.matches[i].matches.length : 1); i++);
                                        return n !== t;
                                    }
                                    o.hasAlternator = !0;
                                    var a, v = r, y = [], b = m.slice(), x = l.length, _ = n.length > 0 ? n.shift() : -1;
                                    if (-1 === _ || "string" == typeof _) {
                                        var M, E = h, j = n.slice(), T = [];
                                        if ("string" == typeof _) T = _.split(",");
                                        else for(M = 0; M < v.matches.length; M++)T.push(M.toString());
                                        if (void 0 !== s.excludes[e]) {
                                            for(var A = T.slice(), D = 0, L = s.excludes[e].length; D < L; D++){
                                                var C = s.excludes[e][D].toString().split(":");
                                                l.length == C[1] && T.splice(T.indexOf(C[0]), 1);
                                            }
                                            0 === T.length && (delete s.excludes[e], T = A);
                                        }
                                        (!0 === c.keepStatic || isFinite(parseInt(c.keepStatic)) && E >= c.keepStatic) && (T = T.slice(0, 1));
                                        for(var B = 0; B < T.length; B++){
                                            M = parseInt(T[B]), m = [], n = "string" == typeof _ && w(h, M, x) || j.slice();
                                            var I = v.matches[M];
                                            if (I && f(I, [
                                                M
                                            ].concat(l), p)) r = !0;
                                            else if (0 === B && (k = i(v)), I && I.matches && I.matches.length > v.matches[0].matches.length) break;
                                            a = m.slice(), h = E, m = [];
                                            for(var R = 0; R < a.length; R++){
                                                var F = a[R], N = !1;
                                                F.alternation = F.alternation || x, S(F);
                                                for(var V = 0; V < y.length; V++){
                                                    var G = y[V];
                                                    if ("string" != typeof _ || void 0 !== F.alternation && T.includes(F.locator[F.alternation].toString())) {
                                                        if (F.match.nativeDef === G.match.nativeDef) {
                                                            N = !0, S(G, F);
                                                            break;
                                                        }
                                                        if (d(F, G, c)) {
                                                            S(F, G) && (N = !0, y.splice(y.indexOf(G), 0, F));
                                                            break;
                                                        }
                                                        if (d(G, F, c)) {
                                                            S(G, F);
                                                            break;
                                                        }
                                                        if (P(F, G)) {
                                                            O(F, G) || void 0 !== u.inputmask.userOptions.keepStatic ? S(F, G) && (N = !0, y.splice(y.indexOf(G), 0, F)) : c.keepStatic = !0;
                                                            break;
                                                        }
                                                        if (P(G, F)) {
                                                            S(G, F);
                                                            break;
                                                        }
                                                    }
                                                }
                                                N || y.push(F);
                                            }
                                        }
                                        m = b.concat(y), h = e, g = m.length > 0 && k, r = y.length > 0 && !k, k && g && !r && m.forEach(function(e, t) {
                                            e.unMatchedAlternationStopped = !0;
                                        }), n = j.slice();
                                    } else r = f(v.matches[_] || t.matches[_], [
                                        _
                                    ].concat(l), p);
                                    if (r) return !0;
                                }();
                                if (r.isQuantifier && p !== t.matches[t.matches.indexOf(r) - 1]) return function() {
                                    for(var a = r, o = !1, u = n.length > 0 ? n.shift() : 0; u < (isNaN(a.quantifier.max) ? u + 1 : a.quantifier.max) && h <= e; u++){
                                        var p = t.matches[t.matches.indexOf(a) - 1];
                                        if (r = f(p, [
                                            u
                                        ].concat(l), p)) {
                                            if (m.forEach(function(t, n) {
                                                (i = x(p, t.match) ? t.match : m[m.length - 1].match).optionalQuantifier = u >= a.quantifier.min, i.jit = (u + 1) * (p.matches.indexOf(i) + 1) > a.quantifier.jit, i.optionalQuantifier && v(i, p) && (g = !0, h = e, c.greedy && null == s.validPositions[e - 1] && u > a.quantifier.min && -1 != [
                                                    "*",
                                                    "+"
                                                ].indexOf(a.quantifier.max) && (m.pop(), y = void 0), o = !0, r = !1), !o && i.jit && (s.jitOffset[e] = p.matches.length - p.matches.indexOf(i));
                                            }), o) break;
                                            return !0;
                                        }
                                    }
                                }();
                                if (r = b(r, n, l, p)) return !0;
                            } else h++;
                        }
                        for(var p = n.length > 0 ? n.shift() : 0; p < t.matches.length; p++)if (!0 !== t.matches[p].isQuantifier) {
                            var v = f(t.matches[p], [
                                p
                            ].concat(r), l);
                            if (v && h === e) return v;
                            if (h > e) break;
                        }
                    }
                    function x(e, t) {
                        var n = -1 != e.matches.indexOf(t);
                        return n || e.matches.forEach(function(e, i) {
                            void 0 === e.matches || n || (n = x(e, t));
                        }), n;
                    }
                    if (e > -1) {
                        if (void 0 === t) {
                            for(var w, P = e - 1; void 0 === (w = s.validPositions[P] || s.tests[P]) && P > -1;)P--;
                            void 0 !== w && P > -1 && (v = function(e, t) {
                                var n, i = [];
                                return Array.isArray(t) || (t = [
                                    t
                                ]), t.length > 0 && (void 0 === t[0].alternation || !0 === c.keepStatic ? 0 === (i = f.call(o, e, t.slice()).locator.slice()).length && (i = t[0].locator.slice()) : t.forEach(function(e) {
                                    "" !== e.def && (0 === i.length ? (n = e.alternation, i = e.locator.slice()) : e.locator[n] && -1 === i[n].toString().indexOf(e.locator[n]) && (i[n] += "," + e.locator[n]));
                                })), i;
                            }(P, w), y = v.join(""), h = P);
                        }
                        if (s.tests[e] && s.tests[e][0].cd === y) return s.tests[e];
                        for(var S = v.shift(); S < p.length; S++){
                            if (b(p[S], v, [
                                S
                            ]) && h === e || h > e) break;
                        }
                    }
                    return (0 === m.length || g) && m.push({
                        match: {
                            fn: null,
                            static: !0,
                            optionality: !1,
                            casing: null,
                            def: "",
                            placeholder: ""
                        },
                        locator: k && 0 === m.filter(function(e) {
                            return !0 !== e.unMatchedAlternationStopped;
                        }).length ? [
                            0
                        ] : [],
                        mloc: {},
                        cd: y
                    }), void 0 !== t && s.tests[e] ? r = l.extend(!0, [], m) : (s.tests[e] = l.extend(!0, [], m), r = s.tests[e]), m.forEach(function(e) {
                        e.match.optionality = e.match.defOptionality || !1;
                    }), r;
                }
            },
            7215: function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.alternate = l, t.checkAlternationMatch = function(e, t, n) {
                    for(var i, a = this.opts.greedy ? t : t.slice(0, 1), r = !1, o = void 0 !== n ? n.split(",") : [], l = 0; l < o.length; l++)-1 !== (i = e.indexOf(o[l])) && e.splice(i, 1);
                    for(var s = 0; s < e.length; s++)if (a.includes(e[s])) {
                        r = !0;
                        break;
                    }
                    return r;
                }, t.handleRemove = function(e, t, n, i, s) {
                    var c = this, u = this.maskset, f = this.opts;
                    if ((f.numericInput || c.isRTL) && (t === a.keys.Backspace ? t = a.keys.Delete : t === a.keys.Delete && (t = a.keys.Backspace), c.isRTL)) {
                        var p = n.end;
                        n.end = n.begin, n.begin = p;
                    }
                    var d, h = r.getLastValidPosition.call(c, void 0, !0);
                    n.end >= r.getBuffer.call(c).length && h >= n.end && (n.end = h + 1);
                    t === a.keys.Backspace ? n.end - n.begin < 1 && (n.begin = r.seekPrevious.call(c, n.begin)) : t === a.keys.Delete && n.begin === n.end && (n.end = r.isMask.call(c, n.end, !0, !0) ? n.end + 1 : r.seekNext.call(c, n.end) + 1);
                    !1 !== (d = v.call(c, n)) && ((!0 !== i && !1 !== f.keepStatic || null !== f.regex && -1 !== o.getTest.call(c, n.begin).match.def.indexOf("|")) && l.call(c, !0), !0 !== i && (u.p = t === a.keys.Delete ? n.begin + d : n.begin, u.p = r.determineNewCaretPosition.call(c, {
                        begin: u.p,
                        end: u.p
                    }, !1, !1 === f.insertMode && t === a.keys.Backspace ? "none" : void 0).begin));
                }, t.isComplete = c, t.isSelection = u, t.isValid = f, t.refreshFromBuffer = d, t.revalidateMask = v;
                var i = n(6030), a = n(2839), r = n(8711), o = n(4713);
                function l(e, t, n, i, a, s) {
                    var c = this, u = this.dependencyLib, p = this.opts, d = c.maskset;
                    if (!c.hasAlternator) return !1;
                    var h, v, m, g, y, k, b, x, w, P, S, O = u.extend(!0, [], d.validPositions), _ = u.extend(!0, {}, d.tests), M = !1, E = !1, j = void 0 !== a ? a : r.getLastValidPosition.call(c);
                    if (s && (P = s.begin, S = s.end, s.begin > s.end && (P = s.end, S = s.begin)), -1 === j && void 0 === a) h = 0, v = (g = o.getTest.call(c, h)).alternation;
                    else for(; j >= 0; j--)if ((m = d.validPositions[j]) && void 0 !== m.alternation) {
                        if (j <= (e || 0) && g && g.locator[m.alternation] !== m.locator[m.alternation]) break;
                        h = j, v = d.validPositions[h].alternation, g = m;
                    }
                    if (void 0 !== v) {
                        b = parseInt(h), d.excludes[b] = d.excludes[b] || [], !0 !== e && d.excludes[b].push((0, o.getDecisionTaker)(g) + ":" + g.alternation);
                        var T = [], A = -1;
                        for(y = b; b < r.getLastValidPosition.call(c, void 0, !0) + 1; y++)-1 === A && e <= y && void 0 !== t && (T.push(t), A = T.length - 1), (k = d.validPositions[b]) && !0 !== k.generatedInput && (void 0 === s || y < P || y >= S) && T.push(k.input), d.validPositions.splice(b, 1);
                        for(-1 === A && void 0 !== t && (T.push(t), A = T.length - 1); void 0 !== d.excludes[b] && d.excludes[b].length < 10;){
                            for(d.tests = {}, r.resetMaskSet.call(c, !0), M = !0, y = 0; y < T.length && (x = M.caret || 0 == p.insertMode && null != x ? r.seekNext.call(c, x) : r.getLastValidPosition.call(c, void 0, !0) + 1, w = T[y], M = f.call(c, x, w, !1, i, !0)); y++)y === A && (E = M), 1 == e && M && (E = {
                                caretPos: y
                            });
                            if (M) break;
                            if (r.resetMaskSet.call(c), g = o.getTest.call(c, b), d.validPositions = u.extend(!0, [], O), d.tests = u.extend(!0, {}, _), !d.excludes[b]) {
                                E = l.call(c, e, t, n, i, b - 1, s);
                                break;
                            }
                            if (null != g.alternation) {
                                var D = (0, o.getDecisionTaker)(g);
                                if (-1 !== d.excludes[b].indexOf(D + ":" + g.alternation)) {
                                    E = l.call(c, e, t, n, i, b - 1, s);
                                    break;
                                }
                                for(d.excludes[b].push(D + ":" + g.alternation), y = b; y < r.getLastValidPosition.call(c, void 0, !0) + 1; y++)d.validPositions.splice(b);
                            } else delete d.excludes[b];
                        }
                    }
                    return E && !1 === p.keepStatic || delete d.excludes[b], E;
                }
                function s(e, t, n) {
                    var i = this.opts, r = this.maskset;
                    switch(i.casing || t.casing){
                        case "upper":
                            e = e.toUpperCase();
                            break;
                        case "lower":
                            e = e.toLowerCase();
                            break;
                        case "title":
                            var o = r.validPositions[n - 1];
                            e = 0 === n || o && o.input === String.fromCharCode(a.keyCode.Space) ? e.toUpperCase() : e.toLowerCase();
                            break;
                        default:
                            if ("function" == typeof i.casing) {
                                var l = Array.prototype.slice.call(arguments);
                                l.push(r.validPositions), e = i.casing.apply(this, l);
                            }
                    }
                    return e;
                }
                function c(e) {
                    var t = this, n = this.opts, i = this.maskset;
                    if ("function" == typeof n.isComplete) return n.isComplete(e, n);
                    if ("*" !== n.repeat) {
                        var a = !1, l = r.determineLastRequiredPosition.call(t, !0), s = l.l;
                        if (void 0 === l.def || l.def.newBlockMarker || l.def.optionality || l.def.optionalQuantifier) {
                            a = !0;
                            for(var c = 0; c <= s; c++){
                                var u = o.getTestTemplate.call(t, c).match;
                                if (!0 !== u.static && void 0 === i.validPositions[c] && (!1 === u.optionality || void 0 === u.optionality || u.optionality && 0 == u.newBlockMarker) && (!1 === u.optionalQuantifier || void 0 === u.optionalQuantifier) || !0 === u.static && "" != u.def && e[c] !== o.getPlaceholder.call(t, c, u)) {
                                    a = !1;
                                    break;
                                }
                            }
                        }
                        return a;
                    }
                }
                function u(e) {
                    var t = this.opts.insertMode ? 0 : 1;
                    return this.isRTL ? e.begin - e.end > t : e.end - e.begin > t;
                }
                function f(e, t, n, i, a, p, m) {
                    var g = this, y = this.dependencyLib, k = this.opts, b = g.maskset;
                    n = !0 === n;
                    var x = e;
                    function w(e) {
                        if (void 0 !== e) {
                            if (void 0 !== e.remove && (Array.isArray(e.remove) || (e.remove = [
                                e.remove
                            ]), e.remove.sort(function(e, t) {
                                return g.isRTL ? e.pos - t.pos : t.pos - e.pos;
                            }).forEach(function(e) {
                                v.call(g, {
                                    begin: e,
                                    end: e + 1
                                });
                            }), e.remove = void 0), void 0 !== e.insert && (Array.isArray(e.insert) || (e.insert = [
                                e.insert
                            ]), e.insert.sort(function(e, t) {
                                return g.isRTL ? t.pos - e.pos : e.pos - t.pos;
                            }).forEach(function(e) {
                                "" !== e.c && f.call(g, e.pos, e.c, void 0 === e.strict || e.strict, void 0 !== e.fromIsValid ? e.fromIsValid : i);
                            }), e.insert = void 0), e.refreshFromBuffer && e.buffer) {
                                var t = e.refreshFromBuffer;
                                d.call(g, !0 === t ? t : t.start, t.end, e.buffer), e.refreshFromBuffer = void 0;
                            }
                            void 0 !== e.rewritePosition && (x = e.rewritePosition, e = !0);
                        }
                        return e;
                    }
                    function P(t, n, a) {
                        var l = !1;
                        return o.getTests.call(g, t).every(function(c, f) {
                            var p = c.match;
                            if (r.getBuffer.call(g, !0), !1 !== (l = (!p.jit || void 0 !== b.validPositions[r.seekPrevious.call(g, t)]) && (null != p.fn ? p.fn.test(n, b, t, a, k, u.call(g, e)) : (n === p.def || n === k.skipOptionalPartCharacter) && "" !== p.def && {
                                c: o.getPlaceholder.call(g, t, p, !0) || p.def,
                                pos: t
                            }))) {
                                var d = void 0 !== l.c ? l.c : n, h = t;
                                return d = d === k.skipOptionalPartCharacter && !0 === p.static ? o.getPlaceholder.call(g, t, p, !0) || p.def : d, !0 !== (l = w(l)) && void 0 !== l.pos && l.pos !== t && (h = l.pos), !0 !== l && void 0 === l.pos && void 0 === l.c ? !1 : (!1 === v.call(g, e, y.extend({}, c, {
                                    input: s.call(g, d, p, h)
                                }), i, h) && (l = !1), !1);
                            }
                            return !0;
                        }), l;
                    }
                    void 0 !== e.begin && (x = g.isRTL ? e.end : e.begin);
                    var S = !0, O = y.extend(!0, [], b.validPositions);
                    if (!1 === k.keepStatic && void 0 !== b.excludes[x] && !0 !== a && !0 !== i) for(var _ = x; _ < (g.isRTL ? e.begin : e.end); _++)void 0 !== b.excludes[_] && (b.excludes[_] = void 0, delete b.tests[_]);
                    if ("function" == typeof k.preValidation && !0 !== i && !0 !== p && (S = w(S = k.preValidation.call(g, r.getBuffer.call(g), x, t, u.call(g, e), k, b, e, n || a))), !0 === S) {
                        if (S = P(x, t, n), (!n || !0 === i) && !1 === S && !0 !== p) {
                            var M = b.validPositions[x];
                            if (!M || !0 !== M.match.static || M.match.def !== t && t !== k.skipOptionalPartCharacter) {
                                if (k.insertMode || void 0 === b.validPositions[r.seekNext.call(g, x)] || e.end > x) {
                                    var E = !1;
                                    if (b.jitOffset[x] && void 0 === b.validPositions[r.seekNext.call(g, x)] && !1 !== (S = f.call(g, x + b.jitOffset[x], t, !0, !0)) && (!0 !== a && (S.caret = x), E = !0), e.end > x && (b.validPositions[x] = void 0), !E && !r.isMask.call(g, x, k.keepStatic && 0 === x)) {
                                        for(var j = x + 1, T = r.seekNext.call(g, x, !1, 0 !== x); j <= T; j++)if (!1 !== (S = P(j, t, n))) {
                                            S = h.call(g, x, void 0 !== S.pos ? S.pos : j) || S, x = j;
                                            break;
                                        }
                                    }
                                }
                            } else S = {
                                caret: r.seekNext.call(g, x)
                            };
                        }
                        g.hasAlternator && !0 !== a && !n && (a = !0, !1 === S && k.keepStatic && (c.call(g, r.getBuffer.call(g)) || 0 === x) ? S = l.call(g, x, t, n, i, void 0, e) : (u.call(g, e) && b.tests[x] && b.tests[x].length > 1 && k.keepStatic || 1 == S && !0 !== k.numericInput && b.tests[x] && b.tests[x].length > 1 && r.getLastValidPosition.call(g, void 0, !0) > x) && (S = l.call(g, !0))), !0 === S && (S = {
                            pos: x
                        });
                    }
                    if ("function" == typeof k.postValidation && !0 !== i && !0 !== p) {
                        var A = k.postValidation.call(g, r.getBuffer.call(g, !0), void 0 !== e.begin ? g.isRTL ? e.end : e.begin : e, t, S, k, b, n, m);
                        void 0 !== A && (S = !0 === A ? S : A);
                    }
                    S && void 0 === S.pos && (S.pos = x), !1 === S || !0 === p ? (r.resetMaskSet.call(g, !0), b.validPositions = y.extend(!0, [], O)) : h.call(g, void 0, x, !0);
                    var D = w(S);
                    void 0 !== g.maxLength && r.getBuffer.call(g).length > g.maxLength && !i && (r.resetMaskSet.call(g, !0), b.validPositions = y.extend(!0, [], O), D = !1);
                    return D;
                }
                function p(e, t, n) {
                    for(var i = this.maskset, a = !1, r = o.getTests.call(this, e), l = 0; l < r.length; l++){
                        if (r[l].match && (r[l].match.nativeDef === t.match[n.shiftPositions ? "def" : "nativeDef"] && (!n.shiftPositions || !t.match.static) || r[l].match.nativeDef === t.match.nativeDef || n.regex && !r[l].match.static && r[l].match.fn.test(t.input, i, e, !1, n))) {
                            a = !0;
                            break;
                        }
                        if (r[l].match && r[l].match.def === t.match.nativeDef) {
                            a = void 0;
                            break;
                        }
                    }
                    return !1 === a && void 0 !== i.jitOffset[e] && (a = p.call(this, e + i.jitOffset[e], t, n)), a;
                }
                function d(e, t, n) {
                    var a, o, l = this, s = this.maskset, c = this.opts, u = this.dependencyLib, f = c.skipOptionalPartCharacter, p = l.isRTL ? n.slice().reverse() : n;
                    if (c.skipOptionalPartCharacter = "", !0 === e) r.resetMaskSet.call(l, !1), e = 0, t = n.length, o = r.determineNewCaretPosition.call(l, {
                        begin: 0,
                        end: 0
                    }, !1).begin;
                    else {
                        for(a = e; a < t; a++)s.validPositions.splice(e, 0);
                        o = e;
                    }
                    var d = new u.Event("keypress");
                    for(a = e; a < t; a++){
                        d.key = p[a].toString(), l.ignorable = !1;
                        var h = i.EventHandlers.keypressEvent.call(l, d, !0, !1, !1, o);
                        !1 !== h && void 0 !== h && (o = h.forwardPosition);
                    }
                    c.skipOptionalPartCharacter = f;
                }
                function h(e, t, n) {
                    var i = this, a = this.maskset, l = this.dependencyLib;
                    if (void 0 === e) for(e = t - 1; e > 0 && !a.validPositions[e]; e--);
                    for(var s = e; s < t; s++){
                        if (void 0 === a.validPositions[s] && !r.isMask.call(i, s, !1)) {
                            if (0 == s ? o.getTest.call(i, s) : a.validPositions[s - 1]) {
                                var c = o.getTests.call(i, s).slice();
                                "" === c[c.length - 1].match.def && c.pop();
                                var u, p = o.determineTestTemplate.call(i, s, c);
                                if (p && (!0 !== p.match.jit || "master" === p.match.newBlockMarker && (u = a.validPositions[s + 1]) && !0 === u.match.optionalQuantifier) && ((p = l.extend({}, p, {
                                    input: o.getPlaceholder.call(i, s, p.match, !0) || p.match.def
                                })).generatedInput = !0, v.call(i, s, p, !0), !0 !== n)) {
                                    var d = a.validPositions[t].input;
                                    return a.validPositions[t] = void 0, f.call(i, t, d, !0, !0);
                                }
                            }
                        }
                    }
                }
                function v(e, t, n, i) {
                    var a = this, l = this.maskset, s = this.opts, c = this.dependencyLib;
                    function d(e, t, n) {
                        var i = t[e];
                        if (void 0 !== i && !0 === i.match.static && !0 !== i.match.optionality && (void 0 === t[0] || void 0 === t[0].alternation)) {
                            var a = n.begin <= e - 1 ? t[e - 1] && !0 === t[e - 1].match.static && t[e - 1] : t[e - 1], r = n.end > e + 1 ? t[e + 1] && !0 === t[e + 1].match.static && t[e + 1] : t[e + 1];
                            return a && r;
                        }
                        return !1;
                    }
                    var h = 0, v = void 0 !== e.begin ? e.begin : e, m = void 0 !== e.end ? e.end : e, g = !0;
                    if (e.begin > e.end && (v = e.end, m = e.begin), i = void 0 !== i ? i : v, void 0 === n && (v !== m || s.insertMode && void 0 !== l.validPositions[i] || void 0 === t || t.match.optionalQuantifier || t.match.optionality)) {
                        var y, k = c.extend(!0, [], l.validPositions), b = r.getLastValidPosition.call(a, void 0, !0);
                        l.p = v;
                        var x = u.call(a, e) ? v : i;
                        for(y = b; y >= x; y--)l.validPositions.splice(y, 1), void 0 === t && delete l.tests[y + 1];
                        var w, P, S = i, O = S;
                        for(t && (l.validPositions[i] = c.extend(!0, {}, t), O++, S++), null == k[m] && l.jitOffset[m] && (m += l.jitOffset[m] + 1), y = t ? m : m - 1; y <= b; y++){
                            if (void 0 !== (w = k[y]) && !0 !== w.generatedInput && (y >= m || y >= v && d(y, k, {
                                begin: v,
                                end: m
                            }))) {
                                for(; "" !== o.getTest.call(a, O).match.def;){
                                    if (!1 !== (P = p.call(a, O, w, s)) || "+" === w.match.def) {
                                        "+" === w.match.def && r.getBuffer.call(a, !0);
                                        var _ = f.call(a, O, w.input, "+" !== w.match.def, !0);
                                        if (g = !1 !== _, S = (_.pos || O) + 1, !g && P) break;
                                    } else g = !1;
                                    if (g) {
                                        void 0 === t && w.match.static && y === e.begin && h++;
                                        break;
                                    }
                                    if (!g && r.getBuffer.call(a), O > l.maskLength) break;
                                    O++;
                                }
                                "" == o.getTest.call(a, O).match.def && (g = !1), O = S;
                            }
                            if (!g) break;
                        }
                        if (!g) return l.validPositions = c.extend(!0, [], k), r.resetMaskSet.call(a, !0), !1;
                    } else t && o.getTest.call(a, i).match.cd === t.match.cd && (l.validPositions[i] = c.extend(!0, {}, t));
                    return r.resetMaskSet.call(a, !0), h;
                }
            }
        }, t = {};
        function n(i) {
            var a = t[i];
            if (void 0 !== a) return a.exports;
            var r = t[i] = {
                exports: {}
            };
            return e[i](r, r.exports, n), r.exports;
        }
        var i = {};
        return function() {
            var e = i;
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0, n(7149), n(3194), n(9302), n(4013), n(3851), n(219), n(207), n(5296);
            var t, a = (t = n(2394)) && t.__esModule ? t : {
                default: t
            };
            e.default = a.default;
        }(), i;
    }();
});

},{}],"bliRI":[function(require,module,exports,__globalThis) {
"use strict";
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _toDate = _interopRequireDefault(require("b10fe806c1d95257"));
var _toFloat = _interopRequireDefault(require("904819e5ea643bef"));
var _toInt = _interopRequireDefault(require("22c9d1505c2d1fc3"));
var _toBoolean = _interopRequireDefault(require("e0a5af27c12b2c5e"));
var _equals = _interopRequireDefault(require("df6a0b6bd84e19b4"));
var _contains = _interopRequireDefault(require("e2f527afb12190b0"));
var _matches = _interopRequireDefault(require("d7cf83c49d7fa32f"));
var _isEmail = _interopRequireDefault(require("73acc2ba6f501a7f"));
var _isURL = _interopRequireDefault(require("7cc96999cdc491f6"));
var _isMACAddress = _interopRequireDefault(require("91309703df115c6"));
var _isIP = _interopRequireDefault(require("8d2f5af297d16217"));
var _isIPRange = _interopRequireDefault(require("6e4eace52f632262"));
var _isFQDN = _interopRequireDefault(require("1219b49fc6cacab9"));
var _isDate = _interopRequireDefault(require("befc3dab9b151a88"));
var _isTime = _interopRequireDefault(require("ec526ea97a56e412"));
var _isBoolean = _interopRequireDefault(require("a3a022398582f68"));
var _isLocale = _interopRequireDefault(require("8e765fdc6039f514"));
var _isAbaRouting = _interopRequireDefault(require("d61bbfe7e2e66c71"));
var _isAlpha = _interopRequireWildcard(require("752765732ee21c04"));
var _isAlphanumeric = _interopRequireWildcard(require("939913da4be78270"));
var _isNumeric = _interopRequireDefault(require("b32016933f0604cd"));
var _isPassportNumber = _interopRequireDefault(require("f24514c574ef5174"));
var _isPort = _interopRequireDefault(require("a3b9b492f47016b1"));
var _isLowercase = _interopRequireDefault(require("8ca5f357d13579ae"));
var _isUppercase = _interopRequireDefault(require("57290c395d90e9e1"));
var _isIMEI = _interopRequireDefault(require("2b3e24162ae2fcc4"));
var _isAscii = _interopRequireDefault(require("6af1ce2eb4cb2855"));
var _isFullWidth = _interopRequireDefault(require("a47be535f6075d89"));
var _isHalfWidth = _interopRequireDefault(require("eef79b677b4d3a47"));
var _isVariableWidth = _interopRequireDefault(require("34b89671f36a7e6c"));
var _isMultibyte = _interopRequireDefault(require("8c10c7728b073c57"));
var _isSemVer = _interopRequireDefault(require("f81e871eee57051f"));
var _isSurrogatePair = _interopRequireDefault(require("1b903d3ad0f8db90"));
var _isInt = _interopRequireDefault(require("20afde36edb727c0"));
var _isFloat = _interopRequireWildcard(require("26779d512565dc66"));
var _isDecimal = _interopRequireDefault(require("df62e7a0ab08fe5c"));
var _isHexadecimal = _interopRequireDefault(require("e09b4815b82a6fa5"));
var _isOctal = _interopRequireDefault(require("db9c20ed62cf8b83"));
var _isDivisibleBy = _interopRequireDefault(require("ea2557066cb998fd"));
var _isHexColor = _interopRequireDefault(require("f2e98624db0f1d3a"));
var _isRgbColor = _interopRequireDefault(require("1ac5e66aef101809"));
var _isHSL = _interopRequireDefault(require("d63b18a1ffb2f873"));
var _isISRC = _interopRequireDefault(require("b761b41c2a22a4c"));
var _isIBAN = _interopRequireWildcard(require("1474925e6c78b080"));
var _isBIC = _interopRequireDefault(require("5f702bfdeaac1ce7"));
var _isMD = _interopRequireDefault(require("94155f1dd48161aa"));
var _isHash = _interopRequireDefault(require("136460343d65b33b"));
var _isJWT = _interopRequireDefault(require("c84165da89e1d7dc"));
var _isJSON = _interopRequireDefault(require("4b2533eb7fa4f841"));
var _isEmpty = _interopRequireDefault(require("61b139f71e9bf24a"));
var _isLength = _interopRequireDefault(require("f14362267ed484f3"));
var _isByteLength = _interopRequireDefault(require("d2e7ce5d1a66c2af"));
var _isUUID = _interopRequireDefault(require("e04856beee56d70"));
var _isMongoId = _interopRequireDefault(require("8582f245235fd570"));
var _isAfter = _interopRequireDefault(require("38440f282a879a28"));
var _isBefore = _interopRequireDefault(require("b530a3c08a2c51b8"));
var _isIn = _interopRequireDefault(require("72a50fd794aa3073"));
var _isLuhnNumber = _interopRequireDefault(require("47ff8310016d83ea"));
var _isCreditCard = _interopRequireDefault(require("ba1ceeca74a3e817"));
var _isIdentityCard = _interopRequireDefault(require("858463bab92c710f"));
var _isEAN = _interopRequireDefault(require("f68159fe837e362b"));
var _isISIN = _interopRequireDefault(require("7dbda028ea6b742d"));
var _isISBN = _interopRequireDefault(require("7c94026d50601268"));
var _isISSN = _interopRequireDefault(require("71e63739b51dba75"));
var _isTaxID = _interopRequireDefault(require("ab77331adcaaf0d6"));
var _isMobilePhone = _interopRequireWildcard(require("2313c49333962ef0"));
var _isEthereumAddress = _interopRequireDefault(require("1ea0c275d18ce3e5"));
var _isCurrency = _interopRequireDefault(require("de6a83eab060bec5"));
var _isBtcAddress = _interopRequireDefault(require("ab08ca66d9afd375"));
var _isISO = require("c4e797f261d4103c");
var _isISO2 = _interopRequireDefault(require("57ddbfb43a466c6c"));
var _isISO3 = _interopRequireDefault(require("b9e0ef98f72ec644"));
var _isRFC = _interopRequireDefault(require("704555bc8cf425e5"));
var _isISO31661Alpha = _interopRequireDefault(require("a4ed258f67afd89a"));
var _isISO31661Alpha2 = _interopRequireDefault(require("2ca72dbaf0f6b784"));
var _isISO4 = _interopRequireDefault(require("c4b0f529774f4dee"));
var _isBase = _interopRequireDefault(require("3e794622f61caa75"));
var _isBase2 = _interopRequireDefault(require("43c060b0c5b6666c"));
var _isBase3 = _interopRequireDefault(require("7e6b000c25e65107"));
var _isDataURI = _interopRequireDefault(require("e9ea15b8d1ad7666"));
var _isMagnetURI = _interopRequireDefault(require("63f9ca5884eaf1a9"));
var _isMailtoURI = _interopRequireDefault(require("adb3f66c462bf2e9"));
var _isMimeType = _interopRequireDefault(require("ead2e0dae8858eb6"));
var _isLatLong = _interopRequireDefault(require("943c68afc1f5e3fb"));
var _isPostalCode = _interopRequireWildcard(require("337fc01d18b5d9a1"));
var _ltrim = _interopRequireDefault(require("8e8b3ff8c8b3be15"));
var _rtrim = _interopRequireDefault(require("2262c3ab640e83e1"));
var _trim = _interopRequireDefault(require("4ed20b257cccd153"));
var _escape = _interopRequireDefault(require("ac5bde86531aa937"));
var _unescape = _interopRequireDefault(require("2cfb4a825383e754"));
var _stripLow = _interopRequireDefault(require("2e66e0b0ad386340"));
var _whitelist = _interopRequireDefault(require("8984f13126c4be3d"));
var _blacklist = _interopRequireDefault(require("a5ed790bd0c52ebc"));
var _isWhitelisted = _interopRequireDefault(require("27fe339771c0d202"));
var _normalizeEmail = _interopRequireDefault(require("f0de5432f43d6408"));
var _isSlug = _interopRequireDefault(require("cc7c18b6c6bfc763"));
var _isLicensePlate = _interopRequireDefault(require("cf2ac5417f4a7f77"));
var _isStrongPassword = _interopRequireDefault(require("1f8b1a814d1f08cd"));
var _isVAT = _interopRequireDefault(require("b2c0124f6355fe4f"));
function _getRequireWildcardCache(e) {
    if ("function" != typeof WeakMap) return null;
    var r = new WeakMap(), t = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache(e) {
        return e ? t : r;
    })(e);
}
function _interopRequireWildcard(e, r) {
    if (!r && e && e.__esModule) return e;
    if (null === e || "object" != _typeof(e) && "function" != typeof e) return {
        default: e
    };
    var t = _getRequireWildcardCache(r);
    if (t && t.has(e)) return t.get(e);
    var n = {
        __proto__: null
    }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var u in e)if ("default" !== u && ({}).hasOwnProperty.call(e, u)) {
        var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
        i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
    }
    return n.default = e, t && t.set(e, n), n;
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var version = '13.12.0';
var validator = {
    version: version,
    toDate: _toDate.default,
    toFloat: _toFloat.default,
    toInt: _toInt.default,
    toBoolean: _toBoolean.default,
    equals: _equals.default,
    contains: _contains.default,
    matches: _matches.default,
    isEmail: _isEmail.default,
    isURL: _isURL.default,
    isMACAddress: _isMACAddress.default,
    isIP: _isIP.default,
    isIPRange: _isIPRange.default,
    isFQDN: _isFQDN.default,
    isBoolean: _isBoolean.default,
    isIBAN: _isIBAN.default,
    isBIC: _isBIC.default,
    isAbaRouting: _isAbaRouting.default,
    isAlpha: _isAlpha.default,
    isAlphaLocales: _isAlpha.locales,
    isAlphanumeric: _isAlphanumeric.default,
    isAlphanumericLocales: _isAlphanumeric.locales,
    isNumeric: _isNumeric.default,
    isPassportNumber: _isPassportNumber.default,
    isPort: _isPort.default,
    isLowercase: _isLowercase.default,
    isUppercase: _isUppercase.default,
    isAscii: _isAscii.default,
    isFullWidth: _isFullWidth.default,
    isHalfWidth: _isHalfWidth.default,
    isVariableWidth: _isVariableWidth.default,
    isMultibyte: _isMultibyte.default,
    isSemVer: _isSemVer.default,
    isSurrogatePair: _isSurrogatePair.default,
    isInt: _isInt.default,
    isIMEI: _isIMEI.default,
    isFloat: _isFloat.default,
    isFloatLocales: _isFloat.locales,
    isDecimal: _isDecimal.default,
    isHexadecimal: _isHexadecimal.default,
    isOctal: _isOctal.default,
    isDivisibleBy: _isDivisibleBy.default,
    isHexColor: _isHexColor.default,
    isRgbColor: _isRgbColor.default,
    isHSL: _isHSL.default,
    isISRC: _isISRC.default,
    isMD5: _isMD.default,
    isHash: _isHash.default,
    isJWT: _isJWT.default,
    isJSON: _isJSON.default,
    isEmpty: _isEmpty.default,
    isLength: _isLength.default,
    isLocale: _isLocale.default,
    isByteLength: _isByteLength.default,
    isUUID: _isUUID.default,
    isMongoId: _isMongoId.default,
    isAfter: _isAfter.default,
    isBefore: _isBefore.default,
    isIn: _isIn.default,
    isLuhnNumber: _isLuhnNumber.default,
    isCreditCard: _isCreditCard.default,
    isIdentityCard: _isIdentityCard.default,
    isEAN: _isEAN.default,
    isISIN: _isISIN.default,
    isISBN: _isISBN.default,
    isISSN: _isISSN.default,
    isMobilePhone: _isMobilePhone.default,
    isMobilePhoneLocales: _isMobilePhone.locales,
    isPostalCode: _isPostalCode.default,
    isPostalCodeLocales: _isPostalCode.locales,
    isEthereumAddress: _isEthereumAddress.default,
    isCurrency: _isCurrency.default,
    isBtcAddress: _isBtcAddress.default,
    isISO6346: _isISO.isISO6346,
    isFreightContainerID: _isISO.isFreightContainerID,
    isISO6391: _isISO2.default,
    isISO8601: _isISO3.default,
    isRFC3339: _isRFC.default,
    isISO31661Alpha2: _isISO31661Alpha.default,
    isISO31661Alpha3: _isISO31661Alpha2.default,
    isISO4217: _isISO4.default,
    isBase32: _isBase.default,
    isBase58: _isBase2.default,
    isBase64: _isBase3.default,
    isDataURI: _isDataURI.default,
    isMagnetURI: _isMagnetURI.default,
    isMailtoURI: _isMailtoURI.default,
    isMimeType: _isMimeType.default,
    isLatLong: _isLatLong.default,
    ltrim: _ltrim.default,
    rtrim: _rtrim.default,
    trim: _trim.default,
    escape: _escape.default,
    unescape: _unescape.default,
    stripLow: _stripLow.default,
    whitelist: _whitelist.default,
    blacklist: _blacklist.default,
    isWhitelisted: _isWhitelisted.default,
    normalizeEmail: _normalizeEmail.default,
    toString: toString,
    isSlug: _isSlug.default,
    isStrongPassword: _isStrongPassword.default,
    isTaxID: _isTaxID.default,
    isDate: _isDate.default,
    isTime: _isTime.default,
    isLicensePlate: _isLicensePlate.default,
    isVAT: _isVAT.default,
    ibanLocales: _isIBAN.locales
};
var _default = exports.default = validator;
module.exports = exports.default;
module.exports.default = exports.default;

},{"b10fe806c1d95257":"8TB4U","904819e5ea643bef":"9YAY3","22c9d1505c2d1fc3":"8rfaa","e0a5af27c12b2c5e":"6N60y","df6a0b6bd84e19b4":"iHg2k","e2f527afb12190b0":"2nitJ","d7cf83c49d7fa32f":"5OBn3","73acc2ba6f501a7f":"25fbl","7cc96999cdc491f6":"c1NyA","91309703df115c6":"26Ud6","8d2f5af297d16217":"aH7jH","6e4eace52f632262":"jsDgg","1219b49fc6cacab9":"2rD1M","befc3dab9b151a88":"243yZ","ec526ea97a56e412":"dh5pG","a3a022398582f68":"iM2v3","8e765fdc6039f514":"izksE","d61bbfe7e2e66c71":"ilZVE","752765732ee21c04":"89f7h","939913da4be78270":"bzLj5","b32016933f0604cd":"dYHig","f24514c574ef5174":"eZLKj","a3b9b492f47016b1":"luZnK","8ca5f357d13579ae":"cAZl8","57290c395d90e9e1":"6vzFM","2b3e24162ae2fcc4":"au9P4","6af1ce2eb4cb2855":"bTliX","a47be535f6075d89":"i0ySm","eef79b677b4d3a47":"k5krg","34b89671f36a7e6c":"844cT","8c10c7728b073c57":"88z7u","f81e871eee57051f":"iU8qF","1b903d3ad0f8db90":"1WO2m","20afde36edb727c0":"6nSfG","26779d512565dc66":"kx6BG","df62e7a0ab08fe5c":"aRL5c","e09b4815b82a6fa5":"h00RN","db9c20ed62cf8b83":"9a3YX","ea2557066cb998fd":"7xKVo","f2e98624db0f1d3a":"hm22e","1ac5e66aef101809":"ebnFs","d63b18a1ffb2f873":"5avTM","b761b41c2a22a4c":"4yqQH","1474925e6c78b080":"loKzp","5f702bfdeaac1ce7":"dGnco","94155f1dd48161aa":"bld3U","136460343d65b33b":"jEjuS","c84165da89e1d7dc":"1ovuU","4b2533eb7fa4f841":"2hHhN","61b139f71e9bf24a":"dOok5","f14362267ed484f3":"f0je8","d2e7ce5d1a66c2af":"agQQk","e04856beee56d70":"tOwUk","8582f245235fd570":"dcUed","38440f282a879a28":"9u60f","b530a3c08a2c51b8":"aHPfk","72a50fd794aa3073":"aFGXX","47ff8310016d83ea":"ekefF","ba1ceeca74a3e817":"70XyJ","858463bab92c710f":"hlY4v","f68159fe837e362b":"fPkd3","7dbda028ea6b742d":"6OrLA","7c94026d50601268":"jg1zD","71e63739b51dba75":"9xB1S","ab77331adcaaf0d6":"l0cqb","2313c49333962ef0":"i6GBo","1ea0c275d18ce3e5":"aFDzQ","de6a83eab060bec5":"bhNj9","ab08ca66d9afd375":"33rsI","c4e797f261d4103c":"6WvHI","57ddbfb43a466c6c":"hb3R1","b9e0ef98f72ec644":"fmSWm","704555bc8cf425e5":"dant0","a4ed258f67afd89a":"d023L","2ca72dbaf0f6b784":"8L4qb","c4b0f529774f4dee":"5m7Vp","3e794622f61caa75":"efPgQ","43c060b0c5b6666c":"440T3","7e6b000c25e65107":"gPCLH","e9ea15b8d1ad7666":"hywF2","63f9ca5884eaf1a9":"7vLF5","adb3f66c462bf2e9":"wsugG","ead2e0dae8858eb6":"9WoRd","943c68afc1f5e3fb":"kx63f","337fc01d18b5d9a1":"bGotF","8e8b3ff8c8b3be15":"fJ9nZ","2262c3ab640e83e1":"fMYnt","4ed20b257cccd153":"iVDTF","ac5bde86531aa937":"6CwX1","2cfb4a825383e754":"drLU6","2e66e0b0ad386340":"acEjg","8984f13126c4be3d":"alKRu","a5ed790bd0c52ebc":"hlY2T","27fe339771c0d202":"dxEdr","f0de5432f43d6408":"haeN5","cc7c18b6c6bfc763":"cwFi9","cf2ac5417f4a7f77":"bfivK","1f8b1a814d1f08cd":"doaet","b2c0124f6355fe4f":"huZFv"}],"8TB4U":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = toDate;
var _assertString = _interopRequireDefault(require("9003e7317103d051"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function toDate(date) {
    (0, _assertString.default)(date);
    date = Date.parse(date);
    return !isNaN(date) ? new Date(date) : null;
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"9003e7317103d051":"dGQqH"}],"dGQqH":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = assertString;
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function assertString(input) {
    var isString = typeof input === 'string' || input instanceof String;
    if (!isString) {
        var invalidType = _typeof(input);
        if (input === null) invalidType = 'null';
        else if (invalidType === 'object') invalidType = input.constructor.name;
        throw new TypeError("Expected a string but received a ".concat(invalidType));
    }
}
module.exports = exports.default;
module.exports.default = exports.default;

},{}],"9YAY3":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = toFloat;
var _isFloat = _interopRequireDefault(require("9b0d8b1a332f4ae0"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function toFloat(str) {
    if (!(0, _isFloat.default)(str)) return NaN;
    return parseFloat(str);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"9b0d8b1a332f4ae0":"kx6BG"}],"kx6BG":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isFloat;
exports.locales = void 0;
var _assertString = _interopRequireDefault(require("e15bcf079e8ac12a"));
var _alpha = require("24fcd40e646e749a");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function isFloat(str, options) {
    (0, _assertString.default)(str);
    options = options || {};
    var float = new RegExp("^(?:[-+])?(?:[0-9]+)?(?:\\".concat(options.locale ? _alpha.decimal[options.locale] : '.', "[0-9]*)?(?:[eE][\\+\\-]?(?:[0-9]+))?$"));
    if (str === '' || str === '.' || str === ',' || str === '-' || str === '+') return false;
    var value = parseFloat(str.replace(',', '.'));
    return float.test(str) && (!options.hasOwnProperty('min') || value >= options.min) && (!options.hasOwnProperty('max') || value <= options.max) && (!options.hasOwnProperty('lt') || value < options.lt) && (!options.hasOwnProperty('gt') || value > options.gt);
}
var locales = exports.locales = Object.keys(_alpha.decimal);

},{"e15bcf079e8ac12a":"dGQqH","24fcd40e646e749a":"3PeyB"}],"3PeyB":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.farsiLocales = exports.englishLocales = exports.dotDecimal = exports.decimal = exports.commaDecimal = exports.bengaliLocales = exports.arabicLocales = exports.alphanumeric = exports.alpha = void 0;
var alpha = exports.alpha = {
    'en-US': /^[A-Z]+$/i,
    'az-AZ': /^[A-VXYZÇƏĞİıÖŞÜ]+$/i,
    'bg-BG': /^[А-Я]+$/i,
    'cs-CZ': /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
    'da-DK': /^[A-ZÆØÅ]+$/i,
    'de-DE': /^[A-ZÄÖÜß]+$/i,
    'el-GR': /^[Α-ώ]+$/i,
    'es-ES': /^[A-ZÁÉÍÑÓÚÜ]+$/i,
    'fa-IR': /^[ابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی]+$/i,
    'fi-FI': /^[A-ZÅÄÖ]+$/i,
    'fr-FR': /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
    'it-IT': /^[A-ZÀÉÈÌÎÓÒÙ]+$/i,
    'ja-JP': /^[ぁ-んァ-ヶｦ-ﾟ一-龠ー・。、]+$/i,
    'nb-NO': /^[A-ZÆØÅ]+$/i,
    'nl-NL': /^[A-ZÁÉËÏÓÖÜÚ]+$/i,
    'nn-NO': /^[A-ZÆØÅ]+$/i,
    'hu-HU': /^[A-ZÁÉÍÓÖŐÚÜŰ]+$/i,
    'pl-PL': /^[A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
    'pt-PT': /^[A-ZÃÁÀÂÄÇÉÊËÍÏÕÓÔÖÚÜ]+$/i,
    'ru-RU': /^[А-ЯЁ]+$/i,
    'kk-KZ': /^[А-ЯЁ\u04D8\u04B0\u0406\u04A2\u0492\u04AE\u049A\u04E8\u04BA]+$/i,
    'sl-SI': /^[A-ZČĆĐŠŽ]+$/i,
    'sk-SK': /^[A-ZÁČĎÉÍŇÓŠŤÚÝŽĹŔĽÄÔ]+$/i,
    'sr-RS@latin': /^[A-ZČĆŽŠĐ]+$/i,
    'sr-RS': /^[А-ЯЂЈЉЊЋЏ]+$/i,
    'sv-SE': /^[A-ZÅÄÖ]+$/i,
    'th-TH': /^[ก-๐\s]+$/i,
    'tr-TR': /^[A-ZÇĞİıÖŞÜ]+$/i,
    'uk-UA': /^[А-ЩЬЮЯЄIЇҐі]+$/i,
    'vi-VN': /^[A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴĐÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸ]+$/i,
    'ko-KR': /^[ㄱ-ㅎㅏ-ㅣ가-힣]*$/,
    'ku-IQ': /^[ئابپتجچحخدرڕزژسشعغفڤقکگلڵمنوۆھەیێيطؤثآإأكضصةظذ]+$/i,
    ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/,
    he: /^[א-ת]+$/,
    fa: /^['آاءأؤئبپتثجچحخدذرزژسشصضطظعغفقکگلمنوهةی']+$/i,
    bn: /^['ঀঁংঃঅআইঈউঊঋঌএঐওঔকখগঘঙচছজঝঞটঠডঢণতথদধনপফবভমযরলশষসহ়ঽািীুূৃৄেৈোৌ্ৎৗড়ঢ়য়ৠৡৢৣৰৱ৲৳৴৵৶৷৸৹৺৻']+$/,
    eo: /^[ABCĈD-GĜHĤIJĴK-PRSŜTUŬVZ]+$/i,
    'hi-IN': /^[\u0900-\u0961]+[\u0972-\u097F]*$/i,
    'si-LK': /^[\u0D80-\u0DFF]+$/
};
var alphanumeric = exports.alphanumeric = {
    'en-US': /^[0-9A-Z]+$/i,
    'az-AZ': /^[0-9A-VXYZÇƏĞİıÖŞÜ]+$/i,
    'bg-BG': /^[0-9А-Я]+$/i,
    'cs-CZ': /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
    'da-DK': /^[0-9A-ZÆØÅ]+$/i,
    'de-DE': /^[0-9A-ZÄÖÜß]+$/i,
    'el-GR': /^[0-9Α-ω]+$/i,
    'es-ES': /^[0-9A-ZÁÉÍÑÓÚÜ]+$/i,
    'fi-FI': /^[0-9A-ZÅÄÖ]+$/i,
    'fr-FR': /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
    'it-IT': /^[0-9A-ZÀÉÈÌÎÓÒÙ]+$/i,
    'ja-JP': /^[0-9０-９ぁ-んァ-ヶｦ-ﾟ一-龠ー・。、]+$/i,
    'hu-HU': /^[0-9A-ZÁÉÍÓÖŐÚÜŰ]+$/i,
    'nb-NO': /^[0-9A-ZÆØÅ]+$/i,
    'nl-NL': /^[0-9A-ZÁÉËÏÓÖÜÚ]+$/i,
    'nn-NO': /^[0-9A-ZÆØÅ]+$/i,
    'pl-PL': /^[0-9A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
    'pt-PT': /^[0-9A-ZÃÁÀÂÄÇÉÊËÍÏÕÓÔÖÚÜ]+$/i,
    'ru-RU': /^[0-9А-ЯЁ]+$/i,
    'kk-KZ': /^[0-9А-ЯЁ\u04D8\u04B0\u0406\u04A2\u0492\u04AE\u049A\u04E8\u04BA]+$/i,
    'sl-SI': /^[0-9A-ZČĆĐŠŽ]+$/i,
    'sk-SK': /^[0-9A-ZÁČĎÉÍŇÓŠŤÚÝŽĹŔĽÄÔ]+$/i,
    'sr-RS@latin': /^[0-9A-ZČĆŽŠĐ]+$/i,
    'sr-RS': /^[0-9А-ЯЂЈЉЊЋЏ]+$/i,
    'sv-SE': /^[0-9A-ZÅÄÖ]+$/i,
    'th-TH': /^[ก-๙\s]+$/i,
    'tr-TR': /^[0-9A-ZÇĞİıÖŞÜ]+$/i,
    'uk-UA': /^[0-9А-ЩЬЮЯЄIЇҐі]+$/i,
    'ko-KR': /^[0-9ㄱ-ㅎㅏ-ㅣ가-힣]*$/,
    'ku-IQ': /^[٠١٢٣٤٥٦٧٨٩0-9ئابپتجچحخدرڕزژسشعغفڤقکگلڵمنوۆھەیێيطؤثآإأكضصةظذ]+$/i,
    'vi-VN': /^[0-9A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴĐÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸ]+$/i,
    ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/,
    he: /^[0-9א-ת]+$/,
    fa: /^['0-9آاءأؤئبپتثجچحخدذرزژسشصضطظعغفقکگلمنوهةی۱۲۳۴۵۶۷۸۹۰']+$/i,
    bn: /^['ঀঁংঃঅআইঈউঊঋঌএঐওঔকখগঘঙচছজঝঞটঠডঢণতথদধনপফবভমযরলশষসহ়ঽািীুূৃৄেৈোৌ্ৎৗড়ঢ়য়ৠৡৢৣ০১২৩৪৫৬৭৮৯ৰৱ৲৳৴৵৶৷৸৹৺৻']+$/,
    eo: /^[0-9ABCĈD-GĜHĤIJĴK-PRSŜTUŬVZ]+$/i,
    'hi-IN': /^[\u0900-\u0963]+[\u0966-\u097F]*$/i,
    'si-LK': /^[0-9\u0D80-\u0DFF]+$/
};
var decimal = exports.decimal = {
    'en-US': '.',
    ar: "\u066B"
};
var englishLocales = exports.englishLocales = [
    'AU',
    'GB',
    'HK',
    'IN',
    'NZ',
    'ZA',
    'ZM'
];
for(var locale, i = 0; i < englishLocales.length; i++){
    locale = "en-".concat(englishLocales[i]);
    alpha[locale] = alpha['en-US'];
    alphanumeric[locale] = alphanumeric['en-US'];
    decimal[locale] = decimal['en-US'];
}
// Source: http://www.localeplanet.com/java/
var arabicLocales = exports.arabicLocales = [
    'AE',
    'BH',
    'DZ',
    'EG',
    'IQ',
    'JO',
    'KW',
    'LB',
    'LY',
    'MA',
    'QM',
    'QA',
    'SA',
    'SD',
    'SY',
    'TN',
    'YE'
];
for(var _locale, _i = 0; _i < arabicLocales.length; _i++){
    _locale = "ar-".concat(arabicLocales[_i]);
    alpha[_locale] = alpha.ar;
    alphanumeric[_locale] = alphanumeric.ar;
    decimal[_locale] = decimal.ar;
}
var farsiLocales = exports.farsiLocales = [
    'IR',
    'AF'
];
for(var _locale2, _i2 = 0; _i2 < farsiLocales.length; _i2++){
    _locale2 = "fa-".concat(farsiLocales[_i2]);
    alphanumeric[_locale2] = alphanumeric.fa;
    decimal[_locale2] = decimal.ar;
}
var bengaliLocales = exports.bengaliLocales = [
    'BD',
    'IN'
];
for(var _locale3, _i3 = 0; _i3 < bengaliLocales.length; _i3++){
    _locale3 = "bn-".concat(bengaliLocales[_i3]);
    alpha[_locale3] = alpha.bn;
    alphanumeric[_locale3] = alphanumeric.bn;
    decimal[_locale3] = decimal['en-US'];
}
// Source: https://en.wikipedia.org/wiki/Decimal_mark
var dotDecimal = exports.dotDecimal = [
    'ar-EG',
    'ar-LB',
    'ar-LY'
];
var commaDecimal = exports.commaDecimal = [
    'bg-BG',
    'cs-CZ',
    'da-DK',
    'de-DE',
    'el-GR',
    'en-ZM',
    'eo',
    'es-ES',
    'fr-CA',
    'fr-FR',
    'id-ID',
    'it-IT',
    'ku-IQ',
    'hi-IN',
    'hu-HU',
    'nb-NO',
    'nn-NO',
    'nl-NL',
    'pl-PL',
    'pt-PT',
    'ru-RU',
    'kk-KZ',
    'si-LK',
    'sl-SI',
    'sr-RS@latin',
    'sr-RS',
    'sv-SE',
    'tr-TR',
    'uk-UA',
    'vi-VN'
];
for(var _i4 = 0; _i4 < dotDecimal.length; _i4++)decimal[dotDecimal[_i4]] = decimal['en-US'];
for(var _i5 = 0; _i5 < commaDecimal.length; _i5++)decimal[commaDecimal[_i5]] = ',';
alpha['fr-CA'] = alpha['fr-FR'];
alphanumeric['fr-CA'] = alphanumeric['fr-FR'];
alpha['pt-BR'] = alpha['pt-PT'];
alphanumeric['pt-BR'] = alphanumeric['pt-PT'];
decimal['pt-BR'] = decimal['pt-PT'];
// see #862
alpha['pl-Pl'] = alpha['pl-PL'];
alphanumeric['pl-Pl'] = alphanumeric['pl-PL'];
decimal['pl-Pl'] = decimal['pl-PL'];
// see #1455
alpha['fa-AF'] = alpha.fa;

},{}],"8rfaa":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = toInt;
var _assertString = _interopRequireDefault(require("844cad00cd361a98"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function toInt(str, radix) {
    (0, _assertString.default)(str);
    return parseInt(str, radix || 10);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"844cad00cd361a98":"dGQqH"}],"6N60y":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = toBoolean;
var _assertString = _interopRequireDefault(require("a1a6c79778bf962b"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function toBoolean(str, strict) {
    (0, _assertString.default)(str);
    if (strict) return str === '1' || /^true$/i.test(str);
    return str !== '0' && !/^false$/i.test(str) && str !== '';
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"a1a6c79778bf962b":"dGQqH"}],"iHg2k":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = equals;
var _assertString = _interopRequireDefault(require("d1a5c332af02b5b8"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function equals(str, comparison) {
    (0, _assertString.default)(str);
    return str === comparison;
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"d1a5c332af02b5b8":"dGQqH"}],"2nitJ":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = contains;
var _assertString = _interopRequireDefault(require("3e51aa762dc8c667"));
var _toString = _interopRequireDefault(require("3cd4f952bd2883fe"));
var _merge = _interopRequireDefault(require("cc59373485c7be91"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var defaulContainsOptions = {
    ignoreCase: false,
    minOccurrences: 1
};
function contains(str, elem, options) {
    (0, _assertString.default)(str);
    options = (0, _merge.default)(options, defaulContainsOptions);
    if (options.ignoreCase) return str.toLowerCase().split((0, _toString.default)(elem).toLowerCase()).length > options.minOccurrences;
    return str.split((0, _toString.default)(elem)).length > options.minOccurrences;
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"3e51aa762dc8c667":"dGQqH","3cd4f952bd2883fe":"1BTjZ","cc59373485c7be91":"c806a"}],"1BTjZ":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = toString;
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function toString(input) {
    if (_typeof(input) === 'object' && input !== null) {
        if (typeof input.toString === 'function') input = input.toString();
        else input = '[object Object]';
    } else if (input === null || typeof input === 'undefined' || isNaN(input) && !input.length) input = '';
    return String(input);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{}],"c806a":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = merge;
function merge() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var defaults = arguments.length > 1 ? arguments[1] : undefined;
    for(var key in defaults)if (typeof obj[key] === 'undefined') obj[key] = defaults[key];
    return obj;
}
module.exports = exports.default;
module.exports.default = exports.default;

},{}],"5OBn3":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = matches;
var _assertString = _interopRequireDefault(require("d910f8373decde92"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function matches(str, pattern, modifiers) {
    (0, _assertString.default)(str);
    if (Object.prototype.toString.call(pattern) !== '[object RegExp]') pattern = new RegExp(pattern, modifiers);
    return !!str.match(pattern);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"d910f8373decde92":"dGQqH"}],"25fbl":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isEmail;
var _assertString = _interopRequireDefault(require("70466717dea49b4a"));
var _isByteLength = _interopRequireDefault(require("652948654aa86386"));
var _isFQDN = _interopRequireDefault(require("6e220cda7afcfeb4"));
var _isIP = _interopRequireDefault(require("270d6e12f02c594c"));
var _merge = _interopRequireDefault(require("8c581d289b6709d2"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var default_email_options = {
    allow_display_name: false,
    allow_underscores: false,
    require_display_name: false,
    allow_utf8_local_part: true,
    require_tld: true,
    blacklisted_chars: '',
    ignore_max_length: false,
    host_blacklist: [],
    host_whitelist: []
};
/* eslint-disable max-len */ /* eslint-disable no-control-regex */ var splitNameAddress = /^([^\x00-\x1F\x7F-\x9F\cX]+)</i;
var emailUserPart = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i;
var gmailUserPart = /^[a-z\d]+$/;
var quotedEmailUser = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i;
var emailUserUtf8Part = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A1-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i;
var quotedEmailUserUtf8 = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;
var defaultMaxEmailLength = 254;
/* eslint-enable max-len */ /* eslint-enable no-control-regex */ /**
 * Validate display name according to the RFC2822: https://tools.ietf.org/html/rfc2822#appendix-A.1.2
 * @param {String} display_name
 */ function validateDisplayName(display_name) {
    var display_name_without_quotes = display_name.replace(/^"(.+)"$/, '$1');
    // display name with only spaces is not valid
    if (!display_name_without_quotes.trim()) return false;
    // check whether display name contains illegal character
    var contains_illegal = /[\.";<>]/.test(display_name_without_quotes);
    if (contains_illegal) {
        // if contains illegal characters,
        // must to be enclosed in double-quotes, otherwise it's not a valid display name
        if (display_name_without_quotes === display_name) return false;
        // the quotes in display name must start with character symbol \
        var all_start_with_back_slash = display_name_without_quotes.split('"').length === display_name_without_quotes.split('\\"').length;
        if (!all_start_with_back_slash) return false;
    }
    return true;
}
function isEmail(str, options) {
    (0, _assertString.default)(str);
    options = (0, _merge.default)(options, default_email_options);
    if (options.require_display_name || options.allow_display_name) {
        var display_email = str.match(splitNameAddress);
        if (display_email) {
            var display_name = display_email[1];
            // Remove display name and angle brackets to get email address
            // Can be done in the regex but will introduce a ReDOS (See  #1597 for more info)
            str = str.replace(display_name, '').replace(/(^<|>$)/g, '');
            // sometimes need to trim the last space to get the display name
            // because there may be a space between display name and email address
            // eg. myname <address@gmail.com>
            // the display name is `myname` instead of `myname `, so need to trim the last space
            if (display_name.endsWith(' ')) display_name = display_name.slice(0, -1);
            if (!validateDisplayName(display_name)) return false;
        } else if (options.require_display_name) return false;
    }
    if (!options.ignore_max_length && str.length > defaultMaxEmailLength) return false;
    var parts = str.split('@');
    var domain = parts.pop();
    var lower_domain = domain.toLowerCase();
    if (options.host_blacklist.includes(lower_domain)) return false;
    if (options.host_whitelist.length > 0 && !options.host_whitelist.includes(lower_domain)) return false;
    var user = parts.join('@');
    if (options.domain_specific_validation && (lower_domain === 'gmail.com' || lower_domain === 'googlemail.com')) {
        /*
      Previously we removed dots for gmail addresses before validating.
      This was removed because it allows `multiple..dots@gmail.com`
      to be reported as valid, but it is not.
      Gmail only normalizes single dots, removing them from here is pointless,
      should be done in normalizeEmail
    */ user = user.toLowerCase();
        // Removing sub-address from username before gmail validation
        var username = user.split('+')[0];
        // Dots are not included in gmail length restriction
        if (!(0, _isByteLength.default)(username.replace(/\./g, ''), {
            min: 6,
            max: 30
        })) return false;
        var _user_parts = username.split('.');
        for(var i = 0; i < _user_parts.length; i++){
            if (!gmailUserPart.test(_user_parts[i])) return false;
        }
    }
    if (options.ignore_max_length === false && (!(0, _isByteLength.default)(user, {
        max: 64
    }) || !(0, _isByteLength.default)(domain, {
        max: 254
    }))) return false;
    if (!(0, _isFQDN.default)(domain, {
        require_tld: options.require_tld,
        ignore_max_length: options.ignore_max_length,
        allow_underscores: options.allow_underscores
    })) {
        if (!options.allow_ip_domain) return false;
        if (!(0, _isIP.default)(domain)) {
            if (!domain.startsWith('[') || !domain.endsWith(']')) return false;
            var noBracketdomain = domain.slice(1, -1);
            if (noBracketdomain.length === 0 || !(0, _isIP.default)(noBracketdomain)) return false;
        }
    }
    if (user[0] === '"') {
        user = user.slice(1, user.length - 1);
        return options.allow_utf8_local_part ? quotedEmailUserUtf8.test(user) : quotedEmailUser.test(user);
    }
    var pattern = options.allow_utf8_local_part ? emailUserUtf8Part : emailUserPart;
    var user_parts = user.split('.');
    for(var _i = 0; _i < user_parts.length; _i++){
        if (!pattern.test(user_parts[_i])) return false;
    }
    if (options.blacklisted_chars) {
        if (user.search(new RegExp("[".concat(options.blacklisted_chars, "]+"), 'g')) !== -1) return false;
    }
    return true;
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"70466717dea49b4a":"dGQqH","652948654aa86386":"agQQk","6e220cda7afcfeb4":"2rD1M","270d6e12f02c594c":"aH7jH","8c581d289b6709d2":"c806a"}],"agQQk":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isByteLength;
var _assertString = _interopRequireDefault(require("8709d4cd1991bf25"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
/* eslint-disable prefer-rest-params */ function isByteLength(str, options) {
    (0, _assertString.default)(str);
    var min;
    var max;
    if (_typeof(options) === 'object') {
        min = options.min || 0;
        max = options.max;
    } else {
        // backwards compatibility: isByteLength(str, min [, max])
        min = arguments[1];
        max = arguments[2];
    }
    var len = encodeURI(str).split(/%..|./).length - 1;
    return len >= min && (typeof max === 'undefined' || len <= max);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"8709d4cd1991bf25":"dGQqH"}],"2rD1M":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isFQDN;
var _assertString = _interopRequireDefault(require("9ef49c576c3eb32d"));
var _merge = _interopRequireDefault(require("f628cd123e86515c"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var default_fqdn_options = {
    require_tld: true,
    allow_underscores: false,
    allow_trailing_dot: false,
    allow_numeric_tld: false,
    allow_wildcard: false,
    ignore_max_length: false
};
function isFQDN(str, options) {
    (0, _assertString.default)(str);
    options = (0, _merge.default)(options, default_fqdn_options);
    /* Remove the optional trailing dot before checking validity */ if (options.allow_trailing_dot && str[str.length - 1] === '.') str = str.substring(0, str.length - 1);
    /* Remove the optional wildcard before checking validity */ if (options.allow_wildcard === true && str.indexOf('*.') === 0) str = str.substring(2);
    var parts = str.split('.');
    var tld = parts[parts.length - 1];
    if (options.require_tld) {
        // disallow fqdns without tld
        if (parts.length < 2) return false;
        if (!options.allow_numeric_tld && !/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(tld)) return false;
        // disallow spaces
        if (/\s/.test(tld)) return false;
    }
    // reject numeric TLDs
    if (!options.allow_numeric_tld && /^\d+$/.test(tld)) return false;
    return parts.every(function(part) {
        if (part.length > 63 && !options.ignore_max_length) return false;
        if (!/^[a-z_\u00a1-\uffff0-9-]+$/i.test(part)) return false;
        // disallow full-width chars
        if (/[\uff01-\uff5e]/.test(part)) return false;
        // disallow parts starting or ending with hyphen
        if (/^-|-$/.test(part)) return false;
        if (!options.allow_underscores && /_/.test(part)) return false;
        return true;
    });
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"9ef49c576c3eb32d":"dGQqH","f628cd123e86515c":"c806a"}],"aH7jH":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isIP;
var _assertString = _interopRequireDefault(require("35aed34e3042a858"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
/**
11.3.  Examples

   The following addresses

             fe80::1234 (on the 1st link of the node)
             ff02::5678 (on the 5th link of the node)
             ff08::9abc (on the 10th organization of the node)

   would be represented as follows:

             fe80::1234%1
             ff02::5678%5
             ff08::9abc%10

   (Here we assume a natural translation from a zone index to the
   <zone_id> part, where the Nth zone of any scope is translated into
   "N".)

   If we use interface names as <zone_id>, those addresses could also be
   represented as follows:

            fe80::1234%ne0
            ff02::5678%pvc1.3
            ff08::9abc%interface10

   where the interface "ne0" belongs to the 1st link, "pvc1.3" belongs
   to the 5th link, and "interface10" belongs to the 10th organization.
 * * */ var IPv4SegmentFormat = '(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])';
var IPv4AddressFormat = "(".concat(IPv4SegmentFormat, "[.]){3}").concat(IPv4SegmentFormat);
var IPv4AddressRegExp = new RegExp("^".concat(IPv4AddressFormat, "$"));
var IPv6SegmentFormat = '(?:[0-9a-fA-F]{1,4})';
var IPv6AddressRegExp = new RegExp('^(' + "(?:".concat(IPv6SegmentFormat, ":){7}(?:").concat(IPv6SegmentFormat, "|:)|") + "(?:".concat(IPv6SegmentFormat, ":){6}(?:").concat(IPv4AddressFormat, "|:").concat(IPv6SegmentFormat, "|:)|") + "(?:".concat(IPv6SegmentFormat, ":){5}(?::").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,2}|:)|") + "(?:".concat(IPv6SegmentFormat, ":){4}(?:(:").concat(IPv6SegmentFormat, "){0,1}:").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,3}|:)|") + "(?:".concat(IPv6SegmentFormat, ":){3}(?:(:").concat(IPv6SegmentFormat, "){0,2}:").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,4}|:)|") + "(?:".concat(IPv6SegmentFormat, ":){2}(?:(:").concat(IPv6SegmentFormat, "){0,3}:").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,5}|:)|") + "(?:".concat(IPv6SegmentFormat, ":){1}(?:(:").concat(IPv6SegmentFormat, "){0,4}:").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,6}|:)|") + "(?::((?::".concat(IPv6SegmentFormat, "){0,5}:").concat(IPv4AddressFormat, "|(?::").concat(IPv6SegmentFormat, "){1,7}|:))") + ')(%[0-9a-zA-Z-.:]{1,})?$');
function isIP(str) {
    var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    (0, _assertString.default)(str);
    version = String(version);
    if (!version) return isIP(str, 4) || isIP(str, 6);
    if (version === '4') return IPv4AddressRegExp.test(str);
    if (version === '6') return IPv6AddressRegExp.test(str);
    return false;
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"35aed34e3042a858":"dGQqH"}],"c1NyA":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isURL;
var _assertString = _interopRequireDefault(require("8a7ec28029711837"));
var _isFQDN = _interopRequireDefault(require("5dcdad4f58bfb9c9"));
var _isIP = _interopRequireDefault(require("138e1db08b22dcdd"));
var _merge = _interopRequireDefault(require("342189f79ec30088"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
        var e, n, i, u, a = [], f = !0, o = !1;
        try {
            if (i = (t = t.call(r)).next, 0 === l) {
                if (Object(t) !== t) return;
                f = !1;
            } else for(; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
        } catch (r) {
            o = !0, n = r;
        } finally{
            try {
                if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
            } finally{
                if (o) throw n;
            }
        }
        return a;
    }
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
/*
options for isURL method

require_protocol - if set as true isURL will return false if protocol is not present in the URL
require_valid_protocol - isURL will check if the URL's protocol is present in the protocols option
protocols - valid protocols can be modified with this option
require_host - if set as false isURL will not check if host is present in the URL
require_port - if set as true isURL will check if port is present in the URL
allow_protocol_relative_urls - if set as true protocol relative URLs will be allowed
validate_length - if set as false isURL will skip string length validation (IE maximum is 2083)

*/ var default_url_options = {
    protocols: [
        'http',
        'https',
        'ftp'
    ],
    require_tld: true,
    require_protocol: false,
    require_host: true,
    require_port: false,
    require_valid_protocol: true,
    allow_underscores: false,
    allow_trailing_dot: false,
    allow_protocol_relative_urls: false,
    allow_fragments: true,
    allow_query_components: true,
    validate_length: true
};
var wrapped_ipv6 = /^\[([^\]]+)\](?::([0-9]+))?$/;
function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
}
function checkHost(host, matches) {
    for(var i = 0; i < matches.length; i++){
        var match = matches[i];
        if (host === match || isRegExp(match) && match.test(host)) return true;
    }
    return false;
}
function isURL(url, options) {
    (0, _assertString.default)(url);
    if (!url || /[\s<>]/.test(url)) return false;
    if (url.indexOf('mailto:') === 0) return false;
    options = (0, _merge.default)(options, default_url_options);
    if (options.validate_length && url.length >= 2083) return false;
    if (!options.allow_fragments && url.includes('#')) return false;
    if (!options.allow_query_components && (url.includes('?') || url.includes('&'))) return false;
    var protocol, auth, host, hostname, port, port_str, split, ipv6;
    split = url.split('#');
    url = split.shift();
    split = url.split('?');
    url = split.shift();
    split = url.split('://');
    if (split.length > 1) {
        protocol = split.shift().toLowerCase();
        if (options.require_valid_protocol && options.protocols.indexOf(protocol) === -1) return false;
    } else if (options.require_protocol) return false;
    else if (url.slice(0, 2) === '//') {
        if (!options.allow_protocol_relative_urls) return false;
        split[0] = url.slice(2);
    }
    url = split.join('://');
    if (url === '') return false;
    split = url.split('/');
    url = split.shift();
    if (url === '' && !options.require_host) return true;
    split = url.split('@');
    if (split.length > 1) {
        if (options.disallow_auth) return false;
        if (split[0] === '') return false;
        auth = split.shift();
        if (auth.indexOf(':') >= 0 && auth.split(':').length > 2) return false;
        var _auth$split = auth.split(':'), _auth$split2 = _slicedToArray(_auth$split, 2), user = _auth$split2[0], password = _auth$split2[1];
        if (user === '' && password === '') return false;
    }
    hostname = split.join('@');
    port_str = null;
    ipv6 = null;
    var ipv6_match = hostname.match(wrapped_ipv6);
    if (ipv6_match) {
        host = '';
        ipv6 = ipv6_match[1];
        port_str = ipv6_match[2] || null;
    } else {
        split = hostname.split(':');
        host = split.shift();
        if (split.length) port_str = split.join(':');
    }
    if (port_str !== null && port_str.length > 0) {
        port = parseInt(port_str, 10);
        if (!/^[0-9]+$/.test(port_str) || port <= 0 || port > 65535) return false;
    } else if (options.require_port) return false;
    if (options.host_whitelist) return checkHost(host, options.host_whitelist);
    if (host === '' && !options.require_host) return true;
    if (!(0, _isIP.default)(host) && !(0, _isFQDN.default)(host, options) && (!ipv6 || !(0, _isIP.default)(ipv6, 6))) return false;
    host = host || ipv6;
    if (options.host_blacklist && checkHost(host, options.host_blacklist)) return false;
    return true;
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"8a7ec28029711837":"dGQqH","5dcdad4f58bfb9c9":"2rD1M","138e1db08b22dcdd":"aH7jH","342189f79ec30088":"c806a"}],"26Ud6":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isMACAddress;
var _assertString = _interopRequireDefault(require("79312c853868713f"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var macAddress48 = /^(?:[0-9a-fA-F]{2}([-:\s]))([0-9a-fA-F]{2}\1){4}([0-9a-fA-F]{2})$/;
var macAddress48NoSeparators = /^([0-9a-fA-F]){12}$/;
var macAddress48WithDots = /^([0-9a-fA-F]{4}\.){2}([0-9a-fA-F]{4})$/;
var macAddress64 = /^(?:[0-9a-fA-F]{2}([-:\s]))([0-9a-fA-F]{2}\1){6}([0-9a-fA-F]{2})$/;
var macAddress64NoSeparators = /^([0-9a-fA-F]){16}$/;
var macAddress64WithDots = /^([0-9a-fA-F]{4}\.){3}([0-9a-fA-F]{4})$/;
function isMACAddress(str, options) {
    (0, _assertString.default)(str);
    if (options !== null && options !== void 0 && options.eui) options.eui = String(options.eui);
    /**
   * @deprecated `no_colons` TODO: remove it in the next major
  */ if (options !== null && options !== void 0 && options.no_colons || options !== null && options !== void 0 && options.no_separators) {
        if (options.eui === '48') return macAddress48NoSeparators.test(str);
        if (options.eui === '64') return macAddress64NoSeparators.test(str);
        return macAddress48NoSeparators.test(str) || macAddress64NoSeparators.test(str);
    }
    if ((options === null || options === void 0 ? void 0 : options.eui) === '48') return macAddress48.test(str) || macAddress48WithDots.test(str);
    if ((options === null || options === void 0 ? void 0 : options.eui) === '64') return macAddress64.test(str) || macAddress64WithDots.test(str);
    return isMACAddress(str, {
        eui: '48'
    }) || isMACAddress(str, {
        eui: '64'
    });
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"79312c853868713f":"dGQqH"}],"jsDgg":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isIPRange;
var _assertString = _interopRequireDefault(require("49e430a37cae71ba"));
var _isIP = _interopRequireDefault(require("92f9021554c592ab"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var subnetMaybe = /^\d{1,3}$/;
var v4Subnet = 32;
var v6Subnet = 128;
function isIPRange(str) {
    var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    (0, _assertString.default)(str);
    var parts = str.split('/');
    // parts[0] -> ip, parts[1] -> subnet
    if (parts.length !== 2) return false;
    if (!subnetMaybe.test(parts[1])) return false;
    // Disallow preceding 0 i.e. 01, 02, ...
    if (parts[1].length > 1 && parts[1].startsWith('0')) return false;
    var isValidIP = (0, _isIP.default)(parts[0], version);
    if (!isValidIP) return false;
    // Define valid subnet according to IP's version
    var expectedSubnet = null;
    switch(String(version)){
        case '4':
            expectedSubnet = v4Subnet;
            break;
        case '6':
            expectedSubnet = v6Subnet;
            break;
        default:
            expectedSubnet = (0, _isIP.default)(parts[0], '6') ? v6Subnet : v4Subnet;
    }
    return parts[1] <= expectedSubnet && parts[1] >= 0;
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"49e430a37cae71ba":"dGQqH","92f9021554c592ab":"aH7jH"}],"243yZ":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isDate;
var _merge = _interopRequireDefault(require("21ec486863c5ab2"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
        var e, n, i, u, a = [], f = !0, o = !1;
        try {
            if (i = (t = t.call(r)).next, 0 === l) {
                if (Object(t) !== t) return;
                f = !1;
            } else for(; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
        } catch (r) {
            o = !0, n = r;
        } finally{
            try {
                if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
            } finally{
                if (o) throw n;
            }
        }
        return a;
    }
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
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
            it = it.call(o);
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
var default_date_options = {
    format: 'YYYY/MM/DD',
    delimiters: [
        '/',
        '-'
    ],
    strictMode: false
};
function isValidFormat(format) {
    return /(^(y{4}|y{2})[.\/-](m{1,2})[.\/-](d{1,2})$)|(^(m{1,2})[.\/-](d{1,2})[.\/-]((y{4}|y{2})$))|(^(d{1,2})[.\/-](m{1,2})[.\/-]((y{4}|y{2})$))/gi.test(format);
}
function zip(date, format) {
    var zippedArr = [], len = Math.min(date.length, format.length);
    for(var i = 0; i < len; i++)zippedArr.push([
        date[i],
        format[i]
    ]);
    return zippedArr;
}
function isDate(input, options) {
    if (typeof options === 'string') // Allow backward compatibility for old format isDate(input [, format])
    options = (0, _merge.default)({
        format: options
    }, default_date_options);
    else options = (0, _merge.default)(options, default_date_options);
    if (typeof input === 'string' && isValidFormat(options.format)) {
        var formatDelimiter = options.delimiters.find(function(delimiter) {
            return options.format.indexOf(delimiter) !== -1;
        });
        var dateDelimiter = options.strictMode ? formatDelimiter : options.delimiters.find(function(delimiter) {
            return input.indexOf(delimiter) !== -1;
        });
        var dateAndFormat = zip(input.split(dateDelimiter), options.format.toLowerCase().split(formatDelimiter));
        var dateObj = {};
        var _iterator = _createForOfIteratorHelper(dateAndFormat), _step;
        try {
            for(_iterator.s(); !(_step = _iterator.n()).done;){
                var _step$value = _slicedToArray(_step.value, 2), dateWord = _step$value[0], formatWord = _step$value[1];
                if (dateWord.length !== formatWord.length) return false;
                dateObj[formatWord.charAt(0)] = dateWord;
            }
        } catch (err) {
            _iterator.e(err);
        } finally{
            _iterator.f();
        }
        var fullYear = dateObj.y;
        // Check if the year starts with a hyphen
        if (fullYear.startsWith('-')) return false; // Hyphen before year is not allowed
        if (dateObj.y.length === 2) {
            var parsedYear = parseInt(dateObj.y, 10);
            if (isNaN(parsedYear)) return false;
            var currentYearLastTwoDigits = new Date().getFullYear() % 100;
            if (parsedYear < currentYearLastTwoDigits) fullYear = "20".concat(dateObj.y);
            else fullYear = "19".concat(dateObj.y);
        }
        var month = dateObj.m;
        if (dateObj.m.length === 1) month = "0".concat(dateObj.m);
        var day = dateObj.d;
        if (dateObj.d.length === 1) day = "0".concat(dateObj.d);
        return new Date("".concat(fullYear, "-").concat(month, "-").concat(day, "T00:00:00.000Z")).getUTCDate() === +dateObj.d;
    }
    if (!options.strictMode) return Object.prototype.toString.call(input) === '[object Date]' && isFinite(input);
    return false;
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"21ec486863c5ab2":"c806a"}],"dh5pG":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isTime;
var _merge = _interopRequireDefault(require("26fc1ee165383c3f"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var default_time_options = {
    hourFormat: 'hour24',
    mode: 'default'
};
var formats = {
    hour24: {
        default: /^([01]?[0-9]|2[0-3]):([0-5][0-9])$/,
        withSeconds: /^([01]?[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/
    },
    hour12: {
        default: /^(0?[1-9]|1[0-2]):([0-5][0-9]) (A|P)M$/,
        withSeconds: /^(0?[1-9]|1[0-2]):([0-5][0-9]):([0-5][0-9]) (A|P)M$/
    }
};
function isTime(input, options) {
    options = (0, _merge.default)(options, default_time_options);
    if (typeof input !== 'string') return false;
    return formats[options.hourFormat][options.mode].test(input);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"26fc1ee165383c3f":"c806a"}],"iM2v3":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isBoolean;
var _assertString = _interopRequireDefault(require("e4a745c2125b138a"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var defaultOptions = {
    loose: false
};
var strictBooleans = [
    'true',
    'false',
    '1',
    '0'
];
var looseBooleans = [].concat(strictBooleans, [
    'yes',
    'no'
]);
function isBoolean(str) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOptions;
    (0, _assertString.default)(str);
    if (options.loose) return looseBooleans.includes(str.toLowerCase());
    return strictBooleans.includes(str);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"e4a745c2125b138a":"dGQqH"}],"izksE":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isLocale;
var _assertString = _interopRequireDefault(require("cbb9231b4b7081aa"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
/*
  = 3ALPHA              ; selected ISO 639 codes
    *2("-" 3ALPHA)      ; permanently reserved
 */ var extlang = '([A-Za-z]{3}(-[A-Za-z]{3}){0,2})';
/*
  = 2*3ALPHA            ; shortest ISO 639 code
    ["-" extlang]       ; sometimes followed by
                        ; extended language subtags
  / 4ALPHA              ; or reserved for future use
  / 5*8ALPHA            ; or registered language subtag
 */ var language = "(([a-zA-Z]{2,3}(-".concat(extlang, ")?)|([a-zA-Z]{5,8}))");
/*
  = 4ALPHA              ; ISO 15924 code
 */ var script = '([A-Za-z]{4})';
/*
  = 2ALPHA              ; ISO 3166-1 code
  / 3DIGIT              ; UN M.49 code
 */ var region = '([A-Za-z]{2}|\\d{3})';
/*
  = 5*8alphanum         ; registered variants
  / (DIGIT 3alphanum)
 */ var variant = '([A-Za-z0-9]{5,8}|(\\d[A-Z-a-z0-9]{3}))';
/*
  = DIGIT               ; 0 - 9
  / %x41-57             ; A - W
  / %x59-5A             ; Y - Z
  / %x61-77             ; a - w
  / %x79-7A             ; y - z
 */ var singleton = '(\\d|[A-W]|[Y-Z]|[a-w]|[y-z])';
/*
  = singleton 1*("-" (2*8alphanum))
                        ; Single alphanumerics
                        ; "x" reserved for private use
 */ var extension = "(".concat(singleton, "(-[A-Za-z0-9]{2,8})+)");
/*
  = "x" 1*("-" (1*8alphanum))
 */ var privateuse = '(x(-[A-Za-z0-9]{1,8})+)';
// irregular tags do not match the 'langtag' production and would not
// otherwise be considered 'well-formed'. These tags are all valid, but
// most are deprecated in favor of more modern subtags or subtag combination
var irregular = "((en-GB-oed)|(i-ami)|(i-bnn)|(i-default)|(i-enochian)|(i-hak)|(i-klingon)|(i-lux)|(i-mingo)|(i-navajo)|(i-pwn)|(i-tao)|(i-tay)|(i-tsu)|(sgn-BE-FR)|(sgn-BE-NL)|(sgn-CH-DE))";
// regular tags match the 'langtag' production, but their subtags are not
// extended language or variant subtags: their meaning is defined by
// their registration and all of these are deprecated in favor of a more
// modern subtag or sequence of subtags
var regular = "((art-lojban)|(cel-gaulish)|(no-bok)|(no-nyn)|(zh-guoyu)|(zh-hakka)|(zh-min)|(zh-min-nan)|(zh-xiang))";
/*
  = irregular           ; non-redundant tags registered
  / regular             ; during the RFC 3066 era

 */ var grandfathered = "(".concat(irregular, "|").concat(regular, ")");
/*
  RFC 5646 defines delimitation of subtags via a hyphen:

      "Subtag" refers to a specific section of a tag, delimited by a
      hyphen, such as the subtags 'zh', 'Hant', and 'CN' in the tag "zh-
      Hant-CN".  Examples of subtags in this document are enclosed in
      single quotes ('Hant')

  However, we need to add "_" to maintain the existing behaviour.
 */ var delimiter = '(-|_)';
/*
  = language
    ["-" script]
    ["-" region]
    *("-" variant)
    *("-" extension)
    ["-" privateuse]
 */ var langtag = "".concat(language, "(").concat(delimiter).concat(script, ")?(").concat(delimiter).concat(region, ")?(").concat(delimiter).concat(variant, ")*(").concat(delimiter).concat(extension, ")*(").concat(delimiter).concat(privateuse, ")?");
/*
  Regex implementation based on BCP RFC 5646
  Tags for Identifying Languages
  https://www.rfc-editor.org/rfc/rfc5646.html
 */ var languageTagRegex = new RegExp("(^".concat(privateuse, "$)|(^").concat(grandfathered, "$)|(^").concat(langtag, "$)"));
function isLocale(str) {
    (0, _assertString.default)(str);
    return languageTagRegex.test(str);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"cbb9231b4b7081aa":"dGQqH"}],"ilZVE":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isAbaRouting;
var _assertString = _interopRequireDefault(require("b1d6075922e8c95"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
// http://www.brainjar.com/js/validation/
// https://www.aba.com/news-research/research-analysis/routing-number-policy-procedures
// series reserved for future use are excluded
var isRoutingReg = /^(?!(1[3-9])|(20)|(3[3-9])|(4[0-9])|(5[0-9])|(60)|(7[3-9])|(8[1-9])|(9[0-2])|(9[3-9]))[0-9]{9}$/;
function isAbaRouting(str) {
    (0, _assertString.default)(str);
    if (!isRoutingReg.test(str)) return false;
    var checkSumVal = 0;
    for(var i = 0; i < str.length; i++){
        if (i % 3 === 0) checkSumVal += str[i] * 3;
        else if (i % 3 === 1) checkSumVal += str[i] * 7;
        else checkSumVal += str[i] * 1;
    }
    return checkSumVal % 10 === 0;
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"b1d6075922e8c95":"dGQqH"}],"89f7h":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isAlpha;
exports.locales = void 0;
var _assertString = _interopRequireDefault(require("3de6ada39536fbf2"));
var _alpha = require("d4074828d7de2cf");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function isAlpha(_str) {
    var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en-US';
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    (0, _assertString.default)(_str);
    var str = _str;
    var ignore = options.ignore;
    if (ignore) {
        if (ignore instanceof RegExp) str = str.replace(ignore, '');
        else if (typeof ignore === 'string') str = str.replace(new RegExp("[".concat(ignore.replace(/[-[\]{}()*+?.,\\^$|#\\s]/g, '\\$&'), "]"), 'g'), ''); // escape regex for ignore
        else throw new Error('ignore should be instance of a String or RegExp');
    }
    if (locale in _alpha.alpha) return _alpha.alpha[locale].test(str);
    throw new Error("Invalid locale '".concat(locale, "'"));
}
var locales = exports.locales = Object.keys(_alpha.alpha);

},{"3de6ada39536fbf2":"dGQqH","d4074828d7de2cf":"3PeyB"}],"bzLj5":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isAlphanumeric;
exports.locales = void 0;
var _assertString = _interopRequireDefault(require("520f6a53265a5a16"));
var _alpha = require("ed60b4f95488eea0");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function isAlphanumeric(_str) {
    var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en-US';
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    (0, _assertString.default)(_str);
    var str = _str;
    var ignore = options.ignore;
    if (ignore) {
        if (ignore instanceof RegExp) str = str.replace(ignore, '');
        else if (typeof ignore === 'string') str = str.replace(new RegExp("[".concat(ignore.replace(/[-[\]{}()*+?.,\\^$|#\\s]/g, '\\$&'), "]"), 'g'), ''); // escape regex for ignore
        else throw new Error('ignore should be instance of a String or RegExp');
    }
    if (locale in _alpha.alphanumeric) return _alpha.alphanumeric[locale].test(str);
    throw new Error("Invalid locale '".concat(locale, "'"));
}
var locales = exports.locales = Object.keys(_alpha.alphanumeric);

},{"520f6a53265a5a16":"dGQqH","ed60b4f95488eea0":"3PeyB"}],"dYHig":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isNumeric;
var _assertString = _interopRequireDefault(require("e19f95f48f597618"));
var _alpha = require("730cce541a5e2944");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var numericNoSymbols = /^[0-9]+$/;
function isNumeric(str, options) {
    (0, _assertString.default)(str);
    if (options && options.no_symbols) return numericNoSymbols.test(str);
    return new RegExp("^[+-]?([0-9]*[".concat((options || {}).locale ? _alpha.decimal[options.locale] : '.', "])?[0-9]+$")).test(str);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"e19f95f48f597618":"dGQqH","730cce541a5e2944":"3PeyB"}],"eZLKj":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isPassportNumber;
var _assertString = _interopRequireDefault(require("714539f615d17435"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
/**
 * Reference:
 * https://en.wikipedia.org/ -- Wikipedia
 * https://docs.microsoft.com/en-us/microsoft-365/compliance/eu-passport-number -- EU Passport Number
 * https://countrycode.org/ -- Country Codes
 */ var passportRegexByCountryCode = {
    AM: /^[A-Z]{2}\d{7}$/,
    // ARMENIA
    AR: /^[A-Z]{3}\d{6}$/,
    // ARGENTINA
    AT: /^[A-Z]\d{7}$/,
    // AUSTRIA
    AU: /^[A-Z]\d{7}$/,
    // AUSTRALIA
    AZ: /^[A-Z]{1}\d{8}$/,
    // AZERBAIJAN
    BE: /^[A-Z]{2}\d{6}$/,
    // BELGIUM
    BG: /^\d{9}$/,
    // BULGARIA
    BR: /^[A-Z]{2}\d{6}$/,
    // BRAZIL
    BY: /^[A-Z]{2}\d{7}$/,
    // BELARUS
    CA: /^[A-Z]{2}\d{6}$/,
    // CANADA
    CH: /^[A-Z]\d{7}$/,
    // SWITZERLAND
    CN: /^G\d{8}$|^E(?![IO])[A-Z0-9]\d{7}$/,
    // CHINA [G=Ordinary, E=Electronic] followed by 8-digits, or E followed by any UPPERCASE letter (except I and O) followed by 7 digits
    CY: /^[A-Z](\d{6}|\d{8})$/,
    // CYPRUS
    CZ: /^\d{8}$/,
    // CZECH REPUBLIC
    DE: /^[CFGHJKLMNPRTVWXYZ0-9]{9}$/,
    // GERMANY
    DK: /^\d{9}$/,
    // DENMARK
    DZ: /^\d{9}$/,
    // ALGERIA
    EE: /^([A-Z]\d{7}|[A-Z]{2}\d{7})$/,
    // ESTONIA (K followed by 7-digits), e-passports have 2 UPPERCASE followed by 7 digits
    ES: /^[A-Z0-9]{2}([A-Z0-9]?)\d{6}$/,
    // SPAIN
    FI: /^[A-Z]{2}\d{7}$/,
    // FINLAND
    FR: /^\d{2}[A-Z]{2}\d{5}$/,
    // FRANCE
    GB: /^\d{9}$/,
    // UNITED KINGDOM
    GR: /^[A-Z]{2}\d{7}$/,
    // GREECE
    HR: /^\d{9}$/,
    // CROATIA
    HU: /^[A-Z]{2}(\d{6}|\d{7})$/,
    // HUNGARY
    IE: /^[A-Z0-9]{2}\d{7}$/,
    // IRELAND
    IN: /^[A-Z]{1}-?\d{7}$/,
    // INDIA
    ID: /^[A-C]\d{7}$/,
    // INDONESIA
    IR: /^[A-Z]\d{8}$/,
    // IRAN
    IS: /^(A)\d{7}$/,
    // ICELAND
    IT: /^[A-Z0-9]{2}\d{7}$/,
    // ITALY
    JM: /^[Aa]\d{7}$/,
    // JAMAICA
    JP: /^[A-Z]{2}\d{7}$/,
    // JAPAN
    KR: /^[MS]\d{8}$/,
    // SOUTH KOREA, REPUBLIC OF KOREA, [S=PS Passports, M=PM Passports]
    KZ: /^[a-zA-Z]\d{7}$/,
    // KAZAKHSTAN
    LI: /^[a-zA-Z]\d{5}$/,
    // LIECHTENSTEIN
    LT: /^[A-Z0-9]{8}$/,
    // LITHUANIA
    LU: /^[A-Z0-9]{8}$/,
    // LUXEMBURG
    LV: /^[A-Z0-9]{2}\d{7}$/,
    // LATVIA
    LY: /^[A-Z0-9]{8}$/,
    // LIBYA
    MT: /^\d{7}$/,
    // MALTA
    MZ: /^([A-Z]{2}\d{7})|(\d{2}[A-Z]{2}\d{5})$/,
    // MOZAMBIQUE
    MY: /^[AHK]\d{8}$/,
    // MALAYSIA
    MX: /^\d{10,11}$/,
    // MEXICO
    NL: /^[A-Z]{2}[A-Z0-9]{6}\d$/,
    // NETHERLANDS
    NZ: /^([Ll]([Aa]|[Dd]|[Ff]|[Hh])|[Ee]([Aa]|[Pp])|[Nn])\d{6}$/,
    // NEW ZEALAND
    PH: /^([A-Z](\d{6}|\d{7}[A-Z]))|([A-Z]{2}(\d{6}|\d{7}))$/,
    // PHILIPPINES
    PK: /^[A-Z]{2}\d{7}$/,
    // PAKISTAN
    PL: /^[A-Z]{2}\d{7}$/,
    // POLAND
    PT: /^[A-Z]\d{6}$/,
    // PORTUGAL
    RO: /^\d{8,9}$/,
    // ROMANIA
    RU: /^\d{9}$/,
    // RUSSIAN FEDERATION
    SE: /^\d{8}$/,
    // SWEDEN
    SL: /^(P)[A-Z]\d{7}$/,
    // SLOVENIA
    SK: /^[0-9A-Z]\d{7}$/,
    // SLOVAKIA
    TH: /^[A-Z]{1,2}\d{6,7}$/,
    // THAILAND
    TR: /^[A-Z]\d{8}$/,
    // TURKEY
    UA: /^[A-Z]{2}\d{6}$/,
    // UKRAINE
    US: /^\d{9}$/,
    // UNITED STATES
    ZA: /^[TAMD]\d{8}$/ // SOUTH AFRICA
};
/**
 * Check if str is a valid passport number
 * relative to provided ISO Country Code.
 *
 * @param {string} str
 * @param {string} countryCode
 * @return {boolean}
 */ function isPassportNumber(str, countryCode) {
    (0, _assertString.default)(str);
    /** Remove All Whitespaces, Convert to UPPERCASE */ var normalizedStr = str.replace(/\s/g, '').toUpperCase();
    return countryCode.toUpperCase() in passportRegexByCountryCode && passportRegexByCountryCode[countryCode].test(normalizedStr);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"714539f615d17435":"dGQqH"}],"luZnK":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isPort;
var _isInt = _interopRequireDefault(require("ceb270b40401a418"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function isPort(str) {
    return (0, _isInt.default)(str, {
        allow_leading_zeroes: false,
        min: 0,
        max: 65535
    });
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"ceb270b40401a418":"6nSfG"}],"6nSfG":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isInt;
var _assertString = _interopRequireDefault(require("8ebbd5ce24100927"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var int = /^(?:[-+]?(?:0|[1-9][0-9]*))$/;
var intLeadingZeroes = /^[-+]?[0-9]+$/;
function isInt(str, options) {
    (0, _assertString.default)(str);
    options = options || {};
    // Get the regex to use for testing, based on whether
    // leading zeroes are allowed or not.
    var regex = options.allow_leading_zeroes === false ? int : intLeadingZeroes;
    // Check min/max/lt/gt
    var minCheckPassed = !options.hasOwnProperty('min') || str >= options.min;
    var maxCheckPassed = !options.hasOwnProperty('max') || str <= options.max;
    var ltCheckPassed = !options.hasOwnProperty('lt') || str < options.lt;
    var gtCheckPassed = !options.hasOwnProperty('gt') || str > options.gt;
    return regex.test(str) && minCheckPassed && maxCheckPassed && ltCheckPassed && gtCheckPassed;
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"8ebbd5ce24100927":"dGQqH"}],"cAZl8":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isLowercase;
var _assertString = _interopRequireDefault(require("1ee2c8d2c7e88eed"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function isLowercase(str) {
    (0, _assertString.default)(str);
    return str === str.toLowerCase();
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"1ee2c8d2c7e88eed":"dGQqH"}],"6vzFM":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isUppercase;
var _assertString = _interopRequireDefault(require("f417d115d27f6ed3"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function isUppercase(str) {
    (0, _assertString.default)(str);
    return str === str.toUpperCase();
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"f417d115d27f6ed3":"dGQqH"}],"au9P4":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isIMEI;
var _assertString = _interopRequireDefault(require("8bbb7aca98af1f13"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var imeiRegexWithoutHypens = /^[0-9]{15}$/;
var imeiRegexWithHypens = /^\d{2}-\d{6}-\d{6}-\d{1}$/;
function isIMEI(str, options) {
    (0, _assertString.default)(str);
    options = options || {};
    // default regex for checking imei is the one without hyphens
    var imeiRegex = imeiRegexWithoutHypens;
    if (options.allow_hyphens) imeiRegex = imeiRegexWithHypens;
    if (!imeiRegex.test(str)) return false;
    str = str.replace(/-/g, '');
    var sum = 0, mul = 2, l = 14;
    for(var i = 0; i < l; i++){
        var digit = str.substring(l - i - 1, l - i);
        var tp = parseInt(digit, 10) * mul;
        if (tp >= 10) sum += tp % 10 + 1;
        else sum += tp;
        if (mul === 1) mul += 1;
        else mul -= 1;
    }
    var chk = (10 - sum % 10) % 10;
    if (chk !== parseInt(str.substring(14, 15), 10)) return false;
    return true;
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"8bbb7aca98af1f13":"dGQqH"}],"bTliX":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isAscii;
var _assertString = _interopRequireDefault(require("f8e3ff0e3e37b31b"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
/* eslint-disable no-control-regex */ var ascii = /^[\x00-\x7F]+$/;
/* eslint-enable no-control-regex */ function isAscii(str) {
    (0, _assertString.default)(str);
    return ascii.test(str);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"f8e3ff0e3e37b31b":"dGQqH"}],"i0ySm":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isFullWidth;
exports.fullWidth = void 0;
var _assertString = _interopRequireDefault(require("4b21a4c150410eb7"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var fullWidth = exports.fullWidth = /[^\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;
function isFullWidth(str) {
    (0, _assertString.default)(str);
    return fullWidth.test(str);
}

},{"4b21a4c150410eb7":"dGQqH"}],"k5krg":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isHalfWidth;
exports.halfWidth = void 0;
var _assertString = _interopRequireDefault(require("37381c2b4f6926f4"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var halfWidth = exports.halfWidth = /[\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;
function isHalfWidth(str) {
    (0, _assertString.default)(str);
    return halfWidth.test(str);
}

},{"37381c2b4f6926f4":"dGQqH"}],"844cT":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isVariableWidth;
var _assertString = _interopRequireDefault(require("e68b882a4d50d00f"));
var _isFullWidth = require("486edb07b731fb47");
var _isHalfWidth = require("5e30555678e0f073");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function isVariableWidth(str) {
    (0, _assertString.default)(str);
    return _isFullWidth.fullWidth.test(str) && _isHalfWidth.halfWidth.test(str);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"e68b882a4d50d00f":"dGQqH","486edb07b731fb47":"i0ySm","5e30555678e0f073":"k5krg"}],"88z7u":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isMultibyte;
var _assertString = _interopRequireDefault(require("33484d2fae22c942"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
/* eslint-disable no-control-regex */ var multibyte = /[^\x00-\x7F]/;
/* eslint-enable no-control-regex */ function isMultibyte(str) {
    (0, _assertString.default)(str);
    return multibyte.test(str);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"33484d2fae22c942":"dGQqH"}],"iU8qF":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isSemVer;
var _assertString = _interopRequireDefault(require("33759b3f8439f352"));
var _multilineRegex = _interopRequireDefault(require("98d1c477d4f11dd9"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
/**
 * Regular Expression to match
 * semantic versioning (SemVer)
 * built from multi-line, multi-parts regexp
 * Reference: https://semver.org/
 */ var semanticVersioningRegex = (0, _multilineRegex.default)([
    '^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)',
    '(?:-((?:0|[1-9]\\d*|\\d*[a-z-][0-9a-z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-z-][0-9a-z-]*))*))',
    '?(?:\\+([0-9a-z-]+(?:\\.[0-9a-z-]+)*))?$'
], 'i');
function isSemVer(str) {
    (0, _assertString.default)(str);
    return semanticVersioningRegex.test(str);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"33759b3f8439f352":"dGQqH","98d1c477d4f11dd9":"2MHwB"}],"2MHwB":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = multilineRegexp;
/**
 * Build RegExp object from an array
 * of multiple/multi-line regexp parts
 *
 * @param {string[]} parts
 * @param {string} flags
 * @return {object} - RegExp object
 */ function multilineRegexp(parts, flags) {
    var regexpAsStringLiteral = parts.join('');
    return new RegExp(regexpAsStringLiteral, flags);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{}],"1WO2m":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isSurrogatePair;
var _assertString = _interopRequireDefault(require("b613f192d52b05f1"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var surrogatePair = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;
function isSurrogatePair(str) {
    (0, _assertString.default)(str);
    return surrogatePair.test(str);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"b613f192d52b05f1":"dGQqH"}],"aRL5c":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isDecimal;
var _merge = _interopRequireDefault(require("ba000004315aa430"));
var _assertString = _interopRequireDefault(require("836c7d5280428cba"));
var _includes = _interopRequireDefault(require("438924f034eb775a"));
var _alpha = require("798092a5626c7220");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function decimalRegExp(options) {
    var regExp = new RegExp("^[-+]?([0-9]+)?(\\".concat(_alpha.decimal[options.locale], "[0-9]{").concat(options.decimal_digits, "})").concat(options.force_decimal ? '' : '?', "$"));
    return regExp;
}
var default_decimal_options = {
    force_decimal: false,
    decimal_digits: '1,',
    locale: 'en-US'
};
var blacklist = [
    '',
    '-',
    '+'
];
function isDecimal(str, options) {
    (0, _assertString.default)(str);
    options = (0, _merge.default)(options, default_decimal_options);
    if (options.locale in _alpha.decimal) return !(0, _includes.default)(blacklist, str.replace(/ /g, '')) && decimalRegExp(options).test(str);
    throw new Error("Invalid locale '".concat(options.locale, "'"));
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"ba000004315aa430":"c806a","836c7d5280428cba":"dGQqH","438924f034eb775a":"iIfym","798092a5626c7220":"3PeyB"}],"iIfym":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var includes = function includes(arr, val) {
    return arr.some(function(arrVal) {
        return val === arrVal;
    });
};
var _default = exports.default = includes;
module.exports = exports.default;
module.exports.default = exports.default;

},{}],"h00RN":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isHexadecimal;
var _assertString = _interopRequireDefault(require("85ad369b649033ec"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var hexadecimal = /^(0x|0h)?[0-9A-F]+$/i;
function isHexadecimal(str) {
    (0, _assertString.default)(str);
    return hexadecimal.test(str);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"85ad369b649033ec":"dGQqH"}],"9a3YX":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isOctal;
var _assertString = _interopRequireDefault(require("f6469bb3e63d39a"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var octal = /^(0o)?[0-7]+$/i;
function isOctal(str) {
    (0, _assertString.default)(str);
    return octal.test(str);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"f6469bb3e63d39a":"dGQqH"}],"7xKVo":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isDivisibleBy;
var _assertString = _interopRequireDefault(require("9a6c24154d57117f"));
var _toFloat = _interopRequireDefault(require("d19aeb34bda3b837"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function isDivisibleBy(str, num) {
    (0, _assertString.default)(str);
    return (0, _toFloat.default)(str) % parseInt(num, 10) === 0;
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"9a6c24154d57117f":"dGQqH","d19aeb34bda3b837":"9YAY3"}],"hm22e":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isHexColor;
var _assertString = _interopRequireDefault(require("f649663ed99a258c"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var hexcolor = /^#?([0-9A-F]{3}|[0-9A-F]{4}|[0-9A-F]{6}|[0-9A-F]{8})$/i;
function isHexColor(str) {
    (0, _assertString.default)(str);
    return hexcolor.test(str);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"f649663ed99a258c":"dGQqH"}],"ebnFs":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isRgbColor;
var _assertString = _interopRequireDefault(require("15ec9a5279ab3c75"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var rgbColor = /^rgb\((([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]),){2}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\)$/;
var rgbaColor = /^rgba\((([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]),){3}(0?\.\d|1(\.0)?|0(\.0)?)\)$/;
var rgbColorPercent = /^rgb\((([0-9]%|[1-9][0-9]%|100%),){2}([0-9]%|[1-9][0-9]%|100%)\)$/;
var rgbaColorPercent = /^rgba\((([0-9]%|[1-9][0-9]%|100%),){3}(0?\.\d|1(\.0)?|0(\.0)?)\)$/;
function isRgbColor(str) {
    var includePercentValues = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    (0, _assertString.default)(str);
    if (!includePercentValues) return rgbColor.test(str) || rgbaColor.test(str);
    return rgbColor.test(str) || rgbaColor.test(str) || rgbColorPercent.test(str) || rgbaColorPercent.test(str);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"15ec9a5279ab3c75":"dGQqH"}],"5avTM":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isHSL;
var _assertString = _interopRequireDefault(require("59f30491d05ba1cf"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var hslComma = /^hsla?\(((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?))(deg|grad|rad|turn)?(,(\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%){2}(,((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%?))?\)$/i;
var hslSpace = /^hsla?\(((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?))(deg|grad|rad|turn)?(\s(\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%){2}\s?(\/\s((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%?)\s?)?\)$/i;
function isHSL(str) {
    (0, _assertString.default)(str);
    // Strip duplicate spaces before calling the validation regex (See  #1598 for more info)
    var strippedStr = str.replace(/\s+/g, ' ').replace(/\s?(hsla?\(|\)|,)\s?/ig, '$1');
    if (strippedStr.indexOf(',') !== -1) return hslComma.test(strippedStr);
    return hslSpace.test(strippedStr);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"59f30491d05ba1cf":"dGQqH"}],"4yqQH":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isISRC;
var _assertString = _interopRequireDefault(require("b9b27d76af9c95dc"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
// see http://isrc.ifpi.org/en/isrc-standard/code-syntax
var isrc = /^[A-Z]{2}[0-9A-Z]{3}\d{2}\d{5}$/;
function isISRC(str) {
    (0, _assertString.default)(str);
    return isrc.test(str);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"b9b27d76af9c95dc":"dGQqH"}],"loKzp":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isIBAN;
exports.locales = void 0;
var _assertString = _interopRequireDefault(require("dc8c49b753cc6388"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
/**
 * List of country codes with
 * corresponding IBAN regular expression
 * Reference: https://en.wikipedia.org/wiki/International_Bank_Account_Number
 */ var ibanRegexThroughCountryCode = {
    AD: /^(AD[0-9]{2})\d{8}[A-Z0-9]{12}$/,
    AE: /^(AE[0-9]{2})\d{3}\d{16}$/,
    AL: /^(AL[0-9]{2})\d{8}[A-Z0-9]{16}$/,
    AT: /^(AT[0-9]{2})\d{16}$/,
    AZ: /^(AZ[0-9]{2})[A-Z0-9]{4}\d{20}$/,
    BA: /^(BA[0-9]{2})\d{16}$/,
    BE: /^(BE[0-9]{2})\d{12}$/,
    BG: /^(BG[0-9]{2})[A-Z]{4}\d{6}[A-Z0-9]{8}$/,
    BH: /^(BH[0-9]{2})[A-Z]{4}[A-Z0-9]{14}$/,
    BR: /^(BR[0-9]{2})\d{23}[A-Z]{1}[A-Z0-9]{1}$/,
    BY: /^(BY[0-9]{2})[A-Z0-9]{4}\d{20}$/,
    CH: /^(CH[0-9]{2})\d{5}[A-Z0-9]{12}$/,
    CR: /^(CR[0-9]{2})\d{18}$/,
    CY: /^(CY[0-9]{2})\d{8}[A-Z0-9]{16}$/,
    CZ: /^(CZ[0-9]{2})\d{20}$/,
    DE: /^(DE[0-9]{2})\d{18}$/,
    DK: /^(DK[0-9]{2})\d{14}$/,
    DO: /^(DO[0-9]{2})[A-Z]{4}\d{20}$/,
    DZ: /^(DZ\d{24})$/,
    EE: /^(EE[0-9]{2})\d{16}$/,
    EG: /^(EG[0-9]{2})\d{25}$/,
    ES: /^(ES[0-9]{2})\d{20}$/,
    FI: /^(FI[0-9]{2})\d{14}$/,
    FO: /^(FO[0-9]{2})\d{14}$/,
    FR: /^(FR[0-9]{2})\d{10}[A-Z0-9]{11}\d{2}$/,
    GB: /^(GB[0-9]{2})[A-Z]{4}\d{14}$/,
    GE: /^(GE[0-9]{2})[A-Z0-9]{2}\d{16}$/,
    GI: /^(GI[0-9]{2})[A-Z]{4}[A-Z0-9]{15}$/,
    GL: /^(GL[0-9]{2})\d{14}$/,
    GR: /^(GR[0-9]{2})\d{7}[A-Z0-9]{16}$/,
    GT: /^(GT[0-9]{2})[A-Z0-9]{4}[A-Z0-9]{20}$/,
    HR: /^(HR[0-9]{2})\d{17}$/,
    HU: /^(HU[0-9]{2})\d{24}$/,
    IE: /^(IE[0-9]{2})[A-Z0-9]{4}\d{14}$/,
    IL: /^(IL[0-9]{2})\d{19}$/,
    IQ: /^(IQ[0-9]{2})[A-Z]{4}\d{15}$/,
    IR: /^(IR[0-9]{2})0\d{2}0\d{18}$/,
    IS: /^(IS[0-9]{2})\d{22}$/,
    IT: /^(IT[0-9]{2})[A-Z]{1}\d{10}[A-Z0-9]{12}$/,
    JO: /^(JO[0-9]{2})[A-Z]{4}\d{22}$/,
    KW: /^(KW[0-9]{2})[A-Z]{4}[A-Z0-9]{22}$/,
    KZ: /^(KZ[0-9]{2})\d{3}[A-Z0-9]{13}$/,
    LB: /^(LB[0-9]{2})\d{4}[A-Z0-9]{20}$/,
    LC: /^(LC[0-9]{2})[A-Z]{4}[A-Z0-9]{24}$/,
    LI: /^(LI[0-9]{2})\d{5}[A-Z0-9]{12}$/,
    LT: /^(LT[0-9]{2})\d{16}$/,
    LU: /^(LU[0-9]{2})\d{3}[A-Z0-9]{13}$/,
    LV: /^(LV[0-9]{2})[A-Z]{4}[A-Z0-9]{13}$/,
    MA: /^(MA[0-9]{26})$/,
    MC: /^(MC[0-9]{2})\d{10}[A-Z0-9]{11}\d{2}$/,
    MD: /^(MD[0-9]{2})[A-Z0-9]{20}$/,
    ME: /^(ME[0-9]{2})\d{18}$/,
    MK: /^(MK[0-9]{2})\d{3}[A-Z0-9]{10}\d{2}$/,
    MR: /^(MR[0-9]{2})\d{23}$/,
    MT: /^(MT[0-9]{2})[A-Z]{4}\d{5}[A-Z0-9]{18}$/,
    MU: /^(MU[0-9]{2})[A-Z]{4}\d{19}[A-Z]{3}$/,
    MZ: /^(MZ[0-9]{2})\d{21}$/,
    NL: /^(NL[0-9]{2})[A-Z]{4}\d{10}$/,
    NO: /^(NO[0-9]{2})\d{11}$/,
    PK: /^(PK[0-9]{2})[A-Z0-9]{4}\d{16}$/,
    PL: /^(PL[0-9]{2})\d{24}$/,
    PS: /^(PS[0-9]{2})[A-Z0-9]{4}\d{21}$/,
    PT: /^(PT[0-9]{2})\d{21}$/,
    QA: /^(QA[0-9]{2})[A-Z]{4}[A-Z0-9]{21}$/,
    RO: /^(RO[0-9]{2})[A-Z]{4}[A-Z0-9]{16}$/,
    RS: /^(RS[0-9]{2})\d{18}$/,
    SA: /^(SA[0-9]{2})\d{2}[A-Z0-9]{18}$/,
    SC: /^(SC[0-9]{2})[A-Z]{4}\d{20}[A-Z]{3}$/,
    SE: /^(SE[0-9]{2})\d{20}$/,
    SI: /^(SI[0-9]{2})\d{15}$/,
    SK: /^(SK[0-9]{2})\d{20}$/,
    SM: /^(SM[0-9]{2})[A-Z]{1}\d{10}[A-Z0-9]{12}$/,
    SV: /^(SV[0-9]{2})[A-Z0-9]{4}\d{20}$/,
    TL: /^(TL[0-9]{2})\d{19}$/,
    TN: /^(TN[0-9]{2})\d{20}$/,
    TR: /^(TR[0-9]{2})\d{5}[A-Z0-9]{17}$/,
    UA: /^(UA[0-9]{2})\d{6}[A-Z0-9]{19}$/,
    VA: /^(VA[0-9]{2})\d{18}$/,
    VG: /^(VG[0-9]{2})[A-Z0-9]{4}\d{16}$/,
    XK: /^(XK[0-9]{2})\d{16}$/
};
/**
 * Check if the country codes passed are valid using the
 * ibanRegexThroughCountryCode as a reference
 *
 * @param {array} countryCodeArray
 * @return {boolean}
 */ function hasOnlyValidCountryCodes(countryCodeArray) {
    var countryCodeArrayFilteredWithObjectIbanCode = countryCodeArray.filter(function(countryCode) {
        return !(countryCode in ibanRegexThroughCountryCode);
    });
    if (countryCodeArrayFilteredWithObjectIbanCode.length > 0) return false;
    return true;
}
/**
 * Check whether string has correct universal IBAN format
 * The IBAN consists of up to 34 alphanumeric characters, as follows:
 * Country Code using ISO 3166-1 alpha-2, two letters
 * check digits, two digits and
 * Basic Bank Account Number (BBAN), up to 30 alphanumeric characters.
 * NOTE: Permitted IBAN characters are: digits [0-9] and the 26 latin alphabetic [A-Z]
 *
 * @param {string} str - string under validation
 * @param {object} options - object to pass the countries to be either whitelisted or blacklisted
 * @return {boolean}
 */ function hasValidIbanFormat(str, options) {
    // Strip white spaces and hyphens
    var strippedStr = str.replace(/[\s\-]+/gi, '').toUpperCase();
    var isoCountryCode = strippedStr.slice(0, 2).toUpperCase();
    var isoCountryCodeInIbanRegexCodeObject = isoCountryCode in ibanRegexThroughCountryCode;
    if (options.whitelist) {
        if (!hasOnlyValidCountryCodes(options.whitelist)) return false;
        var isoCountryCodeInWhiteList = options.whitelist.includes(isoCountryCode);
        if (!isoCountryCodeInWhiteList) return false;
    }
    if (options.blacklist) {
        var isoCountryCodeInBlackList = options.blacklist.includes(isoCountryCode);
        if (isoCountryCodeInBlackList) return false;
    }
    return isoCountryCodeInIbanRegexCodeObject && ibanRegexThroughCountryCode[isoCountryCode].test(strippedStr);
}
/**
   * Check whether string has valid IBAN Checksum
   * by performing basic mod-97 operation and
   * the remainder should equal 1
   * -- Start by rearranging the IBAN by moving the four initial characters to the end of the string
   * -- Replace each letter in the string with two digits, A -> 10, B = 11, Z = 35
   * -- Interpret the string as a decimal integer and
   * -- compute the remainder on division by 97 (mod 97)
   * Reference: https://en.wikipedia.org/wiki/International_Bank_Account_Number
   *
   * @param {string} str
   * @return {boolean}
   */ function hasValidIbanChecksum(str) {
    var strippedStr = str.replace(/[^A-Z0-9]+/gi, '').toUpperCase(); // Keep only digits and A-Z latin alphabetic
    var rearranged = strippedStr.slice(4) + strippedStr.slice(0, 4);
    var alphaCapsReplacedWithDigits = rearranged.replace(/[A-Z]/g, function(char) {
        return char.charCodeAt(0) - 55;
    });
    var remainder = alphaCapsReplacedWithDigits.match(/\d{1,7}/g).reduce(function(acc, value) {
        return Number(acc + value) % 97;
    }, '');
    return remainder === 1;
}
function isIBAN(str) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    (0, _assertString.default)(str);
    return hasValidIbanFormat(str, options) && hasValidIbanChecksum(str);
}
var locales = exports.locales = Object.keys(ibanRegexThroughCountryCode);

},{"dc8c49b753cc6388":"dGQqH"}],"dGnco":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isBIC;
var _assertString = _interopRequireDefault(require("d2180d3c377d0b4a"));
var _isISO31661Alpha = require("6c0405a7c16e731c");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
// https://en.wikipedia.org/wiki/ISO_9362
var isBICReg = /^[A-Za-z]{6}[A-Za-z0-9]{2}([A-Za-z0-9]{3})?$/;
function isBIC(str) {
    (0, _assertString.default)(str);
    // toUpperCase() should be removed when a new major version goes out that changes
    // the regex to [A-Z] (per the spec).
    var countryCode = str.slice(4, 6).toUpperCase();
    if (!_isISO31661Alpha.CountryCodes.has(countryCode) && countryCode !== 'XK') return false;
    return isBICReg.test(str);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"d2180d3c377d0b4a":"dGQqH","6c0405a7c16e731c":"d023L"}],"d023L":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CountryCodes = void 0;
exports.default = isISO31661Alpha2;
var _assertString = _interopRequireDefault(require("e41d8cb7b90fd66a"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
// from https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
var validISO31661Alpha2CountriesCodes = new Set([
    'AD',
    'AE',
    'AF',
    'AG',
    'AI',
    'AL',
    'AM',
    'AO',
    'AQ',
    'AR',
    'AS',
    'AT',
    'AU',
    'AW',
    'AX',
    'AZ',
    'BA',
    'BB',
    'BD',
    'BE',
    'BF',
    'BG',
    'BH',
    'BI',
    'BJ',
    'BL',
    'BM',
    'BN',
    'BO',
    'BQ',
    'BR',
    'BS',
    'BT',
    'BV',
    'BW',
    'BY',
    'BZ',
    'CA',
    'CC',
    'CD',
    'CF',
    'CG',
    'CH',
    'CI',
    'CK',
    'CL',
    'CM',
    'CN',
    'CO',
    'CR',
    'CU',
    'CV',
    'CW',
    'CX',
    'CY',
    'CZ',
    'DE',
    'DJ',
    'DK',
    'DM',
    'DO',
    'DZ',
    'EC',
    'EE',
    'EG',
    'EH',
    'ER',
    'ES',
    'ET',
    'FI',
    'FJ',
    'FK',
    'FM',
    'FO',
    'FR',
    'GA',
    'GB',
    'GD',
    'GE',
    'GF',
    'GG',
    'GH',
    'GI',
    'GL',
    'GM',
    'GN',
    'GP',
    'GQ',
    'GR',
    'GS',
    'GT',
    'GU',
    'GW',
    'GY',
    'HK',
    'HM',
    'HN',
    'HR',
    'HT',
    'HU',
    'ID',
    'IE',
    'IL',
    'IM',
    'IN',
    'IO',
    'IQ',
    'IR',
    'IS',
    'IT',
    'JE',
    'JM',
    'JO',
    'JP',
    'KE',
    'KG',
    'KH',
    'KI',
    'KM',
    'KN',
    'KP',
    'KR',
    'KW',
    'KY',
    'KZ',
    'LA',
    'LB',
    'LC',
    'LI',
    'LK',
    'LR',
    'LS',
    'LT',
    'LU',
    'LV',
    'LY',
    'MA',
    'MC',
    'MD',
    'ME',
    'MF',
    'MG',
    'MH',
    'MK',
    'ML',
    'MM',
    'MN',
    'MO',
    'MP',
    'MQ',
    'MR',
    'MS',
    'MT',
    'MU',
    'MV',
    'MW',
    'MX',
    'MY',
    'MZ',
    'NA',
    'NC',
    'NE',
    'NF',
    'NG',
    'NI',
    'NL',
    'NO',
    'NP',
    'NR',
    'NU',
    'NZ',
    'OM',
    'PA',
    'PE',
    'PF',
    'PG',
    'PH',
    'PK',
    'PL',
    'PM',
    'PN',
    'PR',
    'PS',
    'PT',
    'PW',
    'PY',
    'QA',
    'RE',
    'RO',
    'RS',
    'RU',
    'RW',
    'SA',
    'SB',
    'SC',
    'SD',
    'SE',
    'SG',
    'SH',
    'SI',
    'SJ',
    'SK',
    'SL',
    'SM',
    'SN',
    'SO',
    'SR',
    'SS',
    'ST',
    'SV',
    'SX',
    'SY',
    'SZ',
    'TC',
    'TD',
    'TF',
    'TG',
    'TH',
    'TJ',
    'TK',
    'TL',
    'TM',
    'TN',
    'TO',
    'TR',
    'TT',
    'TV',
    'TW',
    'TZ',
    'UA',
    'UG',
    'UM',
    'US',
    'UY',
    'UZ',
    'VA',
    'VC',
    'VE',
    'VG',
    'VI',
    'VN',
    'VU',
    'WF',
    'WS',
    'YE',
    'YT',
    'ZA',
    'ZM',
    'ZW'
]);
function isISO31661Alpha2(str) {
    (0, _assertString.default)(str);
    return validISO31661Alpha2CountriesCodes.has(str.toUpperCase());
}
var CountryCodes = exports.CountryCodes = validISO31661Alpha2CountriesCodes;

},{"e41d8cb7b90fd66a":"dGQqH"}],"bld3U":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isMD5;
var _assertString = _interopRequireDefault(require("c755e3f2ef1c985a"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var md5 = /^[a-f0-9]{32}$/;
function isMD5(str) {
    (0, _assertString.default)(str);
    return md5.test(str);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"c755e3f2ef1c985a":"dGQqH"}],"jEjuS":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isHash;
var _assertString = _interopRequireDefault(require("318b64cc266b5945"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var lengths = {
    md5: 32,
    md4: 32,
    sha1: 40,
    sha256: 64,
    sha384: 96,
    sha512: 128,
    ripemd128: 32,
    ripemd160: 40,
    tiger128: 32,
    tiger160: 40,
    tiger192: 48,
    crc32: 8,
    crc32b: 8
};
function isHash(str, algorithm) {
    (0, _assertString.default)(str);
    var hash = new RegExp("^[a-fA-F0-9]{".concat(lengths[algorithm], "}$"));
    return hash.test(str);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"318b64cc266b5945":"dGQqH"}],"1ovuU":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isJWT;
var _assertString = _interopRequireDefault(require("d0b86a9a84ca2198"));
var _isBase = _interopRequireDefault(require("2746967ea24563e0"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function isJWT(str) {
    (0, _assertString.default)(str);
    var dotSplit = str.split('.');
    var len = dotSplit.length;
    if (len !== 3) return false;
    return dotSplit.reduce(function(acc, currElem) {
        return acc && (0, _isBase.default)(currElem, {
            urlSafe: true
        });
    }, true);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"d0b86a9a84ca2198":"dGQqH","2746967ea24563e0":"gPCLH"}],"gPCLH":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isBase64;
var _assertString = _interopRequireDefault(require("8e44c374ff4c971d"));
var _merge = _interopRequireDefault(require("cfc93884c3e723dd"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var notBase64 = /[^A-Z0-9+\/=]/i;
var urlSafeBase64 = /^[A-Z0-9_\-]*$/i;
var defaultBase64Options = {
    urlSafe: false
};
function isBase64(str, options) {
    (0, _assertString.default)(str);
    options = (0, _merge.default)(options, defaultBase64Options);
    var len = str.length;
    if (options.urlSafe) return urlSafeBase64.test(str);
    if (len % 4 !== 0 || notBase64.test(str)) return false;
    var firstPaddingChar = str.indexOf('=');
    return firstPaddingChar === -1 || firstPaddingChar === len - 1 || firstPaddingChar === len - 2 && str[len - 1] === '=';
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"8e44c374ff4c971d":"dGQqH","cfc93884c3e723dd":"c806a"}],"2hHhN":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isJSON;
var _assertString = _interopRequireDefault(require("9c0272646c6c578b"));
var _merge = _interopRequireDefault(require("ef7c216ff7a82269"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
var default_json_options = {
    allow_primitives: false
};
function isJSON(str, options) {
    (0, _assertString.default)(str);
    try {
        options = (0, _merge.default)(options, default_json_options);
        var primitives = [];
        if (options.allow_primitives) primitives = [
            null,
            false,
            true
        ];
        var obj = JSON.parse(str);
        return primitives.includes(obj) || !!obj && _typeof(obj) === 'object';
    } catch (e) {}
    return false;
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"9c0272646c6c578b":"dGQqH","ef7c216ff7a82269":"c806a"}],"dOok5":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isEmpty;
var _assertString = _interopRequireDefault(require("f94a6139bb13a8ea"));
var _merge = _interopRequireDefault(require("184be28420881903"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var default_is_empty_options = {
    ignore_whitespace: false
};
function isEmpty(str, options) {
    (0, _assertString.default)(str);
    options = (0, _merge.default)(options, default_is_empty_options);
    return (options.ignore_whitespace ? str.trim().length : str.length) === 0;
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"f94a6139bb13a8ea":"dGQqH","184be28420881903":"c806a"}],"f0je8":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isLength;
var _assertString = _interopRequireDefault(require("6b47bc2ed334a900"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
/* eslint-disable prefer-rest-params */ function isLength(str, options) {
    (0, _assertString.default)(str);
    var min;
    var max;
    if (_typeof(options) === 'object') {
        min = options.min || 0;
        max = options.max;
    } else {
        // backwards compatibility: isLength(str, min [, max])
        min = arguments[1] || 0;
        max = arguments[2];
    }
    var presentationSequences = str.match(/(\uFE0F|\uFE0E)/g) || [];
    var surrogatePairs = str.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g) || [];
    var len = str.length - presentationSequences.length - surrogatePairs.length;
    return len >= min && (typeof max === 'undefined' || len <= max);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"6b47bc2ed334a900":"dGQqH"}],"tOwUk":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isUUID;
var _assertString = _interopRequireDefault(require("973e2ef767c2afa9"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var uuid = {
    1: /^[0-9A-F]{8}-[0-9A-F]{4}-1[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
    2: /^[0-9A-F]{8}-[0-9A-F]{4}-2[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
    3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
    4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
    5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
    7: /^[0-9A-F]{8}-[0-9A-F]{4}-7[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
    all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
};
function isUUID(str, version) {
    (0, _assertString.default)(str);
    var pattern = uuid[![
        undefined,
        null
    ].includes(version) ? version : 'all'];
    return !!pattern && pattern.test(str);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"973e2ef767c2afa9":"dGQqH"}],"dcUed":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isMongoId;
var _assertString = _interopRequireDefault(require("d869e7f0c5cb701e"));
var _isHexadecimal = _interopRequireDefault(require("16f83f29c7928fec"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function isMongoId(str) {
    (0, _assertString.default)(str);
    return (0, _isHexadecimal.default)(str) && str.length === 24;
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"d869e7f0c5cb701e":"dGQqH","16f83f29c7928fec":"h00RN"}],"9u60f":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isAfter;
var _toDate = _interopRequireDefault(require("e164ca231e30adf6"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function isAfter(date, options) {
    // For backwards compatibility:
    // isAfter(str [, date]), i.e. `options` could be used as argument for the legacy `date`
    var comparisonDate = (options === null || options === void 0 ? void 0 : options.comparisonDate) || options || Date().toString();
    var comparison = (0, _toDate.default)(comparisonDate);
    var original = (0, _toDate.default)(date);
    return !!(original && comparison && original > comparison);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"e164ca231e30adf6":"8TB4U"}],"aHPfk":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isBefore;
var _assertString = _interopRequireDefault(require("ee7468ef905317d2"));
var _toDate = _interopRequireDefault(require("a53ce262ac376887"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function isBefore(str) {
    var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : String(new Date());
    (0, _assertString.default)(str);
    var comparison = (0, _toDate.default)(date);
    var original = (0, _toDate.default)(str);
    return !!(original && comparison && original < comparison);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"ee7468ef905317d2":"dGQqH","a53ce262ac376887":"8TB4U"}],"aFGXX":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isIn;
var _assertString = _interopRequireDefault(require("1e5f07e2cd279106"));
var _toString = _interopRequireDefault(require("26a576c3ed31db1f"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function isIn(str, options) {
    (0, _assertString.default)(str);
    var i;
    if (Object.prototype.toString.call(options) === '[object Array]') {
        var array = [];
        for(i in options)// https://github.com/gotwarlost/istanbul/blob/master/ignoring-code-for-coverage.md#ignoring-code-for-coverage-purposes
        // istanbul ignore else
        if (({}).hasOwnProperty.call(options, i)) array[i] = (0, _toString.default)(options[i]);
        return array.indexOf(str) >= 0;
    } else if (_typeof(options) === 'object') return options.hasOwnProperty(str);
    else if (options && typeof options.indexOf === 'function') return options.indexOf(str) >= 0;
    return false;
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"1e5f07e2cd279106":"dGQqH","26a576c3ed31db1f":"1BTjZ"}],"ekefF":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isLuhnNumber;
var _assertString = _interopRequireDefault(require("939e6ef1ca2e993c"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function isLuhnNumber(str) {
    (0, _assertString.default)(str);
    var sanitized = str.replace(/[- ]+/g, '');
    var sum = 0;
    var digit;
    var tmpNum;
    var shouldDouble;
    for(var i = sanitized.length - 1; i >= 0; i--){
        digit = sanitized.substring(i, i + 1);
        tmpNum = parseInt(digit, 10);
        if (shouldDouble) {
            tmpNum *= 2;
            if (tmpNum >= 10) sum += tmpNum % 10 + 1;
            else sum += tmpNum;
        } else sum += tmpNum;
        shouldDouble = !shouldDouble;
    }
    return !!(sum % 10 === 0 ? sanitized : false);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"939e6ef1ca2e993c":"dGQqH"}],"70XyJ":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isCreditCard;
var _assertString = _interopRequireDefault(require("104f85f43b1730c2"));
var _isLuhnNumber = _interopRequireDefault(require("6743c1d01cccf7b5"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var cards = {
    amex: /^3[47][0-9]{13}$/,
    dinersclub: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
    discover: /^6(?:011|5[0-9][0-9])[0-9]{12,15}$/,
    jcb: /^(?:2131|1800|35\d{3})\d{11}$/,
    mastercard: /^5[1-5][0-9]{2}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/,
    // /^[25][1-7][0-9]{14}$/;
    unionpay: /^(6[27][0-9]{14}|^(81[0-9]{14,17}))$/,
    visa: /^(?:4[0-9]{12})(?:[0-9]{3,6})?$/
};
var allCards = function() {
    var tmpCardsArray = [];
    for(var cardProvider in cards)// istanbul ignore else
    if (cards.hasOwnProperty(cardProvider)) tmpCardsArray.push(cards[cardProvider]);
    return tmpCardsArray;
}();
function isCreditCard(card) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    (0, _assertString.default)(card);
    var provider = options.provider;
    var sanitized = card.replace(/[- ]+/g, '');
    if (provider && provider.toLowerCase() in cards) {
        // specific provider in the list
        if (!cards[provider.toLowerCase()].test(sanitized)) return false;
    } else if (provider && !(provider.toLowerCase() in cards)) /* specific provider not in the list */ throw new Error("".concat(provider, " is not a valid credit card provider."));
    else if (!allCards.some(function(cardProvider) {
        return cardProvider.test(sanitized);
    })) // no specific provider
    return false;
    return (0, _isLuhnNumber.default)(card);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"104f85f43b1730c2":"dGQqH","6743c1d01cccf7b5":"ekefF"}],"hlY4v":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isIdentityCard;
var _assertString = _interopRequireDefault(require("82ebad56c1e929ba"));
var _isInt = _interopRequireDefault(require("a1cec04ff91509b3"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var validators = {
    PL: function PL(str) {
        (0, _assertString.default)(str);
        var weightOfDigits = {
            1: 1,
            2: 3,
            3: 7,
            4: 9,
            5: 1,
            6: 3,
            7: 7,
            8: 9,
            9: 1,
            10: 3,
            11: 0
        };
        if (str != null && str.length === 11 && (0, _isInt.default)(str, {
            allow_leading_zeroes: true
        })) {
            var digits = str.split('').slice(0, -1);
            var sum = digits.reduce(function(acc, digit, index) {
                return acc + Number(digit) * weightOfDigits[index + 1];
            }, 0);
            var modulo = sum % 10;
            var lastDigit = Number(str.charAt(str.length - 1));
            if (modulo === 0 && lastDigit === 0 || lastDigit === 10 - modulo) return true;
        }
        return false;
    },
    ES: function ES(str) {
        (0, _assertString.default)(str);
        var DNI = /^[0-9X-Z][0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKE]$/;
        var charsValue = {
            X: 0,
            Y: 1,
            Z: 2
        };
        var controlDigits = [
            'T',
            'R',
            'W',
            'A',
            'G',
            'M',
            'Y',
            'F',
            'P',
            'D',
            'X',
            'B',
            'N',
            'J',
            'Z',
            'S',
            'Q',
            'V',
            'H',
            'L',
            'C',
            'K',
            'E'
        ];
        // sanitize user input
        var sanitized = str.trim().toUpperCase();
        // validate the data structure
        if (!DNI.test(sanitized)) return false;
        // validate the control digit
        var number = sanitized.slice(0, -1).replace(/[X,Y,Z]/g, function(char) {
            return charsValue[char];
        });
        return sanitized.endsWith(controlDigits[number % 23]);
    },
    FI: function FI(str) {
        // https://dvv.fi/en/personal-identity-code#:~:text=control%20character%20for%20a-,personal,-identity%20code%20calculated
        (0, _assertString.default)(str);
        if (str.length !== 11) return false;
        if (!str.match(/^\d{6}[\-A\+]\d{3}[0-9ABCDEFHJKLMNPRSTUVWXY]{1}$/)) return false;
        var checkDigits = '0123456789ABCDEFHJKLMNPRSTUVWXY';
        var idAsNumber = parseInt(str.slice(0, 6), 10) * 1000 + parseInt(str.slice(7, 10), 10);
        var remainder = idAsNumber % 31;
        var checkDigit = checkDigits[remainder];
        return checkDigit === str.slice(10, 11);
    },
    IN: function IN(str) {
        var DNI = /^[1-9]\d{3}\s?\d{4}\s?\d{4}$/;
        // multiplication table
        var d = [
            [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9
            ],
            [
                1,
                2,
                3,
                4,
                0,
                6,
                7,
                8,
                9,
                5
            ],
            [
                2,
                3,
                4,
                0,
                1,
                7,
                8,
                9,
                5,
                6
            ],
            [
                3,
                4,
                0,
                1,
                2,
                8,
                9,
                5,
                6,
                7
            ],
            [
                4,
                0,
                1,
                2,
                3,
                9,
                5,
                6,
                7,
                8
            ],
            [
                5,
                9,
                8,
                7,
                6,
                0,
                4,
                3,
                2,
                1
            ],
            [
                6,
                5,
                9,
                8,
                7,
                1,
                0,
                4,
                3,
                2
            ],
            [
                7,
                6,
                5,
                9,
                8,
                2,
                1,
                0,
                4,
                3
            ],
            [
                8,
                7,
                6,
                5,
                9,
                3,
                2,
                1,
                0,
                4
            ],
            [
                9,
                8,
                7,
                6,
                5,
                4,
                3,
                2,
                1,
                0
            ]
        ];
        // permutation table
        var p = [
            [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9
            ],
            [
                1,
                5,
                7,
                6,
                2,
                8,
                3,
                0,
                9,
                4
            ],
            [
                5,
                8,
                0,
                3,
                7,
                9,
                6,
                1,
                4,
                2
            ],
            [
                8,
                9,
                1,
                6,
                0,
                4,
                3,
                5,
                2,
                7
            ],
            [
                9,
                4,
                5,
                3,
                1,
                2,
                6,
                8,
                7,
                0
            ],
            [
                4,
                2,
                8,
                6,
                5,
                7,
                3,
                9,
                0,
                1
            ],
            [
                2,
                7,
                9,
                3,
                8,
                0,
                6,
                4,
                1,
                5
            ],
            [
                7,
                0,
                4,
                6,
                9,
                1,
                3,
                2,
                5,
                8
            ]
        ];
        // sanitize user input
        var sanitized = str.trim();
        // validate the data structure
        if (!DNI.test(sanitized)) return false;
        var c = 0;
        var invertedArray = sanitized.replace(/\s/g, '').split('').map(Number).reverse();
        invertedArray.forEach(function(val, i) {
            c = d[c][p[i % 8][val]];
        });
        return c === 0;
    },
    IR: function IR(str) {
        if (!str.match(/^\d{10}$/)) return false;
        str = "0000".concat(str).slice(str.length - 6);
        if (parseInt(str.slice(3, 9), 10) === 0) return false;
        var lastNumber = parseInt(str.slice(9, 10), 10);
        var sum = 0;
        for(var i = 0; i < 9; i++)sum += parseInt(str.slice(i, i + 1), 10) * (10 - i);
        sum %= 11;
        return sum < 2 && lastNumber === sum || sum >= 2 && lastNumber === 11 - sum;
    },
    IT: function IT(str) {
        if (str.length !== 9) return false;
        if (str === 'CA00000AA') return false; // https://it.wikipedia.org/wiki/Carta_d%27identit%C3%A0_elettronica_italiana
        return str.search(/C[A-Z]\d{5}[A-Z]{2}/i) > -1;
    },
    NO: function NO(str) {
        var sanitized = str.trim();
        if (isNaN(Number(sanitized))) return false;
        if (sanitized.length !== 11) return false;
        if (sanitized === '00000000000') return false;
        // https://no.wikipedia.org/wiki/F%C3%B8dselsnummer
        var f = sanitized.split('').map(Number);
        var k1 = (11 - (3 * f[0] + 7 * f[1] + 6 * f[2] + 1 * f[3] + 8 * f[4] + 9 * f[5] + 4 * f[6] + 5 * f[7] + 2 * f[8]) % 11) % 11;
        var k2 = (11 - (5 * f[0] + 4 * f[1] + 3 * f[2] + 2 * f[3] + 7 * f[4] + 6 * f[5] + 5 * f[6] + 4 * f[7] + 3 * f[8] + 2 * k1) % 11) % 11;
        if (k1 !== f[9] || k2 !== f[10]) return false;
        return true;
    },
    TH: function TH(str) {
        if (!str.match(/^[1-8]\d{12}$/)) return false;
        // validate check digit
        var sum = 0;
        for(var i = 0; i < 12; i++)sum += parseInt(str[i], 10) * (13 - i);
        return str[12] === ((11 - sum % 11) % 10).toString();
    },
    LK: function LK(str) {
        var old_nic = /^[1-9]\d{8}[vx]$/i;
        var new_nic = /^[1-9]\d{11}$/i;
        if (str.length === 10 && old_nic.test(str)) return true;
        else if (str.length === 12 && new_nic.test(str)) return true;
        return false;
    },
    'he-IL': function heIL(str) {
        var DNI = /^\d{9}$/;
        // sanitize user input
        var sanitized = str.trim();
        // validate the data structure
        if (!DNI.test(sanitized)) return false;
        var id = sanitized;
        var sum = 0, incNum;
        for(var i = 0; i < id.length; i++){
            incNum = Number(id[i]) * (i % 2 + 1); // Multiply number by 1 or 2
            sum += incNum > 9 ? incNum - 9 : incNum; // Sum the digits up and add to total
        }
        return sum % 10 === 0;
    },
    'ar-LY': function arLY(str) {
        // Libya National Identity Number NIN is 12 digits, the first digit is either 1 or 2
        var NIN = /^(1|2)\d{11}$/;
        // sanitize user input
        var sanitized = str.trim();
        // validate the data structure
        if (!NIN.test(sanitized)) return false;
        return true;
    },
    'ar-TN': function arTN(str) {
        var DNI = /^\d{8}$/;
        // sanitize user input
        var sanitized = str.trim();
        // validate the data structure
        if (!DNI.test(sanitized)) return false;
        return true;
    },
    'zh-CN': function zhCN(str) {
        var provincesAndCities = [
            '11',
            // 北京
            '12',
            // 天津
            '13',
            // 河北
            '14',
            // 山西
            '15',
            // 内蒙古
            '21',
            // 辽宁
            '22',
            // 吉林
            '23',
            // 黑龙江
            '31',
            // 上海
            '32',
            // 江苏
            '33',
            // 浙江
            '34',
            // 安徽
            '35',
            // 福建
            '36',
            // 江西
            '37',
            // 山东
            '41',
            // 河南
            '42',
            // 湖北
            '43',
            // 湖南
            '44',
            // 广东
            '45',
            // 广西
            '46',
            // 海南
            '50',
            // 重庆
            '51',
            // 四川
            '52',
            // 贵州
            '53',
            // 云南
            '54',
            // 西藏
            '61',
            // 陕西
            '62',
            // 甘肃
            '63',
            // 青海
            '64',
            // 宁夏
            '65',
            // 新疆
            '71',
            // 台湾
            '81',
            // 香港
            '82',
            // 澳门
            '91' // 国外
        ];
        var powers = [
            '7',
            '9',
            '10',
            '5',
            '8',
            '4',
            '2',
            '1',
            '6',
            '3',
            '7',
            '9',
            '10',
            '5',
            '8',
            '4',
            '2'
        ];
        var parityBit = [
            '1',
            '0',
            'X',
            '9',
            '8',
            '7',
            '6',
            '5',
            '4',
            '3',
            '2'
        ];
        var checkAddressCode = function checkAddressCode(addressCode) {
            return provincesAndCities.includes(addressCode);
        };
        var checkBirthDayCode = function checkBirthDayCode(birDayCode) {
            var yyyy = parseInt(birDayCode.substring(0, 4), 10);
            var mm = parseInt(birDayCode.substring(4, 6), 10);
            var dd = parseInt(birDayCode.substring(6), 10);
            var xdata = new Date(yyyy, mm - 1, dd);
            if (xdata > new Date()) return false;
            else if (xdata.getFullYear() === yyyy && xdata.getMonth() === mm - 1 && xdata.getDate() === dd) return true;
            return false;
        };
        var getParityBit = function getParityBit(idCardNo) {
            var id17 = idCardNo.substring(0, 17);
            var power = 0;
            for(var i = 0; i < 17; i++)power += parseInt(id17.charAt(i), 10) * parseInt(powers[i], 10);
            var mod = power % 11;
            return parityBit[mod];
        };
        var checkParityBit = function checkParityBit(idCardNo) {
            return getParityBit(idCardNo) === idCardNo.charAt(17).toUpperCase();
        };
        var check15IdCardNo = function check15IdCardNo(idCardNo) {
            var check = /^[1-9]\d{7}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}$/.test(idCardNo);
            if (!check) return false;
            var addressCode = idCardNo.substring(0, 2);
            check = checkAddressCode(addressCode);
            if (!check) return false;
            var birDayCode = "19".concat(idCardNo.substring(6, 12));
            check = checkBirthDayCode(birDayCode);
            if (!check) return false;
            return true;
        };
        var check18IdCardNo = function check18IdCardNo(idCardNo) {
            var check = /^[1-9]\d{5}[1-9]\d{3}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}(\d|x|X)$/.test(idCardNo);
            if (!check) return false;
            var addressCode = idCardNo.substring(0, 2);
            check = checkAddressCode(addressCode);
            if (!check) return false;
            var birDayCode = idCardNo.substring(6, 14);
            check = checkBirthDayCode(birDayCode);
            if (!check) return false;
            return checkParityBit(idCardNo);
        };
        var checkIdCardNo = function checkIdCardNo(idCardNo) {
            var check = /^\d{15}|(\d{17}(\d|x|X))$/.test(idCardNo);
            if (!check) return false;
            if (idCardNo.length === 15) return check15IdCardNo(idCardNo);
            return check18IdCardNo(idCardNo);
        };
        return checkIdCardNo(str);
    },
    'zh-HK': function zhHK(str) {
        // sanitize user input
        str = str.trim();
        // HKID number starts with 1 or 2 letters, followed by 6 digits,
        // then a checksum contained in square / round brackets or nothing
        var regexHKID = /^[A-Z]{1,2}[0-9]{6}((\([0-9A]\))|(\[[0-9A]\])|([0-9A]))$/;
        var regexIsDigit = /^[0-9]$/;
        // convert the user input to all uppercase and apply regex
        str = str.toUpperCase();
        if (!regexHKID.test(str)) return false;
        str = str.replace(/\[|\]|\(|\)/g, '');
        if (str.length === 8) str = "3".concat(str);
        var checkSumVal = 0;
        for(var i = 0; i <= 7; i++){
            var convertedChar = void 0;
            if (!regexIsDigit.test(str[i])) convertedChar = (str[i].charCodeAt(0) - 55) % 11;
            else convertedChar = str[i];
            checkSumVal += convertedChar * (9 - i);
        }
        checkSumVal %= 11;
        var checkSumConverted;
        if (checkSumVal === 0) checkSumConverted = '0';
        else if (checkSumVal === 1) checkSumConverted = 'A';
        else checkSumConverted = String(11 - checkSumVal);
        if (checkSumConverted === str[str.length - 1]) return true;
        return false;
    },
    'zh-TW': function zhTW(str) {
        var ALPHABET_CODES = {
            A: 10,
            B: 11,
            C: 12,
            D: 13,
            E: 14,
            F: 15,
            G: 16,
            H: 17,
            I: 34,
            J: 18,
            K: 19,
            L: 20,
            M: 21,
            N: 22,
            O: 35,
            P: 23,
            Q: 24,
            R: 25,
            S: 26,
            T: 27,
            U: 28,
            V: 29,
            W: 32,
            X: 30,
            Y: 31,
            Z: 33
        };
        var sanitized = str.trim().toUpperCase();
        if (!/^[A-Z][0-9]{9}$/.test(sanitized)) return false;
        return Array.from(sanitized).reduce(function(sum, number, index) {
            if (index === 0) {
                var code = ALPHABET_CODES[number];
                return code % 10 * 9 + Math.floor(code / 10);
            }
            if (index === 9) return (10 - sum % 10 - Number(number)) % 10 === 0;
            return sum + Number(number) * (9 - index);
        }, 0);
    }
};
function isIdentityCard(str, locale) {
    (0, _assertString.default)(str);
    if (locale in validators) return validators[locale](str);
    else if (locale === 'any') {
        for(var key in validators)// https://github.com/gotwarlost/istanbul/blob/master/ignoring-code-for-coverage.md#ignoring-code-for-coverage-purposes
        // istanbul ignore else
        if (validators.hasOwnProperty(key)) {
            var validator = validators[key];
            if (validator(str)) return true;
        }
        return false;
    }
    throw new Error("Invalid locale '".concat(locale, "'"));
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"82ebad56c1e929ba":"dGQqH","a1cec04ff91509b3":"6nSfG"}],"fPkd3":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isEAN;
var _assertString = _interopRequireDefault(require("5e5bfe9eefacdfc1"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
/**
 * The most commonly used EAN standard is
 * the thirteen-digit EAN-13, while the
 * less commonly used 8-digit EAN-8 barcode was
 * introduced for use on small packages.
 * Also EAN/UCC-14 is used for Grouping of individual
 * trade items above unit level(Intermediate, Carton or Pallet).
 * For more info about EAN-14 checkout: https://www.gtin.info/itf-14-barcodes/
 * EAN consists of:
 * GS1 prefix, manufacturer code, product code and check digit
 * Reference: https://en.wikipedia.org/wiki/International_Article_Number
 * Reference: https://www.gtin.info/
 */ /**
 * Define EAN Lenghts; 8 for EAN-8; 13 for EAN-13; 14 for EAN-14
 * and Regular Expression for valid EANs (EAN-8, EAN-13, EAN-14),
 * with exact numberic matching of 8 or 13 or 14 digits [0-9]
 */ var LENGTH_EAN_8 = 8;
var LENGTH_EAN_14 = 14;
var validEanRegex = /^(\d{8}|\d{13}|\d{14})$/;
/**
 * Get position weight given:
 * EAN length and digit index/position
 *
 * @param {number} length
 * @param {number} index
 * @return {number}
 */ function getPositionWeightThroughLengthAndIndex(length, index) {
    if (length === LENGTH_EAN_8 || length === LENGTH_EAN_14) return index % 2 === 0 ? 3 : 1;
    return index % 2 === 0 ? 1 : 3;
}
/**
 * Calculate EAN Check Digit
 * Reference: https://en.wikipedia.org/wiki/International_Article_Number#Calculation_of_checksum_digit
 *
 * @param {string} ean
 * @return {number}
 */ function calculateCheckDigit(ean) {
    var checksum = ean.slice(0, -1).split('').map(function(char, index) {
        return Number(char) * getPositionWeightThroughLengthAndIndex(ean.length, index);
    }).reduce(function(acc, partialSum) {
        return acc + partialSum;
    }, 0);
    var remainder = 10 - checksum % 10;
    return remainder < 10 ? remainder : 0;
}
/**
 * Check if string is valid EAN:
 * Matches EAN-8/EAN-13/EAN-14 regex
 * Has valid check digit.
 *
 * @param {string} str
 * @return {boolean}
 */ function isEAN(str) {
    (0, _assertString.default)(str);
    var actualCheckDigit = Number(str.slice(-1));
    return validEanRegex.test(str) && actualCheckDigit === calculateCheckDigit(str);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"5e5bfe9eefacdfc1":"dGQqH"}],"6OrLA":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isISIN;
var _assertString = _interopRequireDefault(require("f7031d3698358d1"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var isin = /^[A-Z]{2}[0-9A-Z]{9}[0-9]$/;
// this link details how the check digit is calculated:
// https://www.isin.org/isin-format/. it is a little bit
// odd in that it works with digits, not numbers. in order
// to make only one pass through the ISIN characters, the
// each alpha character is handled as 2 characters within
// the loop.
function isISIN(str) {
    (0, _assertString.default)(str);
    if (!isin.test(str)) return false;
    var double = true;
    var sum = 0;
    // convert values
    for(var i = str.length - 2; i >= 0; i--)if (str[i] >= 'A' && str[i] <= 'Z') {
        var value = str[i].charCodeAt(0) - 55;
        var lo = value % 10;
        var hi = Math.trunc(value / 10);
        // letters have two digits, so handle the low order
        // and high order digits separately.
        for(var _i = 0, _arr = [
            lo,
            hi
        ]; _i < _arr.length; _i++){
            var digit = _arr[_i];
            if (double) {
                if (digit >= 5) sum += 1 + (digit - 5) * 2;
                else sum += digit * 2;
            } else sum += digit;
            double = !double;
        }
    } else {
        var _digit = str[i].charCodeAt(0) - '0'.charCodeAt(0);
        if (double) {
            if (_digit >= 5) sum += 1 + (_digit - 5) * 2;
            else sum += _digit * 2;
        } else sum += _digit;
        double = !double;
    }
    var check = Math.trunc((sum + 9) / 10) * 10 - sum;
    return +str[str.length - 1] === check;
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"f7031d3698358d1":"dGQqH"}],"jg1zD":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isISBN;
var _assertString = _interopRequireDefault(require("1bb174860ea3a502"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var possibleIsbn10 = /^(?:[0-9]{9}X|[0-9]{10})$/;
var possibleIsbn13 = /^(?:[0-9]{13})$/;
var factor = [
    1,
    3
];
function isISBN(isbn, options) {
    (0, _assertString.default)(isbn);
    // For backwards compatibility:
    // isISBN(str [, version]), i.e. `options` could be used as argument for the legacy `version`
    var version = String((options === null || options === void 0 ? void 0 : options.version) || options);
    if (!(options !== null && options !== void 0 && options.version || options)) return isISBN(isbn, {
        version: 10
    }) || isISBN(isbn, {
        version: 13
    });
    var sanitizedIsbn = isbn.replace(/[\s-]+/g, '');
    var checksum = 0;
    if (version === '10') {
        if (!possibleIsbn10.test(sanitizedIsbn)) return false;
        for(var i = 0; i < version - 1; i++)checksum += (i + 1) * sanitizedIsbn.charAt(i);
        if (sanitizedIsbn.charAt(9) === 'X') checksum += 100;
        else checksum += 10 * sanitizedIsbn.charAt(9);
        if (checksum % 11 === 0) return true;
    } else if (version === '13') {
        if (!possibleIsbn13.test(sanitizedIsbn)) return false;
        for(var _i = 0; _i < 12; _i++)checksum += factor[_i % 2] * sanitizedIsbn.charAt(_i);
        if (sanitizedIsbn.charAt(12) - (10 - checksum % 10) % 10 === 0) return true;
    }
    return false;
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"1bb174860ea3a502":"dGQqH"}],"9xB1S":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isISSN;
var _assertString = _interopRequireDefault(require("fef463073848d898"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var issn = '^\\d{4}-?\\d{3}[\\dX]$';
function isISSN(str) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    (0, _assertString.default)(str);
    var testIssn = issn;
    testIssn = options.require_hyphen ? testIssn.replace('?', '') : testIssn;
    testIssn = options.case_sensitive ? new RegExp(testIssn) : new RegExp(testIssn, 'i');
    if (!testIssn.test(str)) return false;
    var digits = str.replace('-', '').toUpperCase();
    var checksum = 0;
    for(var i = 0; i < digits.length; i++){
        var digit = digits[i];
        checksum += (digit === 'X' ? 10 : +digit) * (8 - i);
    }
    return checksum % 11 === 0;
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"fef463073848d898":"dGQqH"}],"l0cqb":[function(require,module,exports,__globalThis) {
"use strict";
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isTaxID;
var _assertString = _interopRequireDefault(require("79f64cb44c2530a"));
var algorithms = _interopRequireWildcard(require("c14e0a9edffe0e65"));
var _isDate = _interopRequireDefault(require("5ed6659e234b0708"));
function _getRequireWildcardCache(e) {
    if ("function" != typeof WeakMap) return null;
    var r = new WeakMap(), t = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache(e) {
        return e ? t : r;
    })(e);
}
function _interopRequireWildcard(e, r) {
    if (!r && e && e.__esModule) return e;
    if (null === e || "object" != _typeof(e) && "function" != typeof e) return {
        default: e
    };
    var t = _getRequireWildcardCache(r);
    if (t && t.has(e)) return t.get(e);
    var n = {
        __proto__: null
    }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var u in e)if ("default" !== u && ({}).hasOwnProperty.call(e, u)) {
        var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
        i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
    }
    return n.default = e, t && t.set(e, n), n;
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/**
 * TIN Validation
 * Validates Tax Identification Numbers (TINs) from the US, EU member states and the United Kingdom.
 *
 * EU-UK:
 * National TIN validity is calculated using public algorithms as made available by DG TAXUD.
 *
 * See `https://ec.europa.eu/taxation_customs/tin/specs/FS-TIN%20Algorithms-Public.docx` for more information.
 *
 * US:
 * An Employer Identification Number (EIN), also known as a Federal Tax Identification Number,
 *  is used to identify a business entity.
 *
 * NOTES:
 *  - Prefix 47 is being reserved for future use
 *  - Prefixes 26, 27, 45, 46 and 47 were previously assigned by the Philadelphia campus.
 *
 * See `http://www.irs.gov/Businesses/Small-Businesses-&-Self-Employed/How-EINs-are-Assigned-and-Valid-EIN-Prefixes`
 * for more information.
 */ // Locale functions
/*
 * bg-BG validation function
 * (Edinen graždanski nomer (EGN/ЕГН), persons only)
 * Checks if birth date (first six digits) is valid and calculates check (last) digit
 */ function bgBgCheck(tin) {
    // Extract full year, normalize month and check birth date validity
    var century_year = tin.slice(0, 2);
    var month = parseInt(tin.slice(2, 4), 10);
    if (month > 40) {
        month -= 40;
        century_year = "20".concat(century_year);
    } else if (month > 20) {
        month -= 20;
        century_year = "18".concat(century_year);
    } else century_year = "19".concat(century_year);
    if (month < 10) month = "0".concat(month);
    var date = "".concat(century_year, "/").concat(month, "/").concat(tin.slice(4, 6));
    if (!(0, _isDate.default)(date, 'YYYY/MM/DD')) return false;
    // split digits into an array for further processing
    var digits = tin.split('').map(function(a) {
        return parseInt(a, 10);
    });
    // Calculate checksum by multiplying digits with fixed values
    var multip_lookup = [
        2,
        4,
        8,
        5,
        10,
        9,
        7,
        3,
        6
    ];
    var checksum = 0;
    for(var i = 0; i < multip_lookup.length; i++)checksum += digits[i] * multip_lookup[i];
    checksum = checksum % 11 === 10 ? 0 : checksum % 11;
    return checksum === digits[9];
}
/**
 * Check if an input is a valid Canadian SIN (Social Insurance Number)
 *
 * The Social Insurance Number (SIN) is a 9 digit number that
 * you need to work in Canada or to have access to government programs and benefits.
 *
 * https://en.wikipedia.org/wiki/Social_Insurance_Number
 * https://www.canada.ca/en/employment-social-development/services/sin.html
 * https://www.codercrunch.com/challenge/819302488/sin-validator
 *
 * @param {string} input
 * @return {boolean}
 */ function isCanadianSIN(input) {
    var digitsArray = input.split('');
    var even = digitsArray.filter(function(_, idx) {
        return idx % 2;
    }).map(function(i) {
        return Number(i) * 2;
    }).join('').split('');
    var total = digitsArray.filter(function(_, idx) {
        return !(idx % 2);
    }).concat(even).map(function(i) {
        return Number(i);
    }).reduce(function(acc, cur) {
        return acc + cur;
    });
    return total % 10 === 0;
}
/*
 * cs-CZ validation function
 * (Rodné číslo (RČ), persons only)
 * Checks if birth date (first six digits) is valid and divisibility by 11
 * Material not in DG TAXUD document sourced from:
 * -`https://lorenc.info/3MA381/overeni-spravnosti-rodneho-cisla.htm`
 * -`https://www.mvcr.cz/clanek/rady-a-sluzby-dokumenty-rodne-cislo.aspx`
 */ function csCzCheck(tin) {
    tin = tin.replace(/\W/, '');
    // Extract full year from TIN length
    var full_year = parseInt(tin.slice(0, 2), 10);
    if (tin.length === 10) {
        if (full_year < 54) full_year = "20".concat(full_year);
        else full_year = "19".concat(full_year);
    } else {
        if (tin.slice(6) === '000') return false;
         // Three-zero serial not assigned before 1954
        if (full_year < 54) full_year = "19".concat(full_year);
        else return false; // No 18XX years seen in any of the resources
    }
    // Add missing zero if needed
    if (full_year.length === 3) full_year = [
        full_year.slice(0, 2),
        '0',
        full_year.slice(2)
    ].join('');
    // Extract month from TIN and normalize
    var month = parseInt(tin.slice(2, 4), 10);
    if (month > 50) month -= 50;
    if (month > 20) {
        // Month-plus-twenty was only introduced in 2004
        if (parseInt(full_year, 10) < 2004) return false;
        month -= 20;
    }
    if (month < 10) month = "0".concat(month);
    // Check date validity
    var date = "".concat(full_year, "/").concat(month, "/").concat(tin.slice(4, 6));
    if (!(0, _isDate.default)(date, 'YYYY/MM/DD')) return false;
    // Verify divisibility by 11
    if (tin.length === 10) {
        if (parseInt(tin, 10) % 11 !== 0) {
            // Some numbers up to and including 1985 are still valid if
            // check (last) digit equals 0 and modulo of first 9 digits equals 10
            var checkdigit = parseInt(tin.slice(0, 9), 10) % 11;
            if (parseInt(full_year, 10) < 1986 && checkdigit === 10) {
                if (parseInt(tin.slice(9), 10) !== 0) return false;
            } else return false;
        }
    }
    return true;
}
/*
 * de-AT validation function
 * (Abgabenkontonummer, persons/entities)
 * Verify TIN validity by calling luhnCheck()
 */ function deAtCheck(tin) {
    return algorithms.luhnCheck(tin);
}
/*
 * de-DE validation function
 * (Steueridentifikationsnummer (Steuer-IdNr.), persons only)
 * Tests for single duplicate/triplicate value, then calculates ISO 7064 check (last) digit
 * Partial implementation of spec (same result with both algorithms always)
 */ function deDeCheck(tin) {
    // Split digits into an array for further processing
    var digits = tin.split('').map(function(a) {
        return parseInt(a, 10);
    });
    // Fill array with strings of number positions
    var occurences = [];
    for(var i = 0; i < digits.length - 1; i++){
        occurences.push('');
        for(var j = 0; j < digits.length - 1; j++)if (digits[i] === digits[j]) occurences[i] += j;
    }
    // Remove digits with one occurence and test for only one duplicate/triplicate
    occurences = occurences.filter(function(a) {
        return a.length > 1;
    });
    if (occurences.length !== 2 && occurences.length !== 3) return false;
    // In case of triplicate value only two digits are allowed next to each other
    if (occurences[0].length === 3) {
        var trip_locations = occurences[0].split('').map(function(a) {
            return parseInt(a, 10);
        });
        var recurrent = 0; // Amount of neighbour occurences
        for(var _i = 0; _i < trip_locations.length - 1; _i++)if (trip_locations[_i] + 1 === trip_locations[_i + 1]) recurrent += 1;
        if (recurrent === 2) return false;
    }
    return algorithms.iso7064Check(tin);
}
/*
 * dk-DK validation function
 * (CPR-nummer (personnummer), persons only)
 * Checks if birth date (first six digits) is valid and assigned to century (seventh) digit,
 * and calculates check (last) digit
 */ function dkDkCheck(tin) {
    tin = tin.replace(/\W/, '');
    // Extract year, check if valid for given century digit and add century
    var year = parseInt(tin.slice(4, 6), 10);
    var century_digit = tin.slice(6, 7);
    switch(century_digit){
        case '0':
        case '1':
        case '2':
        case '3':
            year = "19".concat(year);
            break;
        case '4':
        case '9':
            if (year < 37) year = "20".concat(year);
            else year = "19".concat(year);
            break;
        default:
            if (year < 37) year = "20".concat(year);
            else if (year > 58) year = "18".concat(year);
            else return false;
            break;
    }
    // Add missing zero if needed
    if (year.length === 3) year = [
        year.slice(0, 2),
        '0',
        year.slice(2)
    ].join('');
    // Check date validity
    var date = "".concat(year, "/").concat(tin.slice(2, 4), "/").concat(tin.slice(0, 2));
    if (!(0, _isDate.default)(date, 'YYYY/MM/DD')) return false;
    // Split digits into an array for further processing
    var digits = tin.split('').map(function(a) {
        return parseInt(a, 10);
    });
    var checksum = 0;
    var weight = 4;
    // Multiply by weight and add to checksum
    for(var i = 0; i < 9; i++){
        checksum += digits[i] * weight;
        weight -= 1;
        if (weight === 1) weight = 7;
    }
    checksum %= 11;
    if (checksum === 1) return false;
    return checksum === 0 ? digits[9] === 0 : digits[9] === 11 - checksum;
}
/*
 * el-CY validation function
 * (Arithmos Forologikou Mitroou (AFM/ΑΦΜ), persons only)
 * Verify TIN validity by calculating ASCII value of check (last) character
 */ function elCyCheck(tin) {
    // split digits into an array for further processing
    var digits = tin.slice(0, 8).split('').map(function(a) {
        return parseInt(a, 10);
    });
    var checksum = 0;
    // add digits in even places
    for(var i = 1; i < digits.length; i += 2)checksum += digits[i];
    // add digits in odd places
    for(var _i2 = 0; _i2 < digits.length; _i2 += 2)if (digits[_i2] < 2) checksum += 1 - digits[_i2];
    else {
        checksum += 2 * (digits[_i2] - 2) + 5;
        if (digits[_i2] > 4) checksum += 2;
    }
    return String.fromCharCode(checksum % 26 + 65) === tin.charAt(8);
}
/*
 * el-GR validation function
 * (Arithmos Forologikou Mitroou (AFM/ΑΦΜ), persons/entities)
 * Verify TIN validity by calculating check (last) digit
 * Algorithm not in DG TAXUD document- sourced from:
 * - `http://epixeirisi.gr/%CE%9A%CE%A1%CE%99%CE%A3%CE%99%CE%9C%CE%91-%CE%98%CE%95%CE%9C%CE%91%CE%A4%CE%91-%CE%A6%CE%9F%CE%A1%CE%9F%CE%9B%CE%9F%CE%93%CE%99%CE%91%CE%A3-%CE%9A%CE%91%CE%99-%CE%9B%CE%9F%CE%93%CE%99%CE%A3%CE%A4%CE%99%CE%9A%CE%97%CE%A3/23791/%CE%91%CF%81%CE%B9%CE%B8%CE%BC%CF%8C%CF%82-%CE%A6%CE%BF%CF%81%CE%BF%CE%BB%CE%BF%CE%B3%CE%B9%CE%BA%CE%BF%CF%8D-%CE%9C%CE%B7%CF%84%CF%81%CF%8E%CE%BF%CF%85`
 */ function elGrCheck(tin) {
    // split digits into an array for further processing
    var digits = tin.split('').map(function(a) {
        return parseInt(a, 10);
    });
    var checksum = 0;
    for(var i = 0; i < 8; i++)checksum += digits[i] * Math.pow(2, 8 - i);
    return checksum % 11 % 10 === digits[8];
}
/*
 * en-GB validation function (should go here if needed)
 * (National Insurance Number (NINO) or Unique Taxpayer Reference (UTR),
 * persons/entities respectively)
 */ /*
 * en-IE validation function
 * (Personal Public Service Number (PPS No), persons only)
 * Verify TIN validity by calculating check (second to last) character
 */ function enIeCheck(tin) {
    var checksum = algorithms.reverseMultiplyAndSum(tin.split('').slice(0, 7).map(function(a) {
        return parseInt(a, 10);
    }), 8);
    if (tin.length === 9 && tin[8] !== 'W') checksum += (tin[8].charCodeAt(0) - 64) * 9;
    checksum %= 23;
    if (checksum === 0) return tin[7].toUpperCase() === 'W';
    return tin[7].toUpperCase() === String.fromCharCode(64 + checksum);
}
// Valid US IRS campus prefixes
var enUsCampusPrefix = {
    andover: [
        '10',
        '12'
    ],
    atlanta: [
        '60',
        '67'
    ],
    austin: [
        '50',
        '53'
    ],
    brookhaven: [
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '11',
        '13',
        '14',
        '16',
        '21',
        '22',
        '23',
        '25',
        '34',
        '51',
        '52',
        '54',
        '55',
        '56',
        '57',
        '58',
        '59',
        '65'
    ],
    cincinnati: [
        '30',
        '32',
        '35',
        '36',
        '37',
        '38',
        '61'
    ],
    fresno: [
        '15',
        '24'
    ],
    internet: [
        '20',
        '26',
        '27',
        '45',
        '46',
        '47'
    ],
    kansas: [
        '40',
        '44'
    ],
    memphis: [
        '94',
        '95'
    ],
    ogden: [
        '80',
        '90'
    ],
    philadelphia: [
        '33',
        '39',
        '41',
        '42',
        '43',
        '46',
        '48',
        '62',
        '63',
        '64',
        '66',
        '68',
        '71',
        '72',
        '73',
        '74',
        '75',
        '76',
        '77',
        '81',
        '82',
        '83',
        '84',
        '85',
        '86',
        '87',
        '88',
        '91',
        '92',
        '93',
        '98',
        '99'
    ],
    sba: [
        '31'
    ]
};
// Return an array of all US IRS campus prefixes
function enUsGetPrefixes() {
    var prefixes = [];
    for(var location in enUsCampusPrefix)// https://github.com/gotwarlost/istanbul/blob/master/ignoring-code-for-coverage.md#ignoring-code-for-coverage-purposes
    // istanbul ignore else
    if (enUsCampusPrefix.hasOwnProperty(location)) prefixes.push.apply(prefixes, _toConsumableArray(enUsCampusPrefix[location]));
    return prefixes;
}
/*
 * en-US validation function
 * Verify that the TIN starts with a valid IRS campus prefix
 */ function enUsCheck(tin) {
    return enUsGetPrefixes().indexOf(tin.slice(0, 2)) !== -1;
}
/*
 * es-AR validation function
 * Clave Única de Identificación Tributaria (CUIT/CUIL)
 * Sourced from:
 * - https://servicioscf.afip.gob.ar/publico/abc/ABCpaso2.aspx?id_nivel1=3036&id_nivel2=3040&p=Conceptos%20b%C3%A1sicos
 * - https://es.wikipedia.org/wiki/Clave_%C3%9Anica_de_Identificaci%C3%B3n_Tributaria
 */ function esArCheck(tin) {
    var accum = 0;
    var digits = tin.split('');
    var digit = parseInt(digits.pop(), 10);
    for(var i = 0; i < digits.length; i++)accum += digits[9 - i] * (2 + i % 6);
    var verif = 11 - accum % 11;
    if (verif === 11) verif = 0;
    else if (verif === 10) verif = 9;
    return digit === verif;
}
/*
 * es-ES validation function
 * (Documento Nacional de Identidad (DNI)
 * or Número de Identificación de Extranjero (NIE), persons only)
 * Verify TIN validity by calculating check (last) character
 */ function esEsCheck(tin) {
    // Split characters into an array for further processing
    var chars = tin.toUpperCase().split('');
    // Replace initial letter if needed
    if (isNaN(parseInt(chars[0], 10)) && chars.length > 1) {
        var lead_replace = 0;
        switch(chars[0]){
            case 'Y':
                lead_replace = 1;
                break;
            case 'Z':
                lead_replace = 2;
                break;
            default:
        }
        chars.splice(0, 1, lead_replace);
    // Fill with zeros if smaller than proper
    } else while(chars.length < 9)chars.unshift(0);
    // Calculate checksum and check according to lookup
    var lookup = [
        'T',
        'R',
        'W',
        'A',
        'G',
        'M',
        'Y',
        'F',
        'P',
        'D',
        'X',
        'B',
        'N',
        'J',
        'Z',
        'S',
        'Q',
        'V',
        'H',
        'L',
        'C',
        'K',
        'E'
    ];
    chars = chars.join('');
    var checksum = parseInt(chars.slice(0, 8), 10) % 23;
    return chars[8] === lookup[checksum];
}
/*
 * et-EE validation function
 * (Isikukood (IK), persons only)
 * Checks if birth date (century digit and six following) is valid and calculates check (last) digit
 * Material not in DG TAXUD document sourced from:
 * - `https://www.oecd.org/tax/automatic-exchange/crs-implementation-and-assistance/tax-identification-numbers/Estonia-TIN.pdf`
 */ function etEeCheck(tin) {
    // Extract year and add century
    var full_year = tin.slice(1, 3);
    var century_digit = tin.slice(0, 1);
    switch(century_digit){
        case '1':
        case '2':
            full_year = "18".concat(full_year);
            break;
        case '3':
        case '4':
            full_year = "19".concat(full_year);
            break;
        default:
            full_year = "20".concat(full_year);
            break;
    }
    // Check date validity
    var date = "".concat(full_year, "/").concat(tin.slice(3, 5), "/").concat(tin.slice(5, 7));
    if (!(0, _isDate.default)(date, 'YYYY/MM/DD')) return false;
    // Split digits into an array for further processing
    var digits = tin.split('').map(function(a) {
        return parseInt(a, 10);
    });
    var checksum = 0;
    var weight = 1;
    // Multiply by weight and add to checksum
    for(var i = 0; i < 10; i++){
        checksum += digits[i] * weight;
        weight += 1;
        if (weight === 10) weight = 1;
    }
    // Do again if modulo 11 of checksum is 10
    if (checksum % 11 === 10) {
        checksum = 0;
        weight = 3;
        for(var _i3 = 0; _i3 < 10; _i3++){
            checksum += digits[_i3] * weight;
            weight += 1;
            if (weight === 10) weight = 1;
        }
        if (checksum % 11 === 10) return digits[10] === 0;
    }
    return checksum % 11 === digits[10];
}
/*
 * fi-FI validation function
 * (Henkilötunnus (HETU), persons only)
 * Checks if birth date (first six digits plus century symbol) is valid
 * and calculates check (last) digit
 */ function fiFiCheck(tin) {
    // Extract year and add century
    var full_year = tin.slice(4, 6);
    var century_symbol = tin.slice(6, 7);
    switch(century_symbol){
        case '+':
            full_year = "18".concat(full_year);
            break;
        case '-':
            full_year = "19".concat(full_year);
            break;
        default:
            full_year = "20".concat(full_year);
            break;
    }
    // Check date validity
    var date = "".concat(full_year, "/").concat(tin.slice(2, 4), "/").concat(tin.slice(0, 2));
    if (!(0, _isDate.default)(date, 'YYYY/MM/DD')) return false;
    // Calculate check character
    var checksum = parseInt(tin.slice(0, 6) + tin.slice(7, 10), 10) % 31;
    if (checksum < 10) return checksum === parseInt(tin.slice(10), 10);
    checksum -= 10;
    var letters_lookup = [
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'H',
        'J',
        'K',
        'L',
        'M',
        'N',
        'P',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y'
    ];
    return letters_lookup[checksum] === tin.slice(10);
}
/*
 * fr/nl-BE validation function
 * (Numéro national (N.N.), persons only)
 * Checks if birth date (first six digits) is valid and calculates check (last two) digits
 */ function frBeCheck(tin) {
    // Zero month/day value is acceptable
    if (tin.slice(2, 4) !== '00' || tin.slice(4, 6) !== '00') {
        // Extract date from first six digits of TIN
        var date = "".concat(tin.slice(0, 2), "/").concat(tin.slice(2, 4), "/").concat(tin.slice(4, 6));
        if (!(0, _isDate.default)(date, 'YY/MM/DD')) return false;
    }
    var checksum = 97 - parseInt(tin.slice(0, 9), 10) % 97;
    var checkdigits = parseInt(tin.slice(9, 11), 10);
    if (checksum !== checkdigits) {
        checksum = 97 - parseInt("2".concat(tin.slice(0, 9)), 10) % 97;
        if (checksum !== checkdigits) return false;
    }
    return true;
}
/*
 * fr-FR validation function
 * (Numéro fiscal de référence (numéro SPI), persons only)
 * Verify TIN validity by calculating check (last three) digits
 */ function frFrCheck(tin) {
    tin = tin.replace(/\s/g, '');
    var checksum = parseInt(tin.slice(0, 10), 10) % 511;
    var checkdigits = parseInt(tin.slice(10, 13), 10);
    return checksum === checkdigits;
}
/*
 * fr/lb-LU validation function
 * (numéro d’identification personnelle, persons only)
 * Verify birth date validity and run Luhn and Verhoeff checks
 */ function frLuCheck(tin) {
    // Extract date and check validity
    var date = "".concat(tin.slice(0, 4), "/").concat(tin.slice(4, 6), "/").concat(tin.slice(6, 8));
    if (!(0, _isDate.default)(date, 'YYYY/MM/DD')) return false;
    // Run Luhn check
    if (!algorithms.luhnCheck(tin.slice(0, 12))) return false;
    // Remove Luhn check digit and run Verhoeff check
    return algorithms.verhoeffCheck("".concat(tin.slice(0, 11)).concat(tin[12]));
}
/*
 * hr-HR validation function
 * (Osobni identifikacijski broj (OIB), persons/entities)
 * Verify TIN validity by calling iso7064Check(digits)
 */ function hrHrCheck(tin) {
    return algorithms.iso7064Check(tin);
}
/*
 * hu-HU validation function
 * (Adóazonosító jel, persons only)
 * Verify TIN validity by calculating check (last) digit
 */ function huHuCheck(tin) {
    // split digits into an array for further processing
    var digits = tin.split('').map(function(a) {
        return parseInt(a, 10);
    });
    var checksum = 8;
    for(var i = 1; i < 9; i++)checksum += digits[i] * (i + 1);
    return checksum % 11 === digits[9];
}
/*
 * lt-LT validation function (should go here if needed)
 * (Asmens kodas, persons/entities respectively)
 * Current validation check is alias of etEeCheck- same format applies
 */ /*
 * it-IT first/last name validity check
 * Accepts it-IT TIN-encoded names as a three-element character array and checks their validity
 * Due to lack of clarity between resources ("Are only Italian consonants used?
 * What happens if a person has X in their name?" etc.) only two test conditions
 * have been implemented:
 * Vowels may only be followed by other vowels or an X character
 * and X characters after vowels may only be followed by other X characters.
 */ function itItNameCheck(name) {
    // true at the first occurence of a vowel
    var vowelflag = false;
    // true at the first occurence of an X AFTER vowel
    // (to properly handle last names with X as consonant)
    var xflag = false;
    for(var i = 0; i < 3; i++){
        if (!vowelflag && /[AEIOU]/.test(name[i])) vowelflag = true;
        else if (!xflag && vowelflag && name[i] === 'X') xflag = true;
        else if (i > 0) {
            if (vowelflag && !xflag) {
                if (!/[AEIOU]/.test(name[i])) return false;
            }
            if (xflag) {
                if (!/X/.test(name[i])) return false;
            }
        }
    }
    return true;
}
/*
 * it-IT validation function
 * (Codice fiscale (TIN-IT), persons only)
 * Verify name, birth date and codice catastale validity
 * and calculate check character.
 * Material not in DG-TAXUD document sourced from:
 * `https://en.wikipedia.org/wiki/Italian_fiscal_code`
 */ function itItCheck(tin) {
    // Capitalize and split characters into an array for further processing
    var chars = tin.toUpperCase().split('');
    // Check first and last name validity calling itItNameCheck()
    if (!itItNameCheck(chars.slice(0, 3))) return false;
    if (!itItNameCheck(chars.slice(3, 6))) return false;
    // Convert letters in number spaces back to numbers if any
    var number_locations = [
        6,
        7,
        9,
        10,
        12,
        13,
        14
    ];
    var number_replace = {
        L: '0',
        M: '1',
        N: '2',
        P: '3',
        Q: '4',
        R: '5',
        S: '6',
        T: '7',
        U: '8',
        V: '9'
    };
    for(var _i4 = 0, _number_locations = number_locations; _i4 < _number_locations.length; _i4++){
        var i = _number_locations[_i4];
        if (chars[i] in number_replace) chars.splice(i, 1, number_replace[chars[i]]);
    }
    // Extract month and day, and check date validity
    var month_replace = {
        A: '01',
        B: '02',
        C: '03',
        D: '04',
        E: '05',
        H: '06',
        L: '07',
        M: '08',
        P: '09',
        R: '10',
        S: '11',
        T: '12'
    };
    var month = month_replace[chars[8]];
    var day = parseInt(chars[9] + chars[10], 10);
    if (day > 40) day -= 40;
    if (day < 10) day = "0".concat(day);
    var date = "".concat(chars[6]).concat(chars[7], "/").concat(month, "/").concat(day);
    if (!(0, _isDate.default)(date, 'YY/MM/DD')) return false;
    // Calculate check character by adding up even and odd characters as numbers
    var checksum = 0;
    for(var _i5 = 1; _i5 < chars.length - 1; _i5 += 2){
        var char_to_int = parseInt(chars[_i5], 10);
        if (isNaN(char_to_int)) char_to_int = chars[_i5].charCodeAt(0) - 65;
        checksum += char_to_int;
    }
    var odd_convert = {
        // Maps of characters at odd places
        A: 1,
        B: 0,
        C: 5,
        D: 7,
        E: 9,
        F: 13,
        G: 15,
        H: 17,
        I: 19,
        J: 21,
        K: 2,
        L: 4,
        M: 18,
        N: 20,
        O: 11,
        P: 3,
        Q: 6,
        R: 8,
        S: 12,
        T: 14,
        U: 16,
        V: 10,
        W: 22,
        X: 25,
        Y: 24,
        Z: 23,
        0: 1,
        1: 0
    };
    for(var _i6 = 0; _i6 < chars.length - 1; _i6 += 2){
        var _char_to_int = 0;
        if (chars[_i6] in odd_convert) _char_to_int = odd_convert[chars[_i6]];
        else {
            var multiplier = parseInt(chars[_i6], 10);
            _char_to_int = 2 * multiplier + 1;
            if (multiplier > 4) _char_to_int += 2;
        }
        checksum += _char_to_int;
    }
    if (String.fromCharCode(65 + checksum % 26) !== chars[15]) return false;
    return true;
}
/*
 * lv-LV validation function
 * (Personas kods (PK), persons only)
 * Check validity of birth date and calculate check (last) digit
 * Support only for old format numbers (not starting with '32', issued before 2017/07/01)
 * Material not in DG TAXUD document sourced from:
 * `https://boot.ritakafija.lv/forums/index.php?/topic/88314-personas-koda-algoritms-%C4%8Deksumma/`
 */ function lvLvCheck(tin) {
    tin = tin.replace(/\W/, '');
    // Extract date from TIN
    var day = tin.slice(0, 2);
    if (day !== '32') {
        // No date/checksum check if new format
        var month = tin.slice(2, 4);
        if (month !== '00') {
            // No date check if unknown month
            var full_year = tin.slice(4, 6);
            switch(tin[6]){
                case '0':
                    full_year = "18".concat(full_year);
                    break;
                case '1':
                    full_year = "19".concat(full_year);
                    break;
                default:
                    full_year = "20".concat(full_year);
                    break;
            }
            // Check date validity
            var date = "".concat(full_year, "/").concat(tin.slice(2, 4), "/").concat(day);
            if (!(0, _isDate.default)(date, 'YYYY/MM/DD')) return false;
        }
        // Calculate check digit
        var checksum = 1101;
        var multip_lookup = [
            1,
            6,
            3,
            7,
            9,
            10,
            5,
            8,
            4,
            2
        ];
        for(var i = 0; i < tin.length - 1; i++)checksum -= parseInt(tin[i], 10) * multip_lookup[i];
        return parseInt(tin[10], 10) === checksum % 11;
    }
    return true;
}
/*
 * mt-MT validation function
 * (Identity Card Number or Unique Taxpayer Reference, persons/entities)
 * Verify Identity Card Number structure (no other tests found)
 */ function mtMtCheck(tin) {
    if (tin.length !== 9) {
        // No tests for UTR
        var chars = tin.toUpperCase().split('');
        // Fill with zeros if smaller than proper
        while(chars.length < 8)chars.unshift(0);
        // Validate format according to last character
        switch(tin[7]){
            case 'A':
            case 'P':
                if (parseInt(chars[6], 10) === 0) return false;
                break;
            default:
                var first_part = parseInt(chars.join('').slice(0, 5), 10);
                if (first_part > 32000) return false;
                var second_part = parseInt(chars.join('').slice(5, 7), 10);
                if (first_part === second_part) return false;
        }
    }
    return true;
}
/*
 * nl-NL validation function
 * (Burgerservicenummer (BSN) or Rechtspersonen Samenwerkingsverbanden Informatie Nummer (RSIN),
 * persons/entities respectively)
 * Verify TIN validity by calculating check (last) digit (variant of MOD 11)
 */ function nlNlCheck(tin) {
    return algorithms.reverseMultiplyAndSum(tin.split('').slice(0, 8).map(function(a) {
        return parseInt(a, 10);
    }), 9) % 11 === parseInt(tin[8], 10);
}
/*
 * pl-PL validation function
 * (Powszechny Elektroniczny System Ewidencji Ludności (PESEL)
 * or Numer identyfikacji podatkowej (NIP), persons/entities)
 * Verify TIN validity by validating birth date (PESEL) and calculating check (last) digit
 */ function plPlCheck(tin) {
    // NIP
    if (tin.length === 10) {
        // Calculate last digit by multiplying with lookup
        var lookup = [
            6,
            5,
            7,
            2,
            3,
            4,
            5,
            6,
            7
        ];
        var _checksum = 0;
        for(var i = 0; i < lookup.length; i++)_checksum += parseInt(tin[i], 10) * lookup[i];
        _checksum %= 11;
        if (_checksum === 10) return false;
        return _checksum === parseInt(tin[9], 10);
    }
    // PESEL
    // Extract full year using month
    var full_year = tin.slice(0, 2);
    var month = parseInt(tin.slice(2, 4), 10);
    if (month > 80) {
        full_year = "18".concat(full_year);
        month -= 80;
    } else if (month > 60) {
        full_year = "22".concat(full_year);
        month -= 60;
    } else if (month > 40) {
        full_year = "21".concat(full_year);
        month -= 40;
    } else if (month > 20) {
        full_year = "20".concat(full_year);
        month -= 20;
    } else full_year = "19".concat(full_year);
    // Add leading zero to month if needed
    if (month < 10) month = "0".concat(month);
    // Check date validity
    var date = "".concat(full_year, "/").concat(month, "/").concat(tin.slice(4, 6));
    if (!(0, _isDate.default)(date, 'YYYY/MM/DD')) return false;
    // Calculate last digit by mulitplying with odd one-digit numbers except 5
    var checksum = 0;
    var multiplier = 1;
    for(var _i7 = 0; _i7 < tin.length - 1; _i7++){
        checksum += parseInt(tin[_i7], 10) * multiplier % 10;
        multiplier += 2;
        if (multiplier > 10) multiplier = 1;
        else if (multiplier === 5) multiplier += 2;
    }
    checksum = 10 - checksum % 10;
    return checksum === parseInt(tin[10], 10);
}
/*
* pt-BR validation function
* (Cadastro de Pessoas Físicas (CPF, persons)
* Cadastro Nacional de Pessoas Jurídicas (CNPJ, entities)
* Both inputs will be validated
*/ function ptBrCheck(tin) {
    if (tin.length === 11) {
        var _sum;
        var remainder;
        _sum = 0;
        if (// Reject known invalid CPFs
        tin === '11111111111' || tin === '22222222222' || tin === '33333333333' || tin === '44444444444' || tin === '55555555555' || tin === '66666666666' || tin === '77777777777' || tin === '88888888888' || tin === '99999999999' || tin === '00000000000') return false;
        for(var i = 1; i <= 9; i++)_sum += parseInt(tin.substring(i - 1, i), 10) * (11 - i);
        remainder = _sum * 10 % 11;
        if (remainder === 10) remainder = 0;
        if (remainder !== parseInt(tin.substring(9, 10), 10)) return false;
        _sum = 0;
        for(var _i8 = 1; _i8 <= 10; _i8++)_sum += parseInt(tin.substring(_i8 - 1, _i8), 10) * (12 - _i8);
        remainder = _sum * 10 % 11;
        if (remainder === 10) remainder = 0;
        if (remainder !== parseInt(tin.substring(10, 11), 10)) return false;
        return true;
    }
    if (// Reject know invalid CNPJs
    tin === '00000000000000' || tin === '11111111111111' || tin === '22222222222222' || tin === '33333333333333' || tin === '44444444444444' || tin === '55555555555555' || tin === '66666666666666' || tin === '77777777777777' || tin === '88888888888888' || tin === '99999999999999') return false;
    var length = tin.length - 2;
    var identifiers = tin.substring(0, length);
    var verificators = tin.substring(length);
    var sum = 0;
    var pos = length - 7;
    for(var _i9 = length; _i9 >= 1; _i9--){
        sum += identifiers.charAt(length - _i9) * pos;
        pos -= 1;
        if (pos < 2) pos = 9;
    }
    var result = sum % 11 < 2 ? 0 : 11 - sum % 11;
    if (result !== parseInt(verificators.charAt(0), 10)) return false;
    length += 1;
    identifiers = tin.substring(0, length);
    sum = 0;
    pos = length - 7;
    for(var _i10 = length; _i10 >= 1; _i10--){
        sum += identifiers.charAt(length - _i10) * pos;
        pos -= 1;
        if (pos < 2) pos = 9;
    }
    result = sum % 11 < 2 ? 0 : 11 - sum % 11;
    if (result !== parseInt(verificators.charAt(1), 10)) return false;
    return true;
}
/*
 * pt-PT validation function
 * (Número de identificação fiscal (NIF), persons/entities)
 * Verify TIN validity by calculating check (last) digit (variant of MOD 11)
 */ function ptPtCheck(tin) {
    var checksum = 11 - algorithms.reverseMultiplyAndSum(tin.split('').slice(0, 8).map(function(a) {
        return parseInt(a, 10);
    }), 9) % 11;
    if (checksum > 9) return parseInt(tin[8], 10) === 0;
    return checksum === parseInt(tin[8], 10);
}
/*
 * ro-RO validation function
 * (Cod Numeric Personal (CNP) or Cod de înregistrare fiscală (CIF),
 * persons only)
 * Verify CNP validity by calculating check (last) digit (test not found for CIF)
 * Material not in DG TAXUD document sourced from:
 * `https://en.wikipedia.org/wiki/National_identification_number#Romania`
 */ function roRoCheck(tin) {
    if (tin.slice(0, 4) !== '9000') {
        // No test found for this format
        // Extract full year using century digit if possible
        var full_year = tin.slice(1, 3);
        switch(tin[0]){
            case '1':
            case '2':
                full_year = "19".concat(full_year);
                break;
            case '3':
            case '4':
                full_year = "18".concat(full_year);
                break;
            case '5':
            case '6':
                full_year = "20".concat(full_year);
                break;
            default:
        }
        // Check date validity
        var date = "".concat(full_year, "/").concat(tin.slice(3, 5), "/").concat(tin.slice(5, 7));
        if (date.length === 8) {
            if (!(0, _isDate.default)(date, 'YY/MM/DD')) return false;
        } else if (!(0, _isDate.default)(date, 'YYYY/MM/DD')) return false;
        // Calculate check digit
        var digits = tin.split('').map(function(a) {
            return parseInt(a, 10);
        });
        var multipliers = [
            2,
            7,
            9,
            1,
            4,
            6,
            3,
            5,
            8,
            2,
            7,
            9
        ];
        var checksum = 0;
        for(var i = 0; i < multipliers.length; i++)checksum += digits[i] * multipliers[i];
        if (checksum % 11 === 10) return digits[12] === 1;
        return digits[12] === checksum % 11;
    }
    return true;
}
/*
 * sk-SK validation function
 * (Rodné číslo (RČ) or bezvýznamové identifikačné číslo (BIČ), persons only)
 * Checks validity of pre-1954 birth numbers (rodné číslo) only
 * Due to the introduction of the pseudo-random BIČ it is not possible to test
 * post-1954 birth numbers without knowing whether they are BIČ or RČ beforehand
 */ function skSkCheck(tin) {
    if (tin.length === 9) {
        tin = tin.replace(/\W/, '');
        if (tin.slice(6) === '000') return false;
         // Three-zero serial not assigned before 1954
        // Extract full year from TIN length
        var full_year = parseInt(tin.slice(0, 2), 10);
        if (full_year > 53) return false;
        if (full_year < 10) full_year = "190".concat(full_year);
        else full_year = "19".concat(full_year);
        // Extract month from TIN and normalize
        var month = parseInt(tin.slice(2, 4), 10);
        if (month > 50) month -= 50;
        if (month < 10) month = "0".concat(month);
        // Check date validity
        var date = "".concat(full_year, "/").concat(month, "/").concat(tin.slice(4, 6));
        if (!(0, _isDate.default)(date, 'YYYY/MM/DD')) return false;
    }
    return true;
}
/*
 * sl-SI validation function
 * (Davčna številka, persons/entities)
 * Verify TIN validity by calculating check (last) digit (variant of MOD 11)
 */ function slSiCheck(tin) {
    var checksum = 11 - algorithms.reverseMultiplyAndSum(tin.split('').slice(0, 7).map(function(a) {
        return parseInt(a, 10);
    }), 8) % 11;
    if (checksum === 10) return parseInt(tin[7], 10) === 0;
    return checksum === parseInt(tin[7], 10);
}
/*
 * sv-SE validation function
 * (Personnummer or samordningsnummer, persons only)
 * Checks validity of birth date and calls luhnCheck() to validate check (last) digit
 */ function svSeCheck(tin) {
    // Make copy of TIN and normalize to two-digit year form
    var tin_copy = tin.slice(0);
    if (tin.length > 11) tin_copy = tin_copy.slice(2);
    // Extract date of birth
    var full_year = '';
    var month = tin_copy.slice(2, 4);
    var day = parseInt(tin_copy.slice(4, 6), 10);
    if (tin.length > 11) full_year = tin.slice(0, 4);
    else {
        full_year = tin.slice(0, 2);
        if (tin.length === 11 && day < 60) {
            // Extract full year from centenarian symbol
            // Should work just fine until year 10000 or so
            var current_year = new Date().getFullYear().toString();
            var current_century = parseInt(current_year.slice(0, 2), 10);
            current_year = parseInt(current_year, 10);
            if (tin[6] === '-') {
                if (parseInt("".concat(current_century).concat(full_year), 10) > current_year) full_year = "".concat(current_century - 1).concat(full_year);
                else full_year = "".concat(current_century).concat(full_year);
            } else {
                full_year = "".concat(current_century - 1).concat(full_year);
                if (current_year - parseInt(full_year, 10) < 100) return false;
            }
        }
    }
    // Normalize day and check date validity
    if (day > 60) day -= 60;
    if (day < 10) day = "0".concat(day);
    var date = "".concat(full_year, "/").concat(month, "/").concat(day);
    if (date.length === 8) {
        if (!(0, _isDate.default)(date, 'YY/MM/DD')) return false;
    } else if (!(0, _isDate.default)(date, 'YYYY/MM/DD')) return false;
    return algorithms.luhnCheck(tin.replace(/\W/, ''));
}
/**
 * uk-UA validation function
 * Verify TIN validity by calculating check (last) digit (variant of MOD 11)
 */ function ukUaCheck(tin) {
    // Calculate check digit
    var digits = tin.split('').map(function(a) {
        return parseInt(a, 10);
    });
    var multipliers = [
        -1,
        5,
        7,
        9,
        4,
        6,
        10,
        5,
        7
    ];
    var checksum = 0;
    for(var i = 0; i < multipliers.length; i++)checksum += digits[i] * multipliers[i];
    return checksum % 11 === 10 ? digits[9] === 0 : digits[9] === checksum % 11;
}
// Locale lookup objects
/*
 * Tax id regex formats for various locales
 *
 * Where not explicitly specified in DG-TAXUD document both
 * uppercase and lowercase letters are acceptable.
 */ var taxIdFormat = {
    'bg-BG': /^\d{10}$/,
    'cs-CZ': /^\d{6}\/{0,1}\d{3,4}$/,
    'de-AT': /^\d{9}$/,
    'de-DE': /^[1-9]\d{10}$/,
    'dk-DK': /^\d{6}-{0,1}\d{4}$/,
    'el-CY': /^[09]\d{7}[A-Z]$/,
    'el-GR': /^([0-4]|[7-9])\d{8}$/,
    'en-CA': /^\d{9}$/,
    'en-GB': /^\d{10}$|^(?!GB|NK|TN|ZZ)(?![DFIQUV])[A-Z](?![DFIQUVO])[A-Z]\d{6}[ABCD ]$/i,
    'en-IE': /^\d{7}[A-W][A-IW]{0,1}$/i,
    'en-US': /^\d{2}[- ]{0,1}\d{7}$/,
    'es-AR': /(20|23|24|27|30|33|34)[0-9]{8}[0-9]/,
    'es-ES': /^(\d{0,8}|[XYZKLM]\d{7})[A-HJ-NP-TV-Z]$/i,
    'et-EE': /^[1-6]\d{6}(00[1-9]|0[1-9][0-9]|[1-6][0-9]{2}|70[0-9]|710)\d$/,
    'fi-FI': /^\d{6}[-+A]\d{3}[0-9A-FHJ-NPR-Y]$/i,
    'fr-BE': /^\d{11}$/,
    'fr-FR': /^[0-3]\d{12}$|^[0-3]\d\s\d{2}(\s\d{3}){3}$/,
    // Conforms both to official spec and provided example
    'fr-LU': /^\d{13}$/,
    'hr-HR': /^\d{11}$/,
    'hu-HU': /^8\d{9}$/,
    'it-IT': /^[A-Z]{6}[L-NP-V0-9]{2}[A-EHLMPRST][L-NP-V0-9]{2}[A-ILMZ][L-NP-V0-9]{3}[A-Z]$/i,
    'lv-LV': /^\d{6}-{0,1}\d{5}$/,
    // Conforms both to DG TAXUD spec and original research
    'mt-MT': /^\d{3,7}[APMGLHBZ]$|^([1-8])\1\d{7}$/i,
    'nl-NL': /^\d{9}$/,
    'pl-PL': /^\d{10,11}$/,
    'pt-BR': /(?:^\d{11}$)|(?:^\d{14}$)/,
    'pt-PT': /^\d{9}$/,
    'ro-RO': /^\d{13}$/,
    'sk-SK': /^\d{6}\/{0,1}\d{3,4}$/,
    'sl-SI': /^[1-9]\d{7}$/,
    'sv-SE': /^(\d{6}[-+]{0,1}\d{4}|(18|19|20)\d{6}[-+]{0,1}\d{4})$/,
    'uk-UA': /^\d{10}$/
};
// taxIdFormat locale aliases
taxIdFormat['lb-LU'] = taxIdFormat['fr-LU'];
taxIdFormat['lt-LT'] = taxIdFormat['et-EE'];
taxIdFormat['nl-BE'] = taxIdFormat['fr-BE'];
taxIdFormat['fr-CA'] = taxIdFormat['en-CA'];
// Algorithmic tax id check functions for various locales
var taxIdCheck = {
    'bg-BG': bgBgCheck,
    'cs-CZ': csCzCheck,
    'de-AT': deAtCheck,
    'de-DE': deDeCheck,
    'dk-DK': dkDkCheck,
    'el-CY': elCyCheck,
    'el-GR': elGrCheck,
    'en-CA': isCanadianSIN,
    'en-IE': enIeCheck,
    'en-US': enUsCheck,
    'es-AR': esArCheck,
    'es-ES': esEsCheck,
    'et-EE': etEeCheck,
    'fi-FI': fiFiCheck,
    'fr-BE': frBeCheck,
    'fr-FR': frFrCheck,
    'fr-LU': frLuCheck,
    'hr-HR': hrHrCheck,
    'hu-HU': huHuCheck,
    'it-IT': itItCheck,
    'lv-LV': lvLvCheck,
    'mt-MT': mtMtCheck,
    'nl-NL': nlNlCheck,
    'pl-PL': plPlCheck,
    'pt-BR': ptBrCheck,
    'pt-PT': ptPtCheck,
    'ro-RO': roRoCheck,
    'sk-SK': skSkCheck,
    'sl-SI': slSiCheck,
    'sv-SE': svSeCheck,
    'uk-UA': ukUaCheck
};
// taxIdCheck locale aliases
taxIdCheck['lb-LU'] = taxIdCheck['fr-LU'];
taxIdCheck['lt-LT'] = taxIdCheck['et-EE'];
taxIdCheck['nl-BE'] = taxIdCheck['fr-BE'];
taxIdCheck['fr-CA'] = taxIdCheck['en-CA'];
// Regexes for locales where characters should be omitted before checking format
var allsymbols = /[-\\\/!@#$%\^&\*\(\)\+\=\[\]]+/g;
var sanitizeRegexes = {
    'de-AT': allsymbols,
    'de-DE': /[\/\\]/g,
    'fr-BE': allsymbols
};
// sanitizeRegexes locale aliases
sanitizeRegexes['nl-BE'] = sanitizeRegexes['fr-BE'];
/*
 * Validator function
 * Return true if the passed string is a valid tax identification number
 * for the specified locale.
 * Throw an error exception if the locale is not supported.
 */ function isTaxID(str) {
    var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en-US';
    (0, _assertString.default)(str);
    // Copy TIN to avoid replacement if sanitized
    var strcopy = str.slice(0);
    if (locale in taxIdFormat) {
        if (locale in sanitizeRegexes) strcopy = strcopy.replace(sanitizeRegexes[locale], '');
        if (!taxIdFormat[locale].test(strcopy)) return false;
        if (locale in taxIdCheck) return taxIdCheck[locale](strcopy);
        // Fallthrough; not all locales have algorithmic checks
        return true;
    }
    throw new Error("Invalid locale '".concat(locale, "'"));
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"79f64cb44c2530a":"dGQqH","c14e0a9edffe0e65":"1HfIt","5ed6659e234b0708":"243yZ"}],"1HfIt":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.iso7064Check = iso7064Check;
exports.luhnCheck = luhnCheck;
exports.reverseMultiplyAndSum = reverseMultiplyAndSum;
exports.verhoeffCheck = verhoeffCheck;
/**
 * Algorithmic validation functions
 * May be used as is or implemented in the workflow of other validators.
 */ /*
 * ISO 7064 validation function
 * Called with a string of numbers (incl. check digit)
 * to validate according to ISO 7064 (MOD 11, 10).
 */ function iso7064Check(str) {
    var checkvalue = 10;
    for(var i = 0; i < str.length - 1; i++)checkvalue = (parseInt(str[i], 10) + checkvalue) % 10 === 0 ? 9 : (parseInt(str[i], 10) + checkvalue) % 10 * 2 % 11;
    checkvalue = checkvalue === 1 ? 0 : 11 - checkvalue;
    return checkvalue === parseInt(str[10], 10);
}
/*
 * Luhn (mod 10) validation function
 * Called with a string of numbers (incl. check digit)
 * to validate according to the Luhn algorithm.
 */ function luhnCheck(str) {
    var checksum = 0;
    var second = false;
    for(var i = str.length - 1; i >= 0; i--){
        if (second) {
            var product = parseInt(str[i], 10) * 2;
            if (product > 9) // sum digits of product and add to checksum
            checksum += product.toString().split('').map(function(a) {
                return parseInt(a, 10);
            }).reduce(function(a, b) {
                return a + b;
            }, 0);
            else checksum += product;
        } else checksum += parseInt(str[i], 10);
        second = !second;
    }
    return checksum % 10 === 0;
}
/*
 * Reverse TIN multiplication and summation helper function
 * Called with an array of single-digit integers and a base multiplier
 * to calculate the sum of the digits multiplied in reverse.
 * Normally used in variations of MOD 11 algorithmic checks.
 */ function reverseMultiplyAndSum(digits, base) {
    var total = 0;
    for(var i = 0; i < digits.length; i++)total += digits[i] * (base - i);
    return total;
}
/*
 * Verhoeff validation helper function
 * Called with a string of numbers
 * to validate according to the Verhoeff algorithm.
 */ function verhoeffCheck(str) {
    var d_table = [
        [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9
        ],
        [
            1,
            2,
            3,
            4,
            0,
            6,
            7,
            8,
            9,
            5
        ],
        [
            2,
            3,
            4,
            0,
            1,
            7,
            8,
            9,
            5,
            6
        ],
        [
            3,
            4,
            0,
            1,
            2,
            8,
            9,
            5,
            6,
            7
        ],
        [
            4,
            0,
            1,
            2,
            3,
            9,
            5,
            6,
            7,
            8
        ],
        [
            5,
            9,
            8,
            7,
            6,
            0,
            4,
            3,
            2,
            1
        ],
        [
            6,
            5,
            9,
            8,
            7,
            1,
            0,
            4,
            3,
            2
        ],
        [
            7,
            6,
            5,
            9,
            8,
            2,
            1,
            0,
            4,
            3
        ],
        [
            8,
            7,
            6,
            5,
            9,
            3,
            2,
            1,
            0,
            4
        ],
        [
            9,
            8,
            7,
            6,
            5,
            4,
            3,
            2,
            1,
            0
        ]
    ];
    var p_table = [
        [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9
        ],
        [
            1,
            5,
            7,
            6,
            2,
            8,
            3,
            0,
            9,
            4
        ],
        [
            5,
            8,
            0,
            3,
            7,
            9,
            6,
            1,
            4,
            2
        ],
        [
            8,
            9,
            1,
            6,
            0,
            4,
            3,
            5,
            2,
            7
        ],
        [
            9,
            4,
            5,
            3,
            1,
            2,
            6,
            8,
            7,
            0
        ],
        [
            4,
            2,
            8,
            6,
            5,
            7,
            3,
            9,
            0,
            1
        ],
        [
            2,
            7,
            9,
            3,
            8,
            0,
            6,
            4,
            1,
            5
        ],
        [
            7,
            0,
            4,
            6,
            9,
            1,
            3,
            2,
            5,
            8
        ]
    ];
    // Copy (to prevent replacement) and reverse
    var str_copy = str.split('').reverse().join('');
    var checksum = 0;
    for(var i = 0; i < str_copy.length; i++)checksum = d_table[checksum][p_table[i % 8][parseInt(str_copy[i], 10)]];
    return checksum === 0;
}

},{}],"i6GBo":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isMobilePhone;
exports.locales = void 0;
var _assertString = _interopRequireDefault(require("597548b071f799d0"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
/* eslint-disable max-len */ var phones = {
    'am-AM': /^(\+?374|0)(33|4[134]|55|77|88|9[13-689])\d{6}$/,
    'ar-AE': /^((\+?971)|0)?5[024568]\d{7}$/,
    'ar-BH': /^(\+?973)?(3|6)\d{7}$/,
    'ar-DZ': /^(\+?213|0)(5|6|7)\d{8}$/,
    'ar-LB': /^(\+?961)?((3|81)\d{6}|7\d{7})$/,
    'ar-EG': /^((\+?20)|0)?1[0125]\d{8}$/,
    'ar-IQ': /^(\+?964|0)?7[0-9]\d{8}$/,
    'ar-JO': /^(\+?962|0)?7[789]\d{7}$/,
    'ar-KW': /^(\+?965)([569]\d{7}|41\d{6})$/,
    'ar-LY': /^((\+?218)|0)?(9[1-6]\d{7}|[1-8]\d{7,9})$/,
    'ar-MA': /^(?:(?:\+|00)212|0)[5-7]\d{8}$/,
    'ar-OM': /^((\+|00)968)?(9[1-9])\d{6}$/,
    'ar-PS': /^(\+?970|0)5[6|9](\d{7})$/,
    'ar-SA': /^(!?(\+?966)|0)?5\d{8}$/,
    'ar-SD': /^((\+?249)|0)?(9[012369]|1[012])\d{7}$/,
    'ar-SY': /^(!?(\+?963)|0)?9\d{8}$/,
    'ar-TN': /^(\+?216)?[2459]\d{7}$/,
    'az-AZ': /^(\+994|0)(10|5[015]|7[07]|99)\d{7}$/,
    'bs-BA': /^((((\+|00)3876)|06))((([0-3]|[5-6])\d{6})|(4\d{7}))$/,
    'be-BY': /^(\+?375)?(24|25|29|33|44)\d{7}$/,
    'bg-BG': /^(\+?359|0)?8[789]\d{7}$/,
    'bn-BD': /^(\+?880|0)1[13456789][0-9]{8}$/,
    'ca-AD': /^(\+376)?[346]\d{5}$/,
    'cs-CZ': /^(\+?420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
    'da-DK': /^(\+?45)?\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/,
    'de-DE': /^((\+49|0)1)(5[0-25-9]\d|6([23]|0\d?)|7([0-57-9]|6\d))\d{7,9}$/,
    'de-AT': /^(\+43|0)\d{1,4}\d{3,12}$/,
    'de-CH': /^(\+41|0)([1-9])\d{1,9}$/,
    'de-LU': /^(\+352)?((6\d1)\d{6})$/,
    'dv-MV': /^(\+?960)?(7[2-9]|9[1-9])\d{5}$/,
    'el-GR': /^(\+?30|0)?6(8[5-9]|9(?![26])[0-9])\d{7}$/,
    'el-CY': /^(\+?357?)?(9(9|6)\d{6})$/,
    'en-AI': /^(\+?1|0)264(?:2(35|92)|4(?:6[1-2]|76|97)|5(?:3[6-9]|8[1-4])|7(?:2(4|9)|72))\d{4}$/,
    'en-AU': /^(\+?61|0)4\d{8}$/,
    'en-AG': /^(?:\+1|1)268(?:464|7(?:1[3-9]|[28]\d|3[0246]|64|7[0-689]))\d{4}$/,
    'en-BM': /^(\+?1)?441(((3|7)\d{6}$)|(5[0-3][0-9]\d{4}$)|(59\d{5}$))/,
    'en-BS': /^(\+?1[-\s]?|0)?\(?242\)?[-\s]?\d{3}[-\s]?\d{4}$/,
    'en-GB': /^(\+?44|0)7\d{9}$/,
    'en-GG': /^(\+?44|0)1481\d{6}$/,
    'en-GH': /^(\+233|0)(20|50|24|54|27|57|26|56|23|28|55|59)\d{7}$/,
    'en-GY': /^(\+592|0)6\d{6}$/,
    'en-HK': /^(\+?852[-\s]?)?[456789]\d{3}[-\s]?\d{4}$/,
    'en-MO': /^(\+?853[-\s]?)?[6]\d{3}[-\s]?\d{4}$/,
    'en-IE': /^(\+?353|0)8[356789]\d{7}$/,
    'en-IN': /^(\+?91|0)?[6789]\d{9}$/,
    'en-JM': /^(\+?876)?\d{7}$/,
    'en-KE': /^(\+?254|0)(7|1)\d{8}$/,
    'fr-CF': /^(\+?236| ?)(70|75|77|72|21|22)\d{6}$/,
    'en-SS': /^(\+?211|0)(9[1257])\d{7}$/,
    'en-KI': /^((\+686|686)?)?( )?((6|7)(2|3|8)[0-9]{6})$/,
    'en-KN': /^(?:\+1|1)869(?:46\d|48[89]|55[6-8]|66\d|76[02-7])\d{4}$/,
    'en-LS': /^(\+?266)(22|28|57|58|59|27|52)\d{6}$/,
    'en-MT': /^(\+?356|0)?(99|79|77|21|27|22|25)[0-9]{6}$/,
    'en-MU': /^(\+?230|0)?\d{8}$/,
    'en-MW': /^(\+?265|0)(((77|88|31|99|98|21)\d{7})|(((111)|1)\d{6})|(32000\d{4}))$/,
    'en-NA': /^(\+?264|0)(6|8)\d{7}$/,
    'en-NG': /^(\+?234|0)?[789]\d{9}$/,
    'en-NZ': /^(\+?64|0)[28]\d{7,9}$/,
    'en-PG': /^(\+?675|0)?(7\d|8[18])\d{6}$/,
    'en-PK': /^((00|\+)?92|0)3[0-6]\d{8}$/,
    'en-PH': /^(09|\+639)\d{9}$/,
    'en-RW': /^(\+?250|0)?[7]\d{8}$/,
    'en-SG': /^(\+65)?[3689]\d{7}$/,
    'en-SL': /^(\+?232|0)\d{8}$/,
    'en-TZ': /^(\+?255|0)?[67]\d{8}$/,
    'en-UG': /^(\+?256|0)?[7]\d{8}$/,
    'en-US': /^((\+1|1)?( |-)?)?(\([2-9][0-9]{2}\)|[2-9][0-9]{2})( |-)?([2-9][0-9]{2}( |-)?[0-9]{4})$/,
    'en-ZA': /^(\+?27|0)\d{9}$/,
    'en-ZM': /^(\+?26)?09[567]\d{7}$/,
    'en-ZW': /^(\+263)[0-9]{9}$/,
    'en-BW': /^(\+?267)?(7[1-8]{1})\d{6}$/,
    'es-AR': /^\+?549(11|[2368]\d)\d{8}$/,
    'es-BO': /^(\+?591)?(6|7)\d{7}$/,
    'es-CO': /^(\+?57)?3(0(0|1|2|4|5)|1\d|2[0-4]|5(0|1))\d{7}$/,
    'es-CL': /^(\+?56|0)[2-9]\d{1}\d{7}$/,
    'es-CR': /^(\+506)?[2-8]\d{7}$/,
    'es-CU': /^(\+53|0053)?5\d{7}$/,
    'es-DO': /^(\+?1)?8[024]9\d{7}$/,
    'es-HN': /^(\+?504)?[9|8|3|2]\d{7}$/,
    'es-EC': /^(\+?593|0)([2-7]|9[2-9])\d{7}$/,
    'es-ES': /^(\+?34)?[6|7]\d{8}$/,
    'es-PE': /^(\+?51)?9\d{8}$/,
    'es-MX': /^(\+?52)?(1|01)?\d{10,11}$/,
    'es-NI': /^(\+?505)\d{7,8}$/,
    'es-PA': /^(\+?507)\d{7,8}$/,
    'es-PY': /^(\+?595|0)9[9876]\d{7}$/,
    'es-SV': /^(\+?503)?[67]\d{7}$/,
    'es-UY': /^(\+598|0)9[1-9][\d]{6}$/,
    'es-VE': /^(\+?58)?(2|4)\d{9}$/,
    'et-EE': /^(\+?372)?\s?(5|8[1-4])\s?([0-9]\s?){6,7}$/,
    'fa-IR': /^(\+?98[\-\s]?|0)9[0-39]\d[\-\s]?\d{3}[\-\s]?\d{4}$/,
    'fi-FI': /^(\+?358|0)\s?(4[0-6]|50)\s?(\d\s?){4,8}$/,
    'fj-FJ': /^(\+?679)?\s?\d{3}\s?\d{4}$/,
    'fo-FO': /^(\+?298)?\s?\d{2}\s?\d{2}\s?\d{2}$/,
    'fr-BF': /^(\+226|0)[67]\d{7}$/,
    'fr-BJ': /^(\+229)\d{8}$/,
    'fr-CD': /^(\+?243|0)?(8|9)\d{8}$/,
    'fr-CM': /^(\+?237)6[0-9]{8}$/,
    'fr-FR': /^(\+?33|0)[67]\d{8}$/,
    'fr-GF': /^(\+?594|0|00594)[67]\d{8}$/,
    'fr-GP': /^(\+?590|0|00590)[67]\d{8}$/,
    'fr-MQ': /^(\+?596|0|00596)[67]\d{8}$/,
    'fr-PF': /^(\+?689)?8[789]\d{6}$/,
    'fr-RE': /^(\+?262|0|00262)[67]\d{8}$/,
    'fr-WF': /^(\+681)?\d{6}$/,
    'he-IL': /^(\+972|0)([23489]|5[012345689]|77)[1-9]\d{6}$/,
    'hu-HU': /^(\+?36|06)(20|30|31|50|70)\d{7}$/,
    'id-ID': /^(\+?62|0)8(1[123456789]|2[1238]|3[1238]|5[12356789]|7[78]|9[56789]|8[123456789])([\s?|\d]{5,11})$/,
    'ir-IR': /^(\+98|0)?9\d{9}$/,
    'it-IT': /^(\+?39)?\s?3\d{2} ?\d{6,7}$/,
    'it-SM': /^((\+378)|(0549)|(\+390549)|(\+3780549))?6\d{5,9}$/,
    'ja-JP': /^(\+81[ \-]?(\(0\))?|0)[6789]0[ \-]?\d{4}[ \-]?\d{4}$/,
    'ka-GE': /^(\+?995)?(79\d{7}|5\d{8})$/,
    'kk-KZ': /^(\+?7|8)?7\d{9}$/,
    'kl-GL': /^(\+?299)?\s?\d{2}\s?\d{2}\s?\d{2}$/,
    'ko-KR': /^((\+?82)[ \-]?)?0?1([0|1|6|7|8|9]{1})[ \-]?\d{3,4}[ \-]?\d{4}$/,
    'ky-KG': /^(\+?7\s?\+?7|0)\s?\d{2}\s?\d{3}\s?\d{4}$/,
    'lt-LT': /^(\+370|8)\d{8}$/,
    'lv-LV': /^(\+?371)2\d{7}$/,
    'mg-MG': /^((\+?261|0)(2|3)\d)?\d{7}$/,
    'mn-MN': /^(\+|00|011)?976(77|81|88|91|94|95|96|99)\d{6}$/,
    'my-MM': /^(\+?959|09|9)(2[5-7]|3[1-2]|4[0-5]|6[6-9]|7[5-9]|9[6-9])[0-9]{7}$/,
    'ms-MY': /^(\+?60|0)1(([0145](-|\s)?\d{7,8})|([236-9](-|\s)?\d{7}))$/,
    'mz-MZ': /^(\+?258)?8[234567]\d{7}$/,
    'nb-NO': /^(\+?47)?[49]\d{7}$/,
    'ne-NP': /^(\+?977)?9[78]\d{8}$/,
    'nl-BE': /^(\+?32|0)4\d{8}$/,
    'nl-NL': /^(((\+|00)?31\(0\))|((\+|00)?31)|0)6{1}\d{8}$/,
    'nl-AW': /^(\+)?297(56|59|64|73|74|99)\d{5}$/,
    'nn-NO': /^(\+?47)?[49]\d{7}$/,
    'pl-PL': /^(\+?48)? ?([5-8]\d|45) ?\d{3} ?\d{2} ?\d{2}$/,
    'pt-BR': /^((\+?55\ ?[1-9]{2}\ ?)|(\+?55\ ?\([1-9]{2}\)\ ?)|(0[1-9]{2}\ ?)|(\([1-9]{2}\)\ ?)|([1-9]{2}\ ?))((\d{4}\-?\d{4})|(9[1-9]{1}\d{3}\-?\d{4}))$/,
    'pt-PT': /^(\+?351)?9[1236]\d{7}$/,
    'pt-AO': /^(\+244)\d{9}$/,
    'ro-MD': /^(\+?373|0)((6(0|1|2|6|7|8|9))|(7(6|7|8|9)))\d{6}$/,
    'ro-RO': /^(\+?40|0)\s?7\d{2}(\/|\s|\.|-)?\d{3}(\s|\.|-)?\d{3}$/,
    'ru-RU': /^(\+?7|8)?9\d{9}$/,
    'si-LK': /^(?:0|94|\+94)?(7(0|1|2|4|5|6|7|8)( |-)?)\d{7}$/,
    'sl-SI': /^(\+386\s?|0)(\d{1}\s?\d{3}\s?\d{2}\s?\d{2}|\d{2}\s?\d{3}\s?\d{3})$/,
    'sk-SK': /^(\+?421)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
    'so-SO': /^(\+?252|0)((6[0-9])\d{7}|(7[1-9])\d{7})$/,
    'sq-AL': /^(\+355|0)6[789]\d{6}$/,
    'sr-RS': /^(\+3816|06)[- \d]{5,9}$/,
    'sv-SE': /^(\+?46|0)[\s\-]?7[\s\-]?[02369]([\s\-]?\d){7}$/,
    'tg-TJ': /^(\+?992)?[5][5]\d{7}$/,
    'th-TH': /^(\+66|66|0)\d{9}$/,
    'tr-TR': /^(\+?90|0)?5\d{9}$/,
    'tk-TM': /^(\+993|993|8)\d{8}$/,
    'uk-UA': /^(\+?38|8)?0\d{9}$/,
    'uz-UZ': /^(\+?998)?(6[125-79]|7[1-69]|88|9\d)\d{7}$/,
    'vi-VN': /^((\+?84)|0)((3([2-9]))|(5([25689]))|(7([0|6-9]))|(8([1-9]))|(9([0-9])))([0-9]{7})$/,
    'zh-CN': /^((\+|00)86)?(1[3-9]|9[28])\d{9}$/,
    'zh-TW': /^(\+?886\-?|0)?9\d{8}$/,
    'dz-BT': /^(\+?975|0)?(17|16|77|02)\d{6}$/,
    'ar-YE': /^(((\+|00)9677|0?7)[0137]\d{7}|((\+|00)967|0)[1-7]\d{6})$/,
    'ar-EH': /^(\+?212|0)[\s\-]?(5288|5289)[\s\-]?\d{5}$/,
    'fa-AF': /^(\+93|0)?(2{1}[0-8]{1}|[3-5]{1}[0-4]{1})(\d{7})$/
};
/* eslint-enable max-len */ // aliases
phones['en-CA'] = phones['en-US'];
phones['fr-CA'] = phones['en-CA'];
phones['fr-BE'] = phones['nl-BE'];
phones['zh-HK'] = phones['en-HK'];
phones['zh-MO'] = phones['en-MO'];
phones['ga-IE'] = phones['en-IE'];
phones['fr-CH'] = phones['de-CH'];
phones['it-CH'] = phones['fr-CH'];
function isMobilePhone(str, locale, options) {
    (0, _assertString.default)(str);
    if (options && options.strictMode && !str.startsWith('+')) return false;
    if (Array.isArray(locale)) return locale.some(function(key) {
        // https://github.com/gotwarlost/istanbul/blob/master/ignoring-code-for-coverage.md#ignoring-code-for-coverage-purposes
        // istanbul ignore else
        if (phones.hasOwnProperty(key)) {
            var phone = phones[key];
            if (phone.test(str)) return true;
        }
        return false;
    });
    else if (locale in phones) return phones[locale].test(str);
    else if (!locale || locale === 'any') {
        for(var key in phones)// istanbul ignore else
        if (phones.hasOwnProperty(key)) {
            var phone = phones[key];
            if (phone.test(str)) return true;
        }
        return false;
    }
    throw new Error("Invalid locale '".concat(locale, "'"));
}
var locales = exports.locales = Object.keys(phones);

},{"597548b071f799d0":"dGQqH"}],"aFDzQ":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isEthereumAddress;
var _assertString = _interopRequireDefault(require("de3278395f450524"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var eth = /^(0x)[0-9a-f]{40}$/i;
function isEthereumAddress(str) {
    (0, _assertString.default)(str);
    return eth.test(str);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"de3278395f450524":"dGQqH"}],"bhNj9":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isCurrency;
var _merge = _interopRequireDefault(require("467cb2454d92d9c5"));
var _assertString = _interopRequireDefault(require("77391667839297f8"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function currencyRegex(options) {
    var decimal_digits = "\\d{".concat(options.digits_after_decimal[0], "}");
    options.digits_after_decimal.forEach(function(digit, index) {
        if (index !== 0) decimal_digits = "".concat(decimal_digits, "|\\d{").concat(digit, "}");
    });
    var symbol = "(".concat(options.symbol.replace(/\W/, function(m) {
        return "\\".concat(m);
    }), ")").concat(options.require_symbol ? '' : '?'), negative = '-?', whole_dollar_amount_without_sep = '[1-9]\\d*', whole_dollar_amount_with_sep = "[1-9]\\d{0,2}(\\".concat(options.thousands_separator, "\\d{3})*"), valid_whole_dollar_amounts = [
        '0',
        whole_dollar_amount_without_sep,
        whole_dollar_amount_with_sep
    ], whole_dollar_amount = "(".concat(valid_whole_dollar_amounts.join('|'), ")?"), decimal_amount = "(\\".concat(options.decimal_separator, "(").concat(decimal_digits, "))").concat(options.require_decimal ? '' : '?');
    var pattern = whole_dollar_amount + (options.allow_decimal || options.require_decimal ? decimal_amount : '');
    // default is negative sign before symbol, but there are two other options (besides parens)
    if (options.allow_negatives && !options.parens_for_negatives) {
        if (options.negative_sign_after_digits) pattern += negative;
        else if (options.negative_sign_before_digits) pattern = negative + pattern;
    }
    // South African Rand, for example, uses R 123 (space) and R-123 (no space)
    if (options.allow_negative_sign_placeholder) pattern = "( (?!\\-))?".concat(pattern);
    else if (options.allow_space_after_symbol) pattern = " ?".concat(pattern);
    else if (options.allow_space_after_digits) pattern += '( (?!$))?';
    if (options.symbol_after_digits) pattern += symbol;
    else pattern = symbol + pattern;
    if (options.allow_negatives) {
        if (options.parens_for_negatives) pattern = "(\\(".concat(pattern, "\\)|").concat(pattern, ")");
        else if (!(options.negative_sign_before_digits || options.negative_sign_after_digits)) pattern = negative + pattern;
    }
    // ensure there's a dollar and/or decimal amount, and that
    // it doesn't start with a space or a negative sign followed by a space
    return new RegExp("^(?!-? )(?=.*\\d)".concat(pattern, "$"));
}
var default_currency_options = {
    symbol: '$',
    require_symbol: false,
    allow_space_after_symbol: false,
    symbol_after_digits: false,
    allow_negatives: true,
    parens_for_negatives: false,
    negative_sign_before_digits: false,
    negative_sign_after_digits: false,
    allow_negative_sign_placeholder: false,
    thousands_separator: ',',
    decimal_separator: '.',
    allow_decimal: true,
    require_decimal: false,
    digits_after_decimal: [
        2
    ],
    allow_space_after_digits: false
};
function isCurrency(str, options) {
    (0, _assertString.default)(str);
    options = (0, _merge.default)(options, default_currency_options);
    return currencyRegex(options).test(str);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"467cb2454d92d9c5":"c806a","77391667839297f8":"dGQqH"}],"33rsI":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isBtcAddress;
var _assertString = _interopRequireDefault(require("9e0eb8d87a25b3b2"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var bech32 = /^(bc1)[a-z0-9]{25,39}$/;
var base58 = /^(1|3)[A-HJ-NP-Za-km-z1-9]{25,39}$/;
function isBtcAddress(str) {
    (0, _assertString.default)(str);
    return bech32.test(str) || base58.test(str);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"9e0eb8d87a25b3b2":"dGQqH"}],"6WvHI":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isFreightContainerID = void 0;
exports.isISO6346 = isISO6346;
var _assertString = _interopRequireDefault(require("e78e39ae95a9b398"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
// https://en.wikipedia.org/wiki/ISO_6346
// according to ISO6346 standard, checksum digit is mandatory for freight container but recommended
// for other container types (J and Z)
var isISO6346Str = /^[A-Z]{3}(U[0-9]{7})|([J,Z][0-9]{6,7})$/;
var isDigit = /^[0-9]$/;
function isISO6346(str) {
    (0, _assertString.default)(str);
    str = str.toUpperCase();
    if (!isISO6346Str.test(str)) return false;
    if (str.length === 11) {
        var sum = 0;
        for(var i = 0; i < str.length - 1; i++)if (!isDigit.test(str[i])) {
            var convertedCode = void 0;
            var letterCode = str.charCodeAt(i) - 55;
            if (letterCode < 11) convertedCode = letterCode;
            else if (letterCode >= 11 && letterCode <= 20) convertedCode = 12 + letterCode % 11;
            else if (letterCode >= 21 && letterCode <= 30) convertedCode = 23 + letterCode % 21;
            else convertedCode = 34 + letterCode % 31;
            sum += convertedCode * Math.pow(2, i);
        } else sum += str[i] * Math.pow(2, i);
        var checkSumDigit = sum % 11;
        return Number(str[str.length - 1]) === checkSumDigit;
    }
    return true;
}
var isFreightContainerID = exports.isFreightContainerID = isISO6346;

},{"e78e39ae95a9b398":"dGQqH"}],"hb3R1":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isISO6391;
var _assertString = _interopRequireDefault(require("a302ab81c2caac4d"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var isISO6391Set = new Set([
    'aa',
    'ab',
    'ae',
    'af',
    'ak',
    'am',
    'an',
    'ar',
    'as',
    'av',
    'ay',
    'az',
    'az',
    'ba',
    'be',
    'bg',
    'bh',
    'bi',
    'bm',
    'bn',
    'bo',
    'br',
    'bs',
    'ca',
    'ce',
    'ch',
    'co',
    'cr',
    'cs',
    'cu',
    'cv',
    'cy',
    'da',
    'de',
    'dv',
    'dz',
    'ee',
    'el',
    'en',
    'eo',
    'es',
    'et',
    'eu',
    'fa',
    'ff',
    'fi',
    'fj',
    'fo',
    'fr',
    'fy',
    'ga',
    'gd',
    'gl',
    'gn',
    'gu',
    'gv',
    'ha',
    'he',
    'hi',
    'ho',
    'hr',
    'ht',
    'hu',
    'hy',
    'hz',
    'ia',
    'id',
    'ie',
    'ig',
    'ii',
    'ik',
    'io',
    'is',
    'it',
    'iu',
    'ja',
    'jv',
    'ka',
    'kg',
    'ki',
    'kj',
    'kk',
    'kl',
    'km',
    'kn',
    'ko',
    'kr',
    'ks',
    'ku',
    'kv',
    'kw',
    'ky',
    'la',
    'lb',
    'lg',
    'li',
    'ln',
    'lo',
    'lt',
    'lu',
    'lv',
    'mg',
    'mh',
    'mi',
    'mk',
    'ml',
    'mn',
    'mr',
    'ms',
    'mt',
    'my',
    'na',
    'nb',
    'nd',
    'ne',
    'ng',
    'nl',
    'nn',
    'no',
    'nr',
    'nv',
    'ny',
    'oc',
    'oj',
    'om',
    'or',
    'os',
    'pa',
    'pi',
    'pl',
    'ps',
    'pt',
    'qu',
    'rm',
    'rn',
    'ro',
    'ru',
    'rw',
    'sa',
    'sc',
    'sd',
    'se',
    'sg',
    'si',
    'sk',
    'sl',
    'sm',
    'sn',
    'so',
    'sq',
    'sr',
    'ss',
    'st',
    'su',
    'sv',
    'sw',
    'ta',
    'te',
    'tg',
    'th',
    'ti',
    'tk',
    'tl',
    'tn',
    'to',
    'tr',
    'ts',
    'tt',
    'tw',
    'ty',
    'ug',
    'uk',
    'ur',
    'uz',
    've',
    'vi',
    'vo',
    'wa',
    'wo',
    'xh',
    'yi',
    'yo',
    'za',
    'zh',
    'zu'
]);
function isISO6391(str) {
    (0, _assertString.default)(str);
    return isISO6391Set.has(str);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"a302ab81c2caac4d":"dGQqH"}],"fmSWm":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isISO8601;
var _assertString = _interopRequireDefault(require("c2dd34a89f8d77d3"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
/* eslint-disable max-len */ // from http://goo.gl/0ejHHW
var iso8601 = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;
// same as above, except with a strict 'T' separator between date and time
var iso8601StrictSeparator = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;
/* eslint-enable max-len */ var isValidDate = function isValidDate(str) {
    // str must have passed the ISO8601 check
    // this check is meant to catch invalid dates
    // like 2009-02-31
    // first check for ordinal dates
    var ordinalMatch = str.match(/^(\d{4})-?(\d{3})([ T]{1}\.*|$)/);
    if (ordinalMatch) {
        var oYear = Number(ordinalMatch[1]);
        var oDay = Number(ordinalMatch[2]);
        // if is leap year
        if (oYear % 4 === 0 && oYear % 100 !== 0 || oYear % 400 === 0) return oDay <= 366;
        return oDay <= 365;
    }
    var match = str.match(/(\d{4})-?(\d{0,2})-?(\d*)/).map(Number);
    var year = match[1];
    var month = match[2];
    var day = match[3];
    var monthString = month ? "0".concat(month).slice(-2) : month;
    var dayString = day ? "0".concat(day).slice(-2) : day;
    // create a date object and compare
    var d = new Date("".concat(year, "-").concat(monthString || '01', "-").concat(dayString || '01'));
    if (month && day) return d.getUTCFullYear() === year && d.getUTCMonth() + 1 === month && d.getUTCDate() === day;
    return true;
};
function isISO8601(str) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    (0, _assertString.default)(str);
    var check = options.strictSeparator ? iso8601StrictSeparator.test(str) : iso8601.test(str);
    if (check && options.strict) return isValidDate(str);
    return check;
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"c2dd34a89f8d77d3":"dGQqH"}],"dant0":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isRFC3339;
var _assertString = _interopRequireDefault(require("86cfcd153590f9be"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
/* Based on https://tools.ietf.org/html/rfc3339#section-5.6 */ var dateFullYear = /[0-9]{4}/;
var dateMonth = /(0[1-9]|1[0-2])/;
var dateMDay = /([12]\d|0[1-9]|3[01])/;
var timeHour = /([01][0-9]|2[0-3])/;
var timeMinute = /[0-5][0-9]/;
var timeSecond = /([0-5][0-9]|60)/;
var timeSecFrac = /(\.[0-9]+)?/;
var timeNumOffset = new RegExp("[-+]".concat(timeHour.source, ":").concat(timeMinute.source));
var timeOffset = new RegExp("([zZ]|".concat(timeNumOffset.source, ")"));
var partialTime = new RegExp("".concat(timeHour.source, ":").concat(timeMinute.source, ":").concat(timeSecond.source).concat(timeSecFrac.source));
var fullDate = new RegExp("".concat(dateFullYear.source, "-").concat(dateMonth.source, "-").concat(dateMDay.source));
var fullTime = new RegExp("".concat(partialTime.source).concat(timeOffset.source));
var rfc3339 = new RegExp("^".concat(fullDate.source, "[ tT]").concat(fullTime.source, "$"));
function isRFC3339(str) {
    (0, _assertString.default)(str);
    return rfc3339.test(str);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"86cfcd153590f9be":"dGQqH"}],"8L4qb":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isISO31661Alpha3;
var _assertString = _interopRequireDefault(require("b66458f65eaeb7a8"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
// from https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3
var validISO31661Alpha3CountriesCodes = new Set([
    'AFG',
    'ALA',
    'ALB',
    'DZA',
    'ASM',
    'AND',
    'AGO',
    'AIA',
    'ATA',
    'ATG',
    'ARG',
    'ARM',
    'ABW',
    'AUS',
    'AUT',
    'AZE',
    'BHS',
    'BHR',
    'BGD',
    'BRB',
    'BLR',
    'BEL',
    'BLZ',
    'BEN',
    'BMU',
    'BTN',
    'BOL',
    'BES',
    'BIH',
    'BWA',
    'BVT',
    'BRA',
    'IOT',
    'BRN',
    'BGR',
    'BFA',
    'BDI',
    'KHM',
    'CMR',
    'CAN',
    'CPV',
    'CYM',
    'CAF',
    'TCD',
    'CHL',
    'CHN',
    'CXR',
    'CCK',
    'COL',
    'COM',
    'COG',
    'COD',
    'COK',
    'CRI',
    'CIV',
    'HRV',
    'CUB',
    'CUW',
    'CYP',
    'CZE',
    'DNK',
    'DJI',
    'DMA',
    'DOM',
    'ECU',
    'EGY',
    'SLV',
    'GNQ',
    'ERI',
    'EST',
    'ETH',
    'FLK',
    'FRO',
    'FJI',
    'FIN',
    'FRA',
    'GUF',
    'PYF',
    'ATF',
    'GAB',
    'GMB',
    'GEO',
    'DEU',
    'GHA',
    'GIB',
    'GRC',
    'GRL',
    'GRD',
    'GLP',
    'GUM',
    'GTM',
    'GGY',
    'GIN',
    'GNB',
    'GUY',
    'HTI',
    'HMD',
    'VAT',
    'HND',
    'HKG',
    'HUN',
    'ISL',
    'IND',
    'IDN',
    'IRN',
    'IRQ',
    'IRL',
    'IMN',
    'ISR',
    'ITA',
    'JAM',
    'JPN',
    'JEY',
    'JOR',
    'KAZ',
    'KEN',
    'KIR',
    'PRK',
    'KOR',
    'KWT',
    'KGZ',
    'LAO',
    'LVA',
    'LBN',
    'LSO',
    'LBR',
    'LBY',
    'LIE',
    'LTU',
    'LUX',
    'MAC',
    'MKD',
    'MDG',
    'MWI',
    'MYS',
    'MDV',
    'MLI',
    'MLT',
    'MHL',
    'MTQ',
    'MRT',
    'MUS',
    'MYT',
    'MEX',
    'FSM',
    'MDA',
    'MCO',
    'MNG',
    'MNE',
    'MSR',
    'MAR',
    'MOZ',
    'MMR',
    'NAM',
    'NRU',
    'NPL',
    'NLD',
    'NCL',
    'NZL',
    'NIC',
    'NER',
    'NGA',
    'NIU',
    'NFK',
    'MNP',
    'NOR',
    'OMN',
    'PAK',
    'PLW',
    'PSE',
    'PAN',
    'PNG',
    'PRY',
    'PER',
    'PHL',
    'PCN',
    'POL',
    'PRT',
    'PRI',
    'QAT',
    'REU',
    'ROU',
    'RUS',
    'RWA',
    'BLM',
    'SHN',
    'KNA',
    'LCA',
    'MAF',
    'SPM',
    'VCT',
    'WSM',
    'SMR',
    'STP',
    'SAU',
    'SEN',
    'SRB',
    'SYC',
    'SLE',
    'SGP',
    'SXM',
    'SVK',
    'SVN',
    'SLB',
    'SOM',
    'ZAF',
    'SGS',
    'SSD',
    'ESP',
    'LKA',
    'SDN',
    'SUR',
    'SJM',
    'SWZ',
    'SWE',
    'CHE',
    'SYR',
    'TWN',
    'TJK',
    'TZA',
    'THA',
    'TLS',
    'TGO',
    'TKL',
    'TON',
    'TTO',
    'TUN',
    'TUR',
    'TKM',
    'TCA',
    'TUV',
    'UGA',
    'UKR',
    'ARE',
    'GBR',
    'USA',
    'UMI',
    'URY',
    'UZB',
    'VUT',
    'VEN',
    'VNM',
    'VGB',
    'VIR',
    'WLF',
    'ESH',
    'YEM',
    'ZMB',
    'ZWE'
]);
function isISO31661Alpha3(str) {
    (0, _assertString.default)(str);
    return validISO31661Alpha3CountriesCodes.has(str.toUpperCase());
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"b66458f65eaeb7a8":"dGQqH"}],"5m7Vp":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CurrencyCodes = void 0;
exports.default = isISO4217;
var _assertString = _interopRequireDefault(require("d9fda19acb9c39e8"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
// from https://en.wikipedia.org/wiki/ISO_4217
var validISO4217CurrencyCodes = new Set([
    'AED',
    'AFN',
    'ALL',
    'AMD',
    'ANG',
    'AOA',
    'ARS',
    'AUD',
    'AWG',
    'AZN',
    'BAM',
    'BBD',
    'BDT',
    'BGN',
    'BHD',
    'BIF',
    'BMD',
    'BND',
    'BOB',
    'BOV',
    'BRL',
    'BSD',
    'BTN',
    'BWP',
    'BYN',
    'BZD',
    'CAD',
    'CDF',
    'CHE',
    'CHF',
    'CHW',
    'CLF',
    'CLP',
    'CNY',
    'COP',
    'COU',
    'CRC',
    'CUC',
    'CUP',
    'CVE',
    'CZK',
    'DJF',
    'DKK',
    'DOP',
    'DZD',
    'EGP',
    'ERN',
    'ETB',
    'EUR',
    'FJD',
    'FKP',
    'GBP',
    'GEL',
    'GHS',
    'GIP',
    'GMD',
    'GNF',
    'GTQ',
    'GYD',
    'HKD',
    'HNL',
    'HRK',
    'HTG',
    'HUF',
    'IDR',
    'ILS',
    'INR',
    'IQD',
    'IRR',
    'ISK',
    'JMD',
    'JOD',
    'JPY',
    'KES',
    'KGS',
    'KHR',
    'KMF',
    'KPW',
    'KRW',
    'KWD',
    'KYD',
    'KZT',
    'LAK',
    'LBP',
    'LKR',
    'LRD',
    'LSL',
    'LYD',
    'MAD',
    'MDL',
    'MGA',
    'MKD',
    'MMK',
    'MNT',
    'MOP',
    'MRU',
    'MUR',
    'MVR',
    'MWK',
    'MXN',
    'MXV',
    'MYR',
    'MZN',
    'NAD',
    'NGN',
    'NIO',
    'NOK',
    'NPR',
    'NZD',
    'OMR',
    'PAB',
    'PEN',
    'PGK',
    'PHP',
    'PKR',
    'PLN',
    'PYG',
    'QAR',
    'RON',
    'RSD',
    'RUB',
    'RWF',
    'SAR',
    'SBD',
    'SCR',
    'SDG',
    'SEK',
    'SGD',
    'SHP',
    'SLE',
    'SLL',
    'SOS',
    'SRD',
    'SSP',
    'STN',
    'SVC',
    'SYP',
    'SZL',
    'THB',
    'TJS',
    'TMT',
    'TND',
    'TOP',
    'TRY',
    'TTD',
    'TWD',
    'TZS',
    'UAH',
    'UGX',
    'USD',
    'USN',
    'UYI',
    'UYU',
    'UYW',
    'UZS',
    'VES',
    'VND',
    'VUV',
    'WST',
    'XAF',
    'XAG',
    'XAU',
    'XBA',
    'XBB',
    'XBC',
    'XBD',
    'XCD',
    'XDR',
    'XOF',
    'XPD',
    'XPF',
    'XPT',
    'XSU',
    'XTS',
    'XUA',
    'XXX',
    'YER',
    'ZAR',
    'ZMW',
    'ZWL'
]);
function isISO4217(str) {
    (0, _assertString.default)(str);
    return validISO4217CurrencyCodes.has(str.toUpperCase());
}
var CurrencyCodes = exports.CurrencyCodes = validISO4217CurrencyCodes;

},{"d9fda19acb9c39e8":"dGQqH"}],"efPgQ":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isBase32;
var _assertString = _interopRequireDefault(require("e04b5f9108e14f5"));
var _merge = _interopRequireDefault(require("fb36489dbb8d1a3"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var base32 = /^[A-Z2-7]+=*$/;
var crockfordBase32 = /^[A-HJKMNP-TV-Z0-9]+$/;
var defaultBase32Options = {
    crockford: false
};
function isBase32(str, options) {
    (0, _assertString.default)(str);
    options = (0, _merge.default)(options, defaultBase32Options);
    if (options.crockford) return crockfordBase32.test(str);
    var len = str.length;
    if (len % 8 === 0 && base32.test(str)) return true;
    return false;
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"e04b5f9108e14f5":"dGQqH","fb36489dbb8d1a3":"c806a"}],"440T3":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isBase58;
var _assertString = _interopRequireDefault(require("891939a40323820e"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
// Accepted chars - 123456789ABCDEFGH JKLMN PQRSTUVWXYZabcdefghijk mnopqrstuvwxyz
var base58Reg = /^[A-HJ-NP-Za-km-z1-9]*$/;
function isBase58(str) {
    (0, _assertString.default)(str);
    if (base58Reg.test(str)) return true;
    return false;
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"891939a40323820e":"dGQqH"}],"hywF2":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isDataURI;
var _assertString = _interopRequireDefault(require("5760d2b424323bd7"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var validMediaType = /^[a-z]+\/[a-z0-9\-\+\._]+$/i;
var validAttribute = /^[a-z\-]+=[a-z0-9\-]+$/i;
var validData = /^[a-z0-9!\$&'\(\)\*\+,;=\-\._~:@\/\?%\s]*$/i;
function isDataURI(str) {
    (0, _assertString.default)(str);
    var data = str.split(',');
    if (data.length < 2) return false;
    var attributes = data.shift().trim().split(';');
    var schemeAndMediaType = attributes.shift();
    if (schemeAndMediaType.slice(0, 5) !== 'data:') return false;
    var mediaType = schemeAndMediaType.slice(5);
    if (mediaType !== '' && !validMediaType.test(mediaType)) return false;
    for(var i = 0; i < attributes.length; i++){
        if (!(i === attributes.length - 1 && attributes[i].toLowerCase() === 'base64') && !validAttribute.test(attributes[i])) return false;
    }
    for(var _i = 0; _i < data.length; _i++){
        if (!validData.test(data[_i])) return false;
    }
    return true;
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"5760d2b424323bd7":"dGQqH"}],"7vLF5":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isMagnetURI;
var _assertString = _interopRequireDefault(require("cabcc420a1ff2c36"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var magnetURIComponent = /(?:^magnet:\?|[^?&]&)xt(?:\.1)?=urn:(?:(?:aich|bitprint|btih|ed2k|ed2khash|kzhash|md5|sha1|tree:tiger):[a-z0-9]{32}(?:[a-z0-9]{8})?|btmh:1220[a-z0-9]{64})(?:$|&)/i;
function isMagnetURI(url) {
    (0, _assertString.default)(url);
    if (url.indexOf('magnet:?') !== 0) return false;
    return magnetURIComponent.test(url);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"cabcc420a1ff2c36":"dGQqH"}],"wsugG":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isMailtoURI;
var _trim = _interopRequireDefault(require("f4809b7c7e1a248c"));
var _isEmail = _interopRequireDefault(require("27c073114104de4f"));
var _assertString = _interopRequireDefault(require("d850f5a577aacd7b"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
        var e, n, i, u, a = [], f = !0, o = !1;
        try {
            if (i = (t = t.call(r)).next, 0 === l) {
                if (Object(t) !== t) return;
                f = !1;
            } else for(; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
        } catch (r) {
            o = !0, n = r;
        } finally{
            try {
                if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
            } finally{
                if (o) throw n;
            }
        }
        return a;
    }
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
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
            it = it.call(o);
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
function parseMailtoQueryString(queryString) {
    var allowedParams = new Set([
        'subject',
        'body',
        'cc',
        'bcc'
    ]), query = {
        cc: '',
        bcc: ''
    };
    var isParseFailed = false;
    var queryParams = queryString.split('&');
    if (queryParams.length > 4) return false;
    var _iterator = _createForOfIteratorHelper(queryParams), _step;
    try {
        for(_iterator.s(); !(_step = _iterator.n()).done;){
            var q = _step.value;
            var _q$split = q.split('='), _q$split2 = _slicedToArray(_q$split, 2), key = _q$split2[0], value = _q$split2[1];
            // checked for invalid and duplicated query params
            if (key && !allowedParams.has(key)) {
                isParseFailed = true;
                break;
            }
            if (value && (key === 'cc' || key === 'bcc')) query[key] = value;
            if (key) allowedParams.delete(key);
        }
    } catch (err) {
        _iterator.e(err);
    } finally{
        _iterator.f();
    }
    return isParseFailed ? false : query;
}
function isMailtoURI(url, options) {
    (0, _assertString.default)(url);
    if (url.indexOf('mailto:') !== 0) return false;
    var _url$replace$split = url.replace('mailto:', '').split('?'), _url$replace$split2 = _slicedToArray(_url$replace$split, 2), to = _url$replace$split2[0], _url$replace$split2$ = _url$replace$split2[1], queryString = _url$replace$split2$ === void 0 ? '' : _url$replace$split2$;
    if (!to && !queryString) return true;
    var query = parseMailtoQueryString(queryString);
    if (!query) return false;
    return "".concat(to, ",").concat(query.cc, ",").concat(query.bcc).split(',').every(function(email) {
        email = (0, _trim.default)(email, ' ');
        if (email) return (0, _isEmail.default)(email, options);
        return true;
    });
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"f4809b7c7e1a248c":"iVDTF","27c073114104de4f":"25fbl","d850f5a577aacd7b":"dGQqH"}],"iVDTF":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = trim;
var _rtrim = _interopRequireDefault(require("b763567f82768552"));
var _ltrim = _interopRequireDefault(require("f1918674a32c3c86"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function trim(str, chars) {
    return (0, _rtrim.default)((0, _ltrim.default)(str, chars), chars);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"b763567f82768552":"fMYnt","f1918674a32c3c86":"fJ9nZ"}],"fMYnt":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = rtrim;
var _assertString = _interopRequireDefault(require("3f937b9787a0d737"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function rtrim(str, chars) {
    (0, _assertString.default)(str);
    if (chars) {
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#Escaping
        var pattern = new RegExp("[".concat(chars.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), "]+$"), 'g');
        return str.replace(pattern, '');
    }
    // Use a faster and more safe than regex trim method https://blog.stevenlevithan.com/archives/faster-trim-javascript
    var strIndex = str.length - 1;
    while(/\s/.test(str.charAt(strIndex)))strIndex -= 1;
    return str.slice(0, strIndex + 1);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"3f937b9787a0d737":"dGQqH"}],"fJ9nZ":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = ltrim;
var _assertString = _interopRequireDefault(require("2f24039d4dd740d3"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function ltrim(str, chars) {
    (0, _assertString.default)(str);
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#Escaping
    var pattern = chars ? new RegExp("^[".concat(chars.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), "]+"), 'g') : /^\s+/g;
    return str.replace(pattern, '');
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"2f24039d4dd740d3":"dGQqH"}],"9WoRd":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isMimeType;
var _assertString = _interopRequireDefault(require("b1a5323c59cce3b7"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
/*
  Checks if the provided string matches to a correct Media type format (MIME type)

  This function only checks is the string format follows the
  etablished rules by the according RFC specifications.
  This function supports 'charset' in textual media types
  (https://tools.ietf.org/html/rfc6657).

  This function does not check against all the media types listed
  by the IANA (https://www.iana.org/assignments/media-types/media-types.xhtml)
  because of lightness purposes : it would require to include
  all these MIME types in this librairy, which would weigh it
  significantly. This kind of effort maybe is not worth for the use that
  this function has in this entire librairy.

  More informations in the RFC specifications :
  - https://tools.ietf.org/html/rfc2045
  - https://tools.ietf.org/html/rfc2046
  - https://tools.ietf.org/html/rfc7231#section-3.1.1.1
  - https://tools.ietf.org/html/rfc7231#section-3.1.1.5
*/ // Match simple MIME types
// NB :
//   Subtype length must not exceed 100 characters.
//   This rule does not comply to the RFC specs (what is the max length ?).
var mimeTypeSimple = /^(application|audio|font|image|message|model|multipart|text|video)\/[a-zA-Z0-9\.\-\+_]{1,100}$/i; // eslint-disable-line max-len
// Handle "charset" in "text/*"
var mimeTypeText = /^text\/[a-zA-Z0-9\.\-\+]{1,100};\s?charset=("[a-zA-Z0-9\.\-\+\s]{0,70}"|[a-zA-Z0-9\.\-\+]{0,70})(\s?\([a-zA-Z0-9\.\-\+\s]{1,20}\))?$/i; // eslint-disable-line max-len
// Handle "boundary" in "multipart/*"
var mimeTypeMultipart = /^multipart\/[a-zA-Z0-9\.\-\+]{1,100}(;\s?(boundary|charset)=("[a-zA-Z0-9\.\-\+\s]{0,70}"|[a-zA-Z0-9\.\-\+]{0,70})(\s?\([a-zA-Z0-9\.\-\+\s]{1,20}\))?){0,2}$/i; // eslint-disable-line max-len
function isMimeType(str) {
    (0, _assertString.default)(str);
    return mimeTypeSimple.test(str) || mimeTypeText.test(str) || mimeTypeMultipart.test(str);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"b1a5323c59cce3b7":"dGQqH"}],"kx63f":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isLatLong;
var _assertString = _interopRequireDefault(require("42ca4ce670edd2c0"));
var _merge = _interopRequireDefault(require("f246bd175997c1b5"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var lat = /^\(?[+-]?(90(\.0+)?|[1-8]?\d(\.\d+)?)$/;
var long = /^\s?[+-]?(180(\.0+)?|1[0-7]\d(\.\d+)?|\d{1,2}(\.\d+)?)\)?$/;
var latDMS = /^(([1-8]?\d)\D+([1-5]?\d|60)\D+([1-5]?\d|60)(\.\d+)?|90\D+0\D+0)\D+[NSns]?$/i;
var longDMS = /^\s*([1-7]?\d{1,2}\D+([1-5]?\d|60)\D+([1-5]?\d|60)(\.\d+)?|180\D+0\D+0)\D+[EWew]?$/i;
var defaultLatLongOptions = {
    checkDMS: false
};
function isLatLong(str, options) {
    (0, _assertString.default)(str);
    options = (0, _merge.default)(options, defaultLatLongOptions);
    if (!str.includes(',')) return false;
    var pair = str.split(',');
    if (pair[0].startsWith('(') && !pair[1].endsWith(')') || pair[1].endsWith(')') && !pair[0].startsWith('(')) return false;
    if (options.checkDMS) return latDMS.test(pair[0]) && longDMS.test(pair[1]);
    return lat.test(pair[0]) && long.test(pair[1]);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"42ca4ce670edd2c0":"dGQqH","f246bd175997c1b5":"c806a"}],"bGotF":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isPostalCode;
exports.locales = void 0;
var _assertString = _interopRequireDefault(require("af33e209d16f8276"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
// common patterns
var threeDigit = /^\d{3}$/;
var fourDigit = /^\d{4}$/;
var fiveDigit = /^\d{5}$/;
var sixDigit = /^\d{6}$/;
var patterns = {
    AD: /^AD\d{3}$/,
    AT: fourDigit,
    AU: fourDigit,
    AZ: /^AZ\d{4}$/,
    BA: /^([7-8]\d{4}$)/,
    BE: fourDigit,
    BG: fourDigit,
    BR: /^\d{5}-\d{3}$/,
    BY: /^2[1-4]\d{4}$/,
    CA: /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][\s\-]?\d[ABCEGHJ-NPRSTV-Z]\d$/i,
    CH: fourDigit,
    CN: /^(0[1-7]|1[012356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[1-5]|8[1345]|9[09])\d{4}$/,
    CZ: /^\d{3}\s?\d{2}$/,
    DE: fiveDigit,
    DK: fourDigit,
    DO: fiveDigit,
    DZ: fiveDigit,
    EE: fiveDigit,
    ES: /^(5[0-2]{1}|[0-4]{1}\d{1})\d{3}$/,
    FI: fiveDigit,
    FR: /^\d{2}\s?\d{3}$/,
    GB: /^(gir\s?0aa|[a-z]{1,2}\d[\da-z]?\s?(\d[a-z]{2})?)$/i,
    GR: /^\d{3}\s?\d{2}$/,
    HR: /^([1-5]\d{4}$)/,
    HT: /^HT\d{4}$/,
    HU: fourDigit,
    ID: fiveDigit,
    IE: /^(?!.*(?:o))[A-Za-z]\d[\dw]\s\w{4}$/i,
    IL: /^(\d{5}|\d{7})$/,
    IN: /^((?!10|29|35|54|55|65|66|86|87|88|89)[1-9][0-9]{5})$/,
    IR: /^(?!(\d)\1{3})[13-9]{4}[1346-9][013-9]{5}$/,
    IS: threeDigit,
    IT: fiveDigit,
    JP: /^\d{3}\-\d{4}$/,
    KE: fiveDigit,
    KR: /^(\d{5}|\d{6})$/,
    LI: /^(948[5-9]|949[0-7])$/,
    LT: /^LT\-\d{5}$/,
    LU: fourDigit,
    LV: /^LV\-\d{4}$/,
    LK: fiveDigit,
    MG: threeDigit,
    MX: fiveDigit,
    MT: /^[A-Za-z]{3}\s{0,1}\d{4}$/,
    MY: fiveDigit,
    NL: /^[1-9]\d{3}\s?(?!sa|sd|ss)[a-z]{2}$/i,
    NO: fourDigit,
    NP: /^(10|21|22|32|33|34|44|45|56|57)\d{3}$|^(977)$/i,
    NZ: fourDigit,
    PL: /^\d{2}\-\d{3}$/,
    PR: /^00[679]\d{2}([ -]\d{4})?$/,
    PT: /^\d{4}\-\d{3}?$/,
    RO: sixDigit,
    RU: sixDigit,
    SA: fiveDigit,
    SE: /^[1-9]\d{2}\s?\d{2}$/,
    SG: sixDigit,
    SI: fourDigit,
    SK: /^\d{3}\s?\d{2}$/,
    TH: fiveDigit,
    TN: fourDigit,
    TW: /^\d{3}(\d{2})?$/,
    UA: fiveDigit,
    US: /^\d{5}(-\d{4})?$/,
    ZA: fourDigit,
    ZM: fiveDigit
};
var locales = exports.locales = Object.keys(patterns);
function isPostalCode(str, locale) {
    (0, _assertString.default)(str);
    if (locale in patterns) return patterns[locale].test(str);
    else if (locale === 'any') {
        for(var key in patterns)// https://github.com/gotwarlost/istanbul/blob/master/ignoring-code-for-coverage.md#ignoring-code-for-coverage-purposes
        // istanbul ignore else
        if (patterns.hasOwnProperty(key)) {
            var pattern = patterns[key];
            if (pattern.test(str)) return true;
        }
        return false;
    }
    throw new Error("Invalid locale '".concat(locale, "'"));
}

},{"af33e209d16f8276":"dGQqH"}],"6CwX1":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = escape;
var _assertString = _interopRequireDefault(require("4f2ad27482ad15a0"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function escape(str) {
    (0, _assertString.default)(str);
    return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\//g, '&#x2F;').replace(/\\/g, '&#x5C;').replace(/`/g, '&#96;');
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"4f2ad27482ad15a0":"dGQqH"}],"drLU6":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = unescape;
var _assertString = _interopRequireDefault(require("9bb1978633a49334"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function unescape(str) {
    (0, _assertString.default)(str);
    return str.replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&#x2F;/g, '/').replace(/&#x5C;/g, '\\').replace(/&#96;/g, '`').replace(/&amp;/g, '&');
// &amp; replacement has to be the last one to prevent
// bugs with intermediate strings containing escape sequences
// See: https://github.com/validatorjs/validator.js/issues/1827
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"9bb1978633a49334":"dGQqH"}],"acEjg":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = stripLow;
var _assertString = _interopRequireDefault(require("e657450d3bf6e2e5"));
var _blacklist = _interopRequireDefault(require("adf963296d8f7393"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function stripLow(str, keep_new_lines) {
    (0, _assertString.default)(str);
    var chars = keep_new_lines ? '\\x00-\\x09\\x0B\\x0C\\x0E-\\x1F\\x7F' : '\\x00-\\x1F\\x7F';
    return (0, _blacklist.default)(str, chars);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"e657450d3bf6e2e5":"dGQqH","adf963296d8f7393":"hlY2T"}],"hlY2T":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = blacklist;
var _assertString = _interopRequireDefault(require("da17f86bfd8f9f06"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function blacklist(str, chars) {
    (0, _assertString.default)(str);
    return str.replace(new RegExp("[".concat(chars, "]+"), 'g'), '');
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"da17f86bfd8f9f06":"dGQqH"}],"alKRu":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = whitelist;
var _assertString = _interopRequireDefault(require("fd66d8d8bf0ad43"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function whitelist(str, chars) {
    (0, _assertString.default)(str);
    return str.replace(new RegExp("[^".concat(chars, "]+"), 'g'), '');
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"fd66d8d8bf0ad43":"dGQqH"}],"dxEdr":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isWhitelisted;
var _assertString = _interopRequireDefault(require("5e47d1f865a8d574"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function isWhitelisted(str, chars) {
    (0, _assertString.default)(str);
    for(var i = str.length - 1; i >= 0; i--){
        if (chars.indexOf(str[i]) === -1) return false;
    }
    return true;
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"5e47d1f865a8d574":"dGQqH"}],"haeN5":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = normalizeEmail;
var _merge = _interopRequireDefault(require("3d767513579b6391"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var default_normalize_email_options = {
    // The following options apply to all email addresses
    // Lowercases the local part of the email address.
    // Please note this may violate RFC 5321 as per http://stackoverflow.com/a/9808332/192024).
    // The domain is always lowercased, as per RFC 1035
    all_lowercase: true,
    // The following conversions are specific to GMail
    // Lowercases the local part of the GMail address (known to be case-insensitive)
    gmail_lowercase: true,
    // Removes dots from the local part of the email address, as that's ignored by GMail
    gmail_remove_dots: true,
    // Removes the subaddress (e.g. "+foo") from the email address
    gmail_remove_subaddress: true,
    // Conversts the googlemail.com domain to gmail.com
    gmail_convert_googlemaildotcom: true,
    // The following conversions are specific to Outlook.com / Windows Live / Hotmail
    // Lowercases the local part of the Outlook.com address (known to be case-insensitive)
    outlookdotcom_lowercase: true,
    // Removes the subaddress (e.g. "+foo") from the email address
    outlookdotcom_remove_subaddress: true,
    // The following conversions are specific to Yahoo
    // Lowercases the local part of the Yahoo address (known to be case-insensitive)
    yahoo_lowercase: true,
    // Removes the subaddress (e.g. "-foo") from the email address
    yahoo_remove_subaddress: true,
    // The following conversions are specific to Yandex
    // Lowercases the local part of the Yandex address (known to be case-insensitive)
    yandex_lowercase: true,
    // The following conversions are specific to iCloud
    // Lowercases the local part of the iCloud address (known to be case-insensitive)
    icloud_lowercase: true,
    // Removes the subaddress (e.g. "+foo") from the email address
    icloud_remove_subaddress: true
};
// List of domains used by iCloud
var icloud_domains = [
    'icloud.com',
    'me.com'
];
// List of domains used by Outlook.com and its predecessors
// This list is likely incomplete.
// Partial reference:
// https://blogs.office.com/2013/04/17/outlook-com-gets-two-step-verification-sign-in-by-alias-and-new-international-domains/
var outlookdotcom_domains = [
    'hotmail.at',
    'hotmail.be',
    'hotmail.ca',
    'hotmail.cl',
    'hotmail.co.il',
    'hotmail.co.nz',
    'hotmail.co.th',
    'hotmail.co.uk',
    'hotmail.com',
    'hotmail.com.ar',
    'hotmail.com.au',
    'hotmail.com.br',
    'hotmail.com.gr',
    'hotmail.com.mx',
    'hotmail.com.pe',
    'hotmail.com.tr',
    'hotmail.com.vn',
    'hotmail.cz',
    'hotmail.de',
    'hotmail.dk',
    'hotmail.es',
    'hotmail.fr',
    'hotmail.hu',
    'hotmail.id',
    'hotmail.ie',
    'hotmail.in',
    'hotmail.it',
    'hotmail.jp',
    'hotmail.kr',
    'hotmail.lv',
    'hotmail.my',
    'hotmail.ph',
    'hotmail.pt',
    'hotmail.sa',
    'hotmail.sg',
    'hotmail.sk',
    'live.be',
    'live.co.uk',
    'live.com',
    'live.com.ar',
    'live.com.mx',
    'live.de',
    'live.es',
    'live.eu',
    'live.fr',
    'live.it',
    'live.nl',
    'msn.com',
    'outlook.at',
    'outlook.be',
    'outlook.cl',
    'outlook.co.il',
    'outlook.co.nz',
    'outlook.co.th',
    'outlook.com',
    'outlook.com.ar',
    'outlook.com.au',
    'outlook.com.br',
    'outlook.com.gr',
    'outlook.com.pe',
    'outlook.com.tr',
    'outlook.com.vn',
    'outlook.cz',
    'outlook.de',
    'outlook.dk',
    'outlook.es',
    'outlook.fr',
    'outlook.hu',
    'outlook.id',
    'outlook.ie',
    'outlook.in',
    'outlook.it',
    'outlook.jp',
    'outlook.kr',
    'outlook.lv',
    'outlook.my',
    'outlook.ph',
    'outlook.pt',
    'outlook.sa',
    'outlook.sg',
    'outlook.sk',
    'passport.com'
];
// List of domains used by Yahoo Mail
// This list is likely incomplete
var yahoo_domains = [
    'rocketmail.com',
    'yahoo.ca',
    'yahoo.co.uk',
    'yahoo.com',
    'yahoo.de',
    'yahoo.fr',
    'yahoo.in',
    'yahoo.it',
    'ymail.com'
];
// List of domains used by yandex.ru
var yandex_domains = [
    'yandex.ru',
    'yandex.ua',
    'yandex.kz',
    'yandex.com',
    'yandex.by',
    'ya.ru'
];
// replace single dots, but not multiple consecutive dots
function dotsReplacer(match) {
    if (match.length > 1) return match;
    return '';
}
function normalizeEmail(email, options) {
    options = (0, _merge.default)(options, default_normalize_email_options);
    var raw_parts = email.split('@');
    var domain = raw_parts.pop();
    var user = raw_parts.join('@');
    var parts = [
        user,
        domain
    ];
    // The domain is always lowercased, as it's case-insensitive per RFC 1035
    parts[1] = parts[1].toLowerCase();
    if (parts[1] === 'gmail.com' || parts[1] === 'googlemail.com') {
        // Address is GMail
        if (options.gmail_remove_subaddress) parts[0] = parts[0].split('+')[0];
        if (options.gmail_remove_dots) // this does not replace consecutive dots like example..email@gmail.com
        parts[0] = parts[0].replace(/\.+/g, dotsReplacer);
        if (!parts[0].length) return false;
        if (options.all_lowercase || options.gmail_lowercase) parts[0] = parts[0].toLowerCase();
        parts[1] = options.gmail_convert_googlemaildotcom ? 'gmail.com' : parts[1];
    } else if (icloud_domains.indexOf(parts[1]) >= 0) {
        // Address is iCloud
        if (options.icloud_remove_subaddress) parts[0] = parts[0].split('+')[0];
        if (!parts[0].length) return false;
        if (options.all_lowercase || options.icloud_lowercase) parts[0] = parts[0].toLowerCase();
    } else if (outlookdotcom_domains.indexOf(parts[1]) >= 0) {
        // Address is Outlook.com
        if (options.outlookdotcom_remove_subaddress) parts[0] = parts[0].split('+')[0];
        if (!parts[0].length) return false;
        if (options.all_lowercase || options.outlookdotcom_lowercase) parts[0] = parts[0].toLowerCase();
    } else if (yahoo_domains.indexOf(parts[1]) >= 0) {
        // Address is Yahoo
        if (options.yahoo_remove_subaddress) {
            var components = parts[0].split('-');
            parts[0] = components.length > 1 ? components.slice(0, -1).join('-') : components[0];
        }
        if (!parts[0].length) return false;
        if (options.all_lowercase || options.yahoo_lowercase) parts[0] = parts[0].toLowerCase();
    } else if (yandex_domains.indexOf(parts[1]) >= 0) {
        if (options.all_lowercase || options.yandex_lowercase) parts[0] = parts[0].toLowerCase();
        parts[1] = 'yandex.ru'; // all yandex domains are equal, 1st preferred
    } else if (options.all_lowercase) // Any other address
    parts[0] = parts[0].toLowerCase();
    return parts.join('@');
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"3d767513579b6391":"c806a"}],"cwFi9":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isSlug;
var _assertString = _interopRequireDefault(require("ab92b84ab8fd18a8"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var charsetRegex = /^[^\s-_](?!.*?[-_]{2,})[a-z0-9-\\][^\s]*[^-_\s]$/;
function isSlug(str) {
    (0, _assertString.default)(str);
    return charsetRegex.test(str);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"ab92b84ab8fd18a8":"dGQqH"}],"bfivK":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isLicensePlate;
var _assertString = _interopRequireDefault(require("b2df968a48112117"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var validators = {
    'cs-CZ': function csCZ(str) {
        return /^(([ABCDEFHIJKLMNPRSTUVXYZ]|[0-9])-?){5,8}$/.test(str);
    },
    'de-DE': function deDE(str) {
        return /^((A|AA|AB|AC|AE|AH|AK|AM|AN|AÖ|AP|AS|AT|AU|AW|AZ|B|BA|BB|BC|BE|BF|BH|BI|BK|BL|BM|BN|BO|BÖ|BS|BT|BZ|C|CA|CB|CE|CO|CR|CW|D|DA|DD|DE|DH|DI|DL|DM|DN|DO|DU|DW|DZ|E|EA|EB|ED|EE|EF|EG|EH|EI|EL|EM|EN|ER|ES|EU|EW|F|FB|FD|FF|FG|FI|FL|FN|FO|FR|FS|FT|FÜ|FW|FZ|G|GA|GC|GD|GE|GF|GG|GI|GK|GL|GM|GN|GÖ|GP|GR|GS|GT|GÜ|GV|GW|GZ|H|HA|HB|HC|HD|HE|HF|HG|HH|HI|HK|HL|HM|HN|HO|HP|HR|HS|HU|HV|HX|HY|HZ|IK|IL|IN|IZ|J|JE|JL|K|KA|KB|KC|KE|KF|KG|KH|KI|KK|KL|KM|KN|KO|KR|KS|KT|KU|KW|KY|L|LA|LB|LC|LD|LF|LG|LH|LI|LL|LM|LN|LÖ|LP|LR|LU|M|MA|MB|MC|MD|ME|MG|MH|MI|MK|ML|MM|MN|MO|MQ|MR|MS|MÜ|MW|MY|MZ|N|NB|ND|NE|NF|NH|NI|NK|NM|NÖ|NP|NR|NT|NU|NW|NY|NZ|OA|OB|OC|OD|OE|OF|OG|OH|OK|OL|OP|OS|OZ|P|PA|PB|PE|PF|PI|PL|PM|PN|PR|PS|PW|PZ|R|RA|RC|RD|RE|RG|RH|RI|RL|RM|RN|RO|RP|RS|RT|RU|RV|RW|RZ|S|SB|SC|SE|SG|SI|SK|SL|SM|SN|SO|SP|SR|ST|SU|SW|SY|SZ|TE|TF|TG|TO|TP|TR|TS|TT|TÜ|ÜB|UE|UH|UL|UM|UN|V|VB|VG|VK|VR|VS|W|WA|WB|WE|WF|WI|WK|WL|WM|WN|WO|WR|WS|WT|WÜ|WW|WZ|Z|ZE|ZI|ZP|ZR|ZW|ZZ)[- ]?[A-Z]{1,2}[- ]?\d{1,4}|(ABG|ABI|AIB|AIC|ALF|ALZ|ANA|ANG|ANK|APD|ARN|ART|ASL|ASZ|AUR|AZE|BAD|BAR|BBG|BCH|BED|BER|BGD|BGL|BID|BIN|BIR|BIT|BIW|BKS|BLB|BLK|BNA|BOG|BOH|BOR|BOT|BRA|BRB|BRG|BRK|BRL|BRV|BSB|BSK|BTF|BÜD|BUL|BÜR|BÜS|BÜZ|CAS|CHA|CLP|CLZ|COC|COE|CUX|DAH|DAN|DAU|DBR|DEG|DEL|DGF|DIL|DIN|DIZ|DKB|DLG|DON|DUD|DÜW|EBE|EBN|EBS|ECK|EIC|EIL|EIN|EIS|EMD|EMS|ERB|ERH|ERK|ERZ|ESB|ESW|FDB|FDS|FEU|FFB|FKB|FLÖ|FOR|FRG|FRI|FRW|FTL|FÜS|GAN|GAP|GDB|GEL|GEO|GER|GHA|GHC|GLA|GMN|GNT|GOA|GOH|GRA|GRH|GRI|GRM|GRZ|GTH|GUB|GUN|GVM|HAB|HAL|HAM|HAS|HBN|HBS|HCH|HDH|HDL|HEB|HEF|HEI|HER|HET|HGN|HGW|HHM|HIG|HIP|HMÜ|HOG|HOH|HOL|HOM|HOR|HÖS|HOT|HRO|HSK|HST|HVL|HWI|IGB|ILL|JÜL|KEH|KEL|KEM|KIB|KLE|KLZ|KÖN|KÖT|KÖZ|KRU|KÜN|KUS|KYF|LAN|LAU|LBS|LBZ|LDK|LDS|LEO|LER|LEV|LIB|LIF|LIP|LÖB|LOS|LRO|LSZ|LÜN|LUP|LWL|MAB|MAI|MAK|MAL|MED|MEG|MEI|MEK|MEL|MER|MET|MGH|MGN|MHL|MIL|MKK|MOD|MOL|MON|MOS|MSE|MSH|MSP|MST|MTK|MTL|MÜB|MÜR|MYK|MZG|NAB|NAI|NAU|NDH|NEA|NEB|NEC|NEN|NES|NEW|NMB|NMS|NOH|NOL|NOM|NOR|NVP|NWM|OAL|OBB|OBG|OCH|OHA|ÖHR|OHV|OHZ|OPR|OSL|OVI|OVL|OVP|PAF|PAN|PAR|PCH|PEG|PIR|PLÖ|PRÜ|QFT|QLB|RDG|REG|REH|REI|RID|RIE|ROD|ROF|ROK|ROL|ROS|ROT|ROW|RSL|RÜD|RÜG|SAB|SAD|SAN|SAW|SBG|SBK|SCZ|SDH|SDL|SDT|SEB|SEE|SEF|SEL|SFB|SFT|SGH|SHA|SHG|SHK|SHL|SIG|SIM|SLE|SLF|SLK|SLN|SLS|SLÜ|SLZ|SMÜ|SOB|SOG|SOK|SÖM|SON|SPB|SPN|SRB|SRO|STA|STB|STD|STE|STL|SUL|SÜW|SWA|SZB|TBB|TDO|TET|TIR|TÖL|TUT|UEM|UER|UFF|USI|VAI|VEC|VER|VIB|VIE|VIT|VOH|WAF|WAK|WAN|WAR|WAT|WBS|WDA|WEL|WEN|WER|WES|WHV|WIL|WIS|WIT|WIZ|WLG|WMS|WND|WOB|WOH|WOL|WOR|WOS|WRN|WSF|WST|WSW|WTL|WTM|WUG|WÜM|WUN|WUR|WZL|ZEL|ZIG)[- ]?(([A-Z][- ]?\d{1,4})|([A-Z]{2}[- ]?\d{1,3})))[- ]?(E|H)?$/.test(str);
    },
    'de-LI': function deLI(str) {
        return /^FL[- ]?\d{1,5}[UZ]?$/.test(str);
    },
    'en-IN': function enIN(str) {
        return /^[A-Z]{2}[ -]?[0-9]{1,2}(?:[ -]?[A-Z])(?:[ -]?[A-Z]*)?[ -]?[0-9]{4}$/.test(str);
    },
    'es-AR': function esAR(str) {
        return /^(([A-Z]{2} ?[0-9]{3} ?[A-Z]{2})|([A-Z]{3} ?[0-9]{3}))$/.test(str);
    },
    'fi-FI': function fiFI(str) {
        return /^(?=.{4,7})(([A-Z]{1,3}|[0-9]{1,3})[\s-]?([A-Z]{1,3}|[0-9]{1,5}))$/.test(str);
    },
    'hu-HU': function huHU(str) {
        return /^((((?!AAA)(([A-NPRSTVZWXY]{1})([A-PR-Z]{1})([A-HJ-NPR-Z]))|(A[ABC]I)|A[ABC]O|A[A-W]Q|BPI|BPO|UCO|UDO|XAO)-(?!000)\d{3})|(M\d{6})|((CK|DT|CD|HC|H[ABEFIKLMNPRSTVX]|MA|OT|R[A-Z]) \d{2}-\d{2})|(CD \d{3}-\d{3})|(C-(C|X) \d{4})|(X-(A|B|C) \d{4})|(([EPVZ]-\d{5}))|(S A[A-Z]{2} \d{2})|(SP \d{2}-\d{2}))$/.test(str);
    },
    'pt-BR': function ptBR(str) {
        return /^[A-Z]{3}[ -]?[0-9][A-Z][0-9]{2}|[A-Z]{3}[ -]?[0-9]{4}$/.test(str);
    },
    'pt-PT': function ptPT(str) {
        return /^([A-Z]{2}|[0-9]{2})[ -·]?([A-Z]{2}|[0-9]{2})[ -·]?([A-Z]{2}|[0-9]{2})$/.test(str);
    },
    'sq-AL': function sqAL(str) {
        return /^[A-Z]{2}[- ]?((\d{3}[- ]?(([A-Z]{2})|T))|(R[- ]?\d{3}))$/.test(str);
    },
    'sv-SE': function svSE(str) {
        return /^[A-HJ-PR-UW-Z]{3} ?[\d]{2}[A-HJ-PR-UW-Z1-9]$|(^[A-ZÅÄÖ ]{2,7}$)/.test(str.trim());
    },
    'en-PK': function enPK(str) {
        return /(^[A-Z]{2}((\s|-){0,1})[0-9]{3,4}((\s|-)[0-9]{2}){0,1}$)|(^[A-Z]{3}((\s|-){0,1})[0-9]{3,4}((\s|-)[0-9]{2}){0,1}$)|(^[A-Z]{4}((\s|-){0,1})[0-9]{3,4}((\s|-)[0-9]{2}){0,1}$)|(^[A-Z]((\s|-){0,1})[0-9]{4}((\s|-)[0-9]{2}){0,1}$)/.test(str.trim());
    }
};
function isLicensePlate(str, locale) {
    (0, _assertString.default)(str);
    if (locale in validators) return validators[locale](str);
    else if (locale === 'any') {
        for(var key in validators){
            /* eslint guard-for-in: 0 */ var validator = validators[key];
            if (validator(str)) return true;
        }
        return false;
    }
    throw new Error("Invalid locale '".concat(locale, "'"));
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"b2df968a48112117":"dGQqH"}],"doaet":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isStrongPassword;
var _merge = _interopRequireDefault(require("29e06d90a75827ea"));
var _assertString = _interopRequireDefault(require("d596cf5949cba1e2"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var upperCaseRegex = /^[A-Z]$/;
var lowerCaseRegex = /^[a-z]$/;
var numberRegex = /^[0-9]$/;
var symbolRegex = /^[-#!$@£%^&*()_+|~=`{}\[\]:";'<>?,.\/\\ ]$/;
var defaultOptions = {
    minLength: 8,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1,
    returnScore: false,
    pointsPerUnique: 1,
    pointsPerRepeat: 0.5,
    pointsForContainingLower: 10,
    pointsForContainingUpper: 10,
    pointsForContainingNumber: 10,
    pointsForContainingSymbol: 10
};
/* Counts number of occurrences of each char in a string
 * could be moved to util/ ?
*/ function countChars(str) {
    var result = {};
    Array.from(str).forEach(function(char) {
        var curVal = result[char];
        if (curVal) result[char] += 1;
        else result[char] = 1;
    });
    return result;
}
/* Return information about a password */ function analyzePassword(password) {
    var charMap = countChars(password);
    var analysis = {
        length: password.length,
        uniqueChars: Object.keys(charMap).length,
        uppercaseCount: 0,
        lowercaseCount: 0,
        numberCount: 0,
        symbolCount: 0
    };
    Object.keys(charMap).forEach(function(char) {
        /* istanbul ignore else */ if (upperCaseRegex.test(char)) analysis.uppercaseCount += charMap[char];
        else if (lowerCaseRegex.test(char)) analysis.lowercaseCount += charMap[char];
        else if (numberRegex.test(char)) analysis.numberCount += charMap[char];
        else if (symbolRegex.test(char)) analysis.symbolCount += charMap[char];
    });
    return analysis;
}
function scorePassword(analysis, scoringOptions) {
    var points = 0;
    points += analysis.uniqueChars * scoringOptions.pointsPerUnique;
    points += (analysis.length - analysis.uniqueChars) * scoringOptions.pointsPerRepeat;
    if (analysis.lowercaseCount > 0) points += scoringOptions.pointsForContainingLower;
    if (analysis.uppercaseCount > 0) points += scoringOptions.pointsForContainingUpper;
    if (analysis.numberCount > 0) points += scoringOptions.pointsForContainingNumber;
    if (analysis.symbolCount > 0) points += scoringOptions.pointsForContainingSymbol;
    return points;
}
function isStrongPassword(str) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    (0, _assertString.default)(str);
    var analysis = analyzePassword(str);
    options = (0, _merge.default)(options || {}, defaultOptions);
    if (options.returnScore) return scorePassword(analysis, options);
    return analysis.length >= options.minLength && analysis.lowercaseCount >= options.minLowercase && analysis.uppercaseCount >= options.minUppercase && analysis.numberCount >= options.minNumbers && analysis.symbolCount >= options.minSymbols;
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"29e06d90a75827ea":"c806a","d596cf5949cba1e2":"dGQqH"}],"huZFv":[function(require,module,exports,__globalThis) {
"use strict";
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isVAT;
exports.vatMatchers = void 0;
var _assertString = _interopRequireDefault(require("bef829e803e114f9"));
var algorithms = _interopRequireWildcard(require("83803936e2b74d1f"));
function _getRequireWildcardCache(e) {
    if ("function" != typeof WeakMap) return null;
    var r = new WeakMap(), t = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache(e) {
        return e ? t : r;
    })(e);
}
function _interopRequireWildcard(e, r) {
    if (!r && e && e.__esModule) return e;
    if (null === e || "object" != _typeof(e) && "function" != typeof e) return {
        default: e
    };
    var t = _getRequireWildcardCache(r);
    if (t && t.has(e)) return t.get(e);
    var n = {
        __proto__: null
    }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var u in e)if ("default" !== u && ({}).hasOwnProperty.call(e, u)) {
        var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
        i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
    }
    return n.default = e, t && t.set(e, n), n;
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var AU = function AU(str) {
    var match = str.match(/^(AU)?(\d{11})$/);
    if (!match) return false;
    // @see {@link https://abr.business.gov.au/Help/AbnFormat}
    var weights = [
        10,
        1,
        3,
        5,
        7,
        9,
        11,
        13,
        15,
        17,
        19
    ];
    str = str.replace(/^AU/, '');
    var ABN = (parseInt(str.slice(0, 1), 10) - 1).toString() + str.slice(1);
    var total = 0;
    for(var i = 0; i < 11; i++)total += weights[i] * ABN.charAt(i);
    return total !== 0 && total % 89 === 0;
};
var CH = function CH(str) {
    // @see {@link https://www.ech.ch/de/ech/ech-0097/5.2.0}
    var hasValidCheckNumber = function hasValidCheckNumber(digits) {
        var lastDigit = digits.pop(); // used as check number
        var weights = [
            5,
            4,
            3,
            2,
            7,
            6,
            5,
            4
        ];
        var calculatedCheckNumber = (11 - digits.reduce(function(acc, el, idx) {
            return acc + el * weights[idx];
        }, 0) % 11) % 11;
        return lastDigit === calculatedCheckNumber;
    };
    // @see {@link https://www.estv.admin.ch/estv/de/home/mehrwertsteuer/uid/mwst-uid-nummer.html}
    return /^(CHE[- ]?)?(\d{9}|(\d{3}\.\d{3}\.\d{3})|(\d{3} \d{3} \d{3})) ?(TVA|MWST|IVA)?$/.test(str) && hasValidCheckNumber(str.match(/\d/g).map(function(el) {
        return +el;
    }));
};
var PT = function PT(str) {
    var match = str.match(/^(PT)?(\d{9})$/);
    if (!match) return false;
    var tin = match[2];
    var checksum = 11 - algorithms.reverseMultiplyAndSum(tin.split('').slice(0, 8).map(function(a) {
        return parseInt(a, 10);
    }), 9) % 11;
    if (checksum > 9) return parseInt(tin[8], 10) === 0;
    return checksum === parseInt(tin[8], 10);
};
var vatMatchers = exports.vatMatchers = {
    /**
   * European Union VAT identification numbers
   */ AT: function AT(str) {
        return /^(AT)?U\d{8}$/.test(str);
    },
    BE: function BE(str) {
        return /^(BE)?\d{10}$/.test(str);
    },
    BG: function BG(str) {
        return /^(BG)?\d{9,10}$/.test(str);
    },
    HR: function HR(str) {
        return /^(HR)?\d{11}$/.test(str);
    },
    CY: function CY(str) {
        return /^(CY)?\w{9}$/.test(str);
    },
    CZ: function CZ(str) {
        return /^(CZ)?\d{8,10}$/.test(str);
    },
    DK: function DK(str) {
        return /^(DK)?\d{8}$/.test(str);
    },
    EE: function EE(str) {
        return /^(EE)?\d{9}$/.test(str);
    },
    FI: function FI(str) {
        return /^(FI)?\d{8}$/.test(str);
    },
    FR: function FR(str) {
        return /^(FR)?\w{2}\d{9}$/.test(str);
    },
    DE: function DE(str) {
        return /^(DE)?\d{9}$/.test(str);
    },
    EL: function EL(str) {
        return /^(EL)?\d{9}$/.test(str);
    },
    HU: function HU(str) {
        return /^(HU)?\d{8}$/.test(str);
    },
    IE: function IE(str) {
        return /^(IE)?\d{7}\w{1}(W)?$/.test(str);
    },
    IT: function IT(str) {
        return /^(IT)?\d{11}$/.test(str);
    },
    LV: function LV(str) {
        return /^(LV)?\d{11}$/.test(str);
    },
    LT: function LT(str) {
        return /^(LT)?\d{9,12}$/.test(str);
    },
    LU: function LU(str) {
        return /^(LU)?\d{8}$/.test(str);
    },
    MT: function MT(str) {
        return /^(MT)?\d{8}$/.test(str);
    },
    NL: function NL(str) {
        return /^(NL)?\d{9}B\d{2}$/.test(str);
    },
    PL: function PL(str) {
        return /^(PL)?(\d{10}|(\d{3}-\d{3}-\d{2}-\d{2})|(\d{3}-\d{2}-\d{2}-\d{3}))$/.test(str);
    },
    PT: PT,
    RO: function RO(str) {
        return /^(RO)?\d{2,10}$/.test(str);
    },
    SK: function SK(str) {
        return /^(SK)?\d{10}$/.test(str);
    },
    SI: function SI(str) {
        return /^(SI)?\d{8}$/.test(str);
    },
    ES: function ES(str) {
        return /^(ES)?\w\d{7}[A-Z]$/.test(str);
    },
    SE: function SE(str) {
        return /^(SE)?\d{12}$/.test(str);
    },
    /**
   * VAT numbers of non-EU countries
   */ AL: function AL(str) {
        return /^(AL)?\w{9}[A-Z]$/.test(str);
    },
    MK: function MK(str) {
        return /^(MK)?\d{13}$/.test(str);
    },
    AU: AU,
    BY: function BY(str) {
        return /^(УНП )?\d{9}$/.test(str);
    },
    CA: function CA(str) {
        return /^(CA)?\d{9}$/.test(str);
    },
    IS: function IS(str) {
        return /^(IS)?\d{5,6}$/.test(str);
    },
    IN: function IN(str) {
        return /^(IN)?\d{15}$/.test(str);
    },
    ID: function ID(str) {
        return /^(ID)?(\d{15}|(\d{2}.\d{3}.\d{3}.\d{1}-\d{3}.\d{3}))$/.test(str);
    },
    IL: function IL(str) {
        return /^(IL)?\d{9}$/.test(str);
    },
    KZ: function KZ(str) {
        return /^(KZ)?\d{12}$/.test(str);
    },
    NZ: function NZ(str) {
        return /^(NZ)?\d{9}$/.test(str);
    },
    NG: function NG(str) {
        return /^(NG)?(\d{12}|(\d{8}-\d{4}))$/.test(str);
    },
    NO: function NO(str) {
        return /^(NO)?\d{9}MVA$/.test(str);
    },
    PH: function PH(str) {
        return /^(PH)?(\d{12}|\d{3} \d{3} \d{3} \d{3})$/.test(str);
    },
    RU: function RU(str) {
        return /^(RU)?(\d{10}|\d{12})$/.test(str);
    },
    SM: function SM(str) {
        return /^(SM)?\d{5}$/.test(str);
    },
    SA: function SA(str) {
        return /^(SA)?\d{15}$/.test(str);
    },
    RS: function RS(str) {
        return /^(RS)?\d{9}$/.test(str);
    },
    CH: CH,
    TR: function TR(str) {
        return /^(TR)?\d{10}$/.test(str);
    },
    UA: function UA(str) {
        return /^(UA)?\d{12}$/.test(str);
    },
    GB: function GB(str) {
        return /^GB((\d{3} \d{4} ([0-8][0-9]|9[0-6]))|(\d{9} \d{3})|(((GD[0-4])|(HA[5-9]))[0-9]{2}))$/.test(str);
    },
    UZ: function UZ(str) {
        return /^(UZ)?\d{9}$/.test(str);
    },
    /**
   * VAT numbers of Latin American countries
   */ AR: function AR(str) {
        return /^(AR)?\d{11}$/.test(str);
    },
    BO: function BO(str) {
        return /^(BO)?\d{7}$/.test(str);
    },
    BR: function BR(str) {
        return /^(BR)?((\d{2}.\d{3}.\d{3}\/\d{4}-\d{2})|(\d{3}.\d{3}.\d{3}-\d{2}))$/.test(str);
    },
    CL: function CL(str) {
        return /^(CL)?\d{8}-\d{1}$/.test(str);
    },
    CO: function CO(str) {
        return /^(CO)?\d{10}$/.test(str);
    },
    CR: function CR(str) {
        return /^(CR)?\d{9,12}$/.test(str);
    },
    EC: function EC(str) {
        return /^(EC)?\d{13}$/.test(str);
    },
    SV: function SV(str) {
        return /^(SV)?\d{4}-\d{6}-\d{3}-\d{1}$/.test(str);
    },
    GT: function GT(str) {
        return /^(GT)?\d{7}-\d{1}$/.test(str);
    },
    HN: function HN(str) {
        return /^(HN)?$/.test(str);
    },
    MX: function MX(str) {
        return /^(MX)?\w{3,4}\d{6}\w{3}$/.test(str);
    },
    NI: function NI(str) {
        return /^(NI)?\d{3}-\d{6}-\d{4}\w{1}$/.test(str);
    },
    PA: function PA(str) {
        return /^(PA)?$/.test(str);
    },
    PY: function PY(str) {
        return /^(PY)?\d{6,8}-\d{1}$/.test(str);
    },
    PE: function PE(str) {
        return /^(PE)?\d{11}$/.test(str);
    },
    DO: function DO(str) {
        return /^(DO)?(\d{11}|(\d{3}-\d{7}-\d{1})|[1,4,5]{1}\d{8}|([1,4,5]{1})-\d{2}-\d{5}-\d{1})$/.test(str);
    },
    UY: function UY(str) {
        return /^(UY)?\d{12}$/.test(str);
    },
    VE: function VE(str) {
        return /^(VE)?[J,G,V,E]{1}-(\d{9}|(\d{8}-\d{1}))$/.test(str);
    }
};
function isVAT(str, countryCode) {
    (0, _assertString.default)(str);
    (0, _assertString.default)(countryCode);
    if (countryCode in vatMatchers) return vatMatchers[countryCode](str);
    throw new Error("Invalid country code: '".concat(countryCode, "'"));
}

},{"bef829e803e114f9":"dGQqH","83803936e2b74d1f":"1HfIt"}],"1dvO8":[function(require,module,exports,__globalThis) {
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = this && this.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
var creditCardType = __importStar(require("1d3e08c74e8c57b6"));
var cardholder_name_1 = require("6d5d9c2b8eef212");
var card_number_1 = require("12de689611a5b354");
var expiration_date_1 = require("53dbbc0eeef46d42");
var expiration_month_1 = require("3558029ddb7d8ac0");
var expiration_year_1 = require("900cc6d26d05f76f");
var cvv_1 = require("aea98623c473d5cc");
var postal_code_1 = require("db1a29fa06887272");
var cardValidator = {
    creditCardType: creditCardType,
    cardholderName: cardholder_name_1.cardholderName,
    number: card_number_1.cardNumber,
    expirationDate: expiration_date_1.expirationDate,
    expirationMonth: expiration_month_1.expirationMonth,
    expirationYear: expiration_year_1.expirationYear,
    cvv: cvv_1.cvv,
    postalCode: postal_code_1.postalCode
};
module.exports = cardValidator;

},{"1d3e08c74e8c57b6":"bfoG6","6d5d9c2b8eef212":"bAkQL","12de689611a5b354":"5ZDe5","53dbbc0eeef46d42":"gwVE0","3558029ddb7d8ac0":"9z72Q","900cc6d26d05f76f":"liFsO","aea98623c473d5cc":"hl7bb","db1a29fa06887272":"5ejfE"}],"bfoG6":[function(require,module,exports,__globalThis) {
"use strict";
var __assign = this && this.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var cardTypes = require("85712e0c1cba7199");
var add_matching_cards_to_results_1 = require("938b984176c9165c");
var is_valid_input_type_1 = require("47c8180a2047ef8e");
var find_best_match_1 = require("f8d0f39fb43c912b");
var clone_1 = require("cae954e0d0b5a14c");
var customCards = {};
var cardNames = {
    VISA: "visa",
    MASTERCARD: "mastercard",
    AMERICAN_EXPRESS: "american-express",
    DINERS_CLUB: "diners-club",
    DISCOVER: "discover",
    JCB: "jcb",
    UNIONPAY: "unionpay",
    MAESTRO: "maestro",
    ELO: "elo",
    MIR: "mir",
    HIPER: "hiper",
    HIPERCARD: "hipercard"
};
var ORIGINAL_TEST_ORDER = [
    cardNames.VISA,
    cardNames.MASTERCARD,
    cardNames.AMERICAN_EXPRESS,
    cardNames.DINERS_CLUB,
    cardNames.DISCOVER,
    cardNames.JCB,
    cardNames.UNIONPAY,
    cardNames.MAESTRO,
    cardNames.ELO,
    cardNames.MIR,
    cardNames.HIPER,
    cardNames.HIPERCARD
];
var testOrder = (0, clone_1.clone)(ORIGINAL_TEST_ORDER);
function findType(cardType) {
    return customCards[cardType] || cardTypes[cardType];
}
function getAllCardTypes() {
    return testOrder.map(function(cardType) {
        return (0, clone_1.clone)(findType(cardType));
    });
}
function getCardPosition(name, ignoreErrorForNotExisting) {
    if (ignoreErrorForNotExisting === void 0) ignoreErrorForNotExisting = false;
    var position = testOrder.indexOf(name);
    if (!ignoreErrorForNotExisting && position === -1) throw new Error('"' + name + '" is not a supported card type.');
    return position;
}
function creditCardType(cardNumber) {
    var results = [];
    if (!(0, is_valid_input_type_1.isValidInputType)(cardNumber)) return results;
    if (cardNumber.length === 0) return getAllCardTypes();
    testOrder.forEach(function(cardType) {
        var cardConfiguration = findType(cardType);
        (0, add_matching_cards_to_results_1.addMatchingCardsToResults)(cardNumber, cardConfiguration, results);
    });
    var bestMatch = (0, find_best_match_1.findBestMatch)(results);
    if (bestMatch) return [
        bestMatch
    ];
    return results;
}
creditCardType.getTypeInfo = function(cardType) {
    return (0, clone_1.clone)(findType(cardType));
};
creditCardType.removeCard = function(name) {
    var position = getCardPosition(name);
    testOrder.splice(position, 1);
};
creditCardType.addCard = function(config) {
    var existingCardPosition = getCardPosition(config.type, true);
    customCards[config.type] = config;
    if (existingCardPosition === -1) testOrder.push(config.type);
};
creditCardType.updateCard = function(cardType, updates) {
    var originalObject = customCards[cardType] || cardTypes[cardType];
    if (!originalObject) throw new Error("\"".concat(cardType, "\" is not a recognized type. Use `addCard` instead.'"));
    if (updates.type && originalObject.type !== updates.type) throw new Error("Cannot overwrite type parameter.");
    var clonedCard = (0, clone_1.clone)(originalObject);
    clonedCard = __assign(__assign({}, clonedCard), updates);
    customCards[clonedCard.type] = clonedCard;
};
creditCardType.changeOrder = function(name, position) {
    var currentPosition = getCardPosition(name);
    testOrder.splice(currentPosition, 1);
    testOrder.splice(position, 0, name);
};
creditCardType.resetModifications = function() {
    testOrder = (0, clone_1.clone)(ORIGINAL_TEST_ORDER);
    customCards = {};
};
creditCardType.types = cardNames;
module.exports = creditCardType;

},{"85712e0c1cba7199":"dSbPR","938b984176c9165c":"4fqpt","47c8180a2047ef8e":"8cWBU","f8d0f39fb43c912b":"gDRfn","cae954e0d0b5a14c":"debrE"}],"dSbPR":[function(require,module,exports,__globalThis) {
"use strict";
var cardTypes = {
    visa: {
        niceType: "Visa",
        type: "visa",
        patterns: [
            4
        ],
        gaps: [
            4,
            8,
            12
        ],
        lengths: [
            16,
            18,
            19
        ],
        code: {
            name: "CVV",
            size: 3
        }
    },
    mastercard: {
        niceType: "Mastercard",
        type: "mastercard",
        patterns: [
            [
                51,
                55
            ],
            [
                2221,
                2229
            ],
            [
                223,
                229
            ],
            [
                23,
                26
            ],
            [
                270,
                271
            ],
            2720
        ],
        gaps: [
            4,
            8,
            12
        ],
        lengths: [
            16
        ],
        code: {
            name: "CVC",
            size: 3
        }
    },
    "american-express": {
        niceType: "American Express",
        type: "american-express",
        patterns: [
            34,
            37
        ],
        gaps: [
            4,
            10
        ],
        lengths: [
            15
        ],
        code: {
            name: "CID",
            size: 4
        }
    },
    "diners-club": {
        niceType: "Diners Club",
        type: "diners-club",
        patterns: [
            [
                300,
                305
            ],
            36,
            38,
            39
        ],
        gaps: [
            4,
            10
        ],
        lengths: [
            14,
            16,
            19
        ],
        code: {
            name: "CVV",
            size: 3
        }
    },
    discover: {
        niceType: "Discover",
        type: "discover",
        patterns: [
            6011,
            [
                644,
                649
            ],
            65
        ],
        gaps: [
            4,
            8,
            12
        ],
        lengths: [
            16,
            19
        ],
        code: {
            name: "CID",
            size: 3
        }
    },
    jcb: {
        niceType: "JCB",
        type: "jcb",
        patterns: [
            2131,
            1800,
            [
                3528,
                3589
            ]
        ],
        gaps: [
            4,
            8,
            12
        ],
        lengths: [
            16,
            17,
            18,
            19
        ],
        code: {
            name: "CVV",
            size: 3
        }
    },
    unionpay: {
        niceType: "UnionPay",
        type: "unionpay",
        patterns: [
            620,
            [
                62100,
                62182
            ],
            [
                62184,
                62187
            ],
            [
                62185,
                62197
            ],
            [
                62200,
                62205
            ],
            [
                622010,
                622999
            ],
            622018,
            [
                62207,
                62209
            ],
            [
                623,
                626
            ],
            6270,
            6272,
            6276,
            [
                627700,
                627779
            ],
            [
                627781,
                627799
            ],
            [
                6282,
                6289
            ],
            6291,
            6292,
            810,
            [
                8110,
                8131
            ],
            [
                8132,
                8151
            ],
            [
                8152,
                8163
            ],
            [
                8164,
                8171
            ]
        ],
        gaps: [
            4,
            8,
            12
        ],
        lengths: [
            14,
            15,
            16,
            17,
            18,
            19
        ],
        code: {
            name: "CVN",
            size: 3
        }
    },
    maestro: {
        niceType: "Maestro",
        type: "maestro",
        patterns: [
            493698,
            [
                500000,
                504174
            ],
            [
                504176,
                506698
            ],
            [
                506779,
                508999
            ],
            [
                56,
                59
            ],
            63,
            67,
            6
        ],
        gaps: [
            4,
            8,
            12
        ],
        lengths: [
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            19
        ],
        code: {
            name: "CVC",
            size: 3
        }
    },
    elo: {
        niceType: "Elo",
        type: "elo",
        patterns: [
            401178,
            401179,
            438935,
            457631,
            457632,
            431274,
            451416,
            457393,
            504175,
            [
                506699,
                506778
            ],
            [
                509000,
                509999
            ],
            627780,
            636297,
            636368,
            [
                650031,
                650033
            ],
            [
                650035,
                650051
            ],
            [
                650405,
                650439
            ],
            [
                650485,
                650538
            ],
            [
                650541,
                650598
            ],
            [
                650700,
                650718
            ],
            [
                650720,
                650727
            ],
            [
                650901,
                650978
            ],
            [
                651652,
                651679
            ],
            [
                655000,
                655019
            ],
            [
                655021,
                655058
            ]
        ],
        gaps: [
            4,
            8,
            12
        ],
        lengths: [
            16
        ],
        code: {
            name: "CVE",
            size: 3
        }
    },
    mir: {
        niceType: "Mir",
        type: "mir",
        patterns: [
            [
                2200,
                2204
            ]
        ],
        gaps: [
            4,
            8,
            12
        ],
        lengths: [
            16,
            17,
            18,
            19
        ],
        code: {
            name: "CVP2",
            size: 3
        }
    },
    hiper: {
        niceType: "Hiper",
        type: "hiper",
        patterns: [
            637095,
            63737423,
            63743358,
            637568,
            637599,
            637609,
            637612
        ],
        gaps: [
            4,
            8,
            12
        ],
        lengths: [
            16
        ],
        code: {
            name: "CVC",
            size: 3
        }
    },
    hipercard: {
        niceType: "Hipercard",
        type: "hipercard",
        patterns: [
            606282
        ],
        gaps: [
            4,
            8,
            12
        ],
        lengths: [
            16
        ],
        code: {
            name: "CVC",
            size: 3
        }
    }
};
module.exports = cardTypes;

},{}],"4fqpt":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.addMatchingCardsToResults = void 0;
var clone_1 = require("4ba80497c6ccd5d4");
var matches_1 = require("f863fee5bdc6faeb");
function addMatchingCardsToResults(cardNumber, cardConfiguration, results) {
    var i, patternLength;
    for(i = 0; i < cardConfiguration.patterns.length; i++){
        var pattern = cardConfiguration.patterns[i];
        if (!(0, matches_1.matches)(cardNumber, pattern)) continue;
        var clonedCardConfiguration = (0, clone_1.clone)(cardConfiguration);
        if (Array.isArray(pattern)) patternLength = String(pattern[0]).length;
        else patternLength = String(pattern).length;
        if (cardNumber.length >= patternLength) clonedCardConfiguration.matchStrength = patternLength;
        results.push(clonedCardConfiguration);
        break;
    }
}
exports.addMatchingCardsToResults = addMatchingCardsToResults;

},{"4ba80497c6ccd5d4":"debrE","f863fee5bdc6faeb":"6RvrK"}],"debrE":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.clone = void 0;
function clone(originalObject) {
    if (!originalObject) return null;
    return JSON.parse(JSON.stringify(originalObject));
}
exports.clone = clone;

},{}],"6RvrK":[function(require,module,exports,__globalThis) {
"use strict";
/*
 * Adapted from https://github.com/polvo-labs/card-type/blob/aaab11f80fa1939bccc8f24905a06ae3cd864356/src/cardType.js#L37-L42
 * */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.matches = void 0;
function matchesRange(cardNumber, min, max) {
    var maxLengthToCheck = String(min).length;
    var substr = cardNumber.substr(0, maxLengthToCheck);
    var integerRepresentationOfCardNumber = parseInt(substr, 10);
    min = parseInt(String(min).substr(0, substr.length), 10);
    max = parseInt(String(max).substr(0, substr.length), 10);
    return integerRepresentationOfCardNumber >= min && integerRepresentationOfCardNumber <= max;
}
function matchesPattern(cardNumber, pattern) {
    pattern = String(pattern);
    return pattern.substring(0, cardNumber.length) === cardNumber.substring(0, pattern.length);
}
function matches(cardNumber, pattern) {
    if (Array.isArray(pattern)) return matchesRange(cardNumber, pattern[0], pattern[1]);
    return matchesPattern(cardNumber, pattern);
}
exports.matches = matches;

},{}],"8cWBU":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isValidInputType = void 0;
function isValidInputType(cardNumber) {
    return typeof cardNumber === "string" || cardNumber instanceof String;
}
exports.isValidInputType = isValidInputType;

},{}],"gDRfn":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.findBestMatch = void 0;
function hasEnoughResultsToDetermineBestMatch(results) {
    var numberOfResultsWithMaxStrengthProperty = results.filter(function(result) {
        return result.matchStrength;
    }).length;
    /*
     * if all possible results have a maxStrength property that means the card
     * number is sufficiently long enough to determine conclusively what the card
     * type is
     * */ return numberOfResultsWithMaxStrengthProperty > 0 && numberOfResultsWithMaxStrengthProperty === results.length;
}
function findBestMatch(results) {
    if (!hasEnoughResultsToDetermineBestMatch(results)) return null;
    return results.reduce(function(bestMatch, result) {
        if (!bestMatch) return result;
        /*
         * If the current best match pattern is less specific than this result, set
         * the result as the new best match
         * */ if (Number(bestMatch.matchStrength) < Number(result.matchStrength)) return result;
        return bestMatch;
    });
}
exports.findBestMatch = findBestMatch;

},{}],"bAkQL":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.cardholderName = void 0;
var CARD_NUMBER_REGEX = /^[\d\s-]*$/;
var MAX_LENGTH = 255;
function verification(isValid, isPotentiallyValid) {
    return {
        isValid: isValid,
        isPotentiallyValid: isPotentiallyValid
    };
}
function cardholderName(value) {
    if (typeof value !== "string") return verification(false, false);
    if (value.length === 0) return verification(false, true);
    if (value.length > MAX_LENGTH) return verification(false, false);
    if (CARD_NUMBER_REGEX.test(value)) return verification(false, true);
    return verification(true, true);
}
exports.cardholderName = cardholderName;

},{}],"5ZDe5":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.cardNumber = void 0;
var luhn10 = require("b76f36fc6ea6b135");
var getCardTypes = require("57979caee5e93b86");
function verification(card, isPotentiallyValid, isValid) {
    return {
        card: card,
        isPotentiallyValid: isPotentiallyValid,
        isValid: isValid
    };
}
function cardNumber(value, options) {
    if (options === void 0) options = {};
    var isPotentiallyValid, isValid, maxLength;
    if (typeof value !== "string" && typeof value !== "number") return verification(null, false, false);
    var testCardValue = String(value).replace(/-|\s/g, "");
    if (!/^\d*$/.test(testCardValue)) return verification(null, false, false);
    var potentialTypes = getCardTypes(testCardValue);
    if (potentialTypes.length === 0) return verification(null, false, false);
    else if (potentialTypes.length !== 1) return verification(null, true, false);
    var cardType = potentialTypes[0];
    if (options.maxLength && testCardValue.length > options.maxLength) return verification(cardType, false, false);
    if (options.skipLuhnValidation === true || cardType.type === getCardTypes.types.UNIONPAY && options.luhnValidateUnionPay !== true) isValid = true;
    else isValid = luhn10(testCardValue);
    maxLength = Math.max.apply(null, cardType.lengths);
    if (options.maxLength) maxLength = Math.min(options.maxLength, maxLength);
    for(var i = 0; i < cardType.lengths.length; i++)if (cardType.lengths[i] === testCardValue.length) {
        isPotentiallyValid = testCardValue.length < maxLength || isValid;
        return verification(cardType, isPotentiallyValid, isValid);
    }
    return verification(cardType, testCardValue.length < maxLength, false);
}
exports.cardNumber = cardNumber;

},{"b76f36fc6ea6b135":"5vhkk","57979caee5e93b86":"bfoG6"}],"5vhkk":[function(require,module,exports,__globalThis) {
/* eslint-disable */ /*
 * Luhn algorithm implementation in JavaScript
 * Copyright (c) 2009 Nicholas C. Zakas
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ "use strict";
function luhn10(identifier) {
    var sum = 0;
    var alt = false;
    var i = identifier.length - 1;
    var num;
    while(i >= 0){
        num = parseInt(identifier.charAt(i), 10);
        if (alt) {
            num *= 2;
            if (num > 9) num = num % 10 + 1; // eslint-disable-line no-extra-parens
        }
        alt = !alt;
        sum += num;
        i--;
    }
    return sum % 10 === 0;
}
module.exports = luhn10;

},{}],"gwVE0":[function(require,module,exports,__globalThis) {
"use strict";
var __assign = this && this.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.expirationDate = void 0;
var parse_date_1 = require("5c5d87ca73cc3887");
var expiration_month_1 = require("42c778c88cc7c395");
var expiration_year_1 = require("d3b08b7a0eece1a6");
function verification(isValid, isPotentiallyValid, month, year) {
    return {
        isValid: isValid,
        isPotentiallyValid: isPotentiallyValid,
        month: month,
        year: year
    };
}
function expirationDate(value, maxElapsedYear) {
    var date;
    if (typeof value === "string") {
        value = value.replace(/^(\d\d) (\d\d(\d\d)?)$/, "$1/$2");
        date = (0, parse_date_1.parseDate)(String(value));
    } else if (value !== null && typeof value === "object") {
        var fullDate = __assign({}, value);
        date = {
            month: String(fullDate.month),
            year: String(fullDate.year)
        };
    } else return verification(false, false, null, null);
    var monthValid = (0, expiration_month_1.expirationMonth)(date.month);
    var yearValid = (0, expiration_year_1.expirationYear)(date.year, maxElapsedYear);
    if (monthValid.isValid) {
        if (yearValid.isCurrentYear) {
            var isValidForThisYear = monthValid.isValidForThisYear;
            return verification(isValidForThisYear, isValidForThisYear, date.month, date.year);
        }
        if (yearValid.isValid) return verification(true, true, date.month, date.year);
    }
    if (monthValid.isPotentiallyValid && yearValid.isPotentiallyValid) return verification(false, true, null, null);
    return verification(false, false, null, null);
}
exports.expirationDate = expirationDate;

},{"5c5d87ca73cc3887":"dNsIu","42c778c88cc7c395":"9z72Q","d3b08b7a0eece1a6":"liFsO"}],"dNsIu":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseDate = void 0;
var expiration_year_1 = require("c88724e2b0e48bb");
var is_array_1 = require("6021106b5fe9a350");
function getNumberOfMonthDigitsInDateString(dateString) {
    var firstCharacter = Number(dateString[0]);
    var assumedYear;
    /*
      if the first character in the string starts with `0`,
      we know that the month will be 2 digits.
  
      '0122' => {month: '01', year: '22'}
    */ if (firstCharacter === 0) return 2;
    /*
      if the first character in the string starts with
      number greater than 1, it must be a 1 digit month
  
      '322' => {month: '3', year: '22'}
    */ if (firstCharacter > 1) return 1;
    /*
      if the first 2 characters make up a number between
      13-19, we know that the month portion must be 1
  
      '139' => {month: '1', year: '39'}
    */ if (firstCharacter === 1 && Number(dateString[1]) > 2) return 1;
    /*
      if the first 2 characters make up a number between
      10-12, we check if the year portion would be considered
      valid if we assumed that the month was 1. If it is
      not potentially valid, we assume the month must have
      2 digits.
  
      '109' => {month: '10', year: '9'}
      '120' => {month: '1', year: '20'} // when checked in the year 2019
      '120' => {month: '12', year: '0'} // when checked in the year 2021
    */ if (firstCharacter === 1) {
        assumedYear = dateString.substr(1);
        return (0, expiration_year_1.expirationYear)(assumedYear).isPotentiallyValid ? 1 : 2;
    }
    /*
      If the length of the value is exactly 5 characters,
      we assume a full year was passed in, meaning the remaining
      single leading digit must be the month value.
  
      '12202' => {month: '1', year: '2202'}
    */ if (dateString.length === 5) return 1;
    /*
      If the length of the value is more than five characters,
      we assume a full year was passed in addition to the month
      and therefore the month portion must be 2 digits.
  
      '112020' => {month: '11', year: '2020'}
    */ if (dateString.length > 5) return 2;
    /*
      By default, the month value is the first value
    */ return 1;
}
function parseDate(datestring) {
    var date;
    if (/^\d{4}-\d{1,2}$/.test(datestring)) date = datestring.split("-").reverse();
    else if (/\//.test(datestring)) date = datestring.split(/\s*\/\s*/g);
    else if (/\s/.test(datestring)) date = datestring.split(/ +/g);
    if ((0, is_array_1.isArray)(date)) return {
        month: date[0] || "",
        year: date.slice(1).join()
    };
    var numberOfDigitsInMonth = getNumberOfMonthDigitsInDateString(datestring);
    var month = datestring.substr(0, numberOfDigitsInMonth);
    return {
        month: month,
        year: datestring.substr(month.length)
    };
}
exports.parseDate = parseDate;

},{"c88724e2b0e48bb":"liFsO","6021106b5fe9a350":"4eFPr"}],"liFsO":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.expirationYear = void 0;
var DEFAULT_VALID_NUMBER_OF_YEARS_IN_THE_FUTURE = 19;
function verification(isValid, isPotentiallyValid, isCurrentYear) {
    return {
        isValid: isValid,
        isPotentiallyValid: isPotentiallyValid,
        isCurrentYear: isCurrentYear || false
    };
}
function expirationYear(value, maxElapsedYear) {
    if (maxElapsedYear === void 0) maxElapsedYear = DEFAULT_VALID_NUMBER_OF_YEARS_IN_THE_FUTURE;
    var isCurrentYear;
    if (typeof value !== "string") return verification(false, false);
    if (value.replace(/\s/g, "") === "") return verification(false, true);
    if (!/^\d*$/.test(value)) return verification(false, false);
    var len = value.length;
    if (len < 2) return verification(false, true);
    var currentYear = new Date().getFullYear();
    if (len === 3) {
        // 20x === 20x
        var firstTwo = value.slice(0, 2);
        var currentFirstTwo = String(currentYear).slice(0, 2);
        return verification(false, firstTwo === currentFirstTwo);
    }
    if (len > 4) return verification(false, false);
    var numericValue = parseInt(value, 10);
    var twoDigitYear = Number(String(currentYear).substr(2, 2));
    var valid = false;
    if (len === 2) {
        if (String(currentYear).substr(0, 2) === value) return verification(false, true);
        isCurrentYear = twoDigitYear === numericValue;
        valid = numericValue >= twoDigitYear && numericValue <= twoDigitYear + maxElapsedYear;
    } else if (len === 4) {
        isCurrentYear = currentYear === numericValue;
        valid = numericValue >= currentYear && numericValue <= currentYear + maxElapsedYear;
    }
    return verification(valid, valid, isCurrentYear);
}
exports.expirationYear = expirationYear;

},{}],"4eFPr":[function(require,module,exports,__globalThis) {
"use strict";
// Polyfill taken from <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray#Polyfill>.
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isArray = void 0;
exports.isArray = Array.isArray || function(arg) {
    return Object.prototype.toString.call(arg) === "[object Array]";
};

},{}],"9z72Q":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.expirationMonth = void 0;
function verification(isValid, isPotentiallyValid, isValidForThisYear) {
    return {
        isValid: isValid,
        isPotentiallyValid: isPotentiallyValid,
        isValidForThisYear: isValidForThisYear || false
    };
}
function expirationMonth(value) {
    var currentMonth = new Date().getMonth() + 1;
    if (typeof value !== "string") return verification(false, false);
    if (value.replace(/\s/g, "") === "" || value === "0") return verification(false, true);
    if (!/^\d*$/.test(value)) return verification(false, false);
    var month = parseInt(value, 10);
    if (isNaN(Number(value))) return verification(false, false);
    var result = month > 0 && month < 13;
    return verification(result, result, result && month >= currentMonth);
}
exports.expirationMonth = expirationMonth;

},{}],"hl7bb":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.cvv = void 0;
var DEFAULT_LENGTH = 3;
function includes(array, thing) {
    for(var i = 0; i < array.length; i++){
        if (thing === array[i]) return true;
    }
    return false;
}
function max(array) {
    var maximum = DEFAULT_LENGTH;
    var i = 0;
    for(; i < array.length; i++)maximum = array[i] > maximum ? array[i] : maximum;
    return maximum;
}
function verification(isValid, isPotentiallyValid) {
    return {
        isValid: isValid,
        isPotentiallyValid: isPotentiallyValid
    };
}
function cvv(value, maxLength) {
    if (maxLength === void 0) maxLength = DEFAULT_LENGTH;
    maxLength = maxLength instanceof Array ? maxLength : [
        maxLength
    ];
    if (typeof value !== "string") return verification(false, false);
    if (!/^\d*$/.test(value)) return verification(false, false);
    if (includes(maxLength, value.length)) return verification(true, true);
    if (value.length < Math.min.apply(null, maxLength)) return verification(false, true);
    if (value.length > max(maxLength)) return verification(false, false);
    return verification(true, true);
}
exports.cvv = cvv;

},{}],"5ejfE":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.postalCode = void 0;
var DEFAULT_MIN_POSTAL_CODE_LENGTH = 3;
var ALPHANUM = new RegExp(/^[a-z0-9]+$/i);
function verification(isValid, isPotentiallyValid) {
    return {
        isValid: isValid,
        isPotentiallyValid: isPotentiallyValid
    };
}
function postalCode(value, options) {
    if (options === void 0) options = {};
    var minLength = options.minLength || DEFAULT_MIN_POSTAL_CODE_LENGTH;
    if (typeof value !== "string") return verification(false, false);
    else if (value.length < minLength) return verification(false, true);
    else if (!ALPHANUM.test(value.trim().slice(0, minLength))) return verification(false, true);
    return verification(true, true);
}
exports.postalCode = postalCode;

},{}],"gkKU3":[function(require,module,exports,__globalThis) {
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
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
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

},{}],"1bgz3":[function(require,module,exports,__globalThis) {
module.exports = require("73356e0be04b41f8").getBundleURL('fqV6O') + "visa.82a831ed.png" + "?" + Date.now();

},{"73356e0be04b41f8":"lgJ39"}],"lgJ39":[function(require,module,exports,__globalThis) {
"use strict";
var bundleURL = {};
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
        var matches = ('' + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"lapH1":[function(require,module,exports,__globalThis) {
module.exports = require("1ccd657a39dfb61e").getBundleURL('fqV6O') + "mastercard.23a79ebd.png" + "?" + Date.now();

},{"1ccd657a39dfb61e":"lgJ39"}]},["eq8kL","6rimH"], "6rimH", "parcelRequire94c2")

//# sourceMappingURL=index.8cfc62b9.js.map
