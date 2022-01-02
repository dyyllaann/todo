import importData from "./Storage.js";
import Item from "./Todo-logic.js";
import Project from "./Project-logic.js";
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

// Set data const
Storage().set(new Project("Todo List 1", "12-12-2021"));
Storage().set(new Project("Todo List 2", "12-12-2021"));

function createDefaultItems() {
  var testItem1 = new Item("Work on app", "December 20, 2021");
  testItem1.details.push("www.thisisyourapp.com", "URGENT");

  var testItem2 = new Item("Go to the store", "December 20, 2021");
  testItem2.details.push("Milk", "Eggs", "Cheese");

  var testItem3 = new Item("Hang out with Sarah", "December 20, 2021");
  testItem3.details.push("Drive to Portland.", "Meet at Hotel.");

  Storage().addTask(testItem1, 0);
  Storage().addTask(testItem2, 0);
  Storage().addTask(testItem3, 0);
}

createDefaultItems();

const data = Storage().get();
Storage().inspect();

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
      userInputLi.appendChild(inputTitle);
    }
    {
      var inputCancel = document.createElement("button");
      inputCancel.innerText = "Cancel";
      inputCancel.onclick = function() { 
        document.getElementById("user-input-container").remove() 
      };
      userInputLi.appendChild(inputCancel);
    }
    {
      var inputSave = document.createElement("button");
      inputSave.innerText = "Save";
      inputSave.onclick = function () {
        var input = document.getElementById("input-title").value;
        var temp = new Item(input);
        temp.push();
        var item = data.todos[data.todos.length - 1];
        addListItem(item);
        document.getElementById("user-input-container").remove();
      };
      userInputLi.appendChild(inputSave);
    }
    userInputDiv.appendChild(userInputLi);
  }
  main.children[2].insertAdjacentElement("afterBegin", userInputDiv);
}

function createMainContainer() {
  // Create main TASKS section
  var main = document.createElement("div");
  main.classList.add("main-container");
  main.id = "main";
  content.appendChild(main);
}

function createMain() {
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
    addTaskButton.onclick = function() { createUserInput() };
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
  // var todoList = importData()[project].todos;

  // Create li
  var li = document.createElement("li");

  // Create dl
  var dl = document.createElement("dl");
  li.appendChild(dl);

  // Create dt
  var dt = document.createElement("dt");
  dt.innerText = item.title;
  dl.appendChild(dt);

  // Create dd (if any)
  for (var detail in item.details) {
    var dd = document.createElement("dd");
    dd.innerText = item.details[detail];
    dl.appendChild(dd);
  }

  taskList.appendChild(li);
}

function populateMain() {
  // var taskList = document.getElementById("task-list");
  var todoList = data[0].todos;

  for (var item in todoList) {
    addListItem(todoList[item]);
    // console.log(item);
  }
}

export default function app() {
  createMainContainer();
  createMain();
  populateMain();
}