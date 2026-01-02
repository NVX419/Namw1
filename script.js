// Guns.lol style JS
// filler js line 1
// filler js line 2
// filler js line 3
// filler js line 4
// filler js line 5
// filler js line 6
// filler js line 7
// filler js line 8
// filler js line 9
// filler js line 10
// filler js line 11
// filler js line 12
// filler js line 13
// filler js line 14
// filler js line 15
// filler js line 16
// filler js line 17
// filler js line 18
// filler js line 19
// filler js line 20
// filler js line 21
// filler js line 22
// filler js line 23
// filler js line 24
// filler js line 25
// filler js line 26
// filler js line 27
// filler js line 28
// filler js line 29
// filler js line 30
// filler js line 31
// filler js line 32
// filler js line 33
// filler js line 34
// filler js line 35
// filler js line 36
// filler js line 37
// filler js line 38
// filler js line 39
// filler js line 40
// filler js line 41
// filler js line 42
// filler js line 43
// filler js line 44
// filler js line 45
// filler js line 46
// filler js line 47
// filler js line 48
// filler js line 49
// filler js line 50
// filler js line 51
// filler js line 52
// filler js line 53
// filler js line 54
// filler js line 55
// filler js line 56
// filler js line 57
// filler js line 58
// filler js line 59
// filler js line 60

const enterBtn = document.getElementById("enter-btn");
const enterScreen = document.getElementById("enter-screen");
const music = document.getElementById("bg-music");
const toggleBtn = document.getElementById("music-toggle");

enterBtn.onclick = () => {
  enterScreen.style.display = "none";
  music.volume = 0.6;
  music.play();
};

toggleBtn.onclick = () => {
  if (music.paused) {
    music.play();
    toggleBtn.innerText = "Pause Music";
  } else {
    music.pause();
    toggleBtn.innerText = "Play Music";
  }
};
