const strikeThroughFirstLi = () => {
    const firstLi = document.querySelector('li');
    firstLi.style.textDecoration = 'line-through';
}

strikeThroughFirstLi();


const setImageSrc = function(id, url) {
    const newImage = document.querySelector(id)
    newImage.src = url
} 

setImageSrc("#image-1",  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.y-AnXfIiMq8bUMeyy06IagHaNK%26pid%3DApi&f=1")

setImageSrc("#image-2", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.uN3TqzsvzYvso-hm4q1DUgHaEK%26pid%3DApi&f=1")

setImageSrc("#image-3", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ptBVmHGCAJ-Dq3F5KQAP5AHaEK%26pid%3DApi&f=1")

const removeLastLi = function() {
    const arguments = document.querySelector('ul#arguments')
    const lastLi = arguments.lastElementChild
    lastLi.remove()
}

removeLastLi()
removeLastLi()

const newArg = function(element) {
    const li = document.createElement('li')
    document.getElementById('arguments').appendChild(li);
}

const newImage = function() {
    document.createElement('img')
    newImage.src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.K62sas2jeltBXpWRj8cqpQHaEc%26pid%3DApi&f=1"
}

newArg(newImage)

const pixel30 = function(image) {
    image.style.height = '30px'
}

pixel30(document.querySelector("#image-1"))

const invisible = function(element) {
    const newClass = document.querySelector(element)
    newClass.className = 'invisible'
}

invisible("#image-2")

const changeFont = function(size, id) {
    document.querySelector(id).style.fontSize = size
}

changeFont('7em', '#lorem')

const newLi = function(list) {
    const nLi = document.createElement('li' + nLi) 
    nLi.innerText = list

    return nLi
}
newLi('Halo')

const newText = function(text) {
    const newText = document.createElement('h' + text);
    newText.innerText = text

    return newArg
}

newText("#arguments", 'This is the added text')


// 2. Test it by calling it with some text, placing the return value in a variable, and passing it to your append function from Step 1 of Part 2.
// 3. Write a function that takes in two strings, one representing a header size and one some text, and returns a new header of that size (e.g., a '3' for the first parameter should result in an `<h3>`) with that text in it.
// 4. Test it by calling it with a header size and some text, placing the return value in a variable, and passing it to your append function from Step 1 of Part 2.
