function handleFormSubmit(event) {
    event.preventDefault();
  
    const userDetails = {
      username: event.target.username.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
    };
  
    localStorage.setItem("User Details", JSON.stringify(userDetails));
  }
    
  
  module.exports = handleFormSubmit;