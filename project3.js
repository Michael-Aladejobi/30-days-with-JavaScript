const prompt = require("prompt-sync")();

function printInfo() {
  console.log("Contact Management System");
  console.log("-------------------------");
  console.log("1. Add a Contact");
  console.log("2. Delete a Contact");
  console.log("3. View Contacts");
  console.log("4. Search Contacts");
  console.log("5 Exit");
}

printInfo();

function addContact() {}
function deleteContact() {}
function searchContact() {}
function listContact(contact) {}

const number = prompt("Enter an operation (1-5): ");

let keepGoing = true;
while (true) {
  switch (number) {
    case "1":
      addContact();
      break;

    case "2":
      deleteContact();
      break;

    case "3":
      listContact(); //parse contact
      break;

    case "4":
      searchContact();
      break;

    case "5":
      keepGoing = false;
      break;

    default:
      console.log("unknown");
      break;
  }
}
