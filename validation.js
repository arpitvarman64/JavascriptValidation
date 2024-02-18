document.addEventListener("DOMContentLoaded", function () {
  // Add event listeners for real-time validation
  document
    .getElementById("firstName")
    .addEventListener("input", validateFirstName);
  document
    .getElementById("lastName")
    .addEventListener("input", validateLastName);
  document.getElementById("dob").addEventListener("input", validateDob);
  document
    .getElementById("collegeName")
    .addEventListener("input", validateCollegeName);
  document.getElementById("degree").addEventListener("change", validateDegree); // Changed to 'change'
  document.getElementById("course").addEventListener("input", validateCourse);
  document.getElementById("address").addEventListener("input", validateAddress);
  document
    .getElementById("bloodGroup")
    .addEventListener("input", validateBloodGroup);
  document.getElementById("pincode").addEventListener("input", validatePincode);
  document.getElementById("submitBtn").addEventListener("click", validateForm);
});

// First Name-----

function validateFirstName() {
  var firstNameInput = document.getElementById("firstName");
  var firstNameError = document.getElementById("firstNameError");
  var firstNameValue = firstNameInput.value.trim();

  // Check if the field is empty
  if (firstNameValue === "") {
    firstNameError.textContent = "Please enter a first name.";
  }
  // Check if the input contains only alphabets
  else if (!/^[a-zA-Z]+$/.test(firstNameValue)) {
    firstNameError.textContent = "First name should contain only alphabets.";
  }
  else if (!/^[A-Z]/.test(firstNameValue)) {
    firstNameError.textContent = "First letter should be capital.";
  }
  // Validate the datatype (alphabets only)
  else if (typeof firstNameValue !== "string") {
    firstNameError.textContent = "Invalid data type for first name.";
  }
  // Check if the length is within the specified range
  else if (firstNameValue.length < 2 || firstNameValue.length > 15) {
    firstNameError.textContent =
      "First name must be between 2 and 15 characters.";
  }
  // All criteria met, clear the error message
  else {
    firstNameError.textContent = "";
  }
}

// Last Name------

function validateLastName() {
  var lastNameInput = document.getElementById("lastName");
  var lastNameError = document.getElementById("lastNameError");
  var lastNameValue = lastNameInput.value.trim();

  // Check if the field is empty
  if (lastNameValue === "") {
    lastNameError.textContent = "Please enter a last name.";
  }
  // Check if the input contains only alphabets
  else if (!/^[a-zA-Z]+$/.test(lastNameValue)) {
    lastNameError.textContent = "Last name should contain only alphabets.";
  }
  else if (!/^[A-Z]/.test(lastNameValue)) {
    lastNameError.textContent = "First letter should be capital.";
  }
  // Validate the datatype (alphabets only)
  else if (typeof lastNameValue !== "string") {
    lastNameError.textContent = "Invalid data type for last name.";
  }
  // Check if the length is within the specified range
  else if (lastNameValue.length < 2 || lastNameValue.length > 15) {
    lastNameError.textContent =
      "Last name must be between 2 and 15 characters.";
  }
  // All criteria met, clear the error message
  else {
    lastNameError.textContent = "";
  }
}

// DOB validation---------

function validateDob() {
  var dobInput = document.getElementById("dob");
  var dobError = document.getElementById("dobError");
  var dobValue = dobInput.value;

  var userDob = new Date(dobValue);
  var today = new Date();

  if (dobValue === "") {
    dobError.textContent = "Please enter your date of birth.";
  } else if (
    userDob.getTime() > today.getTime() ||
    isToday(userDob) ||
    !isAge18Plus(userDob)
  ) {
    dobError.textContent =
      "Invalid date of birth or age must be between 18 and 100.";
  } else {
    dobError.textContent = "";
  }
}

// College Name-----

