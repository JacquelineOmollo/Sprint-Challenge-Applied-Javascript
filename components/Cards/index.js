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

const container = document.querySelector('.card-container');

axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
  .then(data => {
    console.log('Success!', data);
    // for (topic in data.data.articles) {
    //   data.data.articles.forEach(data => {
    //     const cardData = promgramArticles(data);
    //     container.appendChild(cardData)
    //   });
  }
  })

  .catch(error => {
    console.log('Error: ', error);
  })



function promgramArticles(data) {

  const card = document.createElement('div');
  const headline = document.createElement('div');
  const author = document.createElement('div');
  const img_container = document.createElement('div');
  const img = document.createElement('img');

  card.appendChild(img_container);
  card.appendChild(author);
  img_container.appendChild(img);
  author.appendChild(img_container);
  card.appendChild(headline);

  card.classList.add('card');
  img_container.classList.add('img_container');
  author.classList.add('authorName');
  headline.classList.add('headline');


  headline.textContent = articles;

  return card;
}