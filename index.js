function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget(nested, selector) {
  return document.querySelector(`${nested} ${selector}`);
}