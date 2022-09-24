// date de l'evenement souhaité
const dateDeFin = "24 Nov 2022";

const joursEL = document.getElementById("jours");
const heuresEL = document.getElementById("heures");
const minutesEL = document.getElementById("minutes");
const secondesEL = document.getElementById("secondes");

//fonction qui compare les deux dates et divise le temps en ms pour obtenir les valeurs J H M S
function countdown() {
  const dateDeFinForma = new Date(dateDeFin);
  const dateActuelle = new Date();

  let totalSecondes = (dateDeFinForma - dateActuelle) / 1000;

  let jours = Math.floor(totalSecondes / 3600 / 24);
  let heures = Math.floor(totalSecondes / 3600) % 24;
  let minutes = Math.floor(totalSecondes / 60) % 60;
  let secondes = Math.floor(totalSecondes) % 60;
  console.log(jours, heures, minutes, secondes);

  joursEL.innerHTML = jours;
  heuresEL.innerHTML = heures;
  minutesEL.innerHTML = minutes;
  secondesEL.innerHTML = secondes;
}

countdown();
setInterval(countdown, 1000);
