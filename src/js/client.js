$(init);

const newsSources = ['bbc-news', 'sky-news'];

function init() {
  newsApi();
}

// news api key: e791d42519134d8ca50ff49ea0b3d33a

newsSources.forEach(function(source) {
  newsApi(source);
});

function newsApi(source) {
  $
  .get(`https://newsapi.org/v1/articles?source=${source}&sortBy=top&apiKey=e791d42519134d8ca50ff49ea0b3d33a`)
  .done(data => {
    var articleArray = data.articles;
    articleArray.forEach(function(element) {
      $(`<div><img src="${element.urlToImage}"><h2>${element.title}</h2><p>${element.description}</p><p><a href="${element.url}">Read more...</a></p></div>`).appendTo('#news');
    });
  });
}

// $
// .get('https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=e791d42519134d8ca50ff49ea0b3d33a')
// .done(data => {
//   var articleArray = data.articles;
//   articleArray.forEach(function(element) {
//     $(`<div><img src="${element.urlToImage}"><h2>${element.title}</h2><p>${element.description}</p><p><a href="${element.url}">Read more...</a></p></div>`).appendTo('#news');
//   });
//   // instead of appending, maybe push to array first?
//   // would have to look at the url bit to see if its from the politics section, before pushing to array, so use a boolean
// });
// then have another api request here and repeat?
// then at the end do a math.random to print to the screen?



// note from nat
