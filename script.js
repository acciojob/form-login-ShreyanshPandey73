function getFormvalue() {
    //Write your code here
var form = document.getElementById("form1");

  // Retrieve the values of the first name and last name fields
  var firstName = form.elements.firstName.value;
  var lastName = form.elements.lastName.value;

  // Display the first name and last name using an alert
  alert("First Name: " + firstName + "\nLast Name: " + lastName);
}
