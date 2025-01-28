console.log("script loaded2...");

const sangliste = document.querySelector("#sangliste");
const sangtitler = ["cant buy me love", "mere regn"];

let alleSangeSamlet = sangtitler.map((titel) => `<li>${titel}</li>`).join("");

console.log("her er sangene:", alleSangeSamlet);

sangliste.innerHTML = alleSangeSamlet;
