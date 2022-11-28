function checkInput(){
    var heading = document.getElementById("generatedHeading");
    heading.innerHTML = "";
    var studentName = getStudentName();
    var teacherName = getTeacherName();
    var course = getCourse();
    var period = getPeriod();
    var date = getDate();
    if (studentName == undefined || teacherName == undefined || course == undefined || period == undefined || date == undefined){
        error();
    }
}
function generateHeading(){
    var heading = document.getElementById("generatedHeading");
    var studentName = getStudentName();
    var teacherName = getTeacherName();
    var course = getCourse();
    var period = getPeriod();
    var date = getDate();
    heading.innerHTML = ("Just Copy and Paste!<br/><br/>" + studentName + "<br/>" + teacherName + "<br/>" + course + ", P" + period + "<br/>" + date);
    window.scrollTo(0, document.body.scrollHeight);
}
function getTeacherName(){
    var name = document.getElementById("teacherName").value;
    var prefix = document.getElementById("prefix").value;
    if (name == ""){
        error();
    }
    else{
        return (prefix + name)
    }
}
function getStudentName(){
    var name = document.getElementById("name").value;
    if (name == ""){
        error();
    }
    else{
        return name;
    }
}
function getCourse(){
    var course = document.getElementById("courseName").value;
    if (course == ""){
        error();
    }
    else{
        return course;
    }
}
function getPeriod(){
    var period = document.getElementById("period").value;
    if (period == ""){
        error();
    }
    else{
        return period;
    }
}
function getDate(){
    const monthList = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    var date = new Date();
    var month = monthList[date.getMonth()];
    var year = date.getFullYear();
    var day = date.getDate();
    return day + " " + month + " " + year;
}
function error(errorText = "That input is not valid.", errorIcon = "error"){
    swal({
        title: "Oops!",
        text: errorText,
        icon: errorIcon,
        button: true
    });
}