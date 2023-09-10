const logout = async () => {
    try {
      const response = await fetch("/api/userRoutes/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        document.location.replace("/");
      } else {
        alert("Logout failed. Please try again.");
      }
    } catch (error) {
      console.error("An error occurred during logout:", error);
      alert("An error occurred during logout. Please try again later.");
    }
  };
  
  document.querySelector("#logout-link").addEventListener("click", logout);
  