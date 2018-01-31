Emoji = function (str) {
    var future = new Future();
    HTTP.call("GET", "https://raw.githubusercontent.com/kidzideaztech/emoji/master/emoji.txt", function (err, currentVersion) {
        map = JSON.parse(currentVersion.content);
        
        data = str.split(" ").map( function(num ){
                return map.hasOwnProperty(num) ? map[num] : num;
            }).join(" ");
        future["return"](data);
    });
    return future.wait();    
}
