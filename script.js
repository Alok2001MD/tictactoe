
const boxes=document.querySelectorAll('.dabba');
const resetbtn=document.querySelector('.reset')
let currentplayer=0;
let winningpattren=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
let winnerdetermined=true;

// boxes.forEach((dabba)=>{
// dabba.addEventListener("click",()=>{
//     if (currentplayer==0) {
//         player0(dabba);
       
//     }
//    else{
//       player1(dabba);
//     }
//     currentplayer = (currentplayer + 1) % 2;
// })

// });

// player0=(dabba)=>{
//     dabba.innerHTML='O';
    
// }
// player1=(dabba)=>{
//     dabba.innerHTML='X';
   
// }
// for(i=0;i<=9;i++){
boxes.forEach((dabba)=>{
    dabba.addEventListener("click",()=>{
        if(currentplayer===0){
            dabba.innerHTML='O'
            currentplayer=1;
        }
        else{
            dabba.innerHTML='X'
            currentplayer=0;
        }
        dabba.disabled=true;
        chechwinner();
       
       

    })
    
 
    resetbtn.addEventListener('click',()=>{
    dabba.disabled=false
    boxes.forEach((dabba)=>{
        dabba.innerHTML=''
    })
})
})



const chechwinner = () => {
    for (let pattern of winningpattren) {
        let posval1 = boxes[pattern[0]].innerText;
        let posval2 = boxes[pattern[1]].innerText;
        let posval3 = boxes[pattern[2]].innerText;
        
        if (posval1 !== "" && posval2 !== "" && posval3 !== "") {
            if (posval1 == posval2 && posval2 == posval3) {
               document.querySelector('.start').textContent=`Congratulations player${posval1} won😍😍😍😍` 
                winnerdetermined=false;
      
            }
        }
        
    }
    if(winnerdetermined==false){
            boxes.forEach((dabba)=>{
                dabba.innerHTML=''
                dabba.disabled=false;
            })
    // }else{
    //     document.querySelector('.start').textContent=`GOOD LUCK NEXT TIME🥲`  
    //         // dabba.disabled=false
    //         // boxes.forEach((dabba)=>{
    //         //     dabba.innerHTML=''
    //         // })
        
    }
        }
