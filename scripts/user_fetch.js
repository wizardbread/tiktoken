
import { user_popup,user_search,submit,display,search_icon,register_stats,register_stats_counter,supply_stats,supply_stats_counter,reward_stats,reward_reduced_state,reward_stats_counter,copyed,search_closeBTN,DOMcard,menu_popup,checkbox4 } from "./domCalls.js";



// const user_search = document.getElementById('user')
// const user_popup = document.getElementById('search_popup')
// const submit = document.getElementById('submit')
// const display = document.getElementById('display')
// const search_icon = document.getElementById('search_icon')
// const register_stats = document.getElementById('regStats')
// const register_stats_counter = document.getElementById('regCounter')
// const supply_stats = document.getElementById('supplyStats')
// const supply_stats_counter = document.getElementById('supplyCounter')
// const reward_stats= document.getElementById('rewardStats')
// const reward_stats_counter = document.getElementById('rewardCounter')
// const reward_reduced_state = document.getElementById('rewardReduced')
// const copyed = document.getElementById('copyed')
// const search_closeBTN = document.getElementById('closeBTN')
// const DOMcard = document.getElementById('sweep')
// const menu_popup = document.getElementById('menu_popup')
// const checkbox4 = document.getElementsByClassName('checkbox4')


export function fetchData(url) {
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not OK');
        }
        return response.json();
      })
      .catch(error => {
        // console.error('Error:', error);
      });
  }



// document.addEventListener("change", (change)=>{

//     if(screenX < )



// })







  /// Load Dom Content

document.addEventListener('DOMContentLoaded',()=>{
    supplyStats.innerText = `Loading..`
    register_stats.innerText = 'Loading..'
    reward_stats.innerText = 'Loading..'
    reward_reduced_state.innerText = 'Loading..'
    fetchData(`https://identity-resolver-5ywm7t2p3a-pd.a.run.app/stats`)
    .then(data =>{
        const statData = data;
        //registered Users
        register_stats.innerText = `${statData.contractInfo.userCounter}`
        // register_stats_counter.style.width = `${register_stats.innerText}px`
  

        //Token Supply

       supplyStats.innerText = `${statData.notationValues.remainingSupplyNot}`
        
        if(statData.notationValues.remainingSupplyNot <= 1){
            supply_stats_counter.style.width = `90%`

        }
        if(statData.notationValues.remainingSupplyNot <= 0.8){
            supply_stats_counter.style.width = `80%`

        }
        if(statData.notationValues.remainingSupplyNot <= 0.79){
            supply_stats_counter.style.width = `70%`

        }
        if(statData.notationValues.remainingSupplyNot <= 0.69){
            supply_stats_counter.style.width = `60%`

        }
        if(statData.notationValues.remainingSupplyNot <= 0.59){
            supply_stats_counter.style.width = `50%`

        }
        if(statData.notationValues.remainingSupplyNot <= 0.49){
            supply_stats_counter.style.width = `40%`

        }
        if(statData.notationValues.remainingSupplyNot <= 0.29){
            supply_stats_counter.style.width = `20%`

        }
        if(statData.notationValues.remainingSupplyNot <= 0.19){
            supply_stats_counter.style.width = `10%`

        }

        // rewards

        let rewardNum = statData.notationValues.currentRewardNot
        

        reward_stats.innerHTML = `<h1 id="rewardStats">${rewardNum}</h1>`
        reward_reduced_state.innerText = `${statData.decimalValues.nextHalvingDec}`

        if(statData.decimalValues.untilHalvingDec <= 1){
            reward_stats_counter.style.width = `90%`
        }
        if(statData.decimalValues.untilHalvingDec  <= 0.89){
             reward_stats_counter.style.width = `80%`

        }
        if(statData.decimalValues.untilHalvingDec  <= 0.69){
             reward_stats_counter.style.width = `60%`

        }
        if(statData.decimalValues.untilHalvingDec  <= 0.49){
             reward_stats_counter.style.width = `40%`

        }
        if(statData.decimalValues.untilHalvingDec  <= 0.29){
             reward_stats_counter.style.width = `20%`
        }
        if(statData.decimalValues.untilHalvingDec  <= 0.19){
             reward_stats_counter.style.width = `10%`
        }
        
        //reward_stats.innerText = `${statData.notationValues.currentRewardNot}`



    })
    .catch(err =>{

        console.error(error);
    });
})


// Submit Data to API with Click
submit.addEventListener('click', ()=>{
if(user_search.value != "" && user_search.value != "@" ){
  window.open(`https://wallet-docker-ov3hl4xdcq-uc.a.run.app/profile?handle=${user_search.value}`)

}else{
  display.value = `Invailed User`
}
  
})
// submit.addEventListener('click', ()=>{

//     display.value = `Exploring BlockChain ...`
//     if(user_search.value != ``){
//         fetchData(`https://identity-resolver-5ywm7t2p3a-pd.a.run.app/user?handle=${user_search.value}`)
//         .then(data =>{
//             const userObj = data;
//             console.log(userObj);
//             console.log(userObj["tiktok-user"]);
//             display.value = `${userObj["linked-wallet"].address}`
//         })
//         .catch(err =>{
//             display.value = `Invailed Username`
//             console.error(error);
//         });
//     }else{
//         display.value = `Please enter a username`
//     }
// })

