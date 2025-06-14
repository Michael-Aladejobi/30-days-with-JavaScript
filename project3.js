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

function addContact() {
  const name = prompt("Name: ");
  const email = prompt("Email: ");

  const contact = {
    name: name,
    email: email,
  };

  contacts.push(contact);
}
function deleteContact() {}
function searchContact() {}
function listContact(contact) {
  for (contact in contacts) {
    console.log(contact.name);
    console.log(contact.email);
  }
  console.log(contacts);
}

const contacts = [];
let keepGoing = true;
while (true) {
  const number = prompt("Enter an operation (1-5): ");

  switch (number) {
    case "1":
      addContact();
      break;

    case "2":
      deleteContact();
      break;

    case "3":
      listContact(contacts); //parse contact
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
