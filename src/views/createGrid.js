import { setupModal } from "../components/createModal.js";

/**
 * Grid Renderer - Responsible for rendering the grid of podcast cards.
 *
 * @principle SRP - Manages layout and rendering only; delegates card creation and modal logic elsewhere.
 */
export function createGrid(podcasts) {
  const grid = document.getElementById("podcastGrid");
  grid.innerHTML = "";

  podcasts.forEach(podcast => {
    const card = document.createElement("podcast-preview");
    card.setAttribute("cover", podcast.image);
    card.setAttribute("title", podcast.title);
    card.setAttribute("genres", podcast.genres.join(",")); // IDs
    card.setAttribute("seasons", podcast.seasons);
    card.setAttribute("updated", podcast.updated);

    grid.appendChild(card);
  });
}


