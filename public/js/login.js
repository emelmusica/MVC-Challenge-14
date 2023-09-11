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
        console.log(response.statusText);
        document.location.replace("/");
      } else {
        alert(response.statusText);
      }
    } catch (error) {
      console.error("There was an error:", error);
      alert(
        "There was an error processing your request. Please try again later."
      );
    }
  }
};


document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);
console.log("Login form listener attached!");