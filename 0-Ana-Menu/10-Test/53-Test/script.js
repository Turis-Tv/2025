// Get freeCodeCamp's channel
$.getJSON('https://wind-bow.gomix.me/twitch-api/streams/freecodecamp?callback=?', function(data) {
  console.log("freeCodeCamp:");
  console.log(data);
  $("#image0").attr("src","https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-profile_image-d9514f2df0962329-300x300.png");
  $("#image0").css("visibility","visible");
  $("#title0").text("freeCodeCamp");
  $("#anchor0").attr("data-src","freeCodeCamp");
  if (data.stream === null)
  { 
    $("#desc0").text("Offline");
    $("#channel0").attr("data-status","offline");
  }
  else
  {
    $("#desc0").html(data["_links"].text);     
    $("#channel0").attr("data-status","live");
  }
});

// Get 5 featured channels
$.getJSON('https://wind-bow.gomix.me/twitch-api/streams/featured?limit=10&callback=?', function(data) {
  console.log(data);
  for (var i = 1; i < 5; i++)
  {
    var txt = "";
    txt = data.featured[i].stream.channel.name;
    
    var sel = "#anchor"+i;
    $(sel).attr("data-src",txt);
    
    sel = "#channel"+i;
    if (data.featured[i].stream != null)
    { $(sel).attr("data-status","live"); }
    else
    { $(sel).attr("data-status","offline"); }
    
    sel = "#image"+i;
    $(sel).attr("src",data.featured[i-1].image);
    $(sel).css("visibility","visible");
    sel = "#title"+i;
    
    txt = data.featured[i-1].title;
    if (txt.length > 35)
    { txt = txt.substring(0,34); }
    $(sel).html(txt)
    
    sel = "#desc"+i;
    txt = data.featured[i-1].text;
    if (txt.length > 65)
    { txt = txt.substring(0,64) + "..."; }
    if (data.featured.stream === null)
    { $(sel).html("Offline"); }
    else
    { $(sel).html(txt); }
  }
});

// Get a user channel
function getUser(usr,pos) {
  var url = 'https://wind-bow.gomix.me/twitch-api/users/' + usr + '?callback=?';
  $.getJSON(url, function(data) {
    console.log("User:" + usr);
    console.log(data);
     var sel = "#image"+pos;
    if (data.status=="404") // User not found
    {
      $(sel).attr("src","https://cdn.elegantthemes.com/blog/wp-content/uploads/2014/09/404-header.png");
      $(sel).css("visibility","visible");
      
      sel = "#channel"+pos;
      $(sel).attr("data-status","offline");
      
      sel = "#title"+pos;
      $(sel).text(usr);
      
      sel = "#desc"+pos;
      $(sel).text("User not found");
      
      sel = "#anchor"+pos;
      $(sel).attr('target',"");      
      $(sel).removeClass("stream");
    }
    else if (data.status=="422") // User unavailable
    {
      console.log("Unavailable: " + usr);
      sel = "#channel"+pos;
      $(sel).attr("data-status","offline");
      
      sel = "#anchor"+pos;
      $(sel).attr('href','#');      
      $(sel).attr('target','');
      
      sel = "#image"+pos; 
      $(sel).attr("src","http://www.websitemagazine.com/images/blog/anonymous-user.png");
      $(sel).css("background-color","#bbb");
      $(sel).css("visibility","visible");
      
      sel = "#title"+pos;
      $(sel).text(usr);
      
      sel = "#desc"+pos;
      $(sel).text("User unavailable");
    }
    else // if user is live
    {
      sel = "#anchor"+pos;
      $(sel).attr('href','https://codepen.io/ShadowKnight00/full/GrmXae/?'+usr);
      $(sel).attr('target','_blank');
      
      sel = "#channel"+pos;
      $(sel).attr("data-status","live");
      
      if (data.logo == null)
      { 
        sel = "#image"+pos;
        $(sel).attr("src","http://bdamar.com/adminbdamar.com/edu/coaching/upload/3011758078676434.png");
        $(sel).css("background-color","#bbb");
      }
      else
      { 
        sel = "#image"+pos;
        $(sel).attr("src",data.image);
      }
      
      sel = "#title"+pos;
      $(sel).text(usr);
      
      sel = "#desc"+pos;
      $(sel).text("User");
    }
    
    sel = "#image"+pos;
    $(pos).css("visibility","visible");
  });
}

