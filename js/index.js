
const array = ["cplusplus", "csharp", "react", "html", "css", "javascript"];

window.onload = () => {
  programmingIconsMove();
  bikeIconMove();
};

 const programmingIconsMove = () => {
  let icon;
  let x = 0; /*Cuando x = 0, el icono sube. cuando x = 1, el icono baja. */
  let index = 0;
  setInterval(() => {
    if (index == 6) {
      index = 0;
    }
    if (x == 0) {
      icon = document.getElementById(array[index]);
      icon.style.transform = "translateY(-8px)";
      x = 1;
    } else {
      icon.style.transform = "translateY(0px)";
      x = 0;
      index++;
    }
  }, 1000);
};

const bikeIconMove = () => {
  let bike = document.getElementById("bike");
  let bikeReverse = document.getElementById("bike-reverse");
  let x = 0;
  let move = 0;
  let flag = true;
  setInterval(() => {
    if (move == 136) {
      flag = false;
      bike.style.visibility = "hidden";
      bikeReverse.style.visibility = "visible";
    } else if (move == 0) {
      flag = true;
      bike.style.visibility = "visible";
      bikeReverse.style.visibility = "hidden";
    }
    if (flag) {
      move += 8;
      bike.style.transform = `translatex(${move}px)`;
    } else {
      move -= 8;
      bikeReverse.style.transform = `translatex(${move}px)`;
    }
  }, 300);
}; 