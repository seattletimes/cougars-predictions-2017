var $ = require("./lib/qsa");
var closest = require("./lib/closest");
var dot = require("./lib/dot");

$(".row").forEach(el => el.addEventListener("click", () => el.classList.add("show-predictions")));

var onClickIcon = function() {
  var game = this.getAttribute("data-game");
  var prediction = this.getAttribute("data-prediction");
  var src = this.getAttribute("src");
  var row = closest(this, ".row");
  var pickImage = $.one(".user-pick", row);
  pickImage.src = src;
  console.log(prediction);
}

$(".team.logo").forEach(el => el.addEventListener("click", onClickIcon));
