let about = document.getElementById('about')
let langAlert = document.getElementById("langAlert");
let aboutContent = document.getElementById('aboutContent')
let contact = document.getElementById('contact')
let contactContent = document.getElementById('contactContent')
let forggy = document.getElementById('forg');

let bioList = ["Hiyo, I am Felix! I love frog. I try to help everyone I can.", 
    "<br><br>My biggest dream is to leverage automation to make 30-hour-work-weeks possible, optimal and commonplace. I believe community spaces (libraries, parks, mixed-facility-buildings etc) will play a pivitol role in the post-automation economy.<br><br>", 
    "I am running for Downtown Chair because I believe every student has a right to be heard, a right to growth, and a right to success.", 
    "<br><br>The BCITSA was built to protect all BCIT students and continues to evolve, take on new challenges and include new voices.<br><br>"]
about.addEventListener("click", toggleAbout);
contact.addEventListener("click", toggleContact);
let contactList = ["<p>Email: Felix.Ruttan@gmail.com</p>", 
                    "<p><a href='https://www.linkedin.com/in/niceandgoodboyonline/ target='_blank' '>LinkedIn</a></p>",
                    "<p>Discord: FelixRuttan#5642</p>"]
let langState = true;
let aboutState = false;
let contactState = false;
let maiden = true;
let slimer;
let forg = "<img id='forg' src='./img/forg.png'>"
let forg2 = "<a href='https://www.linkedin.com/in/niceandgoodboyonline/' target='_blank' style='float:right'><img id='frog2' src='./img/forg.png'></a>"
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

function toggleContact(){


    if(window.innerHeight > window.innerWidth){
        set_portrait_contact()
    }
    else{
        set_landscape_contact()
    }

}

function set_portrait_about(){

    if (aboutState==true){
        aboutState=false;
        aboutContent.innerHTML = forg
        about.style.height = '12vw'
        about.style.width = '12vw'
        about.style.right = "-5vw"
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
        aboutContent.innerHTML = forg2 + bioList[0] + bioList[1] + dumb + bioList[2] + bioList[3]
        aboutContent.style.boxShadow ="0 4px 8px 0 rgba(0, 0, 0, 0.7), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        about.style.height = '80vh'
        about.style.width = '100vw'
        about.style.right = "0vw"
        aboutContent.style.fontSize = "4vw"
        aboutContent.style.backgroundColor = "silver"
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
        about.style.right = "-5vw"
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
        about.style.width = '70vw'
        about.style.bottom = "-5vw"
        about.style.right = "0vw"
        aboutContent.innerHTML = forg2 + bioList[0] + bioList[1] + dumb + bioList[2] + bioList[3]
        aboutContent.style.boxShadow ="0 4px 8px 0 rgba(0, 0, 0, 0.7), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        aboutContent.style.fontSize = "4vh"
        aboutContent.style.backgroundColor = "silver"
        aboutContent.style.padding = "4vw"
        about.style.transition = "0.5s"
        about.style.overflowY = "scroll"
    }
}

function set_portrait_contact(){

    if (contactState==false){
        contactState=true;
        contact.style.height = "auto"
        contact.style.width = "50vw"
        contactContent.innerHTML = "<hr>" + contactList[0] + contactList[1]
        contact.classList.remove("contactNudge")
    }
    else{
        contactState=false;
        contact.style.height = "auto"
        contact.style.width = "17vw"
        contactContent.innerHTML = ""
        contact.classList.add("contentNudge")
    }

}


function set_landscape_contact(){
    
    if (contactState==false){
        contactState=true;
        contact.style.height = "auto"
        contact.style.width = "50vw"
        contactContent.innerHTML = "<hr>" + contactList[0] + contactList[1]
        contact.classList.remove("contactNudge")
    }
    else{
        contactState=false;
        contact.style.height = "auto"
        contact.style.width = "17vw"
        contactContent.innerHTML = ""
        contact.classList.add("contentNudge")
    }
}

function onOrientationChange() {
    aboutState = true
    langState = true
    contactState = true
    switch(window.orientation) {  
      case -90: case 90:
        set_landscape_contact()
        set_landscape_about()
        break; 
      default:
        set_portrait_contact()
        set_portrait_about()
        break; 
    }
}

  
window.addEventListener('orientationchange', onOrientationChange);

