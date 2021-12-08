export default function app() {
  // Create content div
  var content = document.createElement("div");
  content.id = "content";
  document.body.appendChild(content);

  sidebar();
}

function sidebar() {
  // Create content left sidebar
  var sidebar = document.createElement("div");
  sidebar.id = "sidebar";
  sidebar.innerText = "SIDEBAR";
  content.appendChild(sidebar);
}