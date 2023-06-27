var react = { exports: {} };
var react_production_min = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l = Symbol.for("react.element"), n = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), q = Symbol.for("react.strict_mode"), r = Symbol.for("react.profiler"), t = Symbol.for("react.provider"), u = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), x = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), z = Symbol.iterator;
function A(a) {
  if (null === a || "object" !== typeof a)
    return null;
  a = z && a[z] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}
var B = { isMounted: function() {
  return false;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, C = Object.assign, D = {};
function E(a, b, e) {
  this.props = a;
  this.context = b;
  this.refs = D;
  this.updater = e || B;
}
E.prototype.isReactComponent = {};
E.prototype.setState = function(a, b) {
  if ("object" !== typeof a && "function" !== typeof a && null != a)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, a, b, "setState");
};
E.prototype.forceUpdate = function(a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function F() {
}
F.prototype = E.prototype;
function G(a, b, e) {
  this.props = a;
  this.context = b;
  this.refs = D;
  this.updater = e || B;
}
var H = G.prototype = new F();
H.constructor = G;
C(H, E.prototype);
H.isPureReactComponent = true;
var I = Array.isArray, J = Object.prototype.hasOwnProperty, K = { current: null }, L = { key: true, ref: true, __self: true, __source: true };
function M(a, b, e) {
  var d, c = {}, k = null, h = null;
  if (null != b)
    for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b)
      J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
  var g = arguments.length - 2;
  if (1 === g)
    c.children = e;
  else if (1 < g) {
    for (var f = Array(g), m = 0; m < g; m++)
      f[m] = arguments[m + 2];
    c.children = f;
  }
  if (a && a.defaultProps)
    for (d in g = a.defaultProps, g)
      void 0 === c[d] && (c[d] = g[d]);
  return { $$typeof: l, type: a, key: k, ref: h, props: c, _owner: K.current };
}
function N(a, b) {
  return { $$typeof: l, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
}
function O(a) {
  return "object" === typeof a && null !== a && a.$$typeof === l;
}
function escape(a) {
  var b = { "=": "=0", ":": "=2" };
  return "$" + a.replace(/[=:]/g, function(a2) {
    return b[a2];
  });
}
var P = /\/+/g;
function Q(a, b) {
  return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
}
function R(a, b, e, d, c) {
  var k = typeof a;
  if ("undefined" === k || "boolean" === k)
    a = null;
  var h = false;
  if (null === a)
    h = true;
  else
    switch (k) {
      case "string":
      case "number":
        h = true;
        break;
      case "object":
        switch (a.$$typeof) {
          case l:
          case n:
            h = true;
        }
    }
  if (h)
    return h = a, c = c(h), a = "" === d ? "." + Q(h, 0) : d, I(c) ? (e = "", null != a && (e = a.replace(P, "$&/") + "/"), R(c, b, e, "", function(a2) {
      return a2;
    })) : null != c && (O(c) && (c = N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a)), b.push(c)), 1;
  h = 0;
  d = "" === d ? "." : d + ":";
  if (I(a))
    for (var g = 0; g < a.length; g++) {
      k = a[g];
      var f = d + Q(k, g);
      h += R(k, b, e, f, c);
    }
  else if (f = A(a), "function" === typeof f)
    for (a = f.call(a), g = 0; !(k = a.next()).done; )
      k = k.value, f = d + Q(k, g++), h += R(k, b, e, f, c);
  else if ("object" === k)
    throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
  return h;
}
function S(a, b, e) {
  if (null == a)
    return a;
  var d = [], c = 0;
  R(a, d, "", "", function(a2) {
    return b.call(e, a2, c++);
  });
  return d;
}
function T(a) {
  if (-1 === a._status) {
    var b = a._result;
    b = b();
    b.then(function(b2) {
      if (0 === a._status || -1 === a._status)
        a._status = 1, a._result = b2;
    }, function(b2) {
      if (0 === a._status || -1 === a._status)
        a._status = 2, a._result = b2;
    });
    -1 === a._status && (a._status = 0, a._result = b);
  }
  if (1 === a._status)
    return a._result.default;
  throw a._result;
}
var U = { current: null }, V = { transition: null }, W = { ReactCurrentDispatcher: U, ReactCurrentBatchConfig: V, ReactCurrentOwner: K };
react_production_min.Children = { map: S, forEach: function(a, b, e) {
  S(a, function() {
    b.apply(this, arguments);
  }, e);
}, count: function(a) {
  var b = 0;
  S(a, function() {
    b++;
  });
  return b;
}, toArray: function(a) {
  return S(a, function(a2) {
    return a2;
  }) || [];
}, only: function(a) {
  if (!O(a))
    throw Error("React.Children.only expected to receive a single React element child.");
  return a;
} };
react_production_min.Component = E;
react_production_min.Fragment = p;
react_production_min.Profiler = r;
react_production_min.PureComponent = G;
react_production_min.StrictMode = q;
react_production_min.Suspense = w;
react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
react_production_min.cloneElement = function(a, b, e) {
  if (null === a || void 0 === a)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
  var d = C({}, a.props), c = a.key, k = a.ref, h = a._owner;
  if (null != b) {
    void 0 !== b.ref && (k = b.ref, h = K.current);
    void 0 !== b.key && (c = "" + b.key);
    if (a.type && a.type.defaultProps)
      var g = a.type.defaultProps;
    for (f in b)
      J.call(b, f) && !L.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
  }
  var f = arguments.length - 2;
  if (1 === f)
    d.children = e;
  else if (1 < f) {
    g = Array(f);
    for (var m = 0; m < f; m++)
      g[m] = arguments[m + 2];
    d.children = g;
  }
  return { $$typeof: l, type: a.type, key: c, ref: k, props: d, _owner: h };
};
react_production_min.createContext = function(a) {
  a = { $$typeof: u, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
  a.Provider = { $$typeof: t, _context: a };
  return a.Consumer = a;
};
react_production_min.createElement = M;
react_production_min.createFactory = function(a) {
  var b = M.bind(null, a);
  b.type = a;
  return b;
};
react_production_min.createRef = function() {
  return { current: null };
};
react_production_min.forwardRef = function(a) {
  return { $$typeof: v, render: a };
};
react_production_min.isValidElement = O;
react_production_min.lazy = function(a) {
  return { $$typeof: y, _payload: { _status: -1, _result: a }, _init: T };
};
react_production_min.memo = function(a, b) {
  return { $$typeof: x, type: a, compare: void 0 === b ? null : b };
};
react_production_min.startTransition = function(a) {
  var b = V.transition;
  V.transition = {};
  try {
    a();
  } finally {
    V.transition = b;
  }
};
react_production_min.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
react_production_min.useCallback = function(a, b) {
  return U.current.useCallback(a, b);
};
react_production_min.useContext = function(a) {
  return U.current.useContext(a);
};
react_production_min.useDebugValue = function() {
};
react_production_min.useDeferredValue = function(a) {
  return U.current.useDeferredValue(a);
};
react_production_min.useEffect = function(a, b) {
  return U.current.useEffect(a, b);
};
react_production_min.useId = function() {
  return U.current.useId();
};
react_production_min.useImperativeHandle = function(a, b, e) {
  return U.current.useImperativeHandle(a, b, e);
};
react_production_min.useInsertionEffect = function(a, b) {
  return U.current.useInsertionEffect(a, b);
};
react_production_min.useLayoutEffect = function(a, b) {
  return U.current.useLayoutEffect(a, b);
};
react_production_min.useMemo = function(a, b) {
  return U.current.useMemo(a, b);
};
react_production_min.useReducer = function(a, b, e) {
  return U.current.useReducer(a, b, e);
};
react_production_min.useRef = function(a) {
  return U.current.useRef(a);
};
react_production_min.useState = function(a) {
  return U.current.useState(a);
};
react_production_min.useSyncExternalStore = function(a, b, e) {
  return U.current.useSyncExternalStore(a, b, e);
};
react_production_min.useTransition = function() {
  return U.current.useTransition();
};
react_production_min.version = "18.2.0";
{
  react.exports = react_production_min;
}
var React = react.exports;
var Slider$2 = "";
const debounce = (callback, delay) => {
  let timer;
  return (...args) => {
    if (timer)
      clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args);
      timer = null;
    }, delay);
  };
};
const createEl = (element, customClass) => {
  const elementCreated = document.createElement(element);
  elementCreated.classList.add(customClass);
  return elementCreated;
};
class Slider$1 {
  constructor(options) {
    this.slide = document.querySelector(options.slide);
    this.wrapper = document.querySelector(options.wrapper);
    this.dist = {
      finalPosition: 0,
      startX: 0,
      moviment: 0
    };
    this.infinite = options.infinite || false;
    this.bullets = options.bullets;
    this.arrowsNav = options.arrowsNav;
    this.activeClass = "slider-active";
    if (this.slide && this.wrapper) {
      this.bindEvents();
      this.transition(true);
      this.config();
      this.indexNav(0);
      this.changeSlide(this.index.active);
      this.changeActiveClass();
      this.resizeEvent();
      this.keyNavigation();
    }
  }
  transition(active) {
    this.slide.style.transition = active ? "transform .3s" : "";
  }
  move(distX) {
    this.dist.movePosition = distX;
    this.slide.style.transform = `translate3d(${distX}px, 0, 0)`;
  }
  updatePosition(clientX) {
    this.dist.moviment = (this.dist.startX - clientX) * 1.6;
    return this.dist.finalPosition - this.dist.moviment;
  }
  onStart(ev) {
    let moveType;
    if (ev.type === "mousedown") {
      ev.preventDefault();
      this.dist.startX = ev.clientX;
      moveType = "mousemove";
    } else {
      this.dist.startX = ev.changedTouches[0].clientX;
      moveType = "touchmove";
    }
    this.transition(false);
    this.wrapper.addEventListener(moveType, this.onMove);
  }
  onMove(ev) {
    const pointerPosition = ev.type === "mousemove" ? ev.clientX : ev.changedTouches[0].clientX;
    const finalPosition = this.updatePosition(pointerPosition);
    this.move(finalPosition);
  }
  onEnd(ev) {
    const moveType = ev.type === "mouseup" ? "mousemove" : "touchmove";
    this.wrapper.removeEventListener(moveType, this.onMove);
    this.dist.finalPosition = this.dist.movePosition;
    this.transition(true);
    this.changeSlideOnEnd();
  }
  changeSlideOnEnd() {
    if (this.dist.moviment > 120 && this.index.next !== void 0) {
      this.activeNext();
    } else if (this.dist.moviment < -120 && this.index.prev !== void 0) {
      this.activePrev();
    } else {
      this.changeSlide(this.index.active);
    }
  }
  addEvents() {
    this.wrapper.addEventListener("mousedown", this.onStart);
    this.wrapper.addEventListener("touchstart", this.onStart);
    this.wrapper.addEventListener("mouseup", this.onEnd);
    this.wrapper.addEventListener("touchend", this.onEnd);
  }
  slidePosition(slide) {
    const margin = (this.wrapper.offsetWidth - slide.offsetWidth) / 2;
    return -(slide.offsetLeft - margin);
  }
  config() {
    this.slideArray = [...this.slide.children].map((element) => {
      const position = this.slidePosition(element);
      return {
        position,
        element
      };
    });
  }
  indexNav(index) {
    const last = this.slideArray.length - 1;
    if (this.infinite) {
      this.index = {
        prev: index ? index - 1 : last,
        active: index,
        next: index === last ? 0 : index + 1
      };
    } else {
      this.index = {
        prev: index ? index - 1 : void 0,
        active: index,
        next: index === last ? void 0 : index + 1
      };
    }
  }
  changeSlide(index) {
    const activeSlide = this.slideArray[index];
    this.move(activeSlide.position);
    this.indexNav(index);
    this.dist.finalPosition = activeSlide.position;
    this.changeActiveClass();
    const newEvent = new CustomEvent("slideChanged");
    this.slide.dispatchEvent(newEvent);
  }
  changeActiveClass() {
    this.slideArray.forEach(
      ({ element }) => element.classList.remove(this.activeClass)
    );
    this.slideArray[this.index.active].element.classList.add(this.activeClass);
  }
  activePrev() {
    if (this.index.prev !== void 0) {
      this.changeSlide(this.index.prev);
    }
  }
  activeNext() {
    if (this.index.next !== void 0) {
      this.changeSlide(this.index.next);
    }
  }
  onResize() {
    setTimeout(() => {
      this.config();
      this.changeSlide(this.index.active);
    }, 500);
  }
  resizeEvent() {
    window.addEventListener("resize", this.onResize);
  }
  keyNavigation() {
    document.addEventListener("keyup", (ev) => {
      if (ev.key === "ArrowRight") {
        this.activeNext();
      } else if (ev.key === "ArrowLeft") {
        this.activePrev();
      }
    });
  }
  bindEvents() {
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
    this.activePrev = this.activePrev.bind(this);
    this.activeNext = this.activeNext.bind(this);
    this.onResize = debounce(this.onResize.bind(this), 150);
    this.keyNavigation = this.keyNavigation.bind(this);
  }
  init() {
    if (this.slide && this.wrapper) {
      this.addEvents();
    }
    return this;
  }
}
class SliderNav extends Slider$1 {
  constructor(...args) {
    super(...args);
    this.activeNavigationClass = "active";
    if (this.slide && this.wrapper) {
      this.addEvents();
      if (this.bullets) {
        this.createBullets();
      }
      if (this.arrowsNav) {
        this.appendArrows();
      }
      this.slide.addEventListener("slideChanged", () => {
        this.removeActiveClassFromPaginationBullets();
        this.addActiveClassFromPaginationBullets(
          this.controlChildrens[this.index.active]
        );
      });
    }
  }
  createArrows() {
    this.prevEl = createEl("button", "slider-nav-prev");
    this.nextEl = createEl("button", "slider-nav-next");
    this.navigationContainer = createEl("div", "slider-nav");
    this.prevEl.innerText = "Anterior";
    this.nextEl.innerText = "Pr\xF3ximo";
  }
  addEventArrows() {
    this.prevEl.addEventListener("click", this.activePrev);
    this.nextEl.addEventListener("click", this.activeNext);
  }
  appendArrows() {
    this.createArrows();
    this.addEventArrows();
    this.navigationContainer.appendChild(this.prevEl);
    this.navigationContainer.appendChild(this.nextEl);
    this.wrapper.appendChild(this.navigationContainer);
  }
  createBullets() {
    const controlContainer = createEl("ul", "slider-pagination");
    this.slideArray.forEach((item, index) => {
      const itemElement = createEl("li", "slider-pagination-item");
      itemElement.innerText = index + 1;
      itemElement.addEventListener("click", (ev) => {
        ev.preventDefault();
        this.removeActiveClassFromPaginationBullets();
        this.addActiveClassFromPaginationBullets(ev.currentTarget);
        this.changeSlide(index);
      });
      controlContainer.appendChild(itemElement);
    });
    this.control = controlContainer;
    this.controlChildrens = [...this.control.children];
    this.wrapper.appendChild(controlContainer);
    this.addActiveClassFromPaginationBullets(
      this.controlChildrens[this.index.active]
    );
  }
  addActiveClassFromPaginationBullets(target) {
    target.classList.add(this.activeNavigationClass);
  }
  removeActiveClassFromPaginationBullets() {
    [...this.control.children].forEach(
      (item) => item.classList.remove(this.activeNavigationClass)
    );
  }
}
const Slider = ({ children, infinite, bullets, arrowsNav }) => {
  react.exports.useEffect(() => {
    const options = {
      slide: ".slider",
      wrapper: ".slider-wrapper",
      infinite,
      bullets,
      arrowsNav,
      animationTransition: "scale"
    };
    const sliderWithNav = new SliderNav(options);
    sliderWithNav.init();
  });
  return children;
};
const MySlider = ({ ...props }, children) => {
  return /* @__PURE__ */ React.createElement(Slider, {
    ...props
  }, children);
};
export { MySlider as default };
