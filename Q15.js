// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
// 1st step
var invites = ["Zoya", "Zainab", "Fatima"];
console.log(invites);
// 2nd step
var cannotattend = "Zainab";
console.log("\n\"Unfortunately ".concat(cannotattend, " can not make it to party\"\n"));
// 3rd step
var newguest = "Sara";
invites[invites.indexOf(cannotattend)] = newguest;
// 4th step
invites.map(function ($items) {
    return console.log("".concat($items) + " " + "You Are Invited");
});
