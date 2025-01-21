console.log("loaded yes");

const sangliste = document.querySelector("#sangliste");
const sangtitler = ["cant buy me love", "mere regn"];

//let alleSange = ""; // det er vigtig at sætte variablen lig en tom streng, da min variabel ellers ender med at starte med undefined

let alleSangeSamlet = sangtitler
  .map((titel) => {
    return ` <li>${titel}</li>`;
  })
  .join();

console.log("sangene er: ", alleSangeSamlet);

sangliste.innerHTML = alleSangeSamlet;
