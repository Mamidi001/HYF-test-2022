let points = new Array(100);
for (let i = 0; i < 100; i++) {
  points[i] = i + 1;
}
for (let i = 0; i < points.length; i++) {
  console.log(points[i]);
}
//divisible by num
const num = 15;
if (num % 5 === true) {
  console.log("it is divisible by 5");
}
if (num % 3 === true) {
  console.log("it is divisible by 3");
}
if (num % 3 && num % 5) {
  console.log("jackpot");
} else {
  console.log("failed in both");
}
//random img
document.getElementById("btn").onclick = showImg;

function showImg() {
  let images = [
    {
      link: "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
      width: "240",
      height: "160",
    },
    {
      link: "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg",
      width: "320",
      height: "195",
    },
    {
      link: "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg",
      width: "500",
      height: "343",
    },
  ];

  let random = Math.floor(Math.random() * images.length);

  let image = document.createElement("img");
  image.src = images[random].link;
  image.width = images[random].width;
  image.height = images[random].height;

  let elImgs = document.getElementsByTagName("img");

  if (elImgs.length > 0) {
    document.body.replaceChild(image, elImgs[0]);
  } else {
    document.body.appendChild(image);
  }
}
//fetch
fetch("https://reqres.in/api/users")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    const h1 = document.getElementById("heading");
    h1.innerHTML = data[1].first_name;
    document.body.appendChild(h1);
  });
