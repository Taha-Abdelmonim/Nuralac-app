let fullScreen = document.getElementById("full-screen");
let getFullScreenElement = () => {
  return (
    document.fullscreenElement ||
    document.mozFullScreenElement ||
    document.webkitFullscreenElement ||
    document.msFullscreenElement
  );
};
let toggleFullScreen = () => {
  if (getFullScreenElement()) {
    document.exitFullscreen();
    document.getElementById("Main_Container").classList.remove("full-screen");
    document.querySelector(".links").classList.remove("full-screen");
    localStorage.setItem("full-screen", 0);
  } else {
    document.documentElement.requestFullscreen().catch(console.log);
    // localStorage.setItem("full-screen", 1);
    document.getElementById("Main_Container").classList.add("full-screen");
    document.querySelector(".links").classList.add("full-screen");
  }
};

fullScreen.addEventListener("click", () => {
  toggleFullScreen();
});

// window.addEventListener("load", () => {
//   if (localStorage.getItem("full-screen") === "1") {
//   } else {
//   }
// }); w 121 x h 121 x 13 y 13

document.addEventListener("dblclick", () => {
  toggleFullScreen();
});
// document.addEventListener("fullscreenchange", () => {
//   console.log("Full Screen Change");
// });
let count = 0;
function handleTouchStart(e) {
  count++;
  if (count === 2) {
    toggleFullScreen();
    count = 0;
  } else {
    setTimeout(() => {
      count = 0;
    }, 150);
  }
}
document.addEventListener("touchstart", handleTouchStart, false);
document.addEventListener("touchmove", () => {
  count = 0;
});
