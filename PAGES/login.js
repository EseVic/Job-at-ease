let button = document.getElementById('btn');
button.addEventListener('click', signin)
function signin(event) {
    event.preventDefault()
    //var names = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Retrieve user from local storage
    //var username = JSON.parse(localStorage.getItem(names));
    var user = JSON.parse(localStorage.getItem(email));

    // Check if user exists and password matches
    if (user && user.password === password) {
      // Store authentication status in local storage
      localStorage.setItem('authenticated', 'true');
      //alert('Sign in successful.');
      window.location.href = 'joblisting.html'
    } else {
      alert('Invalid credentials.');
    }
  }