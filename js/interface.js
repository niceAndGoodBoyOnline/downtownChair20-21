let about = document.getElementById('about')
let langAlert = document.getElementById("langAlert");
let aboutContent = document.getElementById('aboutContent')

let languages = {}

about.addEventListener("click", toggleAbout);
//langAlert.addEventListener("click", hideAlert);
let langState = true;
let aboutState = false;

function toggleAlert(){

    if(window.innerHeight > window.innerWidth){
        set_portrait_css()
    }
    else{
        set_landscape_css()
    }

}

function toggleAbout(){
    
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
        aboutContent.innerHTML = "🐸"
        about.style.height = '5vw'
        about.style.width = '12vw'
        aboutContent.style.fontSize = "12vw"
        aboutContent.style.backgroundColor = "transparent"
        aboutContent.style.padding = "0"
    }
    else{
        aboutState=true;
        aboutContent.innerHTML = "Hiyo, I am Felix! I love frog. I try to help everyone I can. <br><br>My biggest dream is to leverage automation to make 30-hour-work-weeks not only possible, but optimal and commonplace. I believe community spaces (libraries, parks, mixed-facility-buildings etc) will play a pivitol role in the post-automation economy. <br><br>I am running for Downtown Chair because I believe everyone has a right to be heard, a right to growth, and a right to success. The BCITSA was built to protect those rights and continues to evolve to take on new challenges and include new voices."
        about.style.height = '80vh'
        about.style.width = '100%'
        aboutContent.style.fontSize = "4vw"
        aboutContent.style.backgroundColor = "azure"
        aboutContent.style.padding = "12vw"
    }
}

function set_landscape_about(){

    if (helperState==true){
        helperState=false;
        containerStyle.magrin = "0 0 0 0"
        helper.style.height = '9vh'
    }
    else{
        helperState=true;
        containerStyle.magrin = "0 0 45vh 0"
        helper.style.height = '90%'
    }
}

function set_portrait_css(){
    if (sideNavState == true){
        sideNavState = false;
        sideNav.style.width = '0';
        containerStyle.left = "8vh";
        navButton.style.left = '-10vh';
        navButton.style.fontSize = '14vh';
    }
    else{
        sideNavState = true;
        sideNav.style.width = '30vh';
        containerStyle.left = "30vh";
        sideNav.style.fontSize = '2vh'
        navButton.style.left = '5vh'
    }
}


function set_landscape_css(){
    if (sideNavState == true){
        sideNavState = false;
        sideNav.style.width = "0";
        navButton.style.fontSize = '14vh'
        navButton.style.left = '-10vh'
        containerStyle.left = "7vw";
    }
    else{
        sideNavState = true;
        sideNav.style.width = '33vw';
        sideNav.style.fontSize = "3vh"
        navButton.style.left = '13vw'
        containerStyle.left = "33vw";
    }
}

function onOrientationChange() {
    sideNavState = true
    helperState = true
    switch(window.orientation) {  
      case -90: case 90:
        set_landscape_css()
        set_landscape_helper()
        break; 
      default:
        set_portrait_css()
        set_portrait_helper()
        break; 
    }
}
  
window.addEventListener('orientationchange', onOrientationChange);