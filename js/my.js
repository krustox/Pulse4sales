
// A $( document ).ready() block.
$( document ).ready(function() {
    const obj = document.getElementById("65");
    animateValue(obj, 0, 65, 3000);
    const obj1 = document.getElementById("56");
    animateValue(obj1, 0, 56, 3000);
    const obj2 = document.getElementById("150");
    animateValue(obj2, 0, 150, 3000);
});

function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }