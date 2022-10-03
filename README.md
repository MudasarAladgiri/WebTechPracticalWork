# WebTechPracticalWork
For practical work
# WebTechPracticalWork
For practical work
---manifest.json---
{
  "name": "A Clock",
  "version": "0.0.1",
  "manifest_version": 3,
  "action": {
    "default_popup": "index.html",
    "default_icon": "icons/t.png"
  },
  "icons": {
    "128": "icons/t.png"
  },
  "permissions": ["activeTab"]
}

--index.html--
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="clock.css" />
  </head>
  <body>
    <div class="clock">
      <div class="dot"></div>
      <div class="hour num1">1</div>
      <div class="hour num2">2</div>
      <div class="hour num3">3</div>
      <div class="hour num4">4</div>
      <div class="hour num5">5</div>
      <div class="hour num6">6</div>
      <div class="hour num7">7</div>
      <div class="hour num8">8</div>
      <div class="hour num9">9</div>
      <div class="hour num10">10</div>
      <div class="hour num11">11</div>
      <div class="hour num12">12</div>

      <div id="sec"></div>
      <div id="min"></div>
      <div id="hr"></div>
    </div>
    <script src="clock.js"></script>
  </body>
</html>

---style.css---
body {
  margin: 120px;
  background-image: linear-gradient(lightblue, lightgreen);
}
.clock {
  width: 500px;
  height: 500px;
  border: 10px solid lightpink;
  box-shadow: 0 0 0 3px lightpink;
  border: opacity 20%;
  border-radius: 10%;
  margin: 0 auto;
  position: relative;
  background-image: radial-gradient(lightblue, lightpink);
}
.dot {
  width: 20px;
  height: 20px;
  background-color: black;
  position: absolute;
  left: 240px;
  top: 240px;
  border-radius: 50%;
}
/* NUMBERS position */
.hour {
  font-size: 50px;
  position: absolute;
}
/*  */
.num2 {
  left: 420px;
  top: 105px;
}
.num3 {
  left: 450px;
  top: 220px;
}
.num4 {
  left: 420px;
  top: 330px;
}
/*  */
/*  */
.num10 {
  left: 30px;
  top: 110px;
}
.num9 {
  left: 20px;
  top: 220px;
}
.num8 {
  left: 50px;
  top: 330px;
}
/*  */
.num1 {
  left: 340px;
  top: 30px;
}
.num12 {
  left: 210px;
  top: 10px;
}
.num11 {
  left: 100px;
  top: 30px;
}
/*  */
.num5 {
  left: 340px;
  top: 410px;
}
.num6 {
  left: 230px;
  top: 440px;
}
.num7 {
  left: 130px;
  top: 410px;
}
/*  */
#sec {
  width: 1px;
  height: 200px;
  background-color: black;
  position: absolute;
  top: 50px;
  left: 247px;
  border-radius: 10px;
  transform-origin: 70% 100%;
}
#min {
  width: 4px;
  height: 150px;
  background-color: yellow;
  position: absolute;
  top: 100px;
  left: 247px;
  border-radius: 10px;
  transform-origin: 70% 100%;
}
#hr {
  width: 4px;
  height: 100px;
  background-color: black;
  position: absolute;
  top: 150px;
  left: 247px;
  border-radius: 10px;
  transform-origin: 70% 100%;
}

--script.js--
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


