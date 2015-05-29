var firstWords = ['Who', 'do', 'you', 'think', 'pays', 'for', 'this', 'site', '?????'];
var answers = ['Santa Claus', 'John Galt', 'The Free Masons', 'The Illuminati', 'Gold sales from Nibiru'];
var secondWords = ['Please', 'consider donating', 'today', 'http:clickable.donate.link', 'Thanks', 'You will now be directed to the website'];
var targetContent = document.getElementById("targetContent");

function sleep(milliseconds) {
  var wait = 0;
  var start = new Date().getTime();
  for (wait; wait < 1e7; wait++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

function showFirstWords() {
  var i = 0;
  for (i; i < firstWords.length; i++) {
    sleep(100);
    targetContent.innerHTML = firstWords[i];
    console.log('Item ' + i + ' is currently set to ' + firstWords[i]);
  }
}

function display() {
  // x functionality when window loads
  targetContent.innerHTML = "This has been set";
  showFirstWords();
  console.log("do something after first");
  sleep(5000);
}

document.getElementById("continueButton").onclick = function () {
 // location.href = "index.html";
  console.log("buton clicked");
};

window.onload = function () {
  display();
};