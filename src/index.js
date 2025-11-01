import { createGrid } from "./views/createGrid.js";
import { createModal } from "./components/createModal.js";

createGrid();

// Listen for podcast selection from <podcast-card>
document.addEventListener("podcast-selected", (e) => {
  createModal.open(e.detail);
});

// Close modal when close button clicked
document.getElementById("closeModal").addEventListener("click", () => {
  createModal.close();
});


// Listen for podcast selection
document.addEventListener("podcast-selected", (e) => {
  const podcast = e.detail;
  const modal = document.getElementById("modal");

  document.getElementById("modalTitle").textContent = podcast.title;
  document.getElementById("modalImage").src = podcast.image;
  document.getElementById("modalDesc").textContent = podcast.description;
  document.getElementById("modalUpdated").textContent = 
    `Updated ${new Date(podcast.updated).toLocaleDateString()}`;

  const genres = document.getElementById("modalGenres");
  genres.innerHTML = "";
  (podcast.genreIds || []).forEach((id) => {
  const tag = document.createElement("span");
  tag.className = "tag";
  const g = GenreService.getGenreById(id);
  tag.textContent = g ? g.name : id;
  genres.appendChild(tag);
});


  modal.classList.remove("hidden");
});
