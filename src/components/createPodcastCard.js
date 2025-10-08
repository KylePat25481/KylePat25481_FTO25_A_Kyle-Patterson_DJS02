import { formatLastUpdated } from "../utils/DateUtils.js";
import { getGenreNames } from "../utils/GenreService.js";

/**
 * PodcastPreview Web Component
 * Renders a podcast card with cover, title, genres, seasons, and last updated date.
 * 
 * Attributes:
 * - cover: string (URL of cover image)
 * - title: string
 * - genres: string (comma-separated genre IDs)
 * - seasons: number
 * - updated: string (ISO date)
 * 
 * Events:
 * - Dispatches "podcast-click" when clicked
 */
class PodcastPreview extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get observedAttributes() {
    return ["cover", "title", "genres", "seasons", "updated"];
  }

  attributeChangedCallback() {
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const cover = this.getAttribute("cover") || "";
    const title = this.getAttribute("title") || "Untitled Podcast";
    const genresAttr = this.getAttribute("genres") || "";
    const seasons = this.getAttribute("seasons") || "0";
    const updated = this.getAttribute("updated") || "";

    // Convert genre IDs to names using your service
    const genreNames = getGenreNames(genresAttr.split(",").map(g => g.trim()));

    // Format updated date
    const lastUpdated = updated ? formatLastUpdated(updated) : "N/A";

    this.shadowRoot.innerHTML = `
      <style>
        .card {
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.1);
          overflow: hidden;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          cursor: pointer;
          display: flex;
          flex-direction: column;
        }
        .card:hover {
          transform: translateY(-4px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }
        .cover {
          width: 100%;
          height: 180px;
          object-fit: cover;
        }
        .content {
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .title {
          font-size: 1.1rem;
          font-weight: bold;
          color: #222;
        }
        .genres {
          font-size: 0.85rem;
          color: #666;
        }
        .meta {
          font-size: 0.8rem;
          color: #444;
        }
      </style>

      <div class="card">
        <img src="${cover}" alt="${title}" class="cover"/>
        <div class="content">
          <div class="title">${title}</div>
          <div class="genres">${genreNames.join(", ")}</div>
          <div class="meta">${seasons} season(s) • Updated ${lastUpdated}</div>
        </div>
      </div>
    `;

    this.shadowRoot.querySelector(".card").addEventListener("click", () => {
      this.dispatchEvent(new CustomEvent("podcast-click", {
        detail: { title, cover, genres: genreNames, seasons, updated },
        bubbles: true,
        composed: true
      }));
    });
  }
}

customElements.define("podcast-preview", PodcastPreview);
