/** @format */

let button = document.getElementsByTagName("button")[0];
let TodoConteraire = document.getElementById("TodoConteraire");
let input = document.getElementsByTagName("input")[0];

button.addEventListener("click", () => {
  //**************on verifie si le champs n'est pas vide******************
  if (input.value != "") {
    let paragraphe = document.createElement("p");
    paragraphe.innerText = input.value;
    paragraphe.title = "Cliquez pour retire de la liste";
    paragraphe.classList.add("paragraphe");
    TodoConteraire.appendChild(paragraphe);

    //*********nouvel classe au sirvol de la souris ************************

    paragraphe.addEventListener("mouseover", () => {
      paragraphe.classList.add("paragrapheHover");
    });
    //*****on retire cette classe à la sortie de la soris ******************
    paragraphe.addEventListener("mouseout", () => {
      paragraphe.classList.remove("paragrapheHover");
    });
    //************supression de l'élément lors du clic *********************
    paragraphe.addEventListener("click", () => {
      paragraphe.parentNode.removeChild(paragraphe);
    });
  }
  input.value = "";
});
