import { differenceInCalendarQuarters } from "date-fns";
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
  createCalendar();
}

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

function createMain() {
  // Create main element
  var main = document.createElement("div");
  main.classList.add("main");
  main.id = "main";
  content.appendChild(main);

  // Add TO-DOS title
  var mainTitle = document.createElement("h3");
  mainTitle.innerText = "Tasks";
  main.append(mainTitle);
}

function createCalendar() {
  // Create calendar element
  var calendar = document.createElement("div");
  calendar.classList.add("calendar");
  calendar.id = "calendar";
  content.appendChild(calendar);

  // // Add Calendar title
  // var title = document.createElement("h3");
  // title.innerText = "Calendar";
  // calendar.append(title);

  // Set date
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const d = new Date();
  const dateString = `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;

  // Print date to DIV
  var date = document.createElement("h3");
  date.innerText = dateString;
  calendar.appendChild(date);

  // Print times of day
  var tableDiv = document.createElement("div");
    {
    var table = document.createElement("table");
    table.id = "calendarTable";
    for (var start = 0; start < 24; start++) {
      var hour = new Date();
      hour.setHours(start);

      var ampm;
      if (start < 12) {
        ampm = "am";
      } else { ampm = "pm"}

      var tr = document.createElement("tr");
      tr.classList.add("timegrid");
      if (hour.getHours() % 12 == 0) {
        tr.innerText = `12${ampm}`;
      } else {
        tr.innerText = `${hour.getHours() % 12}${ampm}`;
      }

      table.appendChild(tr);
    }
    tableDiv.appendChild(table)
    }
  calendar.appendChild(tableDiv);
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

  var addTaskButton = document.createElement("li");
  addTaskButton.id = "task-button";
  addTaskButton.innerText = "Add Task";
  main.appendChild(addTaskButton);
    addTaskButton.insertAdjacentHTML(
      "afterbegin",
      '<span class="material-icons-outlined">add_task</span>'
    );
}