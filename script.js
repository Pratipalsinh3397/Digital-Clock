
const hour = document.querySelector("#hour")
const minute = document.querySelector("#minute")
const second = document.querySelector("#second")
setInterval(() => {
    let date = new Date()
    hour.innerHTML = date.getHours()
    minute.innerHTML = date.getMinutes()
    second.innerHTML = date.getSeconds()
},1000);