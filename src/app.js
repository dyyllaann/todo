import importData from "./Storage.js";

export default function app() {
  // Create content div
  var content = document.createElement("div");
  content.id = "content";
  document.body.appendChild(content);

  createSidebar();
  populateSidebar();
  main();
  populateMain();
}

function createSidebar() {
  // Create content left sidebar
  var sidebar = document.createElement("div");
  sidebar.id = "sidebar";
  content.appendChild(sidebar);
}

function main() {
  // Create main element
  var main = document.createElement("div");
  main.id = "main";
  content.appendChild(main);
}

function populateSidebar() {
  var projectTitle = document.createElement("h3");
  projectTitle.innerText = "PROJECTS";
  sidebar.appendChild(projectTitle);

  for (var item in importData()) {
    var project = document.createElement("li");
    project.classList.add("project-title");
    project.id = importData()[item].id;
    project.innerText = importData()[item].project;
    sidebar.appendChild(project);
  }

  var projectList = document.getElementById("sidebar");
  var projects = projectList.getElementsByClassName("project-title");
  projects[0].classList.add("active");

  for (var i = 0; i < projects.length; i++) {
    projects[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }
}

function populateMain() {
  var main = document.getElementById("main");
  
  var mainTitle = document.createElement("h3");
  mainTitle.innerText = "TO-DOS";
  main.append(mainTitle);

  var todoItems = importData()[2].todos;

  for (var item in todoItems) {
    var project = document.createElement("li");
    // project.id = importData()[0].id;
    project.innerText = todoItems[item];
    main.appendChild(project);
  }
}