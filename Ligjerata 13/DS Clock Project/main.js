var noon =12;
var wakeuptime;
var sleeptime;
var dstime;

function showCurrentTime(){
    var clock = document.getElementById("clock");

    var currentTime= new Date();

    var hours= currentTime.getHours();
    var minutes= currentTime.getMinutes();
    var seconds= currentTime.getSeconds();

    var meridian="AM";
    if(hours>=noon){
        meridian="PM";
    }

    var clockTime= hours +" : " + minutes + " : "+ seconds+ " : " + meridian;
    clock.innerHTML=clockTime;
}


var oneSecond= 1000;
setInterval(showCurrentTime, oneSecond);

function changeImage(){
    var time= new Date().getHours();

    var image= "Images/ds_clock.png";
    var imageHTML= document.getElementById("timeImage");

    if(time == wakeuptime){
        image="Images/morning.gif";
    }else if(time==dstime){
        image="Images/class.gif";
    }else if(time == sleeptime){
        image="Images/night.gif";
    }

    imageHTML=image;

}


function updateClock(){
    var wakeUpTimeSelector= document.getElementById("wakeUpTimeSelector");
    wakeuptime=wakeUpTimeSelector.value;

    var dsTimeSelector=document.getElementById("dsTimeSelector");
    dstime=dsTimeSelector.value;

    var sleepTimeSelector= document.getElementById("sleepTimeSelector");
    sleeptime=sleepTimeSelector.value;
}

var saveButton= document.getElementById("saveButton");
saveButton.addEventListener("click", updateClock);