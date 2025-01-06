console.log("script loaded....");

const sangliste = document.querySelector("#sangliste");

function hentData() {
  console.log("hentData");
  fetch("sange.json")
    .then((res) => res.json())
    .then(visSange);
}

function visSange(data) {
  console.log(data);
  const sange = data.sange; //fordi mit array af sange ligger under sange i objektet
  sange.forEach((sang) => {
    sangliste.innerHTML += `
        
        <article class="sang_card">
           
            <h3>${sang.titel}</h3>
            <p>Komponist: ${sang.komponist} </p>
            <p>${sang.tempo} bpm</p>
            <a href="single.html?id=${sang.id}">Læs mere    </a>
         </article>
      
        `;
  });
}

hentData();
