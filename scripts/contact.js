document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".signup-form");

  // Ensure the form element exists
  if (!form) {
    console.error("Form element with class 'signup-form' not found!");
    return;
  }

  // Handle form submission
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission

    // Collect form data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    // Validation
    const errors = [];
    if (!data.name) errors.push("Name is required.");
    if (!data.email) errors.push("Email is required.");

    if (errors.length > 0) {
      // Output errors to console and alert user
      console.error("Form submission failed. Errors:", errors);
      alert("Please fill out all required fields.");
    } else {
      // Log form data to console
      console.log("Form submitted successfully:", data);

      // Reset the form
      form.reset();
    }
  });
});
