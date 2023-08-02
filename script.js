let pets = [
    { name: 'Kiko', age: 4, species: 'Dog' },
    { name: 'Felix', age: 22, species: 'Cat' },
    { name: 'Layla', age: 7, species: 'Dog' },
    { name: 'Kkami', age: 9, species: 'Dog' },
    { name: 'Berry', age: 8, species: 'Dog' },
    { name: 'Kingbird', age: 11, species: 'bird' }
]

function addPet() {
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

    // add the pet to add to array of pets
    pets.push(pet)
}


function showpet() {
    //shows user list of the pets and their information
    for (let pet of pets)
        alert(pets)
}

function removePet() {
    // output the name of each pet
    let index = 0
    for (let pet of pets) {
        alert(index + " :" + pet.name)
        index = index + 1
    }
    // get the index of the pet to remove
    let indextoremove = prompt("Which pet would you like to remove?")

    // remove the pet at the index 
    pets.splice(indextoremove, 1)
}

