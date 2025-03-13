/*
    Every single line of code is pure JavaScript.
    I've provided comments for some important parts of the code
    
    Happy Programming...
*/

// utlity
function qs(elem) {
  return document.querySelector(elem);
}
function qsa(elem) {
  return document.querySelectorAll(elem);
}

// globals
var activeCon = 0,
  totalCons = 0;

// elements
const v_cons = qsa(".video-con"),
  a_cons = qsa(".active-con"),
  v_count = qs("#video-count"),
  info_btns = qsa("#lower-info div"),
  drop_icon = qs("#drop-icon"),
  video_list = qs("#v-list"),
  display = qs("#display-frame");

// activate container
function activate(con) {
  deactivateAll();
  indexAll();
  countVideos(con.querySelector(".index").innerHTML);
  con.classList.add("active-con");
  con.querySelector(".index").innerHTML = "►";
}
// deactivate all container
function deactivateAll() {
  v_cons.forEach((container) => {
    container.classList.remove("active-con");
  });
}
// index containers
function indexAll() {
  var i = 1;
  v_cons.forEach((container) => {
    container.querySelector(".index").innerHTML = i;
    i++;
  });
}
// update video count
function countVideos(active) {
  v_count.innerHTML = active + " / " + v_cons.length;
}
// icon activate
function toggle_icon(btn) {
  if (btn.classList.contains("icon-active")) {
    btn.classList.remove("icon-active");
  } else btn.classList.add("icon-active");
}
// toggle video list
function toggle_list() {
  if (video_list.classList.contains("li-collapsed")) {
    drop_icon.style.transform = "rotate(0deg)";
    video_list.classList.remove("li-collapsed");
  } else {
    drop_icon.style.transform = "rotate(180deg)";
    video_list.classList.add("li-collapsed");
  }
}
function loadVideo(url) {
  display.setAttribute("src", url);
}

//******************
// Main Function heres
//******************
window.addEventListener("load", function () {
  // starting calls
  indexAll(); // container indexes
  countVideos(1);
  activate(v_cons[0]);
  loadVideo(v_cons[0].getAttribute("video"));

  // Event handeling goes here
  // on each video container click
  v_cons.forEach((container) => {
    container.addEventListener("click", () => {
      activate(container);
      loadVideo(container.getAttribute("video"));
    });
  });
  // on each button click
  info_btns.forEach((button) => {
    button.addEventListener("click", () => {
      toggle_icon(button);
    });
  });
  // drop icon click
  drop_icon.addEventListener("click", () => {
    toggle_list();
  });
});