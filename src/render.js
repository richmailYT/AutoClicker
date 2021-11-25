//const mouse = require("@nut-tree/nut-js");
const ipcRender = require("electron");
const start = document.getElementById("startClicker");
const stop = document.getElementById("stopClicker");

let clicks = 0;
let run = false;

console.log("this tests if variables in if statments are global");
start.onclick = startClicker;
stop.onclick = stopClicker;

function startClicker() {
    console.log("without change:" + run);
    run = true;
    console.log("without change:" + run);
    while (run) {
        console.log(clicks);
        clicks++;
        document.getElementById("clicks").innerText = clicks;
    }
}
function stopClicker() {
    console.log("without change:" + run);
    run = false;
    console.log("when changed:" + run);
}

//const worker = new Worker('stop.js')
ipcRender.send("work?");
