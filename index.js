
/* 
ORIp_2295098
PIEj_2295295

Référances: 
https://github.com/0shuvo0/pilex-art
https://codingartistweb.com/2022/04/pixel-art-maker-with-javascript/ */

const grid = document.getElementById("grid")
const gridSizeInput = document.getElementById("gridSizeInput")
let amount = gridSizeInput.value
const colorInput = document.getElementById("colorInput")
const colorInputDisplay = document.getElementById("colorInputDisplay")
const sizeDisplay=document.getElementById("sizeDisplay")
const erase=document.getElementById("erase")
let colorArray = []

gridSizeInput.addEventListener('click', (e)=>initializeGrid(e.target.value))
colorInput.addEventListener('click', (e)=> {
            colorArray.push(e.target.value)
            initializeColorDisplay()
                                    })
                                  
erase.addEventListener("click", () => {
    colorInput.value="#000000";
    colorInputDisplay.innerHTML="";
 initializeGrid(amount)
  });

  const initializeColorDisplay=()=>{
    /* Remise à 0 des anciens paramètres */
    colorInputDisplay.innerHTML="";
    colorArray.length>0? erase.style.visibility="visible":erase.style.visibility="hidden"
    colorInputDisplay.innerHTML = "<div style=background-color:"+colorInput.value+"></div>";
    }

const initializeGrid = (amount) => {
    /* Remise à 0 des anciens paramètres */
    grid.innerHTML="";
   sizeDisplay.innerText=`${amount}x${amount}`

   grid.style.setProperty('--amount', amount) 
   
    for (let i = 0; i < amount * amount; i++) {
      const div = document.createElement('div')
      div.classList.add('gridSquare')
   
  const changeColor = (e) => {
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);
      div.style.backgroundColor = "#" + randomColor;
  } 
  div.addEventListener('mouseover', changeColor)

  colorInput.addEventListener('click', function(){ 
    div.addEventListener('mouseover', function(){
    div.style.backgroundColor = colorInput.value})
})
      grid.appendChild(div)
}}

initializeGrid(amount)
