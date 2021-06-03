//JavaScript file
var modal = window.document.getElementById('myModal');

var grid = new Array(3);
grid[0] = new Array(3);
grid[1] = new Array(3);
grid[2] = new Array(3);
var player = 1;
var gameWon = 0;

window.document.getElementById("square_one").onclick = function() {
  console.log("clicked");
  if (checkLegalMove(0, 0) == true) {
    if (player == 1) {
      window.document.getElementById("square_one_text").innerHTML = "X";
      grid[0][0] = 'X';
      if (checkWin(1) == true) {
        endgame(1);
      }
      player = 2;
    } else {
      window.document.getElementById("square_one_text").innerHTML = "O";
      grid[0][0] = 'O';
      if (checkWin(2) == true) {
        endgame(2);
      }
      player = 1;
    }
  }
}

window.document.getElementById("square_two").onclick = function() {
  if (checkLegalMove(0, 1) == true) {
    if (player == 1) {
      window.document.getElementById("square_two_text").innerHTML = "X";
      grid[0][1] = 'X';
      if (checkWin(1) == true) {
        endgame(1);
      }
      player = 2;
    } else {
      window.document.getElementById("square_two_text").innerHTML = "O";
      grid[0][1] = 'O';
      if (checkWin(2) == true) {
        endgame(2);
      }
      player = 1;
    }
  }
}

window.document.getElementById("square_three").onclick = function() {
  if (checkLegalMove(0, 2) == true) {
    if (player == 1) {
      window.document.getElementById("square_three_text").innerHTML = "X";
      grid[0][2] = 'X';
      if (checkWin(1) == true) {
        endgame(1);
      }
      player = 2;
    } else {
      window.document.getElementById("square_three_text").innerHTML = "O";
      grid[0][2] = 'O';
      if (checkWin(2) == true) {
        endgame(2);
      }
      player = 1;
    }
  }
}

window.document.getElementById("square_four").onclick=(function() {
  if (checkLegalMove(1, 0) == true) {
    if (player == 1) {
      window.document.getElementById("square_four_text").innerHTML ="X";
      grid[1][0] = 'X';
      if (checkWin(1) == true) {
        endgame(1);
      }
      player = 2;
    } else {
      window.document.getElementById("square_four_text").innerHTML = "O";
      grid[1][0] = 'O';
      if (checkWin(2) == true) {
        endgame(2);
      }
      player = 1;
    }
  }
});

window.document.getElementById("square_five").onclick = (function() {
  if (checkLegalMove(1, 1) == true) {
    if (player == 1) {
      window.document.getElementById("square_five_text").innerHTML=("X");
      grid[1][1] = 'X';
      if (checkWin(1) == true) {
        endgame(1);
      }
      player = 2;
    } else {
      window.document.getElementById("square_five_text").innerHTML = ("O");
      grid[1][1] = 'O';
      if (checkWin(2) == true) {
        endgame(2);
      }
      player = 1;
    }
  }
});

window.document.getElementById("square_six").onclick=(function() {
  if (checkLegalMove(1, 2) == true) {
    if (player == 1) {
      window.document.getElementById("square_six_text").innerHTML=("X");
      grid[1][2] = 'X';
      if (checkWin(1) == true) {
        endgame(1);
      }
      player = 2;
    } else {
      window.document.getElementById("square_six_text").innerHTML=("O");
      grid[1][2] = 'O';
      if (checkWin(2) == true) {
        endgame(2);
      }
      player = 1;
    }
  }
});

window.document.getElementById("square_seven").onclick=(function() {
  if (checkLegalMove(2, 0) == true) {
    if (player == 1) {
      window.document.getElementById("square_seven_text").innerHTML=("X");
   
            grid[2][0] = 'X';
      if (checkWin(1) == true) {
        endgame(1);
      }
   player = 2;
    } else {
      window.document.getElementById("square_seven_text").innerHTML=("O");
      grid[2][0] = 'O';
      if (checkWin(2) == true) {
        endgame(2);
      }
      player = 1;
    }
  }
});

