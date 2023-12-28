let fromEl=document.getElementById('from')
let toEl=document.getElementById('to')
let btnEl=document.getElementById('btn')
let spanEl=document.getElementById('span')
console.log(fromEl.textContent)

btnEl.onclick=function(){
    if (fromEl.value===""){
        alert("Enter From Value");
        return
    }
    else if (toEl.value===""){
        alert("Enter to Value")
    }
    else{
        count=parseInt(fromEl.value)
        let uniqueNo=setInterval(function(){
            spanEl.textContent=count
            count=count+1

            if (count-1>parseInt(toEl.value)){
                clearInterval(uniqueNo)
                spanEl.textContent=""
            }
        },1000)
        fromEl.value=""
        toEl.value=""
    }
}