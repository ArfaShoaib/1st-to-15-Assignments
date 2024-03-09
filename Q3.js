//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var Hname = "babar azam";
//Lowercase
console.log("Lowercase:", Hname.toLowerCase());
//Uppercase
console.log("Uppercase:", Hname.toLocaleUpperCase());
//Titlecase)
console.log("Titlecase:", Hname.charAt(0).toLocaleUpperCase() + Hname.slice(1));
