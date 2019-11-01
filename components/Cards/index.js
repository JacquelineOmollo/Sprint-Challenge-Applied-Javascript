// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
// const container = document.querySelector(".card-container");

axios
  .get(`https://lambda-times-backend.herokuapp.com/articles`)
  .then(response => {
    //   const articles = data.data.articles;

    //   const arrayArt = [];
    //   arrayArt.push(
    //     articles.javascript,
    //     articles.bootstrap,
    //     articles.node,
    //     articles.jquery,
    //     articles.technology
    //   );

    //   const getArticles = [];
    //   arrayArt.forEach(titles =>
    //     titles.forEach(article => {
    //       getArticles.push(article);
    //     })
    //   );

    //   class Articles {
    //     constructor(article) {
    //       this.author = article.author;
    //       this.headline = article.headline;
    //       this.authorPhoto = article.authorPhoto;
    //     }
    //   }
    //   const changeArticles = allArticles.forEach(
    //     article => new Articles(article)
    //   );
    // })

    response.data.articles.bootstrap.forEach(e => {
      document
        .querySelector(".cards-container")
        .appendChild(programArticles(e));
    });
    response.data.articles.javascript.forEach(e => {
      document
        .querySelector(".cards-container")
        .appendChild(programArticles(e));
    });
    response.data.articles.jquery.forEach(e => {
      document
        .querySelector(".cards-container")
        .appendChild(programArticles(e));
    });
    response.data.articles.node.forEach(e => {
      document
        .querySelector(".cards-container")
        .appendChild(programArticles(e));
    });
    response.data.articles.technology.forEach(e => {
      document
        .querySelector(".cards-container")
        .appendChild(programArticles(e));
    });
  })

  .catch(error => {
    console.log("Error", error);
  });

const container = document.querySelector(".card-container");
function programArticles(theCards) {
  const card = document.createElement("div");
  const headline = document.createElement("div");
  const author = document.createElement("div");
  const img_container = document.createElement("div");
  const img = document.createElement("img");
  const span = document.createElement("span");

  card.classList.add("card");
  img_container.classList.add("img_container");
  author.classList.add("author");
  headline.classList.add("headline");

  author.textContent = theCards.author;
  headline.textContent = theCards.headline;
  img.src = theCards.authorPhoto;

  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(img_container);
  author.appendChild(span);
  // headline.appendChild(author);
  img_container.appendChild(img);
  // container.appendChild(card);
  // cards.appendChild(card);

  return card;
}
