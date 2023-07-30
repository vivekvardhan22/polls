chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.type === "createPoll") {
    // Handle create poll request
    createPoll(request.title, request.options);
  } else if (request.type === "submitResponse") {
    // Handle submit response request
    submitResponse(request.pollId, request.optionId);
  } else if (request.type === "getPollResults") {
    // Handle get poll results request
    getPollResults(request.pollId);
  }
});

function createPoll(title, options) {
  // Perform validation on title and options
  if (!title || !options || options.length < 2) {
    console.error("Invalid poll data");
    return;
  }

  // Generate unique poll ID
  var pollId = generatePollId();

  // Store poll data locally or on a remote server
  // ...

  // Send response with the generated poll ID
  sendResponse({ pollId: pollId });
}

function submitResponse(pollId, optionId) {
  // Perform validation on poll ID and option ID
  if (!pollId || !optionId) {
    console.error("Invalid response data");
    return;
  }

  // Store response data locally or on a remote server
  // ...

  // Send response indicating successful submission
  sendResponse({ success: true });
}

function getPollResults(pollId) {
  // Perform validation on poll ID
  if (!pollId) {
    console.error("Invalid poll ID");
    return;
  }

  // Retrieve poll results from local storage or remote server
  // ...

  // Send response with the poll results
  sendResponse({ results: pollResults });
}

function generatePollId() {
  // Generate a unique poll ID using a suitable algorithm
  // ...
}