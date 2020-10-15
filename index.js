const Submit = document.querySelector(".Submit")
const Clear = document.querySelector(".Clear")
let Correct = 0;
let Incorrect = 0;
const ActualAnswes = ["C","D","C","B","C","A","D","B","C","B","B","D","B","A","B","B","C","A","B","C"];
const AnswersGiven = [];

Submit.addEventListener("click", function(){
    let Q1 = document.getElementsByTagName('input'); 
              
    for(let i = 0; i < Q1.length; i++) { 
        if(Q1[i].checked) {
           AnswersGiven.push(Q1[i].id)
        }
    }

    for(j=0; j<AnswersGiven.length; j++){
        if(AnswersGiven[j]===ActualAnswes[j]){
            Correct++
        }else{
            Incorrect++
        }
    }

    alert("Correct Answers: "+Correct)
    
 
})

Clear.addEventListener("click", function(){
    let Q1 = document.getElementsByTagName('input'); 
    window.location.reload();
    for(let i = 0; i < Q1.length; i++){
       Q1[i].checked = false
   }
})  

