//로그인 처리
document.querySelector("#login-form").addEventListener("submit", function (e) {
  if (this.children[3].value === "abc@naver.com") {
    if (this.children[5].value === "abc") {
      this.setAttribute("action", "./index.html");
      
    } else {
      e.preventDefault();
      alert("비밀번호: abc입니다");
    }
  } else {
    e.preventDefault();
    alert("아이디: abc@naver.com");
  }
});
