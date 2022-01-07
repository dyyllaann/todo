import Item from "./Todo-logic.js";
// import Project from "./Project-logic.js";
import Storage from "./Storage.js";

// .remove() monkey patch
Element.prototype.remove = function () {
  this.parentElement.removeChild(this);
};
NodeList.prototype.remove = HTMLCollection.prototype.remove = function () {
  for (var i = this.length - 1; i >= 0; i--) {
    if (this[i] && this[i].parentElement) {
      this[i].parentElement.removeChild(this[i]);
    }
  }
};

Storage().init();
const data = Storage().get();
// Storage().inspect();

function createUserInput() {
  var userInputDiv = document.createElement("div");
  userInputDiv.classList.add("main");
  userInputDiv.id = "user-input-container";
  {
    var userInputLi = document.createElement("li");
    userInputLi.id = "user-input";
    {
      var inputTitle = document.createElement("input");
      inputTitle.type = "text";
      inputTitle.id = "input-title";
      inputTitle.placeholder = "Enter task name..."
      userInputLi.appendChild(inputTitle);
    }
    {
      var buttonDiv = document.createElement("div");
      {
        var inputCancel = document.createElement("button");
        inputCancel.innerText = "Cancel";
        inputCancel.onclick = function() { 
          document.getElementById("user-input-container").remove();
        };
        buttonDiv.appendChild(inputCancel);
      }
      {
        var inputSave = document.createElement("button");
        inputSave.innerText = "Save";
        inputSave.onclick = function () {
          var input = document.getElementById("input-title").value;
          Storage().addTask(new Item(input));
          const projects = Storage().get();
          const current = Storage().getActive();
          const item = projects[current].todos[projects[current].todos.length - 1];
          app().refresh(current);
          // Remove user input field (Alternative: toggle user-input-container visible/hidden)
          document.getElementById("user-input-container").remove();
        };
        buttonDiv.appendChild(inputSave);
      }
      userInputLi.appendChild(buttonDiv);
    }
    userInputDiv.appendChild(userInputLi);
  }
  main.children[2].insertAdjacentElement("afterBegin", userInputDiv);
}

function createMainContainer() {
  // Create main TASKS section
  const main = document.createElement("div");
  main.classList.add("main-container");
  main.id = "main";
  content.appendChild(main);
}

function createMain() {
  const main = document.getElementById("main");
  // Add "Tasks" title DIV
  var titleDiv = document.createElement("div");
  titleDiv.classList.add("main");
  {
    var mainTitle = document.createElement("h3");
    mainTitle.innerText = "Tasks";
    titleDiv.appendChild(mainTitle);
  }
  main.appendChild(titleDiv);

  // Add taskList section
  var taskList = document.createElement("div");
  taskList.classList.add("main");
  taskList.id = "task-list";
  main.appendChild(taskList);

  // Add "Add Task" button div
  var taskButtonDiv = document.createElement("div");
  taskButtonDiv.classList.add("main");
  {
    var addTaskButton = document.createElement("li");
    addTaskButton.id = "task-button";
    addTaskButton.innerText = "Add Task";
    addTaskButton.onclick = function() { createUserInput(); };
    taskButtonDiv.appendChild(addTaskButton);

    // Add icon
    addTaskButton.insertAdjacentHTML(
      "afterbegin",
      '<i class="material-icons-outlined">add_task</i>'
    );
  }
  main.appendChild(taskButtonDiv);
}

function addListItem(item) {
  var taskList = document.getElementById("task-list");
  // Create li
  var li = document.createElement("li");

  // Create dl
  var dl = document.createElement("dl");
  li.appendChild(dl);

  // Create dt
  var dt = document.createElement("dt");
  dt.innerText = item.title;
  // Add "complete" onclick function
  dt.onclick = function() {
    Storage().deleteTask(item.id);
    this.className += "complete";
  };
  dl.appendChild(dt);

  // Create dd (details) (if any)
  for (var detail in item.details) {
    var dd = document.createElement("dd");
    dd.innerText = item.details[detail];
    dl.appendChild(dd);
  }
  taskList.appendChild(li);
}

function populateMain(current) {
  var taskList = data[current].todos;
  for (var item in taskList) {
    addListItem(taskList[item]);
  }
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

export default function app() {
  const init = function () {
    createMainContainer();
    createMain();
    populateMain(0); // Populate Main with tasks from first project
  };

  const refresh = function (current) {
    const main = document.getElementById("task-list");
    removeAllChildNodes(main);
    populateMain(current);
    console.log("refreshed task-list");
  }

  return { init, refresh };
}