var $ = require("./lib/qsa");
var closest = require("./lib/closest");
var dot = require("./lib/dot");

$(".row").forEach(el => el.addEventListener("click", () => el.classList.add("show-predictions")));

var userPredictions = {};

var setHash = function() {
  var output = 0;
  for (var k in userPredictions) {
    var game = k * 1 - 1;
    var result = userPredictions[k] ? (userPredictions[k] == "W" ? 1 : 2) : 0;
    var binary = result << game * 2;
    output += binary;
  }
  console.log(output, output.toString(2), game * 2);
};

var onClickIcon = function() {
  var game = this.getAttribute("data-game");
  var prediction = this.getAttribute("data-prediction");
  var src = this.getAttribute("src");
  var row = closest(this, ".row");
  var pickImage = $.one(".user-pick", row);
  pickImage.src = src;
  userPredictions[game] = prediction;
  setHash();
};

var appendRecord = function() {

}

$(".team.logo").forEach(el => el.addEventListener("click", onClickIcon));
