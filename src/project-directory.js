import Storage from "./Storage.js";
import Project from "./Project-logic.js";
import app from "./app.js";

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

  // Add sidebar PROJECTS div
  var projectsContainer = document.createElement("div");
  projectsContainer.id = "projects-container";
  sidebar.appendChild(projectsContainer);

  // Add "Add New" button
  var addNew = document.createElement("li");
  addNew.classList.add("add-button");
  addNew.innerText = 'Add New';
  addNew.onclick = function () {
    createProjectInput();
  };
  sidebar.appendChild(addNew);
}

function createProjectInput() {
  const projectInput = document.createElement("div");
  projectInput.classList.add("project-input");
  projectInput.id = "project-input-container";
  {
    const projectInputLi = document.createElement("li");
    projectInputLi.id = "projectInput-input";
    {
      const inputTitle = document.createElement("input");
      inputTitle.type = "text";
      inputTitle.id = "project-input-title";
      inputTitle.placeholder = "Enter project name...";
      projectInputLi.appendChild(inputTitle);
    }
    {
      const buttonDiv = document.createElement("div");
      {
        const inputCancel = document.createElement("button");
        inputCancel.innerText = "Cancel";
        inputCancel.onclick = function () {
          document.getElementById("project-input-container").remove();
        };
        buttonDiv.appendChild(inputCancel);
      }
      {
        var inputSave = document.createElement("button");
        inputSave.innerText = "Save";
        inputSave.onclick = function () {
          const projectsContainer = document.getElementById("projects-container");
          const projectTitle = document.getElementById("project-input-title").value;

          Storage().addProject(new Project(projectTitle));

          // This part doesn't work... why?!
          const project = document.createElement("li");
          project.classList.add("project-title");
          project.innterText = projectTitle;
          projectsContainer.appendChild(project);

          // Remove user input field (Alternative: toggle user-input-container visible/hidden)
          document.getElementById("project-input-container").remove();
        };
        buttonDiv.appendChild(inputSave);
      }
      projectInputLi.appendChild(buttonDiv);
    }
    projectInput.appendChild(projectInputLi);
  }
  const projects = document.getElementById("projects-container");
  projects.appendChild(projectInput);
}

function addProjectItem(item) {
  const projectsContainer = document.getElementById("projects-container");
  const projectData = Storage().get();

  var project = document.createElement("li");
  project.classList.add("project-title");
  project.id = projectData[item].id;
  project.innerText = projectData[item].project;
  projectsContainer.appendChild(project);

     project.insertAdjacentHTML(
       "afterbegin",
       '<span class="material-icons icon-left color-label">circle</span>'
     );

   project.insertAdjacentHTML(
     "beforeend",
     '<span class="material-icons-outlined icon-right" id="project-delete-button">clear</span>'
   );
}

function populateSidebar() {
  const sidebar = document.getElementById("sidebar");
  const projectData = Storage().get();

  // Add items in importData()
  for (var item in projectData) {
    addProjectItem(item);
  }

  // Set initial project as active by default
  {
    var projectList = document.getElementById("sidebar");
    var projects = projectList.getElementsByClassName("project-title");
    projects[0].classList.add("active");
    Storage().setActive(0);
  }

  // Active selector
  for (var i = 0; i < projects.length; i++) {
    projects[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";

      projectSelector();
      console.log(Storage().get()[Storage().getActive()]);
      app().refresh(Storage().getActive());
    });
  }
}

function projectSelector() {
  const projectsContainer = document.getElementById("projects-container");
  for (let i = 0; i < projectsContainer.children.length; i++) {
    if (projectsContainer.children[i].classList.contains("active")) {
      return Storage().setActive(i);
    }
  }
}

export default function sidebar() {
  const init = function() {
    createSidebar();
    populateSidebar();
  }

  return { init };
}