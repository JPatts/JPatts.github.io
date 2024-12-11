window.addEventListener("load", loadPage);

function loadPage(event) {
  console.log("The page has now loaded.");

  const bioParagraph = document.querySelector(".bio");
  console.log(bioParagraph.textContent);
}

document.addEventListener("DOMContentLoaded", () => {
  const mobileTopBar = document.querySelector(".mobile-top-bar");
  const sidebar = document.querySelector(".sidebar");

  if (mobileTopBar && sidebar) {
    mobileTopBar.addEventListener("click", () => {
      sidebar.classList.toggle("active");
    });
  }
});
