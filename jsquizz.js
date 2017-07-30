function Question(question,a,b,c,reponse) {

  this.question = question;

  this.a = a;

  this.b = b;

  this.c = c;

  this.reponse = reponse;

}



var capitale = new Question("Quelle est la capitale de France ?", 'Paris', 'Lyon', 'Marseille', "A");

var cheval = new Question("De quelle couleur est le cheval blanc d'Henri IV ?", "Marron", "Noir", "Blanc", "C" );

var francefoot = new Question("Combien de fois la France a t'elle gagnée la Coupe du Monde ?", "0", "1", "2", "B" );

var poisson = new Question("4 poissons sont dans un bocal. Deux se noient. Combien en reste t'il ?", "0", "2", "4", "C" );


var tab = [capitale, cheval, francefoot, poisson];

var score = 0;

var j = 0;

var tabb = [];



console.log("Bienvenue dans le JS Quizz !" + "\n" + "Ecrivez 'exit' pour quitter le jeu à tout moment !");

alert("Bienvenue dans le JS Quizz !");

alert("Ecrivez 'exit' pour quitter le jeu à tout moment !");



while(j<4){

  

var i = Math.floor(Math.random() * tab.length );

var reponseuser = prompt(tab[i].question + "\n" + "A) " + tab[i].a + "  B) " + tab[i].b + "  C) " + tab[i].c ).toUpperCase( + tabb.push(tab[i]));



reponseuser;



if (reponseuser === tab[i].reponse ) {

  score++;

  alert("Bien joué !");

  console.log("Bien joué !");

  j++;

}



else if (reponseuser == "EXIT") {

  break;}



else {

  score--;

  alert("Perdu !");

  console.log("Perdu !");

  j++;

}



if (score < 0){

  score = 0;

}

for(var k = 0; k < tabb.length; k++){

  if(tabb[k] === tab[i]) {

    tab.splice(i, 1);

  }

}



alert("Votre score est de " + score);

  console.log("Votre score est de " + score);

}