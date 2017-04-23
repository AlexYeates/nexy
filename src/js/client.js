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

    });
  });
}

// news api key: e791d42519134d8ca50ff49ea0b3d33a
