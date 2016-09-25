chrome.runtime.onMessage.addListener((url) => {
  console.log('url', url)
  chrome.downloads.download({ url });
})
