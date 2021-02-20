
const form = document.querySelector(".top-banner form");
 
form.addEventListener("submit", e => {
  e.preventDefault();
  const inputVal = input.value;
});

const apiKey ="06b9d7db0be1d26a0451b984e403fc37";
const inputVal= input.value;

const url =`https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

fetch(url)
.then(response => response.json())
.then(data => {

})
.catch(() => {
    msg.textContent = "let this be a city";
});