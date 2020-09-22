console.log("POW");
let dum = 0;
while (dum <= 7) {
  // console.log(dum);
}
var quiz = {
  question: [
    "Which of following is not 'reserved for use' as binding names in JavaScript?",
    "Indenting or adding spaces in front of statements that are part of a larger statement is required for the program to work",
    "Which of the following uses the conventional style of capitalizing when writing binding names?",
    "whats wrong with you?",
    "how old are you?",
    "When writing a function, you  can put three dots before the function's last parameter to “spread” out the array into the function call, passing its elements as separate arguments.",
  ],
  options: {
    list: [
      ["Finally", "Extra", "Void"],
      ["True", "False", "Triple dog dare"],
      ["PoopInHats", "I_YELL_ALOT", "grammerJew"],
      ["Nothing", "Everything", "beat around bush"],
      ["31", "13", "Go away"],
      ["Yep", "Nope", "`I like to live dangerously`"],
    ],
  },
  correct: [1, 2, 3, 1, 1, 1],
};
var intervalID;
var count = 100;
let q = 0;
var score = 0;

$(document).ready(function () {
  $("#beginbtn").on("click", function (event) {
    event.preventDefault();
    renderQuestions();
    renderOptions();
    renderCount();
    nextQuestionButton();
    hideForm();
    runTimer();
  });
});

function renderQuestions() {
  var q1 = $("<p></p>").text(quiz.question[q]);
  var txt3 = document.createElement("p");
  txt3.innerHTML = "JavaScript"; // Create text with DOM
  $("#question").prepend(txt3, q1); // Append new elements
}
function renderOptions() {
  var opt1 = quiz.options.list[q][0];
  var opt2 = quiz.options.list[q][1];
  var opt3 = quiz.options.list[q][2];
  var options = `<select class="custom-select" id="inputGroupSelect01">
  <option selected value="-1">Choose...</option>
  <option id="text1" value="1">${opt1}</option>
  <option id="text2" value="2">${opt2}</option>
  <option id="text3" value="3">${opt3}</option>
  </select>  
    `;
  $("#options").prepend(options);
}
function renderCount() {
  $("#counter").html(`<p>Question: ${q + 1} </p>`);
}

function nextQuestionButton() {
  var nextBtn = $(`<button id="nextBtn" style="float: right;">`);
  nextBtn.text("Next Question");
  $("body").append(nextBtn);
  $("#nextBtn").on("click", function (event) {
    event.preventDefault();
    const answer = parseInt($(".custom-select").val());
    console.log(answer);
    if (answer === -1) {
      alert("Choose an answer to continue");
      return;
    }
    checkAnswer(answer);
    $("p").remove();
    $(".custom-select").remove();
    q++;
    renderQuestions();
    renderOptions();
    renderCount();
  });
}

function checkAnswer(answer) {
  if (answer !== quiz.correct[q]) {
    count -= 10;
    alert("Wrong. Minus 10 seconds.");
  } else {
    score++;
  }

  // for
  //   if (parseInt($(".custom-select").val()) === 1) {
  //   } else {
  //     count -= 10;
  //   }
}

// function showNext() {
//   count = 1;
//   for (i = 1; i < 5; i++) {
//     if (quiz.question[i] == 1) count++;
//     var q = $("<p></p>").text(quiz.question[i]);
//     $("h5").append(q);
//   }
//   console.log(count);
// }

function runTimer() {
  intervalID = setInterval(decrement, 1000);
}
function decrement() {
  count--;
  $("#clock").html("<h2>You have " + count + " seconds remaining</h2>");
  if (count === 0) {
    $("#clock").hide();
    stop();
  }
}
function stop() {
  clearInterval(intervalID);
}
function hideForm() {
  $("form").hide();
}

// $("#nextQuestion").on("click", function () {
//   count++;
//   if (count === questions.length) {
//     count = 0;
//   }
