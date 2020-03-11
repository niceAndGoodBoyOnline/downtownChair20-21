let about = document.getElementById('about')
let langAlert = document.getElementById("langAlert");
let aboutContent = document.getElementById('aboutContent')
let forbCSS = document.getElementById('forb');

let languages = {}
let bio = "Hiyo, I am Felix! I love frog. I try to help everyone I can. <br><br>My biggest dream is to leverage automation to make 30-hour-work-weeks possible, optimal and commonplace. I believe community spaces (libraries, parks, mixed-facility-buildings etc) will play a pivitol role in the post-automation economy. <br><br>I am running for Downtown Chair because I believe every student has a right to be heard, a right to growth, and a right to success. <br><br>The BCITSA was built to protect all BCIT students and continues to evolve, take on new challenges and include new voices.<br><br>"
about.addEventListener("click", toggleAbout);
//langAlert.addEventListener("click", hideAlert);
let langState = true;
let aboutState = false;
let maiden = true;
let slime = "off";
let forg = "<img id='forg' src='./img/forg.png'>"
let dumb = "<img id='dumb' src='./img/dumb_pretty.jpg'>"
let K=1000

function toggleAlert(){

    if(window.innerHeight > window.innerWidth){
        set_portrait_css()
    }
    else{
        set_landscape_css()
    }

}

function toggleAbout(){

    toggleSlide(false)

    if(window.innerHeight > window.innerWidth){
        set_portrait_about()
    }
    else{
        set_landscape_about()
    }

}

function set_portrait_about(){

    if (aboutState==true){
        aboutState=false;
        aboutContent.innerHTML = forg
        about.style.height = '5vw'
        about.style.width = '12vw'
        aboutContent.style.boxShadow ="None"
        aboutContent.style.fontSize = "12vw"
        aboutContent.style.backgroundColor = "transparent"
        aboutContent.style.padding = "0"
        about.style.overflowY = "visible"
        about.style.transition = "2s"
        toggleSlide(true)
    }
    else{
        aboutState=true;
        aboutContent.innerHTML = forg + bio + dumb
        aboutContent.style.boxShadow ="0 4px 8px 0 rgba(0, 0, 0, 0.7), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        about.style.height = '80vh'
        about.style.width = '100vw'
        aboutContent.style.fontSize = "4vw"
        aboutContent.style.backgroundColor = "azure"
        aboutContent.style.padding = "12vw"
        about.style.transition = ".5s"
        about.style.overflowY = "scroll"
    }
}

function set_landscape_about(){

    if (aboutState==true){
        aboutState=false;
        aboutContent.innerHTML = forg
        about.style.height = '9vh'
        about.style.width = "12vw"
        aboutContent.style.fontSize = "12vw"
        aboutContent.style.boxShadow ="None"
        aboutContent.style.backgroundColor = "transparent"
        aboutContent.style.padding = "0"
        about.style.overflowY = "visible"
        about.style.transition = "2s"
        toggleSlide(true)
    }
    else{
        aboutState=true;
        about.style.height = '80vh'
        about.style.width = '100vw'
        aboutContent.innerHTML = forg + bio + dumb
        aboutContent.style.boxShadow ="0 4px 8px 0 rgba(0, 0, 0, 0.7), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        aboutContent.style.fontSize = "4vh"
        aboutContent.style.backgroundColor = "azure"
        aboutContent.style.padding = "4vw"
        about.style.transition = "0.5s"
        about.style.overflowY = "scroll"
    }
}

function set_portrait_css(){

}


function set_landscape_css(){
    
}

function onOrientationChange() {
    aboutState = true
    langState = true
    switch(window.orientation) {  
      case -90: case 90:
        set_landscape_css()
        set_landscape_about()
        break; 
      default:
        set_portrait_css()
        set_portrait_about()
        break; 
    }
}

  
window.addEventListener('orientationchange', onOrientationChange);

function toggleSlide(bool){

    if(bool==false){
        clearInterval(slime)
        maiden=true;
        about.classList.remove("slipOut", "slipIn")
        console.log("no more sliding!  " + slime)
    }
    else{
        slime = setInterval(function() {sliddy()}, 40*K)
        console.log(slime + "  it beon")
        sliddy()
    }
}

function sliddy(){

    if (maiden == true){
        maiden = false;
        about.classList.add("slipOut")
        console.log("we dip")
    }
    else{

        about.classList.toggle("slipOut")
        about.classList.toggle("slipIn")
        console.log("flippin: " + about.classList)
    }

}

toggleSlide(true)