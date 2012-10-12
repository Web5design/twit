// Twitter Status Callback
function twitterCallback(tweet) {

    var statusHTML = [];

    for (var i=0; i < tweet.length; i++){

        // documentaiton @ dev.twitter.com/docs/platform-objects/users
        var profileimageURL = tweet[i].user.profile_image_url,
            username        = tweet[i].user.screen_name,
            status          = tweet[i].text;

        status = status.replace(/((https?|s?ftp|ssh)\:\/\/[^"\s<>]*[^.,;'">\:\s<>\)\]\!])/g, replaceUrl);
        status = status.replace(/\B@([_a-z0-9]+)/ig, replaceReply);

        statusHTML.push(
            '<li class="twit">
                <ul class="twit-list">
                    <li class="twit-info">
                        <a href="http://twitter.com/' + username + '" class="link" rel="me"><img src="' + profileimageURL + '" alt="'+ username + 'twitter avatar" class="avatar"></a>
                    </li>

                    <li class="twit-info">
                        <a href="http://twitter.com/' + username + '" class="link" rel="author">' + '@' + username + '</a>
                    </li>

                    <li class="twit-info">
                        <small class="twit-meta">
                            <time datetime="' + relative_time(tweet[i].created_at) + '" class="twit-timestamp" pubdate>
                                Tweet Posted : <a href="http://twitter.com/' + username + '/statuses/' + tweet[i].id_str + '" class="link">' + relative_time(tweet[i].created_at) + '</a>
                            </time>
                        </small>
                    </li>

                    <li class="twit-info">
                        <p class="twit-status">' + status + '</p>
                    </li>
                </ul>
            </li>'
        );
    }

    document.getElementById('twitter_update_list').innerHTML = statusHTML.join('');
}

// Callback: Replace URL
function replaceUrl(url) {
    return '<a href="' + url + '">' + url + '</a>';
}

// Callback: Replace Reply
function replaceReply(reply) {
    return reply.charAt(0) + '<a href="http://twitter.com/' + reply.substring(1) + '">' + reply.substring(1) + '</a>';
}

// Twit Time Stamp
function relative_time(time_value) {

    // time variables
    var values      = time_value.split(" "),
        parsed_date = new Date(),
        months      = new Array('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'),
        m           = parsed_date.getMonth(),
        postedAt    = '';

    // time value
    time_value  = values[1] + " " + values[2] + " " + values[5] + " " + values[3];

    // set the time
    parsed_date.setTime(Date.parse(time_value));

    // add the post month day and year
    postedAt  = months[m];
    postedAt += " " + parsed_date.getDate();
    postedAt += ",";
    postedAt += " " + parsed_date.getFullYear();

    return postedAt;
}

// Load Twit
window.onload = function() {
    var ajax_load            = "<img class='twit-loader' src='img/loading.gif' alt='Loading...'>",
        twitter_preferences  = {
            count    : 2,
            username : 'gryghostvisuals'
        },
        twitterUrl = 'http://twitter.com/statuses/user_timeline.json?screen_name=' + twitter_preferences.username + '&callback=twitterCallback&count=' + twitter_preferences.count,
        script     = document.createElement('script');

    $("#twitter_feed").html(ajax_load);

    script.setAttribute('src', twitterUrl);
    script.setAttribute('async', true);

    document.body.appendChild(script);
};