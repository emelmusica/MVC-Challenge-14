async function createBlogPost(event) {
    event.preventDefault();
  
    const title = document.querySelector("#title").value;
    const body = document.querySelector("#body").value;
    const createdBy = document.querySelector("#createdBy").value;
  
    const response = await fetch("/api/blogRoutes/create", {
      method: "POST",
      body: JSON.stringify({
        title,
        body,
        createdBy,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    if (response.ok) {
      document.location.replace("/"); // Redirect to the homepage after successful post
    } else {
      alert("Failed to create a new blog post.");
    }
  }
  
  document
    .querySelector("#create-blog-post-form")
    .addEventListener("submit", createBlogPost);
  