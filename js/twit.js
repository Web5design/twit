// Twitter Status Callback
function twitterCallback(tweet) {
  
    var statusHTML = [];
  
    for (var i=0; i < tweet.length; i++){
        
        var profileimageURL = tweet[i].user.profile_image_url,
          username      = tweet[i].user.screen_name,
          status        = tweet[i].text;
          
        status = status.replace(/((https?|s?ftp|ssh)\:\/\/[^"\s<>]*[^.,;'">\:\s<>\)\]\!])/g, replaceUrl);
        status = status.replace(/\B@([_a-z0-9]+)/ig, replaceReply);
  
        statusHTML.push('<li class="twit"><p><a href="http://twitter.com/' + username + '/statuses/' + tweet[i].id_str + '" class="link"><img src="' + profileimageURL + '" alt="twitter avatar icon" class="twit-avatar">' + '@' + username + '</a></p> <p class="twit-status">' + status + '</p> <p class="twit-meta"><small><time datetime="' + relative_time(tweet[i].created_at) + '" class="twit-timestamp" pubdate><a href="http://twitter.com/' + username + '/statuses/' + tweet[i].id_str + '" class="link">' + relative_time(tweet[i].created_at) + '</a></time></small></p></li>');
    }
  
    document.getElementById('twitter_update_list').innerHTML = statusHTML.join('');
}
  
// Callback: Replace URL
function replaceUrl(url) { 
    return '<a href="' + url + '">' + url + '</a>';
}
  
// Callback: Replace reply
function replaceReply(reply) {
    return reply.charAt(0) + '<a href="http://twitter.com/' + reply.substring(1) + '">' + reply.substring(1) + '</a>';
}

// Twitter Time Stamp
function relative_time(time_value) {
  
    var values    = time_value.split(" "),
        parsed_date = new Date(),
        months    = new Array('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'),
        m         = parsed_date.getMonth(),
        postedAt    = '';
  
    time_value = values[1] + " " + values[2] + " " + values[5] + " " + values[3];
    parsed_date.setTime(Date.parse(time_value));
  
    postedAt = months[m];
    postedAt += " " + parsed_date.getDate();
    postedAt += ",";
    postedAt += " " + parsed_date.getFullYear();
  
    return postedAt;
}

// Load Twit
window.onload = function() {
    var ajax_load        = "<img class='twit-loader' src='img/loading.gif' alt='Loading...'>",
        twitter_preferences  = {
            count    : 1,
            username : 'gryghostvisuals'
        },
        twitterUrl = 'http://twitter.com/statuses/user_timeline.json?screen_name=' + twitter_preferences.username + '&callback=twitterCallback&count=' + twitter_preferences.count,
        script     = document.createElement('script');
  
    $("#twitter_feed").html(ajax_load);
  
    script.setAttribute('src', twitterUrl);
    script.setAttribute('async', true);
  
    document.body.appendChild(script);
};