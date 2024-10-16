const count = document.querySelector('.count')
const minus = document.querySelector('.minus-btn')
const plus = document.querySelector('.plus-btn')
const changeBy = document.querySelector('.changeBy')

minus.addEventListener('click', ()=>{
    const countValue = parseInt(count.innerText)
    const changeByvalue = parseInt(changeBy.value)
    count.innerText = countValue - changeByvalue
})
plus.addEventListener('click',()=>{
    const countValue = parseInt(count.innerText)
    const changeByvalue = parseInt(changeBy.value)
    count.innerText = countValue + changeByvalue
})