window.addEventListener("load", loadPage);

function loadPage(event) {
  console.log("The page has now loaded.");

  const bioParagraph = document.querySelector(".bio");
  console.log(bioParagraph.textContent);
}

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const sidebar = document.querySelector(".sidebar");

  if (hamburger && sidebar) {
    hamburger.addEventListener("click", () => {
      sidebar.classList.toggle("active");
    });
  }
});
