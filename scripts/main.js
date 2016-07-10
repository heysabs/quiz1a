function init() {

  var player1Score = 0;
  var player2Score = 0;
  var playerTurn = 1;
  var currentQnNo = 1;

  // using the new keyword and the constructor we can create array of questions for the quiz
  var questions = [{
    question: 'the question 1',
    choices: ['true', 'false'],
    answer: 'true'
  }, {
    question: 'the question 2',
    choices: ['true', 'false'],
    answer: 'false'
  }, {
    question: 'the question 3',
    choices: ['true', 'false'],
    answer: 'true'
  }, {
    question: 'the question 4',
    choices: ['true', 'false'],
    answer: 'false'
  }, {
    question: 'the question 5',
    choices: ['true', 'false'],
    answer: 'true'
  }, {
    question: 'the question 6',
    choices: ['true', 'false'],
    answer: 'false'
  }, {
    question: 'the question 7',
    choices: ['true', 'false'],
    answer: 'true'
  }, {
    question: 'the question 8',
    choices: ['true', 'false'],
    answer: 'true'
  }, {
    question: 'the question 9',
    choices: ['true', 'false'],
    answer: 'false'
  }, {
    question: 'the question 10',
    choices: ['true', 'false'],
    answer: 'true'
  }];

  var random = 0;

  function askQuestion() {
    random = Math.floor(Math.random() * questions.length);
    var currentQn = questions[random].question;
    $("#qnText").text(currentQn);
  }

  askQuestion();

  function currentPlayerTurn() {
    if(currentQnNo % 2 === 1) {
      playerTurn = 1;
      $(".playerTurnNow").text("It's Player " + playerTurn + "'s turn!");
    } else {
      playerTurn = 2;
      $(".playerTurnNow").text("It's Player " + playerTurn + "'s turn!");
    }
  }

  $('.true').click(function() {
    if(questions[random].answer === 'true') {
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
    currentQnNo++;
    currentPlayerTurn();
    askQuestion();
  });

  $('.false').click(function() {
    if(questions[random].answer === 'false') {
      console.log("correct");
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
    currentQnNo++;
    currentPlayerTurn();
    askQuestion();
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
