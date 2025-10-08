import { podcasts } from "../data.js";
import { createGrid } from "./views/CreateGrid.js";
import { setupModal } from "./components/createModal.js";
import "../src/components/CreatePodcastCard.js"; 

/**
 * Bootstraps the podcast app:
 * - Renders podcast grid
 * - Sets up modal event listeners
 */
document.addEventListener("DOMContentLoaded", () => {
  // Render all podcasts in the grid
  createGrid(podcasts);

  // Setup modal behavior (listens for "podcast-click")
  setupModal();
});
