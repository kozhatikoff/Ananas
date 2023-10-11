let quality=document.querySelector(".mainView")
let quanity=document.querySelector(".percent")
let people=document.querySelector(".peop")
let button=document.querySelector(".score")
let mainView=document.querySelector(".view")
let conclusion=document.querySelector(".conc")

button.addEventListener("click",()=>{
    if(quanity.value=="bad"){
        let a=(Math.floor(quality.value/100)*0)
        let b=quality.value/people.value
        let c=a/people.value
        mainView.innerText=Math.trunc(c)
        conclusion.innerText=Math.trunc(b+c)
        
    }
    if(quanity.value=="fine"){
        let a=(Math.floor(quality.value/100)*5)
        let b=quality.value/people.value
        let c=a/people.value
        mainView.innerText=Math.trunc(c)
        conclusion.innerText=Math.trunc(b+c)
        
    }
    if(quanity.value=="good"){
        let a=(Math.floor(quality.value/100)*10)
        let b=quality.value/people.value
        let c=a/people.value
        mainView.innerText=Math.trunc(c)
        conclusion.innerText=Math.trunc(b+c)
        
    }
    if(quanity.value=="exc"){
        let a=(Math.floor(quality.value/100)*15)
        let b=quality.value/people.value
        let c=a/people.value
        mainView.innerText=Math.trunc(c)
        conclusion.innerText=Math.trunc(b+c)
        
    }
})

document.getElementById("clearButton").onclick = function(e){
    document.getElementById("textInput").value = ""
    document.getElementById("text").value = ""
}
