const TwFollows = document.getElementById('TwFollows');

function httpGetAsync(theUrl, callback) {
    let xmlHttpReq = new XMLHttpRequest();
    xmlHttpReq.onreadystatechange = function () {
      if (xmlHttpReq.readyState == 4 && xmlHttpReq.status == 200)
        callback(xmlHttpReq.responseText);
    }
    xmlHttpReq.open("GET", theUrl, true); // true for asynchronous 
    xmlHttpReq.setRequestHeader('Client-Id','jfne30337w6uw0pdo7ryxbsihfnym7');
    xmlHttpReq.setRequestHeader('Client-Id','jfne30337w6uw0pdo7ryxbsihfnym7');
    xmlHttpReq.send(null);
}


console.log(httpGetAsync('https://api.twitch.tv/helix/users/follows?to_id=thatcookie_'))
TwFollows.innerHTML = httpGetAsync('https://api.twitch.tv/helix/users/follows?to_id=thatcookie_')