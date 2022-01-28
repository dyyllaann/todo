import Project from "./Project-logic.js";
import Item from "./Todo-logic.js";

// Set data const
function createDefaultItems() {
  // Create empty array
  localStorage.setItem("projects", JSON.stringify([]));

  // Set default Projects
  Storage().set(new Project("Todo List 1"));

  // Set default Task
  var testItem1 = new Item("Welcome to TaskEasy!");
  testItem1.details.push(
    // "www.dylanjames.is",
    "www.github.com/dyyllaann",
    "← Check out the creator"
  );

  Storage().addTask(testItem1, 0);
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
    const projects = JSON.parse(localStorage.getItem("projects"));
    // Why would I do it this way?
    for (var i in projects) {
      if (active.id == projects[i].id) {
        return localStorage.setItem("active", JSON.stringify(i));
      }
    }
    return localStorage.setItem("active", 0);
  }

  const get = function () {
    return JSON.parse(localStorage.getItem("projects" || "[]"));
  }

  const set = function (project) {
    this.get().push(project);
    return localStorage.setItem("projects", JSON.stringify(a));
  }

  const addProject = function (project) {
    const projects = JSON.parse(localStorage.getItem("projects"));
    projects.push(project);
    return localStorage.setItem("projects", JSON.stringify(projects));
  }

  const deleteProject = function (project) {
    let array = JSON.parse(localStorage.getItem("projects"));
    array = array.filter(function (obj) {
      return obj.id !== project.id;
    });
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
    return localStorage.setItem("projects", JSON.stringify(array));
  }

  const inspect = function () {
    console.log(this.get());
  }

  const clear = function () {
    return localStorage.clear();
  }

  return { init, get, set, getActive, setActive, addProject, deleteProject, addTask, deleteTask, inspect, clear };
}