let chuck = document.querySelector(".card-title");
let para = document.querySelector(".card-text");
let btn = document
  .querySelector(".btn-primary")
  .addEventListener("click", generate);
function generate() {
  fetch(" https://api.chucknorris.io/jokes/random")
    .then((res) => res.json())
    .then((data) => (para.textContent = data.value));
  chuck.innerHTML = ` <img
                src="chu.png"
                width="150px"
                height="150px"
                alt="..."
                class="img-thumbnail"
              />`;
}
