function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget(selector) {
  var nested = selector.split(" ");
  return document.getElementById(nested[0]).getElementsByClassName(nested[1]);
}