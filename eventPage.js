chrome.runtime.onMessage.addListener((url) => {
  chrome.downloads.download({ url });
})