// Submit Data to API with KeyPress
user_search.addEventListener('keydown', (event)=>{
  display.value = `Exploring BlockChain ...`
 setTimeout(() => {
  if(user_search.value != ``){
    fetchData(`https://identity-resolver-5ywm7t2p3a-pd.a.run.app/user?handle=${user_search.value}`)
    .then(data =>{
        const userObj = data;
        // console.log(userObj);
        // console.log(userObj["tiktok-user"]);
        if(userObj["linked-wallet"].isRegistered === false){
          display.value = "Username is not registered"
        }else{

          display.value = `${userObj["linked-wallet"].address}`
        }
    })
    .catch(err =>{
        display.value = `User Not found`
        // console.error(error);
    });
}  else{
  display.value = `Please enter a username`
}
 }, 3000);
   
  
  
})
 

// Search Button
document.addEventListener('click', (event) => {

    // console.log(event.pageY);
    if (event.target.closest('#search_icon')) {
        menu_popup.style.animationName = "slidein"
        menu_popup.style.animationDuration = "1s"
        menu_popup.style.animationDirection = "reverse"
        menu_popup.style.animationIterationCount= 1
        checkbox4[0].checked = false

        setTimeout( ()=>{
            menu_popup.style.display = 'none';
        },900)
      if (user_popup.style.display === 'flex') {
        user_popup.style.animationName = "RISEIN"
        user_popup.style.animationDuration = "0.6s"
        user_popup.style.animationDirection = "reverse"
        user_popup.style.animationIterationCount= 1

        setTimeout( ()=>{
            user_popup.style.animationName = "RISEUP"
            user_popup.style.animationDuration = "1.5s"
            user_popup.style.animationDirection = "normal"
            user_popup.style.display = 'none';
        },500)
      } else {
        user_popup.style.display = 'flex';
       
      }
    } else if(event.target.closest('#closeBTN')){
        if (user_popup.style.display === 'flex') {
            user_popup.style.animationName = "RISEIN"
        user_popup.style.animationDuration = "0.6s"
        user_popup.style.animationDirection = "reverse"
        user_popup.style.animationIterationCount= 1

        setTimeout( ()=>{
            user_popup.style.animationName = "RISEUP"
            user_popup.style.animationDuration = "1.5s"
            user_popup.style.animationDirection = "normal"
            user_popup.style.display = 'none';
        },500)
          } else {
            user_popup.style.display = 'flex';
           
          }
    }

    
    else if (!event.target.closest("#search_popup") ) {

      if (user_popup.style.display === 'flex') {
        user_popup.style.animationName = "RISEIN"
    user_popup.style.animationDuration = "0.6s"
    user_popup.style.animationDirection = "reverse"
    user_popup.style.animationIterationCount= 1

    setTimeout( ()=>{
        user_popup.style.animationName = "RISEUP"
        user_popup.style.animationDuration = "1.5s"
        user_popup.style.animationDirection = "normal"
        user_popup.style.display = 'none';
    },500)
      } 
    }
  });



//Menu Button
document.addEventListener('click', (event) => {
    
   // console.log(event.pageY);
    if (event.target.closest('#checkbox4')) {
        user_popup.style.animationName = "RISEIN"
        user_popup.style.animationDuration = "0.6s"
        user_popup.style.animationDirection = "reverse"
        user_popup.style.animationIterationCount= 1

        setTimeout( ()=>{
            user_popup.style.animationName = "RISEUP"
            user_popup.style.animationDuration = "1.5s"
            user_popup.style.animationDirection = "normal"
            user_popup.style.display = 'none';
        },500)
      if (menu_popup.style.display === 'flex') {
       
        menu_popup.style.animationName = "slidein"
        menu_popup.style.animationDuration = "1s"
        menu_popup.style.animationDirection = "reverse"
        menu_popup.style.animationIterationCount= 1
        checkbox4[0].checked = false

        setTimeout( ()=>{
            
            menu_popup.style.display = 'none';
        },900)
        
        
        
      } else {
        menu_popup.style.display = 'flex';
        menu_popup.style.animationName = "slideout"
        menu_popup.style.animationDirection = "normal"
        
      }
    }


      else if (!event.target.closest("#menu_popup") ) {

        if (menu_popup.style.display === 'flex') {
       
          menu_popup.style.animationName = "slidein"
          menu_popup.style.animationDuration = "1s"
          menu_popup.style.animationDirection = "reverse"
          menu_popup.style.animationIterationCount= 1
          checkbox4[0].checked = false
  
          setTimeout( ()=>{
              
              menu_popup.style.display = 'none';
          },900)
        } 
      }





    } );

    
    // else if (event.pageY > 100 || event.pageX > 900) {

    //   if (user_popup.style.display === 'flex') {
    //     user_popup.style.display = 'none';
    //   }
    // }


//Copy function 
display.addEventListener('click',()=>{
    

    if(display.value != ''){
    navigator.clipboard.writeText(`${display.value}`)
    copyed.innerText ='copied'
    copyed.style.display = 'block'
    copyed.style.animationName = 'copy-play';
    copyed.style.animationDuration = '1s';
    copyed.style.animationIterationCount = '1';
    setTimeout( ()=>{
        copyed.style.display = 'none';
        

    },900)}
})












  


