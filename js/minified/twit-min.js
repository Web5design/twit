// Twitter Status Callback
function twitterCallback(e){var t=[];for(var n=0;n<e.length;n++){var r=e[n].user.profile_image_url,i=e[n].user.screen_name,s=e[n].text;s=s.replace(/((https?|s?ftp|ssh)\:\/\/[^"\s<>]*[^.,;'">\:\s<>\)\]\!])/g,replaceUrl);s=s.replace(/\B@([_a-z0-9]+)/ig,replaceReply);t.push('<li class="twit"><ul class="twit-list"><li class="twit-info"><a href="http://twitter.com/'+i+'" class="link" rel="me"><img src="'+r+'" alt="'+i+'twitter avatar" class="avatar"></a></li><li class="twit-info"><a href="http://twitter.com/'+i+'" class="link" rel="author">'+"@"+i+'</a></li><li class="twit-info"><small class="twit-meta"><time datetime="'+relative_time(e[n].created_at)+'" class="twit-timestamp" pubdate>Tweet Posted : <a href="http://twitter.com/'+i+"/statuses/"+e[n].id_str+'" class="link">'+relative_time(e[n].created_at)+'</a></time></small></li><li class="twit-info"><p class="twit-status">'+s+"</p></li></ul></li>")}document.getElementById("twitter_update_list").innerHTML=t.join("")}function replaceUrl(e){return'<a href="'+e+'">'+e+"</a>"}function replaceReply(e){return e.charAt(0)+'<a href="http://twitter.com/'+e.substring(1)+'">'+e.substring(1)+"</a>"}function relative_time(e){var t=e.split(" "),n=new Date,r=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"),i=n.getMonth(),s="";e=t[1]+" "+t[2]+" "+t[5]+" "+t[3];n.setTime(Date.parse(e));s=r[i];s+=" "+n.getDate();s+=",";s+=" "+n.getFullYear();return s}window.onload=function(){var e="<img class='twit-loader' src='img/loading.gif' alt='Loading...'>",t={count:1,username:"gryghostvisuals",retweets:!0,replies:!1},n="http://api.twitter.com/1/statuses/user_timeline.json?screen_name="+t.username+"&callback=twitterCallback&count="+t.count+"&include_rts="+t.retweets+"&exclude_replies="+t.replies;script=document.createElement("script");$("#twitter_feed").html(e);script.setAttribute("src",n);script.setAttribute("async",!0);document.body.appendChild(script)};