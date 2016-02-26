// create an array but don't populate it (declare it)
var imageListRockstars = new Array();

// add elements to the array, starting at position 0
imageListRockstars[0] = "images/rockstars/allmans.jpg";
imageListRockstars[1] = "images/rockstars/cobain.jpg";
imageListRockstars[2] = "images/rockstars/floyd.jpg";
imageListRockstars[3] = "images/rockstars/garcia.jpg";
imageListRockstars[4] = "images/rockstars/page.jpg";
imageListRockstars[5] = "images/rockstars/richards.jpg";
imageListRockstars[6] = "images/rockstars/sabbath.jpg";
imageListRockstars[7] = "images/rockstars/slash.jpg";
imageListRockstars[8] = "images/rockstars/soundgarden.jpg";
imageListRockstars[9] = "images/rockstars/townshend.jpg";

var imageListWeather = new Array();

// add elements to the array, starting at position 0
imageListWeather[0] = "images/weather/blizzard1.jpg";
imageListWeather[1] = "images/weather/blizzard2.jpg";
imageListWeather[2] = "images/weather/flood1.jpg";
imageListWeather[3] = "images/weather/hail.jpg";
imageListWeather[7] = "images/weather/hurricane.jpg";
imageListWeather[4] = "images/weather/icestorm1.jpg";
imageListWeather[5] = "images/weather/icestorm2.jpg";
imageListWeather[6] = "images/weather/thunderstorm.jpg";
imageListWeather[8] = "images/weather/tornado.jpg";
imageListWeather[9] = "images/weather/waves.jpg";

var imageListSports = new Array();

// add elements to the array, starting at position 0
imageListSports[0] = "images/sports/dempsey.jpg";
imageListSports[1] = "images/sports/edgar.jpg";
imageListSports[2] = "images/sports/emtman.jpg";
imageListSports[3] = "images/sports/griffey.jpg";
imageListSports[7] = "images/sports/kemp.jpg";
imageListSports[4] = "images/sports/largent.jpg";
imageListSports[5] = "images/sports/lob.jpg";
imageListSports[6] = "images/sports/payton.jpg";
imageListSports[8] = "images/sports/sherman.jpg";
imageListSports[9] = "images/sports/wilson.jpg";

var imageListPlaces = new Array();

// add elements to the array, starting at position 0
imageListPlaces[0] = "images/places/banff.jpg";
imageListPlaces[1] = "images/places/deadhorsepoint.jpg";
imageListPlaces[2] = "images/places/neworleans.jpg";
imageListPlaces[3] = "images/places/oregoncoast.jpg";
imageListPlaces[4] = "images/places/playa.jpg";
imageListPlaces[5] = "images/places/portland.jpg";
imageListPlaces[6] = "images/places/rainier.jpg";
imageListPlaces[7] = "images/places/sanfrancisco.jpg";
imageListPlaces[8] = "images/places/utah.jpg";
imageListPlaces[9] = "images/places/zion.jpg";

// create the buildThumbnails function
function buildThumbnails()
{
  // hook onto the thumbs div in arrays.html with a DOM method
  var rockstarsDiv = document.getElementById("rockstars");
  var weatherDiv = document.getElementById("weather");
  var sportsDiv = document.getElementById("sports");
  var placesDiv = document.getElementById("places");
  
  // create an output variable
  var output1 = "";
  var output2 = "";
  var output3 = "";
  var output4 = "";
  
  // create a for loop
  for(var i=0; i < imageListRockstars.length; i++ )
  {
    // concatenation assignment operator
    output1 += '<img src="' + imageListRockstars[i] + '" />';
  }
  
  // create a for loop
  for(var j=0; j < imageListWeather.length; j++ )
  {
    // concatenation assignment operator
    output2 += '<img src="' + imageListWeather[j] + '" />';
  }
  
  // create a for loop
  for(var k=0; k < imageListSports.length; k++ )
  {
    // concatenation assignment operator
    output3 += '<img src="' + imageListSports[k] + '" />';
  }
  
  // create a for loop
  for(var l=0; l < imageListPlaces.length; l++ )
  {
    // concatenation assignment operator
    output4 += '<img src="' + imageListPlaces[l] + '" />';
  }
  rockstarsDiv.innerHTML = output1;
  weatherDiv.innerHTML = output2;
  sportsDiv.innerHTML = output3;
  placesDiv.innerHTML = output4;
  
}

// when a web page starts, a window global object is created; window.onload says - when the window is loaded, execute this literal function (not named and runs once)
window.onload = function()
{
  buildThumbnails(); //use or invoke or "fire off" this function
};