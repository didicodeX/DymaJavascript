import "../assets/styles/styles.scss"
import "./form.scss";

const form = document.querySelector("form");


form.addEventListener("submit",e => {
  e.preventDefault();
  const formData = new FormData(form);
  const entries = formData.entries()
  const json = JSON.stringify(Object.fromEntries(entries))
  console.log(json);
})