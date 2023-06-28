export declare class Slider {
    slideClass: HTMLElement;
    slide: HTMLElement;
    dist: object | any;
    infinite: boolean;
    bullets: boolean;
    arrowsNav: boolean;
    callback: Function | any;
    animation: string;
    activeClass: string;
    slideArray: Array<any>;
    index: {
        prev: number;
        active: number;
        next: number;
    };
    constructor(options: {
        slideClass: string;
        slide: string;
        infinite: boolean;
        bullets: boolean;
        arrowsNav: boolean;
        callback: Function | null;
        animation: string;
    });
    transition(active: boolean): void;
    move(distX: number): void;
    updatePosition(clientX: number): number;
    onStart(ev: MouseEvent | any): void;
    onMove(ev: MouseEvent | any): void;
    onEnd(ev: MouseEvent): void;
    changeSlideOnEnd(): void;
    addEvents(): void;
    slidePosition(slide: HTMLElement): number;
    config(): void;
    indexNav(index: number): void;
    changeSlide(index: number): void;
    changeActiveClass(): void;
    activePrev(): void;
    activeNext(): void;
    onResize(): void;
    resizeEvent(): void;
    keyNav(): void;
    bindEvents(): void;
    init(): this;
}
export default class SliderNav extends Slider {
    activeNavClass: string;
    prevEl: HTMLElement | any;
    nextEl: HTMLElement | any;
    navigationContainer: HTMLElement | any;
    controlChildrens: HTMLElement | any;
    control: HTMLElement | any;
    constructor(args: any);
    createArrows(): void;
    addEventArrows(): void;
    appendArrows(): void;
    createBullets(): void;
    addClassBulletCurrent(target: HTMLElement): void;
    removeClassBulletCurrent(): void;
}
