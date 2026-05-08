// Trent Duncan
// JS Traffic Light
// 5/8/2026

// Find each light using getElementById() method
const lights = [
  document.getElementById('red-light'),
  document.getElementById('yellow-light'),
  document.getElementById('green-light'),
]; // Don't forget the semicolon!

// Use keyword let to define a variable named current; set its value to zero (0)
let current = 0;

// Define traditional function named cycle()
// Function will reset all lights to their default state using the `.className` property

function cycle() {
  for (let i = 0; i < lights.length; i++) {
    lights[i].className = "light";
  } // End of FOR loop

  // Now turn on the current traffic light
  lights[current].className = "light on";

  // Move to next light, or back to first array element if we reach the last
  // element in the lights array

  current++;

  if (current === 3) {
    current = 0;
  }
} // End of cycle() function

// Now run the cycle() function every 2000 milliseconds (2 seconds)
// 1000 milliseconds = 1 second
setInterval(cycle, 2000);

// Call the cycle() function
cycle();



















