function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  //var nested = selector.split(" ");
  return document.getElementById("nested").getElementsByClassName("div.target");
}