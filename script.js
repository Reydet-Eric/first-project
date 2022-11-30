//structure de mon objet
const week={name: ["week1"],
notion:[["notion 1","img"]],
ressenti:["blabla"]}


/*structure du menu
const menu={name:"menu1",
lien:href="#week1",
actif:"oui ou non"}
*/

//création du formulaire d'ajout de semaine
function addWeek(){
console.log("création du formulaire")

//variables nécessaires
const newDivCard=document.createElement('div');
const classRight=document.querySelector('.right');
//afficher le bloc content
console.log('create bloc-content');
newDivCard.classList.add('content');
classRight.appendChild(newDivCard);
//afficher le titre
    //afficher "week"+1
const numberWeek=week.name.length
console.log(`week ${numberWeek}`);
const newSection=document.createElement('section');
const newH2=document.createElement('h2');

newDivCard.appendChild(newSection);
newH2.classList.add(`#week${numberWeek}`);
newSection.appendChild(newH2);
newH2.innerHTML=`week ${numberWeek}:`;
//afficher le bloc notion
const formSection=document.createElement('fieldset');
newSection.appendChild(formSection);
    
const formNotion=document.createElement('input');
formSection.appendChild(formNotion);

formSection.HTMLFormElement='formNotion';
formSection.innerHTML=`<br>Quelles sont les notions vues?<br>`;
formSection.appendChild(formNotion);
formNotion.style.name="textarea";
formNotion.style.height="200px";
formNotion.style.width="600px";  
formSection.appendChild(formNotion)    ; 
//afficher le bloc ressenti
const formRessenti=document.createElement('formNotion');
newH2.HTMLFormElement='formRessenti';
formRessenti.innerHTML=`<br>Quel est le ressenti sur cette semaine:<br>`;
formSection.appendChild(formRessenti);
    // saisie du ressenti
const textAreaRessenti=document.createElement('input');
textAreaRessenti.type="textarea";
textAreaRessenti.style.height="200px";
textAreaRessenti.style.width="600px";
formSection.appendChild(textAreaRessenti);
// bouton valider
const buttonValid=document.createElement('input');
buttonValid.setAttribute('type', 'submit');
formSection.appendChild(buttonValid);

//valider le formulaire en stockant les infos
buttonValid.addEventListener('click',function valid(){
console.log(`bouton submit cliqué\nEtat bdd avant stockage:\n $week`)


})

// ajout d'une bulle dans le menu 
}
// appeler la fonction nouvelle semaine
const clickMenuAdd=document.querySelector('#add');

clickMenuAdd.addEventListener('click',function event () {
    console.log("ouverture formulaire d'ajout de semaine");
     addWeek();
});
