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
  let counter = 0;

  // Functions
  const markBlock = item => {
    item.addEventListener("click", () => {
      if (item.childElementCount == 0) {
        if (counter % 2 == 0) {
          item.innerHTML = `<img src="images/yellow.png" alt="" />`;
        } else {
          item.innerHTML = `<img src="images/red.png" alt="" />`;
        }
        counter++;
      }
    });
  }

  // 
  blocks.forEach(markBlock);
};
