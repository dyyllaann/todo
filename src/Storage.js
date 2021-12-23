// Storage.js should just be how items are stored on local storage, or synced to another platform, like Google.
// Currently, Storage.js includes the Project factory function. This should be in its own module. 
// One module will alter the project items, the other will commit it to storage. 

import { v4 as uuidv4 } from "uuid";

var Projects = [];

function Project(project, dueDate) {
  this.project = project;
  this.todos = [];
  this.dueDate = dueDate;
  this.id = uuidv4();

  this.commit = function() {
    return Projects.push(this);
  }
}

// This will have to get information from user, of course
// function createNewProject(project, dueDate, id) {
//   new Project(project, dueDate, uuidv4());
// }

function Item(title, dueDate) {
  this.title = title;
  this.details = [];
  this.dueDate = dueDate;
  this.id = uuidv4();
}

Projects.push(
  new Project(
    "Todo List",
    "12-12-2021"),

  new Project(
    "Shopping List",
    "12-12-2021")
)

// Create new testItem
var testItem = new Item("Hang out with Sarah", "December 20, 2021");
// Add testItem details
// Think about what details are necessary in a todo item:
// ex: Date, Tag, Location, Parties, Type(Meeting), if meeting => confirmation?
testItem.details.push("Drive to Portland.", "Meet at Hotel.");

// Test testItem.details
// console.log(testItem.details); // Success.

Projects[0].todos.push(testItem);
console.log(Projects[0].todos[0].details);

var testNewProject = function() {
  var temp = new Project("Whattup List", "12-12-2021", "D03");
  temp.todos.push(
    new Item("Go to the store."), 
    new Item("Get eggs."), 
    new Item("Eat an orange."),
    testItem
  );

  // Save function
  return temp.commit();
}

// Add item to Projects
// var testNewItem = () => {return Projects[2].todos.push("Write some code.", testItem.title, testItem)};

testNewProject();
// testNewItem();

export default function importData() {
  return Projects;
}
