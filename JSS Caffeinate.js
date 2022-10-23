// ==UserScript==
// @name        JSS Caffeinate
// @version     0.1
// @description Simulates mousedown events every few minutes, to activate keepalive call of JSS
// @match       https://<yourJssUrlWithoutPort>/*
// @updateURL   https://github.com/fveja/JSSCaffeinate/raw/main/JSS%20Caffeinate.js
// @noframes
// Florin Veja 2022
// ==/UserScript==

console.log('Started JSS Caffeinate. Running on ' + location.href)

// delay, in milliseconds, before we send mousedown event (120000 milliseconds = 2 min)
const delay = 120000
var last = Date.now()
const name = "JSS Caffeinate"

// set to true for debug console output
jssCaffeinateDebug = true

// function to send us back to the 
const login = () => {
  debug("loging in")
  location = location.origin
}

const logout = () => {
  debug("logging out")
  location = location.origin
}

const debug = (m) => {  
  typeof jssCaffeinateDebug == 'boolean' &&
      jssCaffeinateDebug &&
      console.log(name + " debug: " + m)
}

const authExpiration = () => { 
  return JSON.parse(localStorage.authToken).expires - Date.now()
}

const getDelay = (max) => {
  const min = 10000
  return Math.random() * (max - min) + min
}

// if we are on the logout page, log back in
// randomize to not create a race 
if (location.pathname == '/logout.html') {
  setTimeout(login(), getRandomInt(10000))
}

const café = setInterval(() => {
             var start = Date.now()
             const mousedown = new Event('mousedown')
             debug('JSS Caffeinate keepalive ' + start)
             document.dispatchEvent(mousedown)
             debug("authToken expires in " + authExpiration())
             debug(last + " - " + start + "=" + (start - last))
             last = start
             if (authExpiration < 1) { login() }
           }, delay);
