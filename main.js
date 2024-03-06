let firstPlayer = document.getElementById("firstPlayer");
let player = "o";
let x = [];
let o = [];
let winPatern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

//Score
let oScore = 0;
let xScore = 0;

firstPlayer.innerHTML = `player <span class="material-symbols-outlined circle">circle</span> first`;

//move
function move(cord){
  let pos = document.getElementById(cord);
  let oScoreDisplay = document.getElementById("oScore");
  let xScoreDisplay = document.getElementById("xScore");
  
  if(pos.querySelector('*') === null){
  
    if(player == "o"){
      pos.innerHTML = `
       <span class="material-symbols-outlined">
          circle
       </span>
      `;
      pos.className = "o";
      o.push(parseInt(cord));
      if(check("o")){
        oScore++;
        oScoreDisplay.innerText = oScore;
        Swal.fire({
          title: 'O WIN',
          text: 'WIN',
          icon: 'success',
          confirmButtonText: 'Back'
        });
        reset();
        player = "x";
        firstPlayer.innerHTML = `player <span class="material-symbols-outlined close">close</span> first`;
      }else{
        player = "x";
        if (x.length === 3){
          let firstMove = document.getElementById(`${x[0]}`);
          firstMove.innerHTML = "";
          x.shift();
        }
      }
    }else{
      pos.innerHTML = `
        <span class="material-symbols-outlined">
          close
        </span>    
      `;
      pos.className = "x";
      x.push(parseInt(cord));
      if (check("x")) {
        xScore++;
        xScoreDisplay.innerText = xScore;
        Swal.fire({
          title: 'X',
          text: 'WIN',
          icon: 'success',
          confirmButtonText: 'Back'
        });
        reset();
        player = "o";
        firstPlayer.innerHTML = `player <span class="material-symbols-outlined circle">circle</span> first`;
      } else {
        player = "o";
        if (o.length === 3) {
          let firstMove = document.getElementById(`${o[0]}`);
          firstMove.innerHTML = "";
          o.shift();
        }
      }
    }
    
  }
  
}

//check
function check(trgt){
  if(trgt == "o"){
    
    for (var i = 0; i < winPatern.length; i++) {
      let current = winPatern[i];
      let target = o;
      let a = target[0];
      let b = target[1];
      let c = target[2];
      
      if(current.includes(a) && current.includes(b) && current.includes(c)){
        return true;
      }
    }
    return false;
    
  }else{
    
    for (var i = 0; i < winPatern.length; i++) {
      let current = winPatern[i];
      let target = x;
      let a = target[0];
      let b = target[1];
      let c = target[2];
    
      if (current.includes(a) && current.includes(b) && current.includes(c)) {
        return true;
      }
    }
    return false;
    
  }
}

//reset
function reset(){
  for (var i = 0; i <= 8; i++) {
    let target = document.getElementById(`${i}`);
    target.innerHTML = "";
    x = [];
    o = [];
    player = "o";
  }
}

//share
function share(){
  if (navigator.share) {
    navigator.share({
        title: 'Tic Tac Toe',
        text: 'Lets Play Online Tic Tac Toe\n',
        url: 'https://umamdev.github.io/Tic-Tac-Toe-Game ',
      })
      .then(() => console.log('Successful share'))
      .catch((error) => console.log('Error sharing', error));
  }
}

//reset score
function resetScore() {
  xScore = 0;
  oScore = 0;
  document.getElementById("oScore").innerText = oScore;
  document.getElementById("xScore").innerText = xScore;
}