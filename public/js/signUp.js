const signupFormHandler = async function (event) {
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
      // If successful, redirect the browser to the home page
      document.location.replace("/");

    } else {
      alert(response.statusText);
    }
  } catch (error) {
    console.error("There was an error during the signup process:", error);
    alert(
      "There was an error processing your sign up request. Please try again later."
    );
  }
};


document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
console.log("Signup form listener attached!");
