
let question = document.querySelector(".preVal");

//question.innerHTML=88;
let result = document.querySelector(".currentVal");

let btns = document.querySelectorAll("button");

let str = "";
let buttonArr = Array.from(btns);
buttonArr.forEach(but=>{
    but.addEventListener('click',(e)=>{

    if(e.target.innerHTML == "="){
        str = eval(str);
        result.innerText= str;
    }
    else if(e.target.innerHTML == "AC"){
        str = "";
        question.innerText = str;
        result.innerText = str;
    }
    else if(e.target.innerHTML == "DEL"){
        str = str.substring(0,str.length-1);
        question.innerText = str;
    }
    else{
        str += e.target.innerHTML;
    question.innerText= str;
    }
    
}

    ) 
}
    )
   // console.log(str);

