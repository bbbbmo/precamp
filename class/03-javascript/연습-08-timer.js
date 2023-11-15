// let time = 10;
undefined;
setInterval(function () {
  if (time >= 0) {
    console.log(time);
    time = time - 1;
  }
}, 1000);
// 4436
// VM2115:3 10
// VM2115:3 9
// VM2115:3 8
// VM2115:3 7
// VM2115:3 6
// VM2115:3 5
// VM2115:3 4
// VM2115:3 3
// VM2115:3 2
// VM2115:3 1
// VM2115:3 0

let time = 180;
undefined;
setInterval(function () {
  if (time >= 0) {
    let min = Math.floor(time / 60);
    let sec = String(time % 60).padStart(2, "0");
    console.log(min + " : " + sec);
    time = time - 1;
  }
}, 1000);
// 10994
// VM2673:5 3 : 00
// VM2673:5 2 : 59
// VM2673:5 2 : 58
// VM2673:5 2 : 57
// VM2673:5 2 : 56
