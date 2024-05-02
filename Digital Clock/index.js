function displayClock(){
    const now = new Date();
    let hours = now.getHours();
    let merdian = hours >= 12 ?  "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2,0);
    let minutes = now.getMinutes().toString().padStart(2,0);
    let seconds = now.getSeconds().toString().padStart(2,0);
    
    document.getElementById('clock').innerHTML= `${hours}:${minutes}:${seconds} ${merdian}`;
}

displayClock();
setInterval(displayClock,1000);