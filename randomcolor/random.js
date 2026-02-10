const randomcolor=function(){
    const hex="0123456789ABCDEF";
    let color='#';
    for(let i=0;i<6;i++){
        let val=Math.floor(Math.random()*16);
        color+=hex[val];
    }
    return color;
}
let intervalId;
function startchanging(){
    document.querySelector('body').style.backgroundColor=randomcolor();

}
function stopchanging(){
     clearInterval(intervalId);
    document.querySelector('body').style.backgroundColor="white";
    
}
document.querySelector('#start').addEventListener('click',function(e){
  intervalId= setInterval(startchanging,200);
});
document.querySelector('#stop').addEventListener('click',function(e){
    stopchanging();
})