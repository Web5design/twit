# twit v0.0.5
### Your Custom Twitter Widget : "Embed Tweets The Right Way"

### DEMO
* [http://grayghostvisuals.koding.com/twit](http://grayghostvisuals.koding.com/twit)
* Green light for any browser on all Operating Systems (Windows, Mac, Linux)

[![http://grayghostvisuals.koding.com/twit](http://static.grayghostvisuals.com/github/twit.png)](http://grayghostvisuals.koding.com/twit)


### TWIT'S RECIPE
#### <code>index.html</code>
<pre>
<code>
&lt;head&gt;
&lt;!-- jQuery --&gt;
&lt;script src=&quot;//ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js&quot;&gt;&lt;/script&gt;
&lt;script&gt;window.jQuery || document.write(&#39;&lt;script src=&quot;js/vendor/jquery-1.8.0.min.js&quot;&gt;&lt;\/script&gt;&#39;)&lt;/script&gt;

&lt;!-- Twit --&gt;
&lt;script src=&quot;js/twit.js&quot; async&gt;&lt;/script&gt;
&lt;/head&gt;

&lt;body&gt;
&lt;!-- twit --&gt;
&lt;div id=&quot;twit-container&quot;&gt;
    &lt;ul id=&quot;twitter_update_list&quot;&gt;
        &lt;li id=&quot;twitter_feed&quot;&gt;&lt;/li&gt;
    &lt;/ul&gt;
&lt;/div&gt;
&lt;!-- twit --&gt;
&lt;/body&gt;
</code>
</pre>

### USERNAME and TWIT DISPLAY SETUP
#### <code>twit.js</code>
<pre>
<code>
// Load Twit
window.onload = function() {
    var ajax_load            = &quot;&lt;img class=&#39;twit-loader&#39; src=&#39;img/loading.gif&#39; alt=&#39;Loading...&#39;&gt;&quot;,
        twitter_preferences  = {
            count    : [enter_twit_count_here],
            username : &#39;[username_goes here]&#39;
        },
        twitterUrl = &#39;http://twitter.com/statuses/user_timeline.json?screen_name=&#39;   twitter_preferences.username   &#39;&amp;callback=twitterCallback&amp;count=&#39;   twitter_preferences.count,
        script     = document.createElement(&#39;script&#39;);

    $(&quot;#twitter_feed&quot;).html(ajax_load);

    script.setAttribute(&#39;src&#39;, twitterUrl);
    script.setAttribute(&#39;async&#39;, true);

    document.body.appendChild(script);
};
</code>
</pre>

### GOTCHYAS
1. Unauthenticated Twitter API calls are permitted 150 requests per hour [https://dev.twitter.com/docs/rate-limiting](https://dev.twitter.com/docs/rate-limiting)

2. Retweets and favorites will not display currently. Only single user tweets will display at the moment (this will eventually change)

### IN THE PIPELINE
1. jQuery Plugin &rarr; checkout our [jQueryPlugin feature branch](https://github.com/grayghostvisuals/twit/tree/feature/jQueryPlugin)

2. Due to unauthenticated Twitter API requests being limited to 150 per hour we're working out a way to cache them properly. Feel free to chime in if you have a better way or are great with Twitter's oAuth (350 per hour)

### CONTRIBUTING REQUIREMENTS
1. No Whitespace
2. Play Nice
3. Keep it simple stupid
4. Use a clean branching model with forks (We use Gitflow Model w/SourceTree: Master &rarr; Develop &rarr; Feature &rarr; Hot Fix &rarr; Release)
5. Don't shoot the bird

## CONTRIBUTORS
We would like to thank the following contributors and their awesome-nesses...

&#10026; [Tim Pietrusky](https://github.com/TimPietrusky)
  1. JSHint corrections (twit.js)
  2. Callback Function Rewrites (twit.js)
  3. Twitter API Unauthenticated calls research