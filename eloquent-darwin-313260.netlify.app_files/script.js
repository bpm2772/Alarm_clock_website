//time input value var (global)
var timeIHours; 
 var timeISecond;
 var timeIMinute;
var sound = new Audio();
var time;
var hours;
var minutes;
var seconds;
var hoursZero;
var minutesZero;
var secondsZero;
//the song that is playing (source)
sound.src = "5pmnh.aac";
function startClock(){
    getTime();
    setInterval(update, 100);
    
}
function update(){
    getTime();    
    if (timeIHours != null && timeIMinute != null && timeISecond != null){
        alarmGoOff();
    }
}
function getTime() {
     time = new Date();
     hours = time.getHours();
     minutes = time.getMinutes();
     seconds = time.getSeconds();
    hours < 10 ? hoursZero = "0" : hoursZero = "";
    seconds < 10 ? secondsZero = "0" : secondsZero = "";
    minutes < 10 ? minutesZero = "0" : minutesZero = "";
    if (hours >= 13){
        hours = hours - 12;
    }
    
   var displayedTime =  document.getElementById("display").innerHTML = hoursZero + hours + ":" + minutesZero +  minutes + ":" + secondsZero + seconds;
    
    if (displayedTime.minutes < 10){
        displayTime.minutes 
    }
}


function getMyInput(){
  
  timeIHours = document.getElementById("hoursInput").value;
  timeIMinute = document.getElementById("minuteInput").value;
  timeISecond = document.getElementById("secondInput").value;
  
   
 var response = "Alarm set for ";
 document.getElementById("feedback").innerHTML = response + timeIHours + ":" + timeIMinute + ":" + timeISecond;

}

function alarmGoOff(){
console.log(hours + "..." + timeIHours + "\n" +minutes+ "..." + timeIMinute +  "\n");
    
if(timeIHours == hours && timeIMinute == minutes && timeISecond == seconds){
   
    sound.play();
    console.log ("alarm");
    
}
}
// https://codepen.io/noodal/pen/mddMWEO -->


function stop() {
    "use strict";
    sound.pause();
    
    
}
alarmGoOff();
function test(){
    sound.play();
    console.log ("test sound");
    
}
// eloquent-mahavira-52723a