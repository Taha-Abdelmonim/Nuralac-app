let landTextHeader = document.querySelector(".text-global");
let landTextHeader2 = document.getElementById("text-global-2");
if (window.matchMedia("(min-width: 577px)").matches) {
  if (landTextHeader) {
    landTextHeader.innerHTML = `${landTextHeader.dataset.text}`;
  }
  if (landTextHeader2) {
    landTextHeader2.innerHTML = `${landTextHeader2.dataset.text}`;
  }
}
