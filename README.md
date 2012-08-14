# twit v0.0.3
=====================================================================================

## DEMO
* [http://grayghostvisuals.koding.com/twit](http://grayghostvisuals.koding.com/twit)

## ABOUT
Your Custom Twitter Widget : "Embed Tweets The Right Way"



## TWIT'S RECIPE
<pre>
<code>
&lt;head&gt;
&lt;!-- jQuery --&gt;
&lt;script src=&quot;//ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js&quot;&gt;&lt;/script&gt;
&lt;script&gt;window.jQuery || document.write(&#39;&lt;script src=&quot;js/vendor/jquery-1.8.0.min.js&quot;&gt;&lt;\/script&gt;&#39;)&lt;/script&gt;

&lt;!-- Twit --&gt;
&lt;script src=&quot;js/minified/twit-min.js&quot; async&gt;&lt;/script&gt;
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

## GOTCHYAS
* Unauthenticated Twitter API calls are permitted 150 requests per hour [https://dev.twitter.com/docs/rate-limiting](https://dev.twitter.com/docs/rate-limiting)

## CONTRIBUTORS
We would like to thank the following contributors and their awesome-nesses

* &#10026; [Tim Pietrusky](https://github.com/TimPietrusky)
  1. JSHint corrections (twit.js)
  2. Callback Function Rewrites (twit.js)
  3. Twitter API Unauthenticated calls research