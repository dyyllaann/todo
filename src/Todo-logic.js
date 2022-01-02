import { v4 as uuidv4 } from "uuid";
import importData from "./Storage.js";
import Project from "./Project-logic.js";
import Storage from "./Storage.js";

// const temp = Storage().get()[2];

// function createDefaultItems() {
//   var testItem1 = new Item("Work on app", "December 20, 2021");
//   testItem1.details.push("www.thisisyourapp.com", "URGENT");
//   testItem1.push(temp);

//   var testItem2 = new Item("Go to the store", "December 20, 2021");
//   testItem2.details.push("Milk", "Eggs", "Cheese");
//   testItem2.push(temp);

//   var testItem3 = new Item("Hang out with Sarah", "December 20, 2021");
//   testItem3.details.push("Drive to Portland.", "Meet at Hotel.");
//   testItem3.push(temp);
// }

// createDefaultItems();

export default function Item(title, dueDate) {
  this.title = title;
  this.details = [];
  this.dueDate = `Due: ${dueDate}`;
}