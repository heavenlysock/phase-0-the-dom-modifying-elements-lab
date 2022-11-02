const main = document.querySelector("#main")   
console.log(main)
main.remove()



// const newHeader = document.createElement('h1')
// newHeader.id = "victory"
// // newHeader.setAttribute("id", "victory")
// console.log(newHeader)


const newHeader = document.createElement('h1')
newHeader.id = "victory"
newHeader.innerHTML = 'Matt is the champion'
console.log(newHeader)
console.log(newHeader.textContent)


const div = document.querySelector('append-to-this')

div.append(newHeader)