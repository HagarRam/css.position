function handleClick(){
    console.log(`element clicked`);
    document.getElementById("place-I-Love").style.color="red";
    document.getElementById("contactMe").style.color="red";
}
function delayHandleClick(){
    setTimeout(handleClick, 3000);
}