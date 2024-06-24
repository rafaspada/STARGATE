const allStars = document.querySelectorAll(".star");
let current_rating = document.querySelector(".current-rating");

allStars.forEach((star, i) => {
  star.onclick = function star() {
    let current_star_level = i + 1;
    current_rating.innerText = `${current_star_level} de 5`;
    let rating = current_star_level;
    console.log(rating);

    allStars.forEach((star, j) => {
      if (current_star_level >= j + 1) {
        star.innerHTML =
          "<i class='fa-solid fa-star' style='color: #ff9800;'></i>";
      } else {
        star.innerHTML =
          "<i class='fa-regular fa-star' style='color: #ff9800;'></i>";
      }
    });
    localStorage.setItem("value", rating);
  };
});

function submitForm() {
  let name = document.form.name.value;
  let message = document.form.message.value;

  let tr = document.createElement("tr");

  let td1 = tr.appendChild(document.createElement("td"));
  let td2 = tr.appendChild(document.createElement("td"));
  let td3 = tr.appendChild(document.createElement("td"));

  td1.innerHTML = name;
  td2.innerHTML = message;
  td3.innerHTML = localStorage.getItem("value");

  console.log(allStars);

  document.getElementById("table").appendChild(tr);
}
