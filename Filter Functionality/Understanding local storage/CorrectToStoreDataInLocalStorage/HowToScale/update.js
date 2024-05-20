function handleFormSubmit(event) {
    event.preventDefault();
    const userDetails = {
      username: event.target.username.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
    };
  
    // Make POST request to save user details
    axios
      .post(
        "https://crudcrud.com/api/5519d12fca344fd6b10665aea264519d/appointmentData",
        userDetails
      )
      .then((response) => {
        // Display the new user details on screen
        displayUserOnScreen(response.data);
        // Clear input fields after successful submission
        clearInputFields();
      })
      .catch((error) => console.log(error));
  }
  
  function displayUserOnScreen(userDetails) {
    const userItem = document.createElement("li");
    userItem.appendChild(
      document.createTextNode(
        `${userDetails.username} - ${userDetails.email} - ${userDetails.phone}`
      )
    );
  
    const deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("Delete"));
    userItem.appendChild(deleteBtn);
  
    const editBtn = document.createElement("button");
    editBtn.appendChild(document.createTextNode("Edit"));
    userItem.appendChild(editBtn);
  
    const userList = document.querySelector("ul");
    userList.appendChild(userItem);
  
    deleteBtn.addEventListener("click", function (event) {
      // Make DELETE request to delete the user
      const userId = userDetails._id; // Assuming _id is the unique identifier for the user
      axios
        .delete(`https://crudcrud.com/api/5519d12fca344fd6b10665aea264519d/appointmentData/${userId}`)
        .then(() => {
          userList.removeChild(userItem);
          // Optionally, remove user data from local storage or any other storage mechanism
          localStorage.removeItem(userDetails.email);
        })
        .catch((error) => console.log(error));
    });
  
    editBtn.addEventListener("click", function (event) {
      // Populate input fields with user details for editing
      populateInputFields(userDetails);
  
      // Remove the user item from the list after clicking edit
      userList.removeChild(userItem);
      // Optionally, remove user data from local storage or any other storage mechanism
      localStorage.removeItem(userDetails.email);
    });
  }
  
  function populateInputFields(userDetails) {
    // Populate input fields with user details for editing
    document.getElementById("username").value = userDetails.username;
    document.getElementById("email").value = userDetails.email;
    document.getElementById("phone").value = userDetails.phone;
  }
  
  function clearInputFields() {
    // Clear input fields after successful form submission
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
  }
  
  
  