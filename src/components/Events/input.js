export function login() {
  const login = document.querySelector(".singup-login.active .login"),
        sign = document.querySelector(".signup")

  if (!login.classList.contains("active")) {
    sign.classList.remove("active")
    login.classList.add("active")
  }
}

export function sign() {
  const login = document.querySelector(".singup-login.active .login"),
        sign = document.querySelector(".signup")

  console.log(login, sign)

  if (!sign.classList.contains("active")) {
    login.classList.remove("active")
    sign.classList.add("active")
  } 
}
