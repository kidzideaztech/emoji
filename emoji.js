// This code is designed to work on MeteorJS apps with the HTTP package.
// You may need to modify the function at line 4 to whatever function you want to use to make the HTTP call
// This call will get the latest emoji map, allowing you to integerate new emoji without reloading your app
Emoji = function (str) {
    try
    {
        const result = HTTP.call('GET', 'https://raw.githubusercontent.com/kidzideaztech/emoji/master/emoji.txt');
        // !!HEADS UP!! You should change the URL to https://raw.githubusercontent.com/kidzideaztech/emoji/master/emojiFREE.txt if you don't have a premium flaticon licence

        map = JSON.parse(result.content);
        
        data = str.split(" ").map( function(num ){
            return map.hasOwnProperty(num) ? map[num] : num;
        }).join(" ");

        return data;

    }
    catch (e)
    {
        console.error("Could not fetch emoji map");
        return str;
    }    
}
