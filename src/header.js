export default function header() {
  document.body.insertAdjacentHTML(
      "afterbegin",
      '\
      <div class="header">\
        <div class="header-left">\
        </div>\
        <div class="header-center">\
          <h1 id="header-center" style="white-space: pre-wrap;">TaskEasy</h1>\
        </div>\
        <div class="header-right">\
          <!-- Add buttons to initiate auth sequence and sign out -->\
          <!-- <div class="g-signin2" data-onsuccess="onSignIn"></div> -->\
          <button id="authorize_button" style="display: none;">Sign In</button>\
          <button id="signout_button" style="display: none">Sign Out</button>\
        </div>\
      </div>\
    '
    );
}