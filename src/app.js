import importData from "./Storage.js";

export default function app() {
  // Create content div
  var content = document.createElement("div");
  content.id = "content";
  document.body.appendChild(content);

  createSidebar();
  populateSidebar();
  createMain();
  populateMain();
}

function createSidebar() {
  // Create content left sidebar
  var sidebar = document.createElement("div");
  sidebar.id = "sidebar";
  content.appendChild(sidebar);

  // Add sidebar PROJECTS title
  var projectTitle = document.createElement("h3");
  projectTitle.innerText = "PROJECTS";
  return sidebar.appendChild(projectTitle);
}

function createMain() {
  // Create main element
  var main = document.createElement("div");
  main.id = "main";
  content.appendChild(main);

  // Add TO-DOS title
  var mainTitle = document.createElement("h3");
  mainTitle.innerText = "Tasks";
  main.append(mainTitle);
}

function populateSidebar() {
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

function populateMain() {
  var main = document.getElementById("main");
  var todoList = importData()[2].todos;

  for (var item in todoList) {
    // Create li
    var li = document.createElement("li");

    // Create dl
    var dl = document.createElement("dl");
    li.appendChild(dl);

    // Create dt
    var dt = document.createElement("dt");
    dt.innerText = todoList[item].title;
    dl.appendChild(dt);

    // Create dd (if any)
    for (var detail in todoList[item].details) {
      var dd = document.createElement("dd");
      dd.innerText = todoList[item].details[detail];
      dl.appendChild(dd);
    }

    main.appendChild(li);
  }
}