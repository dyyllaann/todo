# todo app
A Todo list app designed to meet the requirements provided by The Odin Project. 

See full assignment at <a href="https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/todo-list" target="_blank" rel="noreferrer noopener">The Odin Project</a>

LIVE: <a href="https://dyyllaann.github.io/todo" target="_blank" rel="noreferrer noopener">dyyllaann.github.io/todo</a>

<h2>Introduction</h2>
This is the final project of the JavaScript section titled Organizing Your JavaScript Code.
The most challenging aspect of the project was figuring out how to organize the code and reference the local storage, which was stored in a separate component.
My main goal was to avoid too much 'spaghetti code' and 'callback hell.'
I think I was fairly successfull in this, but there's still room for improvement.
I'm currently rebuilding this assignment in React as a personal project. 

<h2>Skills</h2>
Webpack <br />
npm <br />
JavaScript <br />
CSS <br />
HTML <br />

<h2>Tools</h2>
VSCode <br />
Git / GitHub <br />

<h2>Resources</h2>
Webpack tutorial and configuration <br />
Google Material Icons Library <br />
Layout inspired by <a href="https://dribbble.com/shots/14440819-KosmoTime-Task-Manager" target="_blank" rel="noreferrer noopener">KosmoTime Task Manager by Mik Skuza</a><br />

<h2>Assignment</h2>
<ol>
  <li>Your ‘todos’ are going to be objects that you’ll want to dynamically create, which means either using factories or constructors/classes to generate them.</li>
  <li>Brainstorm what kind of properties your todo-items are going to have. At a minimum they should have a title, description, dueDate and priority. You might also want to include notes or even a checklist.</li>
  <li>Your todo list should have projects or separate lists of todos. When a user first opens the app, there should be some sort of ‘default’ project to which all of their todos are put. Users should be able to create new projects and choose which project their todos go into.</li>
  <li>You should separate your application logic (i.e. creating new todos, setting todos as complete, changing todo priority etc.) from the DOM-related stuff, so keep all of those things in separate modules.</li>
  <li>The look of the User Interface is up to you, but it should be able to do the following:
    <ol>
      <li>view all projects</li>
      <li>view all todos in each project (probably just the title and duedate.. perhaps changing color for different priorities)</li>
      <li>expand a single todo to see/edit its details</li>
      <li>delete a todo</li>
    </ol>
  <li>For inspiration, check out the following great todo apps. (look at screenshots, watch their introduction videos etc.)
    <ol>
      <li>Todoist</li>
      <li>Things</li>
      <li>any.do</li>
    </ol>
  <li>Since you are probably already using webpack, adding external libraries from npm is a cinch! You might want to consider using the following useful library in your code:
    <ol>
      <li>date-fns gives you a bunch of handy functions for formatting and manipulating dates and times.</li>
    </ol>
  <li>We haven’t learned any techniques for actually storing our data anywhere, so when the user refreshes the page, all of their todos will disappear! You should add some persistence to this todo app using the Web Storage API.</li>
  <ol>
    <li>localStorage (docs here) allows you to save data on the user’s computer. The downside here is that the data is ONLY accessible on the computer that it was created on. Even so, it’s pretty handy! Set up a function that saves the projects (and todos) to localStorage every time a new project (or todo) is created, and another function that looks for that data in localStorage when your app is first loaded. Additionally, here are a couple of quick tips to help you not get tripped up:</li>
      <ul>
        <li>Make sure your app doesn’t crash if the data you may want retrieve from localStorage isn’t there!</li>
        <li>localStorage uses JSON to send and store data, and when you retrieve the data, it will also be in JSON format. You will learn more about this language in a later lesson, but it doesn’t hurt to get your feet wet now. Keep in mind you cannot store functions in JSON, so you’ll have to figure out how to add methods back to your object properties once you fetch them. Good luck!</li>
    </ul>
  </ol>
</ol>
