// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var vehicles = ["Kia Car", "BMW Car", "Audi"];
var mssg = "I would like to buy a";
for (var i = 0; i < vehicles.length; i++) {
    console.log(mssg + " " + vehicles[i]);
}
