// Set the date we're counting down to
var countDownDate = new Date("feb 27, 2023 18:23:45").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("xbox20off").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
   
//   if there is less than 30s left show timer in red 
    if (distance <= 30) {
      document.getElementById("xbox20off").style.color = "red"; 
  } 

  if (distance <= 30) {
    document.getElementById("shopingtl1").style.color = "red"; 
} 
  // If the count down is over, write some text 

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("xbox20off").innerHTML = "this deal has ended we are evry sorry if you missed this deal but not worry we have lots of deals going on throughout the year so keep an look out or join are mailing list so you dont miss out on any new deals";
  }
}, 1000);