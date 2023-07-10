import './styles/index.scss'
import { store, changeValue } from './store/display'

const { getState, subscribe } = store

subscribe((state) => (stateDisplay = state.toggle))

let stateDisplay = getState().toggle

const closeWindowModal = document.createElement("div")
const textCloseWindowModal = document.createElement("span")
closeWindowModal.classList.add("windowClose")
textCloseWindowModal.textContent = "X"
closeWindowModal.appendChild(textCloseWindowModal)

const containerContextLL =
  `
    <h3>Welcome back!</h3>
    <p>Kindly fill in your login details to proceed</p>
  `;

const contentLoginForm =
  `
  <label for="email">
    <input type="email" placeholder="Email" name="email" required />
  </label>
  <label for="passwordL">
   <input type="password" placeholder="Password" id="passwordL" name="passwordL" required />
  </label>
  <a href="#">
   <span>i forgot my password?</span>
  </a>
  <button type="submit">LOGIN</button>
  <span>Don’t have an account yet? <b class="changePageLogin">Sign Up</b></span>
`

const containerContextSS =
  `
    <h3>Sign Up</h3>
    <p>There’s no charge upon registration</p>
  `;

const contentSignUpForm =
  `
  <label for="fullName">
      <input type="text" placeholder="Full Name" name="fullName" required />
    </label>
    <label for="email">
      <input type="email" placeholder="Email" name="email" required />
    </label>
    <label for="passwordS">
      <input type="password" placeholder="Password" id="passwordS" name="passwordS" required />
   </label>
   <label for="confirmPassword">
     <input type="password" placeholder="Confirm Password" name="confirmPassword" required />
   </label>
    <a href="#">
      <span>i forgot my password?</span>
    </a>
    <button type="submit">SIGN UP</button>
    <span>Don’t have an account yet? <b class="changePageSignUp">Login</b></span>
  `

function handleDOMContentLoaded() {
  const hero = document.querySelector(".hero")
  const modal = document.querySelector(".modalHide")
  const main = document.querySelector(".main")
  const footer = document.querySelector(".footer")
  const btnLogin = document.querySelector(".btnLogin")

  const permission = (accept) => {
    modal.innerHTML = ""
    if (accept) return modal.appendChild(signUpContent);
    return modal.appendChild(loginContent);
  }

  const loginContent = document.createElement("section")
  loginContent.classList.add("loginContent")

  const containerContextL = document.createElement("section")
  containerContextL.classList.add("containerContext")

  const formContentL = document.createElement("section")
  formContentL.classList.add("formContent")

  const loginForm = document.createElement("form")
  loginForm.classList.add("formData")

  containerContextL.innerHTML = containerContextLL;
  loginForm.innerHTML = contentLoginForm;

  loginContent.appendChild(closeWindowModal)
  loginContent.appendChild(containerContextL)
  loginContent.appendChild(formContentL)
  formContentL.appendChild(loginForm)

  const signUpContent = document.createElement("section")
  signUpContent.classList.add("signUpContent")

  const containerContextS = document.createElement("section")
  containerContextS.classList.add("containerContext")

  const formContentS = document.createElement("section")
  formContentS.classList.add("formContent")

  const signUpForm = document.createElement("form")
  signUpForm.classList.add("formData")

  containerContextS.innerHTML = containerContextSS;
  signUpForm.innerHTML = contentSignUpForm;

  signUpContent.appendChild(closeWindowModal)

  signUpContent.appendChild(containerContextS)
  signUpContent.appendChild(formContentS)
  formContentS.appendChild(signUpForm)

  function handleActionLoginForm() {
    permission(stateDisplay)
    changeValue()
  }

  function handleActionSignUpForm() {
    permission()
  }

  const changePageLogin = loginForm.querySelector(".changePageLogin");
  changePageLogin.addEventListener("click", handleActionLoginForm);

  const changePageSignUp = signUpForm.querySelector(".changePageSignUp");
  changePageSignUp.addEventListener("click", handleActionSignUpForm);

  const handleDisplayForm = () => {
    hero.classList.add("heroOpacity")
    main.classList.add("mainOpacity")
    footer.classList.add("footerOpacity")

    modal.classList.remove("modalHide")
    modal.classList.add("modal")
    permission()
    changeValue()
  }
  btnLogin.addEventListener("click", handleDisplayForm)

  document.removeEventListener("DOMContentLoaded", handleDOMContentLoaded);
}

document.addEventListener("DOMContentLoaded", handleDOMContentLoaded)