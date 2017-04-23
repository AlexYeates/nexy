$(init);

function init() {
  newsApi();
}

function newsApi() {
  $
  .get('https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=e791d42519134d8ca50ff49ea0b3d33a')
  .done(data => {
    console.log(data);
    var articleArray = data.articles;
    articleArray.forEach(function(element) {
      console.log(element.title);
      console.log(element.description);
      console.log(element.author);
      console.log(element.publishedAt);
      console.log(element.url);
      console.log(element.urlToImage);
      $(`<div><img src="${element.urlToImage}"><h2>${element.title}</h2><p>${element.description}</p><p><a href="${element.url}">Read more...</a></p></div>`).appendTo('#news');
    });
  });
}

// news api key: e791d42519134d8ca50ff49ea0b3d33a
