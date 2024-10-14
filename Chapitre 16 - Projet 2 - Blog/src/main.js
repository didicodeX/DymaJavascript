import "./assets/styles/styles.scss";
import "./index.scss"

const articleContainerElement = document.querySelector(".articles-container");
const createArticle = (articles) => {
const articlesDOM = articles.map(article => {
  const articleDOM = document.createElement('div');
  articleDOM.classList.add("article");
  articleDOM.innerHTML = `
  <img src="${article.img}" alt="profile">
  <h2>titre de l'article</h2>
  <p class="article-author">${article.author} - ${article.categorie}</p>
  <p class="article-content">
  ${article.article}
  </p>
  <div class="article-actions">
    <button class="btn btn-primary">Modifier</button>
    <button class="btn btn-secondary" data-id="${article._id}">Supprimer</button>
  </div>
  `;
  return articleDOM;  
});
articleContainerElement.innerHTML = '';
articleContainerElement.append(...articlesDOM);

}
const fetchArticle = async () => {
  try{
    const response = await fetch("https://restapi.fr/api/article");
    const articles = await response.json();
    console.log(articles);
    createArticle(articles);
  }catch(e){
    console.error("e : ",e)
  }
}
fetchArticle();
