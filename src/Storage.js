import Project from "./Project-logic.js";

localStorage.setItem("projects", JSON.stringify([]));

export default function Storage() {
  const get = function () {
    return JSON.parse(localStorage.getItem("projects"));
  }

  const set = function (project) {
    const a = this.get();
    a.push(project);
    return localStorage.setItem("projects", JSON.stringify(a));
  }

  const addTask = function (task, idx) {
    var array = JSON.parse(localStorage.getItem("projects"));
    array[idx].todos.push(task);
    return localStorage.setItem("projects", JSON.stringify(array));
  }

  const inspect = function () {
    console.log(this.get());
  }

  return {get, set, addTask, inspect};
}