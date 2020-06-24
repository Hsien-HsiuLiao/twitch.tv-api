$(document).ready(function(){
// example api call https://api.twitch.tv/kraken/streams/test_channel 
//https://api.twitch.tv/kraken/streams/freecodecamp?callback=?

var twitchUsers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "lobosjr"];
// offline users brunofin and comster404
  var output="";
  var count=0;
 // console.log(twitchUsers.length);
  function getTwitch(user){
    $.getJSON('https://api.twitch.tv/kraken/streams/' + user + '?callback=?', function(data) {
      //console.log(data);
     
      //console.log(twitchUsers[count]);
      //count += 1;
     // $("#username").html(data.stream.channel.display_name + "<br>");
      
     // $("#list").html(data.stream.game);
     // $("#streamname").html(data.stream.game);
    //  $("#icon").html("<img src=" +data.stream.preview.small + ">    ");
      //var output;
     // output += twitchUsers[0] + "<br>"; 
        if(data.stream!=null ) {
          $("#output").append("<div class='panel panel-primary'><div class='panel-body'><div class='col-xs-3'><img src="+data.stream.preview.small+"></div>"+"<div class='col-xs-3'>" +twitchUsers[count] + "</div> "+ "<div class='col-xs-3'>" +data.stream.channel.status +"</div></div></div><br>");
            count+=1;
         //   console.log("not null " +count)
        }

        else if(data.stream==null){
        //console.log("before json " +count);
              console.log("user: "+user)

          //$.getJSON('https://api.twitch.tv/kraken/channels/' + user + '?callback=?', function(data2) {
              //console.log("display: "+ data2);
              $.ajax({
    type: 'GET',
    dataType: 'jsonp',
 //   async: 'false',
    url: 'https://api.twitch.tv/kraken/channels/' + user + '?callback=?',
    success: function(data2){
      console.log("ajax data2: "+data2)
    }, 
                      });
  
//}, "jsonp");
  
              //console.log(twitchUsers[count]);
              //console.log("count: "+ count);
              $("#output").append("<div class=col-xs-3><img src=" + "></div><div class='col-xs-3'>"+user+"</div>"+ " Offline<br>");
              count +=1;

          //}); //end json
        }   // end if
      //count +=1;
    });
    
  };

  for(i=0; i< twitchUsers.length; i++){
getTwitch(twitchUsers[i]);
  }
  
})
