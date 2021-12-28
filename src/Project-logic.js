import importData from "./Storage.js";
import { v4 as uuidv4 } from "uuid";

var Projects = importData();

Projects.push(
  new Project("Todo List", "12-12-2021"),
  new Project("Shopping List", "12-12-2021")
);

var testNewProject = function () {
  var temp = new Project("Dodo List", "12-12-2021");
  return temp.commit();
};

testNewProject();

export default function Project(project, dueDate) {
  this.project = project;
  this.todos = [];
  this.dueDate = dueDate;
  this.id = uuidv4();

  this.commit = function () {
    return Projects.push(this);
  };
}
