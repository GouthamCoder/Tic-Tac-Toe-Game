let board = ["", "", "", "", "", "", "", "", ""];
let turn = "X";

let cells = document.querySelectorAll("td");
cells.forEach(function(cell) {
  cell.addEventListener("click", cellClicked);
});

function cellClicked() {
  if (this.textContent == "") {
    this.textContent = turn;
    board[this.id] = turn;
    checkWin();
    checkTie();
    if (turn == "X") {
      turn = "O";
    } else {
      turn = "X";
    }
  }
}

function checkWin() {
  let winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < winCombos.length; i++) {
    if (
      board[winCombos[i][0]] == turn &&
      board[winCombos[i][1]] == turn &&
      board[winCombos[i][2]] == turn
    ) {
      alert("Player " + turn + " wins!");
      reset();
    }
  }
}

function checkTie() {
  if (!board.includes("")) {
    alert("Tie game!");
    reset();
  }
}

function reset() {
  board = ["", "", "", "", "", "", "", "", ""];
  turn = "X";
  cells.forEach(function(cell) {
    cell.textContent = "";
  });
}

  