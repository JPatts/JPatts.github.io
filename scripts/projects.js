document.addEventListener("DOMContentLoaded", () => {
  const content = document.querySelector(".projects-content");

  // added this container last in order to force correct width amongst different elements on page
  const container = document.createElement("div");
  container.style.maxWdith = "1000px";
  container.style.margin = "0 auto";
  container.style.boxSizing = "border-box";
  container.style.padding = "1rem";
  container.style.border = "1px";
  container.style.borderWidth = "1px";
  content.appendChild(container);

  // main header
  const mainHeader = document.createElement("h1");
  mainHeader.textContent = "School Projects";
  mainHeader.style.textAlign = "center";
  mainHeader.style.marginBottom = "2rem";
  mainHeader.style.fontSize = "1.5rem";
  container.appendChild(mainHeader);

  // Create header and place on top left
  const AI_header = document.createElement("h1");
  AI_header.textContent = "Artificial Intelligence Research Project";
  AI_header.style.textAlign = "left";
  AI_header.style.marginBottom = "1rem";
  AI_header.style.fontSize = "1.3rem";
  AI_header.style.textDecoration = "underline";
  container.appendChild(AI_header);

  // Create the first row (Text box on the left, image on the right)
  const row1 = document.createElement("div");
  row1.style.display = "flex";
  row1.style.justifyContent = "space-between";
  row1.style.marginBottom = "2rem";

  // Text box (top left)
  const introTextBox = document.createElement("div");
  introTextBox.innerHTML = `
      <h2>Project Introduction</h2>
      <p>
      This project was the final assignment for Computer Science elective course CS-441 Artificial Intelligence. 
      My group members and I were tasked with comparing and contrasting two different types of AI techniques we learned about during the term.
      We took a literal approach and decided to pit two AI agents against each other in a game.
      Inspired by the classic arcade game PacMan we created a cat-and-mouse style game in which one AI agent attempts to catch the other while the other AI agent attempts to flee.
      </p>`;
  introTextBox.querySelector("h2").style.fontSize = "1.2rem";
  introTextBox.style.flex = "1";
  introTextBox.style.boxSizing = "border-box";
  introTextBox.style.padding = "1rem";

  // Image (top right)
  const projectImage = document.createElement("img");
  projectImage.src = "assets/noelle-rebekah-aWgC_TKRhUQ-unsplash.jpg";
  projectImage.alt = "Pac-Man arcade game machine";
  projectImage.style.flex = "1";
  projectImage.style.boxSizing = "border-box";
  projectImage.style.padding = "1rem";
  projectImage.style.width = "100%";
  projectImage.style.height = "500px";
  projectImage.style.objectFit = "contain";

  row1.appendChild(introTextBox);
  row1.appendChild(projectImage);
  container.appendChild(row1);

  // Description box (full width below row1)
  const descriptionBox = document.createElement("div");
  descriptionBox.innerHTML = `
      <h2>Project Description</h2>
      <p>
      My group members and I decided to create a Human vs Zombie python game in which the Human agent used the popular best-path algorithm A Star Search and the Zombie agent was one that would learn to preform better over time using a reinforcement system.
      This GIF above shows one of the earlier trials in which the Zombie agent does not have much experience chasing and catching the Human agent. 
      The zombie is making pseudo-random moves influenced by reward system that ecourages proximity to the Human agent.
      The path that is generation from the Human character is the A* Path visualized leading it to the small yellow square that is the furthest grid point found away from the Zombie agent.
      This furthest grid point from Zombie and A* Path is recalculated with every move.
      </p>`;
  descriptionBox.querySelector("h2").style.fontSize = "1.2rem";
  descriptionBox.style.width = "100%";
  descriptionBox.style.boxSizing = "border-box";
  descriptionBox.style.padding = "1rem";
  descriptionBox.style.marginBottom = "2rem";
  container.appendChild(descriptionBox);

  // Centered GIF (below description box)
  const gifContainer = document.createElement("div");
  gifContainer.style.textAlign = "center";
  gifContainer.style.marginBottom = "2rem";

  const projectGif = document.createElement("img");
  projectGif.src = "assets/human_vs_zombie_trial_1_recording.gif";
  projectGif.alt = "GIF shows 2D characters moving around on board";
  projectGif.style.maxWidth = "100%";
  projectGif.style.borderRadius = "8px";
  projectGif.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.3)";
  gifContainer.appendChild(projectGif);

  container.appendChild(gifContainer);

  // Paragraph below the GIF
  const gifDescription = document.createElement("p");
  gifDescription.textContent =
    "The zombie learns and improves its performance over time, creating more challenging gameplay as it adapts. The graph below shows the average number of steps taken per every ten trails. The graph shows as astonishing learning rate form the Zombie agent that begins the first ten trials making an average of 137,000 moves, and yet by trial 170 the Zombie has learned the minimum amount of moves to take in order to catch the Human agent and is able to preform at this advanced rate over and over again throughout the rest of the trials.";
  gifDescription.style.textAlign = "left";
  gifDescription.style.marginBottom = "1.5rem";
  gifDescription.style.padding = "1rem";
  gifDescription.style.boxSizing = "border-box";
  container.appendChild(gifDescription);

  // Additional image below description
  const additionalImage = document.createElement("img");
  additionalImage.src = "assets/AI_project_plot.png";
  additionalImage.alt = "Another visualization of the project.";
  additionalImage.style.display = "block";
  additionalImage.style.margin = "1.5rem auto";
  additionalImage.style.maxWidth = "100%";
  additionalImage.style.borderRadius = "8px";
  additionalImage.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.3)";
  container.appendChild(additionalImage);

  // Conclusion box
  const conclusionBox = document.createElement("div");
  conclusionBox.innerHTML = `
      <h2>Conclusion</h2>
      <p>
        My team partners and I were able to successfully implement a reinforcement learning system and create Python game viuals using PyGame to depict a cat-and-mouse style showdown between two different AI agents. This project was a fun beginning to hopefully more AI projects in the future. My team partners and I are planning many updates in which you can follow along and download the code and run it yourself here: <a href="https://github.com/JPatts/AI-Research-Project" target="_blank">AI-Research-Project</a>.
      </p>`;
  conclusionBox.style.width = "100%";
  conclusionBox.style.boxSizing = "border-box";
  conclusionBox.style.padding = "1rem";
  conclusionBox.style.marginBottom = "2rem";
  conclusionBox.style.paddingBottom = "2rem";
  container.appendChild(conclusionBox);
});
