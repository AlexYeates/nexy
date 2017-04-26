$(init);

const newsSources = ['bbc-news', 'the-guardian-uk', 'associated-press', 'breitbart-news', 'cnn', 'the-economist', 'the-telegraph', 'reuters'];

function init() {
  $('div').on('click', '.highlight', function() {
    const data = {
      title: $(this).parent().find('h2').text(),
      description: $(this).parent().find('p').text(),
      url: $(this).parent().find('a').attr('href'),
      image: $(this).parent().find('img').attr('src')
    };
    $.post('http://localhost:8000/highlights', data)
    .done(data => {
      console.log(data);
    })
    .fail(data => {
      console.log(data);
    });
  });
  newsSources.forEach(function(source) {
    newsApi(source);
  });
}

function newsApi(source) {
  $
  .get(`https://newsapi.org/v1/articles?source=${source}&sortBy=top&apiKey=e791d42519134d8ca50ff49ea0b3d33a`)
  .done(data => {
    var articleArray = data.articles;
    articleArray.forEach(function(element) {
      $(`<div class="grid-item">
      <img src="${element.urlToImage}">
      <button class="highlight btn btn-primary">Highlight</button>
      <h2>${element.title}</h2>
      <p>${element.description}</p>
      <p><a href="${element.url}">Read more...</a></p>
      </div>`)
      .appendTo('#news');
    });
  });
}
