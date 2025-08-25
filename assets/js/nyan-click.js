// --- 1. NYAN CAT CLICK EFFECT ---
document.addEventListener('click', function (e) {
  // Create the image element
  let nyanCat = document.createElement('img');
  
  // Use a better, transparent GIF
  nyanCat.src = '/assets/nyan.gif';
  
  // Style the cat
  nyanCat.style.position = 'absolute';
  nyanCat.style.left = (e.pageX - 80) + 'px'; // Center the cat on the cursor
  nyanCat.style.top = (e.pageY - 40) + 'px'; // Center the cat on the cursor
  nyanCat.style.width = '160px'; // Slightly larger for better quality
  nyanCat.style.pointerEvents = 'none'; // So you can click through the cat
  nyanCat.style.zIndex = '9999';
  nyanCat.style.transition = 'opacity 1s linear, transform 1s linear'; // Fade and fly out

  // Add the cat to the page
  document.body.appendChild(nyanCat);

  // Make it fade away and fly up, then remove it
  setTimeout(function () {
    nyanCat.style.opacity = '0';
    nyanCat.style.transform = 'translateY(-50px)'; // Fly upwards
  }, 500); // Start fading after 0.5s

  setTimeout(function () {
    if (nyanCat.parentNode) {
      nyanCat.parentNode.removeChild(nyanCat);
    }
  }, 1500); // Remove from page after 1.5s
});


// --- 2. RAINBOW CURSOR TRAIL ---
const rainbowColors = [
  '#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#9400D3'
];
let colorIndex = 0;

document.addEventListener('mousemove', function(e) {
  // Create a trail element (a small div)
  let trail = document.createElement('div');

  // Style the trail element
  trail.style.position = 'absolute';
  trail.style.left = e.pageX + 'px';
  trail.style.top = e.pageY + 'px';
  trail.style.width = '10px';
  trail.style.height = '10px';
  trail.style.borderRadius = '50%'; // Make it a circle
  trail.style.pointerEvents = 'none';
  trail.style.zIndex = '9998'; // Just below the nyan cat
  trail.style.backgroundColor = rainbowColors[colorIndex];
  trail.style.transition = 'opacity 0.5s linear, transform 0.5s linear';
  
  // Add it to the page
  document.body.appendChild(trail);

  // Cycle through the rainbow colors
  colorIndex = (colorIndex + 1) % rainbowColors.length;

  // Make the trail element fade and shrink, then remove it
  setTimeout(function() {
    trail.style.opacity = '0';
    trail.style.transform = 'scale(0)';
  }, 100);

  setTimeout(function() {
    if (trail.parentNode) {
      trail.parentNode.removeChild(trail);
    }
  }, 600); // Remove after the transition is complete
});