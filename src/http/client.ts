let currentUrl : string = "http://localhost:3000";

const $btnChange = document.getElementById("btn_change"); 
const $btnDetailJSON = document.getElementById("btn_detail_json");
const $img : HTMLElement = document.getElementById("img_chipmunk")!;
const $btnJSON = document.getElementById("btn_json")
let $imgChipmunk = $img as HTMLImageElement;


$btnChange?.addEventListener("click", () => {

  fetch(currentUrl+"/paka", {
    method: 'GET',
  })
  .then(() => {$imgChipmunk.src = "http://localhost:3000/paka"})
  .catch(error => console.error('Error:', error));
});

$btnDetailJSON?.addEventListener("click", () => {

  fetch(currentUrl+"/ChampionDetailJson", {
    method: 'GET'
  })
  .then(response => response.json())
  .then(data => console.dir(data));
})

$btnJSON?.addEventListener("click", () => {
  fetch(currentUrl+"/ChampionJson", {
    method: 'GET'
  })
  .then(response => response.json())
  .then(data => console.dir(data));
})