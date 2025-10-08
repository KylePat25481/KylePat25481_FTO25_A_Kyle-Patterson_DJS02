import { GenreService } from "../utils/GenreService.js";
import { DateUtils } from "../utils/DateUtils.js";

/**
 * Initializes modal behavior:
 * - Listens for "podcast-click" events from <podcast-preview>.
 * - Populates and displays the modal with the clicked podcast’s details.
 */
export function setupModal() {
  const modal = document.getElementById("podcastModal");
  const modalContent = modal.querySelector(".modal-content");
  const closeBtn = modal.querySelector(".close-btn");

  // Close function (reusable)
  const closeModal = () => {
    modal.style.display = "none";
  };

  // Listen for podcast card clicks
  document.addEventListener("podcast-click", e => {
    const { title, cover, genres, seasons, updated } = e.detail;

    // Populate modal content dynamically
    modal.innerHTML = `
      <div class="modal-header">
        <h2>${title}</h2>
        <button class="close-btn">×</button>
      </div>
      <div class="modal-body">
        <img src="${cover}" alt="${title}" class="modal-cover" />
        <p><strong>Genres:</strong> ${genres.join(", ")}</p>
        <p><strong>Seasons:</strong> ${seasons}</p>
        <p><strong>Last Updated:</strong> ${updated}</p>
      </div>
    `;

    // Add event listener to the new close button
    modalContent.querySelector(".close-btn").addEventListener("click", closeModal);

    // Show modal
    modal.style.display = "block";
  });

  // Close on overlay click
  modal.addEventListener("click", e => {
    if (e.target === modal) closeModal();
  });

  // Close on escape key
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeModal();
  });

  // Also handle initial close button if it exists
  if (closeBtn) closeBtn.addEventListener("click", closeModal);
}
