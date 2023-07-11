
export const load = null
//Page Toggle DOM elements

const videoCheck = document.getElementsByClassName('checkbox5')
const videoHTML = document.getElementById('checkbox5')
const mintCheck = document.getElementsByClassName('checkbox6')
const mintHTML= document.getElementById('checkbox6')
const tikCheck = document.getElementsByClassName('checkbox7')
const tikHTML = document.getElementById('checkbox7')
const mapCheck = document.getElementsByClassName('checkbox8')
const mapHTML = document.getElementById('checkbox8')
const windowContainer = document.getElementById('windowContainer')
const TargetMint = document.getElementById('targetMint')
const targetVideo = document.getElementById('targetVideo')
const targetTik = document.getElementById('targetTik')
const targetMap = document.getElementById('targetMap')
const MenuMint = document.getElementById('menuMint')




windowContainer.addEventListener('scroll', (event)=>{
})


videoHTML.addEventListener("click",()=>{
  if(videoCheck[0].checked != true){
    videoCheck[0].checked = true
    mintCheck[0].checked = false
    tikCheck[0].checked = false
    mapCheck[0].checked = false
    mapHTML.style.borderBottom=""
    mintHTML.style.borderBottom=""
    tikHTML.style.borderBottom=""
    videoHTML.style.borderBottom="5px white solid"
  }

  targetVideo.scrollIntoView({
    behavior: "smooth",
  })
 

})
mapHTML.addEventListener("click",()=>{
  if(mapCheck[0].checked != true){
    videoCheck[0].checked = false
    mintCheck[0].checked = false
    tikCheck[0].checked = false
    mapCheck[0].checked = true
    mapHTML.style.borderBottom="5px white solid"
    mintHTML.style.borderBottom=""
    tikHTML.style.borderBottom=""
    videoHTML.style.borderBottom=""
  }
  targetMap.scrollIntoView({
    behavior: "smooth",
  })
 
  console.log(videoCheck[0].checked);
})


mintHTML.addEventListener("click",()=>{
  if(mintCheck[0].checked != true){
    videoCheck[0].checked = false
    mintCheck[0].checked = true
    tikCheck[0].checked = false
    mapCheck[0].checked = false
    mapHTML.style.borderBottom=""
    tikHTML.style.borderBottom=""
    videoHTML.style.borderBottom=""
    mintHTML.style.borderBottom="5px white solid"
  }

 TargetMint.scrollIntoView({
    behavior:"smooth"
 })


})


MenuMint.addEventListener("click",()=>{

    mapHTML.style.borderBottom=""
    tikHTML.style.borderBottom=""
    videoHTML.style.borderBottom=""
    mintHTML.style.borderBottom="5px white solid"
    TargetMint.scrollIntoView({
        behavior:"smooth"
    })
})


tikHTML.addEventListener("click",()=>{
  if(tikCheck[0].checked != true){
    tikHTML.style.borderBottom="5px white solid"
    mintHTML.style.borderBottom=""
    mapHTML.style.borderBottom=""
    videoHTML.style.borderBottom=""
    videoCheck[0].checked = false
    mintCheck[0].checked = false
    tikCheck[0].checked = true
    mapCheck[0].checked = false
  }
  targetTik.scrollIntoView({
    behavior: "smooth",
  })
  
})




