<h1>NEXY</h1>

<img src="./src/images/nexy.png"></img>

<h2>Introduction</h2>

This is my <strong>second project</strong> for the <strong>Web Development Immersive</strong> course at <strong>General Assembly</strong> in London. <strong>NEXY</strong> is a simple news aggregator which allows logged in users to <em>highlight</em> their favourite stories.

<img src="./src/images/midway.png">

You can see a <strong>working version</strong> of the game <a href="https://lit-tor-31501.herokuapp.com/">here</a>.

You can see the <strong>code</strong> for NEXY <a href="https://github.com/AlexYeates/nexy">here</a>.


<h2>How NEXY Works</h2>

NEXY uses the News API to pull in data from a number of news sources. A function then loops through the data to find the relevant information (most notably the image) to append to an HTML page, using jQuery.

```
function newsApi(source) {
  $
  .get(`https://newsapi.org/v1/articles?source=${source}&sortBy=top&apiKey=e791d42519134d8ca50ff49ea0b3d33a`)
  .done(data => {
    var articleArray = data.articles;
    articleArray.forEach(function(element) {
      $(`<div class="grid-item">
      <img src="${element.urlToImage}">
        <div class="hover">
          <br >
          <h2>${element.title}</h2>
          <hr >
          <p>${element.description}</p>
          <hr >
          <button class="highlight btn btn-outline-primary">Highlight</button>
          <button class="btn btn-outline-primary"><a href="${element.url}">Read</a></button>
        </div>
      </div>`)
      .appendTo('#news');
    });
  });
}
```

When the user hovers over a story, more infomation about the article is displayed with the option to highlight. If clicked, the highlight button will 
take the necessary data to add to the user's highlight page. 


<h2>Project Brief</h2>

The project brief was to build an authenticated Express.js app using the skills we had been taught in the two weeks after our first project ended.


<h2>How It Was Built</h2>

- HTML
- CSS
- JavaScript
- EJS
- Node.js
- Express.js
- News API
- Bootstrap 4


<h2>Future Improvements</h2>

- The ability to load news articles in a pop-up
- For the highlight feature to include a timeline 
- To include a landing page for a register or login prompt
- The ability to filter news sources


<h2>Credits</h2>

- News API
- GA Instructors Alex Chin and Rane Gowan.
- GA Teaching Assistants Nat Huitson and Ed Compton. 