/**
 * Script for welcome.ejs
 */

require('v8-compile-cache');

document.getElementById('welcomeButton').addEventListener('click', e => {
    loginOptionsCancelEnabled(false) // False by default, be explicit.
    loginOptionsViewOnLoginSuccess = VIEWS.landing
    loginOptionsViewOnLoginCancel = VIEWS.loginOptions
    switchView(VIEWS.welcome, VIEWS.loginOptions)
})