
function showForm(formName) {
  const forms = ['login-form', 'register-form', 'contact-form'];
  forms.forEach(id => {
    const el = document.getElementById(id);
    if (id === formName + '-form') {
      el.classList.remove('hidden');
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      el.classList.add('hidden');
    }
  });
}
function validateContact() {
  const name = document.getElementById("contactName").value.trim();
  const email = document.getElementById("contactEmail").value.trim();
  const message = document.getElementById("contactMessage").value.trim();

  // Basic empty validation
  if (!name || !email || !message) {
    alert("Please fill all contact fields.");
    return false;
  }
   if (name.length < 3) {
    alert("Full name must be at least 3 characters long.");
    return false;
  }

  // Optional: Email format check
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email.");
    return false;
  }

  alert("Message sent! We'll get back to you soon.");
  return false; // prevent page reload
}


function validateLogin() {
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

  if (!email || !password) {
    alert("Please enter both email and password.");
    return false;
  }
  alert("Logged in successfully!");
  return false; 
}
function validateRegister() {
  const name = document.getElementById("regName").value.trim();
  const email = document.getElementById("regEmail").value.trim();
  const password = document.getElementById("regPassword").value.trim();
  const confirm = document.getElementById("regConfirm").value.trim();

  // Name validation (at least 3 characters)
  if (name.length < 3) {
    alert("Full name must be at least 3 characters long.");
    return false;
  }

  // Email validation (simple regex)
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  // Password validation (at least 6 characters)
  if (password.length < 6) {
    alert("Password must be at least 6 characters long.");
    return false;
  }

  // Match check
  if (password !== confirm) {
    alert("Passwords do not match!");
    return false;
  }

  alert("Registered successfully!");
  return false; // prevent form submission for demo
}
