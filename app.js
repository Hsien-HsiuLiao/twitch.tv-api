$(document).ready(function(){
// example api call https://api.twitch.tv/kraken/streams/test_channel 
//https://api.twitch.tv/kraken/streams/freecodecamp?callback=?
var twitchUsers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "lobosjr"];
// offline users brunofin and comster404
  var icon = [];
  var stream = [];
  var twitchOnline =[];
  var twitchOffline = [];
  var offlineLogo = [];
  var twitchOfflineUser = [];
  var output="";

  //new code
  for (i=0; i<twitchUsers.length; i++){
    checkStreams(i);
  }
 
   function checkStreams (i) {
     //store stream in array
 //for(i=0; i< twitchUsers.length; i++){
   url = 'https://wind-bow.gomix.me/twitch-api/streams/' + twitchUsers[i] + '?callback=?';
  //-----------
   $.getJSON(url).done(
//  $.ajax({
    //type: "get",
  //  async:false,
   // url:url,
    //dataType: "json",
    //success: 
     function(data) {
      if(data.stream!=null ) {
        stream.push({status:data.stream.channel.status}); 
      }
      if(data.stream == null) {
        stream.push({status: "Offline"});
      }
      buildList(i, twitchUsers[i], stream[i].status)  
  } //end function
    ); //end done
        //  }) //end ajax   
//            ); //end get
//-------     
      
// };// end for loop store streams
  }; // end function checkstreams
  
  for (i=0; i<twitchUsers.length;i++){
    getIcon(i);
  }
  
  function getIcon(i) {
     //store icon in array 
//for(i=0; i< twitchUsers.length; i++){
  url = 'https://wind-bow.gomix.me/twitch-api/channels/' + twitchUsers[i] + '?callback=?';
   $.getJSON(url).done(
  //  $.ajax({
     // type: "get",
    //  async: false,
     // url:url, 
     // dataType: "json",
     // success: 
     function(data2) {
   // console.log(data2.logo);
      icon.push(data2.logo);
     buildList(i, twitchUsers[i], stream[i].status);
            } 
     ); //end done
//    })
     
  // ); //end json
    
//} // end for loop offline
  };
  
  function buildList(i, name, stream){
    
    $("#output").append("<div class='panel panel-primary'><div class='panel-body'><div class='col-xs-3'><img src="+ icon[i] +"></div>"+"<div class='col-xs-3'>" + "<a href=https://www.twitch.tv" + "/" + name + " target=_blank>" + name + "</a>" + "</div> "+ "<div class='col-xs-3'>" + stream +"</div></div></div><br>");
  };
 // url = 'https://wind-bow.gomix.me/twitch-api/users/quin69?callback=?';
 // $.get(url, function (response) {
   // console.log(response);
 // });
 
  
    function showOnline() {
     // checkStreams ();
      $("#output").html("<div></div>");
      for (i=0; i<twitchUsers.length;i++){
        //alert(twitchOnline[i].status);
        //console.log(stream);
        if(stream[i].status != "Offline"){
          checkStreams (i);
         // buildList(icon[i], twitchUsers[i], stream[i].status);
        };
      }
    }
  
  function showOffline(append) {
    //checkStreams ();
    if(!append){
      $("#output").html("<div></div>");
    };
      for (i=0; i<twitchUsers.length;i++){
      //  alert(twitchOfflineUser[i]);
       // twitchOffline[i]={icon:offlineLogo[i],name:twitchOfflineUser[i], status:"Offline"};
        //buildList(twitchOffline[i]);
     //   $.getJSON('https://wind-bow.gomix.me/twitch-api/channels/' + twitchUsers[i] + '?callback=?', function(data2) {
      // icon = data2.logo;      
      //    console.log("icon=" +icon);
      //      }); //end json
        if(stream[i].status == "Offline"){
          buildList(i, twitchUsers[i], stream[i].status);
        };
      }
    }
  
  function showAll() {
    
    $("#output").html("<div></div>");
    
      showOnline();
    //alert('showall');
      showOffline(true);
  };
  
    $('#all').on("click", function(){
      //alert('all');  
      showAll();
      });
    $('#online').on("click", function(){
     // alert(twitchOnline);  
      showOnline();
      });
    $('#offline').on("click", function(){
      //alert(twitchOfflineUser);
      //alert(offlineLogo);
      showOffline(false);
      });
  //end new code


  
  
  //for loop merge offline info
  //for (i=0; i<twitchOfflineUser.length;i++){
    //    twitchOffline[i]={icon:offlineLogo[i],name:twitchOfflineUser[i], status:"Offline"};
      
      // } // end merge
  //console.log(twitchUsers);
  showAll();
  
  
})
