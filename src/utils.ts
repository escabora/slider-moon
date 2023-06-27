const debounce = (callback: any, delay: number) => {
  let timer: object | any;
  return (...args: any) => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
          callback(...args);
          timer = null;
      }, delay);
  };
}

const createEl = (element: string, customClass: string) => {
  const elementCreated = document.createElement(element);
  elementCreated.classList.add(customClass);
  return elementCreated;
}

export {
  debounce,
  createEl
}