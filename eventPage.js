chrome.runtime.onMessage.addListener(({url, curr_path, title}) => {
  // const filename = `${curr_path}/${title}`;
  // filenam
  // console.log(filename)
  console.log(title);
  title = (title[0] == '\xa0') ? title.substring(1) : title;
  // title = title ? title.substring(1) : title;
  if (!title) {
    return true;
  }
  //curr_path = curr_path.replace(/[\\\:\*\]\?\"\<\>\|]/g, '');
  // title = title.split(' ').join('\ ');
  // curr_path = curr_path.split(' ').join('\ ');
  const filename = `${curr_path}${title}`;
  //console.log(filename);
  chrome.downloads.download({ url, filename });
})

// chrome.downloads.onDeterminingFilename.addListener((item, suggest) => {
//   console.log(item);
//   suggest({filename: 'edim/' + item.filename});
// });
