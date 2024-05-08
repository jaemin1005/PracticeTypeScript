let currentUrl : string = "http://localhost:3000";

const $button = document.getElementById("btn_change"); 
const $img : HTMLElement = document.getElementById("img_chipmunk")!;
let $imgChipmunk = $img as HTMLImageElement;


$button?.addEventListener("click", () => {

  fetch(currentUrl+"/paka", {
    method: 'GET',
  })
  .then(() => {$imgChipmunk.src = "http://localhost:3000/paka"})
  .catch(error => console.error('Error:', error));
});