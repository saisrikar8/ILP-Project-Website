const options = {
    navigationUI: "hide"
}
const sheet = document.styleSheets[0];
if (!document.fullscreenElement){
    promptFullScreen();
}
function toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen(options);
    }
    else{
        return undefined;
    }
  }
function promptFullScreen(){
    swal({
        title: "Fullscreen, please!",
        icon: "info",
        button: {
            text: "Enter Fullscreen!",
            value: true
        },
        text: "Please enter fullscreen for the best experience."
    })
    .then((value)=>{
        if (value){
            toggleFullScreen();
        }
    })
}