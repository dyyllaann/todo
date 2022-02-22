// import stylesheets
import "./style.css";

// import scripts
import header from "./header.js";
import app from "./app.js";
import calendar from "./calendar.js";
import sidebar from "./project-directory.js";
import Storage from "./Storage.js";

Storage().clear();
Storage().init();

header();
sidebar().init();
app().init();
calendar();