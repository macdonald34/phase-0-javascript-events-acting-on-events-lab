// Your code here

// Your code here
document.addEventListener('keydown', function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}


function moveDodgerRight() {
  let left = parseInt(dodger.style.left);
  if (left < 360) { // 400 (width of game field) - 40 (width of dodger)
    dodger.style.left = `${left + 1}px`;
  }
}