function validateCollegeName() {
  var collegeNameInput = document.getElementById("collegeName");
  var collegeNameError = document.getElementById("collegeNameError");
  var collegeNameValue = collegeNameInput.value.trim();

  // Check if the field is empty
  if (collegeNameValue === "") {
    collegeNameError.textContent = "Please enter your college name.";
  }
  // Check if the first letter is capital
  else if (!/^[A-Z]/.test(collegeNameValue)) {
    collegeNameError.textContent = "First letter should be capital.";
  }
  // Check if only one comma is allowed
  else if ((collegeNameValue.match(/,/g) || []).length > 1) {
    collegeNameError.textContent = "Only one comma is allowed.";
  }
  // Check if three continuous same letters are not allowed
  else if (/([a-zA-Z])\1\1/.test(collegeNameValue)) {
    collegeNameError.textContent =
      "Three continuous same letters are not allowed.";
  }
  // Check if only one space is allowed
  else if (/ {2,}/.test(collegeNameValue)) {
    collegeNameError.textContent = "Only one space is allowed.";
  }
  // All criteria met, clear the error message
  else {
    collegeNameError.textContent = "";
  }
}

function validateDegree() {
  var degreeInput = document.getElementById("degree");
  var degreeError = document.getElementById("degreeError");
  var degreeValue = degreeInput.value.trim();

  // Check if the field is empty or the default option is selected
  if (degreeValue === "" || degreeValue === "Select your Degree") {
    degreeError.textContent = "Please select your degree.";
  } else {
    degreeError.textContent = "";
  }
}

// Course-----------

function validateCourse() {
  var courseInput = document.getElementById("course");
  var courseError = document.getElementById("courseError");
  var courseValue = courseInput.value.trim();

  // Validate for a single capital letter at the beginning
  if (!/^[A-Z]/.test(courseValue)) {
    courseError.textContent = "Course should start with a capital letter.";
  }
  // Validate for only one special character (dot) allowed
  else if ((courseValue.match(/\./g) || []).length > 1) {
    courseError.textContent = "Only one dot is allowed in the course.";
  }
  // All criteria met, clear the error message
  else {
    courseError.textContent = "";
  }
}

function validateAddress() {
  var addressInput = document.getElementById("address");
  var addressError = document.getElementById("addressError");
  var addressValue = addressInput.value.trim();

  if (addressValue === "") {
    addressError.textContent = "Please enter your address.";
  } else {
    addressError.textContent = "";
  }
}

// Blood Group------

function validateBloodGroup() {
  var bloodGroupInput = document.getElementById("bloodGroup");
  var bloodGroupError = document.getElementById("bloodGroupError");
  var bloodGroupValue = bloodGroupInput.value.trim();

  // You can add a regular expression to validate blood group format
  var bloodGroupRegex = /^(A|B|AB|O)[\+\-]$/;

  if (bloodGroupValue === "" || !bloodGroupRegex.test(bloodGroupValue)) {
    bloodGroupError.textContent = "Invalid blood group format.";
  } else {
    bloodGroupError.textContent = "";
  }
}

// Pincode-------

function validatePincode() {
  var pincodeInput = document.getElementById("pincode");
  var pincodeError = document.getElementById("pincodeError");
  var pincodeValue = pincodeInput.value.trim();

  // Add your pincode validation logic here
  // For example, if the pincode should be a 6-digit number
  var pincodeRegex = /^[1-9]\d{5}$/;

  if (pincodeValue === "" || !pincodeRegex.test(pincodeValue)) {
    pincodeError.textContent =
      "Invalid pincode. Please enter a valid 6-digit number that doesn't start with 0.";
  } else {
    pincodeError.textContent = "";
  }
}
function validateForm() {
  validateFirstName();
  validateLastName();
  // validateDob();
  validateCollegeName();
  // validateDegree();
  validateCourse();
  validateAddress();
  validateBloodGroup();
  validatePincode();

  if (
    document.getElementById("firstNameError").textContent === "" &&
    document.getElementById("lastNameError").textContent === "" &&
    // document.getElementById("dobError").textContent === "" &&
    document.getElementById("collegeNameError").textContent === "" &&
    // document.getElementById("degreeError").textContent === "" &&
    document.getElementById("courseError").textContent === "" &&
    document.getElementById("addressError").textContent === "" &&
    document.getElementById("bloodGroupError").textContent === "" &&
    document.getElementById("pincodeError").textContent === ""
  ) {
    // Redirect to the next page
    window.location.href = "welcome.html"; // Change "next_page.html" to the actual URL of your next page
  } else {
    alert("Please fill in all the required fields correctly.");
  }
}
