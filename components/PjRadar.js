
  let P;
  let socket =require('socket.io-client');

export function main(_P) {
  P = _P;



  P.setup = _ => {
    let canvas = P.createCanvas(350, 500);
    canvas.parent("pjCanvas");
    P.background(0,128,0);

  }

  P.mouseDragged = _ => {
    console.log('test:',socket);
    console.log(emit);

    console.log(P.mouseX+'----'+P.mouseY);
    let data = {
      x: P.mouseX,
      y: P.mouseY
    }
    socket.emit('mouse',{data,  room: sessionStorage.getItem('room')});
    P.noStroke();
    P.fill(255);
    P.ellipse(P.mouseX, P.mouseY ,15,15);
  }
  P.draw = _ => {

  }

  // P.touchMoved = _ => {
  //   // P.background(0,128,0);
  //   P.line(P.mouseX, P.mouseY, P.pmouseX, P.pmouseY)
  //   return false;

  // }


  }

