// Handles loading the events for <model-viewer>'s slotted progress bar
const onProgress = (event) => {
  const progressBar = event.target.querySelector(".progress-bar");
  const updatingBar = event.target.querySelector(".update-bar");
  updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
  if (event.detail.totalProgress === 1) {
    progressBar.classList.add("hide");
    event.target.removeEventListener("progress", onProgress);
  } else {
    progressBar.classList.remove("hide");
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
