import { podcasts } from "../data.js";
import { GenreService } from "../utils/GenreService.js";
import "../components/createPodcastCard.js";

export function createGrid() {
  const grid = document.getElementById("podcastGrid");
  grid.innerHTML = "";

  podcasts.forEach((podcast) => {
    // 🧩 Dynamically find genre IDs by matching podcast ID
    const autoGenres = GenreService.genres
      .filter(g => g.shows.includes(podcast.id))
      .map(g => g.id);

    const card = document.createElement("podcast-card");
    card.setAttribute("title", podcast.title);
    card.setAttribute("cover", podcast.image);
    card.setAttribute("genres", (podcast.genreIds || autoGenres).join(",")); // ✅ fallback
    card.setAttribute("seasons", podcast.seasons);
    card.setAttribute("updated", podcast.updated);

    card.addEventListener("podcast-click", () => {
      const event = new CustomEvent("podcast-selected", { detail: podcast });
      document.dispatchEvent(event);
    });

    grid.appendChild(card);
  });
}
