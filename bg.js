const container=document.querySelector(".container");
const body =document.querySelector("body");

let divSec=()=>{
  return ( container.innerHTML=
  `<div class="sec1">
  <p>Select the Inputs to change the background</p>
  <input type="color" id="color1" name="color1" value="#00ff00">
  <input type="color" id="color2" name="color2" value="#ff0000">
  <span></span>
  <button type="submit">Click Me to See the Magic!</button>
  </div>`)
}
divSec();
const color1=document.querySelector("#color1");
const color2=document.querySelector("#color2");
const span=document.querySelector("span");
const btn=document.querySelector("button");
let createNode=()=>{
    let result=document.createElement("h4");
    result.innerHTML=`The linear gradient colors are ${color1.value} ,${color2.value}`;
    span.appendChild(result);
  }
  createNode();


color1.addEventListener("input",()=>{
    document.querySelector("h4").textContent=`The linear gradient colors are ${color1.value} ,${color2.value}`
    bodyColor();

})

color2.addEventListener("input",()=>{
    document.querySelector("h4").textContent=`The linear gradient colors are ${color1.value} ,${color2.value}`
    bodyColor();
  })

  btn.addEventListener("click",()=>{
    hexCodegenerate();
  })


let bodyColor=()=>{
    body.style.background=`linear-gradient(to right, ${color1.value}, ${color2.value})`;
}


let hexCodegenerate=()=>{
    let letters = "0123456789ABCDEF";
    let newcolor1 = '#';
    let newcolor2 = '#';
    for (let i = 0; i < 6; i++){
        newcolor1 += letters[(Math.floor(Math.random() * 16))]; 
    }


    for (let i = 0; i < 6; i++){
        newcolor2 += letters[(Math.floor(Math.random() * 16))]; 
    }
    color1.value=newcolor1;
    color2.value=newcolor2;
    document.querySelector("h4").textContent=`The linear gradient colors are ${color1.value} ,${color2.value}`
    body.style.background=`linear-gradient(to right, ${color1.value} ,${color2.value})`;
    
}





     
      
    


