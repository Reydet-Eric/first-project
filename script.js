

    let week={name: [1,2,3],
    notion:[["Apprendre à apprendre","C'est quoi être développeur?"],["Base: la console sous linux","GIT /  GITHUB","une IDE : VSCode"],["HTML / CSS"]],
    ressenti:["Après avoir attendu plusieurs mois, j'y suis enfin !!!! \n","La console, ca me fait pas peur. Git/Github, le principe me parait très clair et très sain comme système de centralisation et de suivi","On est passé un peu vite dessus à mon goût. Je ressens un gros manque de pratique pour être à l'aise avec le CSS"]
};


week = JSON.parse(localStorage.getItem("bdd")); // lecture dans localstorage
// console.log(weekJson);

console.log(week)



let numberWeek=week.name.length

// affichage des bulles de contenu

function affich(){
    let weekJson = JSON.parse(localStorage.getItem("bdd")); // lecture dans localstorage
for(let i=0;i<week.notion.length;i++){

// test: si la bulle existe, on la recrée pas:

if(!document.querySelector(`#week${i}`)){

 //affichage bloc content
let newContentSection;
const rightSection=document.querySelector('.right'); 
newContentSection = document.createElement('section');
newContentSection.classList.add('content');
rightSection.appendChild(newContentSection);


const contentSection=document.querySelectorAll(".content");
let newSectionCard;
newSectionCard = document.createElement('section');
newSectionCard.classList.add('card');
contentSection[i+2].appendChild(newSectionCard);
    //  affichage titre semaine
const sectionCard=document.querySelector('.card');
let newContentH2
newContentH2=document.createElement('h2');
newContentH2.setAttribute("id",`week${i}`);
newSectionCard.appendChild(newContentH2);
newContentH2.innerHTML=`week ${i+1}:`;

    //  affichage bulle notion
const divNotion=document.querySelector('.card');
        //si plusieurs notions: faire plusieurs bulles
        for(let a=0;a<week.notion[i].length;a++){
            let divDeNotion
divDeNotion=document.createElement('div');
divDeNotion.classList.add('notion');
newSectionCard.appendChild(divDeNotion);
divDeNotion.innerHTML=`${week.notion[i][a]}`;}
    //  affichage bulle ressenti
    let divDeRessenti
divDeRessenti=document.createElement('div');
divDeRessenti.classList.add('ressenti');
newSectionCard.appendChild(divDeRessenti);
divDeRessenti.innerHTML=`${week.ressenti[i]}`;
     //  affichage des bulles du menu
const navMenu=document.querySelector('nav');
let newHref
newHref=document.createElement('a');
newHref.classList.add('button-circle');
navMenu.appendChild(newHref);
newHref.innerHTML=`week${i+1}`;
newHref.setAttribute("href",`#week${i}`);
 }}
}
affich();

let notion1;
let notion2;
let notion3;
let ressenti;
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
notion1=addNotion1.value;
notion2=addNotion2.value;
notion3=addNotion3.value;
ressenti=addRessenti.value;
week.name[numberWeek]=numberWeek;
week.notion[numberWeek]=[notion1,notion2,notion3];
week.ressenti[numberWeek]=ressenti;


console.log("stockage dans localstorage");
localStorage.setItem("bdd", JSON.stringify(week)); // ecriture dans localstorage

// let weekJson = JSON.parse(localStorage.getItem("bdd")); // lecture dans localstorage
console.log(JSON.parse(localStorage.getItem("bdd")));
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





