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

//move
function move(cord){
  let pos = document.getElementById(cord);
  
  
  if(player == "o"){
    pos.innerHTML = player;
    pos.className = "o";
    o.push(parseInt(cord));
    if(check("o")){
      Swal.fire({
        title: 'O WIN',
        text: 'WIN',
        icon: 'success',
        confirmButtonText: 'Back'
      });
      reset();
    }else{
      player = "x";
    }
  }else{
    pos.innerHTML = player;
    pos.className = "x";
    x.push(parseInt(cord));
    if (check("x")) {
      Swal.fire({
        title: 'X',
        text: 'WIN',
        icon: 'success',
        confirmButtonText: 'Back'
      });
      reset();
    } else {
      player = "o";
    }
  }
  
  if (x.length === 3 && o.length === 3) {
    Swal.fire({
      title: 'DRAW',
      icon: 'warning',
      confirmButtonText: 'Back'
    });
    reset();
  }
}

//check
function check(trgt){
  if(trgt == "o"){
    
    for (var i = 0; i < winPatern.length; i++) {
      let current = winPatern[i].sort();
      let target = o.sort();
      
      if(JSON.stringify(current) === JSON.stringify(target)){
        return true;
      }
    }
    return false;
    
  }else{
    
    for (var i = 0; i < winPatern.length; i++) {
      let current = winPatern[i].sort();
      let target = x.sort();
    
      if (JSON.stringify(current) === JSON.stringify(target)) {
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
        url: 'https://whatsapp.com/channel/0029VaOh1g34Y9lmtElxuV1S',
      })
      .then(() => console.log('Successful share'))
      .catch((error) => console.log('Error sharing', error));
  }
}