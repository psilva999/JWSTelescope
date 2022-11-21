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

  if (!sign.classList.contains("active")) {
    login.classList.remove("active")
    sign.classList.add("active")
  } 
}

export function handleLoginSign(e) {
  const signLogin = document.querySelector(".singup-login"),
        login = document.querySelector('.singup-login .login'),
        sign = document.querySelector('.singup-login .signup')

  if (signLogin.classList.contains('active'))
    removeLogin()

  else {
    signLogin.classList.add("active")
    signLogin.style.animation = 'opacity-one .1s linear forwards' 

    if (e.target.id === 'login-button' && !login.classList.contains("active")) {
      sign.classList.remove("active")
      login.classList.add('active')
    }

    else if (e.target.id === 'sign-button' && !sign.classList.contains("active")) { 
      login.classList.remove('active')
      sign.classList.add("active")
    }

  }
}

export function closeLoginFromOutside(e) {
  if (e.target.id === 'signup-login')
    removeLogin()
}

function removeLogin() {
  const signLogin = document.querySelector(".singup-login")

  signLogin.style.animation = 'opacity-zero .1s linear forwards'

  let tempo = 2,
      containerLogin = setInterval(countdown, 200)

  function countdown() {
    tempo--

    if (tempo === 0) {
      signLogin.classList.remove('active')
      clearInterval(containerLogin)
    }
  }
}

export function handlePassword() {
  const input = document.querySelector("#password"),
        eye = document.querySelector('.eye')

  if (input.type === "password") {
    input.type = "text";
    eye.classList.add("active")
  } 
  
  else {
    input.type = "password";
    eye.classList.remove('active')
  }
}

export function handleForm(e) {
  e.preventDefault()
}

export function handleInfografico(e) {
  const infografico = document.querySelector(".all-screen")

  if (!infografico.classList.contains("active")) {
    infografico.classList.add("active")
    infografico.style.animation = 'opacity-one .2s linear forwards'
  }

  else if (e.target.id === 'all-screen' || e.target.id === 'close-infos') {
    infografico.style.animation = 'opacity-zero .1s linear forwards'

    let tempo = 2,
        containerInfografico = setInterval(countdown, 200)

    function countdown() {
      tempo--

      if (tempo === 0) {
        infografico.classList.remove('active')
        clearInterval(containerInfografico)
      }
    }

  }
}

export function handleAllScreenProduct(e) {
  const allScreenProduct = document.querySelector(".all-screen-product"),
        allScreenImage = document.querySelectorAll('.all-screen-product article img'),

        arrayFullImages = [...allScreenImage],
        arrayProduct = [...document.querySelectorAll('.product img')]

  let arrayPosition = arrayProduct.indexOf(e.target)

  if (!allScreenProduct.classList.contains("active")) {
    allScreenImage.forEach(img => img.classList.remove("active"))
    arrayFullImages[arrayPosition].classList.add('active')

    allScreenProduct.classList.add("active")
    allScreenProduct.style.animation = 'opacity-one .2s linear forwards'
  }

  else if (e.target.id === 'all-screen-product' || e.target.id === 'close-product') {
    allScreenProduct.style.animation = 'opacity-zero .1s linear forwards'

    let tempo = 1,
        container = setInterval(countdown, 100)

    function countdown() {
      tempo--

      if (tempo === 0) {
        allScreenProduct.classList.remove('active')
        clearInterval(container)
      }
    }

  }
}

export function nextImageStore() {
  const allScreenImage = document.querySelectorAll('.all-screen-product article img'),
        arrayFullImages = [...allScreenImage],
        activeImage = document.querySelector('.all-screen-product article img.active')

  let arrayPosition = Number(arrayFullImages.indexOf(activeImage)),
      position = arrayPosition + 1

  activeImage.classList.remove('active')
  
  if (position === 4) 
    arrayFullImages[0].classList.add('active')

  else 
    arrayFullImages[position].classList.add('active')
}

export function prevImageStore() {
  const allScreenImage = document.querySelectorAll('.all-screen-product article img'),
        arrayFullImages = [...allScreenImage],
        activeImage = document.querySelector('.all-screen-product article img.active')

  let arrayPosition = Number(arrayFullImages.indexOf(activeImage)),
      position = arrayPosition - 1

  activeImage.classList.remove('active')
  
  if (position === -1) 
    arrayFullImages[3].classList.add('active')

  else 
    arrayFullImages[position].classList.add('active')
}

export function userRegex() {
  const user = document.querySelector('#username')

  if (user.value.length >= 1 && !user.classList.contains('valid')) {
    user.classList.remove('error')
    user.classList.add('valid')
  }

  else if (user.value.length <= 0 && !user.classList.contains('error')) {
    user.classList.add('error')
    user.classList.remove('valid')
  }

  loginController()
}

