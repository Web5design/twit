// Twitter Status Callback
function twitterCallback(e){var t=[];for(var n=0;n<e.length;n++){var r=e[n].user.profile_image_url,i=e[n].user.screen_name,s=e[n].text.replace(/((https?|s?ftp|ssh)\:\/\/[^"\s\<\>]*[^.,;'">\:\s\<\>\)\]\!])/g,function(e){return'<a href="'+e+'">'+e+"</a>"}).replace(/\B@([_a-z0-9]+)/ig,function(e){return e.charAt(0)+'<a href="http://twitter.com/'+e.substring(1)+'">'+e.substring(1)+"</a>"});t.push('<li class="twit"><p><a href="http://twitter.com/'+i+"/statuses/"+e[n].id_str+'" class="link"><img src="'+r+'" alt="twitter avatar icon" class="twit-avatar">'+"@"+i+'</a></p> <p class="twit-status">'+s+'</p> <p class="twit-meta"><small><time datetime="'+relative_time(e[n].created_at)+'" class="twit-timestamp" pubdate><a href="http://twitter.com/'+i+"/statuses/"+e[n].id_str+'" class="link">'+relative_time(e[n].created_at)+"</a></time></small></p></li>")}document.getElementById("twitter_update_list").innerHTML=t.join("")}function relative_time(e){var t=e.split(" "),n=new Date,r=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"),i=n.getMonth(),s="";e=t[1]+" "+t[2]+" "+t[5]+" "+t[3];n.setTime(Date.parse(e));s=r[i];s+=" "+n.getDate();s+=",";s+=" "+n.getFullYear();return s}window.onload=function(){var e="<img class='twit-loader' src='img/loading.gif' alt='Loading...'>",t={count:1,username:"gryghostvisuals"},n="http://twitter.com/statuses/user_timeline.json?screen_name="+t.username+"&callback=twitterCallback&count="+t.count,r=document.createElement("script");$("#twitter_feed").html(e);r.setAttribute("src",n);r.setAttribute("async",!0);document.body.appendChild(r)};