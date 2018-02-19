# Emoji

This repository contains the emoji map file that KidzIdeazTECH pulls from. Want your own emoji added? Think it's something useful but dont want to pay the 750 KidzCoin? You've come to the right place.

## If you have an emoji you want to add, simply convert it to base64 type and add it to emoji.txt (JSON format) create a pull request

## Use KidzIdeazTECH Emoji in your own app
We are in the process of converting all emoji to Base64. Some emoji may not work, unless you download them from KidzIdeazTECH and put them in the same location on your server.

**WARNING: Some emoji in emoji.txt are premium emoji downloaded from the site flaticon.com, for which KidzIdeazTECH has a licence. You should not use the emoji.txt file if you have not purchased a licence. Instead, use emojiFREE.txt.**

### Installation
1. Put the contents of emoji.js somewhere where the code you want to execute can get to it
2. Run Emoji("string to emojify")
3. Emoji() will automatically return the string with all emoji keys (e.g. :heart:) converted to imgs, with the src pre-filled and the class emoji (e.g. <img class='emoji' src='data:image...'>). You can set your own CSS for the Emoji, or copy the CSS from emoji.css
4. Don't forget to display the string as HTML
