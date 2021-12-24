export default function calendar() {
  // Create sidebar CALENDAR section
  var calendar = document.createElement("div");
  calendar.classList.add("calendar");
  calendar.id = "calendar";
  content.appendChild(calendar);

  // Set date
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const d = new Date();
  const dateString = `${
    months[d.getMonth()]
  } ${d.getDate()}, ${d.getFullYear()}`;

  // Print date to DIV
  var date = document.createElement("h3");
  date.innerText = dateString;
  calendar.appendChild(date);

  // Print times of day
  var tableDiv = document.createElement("div");
  {
    var table = document.createElement("table");
    table.id = "calendarTable";
    // Print each hour of day
    for (var start = 0; start < 24; start++) {
      var hour = new Date();
      hour.setHours(start);

      // Determine whether AM or PM
      var ampm;
      if (start < 12) {
        ampm = "am";
      } else {
        ampm = "pm";
      }

      var tr = document.createElement("tr");
      tr.classList.add("timegrid");
      if (hour.getHours() % 12 == 0) {
        tr.innerText = `12${ampm}`;
      } else {
        tr.innerText = `${hour.getHours() % 12}${ampm}`;
      }
      table.appendChild(tr);
    }
    tableDiv.appendChild(table);
  }
  calendar.appendChild(tableDiv);
}