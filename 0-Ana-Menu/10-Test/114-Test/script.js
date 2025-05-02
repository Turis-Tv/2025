let adTimeout;

function hidePopupAd() {
  document.getElementById("popupAd").style.display = "none";
}

function openNewTab() {
  window.open("https://ouo.io/Xzv34W");
  setTimeout(() => {
    document.getElementById("popupLinkInput").style.display = "flex";
  }, 1000);
}

function submitLink() {
  const linkInput = document.getElementById("linkInput").value;
  if (linkInput === "1111") {
    hidePopupAd();
    document.getElementById("popupLinkInput").style.display = "none";
  } else {
    alert("الرابط غير صحيح. حاول مرة أخرى.");
  }
}

function changeVideo(url, name) {
  const iframe = document.getElementById("videoPlayer");
  iframe.src = url;
  iframe.style.display = "block";

  hidePopupAd();
  clearTimeout(adTimeout);
  adTimeout = setTimeout(() => {
    document.getElementById("popupAd").style.display = "flex";
  }, 30000);
}