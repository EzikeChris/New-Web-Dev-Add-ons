/// NESTED CONDTIONALS IN JAVASCRIPT///
const password = prompt("ADD NEW PASSWORD");
if (password.length >= 6) {
  /// PASSWORD MUST BE EQUAL TO SIX OR ABOVE SIX IN NUMBER
  console.log("Long Enough Password");
  if (password.indexOf("") === -1) {
    console.log("Great Password");
  } else {
    console.log("Only Password With Spaces are Allowed");
  }
} else {
  // If condition one fails this would run!!!
 console.log("Sorry Password Must be Longer");
}
/// NESTED CONDTIONALS IN JAVASCRIPT//