function toggleSlide(bool){
    clearTimeout(slimer)

    if(bool==false){
        maiden=true;
        about.classList.remove("slipOut", "slipIn")
    }
    else{
        slimer = setTimeout(function() {toggleSlide(true)}, 80*K)
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

function makeLanguageList(){
    //translated
    let en = [
        "Felix for Downtown Chair 2020-2021"
        ,
        '<em>"Alone we can do so little; <br>together we can do so much"<br><br>― Helen Keller</em>'
        ,
        "Strengthen the Downtown Cross-Program Community"
        ,
        "Constant collaboration, net-working and strong-peer-bonds are a few reasons BCIT graduates are highly effective in the workplace.\
        <br><br>Industry leaders organize as a super-tribe and so can we! \
        <br><br>Let's lay the cornerstone of a tradition of inter-program, inter-set, and inter-level collaboration."
        ,
        "Build a Bridge Between BCITSA & ISEP"
        ,
        "<strong>Every ISEP student has access to all of the BCITSA's services. </strong>\
        <br><br>Spreading awareness about this, making services more accessible, and ensuring all ISEP students feel supported and part of the DTC community is important to me. \
        <br><br>The Student Association works for every student, <em>including you!</em>"
        ,
        "Promote Wellness Services"
        ,
        "Making the most of your time at BCIT and getting the most out of your education requires students (<em>and teachers!</em>) to take wellness seriously. \
        <br><br>Physical and mental wellbeing have a huge impact on our professional and personal lives. \
        <br><br>I believe putting wellness services front and centre, for everyone at the DTC, is critical to impoving the experience of every student." 
        ,
        "A Pledge to Listen"
        ,
        "My greatest strength is listening!\
        <br><br>I believe I can serve the DTC student body much better by listening than prescribing. \
        <br><br>My current goals reflect what I have heard from my set, my cohort, CST, CIT and Full-Stack students, international students, the current Downtown Chair Dawson Verboven, and the BCITSA councillors, executives and staff. \
        <br><br>The greatest success I could hope for as Downtown Chair is for all students to feel heard, included and served by the BCITSA."
    ]
    let frs = [
        "FELIX FOR DOWNTOWN CHAIR 20-21"
        ,
        "ما به تنهایی قادر به انجام دادن کارهای کوچک هستیم اما با هم، کارهای بزرگی انجام خواهیم داد.\"<br><br> –هلن کلر"
        ,
        "قوی کردن اجتماع بین رشته ای در Downtown"
        ,
        "  همکاری دائمی، ارتباطات، و روابط قوی بین ئو نفر تنها بخشی از دلایلی است که فارغ التحصیلان BCIT، افرادی بسیار کارآمد در محیط کار هستند.<br><br>\
        مدیران صنعت به عنوان افرادی قدرتمند و کارآمد شناخته می شوند. ما نیز می توانیم مانند آنها باشیم.<br><br>\
        بیایید رسوم همکاری درون برنامه ای، درون کلاسی، و درون سطحی را کنار بگذاریم."
        ,
        "ساختن پلی بین BCITSA و ISEP"
        ,
        "تمام دانشجویان ISEP دسترسی کامل به سرویس های BCITSA دارند.<br><br>\
        آگاهی سازی در مورد این موضوع، آسان سازی دسترسی به این سرویس ها، و همچنین اطمینان از اینکه تمام دانشجویان ISEP احساس کنند که عضوی از اجتماع DTC هستند و از آن ها حمایت میشود، برای من مهم است.<br><br>\
        Student Association برای تمام دانشجویان است، حتی شما!        "
        ,
        "ترویج سرویس های سلامت"
        ,
        "استفاده ی کامل از وقتتان در BCIT و نتیجه ی کامل گرفتن از تحصیلاتتان، نیاز به سالم بودن دانشجویان (و استادان!) و جدی گرفتن وضعیت سلامت دارد.<br><br>\
        وضعیت سلامتی روحی و فیزیکی، تاثیر زیادی روی زندگی حرفه ای و شخصی ما دارد.<br><br>\
        من باور دارم که قرار دادن سرویس های سلامت در مرکز توجه و در اختیار همه در DTC، مهم و ضروری برای رشد تجربه هر دانشجو می باشد.        "
        ,
        "تعهدی برای گوش دادن"
        ,
        "بزرگترین نقظه قوت من گوش دادن است!<br><br>\
        باور دارم که من با گوش دادن به شما به جای تعیین کردن و از پیش نسخه نوشتن، می توانم نماینده ی بهتری برای شما و DTC باشم.<br><br>\
        هذف فعلی من بازتابی از شنیده هایم از کلاسم، همکارانم، دانشجویان رشته های CST، CIT، و Full-Stack، دانشجویان بین المللی، نماینده ی فعلی Downtown، داوسن وربودن، مشاوران BCITSA، مدیران و کارکنان است.<br><br>\
        بزرگترین موفقیتی که من به عنوان نماینده ی دانشجویان در Downtown امید به دست یافتنش دارم این است که، تمام دانشجویان احساس کنند که جزیی از اجتماع BCIT هستند، حرف هایشان شنیده می شود و BCITSA در اختیار آنها نیز می باشد.         "

    ]
    let hdi = [
        "फीलिक्स - डाउनटाउन अध्यक्ष (20-21) के लिए उम्मीदवार"
        ,
        '\“अकेले हम उतना नहीं  कर सकते, जितना साथ मिलकर कर सकते हैं।\” - हेलेन केलर'
        ,
        "डाउनटाउन  के हर प्रोग्राम के संबंध को मज़बूत बनाना"
        ,
        "बी.सी.आई.टी से पढ़े विद्यार्थियों के वार्तालाप करने की क्षमता, कार्य स्थल मे उनके उम्दा  प्रदर्शन का कारण है।<br><br>\
        यदि उद्योग के नेता अपनी पहचान एक समुदाय के रूप में कर सकते हैं, तो हम क्यों नहीं!<br><br>\
        आइए साथ मिलकर इस परंपरा को शुरू करें - एकजुट रहें और एक दूसरे का सहयोग करें।"
        ,
        "बी.सी.आई.टी.एस.ए और आईसेप को जोड़ने का माध्यम बनना"
        ,
        "<strong>आईसेप के छात्र बी.सी.आई.टी.एस.ए की सेवाओं का पूरा लाभ उठा सकते हैं। </strong><br><br>\
        इस बारे में जागरूकता फैलाना मेरा उद्देश्य है। मैं यह सुनिश्चित करना चाहता हूँ कि यह सुविधाएँ सबको उपलब्ध हों। मेरे लिए यह बहुत ज़रूरी है कि आईसेप के विद्यार्थियों को हर तरह से सहयोग मिले और उनको एहसास हो कि हम सब उनके साथ हैं। <br><br>\
        छात्र संगठन सबके लिए काम करता है। "
        ,
        "शारीरिक और मानसिक तंदुरुस्ती का समर्थन"
        ,
        "विद्यालय में बिताए हुए समय और प्राप्त की गई शिक्षा का पूरा लाभ उठाने के लिए शारीरिक और मानसिक तंदुरुस्ती का ध्यान रखना बहुत ज़रूरी है। विद्यार्थियों के साथ-साथ अध्यापकों के लिए भी महत्वपूर्ण है। <br><br>\
        शारीरिक और मानसिक स्थिति का हमारे निजी एवं व्यावसायिक जीवन पर गहरा असर पड़ता है। <br><br>\
        मेरा मानना है कि छात्रों के अच्छे अनुभव के लिए यह बहुत ज़रूरी है कि शारीरिक और मानसिक स्वास्थ्य से संबंधित सुविधाएँ सबको उपलब्ध हों। <br><br>"
        ,
        "सुनने का प्रण "
        ,
        "लोगों की बात सुनना और समझना मेरी सबसे बड़ी ताकत है! <br><br>\
        मेरा मानना है कि मैं बोलने से ज़्यादा, छात्रों की परेशानियों को सुन के उनकी मदद कर सकता हूँ। <br><br>\
        मेरा मौजूदा लक्ष्य यही है जो मैने अपनी कक्षा, सी.एस.टी, सी.आई.टी और फुल-स्टैक के विद्यार्थी,अंतरराष्ट्रीय विद्यार्थी, वर्तमान डाउनटाउन अध्यक्ष- डौसन वर्बोवन और बी.सी.आई.टी.एस.ए के पार्षद, कार्य पालक एवं कर्मचारियों से सुना है। <br><br>\
        यदि मैं डाउनटाउन का अध्यक्ष बन जाता हूँ तो मेरी सबसे बड़ी सफलता की आशा यह होगी कि विद्यार्थियों को यह एहसास हो कि बी.सी.आई.टी.एस.ए उनके लिए है और उनसे हीं बना है। "
    ]

    //untranslated
    let esp = en
    let kr = en
    let ch = en

    languages = [en, esp, kr, ch, frs, hdi]
    
    return languages
}

languages = makeLanguageList()

function switchLang(langCode){
    contentList = []

    if (langCode == 4){
        console.log("farsi")
        for (let i = 0; i < 5; i++){
            head = document.getElementById("head" + i)
            body = document.getElementById("body" + i)
            head.classList.toggle("rtl")
            body.classList.toggle("rtl")
            contentList.push( head )
            contentList.push( body )
        }
    }
    else{
        for (let i = 0; i < 5; i++){
            head = document.getElementById("head" + i)
            body = document.getElementById("body" + i)
            head.classList.remove("rtl")
            body.classList.remove("rtl")
            contentList.push( head )
            contentList.push( body )
       }
    }

    langList = languages[langCode]

    for (let i = 0; i < langList.length; i++){
        contentList[i].innerHTML = langList[i]
    }
}
