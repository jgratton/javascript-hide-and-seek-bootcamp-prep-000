function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  //var nested = selector.split(" ");
  return document.getElementById("#nested").querySelector("div.target");
}