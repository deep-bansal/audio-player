// var myAudio = new Audio("./media/audio.mp3");
var myAudio = document.getElementById("my-audio");
var back = document.getElementById("back");
var pause = document.getElementById("pause");
var forward = document.getElementById("forward");
var bookmark = document.getElementById("bookmark");
var play = document.getElementById("play");
var sleek = document.getElementById("sleek");

function pauseAudio() {
  if (myAudio.paused) {
    pause.classList.remove("fa-play-circle");
    pause.classList.add("fa-pause-circle");
    myAudio.play();
  } else {
    pause.classList.remove("fa-pause-circle");
    pause.classList.add("fa-play-circle");
    myAudio.pause();
  }
}

myAudio.onended = function () {
  alert("Audio ended");
  pause.classList.remove("fa-pause-circle");
  pause.classList.add("fa-play-circle");
};

function forwardAudio() {
  if (myAudio.currentTime < myAudio.duration) {
    myAudio.currentTime += 10;
    myAudio.play();
  }
}

function rewindAudio() {
  if (myAudio.currentTime > 0) {
    myAudio.currentTime -= 5;
    myAudio.play();
  }
}

function bookTime() {
  localStorage.setItem("Current Duration", myAudio.currentTime);
}

function playSaved() {
  var time = localStorage.getItem("Current Duration");
  console.log(time);
  myAudio.currentTime = time;
  myAudio.play();
  pause.classList.remove("fa-play-circle");
  pause.classList.add("fa-pause-circle");
}
