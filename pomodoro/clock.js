var times;
var stopTimer = false;
var notification;
var notifRun = false;

if ('Notification' in window === true){
    Notification.requestPermission((permission)=>{
        notification = (permission==='granted');
        if (!notification){
            error('For the best experience, please grant notfication access to this website.');
        }
    });
}
else{
    error('It seems that your browser does not support notifications. Please open this page on a different site for the best experience. If not, you can work without notifications.');
}
function startTimer(){
    var timeCategory = document.createElement("h3");
    timeCategory.id = "timeCategory";
    timeCategory.name = "timeCategory";
    document.getElementById("clock").appendChild(timeCategory);
    times = getTimes();
    document.getElementById("form").remove();
    var time = document.createElement("h1");
    time.name = "time";
    time.id = "time";
    time.innerHTML = times.focus.value + ":00";
    document.getElementById("clock").appendChild(time);
    var stopButton = document.createElement("button");
    stopButton.type = "button";
    stopButton.id = "stopButton";
    stopButton.name = "stopButton";
    stopButton.innerHTML = "Stop!";
    stopButton.addEventListener("click", ()=>{
        console.log("You Click STOP!");
        document.getElementById("stopButton").style.visibility = 'hidden';
        document.getElementById("startButton").style.visibility = 'visible';
        stopTimer = true;
    });
    document.getElementById("clock").appendChild(stopButton);
    var startButton = document.createElement('button');
    startButton.type = "button";
    startButton.id = "startButton";
    startButton.name = "startButton";
    startButton.innerHTML = "Start!";
    startButton.addEventListener("click", ()=>{
        document.getElementById("startButton").style.visibility = 'hidden';
        document.getElementById("stopButton").style.visibility = 'visible';
        stopTimer = false;
    })
    startButton.style.visibility = "hidden";
    document.getElementById("clock").appendChild(startButton);
    timeFocus();
}
function getTimes(){
    var times = {};
    times.focus = document.getElementById("focus");
    times.shortBreak = document.getElementById("shortBreak");
    times.longBreak = document.getElementById("longBreak");
    console.log(times);
    return times;
}
function timeFocus(next = shortBreak){
    var minute = times.focus.value;
    var second = 1;
    var secondString;
    document.getElementById("timeCategory").innerHTML = "Focus Time";
    var interval = setInterval(()=>{
        console.log(stopTimer);
        if (stopTimer){
            if (notification && !notifRun){
                var title = "Pomodoro Clock";
                var body = "You Clicked Stop.";
                var notif = new Notification(title, { body});
                notifRun = true;
            }
        }else{
        second -= 1;
        notifRun = false;
        if (second == 0){
            if(minute == 0){
                var title = "Pomodoro Clock";
                var body = "Great job! It's time for a break!";
                var notif = new Notification(title, {body});
                clearInterval(interval);
                next();
            }
            minute -= 1;
            second = 59;
        }
        else{
        secondString = second.toString();
        if (second < 10){
            secondString = "0" + second;
        }
        document.getElementById("time").innerHTML = minute + ":" + secondString;
    }
    }
    }, 1000)
}
function shortBreak(){
    var minute = times.shortBreak.value;
    var second = 1;
    var secondString;
    document.getElementById("timeCategory").innerHTML = "Short Break";
    var interval = setInterval(()=>{
        
        console.log(stopTimer);
        if (stopTimer){
            if (notification && !notifRun){
                var title = "Pomodoro Clock";
                var body = "You Clicked Stop.";
                var notif = new Notification(title, { body});
                notifRun = true;
            }
        }else{
        notifRun = false;
        second -= 1;
        if (second < 0){
            if(minute == 0){
                var title = "Pomodoro Clock";
                var body = "Now that your brain is all rested up, its time for some more work!";
                var notif = new Notification(title, { body});
                clearInterval(interval);
                timeFocus(longBreak);
            }
            minute -= 1;
            second = 59;
        }
        secondString = second.toString();
        if (second < 10){
            secondString = "0" + second;
        }
        document.getElementById("time").innerHTML = minute + ":" + secondString;
    }
    }, 1000)
}
function longBreak(){
    var minute = times.longBreak.value;
    var second = 1;
    var secondString;
    document.getElementById("timeCategory").innerHTML = "Long Break";
    var interval = setInterval(()=>{
        
        console.log(stopTimer);
        if (stopTimer){
            if (notification && !notifRun){
                var title = "Pomodoro Clock";
                var body = "You Clicked Stop.";
                var notif = new Notification(title, { body});
                notifRun = true;
            }
        }else{
        notifRun = false;
        second -= 1;
        if (second < 0){
            if(minute == 0){
                var title = "Pomodoro Clock";
                var body = "Now that you got a long break, it's time to focus!";
                var notif = new Notification(title, { body});
                clearInterval(interval);
                timeFocus();
            }
            minute -= 1;
            second = 59;
        }
        secondString = second.toString();
        if (second < 10){
            secondString = "0" + second;
        }
        document.getElementById("time").innerHTML = minute + ":" + secondString;
    }
    }, 1000)
}
function error(txt){
    swal({
        title: 'Notifs Please!',
        icon: 'error',
        text: txt,
        button: true
    })
}