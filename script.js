let pets = [
    { name: 'Kiko', age: 4, species: 'Dog' },
    { name: 'Felix', age: 22, species: 'Cat' },
    { name: 'Layla', age: 7, species: 'Dog' },
    { name: 'Kkami', age: 9, species: 'Dog' },
    { name: 'Berry', age: 8, species: 'Dog' },
    { name: 'Kingbird', age: 11, species: 'bird' }
]   

function addName() {
    // lets user input the name of the pet
    let name = prompt("What is the name of the pet?")
    // lets user input the age of the pet
    let age = prompt('How old is the pet?')
    //lets user input the specie of the pet
    let specie = prompt('What is the specie of the pet?')

    let pet = {
        name: name,
        age: age,
        specie: specie
    }

    // add a new name to add to array of names
    pets.push(pet)
}

function names() {
    //shows user names of all the pets
    alert(NameArray)
}

function pet() {
    //shows user list of the pets and their information
    alert(pet)
}


