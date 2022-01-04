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

export default function Storage() {
  const init = function () {
    if (get() == null) {
      return createDefaultItems();
    }
  }

  const get = function () {
    return JSON.parse(localStorage.getItem("projects" || "[]"));
  }

  const set = function (project) {
    const a = this.get();
    a.push(project);
    return localStorage.setItem("projects", JSON.stringify(a));
  }

  const addTask = function (task, idx) {
    const array = JSON.parse(localStorage.getItem("projects"));
    array[idx].todos.push(task);
    return localStorage.setItem("projects", JSON.stringify(array));
  }

  const inspect = function () {
    console.log(this.get());
  }

  const clear = function () {
    return localStorage.clear();
  }

  return {init, get, set, addTask, inspect, clear};
}