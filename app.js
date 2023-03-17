
let ans = 1
let correct = document.getElementById('correct')
correct.style.display = 'none'
let error = document.getElementById('error')
error.style.display = 'none'




function checkAns(){
    let userinput = document.getElementById('input')
    let value = userinput.value;
    let correct = document.getElementById('correct')
    
    
    if(value == ans){
        correct.style.display = 'block'
        error.style.display = 'none'
    }
    else{
        correct.style.display = 'none'
        error.style.display = 'block'
    }
}



