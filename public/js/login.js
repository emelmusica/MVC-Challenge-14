console.log("Login script loaded!");

const loginFormHandler = async (event) => {
  event.preventDefault();
  console.log("Login form submitted");

  // Collect values from the login form
  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();
  console.log("Sending email and password:", { email, password });

  if (email && password) {
    try {
      const response = await fetch("/api/userRoutes/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      });
      console.log("API Response:", response);

      if (response.ok) {
        console.log("Login successful");
        document.location.replace("/");
      } else {
        console.error("Login failed with status:", response.status);
        const errorMessage = await response.text();
        alert(`Login Error: ${errorMessage}`);
      }
    } catch (error) {
      console.error("There was an error:", error);
      alert(
        "There was an error processing your request. Please try again later."
      );
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#signup-name").value.trim();
  const email = document.querySelector("#signup-email").value.trim();
  const password = document.querySelector("#signup-password").value.trim();

  try {
    const response = await fetch("/api/userRoutes/signUp", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      console.log("Signup successful");
      // If successful, redirect the browser to the home page
      document.location.replace("/");
    } else {
      console.error("Signup failed with status:", response.status);
      const errorMessage = await response.text();
      alert(`Signup Error: ${errorMessage}`);
    }
  } catch (error) {
    console.error("There was an error during the signup process:", error);
    alert(
      "There was an error processing your sign up request. Please try again later."
    );
  }
};

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);
console.log("Login form listener attached!");

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
console.log("Signup form listener attached!");
