// Signup Form Validation
const signupForm = document.getElementById('signup-form');
const signupUsername = document.getElementById('signup-username');
const signupEmail = document.getElementById('signup-email');
const signupPassword = document.getElementById('signup-password');
const signupError = document.getElementById('signup-error');

signupForm.addEventListener('submit', function(event) {
  event.preventDefault();  // Prevent form submission for validation
  
  // Clear previous error message
  signupError.textContent = '';

  // Basic validation checks
  if (signupUsername.value === '' || signupEmail.value === '' || signupPassword.value === '') {
    signupError.textContent = 'All fields are required.';
    signupError.style.color = 'red';
  } else if (signupPassword.value.length < 6) {
    signupError.textContent = 'Password must be at least 6 characters.';
    signupError.style.color = 'red';
  } else {
    alert('Signup successful!');
    // Proceed with form submission or further processing
    signupForm.submit();
  }
});

// Login Form Validation
const loginForm = document.getElementById('login-form');
const loginUsername = document.getElementById('login-username');
const loginPassword = document.getElementById('login-password');
const loginError = document.getElementById('login-error');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();  // Prevent form submission for validation
  
  // Clear previous error message
  loginError.textContent = '';

  // Basic validation checks
  if (loginUsername.value === '' || loginPassword.value === '') {
    loginError.textContent = 'Both fields are required.';
    loginError.style.color = 'red';
  } else {
    alert('Login successful!');
    // Proceed with form submission or further processing
    loginForm.submit();
  }
});
