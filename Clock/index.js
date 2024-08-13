function updateClock(){
    const now = new Date();
    let hours = now.getHours();
    meridiam = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; //if it's 0 then we use 12
    hours = hours.toString()
    const minutes = now.getMinutes().toString().padStart(2,0);
    const seconds = now.getSeconds().toString().padStart(2,0);
    const timeString = `${hours}:${minutes}:${seconds} ${meridiam}`;
    document.getElementById("clock").textContent = timeString
}

updateClock()
setInterval(updateClock, 1000)