# Emoji

This repository contains the emoji map file that KidzIdeazTECH pulls from. Want your own emoji added? Think it's something useful but dont want to pay the 750 KidzCoin? You've come to the right place.

## If you have an emoji you want to add, simply convert it to base64 type and add it to emoji.txt (JSON format) create a pull request

## Use KidzIdeazTECH Emoji in your own app
We are in the process of converting all emoji to Base64. Some emoji may not work, unless you download them from KidzIdeazTECH and put them in the same location on your server.

**WARNING: Some emoji's have been downloaded from the premium website flaticon.com, for which KidzIdeazTECH has a licence. Do not use the pre-installed emoji in your own app without purchasing a premium subscription**

### Installation
1. Put the contents of emoji.js somewhere where the code you want to execute can get to it
2. Run Emoji("string to emojify")
3. Emoji() will automatically return the string with all emoji keys (e.g. :heart:) converted to imgs, with the src pre-filled and the class emoji (e.g. <img class='emoji' src='data:image...'>). You can set your own CSS for the Emoji, or copy the CSS from emoji.css
4. Don't forget to display the string as HTML
