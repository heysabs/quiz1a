function init() {

  var player1Name = prompt("What's Player 1's name?");
  var player2Name = prompt("What's Player 2's name?");
  $(".player1").text(player1Name);
  $(".player2").text(player2Name);

  var player1Score = 0;
  var player2Score = 0;
  var playerTurn = 1;
  var currentQnNo = 1;

  // using the new keyword and the constructor we can create array of questions for the quiz
  var questions = [{
    question: 'Humans share 50% of their DNA with bananas.',
    choices: ['true', 'false'],
    answer: 'true'
  }, {
    question: 'Astronauts shrink while they\'re in space.',
    choices: ['true', 'false'],
    answer: 'false'
  }, {
    question: 'Earth is closest to the sun in January.',
    choices: ['true', 'false'],
    answer: 'true'
  }, {
    question: 'Narwhals use their tusks to communicate with each other.',
    choices: ['true', 'false'],
    answer: 'false'
  }, {
    question: 'Male platypuses produce venom.',
    choices: ['true', 'false'],
    answer: 'true'
  }, {
    question: 'An octopus has two hearts.',
    choices: ['true', 'false'],
    answer: 'false'
  }, {
    question: 'Baby echidnas are called puggles.',
    choices: ['true', 'false'],
    answer: 'true'
  }, {
    question: 'Whales can get sunburned.',
    choices: ['true', 'false'],
    answer: 'true'
  }, {
    question: 'Different coloured Froot Loops have different flavours.',
    choices: ['true', 'false'],
    answer: 'false'
  }, {
    question: 'A group of otters is called a romp.',
    choices: ['true', 'false'],
    answer: 'true'
  }];

  var random = 0;

  function askQuestion() {
    random = Math.floor(Math.random() * questions.length);
    var currentQn = questions[random].question;
    $("#qnText").text(currentQn);
    $("#qnNumber").text("Question " + currentQnNo);
  }

  askQuestion();

  function currentPlayerTurn() {
    if(currentQnNo % 2 === 1) {
      playerTurn = 1;
      $(".playerTurnNow").text("It's Player " + playerTurn + "'s turn.");
    } else {
      playerTurn = 2;
      $(".playerTurnNow").text("It's Player " + playerTurn + "'s turn.");
    }
  }

  function checkWinner() {
    if(questions.length === 0) {
      if(player1Score > player2Score) {
        alert("Player 1 wins! Play again?");
        location.reload();
      } else if (player2Score > player1Score) {
        alert("Player 2 wins! Play again?");
        location.reload();
      } else {
        alert("It's a draw! Play again?");
      location.reload();
    }
    }
  }

  function assignScore(index, answer) {
    if (questions[index].answer === answer) {
      if( playerTurn === 1 ){
        player1Score++;
        $(".player1-score").text("Player 1 Score: " + player1Score);
        swal({title: ':D', text: 'Yes! You get a point :)', type: 'success', confirmButtonText: 'Next'});
      } else {
        player2Score++;
        $(".player2-score").text("Player 2 Score: " + player2Score);
        swal({title: ':D', text: 'Yes! You get a point :)', type: 'success', confirmButtonText: 'Next'});
    }
  } else {
    swal({title: ':(', text: 'You got it wrong!', type: 'error', confirmButtonText: 'Next'});
  }
}


  $('.true').click(function() {
    assignScore(random, 'true');
    questions.splice(random,1);
    checkWinner();
    currentQnNo++;
    currentPlayerTurn();
    askQuestion();
  });

  $('.false').click(function() {
    assignScore(random, 'false');
    questions.splice(random,1);
    checkWinner();
    currentQnNo++;
    currentPlayerTurn();
    askQuestion();
  });


      }
      init();
