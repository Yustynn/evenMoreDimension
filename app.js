// Google Analytics
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-84709766-1']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = 'https://ssl.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

// Start the realness

const DL_ICON_SRC = 'https://images.designtrends.com/wp-content/uploads/2015/12/02045154/Download-Icons38.png'
const EDIM_URL = 'https://edimension.sutd.edu.sg';

let links = $('#content_listContainer li a');

console.log('before', links);

links = links.filter(function() {
  const imgSrc = $(this).closest('li[id *=contentListItem]').children('img').attr('src');

  console.log($(this).closest('li[id *=contentListItem]'))

  return imgSrc.includes('document') || imgSrc.includes('file');
});

console.log('after', links);

links.each(function(i) {
  const url = EDIM_URL + $(this).attr('href');
  const dlBtn = $(`<a href=${url} class='yp-dl' download><img src=${DL_ICON_SRC}></img></a>`);

  dlBtn.click(() => {
     _gaq.push(['_trackEvent', e.target.id, 'clicked']);
  })

  $(this).prepend(dlBtn);
})