window.document.getElementById("square_eight").onclick=(function() {
  if (checkLegalMove(2, 1) == true) {
    if (player == 1) {
      window.document.getElementById("square_eight_text").innerHTML=("X");
      grid[2][1] = 'X';
      if (checkWin(1) == true) {
        endgame(1);
      }
      player = 2;
    } else {
      window.document.getElementById("square_eight_text").innerHTML=("O");
      grid[2][1] = 'O';
      if (checkWin(2) == true) {
        endgame(2);
      }
      player = 1;
    }
  }
});

window.document.getElementById("square_nine").onclick=(function() {
  if (checkLegalMove(2, 2) == true) {
    if (player == 1) {
      window.document.getElementById("square_nine_text").innerHTML=("X");
      grid[2][2] = 'X';
      if (checkWin(1) == true) {
        endgame(1);
      }
      player = 2;
    } else {
      window.document.getElementById("square_nine_text").innerHTML=("O");
      grid[2][2] = 'O';
      if (checkWin(2) == true) {
        endgame(2);
      }
      player = 1;
    }
  }
});

function checkWin(playerNum) {
  //check horizontal
  for (i = 0; i < 3; i++) {

    if ((grid[i][0] == grid[i][1] && grid[i][1] == grid[i][2]) &&  grid[i][0] != undefined && grid[i][1] != undefined && grid[i][2] != undefined) {
     console.log("horizontal won");
      return true;
    }
  }

  //check vertical
  for (i = 0; i < 3; i++) {
    console.log("i is: " + i);
    console.log("grid[" + i + "][0] is " + grid[i][0]);
    console.log("grid[" + i + "][1] is " + grid[i][1]);
    console.log("grid[" + i + "][2] is " + grid[i][2]);
    if ((grid[0][i] == grid[1][i] && grid[1][i] == grid[2][i]) && grid[0][i] != undefined && grid[1][i] != undefined && grid[2][i] != undefined) {
      console.log("vertical won");
      return true;
    }
  }

  //check diagonal
  if (((grid[0][0] == grid[1][1] && grid[1][1] == grid[2][2]) || (grid[0][2] == grid[1][1] && grid[1][1] == grid[2][0])) && grid[1][1] !== undefined) {
     console.log("diagonal won");
    return true;
  }

  var tieGame = true;
  for (var i = 0; i < 3; i++) {
    for (var x = 0; x < 3; x++) {
      if (grid[i][x] == null && grid[i][x] == undefined) {
        tieGame = false;
      } 
    }
  }

  if (tieGame == true) {
    endgame(0);
  }

  return false;
}

function checkLegalMove(row, column) {
  console.log(grid[row][column]);
  if (grid[row][column] !== undefined && grid[row][column] !== null) {
    return false;
  } else {
    return true;
  }
}

function endgame(num) {
  if (num == 0) {
    var hello = window.document.getElementById("modal_text").innerText="Tie game!";
    console.log(hello);
    window.document.getElementById("myModal").style.display="block";
    
  }
  if (num == 1) {
    var hey = window.document.getElementById("modal_text").innerHTML="Player 1 Wins!";
    console.log(hey);
    window.document.getElementById("myModal").style.display="block";
    
  }
  if (num == 2) {
    window.document.getElementById("modal_text").innerHTML="Player 2 Wins!";
     window.document.getElementById("myModal").style.display="block";
    
  }
}

window.document.getElementById("restartBtn").onclick=(function(){
    grid = new Array(3);
    grid[0] = new Array(3);
    grid[1] = new Array(3);
    grid[2] = new Array(3);
    player = 1;
    gameWon = 0;
    window.document.getElementById("square_one_text").innerHTML = ("");
    window.document.getElementById("square_two_text").innerHTML=("");
    window.document.getElementById("square_three_text").innerHTML=("");
    window.document.getElementById("square_four_text").innerHTML=("");
    window.document.getElementById("square_five_text").innerHTML=("");
    window.document.getElementById("square_six_text").innerHTML=("");
    window.document.getElementById("square_seven_text").innerHTML=("");
    window.document.getElementById("square_eight_text").innerHTML=("");
    window.document.getElementById("square_nine_text").innerHTML=("");
    modal.style.display = "none";
});

