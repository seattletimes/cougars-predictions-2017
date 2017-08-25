var $ = require("./lib/qsa");
var closest = require("./lib/closest");
var dot = require("./lib/dot");

$(".row").forEach(el => el.addEventListener("click", () => el.classList.add("show-predictions")));

var button = $.one(".experts.button");
var staffPredictions = $.one(".hidden.predictions")
button.addEventListener("click", staffPredictions.classList.add("show-record"));

var userPredictions = {};

var updateScore = function() {
  var output = 0;
  var wins = 0;
  var lose = 0;
  for (var k in userPredictions) {
    var result;
    var game = k * 1 - 1;
    if (userPredictions[k] == "W") {
      result = 1;
      wins++;
    } else {
      result = 2;
      lose++;
    }
    var binary = result << game * 2;
    output += binary;
  }
  $.one(".record").innerHTML = `${wins} - ${lose}`;
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
  updateScore();
};

var clearGame = function() {
  var game = this.getAttribute("data-game");
  delete userPredictions[game];
  updateScore();
};

$(".team.logo").forEach(el => el.addEventListener("click", onClickIcon));
$(".clear-pick").forEach(el => el.addEventListener("click", clearGame));
