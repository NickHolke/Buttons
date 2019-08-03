let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext("2d");

function rightArm() {
  ctx.beginPath();
  ctx.moveTo(80,50);
  ctx.lineTo(85, 59);
  ctx.stroke();
  ctx.closePath();
}

function rightLeg() {
  ctx.beginPath();
  ctx.moveTo(80, 64);
  ctx.lineTo(85, 74);
  ctx.stroke();
  ctx.closePath();    
}

function leftArm () {
  ctx.beginPath();
  ctx.moveTo(80,50);
  ctx.lineTo(75, 57);
  ctx.stroke();
  ctx.closePath();
}

function leftLeg() {
  ctx.beginPath();
  ctx.moveTo(80,64);
  ctx.lineTo(75, 74);
  ctx.stroke();
  ctx.closePath();
}

function drawHead () {
  ctx.beginPath();
  ctx.arc(80, 40, 6, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.closePath();
}

function drawBody () {
  ctx.beginPath();
  ctx.moveTo(80, 46);
  ctx.lineTo(80, 64);
  ctx.stroke();
}

function drawGallows () {
  ctx.beginPath();
  ctx.moveTo(80, 28);
  ctx.lineTo(80, 34);
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.moveTo(36, 84);
  ctx.lineTo(104, 84);
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.rect(46, 28, 4, 56);
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.rect(46, 24, 44, 4);
  ctx.stroke();
  ctx.closePath();
}

/*rightArm();
leftArm();
leftLeg();
rightLeg();
drawGallows();
drawHead();
drawBody();*/