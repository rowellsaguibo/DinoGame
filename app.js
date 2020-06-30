let dino = document.getElementById('dino');
let cactus = document.getElementById('cactus');
let button = document.getElementById('btn');
let count = 0;

function jump() {
  if (dino.classList.contains != 'motion') {
    dino.classList.add('motion');
  }

  setTimeout(() => {
    dino.classList.remove('motion');
  }, 500);
}

button.addEventListener('click', jump);

let checkContact = setInterval(() => {
  let dinoTop = parseFloat(
    window.getComputedStyle(dino).getPropertyValue('top')
  );

  let cactusLeft = parseFloat(
    window.getComputedStyle(cactus).getPropertyValue('left')
  );
  if (cactusLeft >= 0 && cactusLeft <= 50 && dinoTop >= 250) {
    cactus.style.animation = 'none';
    alert('Game Over!');
    console.log(checkContact);
    location.reload();
  } else {
    count += 1;
    document.getElementById(
      'score'
    ).innerHTML = `Your score is: ${count} points`;
  }
}, 10);

// let count = 0;
// button.onclick = function () {
//   if (checkContact) {
//     count += 10;
//     document.getElementById(
//       'score'
//     ).innerHTML = `Your score is: ${count} points`;
//   }
// };
