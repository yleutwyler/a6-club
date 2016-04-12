$(function() {
  //All JS goes within these brackets  
  
  $("#age-submit").click(function(){
    
    //select the box with id of age
    //get the value from that box
    var ageString = $("#age").val();

    //convert string to number
    var age = parseInt(ageString);

    //check if age is greater than 21
    if ( age >= 21 ) {
      //if age is greater than 21 show the next question
      $("#neil-form").show();
      $("#age-form").hide();
    } else {
      $("#answer").text("scram. youre too young.");
      $("#club-img").attr("src", "http://energy.gov/sites/prod/files/styles/borealis_default_hero_respondlarge/public/door_5481543.jpg?itok=joaNZ-Zx");
    }
    
  });

  $("#neil-submit").click(function(){
    var neilAlbumsString = $("#neil-albums").val();
    var neilAlbums = parseInt(neilAlbumsString);

    if ( neilAlbums > 5 ) {
      $("#neil-form").hide();
        $("#nyu-form").show();

    } else {
      $("#answer").text("scram. youre too young.");
      $("#club-img").attr("src", "http://energy.gov/sites/prod/files/styles/borealis_default_hero_respondlarge/public/door_5481543.jpg?itok=joaNZ-Zx");
    }
  });

    $("#nyu-submit").click(function(){
    var nyuString = $("#nyu").val();

    if ( nyuString == "no" ) {
      $("#nyu-form").hide();
      $("#answer").text("You're in!");
      $("#club-img").attr("src", "https://media.giphy.com/media/zyxiqEQb6wTSg/giphy.gif");
      
    } else {
      $("#answer").text("scram. New School only.");
      $("#club-img").attr("src", "http://energy.gov/sites/prod/files/styles/borealis_default_hero_respondlarge/public/door_5481543.jpg?itok=joaNZ-Zx");
      $("#nyu-form").hide();    
    }
  });

});