export function passwordRegex() {
  const password = document.querySelector('#password')

  if (password.value.length >= 1 && !password.classList.contains('valid')) {

    password.classList.remove('error')
    password.classList.add('valid')
  }

  else if (password.value.length <= 0 && !password.classList.contains('error')) {

    password.classList.remove('valid')
    password.classList.add('error')
  }

  loginController()
}

function loginController() {
  const user = document.querySelector('#username'),
        password = document.querySelector('#password'),
        login = document.querySelector('.login .more')

  if (user.classList.contains('valid') && password.classList.contains('valid'))
    login.disabled = false
  
  else 
    login.disabled = true
}

export function loginUser() {
  const user = document.querySelector('#username'),
        password = document.querySelector('#password'),

        label = document.querySelectorAll('.login label'),
        login = document.querySelector('.login .more')

  if (user.classList.contains('valid') && password.classList.contains('valid')) {
    label.forEach(e => e.style.display = 'none')

    login.innerHTML = 'CHECKED'
    login.disabled = true

    user.disabled = true
    password.disabled = true
  }
}

export function emailRegex() {
  const email = document.querySelector('#email'),
        conti = document.querySelector('.signup .more'),
        regex = /^([a-z]){1,}([a-z0-9._-]){1,}([@]){1}([a-z]){2,}([.]){1}([a-z]){2,}([.]?){1}([a-z]?){2,}$/i

  if (email.value.match(regex) && !email.classList.contains('valid')) {

    email.classList.remove('error') 
    email.classList.add('valid')
    conti.disabled = false
  }

  else if (regex.test(email.value) === false) {
    email.classList.remove('valid')
    conti.disabled = true

    if (!email.classList.contains('error'))
      email.classList.add('error')
  }
}

export function continueSign() {
  const email = document.querySelector('#email'),
        sign = document.querySelector('.signup .more')

  if (email.classList.contains('valid')) {
    sign.innerHTML = 'DONE'
    document.querySelector('.signup label').style.display = 'none'

    sign.disabled = true
    email.disabled = true
  }
}

export function handleName() {
  const name = document.querySelector('#name')

  if (name.value.length >= 1 && !name.classList.contains('valid')) {
    name.classList.remove('error')
    name.classList.add('valid')
  }

  else if (name.value.length <= 0 && !name.classList.contains('error')) {
    name.classList.add('error')
    name.classList.remove('valid')
  }

  newsletterController()
}

export function handleLastName() {
  const lastName = document.querySelector('#lastName')

  if (lastName.value.length >= 1 && !lastName.classList.contains('valid')) {
    lastName.classList.remove('error')
    lastName.classList.add('valid')
  }

  else if (lastName.value.length <= 0 && !lastName.classList.contains('error')) {
    lastName.classList.add('error')
    lastName.classList.remove('valid')
  }

  newsletterController()
}

export function emailNewsletter() {
  const email = document.querySelector('#nEmail'),
        regex = /^([a-z]){1,}([a-z0-9._-]){1,}([@]){1}([a-z]){2,}([.]){1}([a-z]){2,}([.]?){1}([a-z]?){2,}$/i

  if (email.value.match(regex) && !email.classList.contains('valid')) {

    email.classList.remove('error') 
    email.classList.add('valid')
  }

  else if (regex.test(email.value) === false) {
    email.classList.remove('valid')

    if (!email.classList.contains('error'))
      email.classList.add('error')
  }

  newsletterController()
}

export function newsletterController() {
  const name = document.querySelector('#name'),
        lastname = document.querySelector('#lastName'),

        nEmail = document.querySelector('#nEmail'),
        subscribe = document.querySelector('form .more'),

        checked1 = document.querySelector('#check-one'),
        checked2 = document.querySelector('#check-two')

  if (name.classList.contains('valid') && lastname.classList.contains('valid') && nEmail.classList.contains('valid') && checked1.checked && checked2.checked)
    subscribe.disabled = false
  
  else 
    subscribe.disabled = true
}

export function sendNews() {
  const name = document.querySelector('#name'),
        lastname = document.querySelector('#lastName'),
        label = document.querySelectorAll('.large-style label'),

        nEmail = document.querySelector('#nEmail'),
        subscribe = document.querySelector('form .more'),

        checked1 = document.querySelector('#check-one'),
        checked2 = document.querySelector('#check-two')

  if (name.classList.contains('valid') && lastname.classList.contains('valid') && nEmail.classList.contains('valid') && checked1.checked && checked2.checked) {
    name.disabled = true
    lastname.disabled = true
    nEmail.disabled = true

    checked1.disabled = true
    checked2.disabled = true
    subscribe.disabled = true

    label.forEach(e => e.style.display = 'none')
    name.style.opacity = '.6'

    lastname.style.opacity = '.6'
    nEmail.style.opacity = '.6'
    document.querySelector('.checkbox').style.opacity = '.6'
    subscribe.style.opacity = '.6'
  }
}
