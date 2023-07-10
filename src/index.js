import './styles/index.scss'

const closeWindowModal = document.createElement("div")
const textCloseWindowModal = document.createElement("span")
closeWindowModal.classList.add("windowClose")
textCloseWindowModal.textContent = "X"
closeWindowModal.appendChild(textCloseWindowModal)

function handleDOMContentLoaded() {
  const hero = document.querySelector(".hero")
  const modal = document.querySelector(".modalHide")
  const main = document.querySelector(".main")
  const footer = document.querySelector(".footer")
  const btnLogin = document.querySelector(".btnLogin")

  const loginContent = document.createElement("section")
  loginContent.classList.add("loginContent")

  const containerContextL = document.createElement("section")
  containerContextL.classList.add("containerContext")

  const formContentL = document.createElement("section")
  formContentL.classList.add("formContent")

  const loginForm = document.createElement("form")
  loginForm.classList.add("formData")

  const signUpContent = document.createElement("section")
  signUpContent.classList.add("signUpContent")

  const containerContextS = document.createElement("section")
  containerContextS.classList.add("containerContext")

  const formContentS = document.createElement("section")
  formContentS.classList.add("formContent")

  const signUpForm = document.createElement("form")
  signUpForm.classList.add("formData")

  document.removeEventListener("DOMContentLoaded", handleDOMContentLoaded);
}

document.addEventListener("DOMContentLoaded", handleDOMContentLoaded)