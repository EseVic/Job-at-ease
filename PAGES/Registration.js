function signup() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Check if user exists in local storage
    if (localStorage.getItem(email)) {
      alert('User already exists.');
      return;
    }

    if (localStorage.getItem = )

    // Create user object and store in local storage
    var user = {
      email: email,
      password: password
    };

    localStorage.setItem(email, JSON.stringify(user));
    alert('Registration successful. Please login.');
    //window.location.href = 'postajob.html'
  }