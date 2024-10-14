import "../assets/styles/styles.scss";
import "./form.scss";

const form = document.querySelector("form");
const errorElement = document.querySelector("#errors")
let errors = [];

form.addEventListener("submit",async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const entries = formData.entries();
  const article = Object.fromEntries(entries);
  console.log(article);
  
  if (formIsValid(article)) {
    try{

      const json = JSON.stringify(article);
      const res = await fetch("https://restapi.fr/api/article",{
        method:"POST",
        body:json,
        headers: {
          "Content-Type":"application/json"
        }
      }); 
      const body = await res.json();
      console.log(body);
      
    }
    catch(e){
      console.error("e : ",e)
    }
  }
});

const formIsValid = (article) => {
  if(!article.author || !article.categorie || !article.article){
    errors.push("Vous devez renseigner tous les champs")
  }else{
    errors = [];
  }
  if(errors.length){
    let errorHtmL = "";
    errors.forEach((e => {
      errorHtmL += `<li>${e}</li>`;
    }))
    errorElement.innerHTML = errorHtmL;
    return false;
  }else{
    errorElement.innerHTML = '';
    return true
  }
};
console.log(errorElement);
