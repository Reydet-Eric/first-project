//structure de mon objet
const week={name: [1,2,3],
notion:[["Apprendre à apprendre\nC'est quoi être développeur?"],["Base: la console sous linux","GIT /  GITHUB","une IDE : VSCode"]],
ressenti:["Après avoir attendu plusieurs mois, j'y suis enfin !!!! \n","Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed molestiae alias ut id assumenda quas iusto laborum eveniet harum laudantium, eius consectetur, ducimus, nulla accusantium ipsam hic eaque architecto autem."]}
const numberWeek=week.name.length
//console.log(`${week.name} ${week.notion} ${week.ressenti}`)
//structure du menu
const menu={name:"menu1",
lien:href="#week1",
actif:false}
// affichage menu


// affichage des bulles de contenu

const rightSection=document.querySelector('.right');


function affich(){
    console.log("affichage des cards");
for(let i=0;i<week.notion.length;i++){
// //affichage bloc content
 newContentSection=document.createElement('section');
newContentSection.classList.add=('content');
rightSection.appendChild(newContentSection);

const contentSection=document.querySelector('.content');
newSectionVide=document.createElement('section');
newSectionVide.classList.add=('card');
contentSection.appendChild(newSectionVide);

//     //  affichage titre semaine
//console.log(`affichage de la semaine ${numberWeek}`);

newContentH2=document.createElement('h2');
newContentH2.id=`week i+1`;
newSectionVide.appendChild(newContentH2);
newContentH2.innerHTML=`week ${i+1}`;
//     //  affichage bulle notion
const divNotion=document.querySelector('.notion');
divDeNotion=document.createElement('div');
divDeNotion.classList.add=('notion');
newContentH2.appendChild(divNotion);
divNotion.innerHTML=`${week.notion[i]}`;


//     //  affichage bulle ressenti

//     //  affichage des bulles du menu


 }
    
 }
affich();
 //création du formulaire d'ajout de semaine
function addWeek(){


 console.log(`week ${numberWeek}`)
 
// //valider le formulaire en stockant les infos
const buttonValid=document.querySelector('.submitForm');
buttonValid.addEventListener('click',function valid(){
 console.log("bouton submit cliqué\nEtat bdd avant stockage:\n"+ week)

week.name[numberWeek]=numberWeek;

const addNotion1=document.querySelector('#notion1');
const addNotion2=document.querySelector('#notion2');
const addNotion3=document.querySelector('#notion3');
const addRessenti=document.querySelector('#addRessenti');
const Notion1=addNotion1.value;
const Notion2=addNotion2.value;
const Notion3=addNotion3.value;
const Ressenti=addRessenti.value;
week.name[numberWeek]=numberWeek;
week.notion[numberWeek]=[Notion1,Notion2,Notion3];
week.ressenti[numberWeek]=Ressenti;

console.log("Etat bdd apres stockage:\n"+ week)

// // suppression du formulaire
 })


}
// // appeler la fonction nouvelle semaine
// const clickMenuAdd=document.querySelector('#add');

// clickMenuAdd.addEventListener('click',function event () {
//     console.log("ouverture formulaire d'ajout de semaine");
     addWeek();
// });
