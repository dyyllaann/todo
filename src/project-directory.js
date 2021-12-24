import importData from "./Storage.js";

function createSidebar() {
  // Create content left sidebar
  var sidebar = document.createElement("div");
  sidebar.id = "sidebar";
  content.appendChild(sidebar);

  var profile = document.createElement("div");
  profile.classList.add("material-icons");
  profile.innerText = "account_circle";
  profile.id = "profile";
  sidebar.appendChild(profile);

  // Add sidebar TAGS section
  var tagTitle = document.createElement("h3");
  tagTitle.innerText = "Tags";
  tagTitle.id = "tags";
  tagTitle.insertAdjacentHTML(
    "afterbegin",
    '<span class="material-icons">tag</span>'
  );
  tagTitle.insertAdjacentHTML(
    "beforeend",
    '<span class="material-icons-outlined" id="down-arrow">expand_more</span>'
  );
  sidebar.appendChild(tagTitle);

  // Add sidebar PROJECTS section
  var projectTitle = document.createElement("h3");
  projectTitle.innerText = "Projects";
  projectTitle.id = "projects";
  projectTitle.insertAdjacentHTML(
    "afterbegin",
    '<span class="material-icons">folder</span>'
  );
  projectTitle.insertAdjacentHTML(
    "beforeend",
    '<span class="material-icons-outlined" id="down-arrow">expand_more</span>'
  );
  sidebar.appendChild(projectTitle);
}

function populateSidebar() {
  const sidebar = document.getElementById("sidebar");

  // Add items in importData()
  for (var item in importData()) {
    var project = document.createElement("li");
    project.classList.add("project-title");
    project.id = importData()[item].id;
    project.innerText = importData()[item].project;
    sidebar.appendChild(project);
  }

  // Set initial project as active by default
  {
    var projectList = document.getElementById("sidebar");
    var projects = projectList.getElementsByClassName("project-title");
    projects[0].classList.add("active");
  }

  // Active selector
  for (var i = 0; i < projects.length; i++) {
    projects[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }
}

export default function sidebar() {
  createSidebar();
  populateSidebar();
}
