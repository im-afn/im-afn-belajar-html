var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

// Initial circle position
var x = canvas.width / 2;
var y = canvas.height / 2;
var radius = 50;

// Function to draw the circle
function drawCircle() {
  context.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
  context.beginPath();
  context.arc(x, y, radius, 0, 2 * Math.PI);
  context.fillStyle = "red";
  context.fill();
  context.stroke();
}

// Function to update circle position based on mouse movement
function updateCirclePosition(event) {
  var rect = canvas.getBoundingClientRect();
  x = event.clientX - rect.left;
  y = event.clientY - rect.top;
  drawCircle();
}

// Event listener for mouse movement
canvas.addEventListener("mousemove", updateCirclePosition);

// Draw the initial circle
drawCircle();

//attribut canvas
const c = document.getElementById("myCanvas2");
const ctx = c.getContext("2d");
ctx.fillStyle = "#92B901";
ctx.fillRect(50, 50, 100, 100);

//attribut canvas
const a = document.getElementById("myCanvas3");
const cta = a.getContext("2d");
cta.fillStyle = "#92B901";
cta.fillRect(50, 50, 100, 100);
