/*
 ** CONSTANTS
 */

const DL_ICON_SRC = 'https://images.designtrends.com/wp-content/uploads/2015/12/02045154/Download-Icons38.png'
const EDIM_URL = 'https://edimension.sutd.edu.sg';


const TYPE_DOWNLOADABILITY = {
  document: true,
  file: true,
  folder: false,
  link: false
};

/*
 ** HELPER FUNCTIONS
 */

const getDownloadable = function(els) {
  return $(els).filter(function() {
    return TYPE_DOWNLOADABILITY[getType(this)];
  });
}

const getFolders = function(els) {
  return $(els).filter(function() {
    return getType(this) === 'folder';
  });
}

// types: document, file, folder, link
const getType = (el) => {
  el = $(el);
  const imgSrc = el.closest('li[id *=contentListItem]').children('img').attr('src');

  if (!imgSrc) return null; // (in)sanity check

  // extract type from imgSrc
  return imgSrc.replace(/\/.+\//, '').replace(/_on.+/, '');
}

const getUrl = (el) => EDIM_URL + $(el).attr('href');

const getAllLinks = (el = $('body')) => {
    return $(el).find('#content_listContainer li a');
}

const allLinks = getAllLinks();

const downloadableLinks = getDownloadable(allLinks);
const folderLinks = getFolders(allLinks);

/*
 ** START (FURREAL)
 */

// add download icons for files/documents
downloadableLinks.each(function() {
  const url = getUrl(this);
  const dlBtn = $(`<a href=${url} class='yp-dl' download><img src=${DL_ICON_SRC}></img></a>`);

  $(this).prepend(dlBtn);
})

// @TODO: recursive
const downloadFolder = (url) => {
  $.get(url).then( (data) => {
    const allLinks = getAllLinks(data);
    const dlLinks = getDownloadable(allLinks);

    dlLinks.each(function() {
      const url = getUrl(this);
      chrome.runtime.sendMessage(url);
    });

    // #recursion
    const folderLinks = getFolders(allLinks);
    folderLinks.each(function() {
      const url = getUrl(this);
      downloadFolder(url);
    });
  });
}


// add download icons for folders
folderLinks.each(function() {
  const url = getUrl(this);

  const dlBtn = $(`<a href=${url} class='yp-dl' download><img src=${DL_ICON_SRC}></img></a>`);
  dlBtn.click((e) => {
    e.preventDefault();
    downloadFolder(url);
    console.log(url);
  });

  $(this).prepend(dlBtn);
})
