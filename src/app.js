import Item from "./Todo-logic.js";
import Storage from "./Storage.js";

// .remove() monkey patch
Element.prototype.remove = function () {
  this.parentElement.removeChild(this);
};
NodeList.prototype.remove = HTMLCollection.prototype.remove = function () {
  for (let i = this.length - 1; i >= 0; i--) {
    if (this[i] && this[i].parentElement) {
      this[i].parentElement.removeChild(this[i]);
    }
  }
};

Storage().init();
const data = Storage().get();

function createUserInput() {
  const userInputDiv = document.createElement("div");
  userInputDiv.classList.add("main");
  userInputDiv.id = "user-input-container";
  {
    const userInputLi = document.createElement("li");
    userInputLi.id = "user-input";
    {
      const inputTitle = document.createElement("input");
      inputTitle.type = "text";
      inputTitle.id = "input-title";
      inputTitle.placeholder = "Enter task name...";
      userInputLi.appendChild(inputTitle);

      const buttonDiv = document.createElement("div");
      {
        const inputCancel = document.createElement("button");
        inputCancel.innerText = "Cancel";
        inputCancel.onclick = function () {
          removeUserInput();
        };
        buttonDiv.appendChild(inputCancel);

        const inputSave = document.createElement("button");
        inputSave.id = "input-save";
        inputSave.innerText = "Save";

        inputSave.onclick = function () {
          Storage().addTask(new Item(inputTitle.value));
          app().refresh();
          removeUserInput();
        };
        buttonDiv.appendChild(inputSave);
      }
      userInputLi.appendChild(buttonDiv);

      // Add keyup events
      inputTitle.addEventListener("keyup", function (event) {
        const inputSave = document.getElementById("input-save"); 
        const inputCancel = document.getElementById("input-cancel");
        if (event.keyCode === 13) {
          event.preventDefault();
          inputSave.click();
        } else if (event.keyCode === 27) {
          event.preventDefault();
          inputCancel.click();
        }
      });
    }
    userInputDiv.appendChild(userInputLi);
  }
  main.children[2].insertAdjacentElement("afterBegin", userInputDiv);
}

function removeUserInput() {
  document.getElementById("user-input-container").remove();
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
  const titleDiv = document.createElement("div");
  titleDiv.classList.add("main");
  {
    const mainTitle = document.createElement("h3");
    mainTitle.innerText = "Tasks";
    titleDiv.appendChild(mainTitle);
  }
  main.appendChild(titleDiv);

  // Add taskList section
  const taskList = document.createElement("div");
  taskList.classList.add("main");
  taskList.id = "task-list";
  main.appendChild(taskList);

  // Add "Add Task" button div
  const taskButtonDiv = document.createElement("div");
  taskButtonDiv.classList.add("main");
  {
    // Create button
    const addTaskButton = document.createElement("li");
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
  // Get taskList
  const taskList = document.getElementById("task-list");

  // Create li
  const li = document.createElement("li");

  // Create dl
  const dl = document.createElement("dl");
  li.appendChild(dl);

  // Create dt
  const dt = document.createElement("dt");
  dt.innerText = item.title;

  // Add "complete" onclick function
  dt.onclick = function() {
    Storage().deleteTask(item.id);
    this.className += "complete";
    setTimeout( () => { app().refresh(); }, 1000);    
  };

  dl.appendChild(dt);

  // Create dd (details) (if any)
  for (const detail in item.details) {
    const dd = document.createElement("dd");
    dd.innerText = item.details[detail];
    dl.appendChild(dd);
  }

  taskList.appendChild(li);
}

function populateMain(current) {
  const taskList = Storage().get()[current].todos;
  for (const item in taskList) {
    addListItem(taskList[item]);
  }
  // console.log(data[current].todos);
  console.log(Storage().get()[current].todos);
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
  console.log("Child nodes removed.");
}

export default function app() {
  const init = function () {
    createMainContainer();
    createMain();
    populateMain(0); // Populate Main with tasks from first project
  };

  const refresh = function () {
    const current = Storage().getActive();
    const main = document.getElementById("task-list");
    removeAllChildNodes(main);
    populateMain(current);
    // console.log(Storage().get()[current].todos);
    console.log("refreshed task-list");
  }

  return { init, refresh };
}