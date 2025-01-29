console.log("script loaded...");

const sangliste = document.querySelector("#sangliste");
const sangtitler = ["cant buy me love", "mere regn"];

let alleSangeSamlet = sangtitler.map((title) => `<li> ${title}</li>`).join("");

sangliste.innerHTML = alleSangeSamlet;

console.log("Nyt array", alleSangeSamlet);
