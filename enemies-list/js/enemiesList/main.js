// Put your code here
const enemies = [
    {
        firstName: "Joshua",
        lastName: "Flowers",
        offenses: [
            { string: "Being a jerk to me in school" },
            { string: "Not being nice to me in elementary school" },
        ],
        isReallyHated: true
    },
    {
        firstName: "Darth",
        lastName: "Vader",
        offenses: [
            { string: "Cut off Lukes hand" },
            { string: "Murdered all those kids" },
            { string: "Unkind management practices" },
        ],
        isReallyHated: false
    },
    {
        firstName: "Betty",
        lastName: "Rudelady",
        offenses: [
            { string: "Phone calls in the theater" },
            { string: "Phone calls on the bus" },
            { string: "Phone calls in line at the grocery store" },
            { string: "Poor conversationalist" },
        ],
        isReallyHated: true
    },
    {
        firstName: "Leon",
        lastName: "Peck",
        offenses: [
            { string: "Keeps giving me a hotplate" },
        ],
        isReallyHated: false
    }
]
console.log("My Enemies List!");
console.log("----------------");
for (enemy of enemies) {
    if (enemy.isReallyHated === true) {
        console.log(`${enemy.firstName} ${enemy.lastName} (Really, really dislike!)`)
    } else {
        console.log(`${enemy.firstName} ${enemy.lastName}`)
    }
}