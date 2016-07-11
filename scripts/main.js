function init() {

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
      } else alert("It's a draw!");
      location.reload();
    }
  }

  $('.true').click(function() {
    if(questions[random].answer === 'true') {
      if( playerTurn === 1 ){
        player1Score++;
        $(".player1-score").text("Score: " + player1Score);
      } else {
        player2Score++;
        $(".player2-score").text("Score: " + player2Score);
      }
    } else {
      console.log("wrong");
    }
    questions.splice(random,1);
    checkWinner();
    currentQnNo++;
    // console.log(questions.length);
    currentPlayerTurn();
    askQuestion();
  });

  $('.false').click(function() {
    if(questions[random].answer === 'false') {
      if( playerTurn === 1 ){
        player1Score++;
        console.log("player 1 score is now " + player1Score);
        $(".player1-score").text("Score: " + player1Score);
      } else {
        player2Score++;
        $(".player2-score").text("Score: " + player2Score);
      }
    } else {
      console.log("wrong");
    }
    questions.splice(random,1);
    currentQnNo++;
    currentPlayerTurn();
    askQuestion();
    checkWinner();
  });



  //
  // function numberOfQuestions() {
  //   var totalQuestions = questions.length;
  //   return totalQuestions;
  // }
  //
  // function correctAnswer() {
  //   var answer = questions[random].answer;
  //   return answer;
  // }
  //
  // function playerTurn(choice) {
  //   if (currQnNo > -1) {
  //     if (choice == correctAnswer()) {
  //       if (player1Turn) {
  //         player1Score++;
  //       } else {
  //         player2Score++;
  //       }
  //       }
  //     }
  //   }
  //
  //
  //
  //
  //
  // }
  //
  //
  // // playTurn: function(choice) {
  // //   if(this.currQnNo > -1){
  // //     if (choice == this.correctAnswer()) {
  // //       if (this.player1Turn) {
  // //         this.player1Score++;
  // //       } else {
  // //         this.player2Score++;
  // //       }
  // //       this.statusUpdate();
  // //       return true;
  // //     } else {
  // //       this.statusUpdate();
  // //       return false;
  // //     }
  // //   }else{
  // //     return true;
  // //   }
  //
  //
  //     // assign 'true' / 'false' to buttons
  //     // if chosen answer is true
  //
  //
  //
  //
  //     $(document).ready(function() {
  //         var textQuestion = $("#qnText").text(currentQuestion);
  //
  //         // });
  //
  //
  //       }
  //       window.addEventListener('load', init, false);
      }
      init();
