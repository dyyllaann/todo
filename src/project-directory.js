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
    '<span class="material-icons-outlined" id="left-arrow">expand_more</span>'
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
  addNew.id = "add-new-project";
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

    const inputTitle = document.createElement("input");
    inputTitle.type = "text";
    inputTitle.value = null;
    inputTitle.id = "project-input-title";
    inputTitle.placeholder = "Enter project name...";
    projectInputLi.appendChild(inputTitle);
	
    const buttonDiv = document.createElement("div");
			
    const inputCancel = document.createElement("button");
    inputCancel.innerText = "Cancel";
    inputCancel.id = "project-input-cancel";
    inputCancel.onclick = function () {
      document.getElementById("project-input-container").remove();
    };
    buttonDiv.appendChild(inputCancel);
			
    var inputSave = document.createElement("button");
    inputSave.innerText = "Save";
    inputSave.id = "project-input-save";
    inputSave.onclick = function () {
      // const projectTitle = document.getElementById("project-input-title");

      if (inputTitle && inputTitle.value) {
				// Add the project to Storage()
				Storage().addProject(new Project(inputTitle.value));

				// Remove user input field (Alternative: toggle user-input-container visible/hidden)
				document.getElementById("project-input-container").remove();

				// Refresh sidebar
				sidebar().refresh();

				// Simulate click
				const projects = document.getElementsByClassName("project");
				projects[projects.length - 1].click();
			} else return;
    };
    buttonDiv.appendChild(inputSave);
			

    // Add keyup events
    inputTitle.addEventListener("keyup", function (event) {
      const inputSave = document.getElementById("project-input-save");
      const inputCancel = document.getElementById("project-input-cancel");
      if (event.keyCode === 13) {
        event.preventDefault();
        inputSave.click();
      } else if (event.keyCode === 27) {
        event.preventDefault();
        inputCancel.click();
      }
    });

    projectInputLi.appendChild(buttonDiv);

		projectInput.appendChild(projectInputLi);
	}
  const projects = document.getElementById("projects-container");
  projects.appendChild(projectInput);
}

function addProjectItem(item) {
  // set constant variables
  const projectsContainer = document.getElementById("projects-container");
  const projectData = Storage().get();

  // Create h3 element
  const project = document.createElement("h3");
  project.id = projectData[item].id;
  project.innerText = projectData[item].project;
  project.classList.add("project");
  project.insertAdjacentHTML(
    "afterbegin",
    '<span class="material-icons icon-left color-label">circle</span>'
  );
  project.insertAdjacentHTML(
    "beforeend",
    '<span class="material-icons-outlined icon-right delete-project-btn">clear</span>'
  );
  projectsContainer.appendChild(project);
}

function addEventListeners() {
  // Set constant variables
	const projects = document.getElementsByClassName("project");
  const deleteProject = document.getElementsByClassName("delete-project-btn");

	for (var i = 0; i < projects.length; i++) {
		projects[i].addEventListener("click", function () {
        // Toggle "active" class
        const active = document.getElementsByClassName("active")[0]; // Set const to first element containing "active" class
        active.className = active.className.replace(" active", ""); 
        this.className += " active";

        // Set Storage().setActive() to this
        Storage().setActive(this);

        // Refresh main #task-list with active contents
        app().refresh(Storage().getActive());
    });
	}

  for (var i = 0; i < deleteProject.length; i++) {
    deleteProject[i].addEventListener("click", function(e) {
			// Delete this item in Storage()
			Storage().deleteProject(this.parentElement);

			// Refresh sidebar
			sidebar().refresh();

			return e.stopPropagation();
		});
  }
}

function addNavListener() {
  const arrow = document.getElementById("down-arrow");
  const projectsContainer = document.getElementById("projects-container");
  const addNewProject = document.getElementById("add-new-project");
  let expanded = true;

  arrow.addEventListener("click", function () {
    if (expanded == true) {
      arrow.style.transform = "rotate(90deg)";
      projectsContainer.style.display = "none";
      addNewProject.style.display = "none";
      return (expanded = false);
    } else {
      arrow.style.transform = "rotate(0deg)";
      projectsContainer.style.display = "block";
      addNewProject.style.display = "block";
      return (expanded = true);
    }
  });
}

export default function sidebar() {
  const init = function() {
    // Set constant variables
    const projects = document.getElementsByClassName("project");

    // Create sidebar
    createSidebar();

    // Populate sidebar
    this.populate();

    // Add event listeners
    addEventListeners();
    addNavListener();

    // Set initial project as active by default
    projects[0].classList.add("active");
    Storage().setActive(0);
  }

  const select = function() {

  }

  const clear = function(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }

  const refresh = function() {
		const projectsContainer = document.getElementById("projects-container");
		const projects = document.getElementsByClassName("project");

    this.clear(projectsContainer);
		this.populate();

    const active = projects.length-1;
		projects[active].classList.add("active");
		Storage().setActive(active);
    addEventListeners();

    // This doesn't work for some reason.
    app().refresh(Storage().getActive());
	}

  const deleteProject = function() {
    return Storage().deleteProject(this);
  }

  const populate = function() {
    for (var item in Storage().get()) {
      addProjectItem(item);
    }
  }

  return { init, select, clear, refresh, deleteProject, populate };
}