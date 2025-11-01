import { podcasts } from "../data.js";
import "../components/createPodcastCard.js";

/**
 * Renders podcast cards in the grid using the <podcast-card> Web Component.
 */
export function createGrid() {
  const grid = document.getElementById("podcastGrid");
  grid.innerHTML = "";

  podcasts.forEach((podcast) => {
    const card = document.createElement("podcast-card");
    card.setAttribute("title", podcast.title);
    card.setAttribute("cover", podcast.image);
    card.setAttribute("genres", (podcast.genreIds || []).join(","));
    card.setAttribute("seasons", podcast.seasons);
    card.setAttribute("updated", podcast.updated);

    // Listen for the custom click event from the web component
    card.addEventListener("podcast-click", () => {
      const event = new CustomEvent("podcast-selected", { detail: podcast });
      document.dispatchEvent(event);
    });

    grid.appendChild(card);
  });
}
