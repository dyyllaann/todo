var Projects = [];

function Project(project, dueDate, id) {
  this.project = project;
  this.todos = [];
  this.dueDate = dueDate;
  this.id = id;

  this.commit = function() {
    return Projects.push(this);
  }
}

Projects.push(
  new Project(
    "Todo List",
    "12-12-2021",
    "D01"),

  new Project(
    "Shopping List",
    "12-12-2021",
    "D02")
)

var testNewProject = function() {
  var temp = new Project("Whattup List", "12-12-2021", "D03");

  temp.todos.push("Go to the store.", "Get eggs.", "Eat an orange.");

  // Save function
  return temp.commit();
}

testNewProject();

export default function importData() {
  return Projects;
}
