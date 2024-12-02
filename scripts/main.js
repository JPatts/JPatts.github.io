window.addEventListener("load", loadPage);

function loadPage(event) {
  console.log("The page has now loaded.");

  const bioParagraph = document.querySelector(".bio");
  console.log(bioParagraph.textContent);
}
