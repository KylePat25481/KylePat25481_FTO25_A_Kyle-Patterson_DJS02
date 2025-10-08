import { genres } from "../../data.js";

/**
 * Service to retrieve genre titles from genre IDs.
 *
 * @principle SRP - Single Responsibility Principle: Only responsible for mapping genre IDs to names.
 */
export const GenreService = {
  /**
   * Resolves an array of genre IDs into an array of genre titles.
   * @param {number[]} genreIds - Array of genre IDs.
   * @returns {string[]} Array of genre titles.
   */
  getNames(genreIds) {
    return genreIds.map(
      (id) => genres.find((g) => g.id === id)?.title || "Unknown"
    );
  },
};

const GENRES = {
  "1": "Technology",
  "2": "Education",
  "3": "Business",
  "4": "Health",
  "5": "Entertainment",
  "6": "News",
  "7": "Comedy",
};

/**
 * Convert an array of genre IDs into their human-readable names.
 * @param {string[]} ids - Array of genre IDs as strings.
 * @returns {string[]} Array of genre names.
 */
export function getGenreNames(ids = []) {
  return ids
    .map(id => GENRES[id] || "Unknown")
    .filter(Boolean);
}
