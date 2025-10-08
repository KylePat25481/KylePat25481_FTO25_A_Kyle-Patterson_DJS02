/**
 * Date Formatter - Utility function for date formatting.
 *
 * @principle SRP - Single Responsibility Principle: This module only formats dates and does not handle any unrelated logic.
 */
export const DateUtils = {
  /**
   * Formats a date string into a human-readable format.
   * @param {string} dateStr - ISO date string.
   * @returns {string} Formatted date string.
   */
  format(dateStr) {
    const date = new Date(dateStr);
    return `Updated ${date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })}`;
  },
};

export function formatLastUpdated(isoDate) {
  const date = new Date(isoDate);
  const now = new Date();
  const diffMs = now - date;
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (isNaN(date.getTime())) {
    return "Unknown";
  }

  if (diffDays < 1) {
    return "Today";
  } else if (diffDays === 1) {
    return "Yesterday";
  } else if (diffDays < 7) {
    return `${diffDays} days ago`;
  } else {
    return date.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }
}
