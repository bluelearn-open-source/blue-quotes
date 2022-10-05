
let darkMode=false;
var dark=document.getElementById("dark");
var moon=document.getElementById("moon");
var sun=document.getElementById("sun");
var nav=document.getElementById("nav");
var body=document.getElementById("body");
var logo=document.getElementById("logo")

dark.addEventListener('click',handleCLick)

function handleCLick(){
    if(darkMode===false){
        darkMode=true;
        moon.style.visibility="hidden";
        sun.style.visibility="visible";
        dark.style.backgroundColor="white";
       logo.style.color="white";
        body.style.backgroundColor="rgb(40, 46, 65)"
        nav.style.backgroundColor="#28292e"
        // console.log(nav);
    }
    else{

        darkMode=false;
        logo.style.color="black";
        dark.style.backgroundColor="#2e2f30";
        body.style.backgroundColor="#eee"
        sun.style.visibility="hidden";
        moon.style.visibility="visible";
         nav.style.backgroundColor="#dcdee6";
        
    }
   

    // console.log(darkMode);
}



// function handleClick(){
//     darkMode=true
//     console.log(darkMode)
// }