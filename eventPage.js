chrome.runtime.onMessage.addListener(({url, curr_path, title}) => {
  // k. terminate sendMessage if title is empty ie. tabAction links
  if (!title) { return true;}
  
  title = (title[0] == '\xa0') ? title.substring(1) : title; // k. check for &nbsp
  const filename = `${curr_path}${title}`;

  chrome.downloads.download({ url, filename });
})
