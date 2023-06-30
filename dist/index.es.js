import { useEffect } from "react";
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
    var _a;
    this.slideClass = document.querySelector(`.${options.slideClass}`);
    this.slide = (_a = this.slideClass) == null ? void 0 : _a.querySelector(".slider-wrapper");
    this.dist = {
      finalPosition: 0,
      startX: 0,
      moviment: 0,
      movePosition: 0
    };
    this.infinite = options.infinite || false;
    this.bullets = options.bullets;
    this.arrowsNav = options.arrowsNav;
    this.callback = options.callback;
    this.animation = options.animation;
    this.activeClass = "active";
    this.slideArray = [];
    this.index = {
      prev: 0,
      active: 0,
      next: 0
    };
    if (this.animation) {
      this.slideClass.classList.add(`animation-${this.animation}`);
    }
    if (this.slide && this.slideClass) {
      this.bindEvents();
      this.transition(true);
      this.config();
      this.indexNav(0);
      this.changeSlide(this.index.active);
      this.changeActiveClass();
      this.resizeEvent();
      this.keyNav();
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
    this.slideClass.addEventListener(moveType, this.onMove);
  }
  onMove(ev) {
    const pointerPosition = ev.type === "mousemove" ? ev.clientX : ev.changedTouches[0].clientX;
    const finalPosition = this.updatePosition(pointerPosition);
    this.move(finalPosition);
  }
  onEnd(ev) {
    const moveType = ev.type === "mouseup" ? "mousemove" : "touchmove";
    this.slideClass.removeEventListener(moveType, this.onMove);
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
    this.slideClass.addEventListener("mousedown", this.onStart);
    this.slideClass.addEventListener("touchstart", this.onStart);
    this.slideClass.addEventListener("mouseup", this.onEnd);
    this.slideClass.addEventListener("touchend", this.onEnd);
  }
  slidePosition(slide) {
    const margin = (this.slideClass.offsetWidth - slide.offsetWidth) / 2;
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
        prev: index ? index - 1 : 0,
        active: index,
        next: index === last ? 0 : index + 1
      };
    }
  }
  changeSlide(index) {
    const activeSlide = this.slideArray[index];
    this.move(activeSlide.position);
    this.indexNav(index);
    this.dist.finalPosition = activeSlide.position;
    this.changeActiveClass();
    const createEvent = new CustomEvent("changed");
    this.slide.dispatchEvent(createEvent);
  }
  changeActiveClass() {
    this.slideArray.forEach(({ element }) => element.classList.remove(this.activeClass));
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
  keyNav() {
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
    this.keyNav = this.keyNav.bind(this);
  }
  init() {
    if (this.slide && this.slideClass) {
      this.addEvents();
    }
    return this;
  }
}
class SliderNav extends Slider$1 {
  constructor(args) {
    super(args);
    this.activeNavClass = "active";
    if (this.slide && this.slideClass) {
      this.addEvents();
      if (this.bullets) {
        this.createBullets();
      }
      if (this.arrowsNav) {
        this.appendArrows();
      }
      this.slide.addEventListener("changed", () => {
        if (this.callback) {
          this.callback();
        }
        this.removeClassBulletCurrent();
        this.addClassBulletCurrent(this.controlChildrens[this.index.active]);
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
    this.slideClass.appendChild(this.navigationContainer);
  }
  createBullets() {
    const controlContainer = createEl("ul", "slider-bullets");
    this.slideArray.forEach((_, index) => {
      const itemElement = createEl("li", "slider-bullets-item");
      itemElement.innerText = index + 1;
      itemElement.addEventListener("click", (ev) => {
        ev.preventDefault();
        this.removeClassBulletCurrent();
        this.addClassBulletCurrent(ev.currentTarget);
        this.changeSlide(index);
      });
      controlContainer.appendChild(itemElement);
    });
    this.control = controlContainer;
    this.controlChildrens = [...this.control.children];
    this.slideClass.appendChild(controlContainer);
    this.addClassBulletCurrent(this.controlChildrens[this.index.active]);
  }
  addClassBulletCurrent(target) {
    target.classList.add(this.activeNavClass);
  }
  removeClassBulletCurrent() {
    [...this.control.children].forEach((item) => item.classList.remove(this.activeNavClass));
  }
}
const Slider = ({ slideClass, children, infinite, bullets, arrowsNav, callback, animation }) => {
  useEffect(() => {
    const options = {
      slideClass,
      infinite,
      bullets,
      arrowsNav,
      callback,
      animation
    };
    const slider = new SliderNav(options);
    slider.init();
  }, []);
  return children;
};
export { Slider as default };
