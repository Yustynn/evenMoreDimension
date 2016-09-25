const DL_ICON_SRC = 'https://images.designtrends.com/wp-content/uploads/2015/12/02045154/Download-Icons38.png'
const EDIM_URL = 'https://edimension.sutd.edu.sg';

const TYPE_DOWNLOADABILITY = {
  document: true,
  file: true,
  folder: false,
  link: false
};

// types: document, file, folder, link
const getType = (el) => {
  el = $(el);
  const imgSrc = el.closest('li[id *=contentListItem]').children('img').attr('src');

  if (!imgSrc) return null;

  // extract type from imgSrc
  return imgSrc.replace(/\/.+\//, '').replace(/_on.+/, '');
}

const links = $('#content_listContainer li a').filter(function() {
  return TYPE_DOWNLOADABILITY[getType(this)];
});

links.each(function(i) {
  const link = $(this)
  const url = EDIM_URL + link.attr('href');
  const dlBtn = $(`<a href=${url} class='yp-dl' download><img src=${DL_ICON_SRC}></img></a>`);

  link.prepend(dlBtn);
})
