import Project from "./Project-logic.js";
import Item from "./Todo-logic.js";

// Set data const
function createDefaultItems() {
  // Create empty array
  localStorage.setItem("projects", JSON.stringify([]));

  // Set default Projects
  Storage().set(new Project("Todo List 1", "12-12-2021"));
  Storage().set(new Project("Todo List 2", "12-12-2021"));

  // Set default Tasks
  var testItem1 = new Item("Welcome to TaskEasy!");
  testItem1.details.push("www.dylanjames.is", "www.github.com/dylanjames", "<- Check out the creator");

  var testItem2 = new Item("Go to the store", "December 20, 2021");
  testItem2.details.push("Milk", "Eggs", "Cheese");

  Storage().addTask(testItem1, 0);
  Storage().addTask(testItem2, 0);
}

export default function Storage() {
  const init = function () {
    if (get() == null) {
      return createDefaultItems();
    }
  }

  const getActive = function () {
    return JSON.parse(localStorage.getItem("active")) || 0;
  }

  const setActive = function (active) {
    return localStorage.setItem("active", JSON.stringify(active));
  }

  const get = function () {
    return JSON.parse(localStorage.getItem("projects" || "[]"));
  }

  const set = function (project) {
    const a = this.get();
    a.push(project);
    return localStorage.setItem("projects", JSON.stringify(a));
  }

  const addProject = function (project) {
    const array = JSON.parse(localStorage.getItem("projects"));
    array.push(project);
    return localStorage.setItem("projects", JSON.stringify(array));
  }

  const addTask = function (task) {
    const array = JSON.parse(localStorage.getItem("projects"));
    array[getActive()].todos.push(task);
    return localStorage.setItem("projects", JSON.stringify(array));
  }

  const deleteTask = function (task) {
    const array = JSON.parse(localStorage.getItem("projects"));
    array[getActive()].todos = array[getActive()].todos.filter(function (obj) {
      return obj.id !== task;
    });
    console.log(array[getActive()]);
    return localStorage.setItem("projects", JSON.stringify(array));
  }

  const inspect = function () {
    console.log(this.get());
  }

  const clear = function () {
    return localStorage.clear();
  }

  return {
    // Initiate object
    init,

    // Get & set
    get, 
    set, 
    getActive,
    setActive,

    // Project commands
    addProject, 

    // Item commands
    addTask, 
    deleteTask, 

    // Utility commands
    inspect, 
    clear
  };
}