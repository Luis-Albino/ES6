/// BALL ///
const ball = document.getElementById("ball");
let diameter = ball.clientHeight;// in px
const ballStyle = ball.style;

/// CONTAINER ///
const container = document.getElementById("container");
const maxDepth = container.clientHeight - diameter;// in px
const maxWidth = container.clientWidth - diameter;// in px

/// Ball's initial possition and speed ///
let x = maxWidth;
let y = 0;
ball.style.top = y + "px"; // default depth
ball.style.left = x + "px"; // horizontal possition
let speedX = -.2; // Horizontal speed
let speedY = 0; // Vertical speed

/// Animation ///
const time = 10;// milliseconds 
const gravity = .001; // gravity
const gFactor = 0.5*gravity*time*time; // Auxiliar factor
const damping = .997; // damping factor
let t = 0;
let animation = setInterval (function () {
    t += time 
    if (x < 0 || x > maxWidth){
        speedX = - speedX;
    };
    if (y < 0 || y > maxDepth){
        speedY = - speedY;
    };
    // update possition and speed //
    x += speedX*time;
    y += gFactor + speedY*time; 
    speedY += gravity*time;
    // dumping factors //
    speedX = damping*speedX;
    speedY = damping*speedY;
    // display new possition //
    ballStyle.left = x + "px";
    ballStyle.top = y + "px";
},time)


