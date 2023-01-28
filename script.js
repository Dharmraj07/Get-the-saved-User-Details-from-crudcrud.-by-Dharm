axios
  .get("https://crudcrud.com/api/62fa09e7f372441dae88156a3d53c081/contact-list")
  .then((response) => {
    // Get the contact list table
    var contactList = document.getElementById("contact-list");
    // Loop through the data
    response.data.forEach((contact) => {
      // Create a new row
      var row = document.createElement("tr");
      // Add the cells to the row
      var nameCell = document.createElement("td");
      nameCell.innerHTML = contact.name;
      row.appendChild(nameCell);
      var emailCell = document.createElement("td");
      emailCell.innerHTML = contact.email;
      row.appendChild(emailCell);
      var phoneCell = document.createElement("td");
      phoneCell.innerHTML = contact.phone;
      row.appendChild(phoneCell);
      // Append the row to the contact list
      contactList.appendChild(row);
    });
  })
  .catch((error) => {
    console.log(error);
  });

// Search function
document.getElementById("search-input").addEventListener("input", function () {
  // Get the search input value
  var searchValue = this.value.toLowerCase();
  // Get all the table rows
  var rows = document.getElementById("contact-list").getElementsByTagName("tr");
  // Loop through the rows
  for (var i = 0; i < rows.length; i++) {
    // Get the cells in the current row
    var cells = rows[i].getElementsByTagName("td");
    var match = false;
    // Loop through the cells
    for (var j = 0; j < cells.length; j++) {
      // Check if the cell value contains the search value
      if (cells[j].innerHTML.toLowerCase().indexOf(searchValue) > -1) {
        match = true;
        break;
      }
    }
    // Show or hide the row based on the search match
    rows[i].style.display = match ? "" : "none";
  }
});

const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const x = document.getElementById("name-input").value;
  const y = document.getElementById("email-input").value;
  const z = document.getElementById("phone-input").value;
  if (x === "" || y === "" || z === "") {
    alert("Please fill in all fields!");
  } else {
    // var contactList=document.getElementById('contact-list');
    // var row=document.createElement('tr');
    // row.innerHTML=`<td>${x}</td>
    //                 <td>${y}</td>
    //                 <td>${z}</td>`;
    // contactList.appendChild(row);

    // Send post request to server with contact information
    axios
      .post(
        "https://crudcrud.com/api/62fa09e7f372441dae88156a3d53c081/contact-list",
        {
          name: x,
          email: y,
          phone: z,
        }
      )
      .then(function (response) {
        console.log("hello world");
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  location.reload();
  document.getElementById("form").reset();
});
