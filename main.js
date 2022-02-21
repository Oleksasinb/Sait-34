let box = document.querySelector('.box')
let bot = document.querySelector('.bottom')
let input = document.querySelector('input')
let item = document.createElement('ol')
let newbox = document.querySelector('.boxs')
let newitem = document.createElement('ol')
box.append(item)
newbox.append(newitem)
let num = 0
bot.addEventListener('click',() => creatli ())
function creatli () {
    num++
    let inputext = input.value
    let itemli = document.createElement('li')
    itemli.classList = ('item')
    itemli.id = `li_${num}`
    itemli.innerHTML = `
    <span class = "text"> ${inputext} </span>
    <span onclick="deleteli (${num}, movingli(${num}))" class = "close"> X </span>
    `
    document.querySelector('input').value = ''
    item.append(itemli)
}
function deleteli (e) {
    let li = document.querySelector(`#li_${e}`)
    li.remove() //delete
}
function movingli (e) {
    num++
    let oldli = document.querySelector(`#li_${e}>.text`)
    let text = oldli.textContent
    let li = document.createElement('li')
    li.classList = ('item')
    li.id = `li_${num}`
    li.innerHTML = `
    <span class = "text"> ${text} </span>
    <span onclick = "goback (${num})" class = "arrow"><i class = "fa fa-arrow-up"></i></span>
    <span onclick = "deleteli (${num})" class = "close"> X </span>
    `
    newitem.append(li)
}
function goback (e) {
    num++
    let oldli = document.querySelector(`#li_${e}>.text`)
    let text = oldli.textContent
    let li = document.createElement('ļi')
    li.classList = ('item')
    li.id = `li_${num}`
    li.innerHTML = `
    <span class = "text"> ${text} </span>
    <span onclick = "deleteli (${num})" class = "close"> X </span>
    `
    item.append(li)
}