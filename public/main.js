let crepes = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v"]
  , infoBoxes = ["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen","twenty","twentyone","twentytwo"];


document.addEventListener("DOMContentLoaded", function(){
    document.querySelectorAll("h3").forEach( c => c.addEventListener("click", function(event){
       event.target.parentNode.style.display = "none";
       document.querySelector(".container").style.top = "0";
    }) );
    crepes.forEach( function(crepe,index){
        let elCrepe = document.getElementById(crepe);
        // (function(elCrepe){
            // console.log(elCrepe)
            elCrepe.addEventListener("click",function(){
                let el = document.getElementById(infoBoxes[index]);
                // el.style.position = "relative";
                // console.log(elCrepe)
                // console.log("offsetTop", elCrepe.offsetTop)
                el.style.display = "block";
                el.style.top = (elCrepe.offsetTop + 50) + "px";
                el.style.left = (elCrepe.offsetLeft - 17) + "px";
            });
        // })(elCrepe);
    });
});

// document.addEventListener("DOMContentLoaded", function(){
//     document.getElementById("a").addEventListener("click", function(){
//         document.getElementById("one").style.visibility = "visible";
//     })
//     document.getElementById("b").addEventListener("click", function(){
//         document.getElementById("two").style.visibility = "visible";
//     })
//     document.getElementById("c").addEventListener("click", function(){
//         document.getElementById("three").style.visibility = "visible";
//     })
//     document.getElementById("d").addEventListener("click", function(){
//         document.getElementById("four").style.visibility = "visible";
//     })
//     document.getElementById("e").addEventListener("click", function(){
//         document.getElementById("five").style.visibility = "visible";
//     })
//     document.getElementById("f").addEventListener("click", function(){
//         document.getElementById("six").style.visibility = "visible";
//     })
//     document.getElementById("g").addEventListener("click", function(){
//         document.getElementById("seven").style.visibility = "visible";
//     })
//     document.getElementById("h").addEventListener("click", function(){
//         document.getElementById("eight").style.visibility = "visible";
//     })
//     document.getElementById("i").addEventListener("click", function(){
//         document.getElementById("nine").style.visibility = "visible";
//     })
//     document.getElementById("j").addEventListener("click", function(){
//         document.getElementById("ten").style.visibility = "visible";
//     })
//     document.getElementById("k").addEventListener("click", function(){
//         document.getElementById("eleven").style.visibility = "visible";
//     })
//     document.getElementById("l").addEventListener("click", function(){
//         document.getElementById("twelve").style.visibility = "visible";
//     })
//     document.getElementById("m").addEventListener("click", function(){
//         document.getElementById("thirteen").style.visibility = "visible";
//     })
//     document.getElementById("n").addEventListener("click", function(){
//         document.getElementById("fourteen").style.visibility = "visible";
//     })
//     document.getElementById("o").addEventListener("click", function(){
//         document.getElementById("fifteen").style.visibility = "visible";
//     })
//     document.getElementById("p").addEventListener("click", function(){
//         document.getElementById("sixteen").style.visibility = "visible";
//     })
//     document.getElementById("q").addEventListener("click", function(){
//         document.getElementById("seventeen").style.visibility = "visible";
//     })
//     document.getElementById("r").addEventListener("click", function(){
//         document.getElementById("eighteen").style.visibility = "visible";
//     })
//     document.getElementById("s").addEventListener("click", function(){
//         document.getElementById("nineteen").style.visibility = "visible";
//     })
//     document.getElementById("t").addEventListener("click", function(){
//         document.getElementById("twenty").style.visibility = "visible";
//     })
//     document.getElementById("u").addEventListener("click", function(){
//         document.getElementById("twentyone").style.visibility = "visible";
//     })
//     document.getElementById("v").addEventListener("click", function(){
//         document.getElementById("twentytwo").style.visibility = "visible";
//     })
//     document.querySelectorAll("h3").forEach( c => c.addEventListener("click", function(event){
//        event.target.parentNode.style.visibility = "hidden";
//    }) );
// })