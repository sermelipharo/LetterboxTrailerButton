// ==UserScript==
// @name         Letterboxd Visible Trailer Button
// @author       Lex Fradski
// @icon         https://letterboxd.com/favicon.ico
// @namespace    http://t.me/LexShared
// @version      0.8
// @description  Add a visible trailer button in the center of the backdrop header on Letterboxd film pages
// @match        https://letterboxd.com/film/*/
// @grant        none
// @updateURL    https://raw.githubusercontent.com/sermelipharo/LetterboxTrailerButton/main/letterboxd-trailer.user.js
// @homepageURL  https://github.com/sermelipharo/LetterboxTrailerButton
// ==/UserScript==

(function () {
  "use strict";

  // Find the trailer link
  const trailerLink = document.querySelector(".js-watch-panel-trailer a");
  if (!trailerLink) return; // Exit if no trailer is found

  // Create a new button
  const trailerButton = document.createElement("a");
  trailerButton.href = trailerLink.href;
  trailerButton.className =
    "trailer-button text-slug js-video-zoom cboxElement"; // Use the "text-slug" style and add classes for the modal window
  trailerButton.setAttribute("data-track-category", "Trailer");
  trailerButton.innerText = "▶ Watch Trailer";

  // Style the button
  trailerButton.style.position = "absolute";
  trailerButton.style.top = "50%";
  trailerButton.style.left = "50%";
  trailerButton.style.transform = "translate(-50%, -50%)";
  trailerButton.style.zIndex = "1000";
  trailerButton.style.padding = "10px 20px";
  trailerButton.style.opacity = "0.8"; // Set semi-transparency

  // Find the backdrop element and add the button
  const backdrop = document.getElementById("backdrop");
  if (backdrop) {
    backdrop.style.position = "relative"; // Ensure the backdrop has relative positioning
    backdrop.appendChild(trailerButton);
  }
})();
