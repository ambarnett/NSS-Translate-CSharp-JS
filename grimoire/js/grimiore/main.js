// Put your code here
const spells = [
    {
        Name: "Turn enemy into a newt",
        IsEvil: true,
        EnergyRequired: 5.1
    },
    {
        Name: "Conjure some gold for a local charity",
        IsEvil: false,
        EnergyRequired: 2.99
    },
    {
        Name: "Give a deaf person the ability to heal",
        IsEvil: false,
        EnergyRequired: 12.2
    },
    {
        Name: "Make yourself emperor of the universe",
        IsEvil: true,
        EnergyRequired: 100.0
    },
    {
        Name: "Convince your relatives your political views are correct",
        IsEvil: false,
        EnergyRequired: 2921.5
    }
]
const goodSpellBook = []
const badSpellBook = []

console.log("Do you believe in magic?")
console.log("------------------------")

const makeSpellBooks = () => {
    for (const spell of spells) {
        if (spell.IsEvil === false) {
            goodSpellBook.push(spell)
        } else if (spell.IsEvil === true) {
            badSpellBook.push(spell)
        }
    }
}
makeSpellBooks()
const displayGoodBook = () => {
    console.log("Good Book")
    for (spell of goodSpellBook) {
        console.log('\t', spell.Name)
    }
}
const displayBadBook = () => {
    console.log("Bad Book")
    for (spell of badSpellBook) {
        console.log('\t', spell.Name)
    }
}
const displaySpellBooks = () => {
    displayGoodBook();
    displayBadBook();
}
displaySpellBooks()