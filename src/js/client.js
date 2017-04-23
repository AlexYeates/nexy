$(init);

function init() {
  newsApi();
}

function newsApi() {
  $
  .get('https://newsapi.org/v1/articles?source=techcrunch&apiKey=e791d42519134d8ca50ff49ea0b3d33a')
  .done(data => {
    console.log(data);
  });
}

// news api key: e791d42519134d8ca50ff49ea0b3d33a
