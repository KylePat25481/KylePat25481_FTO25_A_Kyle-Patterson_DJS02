// createpodcastcard.js
import { GenreService } from "../utils/GenreService.js";
import { DateUtils } from "../utils/DateUtils.js";

class PodcastCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._genres = [];
  }

  static get observedAttributes() {
    return ["title", "cover", "genres", "seasons", "updated"];
  }

  set genres(value) {
    if (Array.isArray(value)) {
      this._genres = value.map(v => Number(v));
    } else if (typeof value === "string") {
      // Clean string: remove spaces and split
      this._genres = value
        .split(",")
        .map(v => Number(v.trim()))
        .filter(v => !isNaN(v));
    }
    this.render();
  }

  get genres() {
    return this._genres;
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if (name === "genres") {
      this.genres = newVal;
    } else {
      this.render();
    }
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const title = this.getAttribute("title") || "Untitled Podcast";
    const cover = this.getAttribute("cover") || "./assets/default.jpg";
    const seasons = Number(this.getAttribute("seasons")) || 0;
    const updated = this.getAttribute("updated");

    const formattedDate = updated
      ? new Date(updated).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })
      : "";

    const updatedText = formattedDate ? `Updated ${formattedDate}` : "";

    // ✅ Use GenreService safely
    const genreTags = GenreService.getNames(this.genres)
      .map(name => `<span class="tag">${name}</span>`)
      .join("");

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          font-family: 'Inter', sans-serif;
          cursor: pointer;
        }
        .podcast-card {
          border-radius: 16px;
          background: #fff;
          box-shadow: 0 3px 10px rgba(0,0,0,0.08);
          transition: 0.2s;
          overflow: hidden;
        }
        .podcast-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 6px 16px rgba(0,0,0,0.12);
        }
        .cover {
          width: 90%;
          height: 250px;
          object-fit: cover;
          border-radius: 12px;
          display: block;
          margin: 1rem auto 0.75rem;
          background: #f3f4f6;
        }
        .content {
          padding: 0 1rem 1rem;
          display: flex;
          flex-direction: column;
        }
        h3 {
          font-size: 1rem;
          font-weight: 600;
          margin: 0.25rem 0 0.35rem 0;
          color: #111827;
          line-height: 1.3;
        }
        .meta {
          color: #374151;
          font-size: 0.85rem;
          font-weight: 500;
          margin-bottom: 0.5rem;
        }
        .genres {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 0.75rem;
        }
        .tag {
          background: #f3f4f6;
          color: #374151;
          padding: 4px 10px;
          border-radius: 8px;
          font-size: 0.75rem;
          font-weight: 500;
        }
        .updated {
          font-size: 0.8rem;
          color: #6b7280;
          margin-top: auto;
        }
      </style>

      <article class="podcast-card">
        <img class="cover" src="${cover}" alt="${title}" />
        <div class="content">
          <h3>${title}</h3>
          <div class="meta">${seasons ? `${seasons} season${seasons > 1 ? 's' : ''}` : 'No seasons listed'}</div>
          <div class="genres">${genreTags}</div>
          <p class="updated">${updatedText}</p>
        </div>
      </article>
    `;

    this.shadowRoot.querySelector(".podcast-card").addEventListener("click", () => {
      this.dispatchEvent(new CustomEvent("podcast-click", { bubbles: true, composed: true }));
    });
  }
}

customElements.define("podcast-card", PodcastCard);
