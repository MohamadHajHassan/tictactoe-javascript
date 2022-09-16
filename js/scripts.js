window.onload = () => {
  // Variable
  const blocks = document.querySelectorAll(".mini-container");
  const b1 = document.getElementById("1");
  const b2 = document.getElementById("2");
  const b3 = document.getElementById("3");
  const b4 = document.getElementById("4");
  const b5 = document.getElementById("5");
  const b6 = document.getElementById("6");
  const b7 = document.getElementById("7");
  const b8 = document.getElementById("8");
  const b9 = document.getElementById("9");
  const scoreDisplayYellow = document.getElementById("score-yellow");
  const scoreDisplayRed = document.getElementById("score-red");
  const winner = document.getElementById("winner");
  let counter = 0;
  let scoreYellow = 0;
  let scoreRed = 0;

  // Functions
  const markBlock = item => {
    item.addEventListener("click", () => {
      if (item.childElementCount == 0) {
        if (counter % 2 == 0) {
          item.innerHTML = `<img src="images/yellow.png" alt="" />`;
          console.log(item.innerHTML);
        } else {
          item.innerHTML = `<img src="images/red.png" alt="" />`;
        }
        counter++;
      }
    });
  };

  const checkWin = () => {
    if (
      (b1.childElementCount == 1 &&
        b2.childElementCount == 1 &&
        b3.childElementCount == 1) ||
      (b4.childElementCount == 1 &&
        b5.childElementCount == 1 &&
        b6.childElementCount == 1) ||
      (b7.childElementCount == 1 &&
        b8.childElementCount == 1 &&
        b9.childElementCount == 1)
    ) {
      if (
        (b1.innerHTML == b2.innerHTML &&
          b1.innerHTML == b3.innerHTML &&
          b1.innerHTML == `<img src="images/yellow.png" alt="">`) ||
        (b4.innerHTML == b5.innerHTML &&
          b4.innerHTML == b6.innerHTML &&
          b4.innerHTML == `<img src="images/yellow.png" alt="">`) ||
        (b7.innerHTML == b8.innerHTML &&
          b7.innerHTML == b9.innerHTML &&
          b7.innerHTML == `<img src="images/yellow.png" alt="">`)
      ) {
        // yellow win
        scoreYellow++;
        scoreDisplayYellow.innerText = scoreYellow;
        scoreDisplayRed.innerText = scoreRed;
        winner.innerText = `Yellow win!`;
        setInterval(() => (winner.innerText = ``), 1000);
        endOfRound();
      } else if (
        (b1.innerHTML == b2.innerHTML &&
          b1.innerHTML == b3.innerHTML &&
          b1.innerHTML == `<img src="images/red.png" alt="">`) ||
        (b4.innerHTML == b5.innerHTML &&
          b4.innerHTML == b6.innerHTML &&
          b4.innerHTML == `<img src="images/red.png" alt="">`) ||
        (b7.innerHTML == b8.innerHTML &&
          b7.innerHTML == b9.innerHTML &&
          b7.innerHTML == `<img src="images/red.png" alt="">`)
      ) {
        // red win
        scoreRed++;
        scoreDisplayYellow.innerText = scoreYellow;
        scoreDisplayRed.innerText = scoreRed;
        winner.innerText = `Red win!`;
        setInterval(() => (winner.innerText = ``), 1000);
        endOfRound();
      }
    }
    if (
      (b1.childElementCount == b4.childElementCount &&
        b1.childElementCount == b7.childElementCount &&
        b1.childElementCount == 1) ||
      (b2.childElementCount == b5.childElementCount &&
        b2.childElementCount == b8.childElementCount &&
        b2.childElementCount == 1) ||
      (b3.childElementCount == b6.childElementCount &&
        b3.childElementCount == b9.childElementCount &&
        b3.childElementCount == 1)
    ) {
      if (
        (b1.innerHTML == b4.innerHTML &&
          b1.innerHTML == b7.innerHTML &&
          b1.innerHTML == `<img src="images/yellow.png" alt="">`) ||
        (b2.innerHTML == b5.innerHTML &&
          b2.innerHTML == b8.innerHTML &&
          b2.innerHTML == `<img src="images/yellow.png" alt="">`) ||
        (b3.innerHTML == b6.innerHTML &&
          b3.innerHTML == b9.innerHTML &&
          b3.innerHTML == `<img src="images/yellow.png" alt="">`)
      ) {
        // yellow win
        scoreYellow++;
        scoreDisplayYellow.innerText = scoreYellow;
        scoreDisplayRed.innerText = scoreRed;
        winner.innerText = `Yellow win!`;
        setInterval(() => (winner.innerText = ``), 1000);
        endOfRound();
      } else if (
        (b1.innerHTML == b4.innerHTML &&
          b1.innerHTML == b7.innerHTML &&
          b1.innerHTML == `<img src="images/red.png" alt="">`) ||
        (b2.innerHTML == b5.innerHTML &&
          b2.innerHTML == b8.innerHTML &&
          b2.innerHTML == `<img src="images/red.png" alt="">`) ||
        (b3.innerHTML == b6.innerHTML &&
          b3.innerHTML == b9.innerHTML &&
          b3.innerHTML == `<img src="images/red.png" alt="">`)
      ) {
        // red win
        scoreRed++;
        scoreDisplayYellow.innerText = scoreYellow;
        scoreDisplayRed.innerText = scoreRed;
        winner.innerText = `Red win!`;
        setInterval(() => (winner.innerText = ``), 1000);
        endOfRound();
      }
    }
    if (
      (b1.childElementCount == b5.childElementCount &&
        b1.childElementCount == b9.childElementCount &&
        b1.childElementCount == 1) ||
      (b7.childElementCount == b5.childElementCount &&
        b7.childElementCount == b3.childElementCount &&
        b7.childElementCount == 1)
    ) {
      if (
        (b1.innerHTML == b5.innerHTML &&
          b1.innerHTML == b9.innerHTML &&
          b1.innerHTML == `<img src="images/yellow.png" alt="">`) ||
        (b7.innerHTML == b5.innerHTML &&
          b7.innerHTML == b3.innerHTML &&
          b7.innerHTML == `<img src="images/yellow.png" alt="">`)
      ) {
        // yellow win
        scoreYellow++;
        scoreDisplayYellow.innerText = scoreYellow;
        scoreDisplayRed.innerText = scoreRed;
        winner.innerText = `Yellow win!`;
        setInterval(() => (winner.innerText = ``), 1000);
        endOfRound();
      } else if (
        (b1.innerHTML == b5.innerHTML &&
          b1.innerHTML == b9.innerHTML &&
          b1.innerHTML == `<img src="images/red.png" alt="">`) ||
        (b7.innerHTML == b5.innerHTML &&
          b7.innerHTML == b3.innerHTML &&
          b7.innerHTML == `<img src="images/red.png" alt="">`)
      ) {
        // red win
        scoreRed++;
        scoreDisplayYellow.innerText = scoreYellow;
        scoreDisplayRed.innerText = scoreRed;
        winner.innerText = `Red win!`;
        setInterval(() => (winner.innerText = ``), 1000);
        endOfRound();
      }
    }
  };

  const ListenerCheckWin = item => {
    item.addEventListener("click", checkWin);
  };

  const endOfRound = () => {
    blocks.forEach(item => (item.innerHTML = ""));
  };
  const ListenCheckDraw = item => {
    item.addEventListener("click", checkDraw);
  };

  const checkDraw = () => {
    let count = 0;
    blocks.forEach(item => {
      if (item.childElementCount == 1) {
        count++;
      }
    });
    if (count == 9) {
      winner.innerHTML = "Draw!";
      setInterval(() => (winner.innerText = ``), 1000);
      endOfRound();
    }
  };

  //
  scoreDisplayYellow.innerText = scoreYellow;
  scoreDisplayRed.innerText = scoreRed;
  blocks.forEach(markBlock);
  blocks.forEach(ListenerCheckWin);
  blocks.forEach(ListenCheckDraw);
};
