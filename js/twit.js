// Twitter Status Callback
function twitterCallback2(tweet) {
    var statusHTML = [];

    for (var i=0; i < tweet.length; i++){
        
        var profileimageURL = tweet[i].user.profile_image_url,
            username        = tweet[i].user.screen_name,
            status          = tweet[i].text.replace(/((https?|s?ftp|ssh)\:\/\/[^"\s\<\>]*[^.,;'">\:\s\<\>\)\]\!])/g, function(url) { return '<a href="' + url + '">' + url + '</a>';

            }).replace(/\B@([_a-z0-9]+)/ig, function(reply) { return  reply.charAt(0) + '<a href="http://twitter.com/' + reply.substring(1) + '">' + reply.substring(1) + '</a>';

        });

        statusHTML.push('<li class="twit"><p class="twit_avatar"><a href="http://twitter.com/' + username + '/statuses/' + tweet[i].id_str + '"><img src="' + profileimageURL + '" alt="">' + '@' + username + '</a></p> <p class="twit_tweet">' + status + '</p> <p><small><time class="twit_timestamp" pubdate><a href="http://twitter.com/' + username + '/statuses/' + tweet[i].id_str + '">' + relative_time(tweet[i].created_at) + '</a></small></p></li>');
    }

    document.getElementById('twitter_update_list').innerHTML = statusHTML.join('');
}

// Twitter Time Stamp
function relative_time(time_value) {

    var values      = time_value.split(" "),
        parsed_date = new Date(),
        months      = new Array('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'),
        m           = parsed_date.getMonth(),
        postedAt    = '';

    time_value = values[1] + " " + values[2] + " " + values[5] + " " + values[3];
    parsed_date.setTime(Date.parse(time_value)); 

    postedAt = months[m];
    postedAt += " " + parsed_date.getDate();
    postedAt += ","
    postedAt += " " + parsed_date.getFullYear();

    return postedAt;
}