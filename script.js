// Copyright 2024 Sameer Tuteja
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

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
