function handleFormSubmit(event) {
    event.preventDefault();

    const userDetails = {
      username: event.target.username.value,
      email: event.target.email.value,
      phone: event.target.phone.value
    };

    localStorage.setItem(userDetails.email, JSON.stringify(userDetails));

    function showUserDetails() {
      const parent = document.getElementById('userList');
      parent.innerHTML = '';

      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const user = JSON.parse(localStorage.getItem(key));

        const li = document.createElement('li');
        li.innerHTML = `${user.username} - ${user.email} - ${user.phone}`;
        parent.appendChild(li);

        // adding delete button
        const delButton = document.createElement('button');
        delButton.type = 'button';
        delButton.textContent = 'Delete';
        
        delButton.onclick = () => {
          parent.removeChild(li);
          localStorage.removeItem(user.email);
        };
        li.appendChild(delButton);

        // adding edit button
        const editButton = document.createElement('button');
        editButton.type = 'button';
        editButton.textContent = 'Edit';

        editButton.onclick = () => {
    parent.removeChild(li);
    localStorage.removeItem(user.email);
    document.getElementById('username').value = user.username;
    document.getElementById('email').value = user.email;
    document.getElementById('phone').value = user.phone;
  };
  li.appendChild(editButton)
      }
    }

    showUserDetails();
  }

module.exports = handleFormSubmit;
