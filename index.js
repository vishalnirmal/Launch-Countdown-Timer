var date = new Date("2021-03-05");
var tm = [document.querySelector(".day"), 
        document.querySelector(".hour"), 
        document.querySelector(".minute"), 
        document.querySelector(".second")];
function getDiff(a, b){
    var diff = a - b;
    var metrics = [24*60*60*1000, 60*60*1000, 60*1000, 1000];
    var ar = [];
    for (var i = 0; i<4; i++)
    {
        var temp = Math.floor(diff / metrics[i]);
        ar.push(temp);
        diff -= temp * metrics[i];
    }
    return ar;
}
setInterval(()=>{
    var t = new Date();
    var val = getDiff(date, t);
    for (var i=0;i<4;i++)
        tm[i].textContent = val[i].toLocaleString('en-US', {
            minimumIntegerDigits: 2
        });
}, 1000);