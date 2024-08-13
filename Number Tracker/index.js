const decrease = document.getElementById("decrease")
const reset = document.getElementById('reset')
const increase = document.getElementById('increase')
const countLabel = document.getElementById("countLabel")
const decrease10 = document.getElementById("decrease10")
const increase100 = document.getElementById('increase100')
const increase10 = document.getElementById('increase10')
const decrease100 = document.getElementById("decrease100")
let count = 0;

increase.onclick = function(){
    count++;
    countLabel.textContent = count;
}
decrease.onclick = function(){
    count--;
    countLabel.textContent = count;
}
reset.onclick = function(){
    count = 0
    countLabel.textContent = count;
}
increase10.onclick = function(){
    count = count + 10;
    countLabel.textContent = count;
}
decrease10.onclick = function(){
    count = count - 10;
    countLabel.textContent = count;
}
increase100.onclick = function(){
    count = count + 100;
    countLabel.textContent = count;
}
decrease100.onclick = function(){
    count = count - 100;
    countLabel.textContent = count;
}