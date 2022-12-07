//structure de mon objet
const week={name: [1,2,3],
notion:[["Apprendre à apprendre","C'est quoi être développeur?"],["Base: la console sous linux","GIT /  GITHUB","une IDE : VSCode"],["HTML / CSS"]],
ressenti:["Après avoir attendu plusieurs mois, j'y suis enfin !!!! \n","La console, ca me fait pas peur. Git/Github, le principe me parait très clair et très sain comme système de centralisation et de suivi","On est passé un peu vite dessus à mon goût. Je ressens un gros manque de pratique pour être à l'aise avec le CSS"]}

let numberWeek=week.name.length

// affichage des bulles de contenu

function affich(){
    
for(let i=0;i<week.notion.length;i++){

// test: si la bulle existe, on la recrée pas:

if(!document.querySelector(`#week${i}`)){

 //affichage bloc content
const rightSection=document.querySelector('.right'); 
newContentSection=document.createElement('section');
newContentSection.classList.add('content');
// newContentSection.classList.add('content2');
rightSection.appendChild(newContentSection);


let contentSection=document.querySelectorAll(".content");
newSectionCard = document.createElement('section');
newSectionCard.classList.add('card');
// newSectionCard.classList.add('card2');
contentSection[i+2].appendChild(newSectionCard);
    //  affichage titre semaine
const sectionCard=document.querySelector('.card');
newContentH2=document.createElement('h2');
newContentH2.setAttribute("id",`week${i}`);
newSectionCard.appendChild(newContentH2);
newContentH2.innerHTML=`week ${i+1}:`;

    //  affichage bulle notion
const divNotion=document.querySelector('.card');
        //si plusieurs notions: faire plusieurs bulles
        for(let a=0;a<week.notion[i].length;a++){
divDeNotion=document.createElement('div');
divDeNotion.classList.add('notion');
newSectionCard.appendChild(divDeNotion);
divDeNotion.innerHTML=`${week.notion[i][a]}`;}
    //  affichage bulle ressenti
divDeRessenti=document.createElement('div');
divDeRessenti.classList.add('ressenti');
newSectionCard.appendChild(divDeRessenti);
divDeRessenti.innerHTML=`${week.ressenti[i]}`;
     //  affichage des bulles du menu
const navMenu=document.querySelector('nav');
newHref=document.createElement('a');
newHref.classList.add('button-circle');
navMenu.appendChild(newHref);
newHref.innerHTML=`week${i+1}`;
newHref.setAttribute("href",`#week${i}`);
 }}
}
affich();

 //création du formulaire d'ajout de semaine
function addWeek(){

  //valider le formulaire en stockant les infos
const buttonValid=document.querySelector('.submitForm');
buttonValid.addEventListener('click',function valid(){

week.name[numberWeek]=numberWeek;

const addNotion1=document.querySelector('#notion1');
const addNotion2=document.querySelector('#notion2');
const addNotion3=document.querySelector('#notion3');
const addRessenti=document.querySelector('#addRessenti');
let Notion1=addNotion1.value;
let Notion2=addNotion2.value;
let Notion3=addNotion3.value;
let Ressenti=addRessenti.value;
week.name[numberWeek]=numberWeek;
week.notion[numberWeek]=[Notion1,Notion2,Notion3];
week.ressenti[numberWeek]=Ressenti;

// suppression des champs du formulaire
addNotion1.value="";
addNotion2.value="";
addNotion3.value="";
addRessenti.value="";
numberWeek++
affich();
})
}
     addWeek();

// menu hamburger
const menuClick=document.querySelector('.burger')
const navMenu=document.querySelector('nav')

menuClick.addEventListener('click', () =>{
navMenu.classList.toggle('hidden')

})

//apparition bulle Add a week

const choixMenu=document.querySelector('#add');
const cacheAdd=document.querySelector('#addForm')
choixMenu.addEventListener('click', () =>{
    cacheAdd.classList.toggle('hidden')

})