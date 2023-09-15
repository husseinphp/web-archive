document.addEventListener("DOMContentLoaded", function () {
  const urlInput = document.getElementById("urlInput");
  const insertButton = document.getElementById("insertButton");

  // Get the current active tab and set its URL in the input field when the popup is opened.
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const currentTab = tabs[0];
    if (currentTab) {
      urlInput.value = currentTab.url;
    }
  });

  insertButton.addEventListener("click", function () {
    // Use the URL from the input field as needed.
    const urlToInsert = urlInput.value.trim();

    if (urlToInsert) {
      const newURL = `https://web.archive.org/cdx/search/cdx?url=${urlToInsert}&matchType=domain&fl=original&collapse=urlkey&output=text&filter=statuscode:200`;
      
      // Open the modified URL in a new tab.
      chrome.tabs.create({ url: newURL });
    }
  });
});
