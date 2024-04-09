// Handles loading the events for <model-viewer>'s slotted progress bar
const onProgress = (event) => {
  const progressBar = event.target.querySelector(".progress-bar");
  const updatingBar = event.target.querySelector(".update-bar");
  updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
  if (event.detail.totalProgress === 1) {
    progressBar.classList.add("hide");
  } else {
    progressBar.classList.remove("hide");
    // if (event.detail.totalProgress === 0) {
    //   event.target.querySelector(".center-pre-prompt").classList.add("hide");
    // }
  }
};
document.querySelector("model-viewer").addEventListener("progress", onProgress);

var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
var model_viewer_id = document.getElementById("model_viewer_element");

span.onclick = function () {
  modal.style.display = "none";
  model_viewer_id.classList.remove("blur_filter");
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    model_viewer_id.classList.remove("blur_filter");
  }
};

function openModal() {
  modal.style.display = "block";
}

var last_element = document.getElementById("location2");
var current_element;

function visibilityToggle(val) {
  last_element.style.display = "none";
  current_element = document.getElementById("location" + val.split("-")[1]);
  if (last_element == current_element) {
    current_element.style.display = "none";
  } else {
    current_element.style.display = "block";
  }
  last_element = current_element;
}
