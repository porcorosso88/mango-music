//1분 미리 듣기 기능
const parkIntro = new Audio("./audio/wildflower-intro.mp3");
const davichiIntro = new Audio("./audio/davichi-intro.mp3");
const yoonIntro = new Audio("./audio/yoon-intro.mp3");

document
  .querySelector("#박효신")
  .firstElementChild.children[1].addEventListener("click", function () {
    this.style.visibility = "hidden";
    this.nextElementSibling.style.visibility = "visible";
    parkIntro.play();
  });

document
  .querySelector("#박효신")
  .firstElementChild.children[2].addEventListener("click", function () {
    this.style.visibility = "hidden";
    this.previousElementSibling.style.visibility = "visible";
    parkIntro.pause(); // 일시 정지
    parkIntro.currentTime = 0; // 재생 위치를 처음으로 설정
  });

document
  .querySelector("#다비치")
  .children[1].children[1].addEventListener("click", function () {
    this.style.visibility = "hidden";
    this.nextElementSibling.style.visibility = "visible";
    davichiIntro.play();
  });

document
  .querySelector("#다비치")
  .children[1].children[2].addEventListener("click", function () {
    this.style.visibility = "hidden";
    this.previousElementSibling.style.visibility = "visible";
    davichiIntro.pause(); // 일시 정지
    davichiIntro.currentTime = 0; // 재생 위치를 처음으로 설정
  });

document
  .querySelector("#윤종신")
  .firstElementChild.children[1].addEventListener("click", function () {
    this.style.visibility = "hidden";
    this.nextElementSibling.style.visibility = "visible";
    yoonIntro.play();
  });

document
  .querySelector("#윤종신")
  .firstElementChild.children[2].addEventListener("click", function () {
    this.style.visibility = "hidden";
    this.previousElementSibling.style.visibility = "visible";
    yoonIntro.pause(); // 일시 정지
    yoonIntro.currentTime = 0; // 재생 위치를 처음으로 설정
  });

document.querySelector(".search-singer").addEventListener("input", function () {
  document
    .querySelector(".searched-singer")
    .setAttribute("action", "#" + this.value);
  console.log(this.value);
});

function getParameterByName(id) {
  id = id.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + id + "=([^&#]*)"),
    results = regex.exec(location.search);
  return results === null
    ? ""
    : decodeURIComponent(results[1].replace(/\+/g, " "));
}

const user = getParameterByName("id").substring(0, 3);
console.log(user);

if (user !== null && user === "abc") {
  const navbarNav = document.querySelector(".navbar-nav");
  navbarNav.removeChild(navbarNav.lastElementChild);
  navbarNav.removeChild(navbarNav.lastElementChild);

  let liTag1 = document.createElement("li");
  liTag1.setAttribute("class", "nav-item");
  liTag1.textContent = user + "님 환영합니다";

  let liTag2 = document.createElement("li");
  let logoutBtn = document.createElement("button");
  logoutBtn.setAttribute("class", "btn btn-primary btn-logout");
  logoutBtn.textContent = "로그아웃";
  liTag2.setAttribute("class", "nav-link");
  liTag2.appendChild(logoutBtn);
  navbarNav.appendChild(liTag1);
  navbarNav.appendChild(liTag2);
}

document.querySelector(".btn-logout").addEventListener("click", function () {
  const navbarNav = document.querySelector(".navbar-nav");

  let aTag1 = document.createElement("a");
  aTag1.setAttribute("class", "nav-link");
  aTag1.setAttribute("href", "#sign-up-area");
  aTag1.textContent = "가입";

  let liTag1 = document.createElement("li");
  liTag1.setAttribute("class", "nav-item");
  liTag1.appendChild(aTag1);

  let aTag2 = document.createElement("a");
  aTag2.setAttribute("class", "nav-link");
  aTag2.setAttribute("href", "./login.html");
  aTag2.textContent = "로그인";

  let liTag2 = document.createElement("li");
  liTag2.setAttribute("class", "nav-item");
  liTag2.appendChild(aTag2);

  navbarNav.removeChild(navbarNav.lastElementChild);
  navbarNav.removeChild(navbarNav.lastElementChild);
  navbarNav.appendChild(liTag1);
  navbarNav.appendChild(liTag2);
});
