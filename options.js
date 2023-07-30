chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({ title: "My Poll", options: [] }, function() {
    console.log("Default poll data initialized.");
  });
});

document.addEventListener("DOMContentLoaded", function() {
  var titleInput = document.getElementById("title");
  var optionsInput = document.getElementById("options");
  var saveButton = document.getElementById("save");

  chrome.storage.sync.get(["title", "options"], function(data) {
    titleInput.value = data.title;
    optionsInput.value = data.options.join("\n");
  });

  saveButton.addEventListener("click", function() {
    var title = titleInput.value;
    var options = optionsInput.value.split("\n").filter(function(option) {
      return option.trim() !== "";
    });

    if (title.trim() === "" || options.length === 0) {
      alert("Please enter a title and at least one option.");
      return;
    }

    chrome.storage.sync.set({ title: title, options: options }, function() {
      alert("Poll data saved successfully.");
    });
  });
});