// Get a stream channel
function getChannel(ch,pos) { 
  var url = 'https://wind-bow.gomix.me/twitch-api/channels/' + ch + '?callback=?';
  $.getJSON(url, function(data) {
    console.log("Channel:" + ch);
    console.log(data);
    
     var sel = "#image"+pos;
    if (data.status=="404") // Channel not found
    {
      $(sel).attr("src","https://cdn.elegantthemes.com/blog/wp-content/uploads/2014/09/404-header.png");
      
      sel = "#channel"+pos;
      $(sel).attr("data-status","offline");
      
      sel = "#title"+pos;
      $(sel).text(ch);
      
      sel = "#desc"+pos;
      $(sel).text("Channel not found");
      
      sel = "#anchor"+pos;
      $(sel).attr('target',"");
      $(sel).removeClass("stream");
    }
    else if (data.status=="422") // Channel unavailable
    {
      console.log("Unavailable: " + ch);
      
      sel = "#channel"+pos;
      $(sel).attr("data-status","offline");
      
      sel = "#anchor"+pos;
      $(sel).attr('href','#');
      $(sel).attr('target','');
      
      sel = "#image"+pos;
      $(sel).attr("src","http://www.websitemagazine.com/images/blog/anonymous-user.png");
      $(sel).css("background-color","#bbb");
      $(sel).css("visibility","visible");
      
      sel = "#title"+pos;
      $(sel).text(ch);
      
      sel = "#desc"+pos;
      $(sel).text("Channel unavailable");
    }
    else // if channel is live
    {
      sel = "#anchor"+pos;
      $(sel).attr("data-src",ch);
      
      sel = "#channel"+pos;
      $(sel).attr("data-status","live");
      
      if (data.logo == null)
      {
        sel = "#image"+pos;
        $(sel).attr("src","http://bdamar.com/adminbdamar.com/edu/coaching/upload/3011758078676434.png");
        $(sel).css("background-color","#bbb");
        $(sel).css("visibility","visible");
      }
      else
      {
        sel = "#image"+pos;
        $(sel).attr("src",data.logo);
        $(sel).css("visibility","visible");
      }
      
      sel = "#title"+pos;
      $(sel).text(ch);
      
      sel = "#desc"+pos;
      if (data.text != null)
      { 
        $(sel).text(data.text); 
      }
      else // if data.text == null
      {
        if (data.game != null) 
        { $(sel).text(data.game); }
        else // if data.game also null
        { $(sel).text("Channel"); }       
      }      
    }
    
    sel = "#image"+pos;
    $(pos).css("visibility","visible");
  });
}

// If a stream is clicked, show that stream
$(".stream").click(function() {
  console.log("streaming..." + $(this).attr('id'));  
  // If no source, do nothing
  var me = "#" + $(this).attr('id');
  if ($(me).attr("data-src") == "") { return; }  
  // Hide all channels
  for (var i = 0; i < 8; i++)
  {
    var item = "#channel"+i;
    $(item).css("display","none");
  }
  // Hide button menu
  $(".menu").css("display","none");
  //Show return button
  $(".returnbtn").css("display","block");  
  // Show TV frame with stream player
  $(".tvframe").css("display","block");  
  //Set stream player source
  console.log("me-src: " + $(me).attr("data-src"));  
  var url = "https://player.twitch.tv/?channel=" + $(me).attr("data-src");
  $(".tvframe").attr("src",url);
});

// If return button is clicked while stream is showing
$(".returnbtn").click(function(){
  //Hide return button and player, then display channels
  $(".returnbtn").css("display","none");
  $(".tvframe").css("display","none");
  $(".tvframe").attr("src","");
  
  // Show button menu
  $(".menu").css("display","block");
  // Show all channels
  
  if ($("#button-live").hasClass("clicked"))
  { filterStreams("live"); console.log("live"); }
  else if ($("#button-offline").hasClass("clicked"))
  { filterStreams("offline"); console.log("off"); }
  else
  { filterStreams("all"); console.log("all"); }
      /*
  for (var i = 0; i < 8; i++)
  {
    var item = "#channel"+i;
    $(item).css("display","block");
  }  
  */
});

$("#button-all").click(function() {
  filterStreams("all");
});

$("#button-live").click(function() {
  filterStreams("live");
});

$("#button-offline").click(function() {
  filterStreams("offline");
});

function filterStreams(val) {
  var category = ["all","live","offline"];
  
  for (var i = 0; i < category.length; i++)
  {
    var sel = "#button-";
    sel += category[i];
    
    if (val == category[i])
    {
      $(sel).css("color","#004");
      $(sel).css("background-color","#53f");
      $(sel).css("font-weight","600");
      $(sel).addClass("clicked");
    }
    else
    {
      $(sel).css("color","#93f");
      $(sel).css("background-color","#004");
      $(sel).css("font-weight","400");
      $(sel).removeClass("clicked");
    }
  }
  
  if (val == "live")
  {
    for (var i = 0; i < 8; i++)
    {
      var sel = "#channel"+i;
      if ($(sel).attr("data-status") == "live")
      { $(sel).css("display","block"); }
      else
      { $(sel).css("display","none"); }
    }
  }
  else if (val == "offline")
  {
    for (var i = 0; i < 8; i++)
    {
      var sel = "#channel"+i;
      if ($(sel).attr("data-status") == "offline")
      { $(sel).css("display","block"); }
      else
      { $(sel).css("display","none"); }
    }
  }
  else // all
  {
    for (var i = 0; i < 8; i++)
    {
      var sel = "#channel"+i;
      $(sel).css("display","block");
    }
  }
}

getChannel("ESL_SC2",5);

// Get a dead user channel
getUser("brunofin",6);

// Get a dead user channel
getUser("comster4040404",7);