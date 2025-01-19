// Get modal and close button
const modal = document.getElementById("modal");
const closeModalButton = document.getElementById("closeModalButton");

// Get form elements
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const showRegister = document.getElementById("showRegister");
const showLogin = document.getElementById("showLogin");
const avatarUpload = document.getElementById("avatarUpload");
const avatarPreview = document.getElementById("avatarPreview");

// Automatically open the modal when the page loads
window.onload = function() {
    modal.style.display = "block";
};

// Close modal
closeModalButton.addEventListener("click", function() {
    modal.style.display = "none";
});

// Close modal when clicking outside the modal content
window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Show Register form
showRegister.addEventListener("click", function() {
    loginForm.style.display = "none";
    registerForm.style.display = "block";
});

// Show Login form
showLogin.addEventListener("click", function() {
    registerForm.style.display = "none";
    loginForm.style.display = "block";
});

// Preview uploaded avatar
avatarUpload.addEventListener("change", function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            avatarPreview.src = e.target.result;
            avatarPreview.style.display = "block";
        };
        reader.readAsDataURL(file);
    }
});

// Handle registration form submission
const registrationForm = document.getElementById('registrationForm');

registrationForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting to the server

    const username = registrationForm.querySelector('input[placeholder="Username"]').value;
    const email = registrationForm.querySelector('input[placeholder="Email"]').value;
    const password = registrationForm.querySelector('input[placeholder="Password"]').value;
    const confirmPassword = registrationForm.querySelector('input[placeholder="Confirm Password"]').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    // Simulate successful registration
    alert(`User ${username} registered successfully with email ${email}!`);
    modal.style.display = 'none'; // Close the modal after registration
});

// Dark mode toggle
const toggleThemeButton = document.getElementById('toggleTheme');

toggleThemeButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    modal.classList.toggle('dark-mode');
});
