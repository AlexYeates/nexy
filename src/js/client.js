$(init);

const newsSources = ['bbc-news', 'the-guardian-uk', 'associated-press', 'breitbart-news', 'cnn', 'the-economist', 'the-telegraph', 'reuters'];
let newsId = 0;

function init() {
  newsApi();
  $('button').on('click', 'button', function() {
    console.log(this);
    const data = {
      title: $(this).parent().find('h2').text(),
      description: $(this).parent().find('p').text(),
      url: $(this).parent().find('a').attr('href'),
      image: $(this).parent().find('img').attr('src')
    };
    $.post('http://localhost:8000/highlight', data);
  });
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
      $(`<div class="grid-item" id="${newsId++}">
          <img src="${element.urlToImage}">
          <button class="btn btn-primary">Highlight</button>
          <h2>${element.title}</h2>
          <p>${element.description}</p>
          <p><a href="${element.url}">Read more...</a></p>
        </div>`)
      .appendTo('#news');
    });
  });
}
