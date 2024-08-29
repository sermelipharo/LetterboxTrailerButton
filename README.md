# Letterboxd Visible Trailer Button

![Static Badge](https://img.shields.io/badge/letterboxd-2C3440?logo=letterboxd) ![Static Badge](https://img.shields.io/badge/javascript-grey?style=flat&logo=javascript&logoColor=white) ![Static Badge](https://img.shields.io/badge/Tampermonkey-00485B?style=flat&logo=tampermonkey&logoColor=white) 

## Description
The *Letterboxd Visible Trailer Button* userscript enhances the user experience on Letterboxd by making the trailer link more visible and accessible. I realized that many users might not even know that trailers are available on the site, so I created this script to make the trailer button more prominent and aligned with the UX of other platforms.

## Installation

To use this userscript, you will need a userscript manager. [Tampermonkey](https://www.tampermonkey.net/) is recommended as it is compatible with most browsers. Violentmonkey is also supported.

### Steps:

1. **Install Tampermonkey or Violentmonkey:**
   - Go to the Tampermonkey or Violentmonkey website and choose the version that suits your browser. Install it as you would any other browser extension.

   - [Tampermonkey](https://www.tampermonkey.net/) is available for Chrome, Firefox, Edge, Safari, and Opera.
   - [Violentmonkey](https://violentmonkey.github.io/get-it/) is available for Chrome, Firefox, and Opera.

2. **Add the Userscript:**
   - Open your Tampermonkey or Violentmonkey dashboard by clicking the respective icon in your browser and selecting "Dashboard".
   - Click the following button to install the script:

     [![Install Userscript](https://img.shields.io/badge/-Install%20Userscript-brightgreen?style=for-the-badge&logo=Tampermonkey&logoColor=white)](https://raw.githubusercontent.com/sermelipharo/LetterboxTrailerButton/main/letterboxd-trailer.user.jsx)

   - Tampermonkey or Violentmonkey should prompt you to confirm the installation of the script. Approve the installation to proceed.

3. **Enable the Script:**
   - Ensure the script is enabled in the Tampermonkey or Violentmonkey dashboard. It should appear in the list of installed scripts with a check mark or enabled toggle next to it.

## Usage

Once installed, the script will automatically add a semi-transparent "Watch Trailer" button in the center of the backdrop header on Letterboxd film pages. Click this button to open the trailer in a modal window without leaving the page.

### Notes:
- The script works only on film pages that have a backdrop and where a trailer is available in the JustWatch database.

