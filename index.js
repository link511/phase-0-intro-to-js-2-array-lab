// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];


//  destructivelyAppendCat(name) - appends a cat to the end of the cats array
function destructivelyAppendCat(name) {
    cats.push(name);
}

// destructivelyPrependCat(name) - prepends a cat to the beginning of the cats array
function destructivelyPrependCat(name) {
    cats.unshift(name);
}

//  destructivelyRemoveLastCat()-  removes the last cat from the cats array
function destructivelyRemoveLastCat(name) {
    cats.pop(name);
}

// destructivelyRemoveFirstCat(name) - removes the first cat from the cats array
function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
}

// appendCat(name) - appends a cat to the cats array and returns a new array, leaving the cats array unchanged
function appendCat(name) {
 return [...cats, name];
}

//prependCat(name) -  prepends a cat to the cats array and returns a new array, leaving the cats array unchanged
function prependCat(name) {
    return [name, ...cats];
}

//removeLastCat() -
function removeLastCat() {
    return cats.slice (0, cats.length -1);
}

//emoveFirstCat() -
function  removeFirstCat() {
    return cats.slice (1);
}


