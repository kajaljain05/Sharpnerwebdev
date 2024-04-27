function handleFormSubmit(event) {
    event.preventDefault();
  
    const userDetails = {
      username: event.target.username.value,
      email: event.target.email.value,
      phone: event.target.phone.value
    };
  
    localStorage.setItem(userDetails.email, JSON.stringify(userDetails)); 
  
    function showUserDetails(userDetails) {
      const parent = document.getElementById('userList');
      const li = document.createElement('li');
      li.innerHTML = `${userDetails.username} - ${userDetails.email} - ${userDetails.phone}`;
      parent.appendChild(li);
    }
  
    showUserDetails(userDetails);
  }
  
  module.exports = handleFormSubmit;
  