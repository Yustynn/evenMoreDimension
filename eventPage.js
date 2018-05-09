chrome.runtime.onMessage.addListener(({url, curr_path, title}) => {
  // const filename = `${curr_path}/${title}`;
  // filenam
  // console.log(filename)
  title = title.substring(1);
  if (!title) {
    return true;
  }
  //curr_path = curr_path.replace(/[\\\:\*\]\?\"\<\>\|]/g, '');
  // title = title.split(' ').join('\ ');
  // curr_path = curr_path.split(' ').join('\ ');
  const filename = `${curr_path}/${title}`;
  console.log(filename);
  chrome.downloads.download({ url, filename });
})

// chrome.downloads.onDeterminingFilename.addListener((item, suggest) => {
//   console.log(item);
//   suggest({filename: 'edim/' + item.filename});
// });
