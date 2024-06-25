function scuberGreetingForFeet(distanceCovered) {
  if (distanceCovered <= 400) {
    console.log("This one is on me!");
    return "This one is on me!";
  } else if (distanceCovered <= 2000) {
    console.log("That will be twenty bucks.");
    return "That will be twenty bucks.";
  } else if (distanceCovered <= 2500) {
    console.log("I will gladly take your thirty bucks.");
    return "I will gladly take your thirty bucks.";
  } else {
    console.log("No can do.");
    return "No can do.";
  }
}
scuberGreetingForFeet(2501);

function ternaryCheckCity(city) {
  city === "NYC" ? "Ok, sounds good." : "No go.";
  return city === "NYC" ? "Ok, sounds good." : "No go.";
}
console.log(ternaryCheckCity("NYC"));
function switchOnCharmFromTip(tip) {
  switch (tip) {
    case "generous":
      console.log("Thank you so much.");
      return "Thank you so much.";
    case "not as generous":
      console.log("Thank you.");
      return "Thank you.";
    default:
      console.log("Bye.");
      return "Bye.";
  }
}
switchOnCharmFromTip("not as generous");
