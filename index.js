function scuberGreetingForFeet(someValue){
  var ride = 'This one is on me!';
  var payTwenty = 'That will be twenty bucks.';
  var payThirty = 'I will gladly take your thirty bucks.';
  var noRide = 'No can do.';

  if(someValue <= 400) {
    return ride;

  }else if(someValue <= 2000) {
    return payTwenty;

  }else if(someValue <= 2500) {
    return payThirty;

  }else if(someValue >= 2500) {
    return noRide;
  }
  scuberGreetingForFeet(199);
  scuberGreetingForFeet(1500);
  scuberGreetingForFeet(2001);
  scuberGreetingForFeet(2501);
}

function ternaryCheckCity(city){
  return city === "NYC" ? "Ok, sounds good." : "No go.";

}

function switchOnCharmFromTip(feeling) {
  if(feeling === "generous"){
    return 'Thank you so much.';
  }else if(feeling === "not as generous"){
    return 'Thank you.';
  }else{
    return 'Bye.';
  }
}