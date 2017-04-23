$(init);

function init() {
  newsApi();
}

function newsApi() {
  $
  .get('https://newsapi.org/v1/articles?source=techcrunch&apiKey=e791d42519134d8ca50ff49ea0b3d33a')
  .done(data => {
    console.log(data);
    var articleArray = data.articles;
    articleArray.forEach(function(element) {
      console.log(element.author);
      console.log(element.description);
      console.log(element.publishedAt);
      console.log(element.title);
      console.log(element.url);
      console.log(element.urlToImage);
      // article = { author: element.author, description: element.description, publishedAt: element.publishedAt, title: element.title, url: element.url, image: element.urlToImage };
      $(`<div><h2>${element.title}</h2><p>${element.description}</p></div>`).appendTo('#news');
    });
  });
}

// news api key: e791d42519134d8ca50ff49ea0b3d33a
