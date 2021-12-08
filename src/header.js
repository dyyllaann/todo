export default function header() {
  document.getElementById("content").insertAdjacentHTML(
      "beforeend",
      '\
      <div class="header">\
        <div class="header-left">\
          <p>HEADER LEFT</p>\
        </div>\
        <div class="header-center">\
          <h1 id="content" style="white-space: pre-wrap;">TODO PROJECT</h1>\
        </div>\
        <div class="header-right">\
          <!-- Add buttons to initiate auth sequence and sign out -->\
          <!-- <div class="g-signin2" data-onsuccess="onSignIn"></div> -->\
          <p>HEADER RIGHT</p>\
          <button id="authorize_button" style="display: none;">Sign In</button>\
          <button id="signout_button" style="display: none">Sign Out</button>\
        </div>\
      </div>\
    '
    );
}