document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".signup-form");

  // Ensure the form element exists
  if (!form) {
    console.error("Form element with class 'signup-form' not found!");
    return;
  }

  // Handle form submission
  form.addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent default form submission

    // Collect form data
    const formData = new FormData(form);

    // Validation
    const errors = [];
    if (!data.name) errors.push("Name is required.");
    if (!data.email) errors.push("Email is required.");

    if (errors.length > 0) {
      // Output errors to console and alert user
      console.error("Form submission failed. Errors:", errors);
      alert("Please fill out all required fields.");
      return;
    }

    try {
      const reponse = await fetch("https://formspree.io/f/meoqwrpr", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (reponse.ok) {
        alert("Message sent successfully");
        form.requestFullscreen();
      } else {
        const errorData = await Response.json();
        console.error("Form submission error:", errorData);
        alert("Error. Please Try Again.");
      }
    } catch (error) {
      console.error("Network error:", error);
      alert("Network Error. Try Again.");
    }
  });
});
