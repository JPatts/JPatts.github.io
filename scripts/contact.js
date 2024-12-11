document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".signup-form");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    const name = form.querySelector('input[name="name"]')?.value;
    const email = form.querySelector('input[name="email"]')?.value;

    if (!name || !email) {
      alert("Please fill out all required fields");
      event.preventDefault(); // stops submission if validation fails
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuButton = document.querySelector(".mobile-menu-button");
  const sidebar = document.querySelector(".sidebar");

  if (mobileMenuButton && sidebar) {
    mobileMenuButton.addEventListener("click", () => {
      /*
      window.scrollTo({ top: 0, behavior: "smooth" });
      */
      sidebar.classList.toggle("active");
    });
  }
});
