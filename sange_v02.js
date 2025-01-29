console.log("script loaded.. sange_v02");

const sangliste = document.querySelector("#sangliste");

function hentData() {
  console.log("hentData");
  fetch("sange.json")
    .then((res) => res.json())
    .then(visSange);
}

function visSange(data) {
  console.log("visSange");

  const alleSange = data.sange;
  let arrayMedSange = alleSange.map(
    (sang) =>
      `<article class="sang_card">
<h3>${sang.titel}</h3>
<p>Komponist: ${sang.komponist}</p>
<p>Tempo: ${sang.tempo}</p>
</article>`
  );
  console.log("arrayMedSange:", arrayMedSange);

  sangliste.innerHTML = arrayMedSange.join("");
}

hentData();
