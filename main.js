ulList = document.querySelectorAll('ul li')

// console.log(ulList)

function makeBlack() {
    for (let i = 0; i < ulList.length; i++) {
        console.log(i)
        ulList[i].style.color = "black"
    }
}
