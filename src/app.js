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

// Create storage object
Storage().init();

function createUserInput() {
  const userInputDiv = document.createElement("div");
  userInputDiv.classList.add("main");
  userInputDiv.id = "user-input-container";

  const userInputLi = document.createElement("li");
  userInputLi.id = "user-input";
  
  const inputTitle = document.createElement("input");
  inputTitle.type = "text";
  inputTitle.id = "input-title";
  inputTitle.placeholder = "Enter task name...";
  userInputLi.appendChild(inputTitle);

  const buttonDiv = document.createElement("div");
  
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
    if (inputTitle && inputTitle.value) {
      Storage().addTask(new Item(inputTitle.value));
      app().refresh();
      removeUserInput();
    };
  };
  buttonDiv.appendChild(inputSave);
  
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
    
  userInputDiv.appendChild(userInputLi);
  
  main.children[3].insertAdjacentElement("afterBegin", userInputDiv);
}

function removeUserInput() {
  document.getElementById("user-input-container").remove();
}

function createMain() {
  // Create main TASKS section
  const mainContainer = document.createElement("div");
  mainContainer.classList.add("main-container");
  mainContainer.id = "main";
  content.appendChild(mainContainer);

  // Add "Tasks" title DIV
  const titleDiv = document.createElement("div");
  titleDiv.classList.add("main");
  {
    const mainTitle = document.createElement("h3");
    mainTitle.innerText = "Tasks";
    titleDiv.appendChild(mainTitle);
  }
  mainContainer.appendChild(titleDiv);

  // Add default message
  const defaultMessage = document.createElement("h3");
  defaultMessage.id = "defaultMessage";
  defaultMessage.innerText = "No tasks found. Click 'Add Task' to create one now.";
  defaultMessage.style.display = "none";
  mainContainer.appendChild(defaultMessage);

  // Add taskList section
  const taskList = document.createElement("div");
  taskList.classList.add("main");
  taskList.id = "task-list";
  mainContainer.appendChild(taskList);

  // Add "Add Task" button div
  const taskButtonDiv = document.createElement("div");
  taskButtonDiv.classList.add("main");
  {
    // Create button
    const addTaskButton = document.createElement("li");
    addTaskButton.id = "task-button";
    addTaskButton.innerText = "Add Task";
    addTaskButton.onclick = function () {
      createUserInput();
    };
    taskButtonDiv.appendChild(addTaskButton);

    // Add icon
    addTaskButton.insertAdjacentHTML(
      "afterbegin",
      '<i class="material-icons-outlined">add_task</i>'
    );
  }
  mainContainer.appendChild(taskButtonDiv);
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

export default function app() {
  const init = function () {
    createMain();
    this.populate(0);
  };

  const populate = function (current) {
    const tasks = Storage().get()[current].todos;
    const defaultMessage = document.getElementById("defaultMessage");

    for (const item in tasks) {
      addListItem(tasks[item]);
    }

    if (tasks.length == 0) {
      defaultMessage.style.display = "block";
    } else {
      defaultMessage.style.display = "none";
    }
  }

  const clear = function (parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }

  const refresh = function () {
    // Set const variables
    const current = Storage().getActive();
    const taskList = document.getElementById("task-list");

    this.clear(taskList); // Clear #task-list content
    this.populate(current); // Populate 
  }

  return { init, clear, populate, refresh };
}