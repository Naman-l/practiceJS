function getElementsByStyle(
    styleName,
    styleValue,
    rootElement,
    elementList = []
  ) {
    if (getComputedStyle(rootElement)[styleName] === styleValue) {
      elementList.push(rootElement);

    // The Window.getComputedStyle() method returns an object containing the values of all CSS properties of an element,
    // after applying active stylesheets and resolving any basic computation those values may contain.
    }
    for (let child of rootElement.children) {
      getElementsByStyle(styleName, styleValue, child, elementList);
    }
    return elementList;
  }