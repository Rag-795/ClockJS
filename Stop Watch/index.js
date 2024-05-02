const display = document.getElementById("display");
const laptxt = document.getElementById("lap");

let timer;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;
const laparr = [];

function start(){
    if(!isRunning){
       startTime = Date.now() - elapsedTime;
       timer = setInterval(update, 10);
       isRunning = true;
    }
}

function stop(){
    if(isRunning){
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}

function lap(){
    let lapContent='';
    if(isRunning) {
        laparr.push(getTime());
        laparr.forEach((value,index)=>{
            lapContent +=(index + 1)+"."+value+`<br>`;
        })
    }
    laptxt.innerHTML=lapContent;
}

function reset(){
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    laptxt.innerHTML='';
    display.innerHTML = `00:00:00:00`;
}

function getTime(){
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    
    let hours = Math.floor(elapsedTime / (1000*60*60));
    let minutes = Math.floor(elapsedTime / (1000*60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let milliseconds = Math.floor(elapsedTime % 1000 / 10);
    
    hours=hours.toString().padStart(2,0);
    minutes=minutes.toString().padStart(2,0);
    seconds=seconds.toString().padStart(2,0);
    milliseconds=milliseconds.toString().padStart(2,0);
    return `${hours}:${minutes}:${seconds}:${milliseconds}`;
}
function update(){
    display.innerHTML = getTime();
}
