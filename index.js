


setInterval(clock, 1000);

function clock(){
    let date = new Date();
    let htime = date.getHours();
    let mtime = date.getMinutes();
    let stime = date.getSeconds();
    let hrotation = 30*htime + mtime/2;
    let mrotation = 6*mtime + .1*stime;
    let srotation = 6*stime;
    updateCSS(hrotation, mrotation, srotation);
}

function updateCSS(hrotation, mrotation, srotation){
    let hour = document.getElementById("hour");
    let min = document.getElementById("minute");
    let sec = document.getElementById("second");
    hour.style.transform = `rotate(${hrotation}deg)`;
    min.style.transform = `rotate(${mrotation}deg)`;
    sec.style.transform = `rotate(${srotation}deg)`;
}