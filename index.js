const roll = () => {
  let x = Math.floor(Math.random() * 6 + 1);

  document.getElementById("image_one").src = `dice/image${x}.png`;

  let y = Math.floor(Math.random() * 6 + 1);

  document.getElementById("image_two").src = `dice/image${y}.png`;

  if (x > y) {
    document.getElementById("msg").innerText = `${player1} has won`;
  } else if (x < y) {
    document.getElementById("msg").innerText = `${player2} has won`;
  } else {
    document.getElementById("msg").innerText = "match draw";
  }

  console.log(x);
};

let player1 = prompt("what is your name?");
document.getElementById("player_one").innerText = player1;

let player2 = prompt("what is your name?");
document.getElementById("player_two").innerText = player2;

document.getElementById("btn").addEventListener("click", roll);
