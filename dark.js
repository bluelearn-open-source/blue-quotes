
let darkMode=false;
var dark=document.getElementById("dark");
var moon=document.getElementById("moon");
var sun=document.getElementById("sun");
var nav=document.getElementById("nav");
var body=document.getElementById("body");

dark.addEventListener('click',handleCLick)

function handleCLick(){
    if(darkMode===false){
        darkMode=true;
        moon.style.visibility="hidden";
        sun.style.visibility="visible";
        dark.style.backgroundColor="white";
       
        body.style.backgroundColor="#414758"
        nav.style.backgroundColor="#28292e"
        // console.log(nav);
    }
    else{
        darkMode=false;
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