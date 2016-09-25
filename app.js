const DL_ICON_SRC = 'https://images.designtrends.com/wp-content/uploads/2015/12/02045154/Download-Icons38.png'
const EDIM_URL = 'https://edimension.sutd.edu.sg';

const TYPE_DOWNLOADABILITY = {
  document: true,
  file: true,
  folder: false,
  link: false
};

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

const getAllLinks = (el = $('body')) => {
    return $(el).find('#content_listContainer li a');
}

// retrieve links and filter for downloadable ones only
const allLinks = getAllLinks()

const downloadableLinks = getDownloadable(allLinks);
const folderLinks = getFolders(allLinks);
console.log(folderLinks);

downloadableLinks.each(function(i) {
  const link = $(this)
  const url = EDIM_URL + link.attr('href');
  const dlBtn = $(`<a href=${url} class='yp-dl' download><img src=${DL_ICON_SRC}></img></a>`);

  link.prepend(dlBtn);
})
