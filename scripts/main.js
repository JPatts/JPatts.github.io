window.addEventListener("load", loadPage);

function loadPage(event) {
  console.log("The page has now loaded.");

  const bioParagraph = document.querySelector(".bio");
  console.log(bioParagraph.textContent);
}

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
