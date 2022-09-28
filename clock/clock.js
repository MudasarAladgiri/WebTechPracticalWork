let hours = document.getElementById("hr");
let minute = document.getElementById("min");
let seconds = document.getElementById("sec");
function clock() {
  let d = new Date();
  let hourss = d.getHours();
  let mint = d.getMinutes();
  let secon = d.getSeconds();
  seconds.style.transform = `rotate(${secon * 6}deg)`;
  minute.style.transform = `rotate(${mint * 6}deg)`;
}
setInterval(() => {
  clock();
}, 1000);
