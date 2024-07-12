function rel() {
  const id = Math.floor((Math.random() * 6 + 1) * 10000);
  return `https://whichfaceisreal.blob.core.windows.net/public/realimages/${id}.jpeg`;
}
const fake = "https://thispersondoesnotexist.com/";

const imgContainer = document.getElementById("images");
const resConrainer = document.getElementById("result");
const steConteiner = document.getElementById("streak");

function draw() {
  resConrainer.innerHTML ="";
  imgContainer.innerHTML ="";
  const resBtn = document.createElement("button");
  resBtn.innerHTML = "bAyE";
  resBtn.onclick = draw;
  const rnd = Math.random() > 0.5;
  const arr = [rnd, !rnd];

  for (const isReal of arr) {
    const img = document.createElement("img");
    img.src = isReal ? rel() : fake;
    img.onclick = function () {
      if (isReal) {
        resConrainer.innerHTML = "corect";
      } else {
        resConrainer.innerHTML = "incorect";
      }
      resConrainer.appendChild(resBtn);
    };
    imgContainer.appendChild(img);
  }
}
draw();
